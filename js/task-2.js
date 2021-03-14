const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const mainListRef = document.querySelector("#ingredients")
console.log(mainListRef)

for (const item of ingredients) {
  let itemRef = document.createElement("li")
  console.log(itemRef)
  itemRef.textContent = item
  mainListRef.append(itemRef)
}
console.log(mainListRef)
