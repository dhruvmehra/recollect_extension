var dialog = document.createElement("dialog")
dialog.textContent = "This is a dialog"
var button = document.createElement("button")
button.textContent = "Close"
dialog.appendChild(button)
button.addEventListener("click", function () {
  dialog.close()
})
document.body.appendChild(dialog)
dialog.showModal()
