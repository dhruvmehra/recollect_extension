console.log("Background triggered")
init = (tab) => {
  const { id, url } = tab
  chrome.scripting.executeScript({
    target: { tabId: id, allFrames: true },
    files: ["clientside.ts"]
  })
  console.log(`Loading: ${url}`)
}

chrome.action.onClicked.addListener((tab) => {
  console.log("Action clicked")

  init(tab)
})
