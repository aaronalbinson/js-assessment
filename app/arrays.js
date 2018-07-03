exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {},

  sum: function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    });
  },

  remove: function(arr, item) {
    return arr.filter(x => x != item);
  },

  removeWithoutCopy: function(arr, item) {},

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop(item);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {},

  concat: function(arr1, arr2) {},

  insert: function(arr, item, index) {},

  count: function(arr, item) {},

  duplicates: function(arr) {},

  square: function(arr) {},

  findAllOccurrences: function(arr, target) {}
};
