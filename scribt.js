let inpFile = document.getElementById("inpFile");
let btnAdd = document.getElementById("btnAdd");
let mainImg = document.getElementById("mainImg");
let rightBtn = document.getElementById("rightBtn");
let imgSlider = document.getElementById("imgSlider");
let leftBtn = document.getElementById("leftBtn");
let i = 0;
let imgs = [];

btnAdd.addEventListener("click", addImgToDiv);
rightBtn.addEventListener("click", function (e) {
  if (i === imgs.length) {
    i = 0;
  };
  mainImg.src = imgs[i++];
});
leftBtn.addEventListener("click" ,function(){

  if(i<0){
   i = imgs.length -1;
  };

  mainImg.src = imgs[i--];
})

function addImgToDiv() {
   let img = document.createElement("img");
  img.src = URL.createObjectURL(inpFile.files[0]);
  img.classList.add("imgSilderr");
  img.addEventListener("click", function () {
    mainImg.src = img.src;
  }); 
   imgSlider.appendChild(img); 
  imgs.push(URL.createObjectURL(inpFile.files[0]));
}

