let anually = true;

const d = document;
const switchItem = d.querySelector("#switch");
const switchContainer = switchItem.parentElement;

switchItem.classList.remove("translate-x-[26px]");
switchItem.classList.remove("lg:translate-x-[42px]");

switchContainer.onclick = () => {
  changePrices()
  switchItem.classList.toggle("translate-x-[26px]");
  switchItem.classList.toggle("lg:translate-x-[42px]");
  switchContainer.classList.toggle("addclases");
};

function changePrices() {
  if (!anually) {
    d.querySelector("#basic").innerHTML = "$199.99";
    d.querySelector("#profesional").innerHTML = "$249.99";
    d.querySelector("#master").innerHTML = "$399.99";
  }
  else{
    d.querySelector("#basic").innerHTML = "$19.99";
    d.querySelector("#profesional").innerHTML = "$24.99";
    d.querySelector("#master").innerHTML = "$39.99";
  }
  anually = !anually;
}
