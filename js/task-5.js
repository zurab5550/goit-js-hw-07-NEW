const inputText = document.getElementById("name-input")
const outputText = document.getElementById("name-output")

inputText.addEventListener("input", function () {
  const text = this.value
  if (text.length > 0) {
    outputText.textContent = text
  } else {
    outputText.textContent = "незнакомец"
  }
})
