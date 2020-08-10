


export const createFilmCard = ({ title, description, director, producer, releaseDate }) => {

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


    const descriptionRow = document.createElement('div');
    descriptionRow.className = "lineDiv";

    const descriptionKey = document.createElement('p');
    descriptionKey.innerText = "Description:";
    descriptionKey.className = "keySTD";

    const descriptionContent = document.createElement('p');
    descriptionContent.innerText = description;
    descriptionRow.appendChild(descriptionKey);
    descriptionRow.appendChild(descriptionContent);



    const directorRow = document.createElement('div');
    directorRow.className = "lineDiv";

    const directorKey = document.createElement('p');
    directorKey.innerText = "Director :";
    directorKey.className = "keySTD";

    const directorContent = document.createElement('p');
    directorContent.innerText = director;
    directorRow.appendChild(directorKey);
    directorRow.appendChild(directorContent);


    const producerRow = document.createElement('div');
    producerRow.className = "lineDiv";

    const producerKey = document.createElement('p');
    producerKey.innerText = "Producer :";
    producerKey.className = "keySTD";

    const producerContent = document.createElement('p');
    producerContent.innerText = producer;
    producerRow.appendChild(producerKey);
    producerRow.appendChild(producerContent);



    const releaseDateRow = document.createElement('div');
    releaseDateRow.className = "lineDiv";

    const releaseDateKey = document.createElement('p');
    releaseDateKey.innerText = "Release Date :";
    releaseDateKey.className = "keySTD";
    const releaseDateContent = document.createElement('p');
    releaseDateContent.innerText = releaseDate;
    releaseDateRow.appendChild(releaseDateKey);
    releaseDateRow.appendChild(releaseDateContent);





    newCard.append(titleRow);
    newCard.append(descriptionRow);
    newCard.append(directorRow);
    newCard.append(producerRow);
    newCard.append(releaseDateRow);


    return newCard;
}


/////////// Works! But I think Table is not comfortable for me for this problem

// export const createFilmCard = ({ title, description, director, producer, releaseDate }) => {
//     ////mihat tbody-i mej
//     const table = document.createElement("table");

//     const tbody = document.createElement("tbody");

//     const titleTr = document.createElement("tr");
//     const titleTd = document.createElement("td"); 
//     titleTd.textContent = "Title :";
//     const titleContent = document.createElement("td");
//     titleContent.textContent = title;

//     const descripTr = document.createElement("tr");
//     const descripTd = document.createElement("td");
//     descripTd.textContent = "Description :";
//     const descripContent = document.createElement("td");
//     descripContent.textContent = description;

//     const directorTr = document.createElement("tr");
//     const directorTd = document.createElement("td");
//     directorTd.textContent = "Director :";
//     const directorContent = document.createElement("td");
//     directorContent.textContent = director;

//     const producerTr = document.createElement("tr");
//     const producerTd = document.createElement("td");
//     producerTd.textContent = "Producer :";
//     const producerContent = document.createElement("td");
//     producerContent.textContent = producer;

//     const rlzDataTr = document.createElement("tr");
//     const rlzDataTd = document.createElement("td");
//     rlzDataTd.textContent = "Release Date :";
//     const rlzDataContent = document.createElement("td");
//     rlzDataContent.textContent = releaseDate;


//     titleTr.append(titleTd)
//     titleTr.append(titleContent)
//     tbody.append(titleTr)



//     descripTr.append(descripTd)
//     descripTr.append(descripContent)
//     tbody.append(descripTr);


//     directorTr.append(directorTd)
//     directorTr.append(directorContent)
//     tbody.append(directorTr);


//     producerTr.append(producerTd)
//     producerTr.append(producerContent)
//     tbody.append(producerTr);


//     rlzDataTr.append(rlzDataTd)
//     rlzDataTr.append(rlzDataContent)
//     tbody.append(rlzDataTr);



//     table.append(tbody);


//     return table;



// }
