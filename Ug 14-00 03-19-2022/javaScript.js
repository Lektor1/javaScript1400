let elements = document.getElementsByClassName("element");
// console.log(elements);

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", (event) => {
    if (elements[i].classList[1] == "selected") {
      elements[i].classList.remove("selected");
    } else {
      for (let j = 0; j < elements.length; j++) {
        elements[j].classList.remove("selected");
      }
      elements[i].classList.add("selected");
    }
  });
}

let mainImg = document.getElementById("main-img");
let imgList = document.querySelectorAll("img.list-img");

// console.log(imgList);

for(let i = 0; i < imgList.length; i++){
  imgList[i].addEventListener("click", (event)=>{
    mainImg.src = imgList[i].src;
  })
}
