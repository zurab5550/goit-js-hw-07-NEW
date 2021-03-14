const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
]

const galleryMainList = document.getElementById("gallery")
console.log(galleryMainList)

images.forEach((item) => {
  console.log(item)

  const imgElement = `<li><img src = "${item.url}" alt = "${item.alt}" width = "500", height = "500" </li>`
  galleryMainList.insertAdjacentHTML("beforeend", imgElement)
})

galleryMainList.classList.add("gallery-list")
const itemsGallaryList = galleryMainList.children
console.log(itemsGallaryList)
for (const item of itemsGallaryList) {
  item.classList.add("item-gallary-list")
}

console.log(galleryMainList)
