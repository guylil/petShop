function readMore() {
    // read more button functionality
    let maintxt = document.getElementsByClassName("main-item");
    maintxt[0].style.maxHeight = "90vh";
    let readMore = document.getElementById("read-more");
    readMore.remove();
}

function unicornSelected() {
    renderSelectedPet('Unicorn');
    window.history.pushState("Unicorn Selected", "Unicorn", "/pets/0");
}

function occamySelected() {
    renderSelectedPet('Occamy');
    window.history.pushState("Occamy Selected", "Occamy", "/pets/4");
}

function renderSelectedPet(selectedPet) {
    let pet = pets.filter(pet => pet.name === selectedPet)[0];
    let petImg = document.getElementById("pet-img");
    let petName = document.getElementById("pet-name");
    let petDesc = document.getElementById("pet-desc");

    petImg.src = pet.photoUrl;
    petName.innerText = pet.name;
    petDesc.innerText = pet.textFromWiki;
}

function getPets () { pets = JSON.parse(this.responseText); }


let pets = [];

let readMoreEl = document.getElementById("read-more");
readMoreEl.addEventListener("click", readMore);

let selectUnicornEl = document.getElementById("unicorn-selected");
selectUnicornEl.addEventListener("click", unicornSelected);
let selectOccamyEl = document.getElementById("occamy-selected");
selectOccamyEl.addEventListener("click", occamySelected);

const getPetsData = new XMLHttpRequest();
getPetsData.addEventListener("load", getPets);
const port = process.env.PORT || 3000;
getPetsData.open("Post", `http://localHost:${port}/pets`);
getPetsData.send();
