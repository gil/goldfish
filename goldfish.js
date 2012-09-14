/*
* Goldfish v0.0.1 - 2012-09-14 - https://github.com/gil/goldfish
* by André Gil (http://andregil.net/)
*
* Licensed under:
*    MIT - http://www.opensource.org/licenses/MIT
*/


RegExp.escape = function(s) {
  return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
};

var List;

List = (function() {

  function List(data) {
    var group, _i, _len, _ref;
    this.data = data;
    this.groupCount = this.data.groups.length;
    this.entryCount = 0;
    _ref = this.data.groups;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      group = _ref[_i];
      this.entryCount += group.entries.length;
    }
  }

  List.prototype.groupsBy = function(filters) {
    var filteredEntries, group, groupCopy, groups, i, _i, _j, _len, _ref, _ref1,
      _this = this;
    groups = [];
    for (i = _i = 0, _ref = filters.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      filters[i] = filters[i].toLowerCase();
    }
    _ref1 = this.data.groups;
    for (_j = 0, _len = _ref1.length; _j < _len; _j++) {
      group = _ref1[_j];
      group.list = this.data;
      filteredEntries = _.filter(group.entries, function(entry) {
        var fields, filter, _k, _len1;
        fields = [group.list.name, group.name, entry.name, entry.description].join(" ").toLowerCase();
        for (_k = 0, _len1 = filters.length; _k < _len1; _k++) {
          filter = filters[_k];
          if (fields.indexOf(filter) < 0) {
            return false;
          }
        }
        return true;
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
    this.defaultLists = ["jquery", "underscore", "backbone", "html5", "css", "jasmine", "regexp"];
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

  ListManager.prototype.search = function(filters) {
    var groups, listData, _i, _len, _ref;
    groups = [];
    _ref = this.listsData;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      listData = _ref[_i];
      groups = groups.concat(listData.groupsBy(filters));
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

  Goldfish.preventSearch = false;

  Goldfish.addList = function(data) {
    this.listManager.addList(data);
    return this._renderLists();
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
    $(document).on("keydown", this._handleKeys).on("keydown", function(e) {
      return _this.$searchInput.focus();
    });
    return this.$searchInput.on("keyup", this._handleSearch).focus();
  };

  Goldfish._handleKeys = function(e) {
    var key;
    key = e.keyCode || e.which;
    switch (key) {
      case 40:
        Goldfish._keyboardNavigate(e, "next");
        break;
      case 38:
        Goldfish._keyboardNavigate(e, "prev");
        break;
      case 13:
        Goldfish._openActiveRow();
        break;
      default:
        return;
    }
    Goldfish.preventSearch = true;
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  Goldfish._keyboardNavigate = function(e, direction) {
    var currentActive, jumpGroup, nextActive, nodeToSelect;
    jumpGroup = e.ctrlKey || e.metaKey;
    nodeToSelect = direction === "next" || jumpGroup ? "first" : "last";
    currentActive = $(".active-row").removeClass("active-row");
    nextActive = null;
    if (currentActive.length > 0) {
      nextActive = currentActive[direction](".entry-row, .list-row");
      if (jumpGroup || nextActive.length === 0) {
        nextActive = currentActive.parents(".group-row")[direction](".group-row").find(".entry-row")[nodeToSelect]();
      }
    }
    if (!nextActive || nextActive.length === 0) {
      nextActive = $(".entry-row, .list-row")[nodeToSelect]();
    }
    nextActive.addClass("active-row");
    return this._scrollToActive(nextActive);
  };

  Goldfish._scrollToActive = function(activeRow) {
    var activeHeight, activeTop, bodyScroll, windowHeight;
    if (activeRow.length > 0) {
      activeTop = activeRow.offset().top;
      activeHeight = activeRow.height();
      windowHeight = $(window).height();
      bodyScroll = $('body').scrollTop();
      if (activeTop + activeHeight > windowHeight + bodyScroll) {
        bodyScroll = activeTop - 10;
      } else if (activeTop < bodyScroll) {
        bodyScroll = activeTop - windowHeight + activeHeight + 20;
      }
      return $('body').stop().animate({
        scrollTop: bodyScroll
      }, 300);
    }
  };

  Goldfish._openActiveRow = function() {
    var openCallback;
    openCallback = $(".active-row").data("openCallback");
    if (openCallback) {
      return openCallback();
    }
  };

  Goldfish._clearScreen = function() {
    return $(".group-row, .list-row").remove();
  };

  Goldfish._handleSearch = function(e) {
    var searchText;
    if (!Goldfish.preventSearch) {
      searchText = Goldfish.$searchInput.val().trim();
      if (searchText !== "") {
        return Goldfish._search(searchText);
      } else {
        return Goldfish._renderLists();
      }
    } else {
      return Goldfish.preventSearch = false;
    }
  };

  Goldfish._search = function(searchText) {
    var entry, entryTemplate, group, groupEl, groupTemplate, highlighter, openCallback, searchFilters, _i, _j, _len, _len1, _ref, _ref1, _results;
    this._clearScreen();
    searchFilters = searchText.split(" ");
    highlighter = this._getHighlighter(searchFilters);
    groupTemplate = _.template($("#group-template").html());
    entryTemplate = _.template($("#entry-template").html());
    _ref = this.listManager.search(searchFilters);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      group = _ref[_i];
      groupEl = $(groupTemplate({
        group: group,
        highlighter: highlighter
      }));
      _ref1 = group.entries;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        entry = _ref1[_j];
        openCallback = function(entry) {
          return function() {
            if (entry.url) {
              return window.open(entry.url, "_blank");
            }
          };
        };
        $(entryTemplate({
          entry: entry,
          highlighter: highlighter
        })).data("openCallback", openCallback(entry)).on("click", openCallback(entry)).appendTo(groupEl);
      }
      _results.push($(document.body).append(groupEl));
    }
    return _results;
  };

  Goldfish._renderLists = function() {
    var list, listEl, listTemplate, openCallback, _i, _len, _ref, _results,
      _this = this;
    this._clearScreen();
    listTemplate = _.template($("#list-template").html());
    _ref = this.listManager.listsData;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      list = _ref[_i];
      openCallback = function(list) {
        return function() {
          _this.$searchInput.val(list.data.name + " ").focus();
          return _this._handleSearch();
        };
      };
      listEl = $(listTemplate({
        name: list.data.name,
        entryCount: list.entryCount,
        groupCount: list.groupCount
      })).data("openCallback", openCallback(list)).on("click", openCallback(list));
      _results.push($(document.body).append(listEl));
    }
    return _results;
  };

  Goldfish._getHighlighter = function(filters) {
    var filter, filtersRegExp, _i, _len;
    filtersRegExp = [];
    for (_i = 0, _len = filters.length; _i < _len; _i++) {
      filter = filters[_i];
      if (filter.length > 1) {
        filtersRegExp.push(new RegExp(RegExp.escape(filter), "gi"));
      }
    }
    return function(text) {
      var regExp, _j, _len1;
      for (_j = 0, _len1 = filtersRegExp.length; _j < _len1; _j++) {
        regExp = filtersRegExp[_j];
        text = text.replace(regExp, "<span class='highlight'>$&</span>");
      }
      return text;
    };
  };

  return Goldfish;

}).call(this);

$(function() {
  window.Goldfish = Goldfish;
  return Goldfish.start();
});
