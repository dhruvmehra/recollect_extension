import CSS from "csstype"
import { useEffect, useState } from "react"

import { getUrls, saveUrl } from "~firebase/db"
import { useFirebase } from "~firebase/hook"

export function Feed() {
  const [selectedText, setSelectedText] = useState("Hello")

  useEffect(() => {
    // Update the document title using the browser API
    // onSelection()
  }, [])

  const onSave = async () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url
      // Save url to firebase db
      saveUrl(user.email, url)
    })
  }

  const onSelection = async () => {
    chrome.scripting.executeScript(
      null,
      {
        code: "window.getSelection().toString();"
      },
      function (selection) {
        if (selection) {
          Alert("Selected")
        }
        setSelectedText(selection[0])
        console.log("Test")
      }
    )
  }
  return (
    <div>
      <h2>{selectedText}</h2>
      <button onClick={() => console.log("clicked")}>Show</button>
    </div>
  )
}
