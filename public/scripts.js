window.onload = () => {
  setTimeout(() => {
    // Right Side Clothing Transition
    document.getElementById("topClothing").style.top = "40%";
    document.getElementById("bottomClothing").style.top = "50%";

    // Left Side Clothing Transition
    document.getElementById("topClothingLeft").style.top = "40%";
    document.getElementById("bottomClothingLeft").style.top = "50%";
  }, 500);
};
