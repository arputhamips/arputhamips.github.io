let grid = document.getElementById("toggle");           //get display toggle
let closeBtn = document.getElementById("close-btn");     //close button
let title = document.getElementById("title");
let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let linkBtn = document.getElementById("go-to")
let gall = document.querySelector(".gallery-container");


let temp =
{ 'date5': "DATE REVEAL v5" ,
'date5img1': "/Assets/designPage/hola1.jpg",
'date5img2': "/Assets/designPage/hola2.jpg",
'date5link': "https://www.instagram.com/ceg_tech_forum/"
}



const popUp = e => {
    console.log(e.target.id);
    let tit = e.target.id;
    let i1 = e.target.id + 'img1';
    let i2 = e.target.id + 'img2';
    console.log(temp[i1],i2);
    let link = e.target.id + 'link';


    if (temp[tit] != undefined) {
        if (e.target.nodeName = 'IMG')  {
            
            title.innerHTML = temp[tit];
            img1.src = temp[i1];
            img2.src = temp[i2];
            document.body.style.overflow = 'hidden';
            gall.style.filter = 'brightness(0.5)'
            linkBtn.target = "_blank";
            linkBtn.href = temp[link];
            grid.style.display = 'block';
            
        }
    }
}







gall.addEventListener('click', popUp);




closeBtn.addEventListener('click', ()=>{
    grid.style.display = "none";
    document.body.style.overflow = 'auto';
    gall.style.filter = 'brightness(1)'
})




