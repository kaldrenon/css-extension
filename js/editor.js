// Set up a text field with syntax highlighting and line numbers for CSS edits
var textArea = document.getElementById('css-editor');
var codeMirror = CodeMirror.fromTextArea(textArea, {
  mode: 'css',
  lineNumbers: true,
  tabSize: 2,
  value: "body {\n  \n}"
});

// Configure the Apply button to pull CSS from the CodeMirror box and
// insert that CSS into the tab
apply_btn = document.getElementById('apply-css');
apply_btn.addEventListener('click', function(event) {
  cssBody = codeMirror.getValue();

  chrome.tabs.query({'active': true}, function(tabs) {
    chrome.tabs.insertCSS({
      code: cssBody
    });
    console.log(cssBody);
  });
});
