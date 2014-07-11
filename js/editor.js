apply_btn = document.getElementById('apply-css');
apply_btn.addEventListener('click', function(event) {
  cssBody = document.getElementById('css-editor').value
  chrome.tabs.query({'active': true}, function(tabs) {
    chrome.tabs.insertCSS({
      code: cssBody
    });
  });
});
