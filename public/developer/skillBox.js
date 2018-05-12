const skillBox = document.querySelector("#skillBox");
const skillDisplay = document.querySelector("#skillDisplay");

const changeDisplay = (event) => {
	skillDisplay.innerText = event.target.alt;
}

const resetDisplay = () => {
	skillDisplay.innerText = "And More!";
}


for(let i = 0; i < skillBox.childElementCount; i++){
	skillBox.children[i].addEventListener("mouseover", changeDisplay);
	skillBox.children[i].addEventListener("mouseout", resetDisplay);

}
