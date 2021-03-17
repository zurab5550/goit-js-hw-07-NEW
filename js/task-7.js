const inputFontSize = document.getElementById("font-size-control")
inputFontSize.value = "20"
const text = document.getElementById("text")

inputFontSize.addEventListener("input", function () {
  text.style.fontSize = `${this.value}px`
})

//   const prevFontSize = window.getComputedStyle(text, null).getPropertyValue("font-size")
//   const count = +this.value - 50
//   console.log(count)
//   const prevValue = Number.parseInt(prevFontSize)
//   console.log(prevValue)
//   const newValue = prevValue + count
//   console.log(newValue)
//   text.style.fontSize = `${newValue}px`
