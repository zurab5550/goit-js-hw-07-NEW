const inputField = document.getElementById("validation-input")
console.log(+inputField.dataset.length)
inputField.addEventListener("change", function () {
  if (this.value.length < +this.dataset.length || this.value.length > +this.dataset.length) {
    this.classList.add("invalid")
  } else {
    this.classList.replace("invalid", "valid")
    // this.classList.remove("invalid")
    // this.classList.add("valid")
  }
})
