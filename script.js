import cardData from './datas.json'assert{type: 'json'};
import imageCardData  from './datas.json'assert{type: 'json'};
import objChildData  from './datas.json'assert{type: 'json'};
import fdcardData  from './datas.json'assert{type: 'json'};


const cardContainer = document.getElementById("cardContainer");
const imageCardContainer = document.getElementById("imageCardContainer");

const objChildContainer = document.getElementById("objchildContainer");

const feedbackcard = document.getElementById("fdcard");

cardData.cardData.forEach((data) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const h2 = document.createElement("h2");
    h2.textContent = data.title;

    const p = document.createElement("p");
    p.textContent = data.desc;

    cardDiv.appendChild(h2);
    cardDiv.appendChild(p);

    cardContainer.appendChild(cardDiv);
});

//card with image section

imageCardData.imageCardData.forEach((data) => {
    const imageCardDiv = document.createElement("div");
    imageCardDiv.className = "imageCard";

    const img = document.createElement("img");
    img.src = data.imgSrc;
    img.alt = "card image";

    const h2 = document.createElement("h2");
    h2.textContent = data.title;

    const p = document.createElement("p");
    p.textContent = data.desc;

    imageCardDiv.appendChild(img);
    imageCardDiv.appendChild(h2);
    imageCardDiv.appendChild(p);

    imageCardContainer.appendChild(imageCardDiv);
});

//objectives section

objChildData.objChildData.forEach((data) => {
    const objChildDiv = document.createElement("div");
    objChildDiv.className = "objchild";

    const headDiv = document.createElement("div");
    headDiv.className = "head";

    const img = document.createElement("img");
    img.src = data.imgSrc;
    img.alt = "image";

    const h4 = document.createElement("h4");
    h4.textContent = data.heading;

    headDiv.appendChild(img);
    headDiv.appendChild(h4);

    const p = document.createElement("p");
    p.textContent = data.desc;

    const button = document.createElement("button");
    button.textContent = "Check Pricing";

    objChildDiv.appendChild(headDiv);
    objChildDiv.appendChild(p);
    objChildDiv.appendChild(button);

    objChildContainer.appendChild(objChildDiv);
});

//feed back section

fdcardData.fdcardData.forEach((data) => {
    const fdchild = document.createElement("div");
    fdchild.className = "fdchild";
    const stars = document.createElement("div");
     stars.className ="stars"
    //for displaying 5 stars
    for (let i = 0; i < 4; i++) {
        const starimage = document.createElement("img");
        starimage.className = "starimg";
        starimage.src = "./assets/ebddb9a4-68bf-4b7a-a873-5f43db3f1526.png";
        starimage.alt = "star Rating image";
        stars.appendChild(starimage);
      }
      

    const fdnamediv = document.createElement("div");
    fdnamediv.className = "fdnamediv";
    const fdchildhead = document.createElement("div");
    fdchildhead.className = "fdchildhead";
    const profileimg = document.createElement("img")
    profileimg.className ="profileimg";
    profileimg.alt ="profile image";
    profileimg.src =data.imgsrc;

    const name = document.createElement("h6");
    name.className ="name";
    name.textContent = data.name;
    
    const pos = document.createElement("p");
    pos.className ="pos";
    pos.textContent = data.pos;
    const desc = document.createElement("p");
    desc.textContent = data.desc;

      fdchild.appendChild(stars);
    fdchildhead.appendChild(profileimg);
  
    fdnamediv.appendChild(name);
    
    fdnamediv.appendChild(pos);
    
    fdchildhead.appendChild(fdnamediv);
    
    fdchild.appendChild(fdchildhead);
    
    fdchild.appendChild(desc);

    feedbackcard.appendChild(fdchild)
})