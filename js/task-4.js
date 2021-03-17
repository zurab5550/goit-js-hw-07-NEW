let counterValue = 0

const counterContainer = document.getElementById("counter")
const valueCounter = document.getElementById("value")
const buttonDecrement = counterContainer.querySelector("[data-action=decrement]")
const buttonIncrement = counterContainer.querySelector("[data-action=increment]")

buttonDecrement.addEventListener("click", function () {
  counterValue -= 1
  valueCounter.textContent = counterValue

  //   const currentValue = +valueCounter.textContent
  //   valueCounter.textContent = currentValue - 1
})

buttonIncrement.addEventListener("click", function () {
  counterValue += 1
  valueCounter.textContent = counterValue
})
