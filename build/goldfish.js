/*
* Goldfish v0.0.1 - 2012-09-05 - https://github.com/gil/goldfish
* by André Gil (http://andregil.net/)
*
* Licensed under:
*    MIT - http://www.opensource.org/licenses/MIT
*/

var List;

List = (function() {

  function List(data) {
    this.data = data;
  }

  List.prototype.groupsBy = function(filter) {
    var filteredEntries, group, groupCopy, groups, matches, _i, _len, _ref,
      _this = this;
    groups = [];
    filter = $.trim(filter.toLowerCase());
    matches = function(field) {
      return field.toLowerCase().indexOf(filter) > -1;
    };
    _ref = this.data.groups;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      group = _ref[_i];
      group.list = this.data;
      filteredEntries = _.filter(group.entries, function(entry) {
        return matches(group.name) || matches(entry.name) || matches(entry.description);
      });
      if (filteredEntries.length > 0) {
        groupCopy = _.clone(group);
        groupCopy.entries = filteredEntries;
        groups.push(groupCopy);
      }
    }
    return groups;
  };

  return List;

})();

var ListManager;

ListManager = (function() {

  function ListManager() {
    this.listsData = [];
    this.defaultLists = amplify.store("lists");
    if (!this.defaultLists) {
      this.defaultLists = ["jquery", "underscore", "backbone", "jasmine", "regexp"];
      amplify.store("lists", this.defaultLists);
    }
  }

  ListManager.prototype.loadLists = function() {
    var list, script, _i, _len, _ref, _results;
    _ref = this.defaultLists;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      list = _ref[_i];
      script = $("<script/>").attr("src", "lists/" + list + ".js");
      _results.push($("head")[0].appendChild(script[0]));
    }
    return _results;
  };

  ListManager.prototype.addList = function(listData) {
    return this.listsData.push(new List(listData));
  };

  ListManager.prototype.search = function(filter) {
    var groups, listData, _i, _len, _ref;
    groups = [];
    _ref = this.listsData;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      listData = _ref[_i];
      groups = groups.concat(listData.groupsBy(filter));
    }
    return groups;
  };

  return ListManager;

})();

var Goldfish;

Goldfish = (function() {

  function Goldfish() {}

  Goldfish.elements = {
    searchInput: ".search-input"
  };

  Goldfish.addList = function(data) {
    return this.listManager.addList(data);
  };

  Goldfish._readElements = function() {
    var elementName, _results;
    _results = [];
    for (elementName in this.elements) {
      _results.push(this["$" + elementName] = $(this.elements[elementName]));
    }
    return _results;
  };

  Goldfish.start = function() {
    var _this = this;
    this.listManager = new ListManager();
    this.listManager.loadLists();
    this._readElements();
    this.$searchInput.on("keyup", this._search).focus();
    this.$searchInput.val(" ");
    return setTimeout(function() {
      return _this._search();
    }, 300);
  };

  Goldfish._search = function(e) {
    var entry, entryEl, entryTemplate, group, groupEl, groupTemplate, searchFilter, _i, _j, _len, _len1, _ref, _ref1;
    $(".group-row").remove();
    searchFilter = Goldfish.$searchInput.val();
    groupTemplate = _.template($("#group-template").html());
    entryTemplate = _.template($("#entry-template").html());
    if (searchFilter.length > 0) {
      _ref = Goldfish.listManager.search(searchFilter);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        group = _ref[_i];
        groupEl = $(groupTemplate({
          group: group
        }));
        _ref1 = group.entries;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          entry = _ref1[_j];
          entryEl = $(entryTemplate({
            entry: entry
          }));
          entryEl.data("entry", entry);
          groupEl.append(entryEl);
        }
        $(document.body).append(groupEl);
      }
    }
    $(".entry-row").on("click", function(e) {
      return window.open($(e.currentTarget).data("entry").url, "_blank");
    });
    return searchFilter;
  };

  return Goldfish;

}).call(this);

$(function() {
  window.Goldfish = Goldfish;
  return Goldfish.start();
});
