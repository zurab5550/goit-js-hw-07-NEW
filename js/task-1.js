const categoriesList = document.querySelectorAll("#categories .item")
console.log(`В списке ${categoriesList.length} категории`)
const deleteDrops = document.querySelectorAll("li")
deleteDrops.forEach((item) => (item.style.listStyle = "none"))

categoriesList.forEach((item) =>
  console.log(
    `Категория: ${item.firstElementChild.textContent} \nКоличество элементов: ${item.lastElementChild.children.length}`
  )
)

// const getValuesAndCategories = function (array) {
//   array.forEach((item) =>
//     console.log(
//       `Категория: ${item.firstElementChild.textContent} \nКоличество элементов: ${item.lastElementChild.children.length}`
//     )
//   )
// }

// getValuesAndCategories(categoriesList)
