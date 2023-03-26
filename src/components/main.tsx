import CSS from "csstype"
import { useEffect, useState } from "react"

import { getUrls, saveUrl } from "~firebase/db"
import { useFirebase } from "~firebase/hook"

const srcList = Array.from({
  length: 3
}).map((_, i) => chrome.runtime.getURL(`assets/img${i}.png`))

export function Main() {
  const { user, isLoading, onLogin, onLogout } = useFirebase()
  const [userURLs, setUserURLs] = useState("Null")

  const onSave = async () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url
      // Save url to firebase db
      saveUrl(user.email, url)
    })
  }

  const renderSavedUrls = () => {
    let data = getUrls(user.email)
    setUserURLs([1, 2, 3])
  }

  // let img_url = chrome.extension.getURL("/img.jpg") // absolute path

  useEffect(() => {
    // renderSavedUrls()
  })

  // Styling
  const button_style: CSS.Properties = {
    backgroundColor: "rgba(38, 124, 211, 1)",
    color: "rgba(255, 255, 255, 1)",
    paddingVertical: 300,
    position: "relative",
    height: 50,
    width: 100,
    top: 20,
    fontFamily: "sans-serif",
    fontColor: "rgba(255, 255, 255, 1)",
    fontSize: "1rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    borderRadius: 4,
    minWidth: "30%"
  }
  const save_button_style: CSS.Properties = {
    backgroundColor: "rgba(0, 153, 0, 1)",
    color: "rgba(255, 255, 255, 1)",
    paddingVertical: 300,
    position: "relative",
    height: 30,
    width: 300,
    fontFamily: "sans-serif",
    fontSize: "1rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    borderRadius: 4,
    minWidth: "30%"
  }

  const header_style: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.85)"
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        height: 300,
        width: 300
      }}>
      <div style={header_style}>
        <h1>Welcome to your Bisket! {!user ? "" : user.displayName}</h1>
        {!user ? (
          <button style={button_style} onClick={() => onLogin()}>
            Log in
          </button>
        ) : (
          <button style={button_style} onClick={() => onLogout()}>
            Log out
          </button>
        )}
      </div>

      <div>
        {isLoading ? "Loading..." : ""}
        {!!user ? (
          <div>
            <p>
              <button style={save_button_style} onClick={() => onSave()}>
                Click to save current tab
              </button>
            </p>

            <p>Your list:</p>
            {srcList.map((src, i) => (
              <img
                height="300"
                width="300"
                key={i}
                src={src}
                style={{ width: 44, height: 44 }}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
