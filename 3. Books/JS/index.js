import { doGet } from "./request.helper.js";
import { routes } from "./routes.helper.js";
import { createBookCard } from "./dom.helper.js";

// import { PaginationButton } from "./dom.helper.js"

const input = document.querySelector(".inp");
const searchBtn = document.querySelector(".searchBtn");
const dataContainer = document.querySelector('.data_container');

const paginationList = document.querySelector('.pagination_list');
const totalFoundTxt = document.querySelector('.num_found');
const loadingImg = document.querySelector('.loading_img');
const currentPage = document.querySelector('.currentPage');


const state = {
    bookName: "",
};

input.addEventListener('input', ({ target: { value } }) => {
    if (value.trim() !== '') {
        state.bookName = value;
    };
});


searchBtn.addEventListener("click", () => {
    getBook(state.bookName);
    // loadingImg.style.display = "block";
    totalFoundTxt.style.display = "block";


});

const renderBook = ({ title, author_name, first_publish_year, subject }) => {
    const card = createBookCard({ title, authorName: author_name, firstPub: first_publish_year, subject });
    dataContainer.append(card);
}



const renderPageNumber = (numFound) => {
    paginationList.innerHTML = "";
    let page_count = Math.ceil(numFound / 100);
    for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i);
        paginationList.append(btn);
    };
};

const PaginationButton = (page) => {    //// move to  dom.helper
    let button = document.createElement('button');
    button.innerText = page;
    button.classList.add('page_btn');

    button.addEventListener('click', (e) => {
        let currentPageNumber = e.target.innerText;
        currentPage.style.display = "block"
        currentPage.innerText = `Page: ${currentPageNumber}`;
        button.classList.add('page_btn_active');
        getBook(state.bookName, currentPageNumber);
    })

    return button;

}

const getBook = async (name, page) => {

    const url =
        !page ? routes.getBookData(name) : routes.changePage(name, page);


    dataContainer.innerHTML = "Loading...";
    loadingImg.style.display = "block";


    try {
        const books = await doGet(url);

        loadingImg.style.display = "none";
        dataContainer.innerHTML = "";
        totalFoundTxt.innerText = `Total Found:${books.numFound}`;

        renderPageNumber(books.numFound);
        books.docs.forEach(renderBook);

    } catch (err) {
        console.log(err);
    }
};

getBook(state.bookName);

