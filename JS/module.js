let grid = document.getElementById("toggle");           //get display toggle
let closeBtn = document.getElementById("close-btn");     //close button
let title = document.getElementById("title");
let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let linkBtn = document.getElementById("go-to")
let gall = document.querySelector(".gallery-container");


let temp =
{ 'tes': "TESLA" ,
'tesimg1': "/Assets/designPage/Marketing/1.TESLA.jpg",
'tesimg2': "/Assets/designPage/Marketing/1.TESLA CONTENT SLIDE.jpg",
'teslink': "https://www.instagram.com/p/CoMCFxsSbit/?igsh=aDI3czE2YnFhMTEx",

'nike': "NIKE" ,
'nikeimg1': "/Assets/designPage/Marketing/2.NIKE.jpg",
'nikeimg2': "/Assets/designPage/Marketing/2.NIKE CONTENT.jpg",

'mcd': "McDONALD'S" ,
'mcdimg1': "/Assets/designPage/Marketing/3.MCD.jpg",
'mcdimg2': "/Assets/designPage/Marketing/3.MCD CONTENT.jpg",

'coke': "COCA-COLA" ,
'cokeimg1': "/Assets/designPage/Marketing/4.COKE.jpg",
'cokeimg2': "/Assets/designPage/Marketing/4.COKE CONTENT.jpg",

'bull': "RED BULL" ,
'bullimg1': "/Assets/designPage/Marketing/5. RED BULL.jpg",
'bullimg2': "/Assets/designPage/Marketing/5. RED BULL CONTENT.jpg",

'spot': "SPOTIFY" ,
'spotimg1': "/Assets/designPage/Marketing/6. SPOTIFY.jpg",
'spotimg2': "/Assets/designPage/Marketing/6. SPOTIFY CONTENT.jpg",

'amul': "AMUL" ,
'amulimg1': "/Assets/designPage/Marketing/9. AMUL.jpg",
'amulimg2': "/Assets/designPage/Marketing/9. AMUL CONTENT.jpg",

'dom': "DOMINO'S PIZZA" ,
'domimg1': "/Assets/designPage/Marketing/7. DOMINOS.jpg",
'domimg2': "/Assets/designPage/Marketing/7. DOMINOS CONTENT.jpg",

'bmw': "DOMINO'S PIZZA" ,
'bmwimg1': "/Assets/designPage/Marketing/8. BMW MAIN SLIDE.jpg",
'bmwimg2': "/Assets/designPage/Marketing/8. BMW CONTENT.jpg",

'voda': "DOMINO'S PIZZA" ,
'vodaimg1': "/Assets/designPage/Marketing/10. VODAFONE MAIN SLIDE.jpg",
'vodaimg2': "/Assets/designPage/Marketing/10. VODAFONE CONTENT.jpg",





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
            grid.style.display = 'block';
            if (temp[link] != undefined){
                linkBtn.href = temp[link];
                linkBtn.target = "_blank";
                linkBtn.style.display = "block";
            }else{
                linkBtn.style.display = "none";

             }
               
        }
    }
}







gall.addEventListener('click', popUp);




closeBtn.addEventListener('click', ()=>{
    grid.style.display = "none";
    document.body.style.overflow = 'auto';
    gall.style.filter = 'brightness(1)';
})




