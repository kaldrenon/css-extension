function save_snippet() {
  newSnippet = {
    title: document.getElementById('snippet-title').innerText,
    body:  document.getElementById('snippet-body').innerText
  }
  snippets = chrome.storage.sync.get({
    snippets: []
  },
  function(savedItems) {
    snippetArray = savedItems.snippets + newSnippet
    chrome.storage.sync.set({
      snippets: snippetArray
    });
  });
}

function new_snippet() {

}

function load_snippets() {
  var snippetList = document.getElementById('snippet-list');
  snippetList.innerHTML = ''

  chrome.storage.sync.get({
    snippets: [{ title: 'test', body: 'test body' }]
  },
  function(savedItems) {
    for(snip in savedItems.snippets) {
      snippetList.innerHTML.appendChild('<li>' + snip['title'] + '</li>');
    }
  });
}

document.addEventListener('DOMContentLoaded', load_snippets);
saveButton = document.getElementById('snippet-save');
saveButton.addEventListener('click', save_snippet);
