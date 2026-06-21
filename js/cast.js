const characters = [

{
    name: "キャラ１",
    image: "images/placeholder.jpg",
    description: "キャラ１説明文"
},

{
    name: "キャラ2",
    image: "images/placeholder.jpg",
    description: "キャラ2説明"
},

{
    name: "キャラ3",
    image: "images/placeholder.jpg",
    description: "キャラ3説明"
},

{
    name: "キャラ4",
    image: "images/placeholder.jpg",
    description: "キャラ4説明"
},

{
    name: "キャラ5",
    image: "images/placeholder.jpg",
    description: "キャラ5説明"
},

{
    name: "キャラ6",
    image: "images/placeholder.jpg",
    description: "キャラ6説明"
},

{
    name: "キャラ7",
    image: "images/placeholder.jpg",
    description: "キャラ7説明"
},

{
    name: "キャラ8",
    image: "images/placeholder.jpg",
    description: "キャラ8説明"
},

{
    name: "キャラ9",
    image: "images/placeholder.jpg",
    description: "キャラ9説明"
},

{
    name: "キャラ10",
    image: "images/placeholder.jpg",
    description: "キャラ10説明"
},

{
    name: "キャラ11",
    image: "images/placeholder.jpg",
    description: "キャラ11説明"
},

{
    name: "キャラ12",
    image: "images/placeholder.jpg",
    description: "キャラ12説明"
},

{
    name: "キャラ13",
    image: "images/placeholder.jpg",
    description: "キャラ13説明"
},

{
    name: "キャラ14",
    image: "images/placeholder.jpg",
    description: "キャラ14説明"
},

{
    name: "キャラ15",
    image: "images/placeholder.jpg",
    description: "キャラ15説明"
},

{
    name: "キャラ16",
    image: "images/placeholder.jpg",
    description: "キャラ16説明"
},

{
    name: "キャラ17",
    image: "images/placeholder.jpg",
    description: "キャラ17説明"
},

{
    name: "キャラ18",
    image: "images/placeholder.jpg",
    description: "キャラ18説明"
},

{
    name: "キャラ19",
    image: "images/placeholder.jpg",
    description: "キャラ19説明"
},

{
    name: "キャラ20",
    image: "images/placeholder.jpg",
    description: "キャラ20説明"
},

{
    name: "キャラ21",
    image: "images/placeholder.jpg",
    description: "キャラ21説明"
},

{
    name: "キャラ22",
    image: "images/placeholder.jpg",
    description: "キャラ22説明"
},

{
    name: "キャラ23",
    image: "images/placeholder.jpg",
    description: "キャラ23説明"
},

{
    name: "キャラ24",
    image: "images/placeholder.jpg",
    description: "キャラ24説明"
},

{
    name: "キャラ25",
    image: "images/placeholder.jpg",
    description: "キャラ25説明"
},

{
    name: "キャラ26",
    image: "images/placeholder.jpg",
    description: "キャラ26説明"
},

{
    name: "キャラ27",
    image: "images/placeholder.jpg",
    description: "キャラ27説明"
},

{
    name: "キャラ28",
    image: "images/placeholder.jpg",
    description: "キャラ28説明"
},

{
    name: "キャラ29",
    image: "images/placeholder.jpg",
    description: "キャラ29説明"
},

{
    name: "キャラ30",
    image: "images/placeholder.jpg",
    description: "キャラ30説明"
}

];

const castGrid = document.getElementById("cast-grid");

characters.forEach(character => {

    const card = document.createElement("div");

    card.className = "cast-card";

    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
    `;

    card.onclick = () => {
        openCharacter(
            character.name,
            character.description,
            character.image
        );
    };

    castGrid.appendChild(card);

});

function openCharacter(name, description, image){

    document.getElementById("modal-name").textContent = name;

    document.getElementById("modal-description").textContent = description;

    document.getElementById("modal-image").src = image;

    document.getElementById("character-modal").style.display = "flex";
}

function closeCharacter(){

    document.getElementById("character-modal").style.display = "none";
}