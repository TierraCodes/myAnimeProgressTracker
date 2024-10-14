const indexPics = document.getElementsByClassName("indexImages");
let currentIndex = 0;

function goNext(){
    indexPics[currentIndex].setAttribute("id","pic5");
    currentIndex++
    if (currentIndex>=indexPics.length){
        currentIndex = 0;
    }
    indexPics[currentIndex].setAttribute("id","pic1");
    return
}

function goBack(){
    indexPics[currentIndex].setAttribute("id", "pic2");
    currentIndex--
    if (currentIndex<0){
        currentIndex = indexPics.length-1;
    }
    indexPics[currentIndex].setAttribute("id","pic1");
}

let emptyProgressBar = document.getElementsByClassName("emptyProgressBar")
let pageName = document.getElementsByTagName("title")
let progress = 0
let i = 0

emptyProgressBar[i].addEventListener("click", () =>{
    if (pageName[i].innerText == "My Hero Academia"){
        progress = 63
    } else if(pageName[i].innerText == "Attack on Titan"){
        progress = 100
    } else if(pageName[i].innerText == "Horimiya"){
        progress = 100
    } else if(pageName[i].innerText == "From Me to You"){
        progress = 98
    } else if(pageName[i].innerText == "Saiki K"){
        progress = 48
    } else {
        progress = 0
    }
    
    emptyProgressBar[i].innerHTML = `${progress}%`
    emptyProgressBar[i].style.transitionDuration = "10s"
    emptyProgressBar[i].style.background = `linear-gradient(to right, green ${progress}%, floralwhite 0%)`
})