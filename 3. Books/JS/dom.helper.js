export const createBookCard = ({ title, authorName, firstPub, subject }) => {

    const newCard = document.createElement('div');
    newCard.className = "cardPrototype";




    const titleRow = document.createElement('div');
    titleRow.className = "lineDiv";

    const titleKey = document.createElement('p');
    titleKey.innerText = "Title :";
    titleKey.className = "keySTD";

    const titleContent = document.createElement('p');
    titleContent.innerText = title;
    titleRow.appendChild(titleKey);
    titleRow.appendChild(titleContent);


    const authorNameRow = document.createElement('div');
    authorNameRow.className = "lineDiv";

    const authorNameKey = document.createElement('p');
    authorNameKey.innerText = "Author Name:";
    authorNameKey.className = "keySTD";

    const authorNameContent = document.createElement('p');
    authorNameContent.innerText = authorName;
    authorNameRow.appendChild(authorNameKey);
    authorNameRow.appendChild(authorNameContent);



    const firstPubRow = document.createElement('div');
    firstPubRow.className = "lineDiv";

    const firstPubKey = document.createElement('p');
    firstPubKey.innerText = "First Publish Year :";
    firstPubKey.className = "keySTD";

    const firstPubContent = document.createElement('p');
    firstPubContent.innerText = firstPub;
    firstPubRow.appendChild(firstPubKey);
    firstPubRow.appendChild(firstPubContent);


    const subjectRow = document.createElement('div');
    subjectRow.className = "lineDiv";

    const subjectKey = document.createElement('p');
    subjectKey.innerText = "Subject :";
    subjectKey.className = "keySTD";

    const subjectContent = document.createElement('p');
    subjectContent.innerText = subject;
    subjectRow.appendChild(subjectKey);
    subjectRow.appendChild(subjectContent);


    newCard.append(titleRow);
    newCard.append(authorNameRow);
    newCard.append(firstPubRow);
    newCard.append(subjectRow);


    return newCard;
}


// export const PaginationButton = (page) => {
//     let button = document.createElement('button');
//     button.innerText = page;
//     button.classList.add('page_btn');

//     button.addEventListener('click', (e) => {
//         let currentPageNumber = e.target.innerText;
//         console.log(currentPageNumber);
//         getBook(state.bookName, currentPageNumber);
//         // button.classList.add('page_btn_active')
//     })

//     return button;

// }