const options = document.querySelectorAll(".option_image")
const mainImage = document.querySelector(".main_image")
const circle = document.querySelector(".circle")

let swatch = ["#eb7495", "#017143", "#d752b1"]

options.forEach((image, index) => {
  image.addEventListener("click", () => {
    mainImage.attributes[0].value = image.attributes[0].value
    circle.style.background = swatch[index]
  })
})
