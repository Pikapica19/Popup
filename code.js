const btn = document.querySelector("#btn");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

btn.addEventListener("click", openModel);
popup.addEventListener("click", closeModel);
close.addEventListener("click", closeModel);

// popup.addEventListener("click", (e) => {
//   const evt = e.target.classList;
//   if (evt.contains("popup") || evt.contains("close")) {
//     closeModal();
//   }
// });

function openModel(e){
  e.preventDefault();
  popup.style.display = "block";
}

function closeModel(){
  popup.style.display = "none";
}



