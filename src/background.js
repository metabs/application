chrome.browserAction.onClicked.addListener(function() {
  debugger;
  chrome.tabs.create({url: chrome.runtime.getURL('index.html')});
});
