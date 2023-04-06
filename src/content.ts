import { computePosition } from "@floating-ui/dom"
import { createPopper } from "@popperjs/core"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

// import "./content.css"

const getSelected = () => window.getSelection()

// Popover
const genPopover = () => {
  // popover
  var popover = document.createElement("div")
  popover.setAttribute("id", "pop")
  //   popperArrow.setAttribute("data-popper-arrow", "")
  //   popover.className = "tooltip"
  popover.textContent = "Select an action: "
  popover.role = "pop"
  popover.style.position = "inherit"
  popover.style.zIndex = "99999999"
  popover.style.backgroundColor = "red"
  //   popover.style.transform = "translate3d(10px,100px,0)"
  //   popover.setAttribute("inset", "10px")
  //   popover.style.left = pos.left + "px"
  //   popover.style.top = pos.top + "px"
  //   popover.style.display = "block"
  console.log("pop", popover)
  return popover
}

// get popover position
const getPos = () => {
  // selected text html element
  var sel = window.getSelection()
  const pos = sel.getRangeAt(0).getBoundingClientRect()
  console.log("selection pos", pos)
  return pos
}

// create and append a button
getButton = () => {
  var _button = document.createElement("button")
  _button.data = "hi"
  _button.innerHTML = "Save"
  _button.onclick = function () {
    alert("here be dragons")
    return false
  }
  _button.style.marginLeft = "10px"
  return _button
}
const showPopover = () => {
  // Create popper
  popover = genPopover()

  // popper
  document.body.appendChild(popover)

  // Style popover

  popover.style.cssText =
    "position:fixed;background-color: #292929;color: white;width:220px;height:40px;-moz-border-radius:100px;border:1px  solid #ddd;-moz-box-shadow: 0px 0px 8px  #fff;display: flex;align-items: center;padding: 10px;"
  popover.role = "tooltip"

  // Relocate popover
  pos = getPos()
  popover.style.left = pos.x + "px"
  popover.style.top = pos.y - 50 + "px"

  // Add button
  var btn = getButton()
  popover.appendChild(btn)
  //   console.log(document.body.contains(popover))
}

// Listener
document.addEventListener("click", async () => {
  if (document.getElementById("pop")) {
    document.getElementById("pop").remove()
  }
  if (getSelected().toString().length > 0) {
    showPopover()
    // console.log(getSelected().toString())
  } else {
    // Console log edge cases

    console.log("Edge")
  }
})
