///import
///div container maybe
import { doGet } from "./request.helper.js";
import { routes } from "./routes.helper.js";
import { createFilmCard } from "./dom.helper.js"

const container = document.querySelector('.container');


const renderFilms = ({ title, description, director, producer, release_date }) => {
    const row = createFilmCard({ title, description, director, producer, releaseDate: release_date });

    console.log(row);
    container.append(row);
}

const getFilmData = () => {
    const url = routes.getAllFilms();

    return doGet(url)
        .then((r) => {

            return r;
        })
        .then((r) => {
            r.forEach(renderFilms);
        })
        .catch((err) => {
            console.log(err)
        });
};


getFilmData();

