

function openNav(){

    var q = window.matchMedia("(max-width: 560px)")
    if (q.matches){
        if(document.getElementById("nav-ele1").style.display == "none"){
            document.getElementById("nav-bar").style.height = "100%"
            document.getElementById("nav-ele1").style.display = "block"
            document.getElementById("nav-ele2").style.display = "block"
            document.getElementById("nav-ele3").style.display = "block"
        }else {
            closeNav()
        }
    }
}

function closeNav(){
    var q = window.matchMedia("(max-width: 560px)")
    if (q.matches){
        document.getElementById("nav-bar").style.height = "0"
        document.getElementById("nav-ele1").style.display = "none"
        document.getElementById("nav-ele2").style.display = "none"
        document.getElementById("nav-ele3").style.display = "none"
    }
}




