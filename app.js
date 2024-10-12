const indexPics = document.getElementsByClassName("indexImages");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;

//nextButton.addEventListener("click", goNext)

//backButton.addEventListener("click", goBack)

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
let fullProgressBar = document.getElementsByClassName("fullProgressBar")
let pageName = document.getElementsByTagName("title")
let progress = 0


let i = 0
emptyProgressBar[i].addEventListener("click", () =>{
    if (pageName[i].innerText == "My Hero Academia"){
        progress = 63
    } else {
        progress = 25
    }

    emptyProgressBar[i].classList.toggle("fullProgressBar")
    emptyProgressBar[i].classList.remove("emptyProgressBar")
    
    fullProgressBar[i].innerHTML = ''
    fullProgressBar[i].style.background = `linear-gradient(to right, green ${progress}%, floralwhite 0%)`
    fullProgressBar[i].style.transitionDuration = "3s"
    i++
})