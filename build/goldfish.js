/*
* Goldfish v0.0.1 - 2012-09-06 - https://github.com/gil/goldfish
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

  Goldfish.addList = function(data) {
    this.listManager.addList(data);
    return this.preventSearch = false;
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
    this.$searchInput.on("keydown", this._handleKeys).on("keyup", this._search).focus();
    this.$searchInput.val(" ");
    return setTimeout(function() {
      return _this._search();
    }, 300);
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
        Goldfish._openActiveEntry();
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
    nodeToSelect = direction === "next" ? "first" : "last";
    currentActive = $(".active-entry").removeClass("active-entry");
    nextActive = null;
    if (currentActive.length > 0) {
      nextActive = currentActive[direction](".entry-row");
      if (jumpGroup || nextActive.length === 0) {
        nextActive = currentActive.parents(".group-row")[direction](".group-row").find(".entry-row")[nodeToSelect]();
      }
      nextActive.addClass("active-entry");
    } else {
      nextActive = $(".entry-row")[nodeToSelect]().addClass("active-entry");
    }
    return this._scrollToActive(nextActive);
  };

  Goldfish._scrollToActive = function(activeEntry) {
    var activeHeight, activeTop, bodyScroll, windowHeight;
    if (activeEntry.length > 0) {
      activeTop = activeEntry.offset().top;
      activeHeight = activeEntry.height();
      windowHeight = $(window).height();
      bodyScroll = $('body').scrollTop();
      if (activeTop > windowHeight + bodyScroll) {
        bodyScroll = activeTop - 10;
      } else if (activeTop < bodyScroll) {
        bodyScroll = activeTop - windowHeight + activeHeight + 20;
      }
      return $('body').stop().animate({
        scrollTop: bodyScroll
      }, 300);
    }
  };

  Goldfish._openActiveEntry = function() {
    var activeEntryData;
    activeEntryData = $(".active-entry").data("entry");
    if (activeEntryData && activeEntryData.url) {
      return window.open(activeEntryData.url, "_blank");
    }
  };

  Goldfish._search = function(e) {
    var entry, entryEl, entryTemplate, group, groupEl, groupTemplate, highlighter, searchFilters, _i, _j, _len, _len1, _ref, _ref1;
    if (!Goldfish.preventSearch) {
      $(".group-row").remove();
      searchFilters = Goldfish.$searchInput.val().trim().split(" ");
      highlighter = Goldfish._getHighlighter(searchFilters);
      groupTemplate = _.template($("#group-template").html());
      entryTemplate = _.template($("#entry-template").html());
      if (searchFilters.length > 0) {
        _ref = Goldfish.listManager.search(searchFilters);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          group = _ref[_i];
          groupEl = $(groupTemplate({
            group: group,
            highlighter: highlighter
          }));
          _ref1 = group.entries;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            entry = _ref1[_j];
            entryEl = $(entryTemplate({
              entry: entry,
              highlighter: highlighter
            }));
            entryEl.data("entry", entry);
            groupEl.append(entryEl);
          }
          $(document.body).append(groupEl);
        }
      }
      return $(".entry-row").on("click", function(e) {
        return window.open($(e.currentTarget).data("entry").url, "_blank");
      });
    } else {
      return Goldfish.preventSearch = false;
    }
  };

  Goldfish._getHighlighter = function(filters) {
    return function(text) {
      var filter, _i, _len;
      for (_i = 0, _len = filters.length; _i < _len; _i++) {
        filter = filters[_i];
        if (filter.length > 1) {
          text = text.split(filter).join("<span class='highlight'>" + filter + "</span>");
        }
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
