import CSS from "csstype"
import { useEffect, useState } from "react"

import { getUrls, saveUrl } from "~firebase/db"
import { useFirebase } from "~firebase/hook"

import { Feed } from "./feed"

const srcList = Array.from({
  length: 3
}).map((_, i) => chrome.runtime.getURL(`assets/pic${i}.png`))

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
    paddingVertical: 0,
    position: "absolute",
    height: 22,
    width: 70,
    right: 20,
    fontFamily: "sans-serif",
    fontColor: "rgba(255, 255, 255, 1)",
    fontSize: ".8rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    minWidth: "25%"
  }

  const header_container_style: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: 300,
    backgroundColor: "rgba(240, 240, 240, 0.85)"
  }

  const extentsion_container_style: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    height: 500,
    width: 300,
    backgroundColor: "rgba(255, 255, 255, 0.85)"
  }

  return (
    <div style={extentsion_container_style}>
      <div style={header_container_style}>
        {/* <h2>Hello {!user ? "" : user.displayName}</h2> */}
        <img
          src={"assets/logo.svg"}
          style={{ width: 80, height: 40, top: 10 }}
        />
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
      <Feed />
    </div>
  )
}
