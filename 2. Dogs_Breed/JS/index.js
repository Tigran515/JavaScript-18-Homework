import { doGet } from "./request.helper.js";
import { routes } from "./routes.helper.js";



const selected = document.querySelector('#dog');
const notSelected = document.querySelector('#ns');
const imgSrc = document.querySelector('#imageSRC');

console.log(notSelected);

const state = {
    dogBreed: "",
};

selected.addEventListener('input', () => {
    console.log(selected.options[selected.selectedIndex].value);
    state.dogBreed = selected.options[selected.selectedIndex].value;
    getImage(state.dogBreed);
});

const renderDogImage = ({ message }) => {
    let index = message.length;
    let random = Math.floor(Math.random() * index);
    imgSrc.src = message[random];
}



const getImage = async (name) => {
    const url =
        routes.getDogBybreed(name);


    try {
        const dogs = await doGet(url);
        console.log(dogs);
        renderDogImage(dogs)
    } catch (err) {
        console.log(err);
    }
};

getImage(state.dogBreed);