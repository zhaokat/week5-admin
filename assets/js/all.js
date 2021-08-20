"use strict";

$(document).ready(function () {
  ClassicEditor.create(document.querySelector('#editor')).then(function (editor) {
    console.log(editor);
  })["catch"](function (error) {
    console.error(error);
  });
});
//# sourceMappingURL=all.js.map
