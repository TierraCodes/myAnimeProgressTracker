let indexPics = document.getElementsByClassName("indexImages");
let backButton = document.getElementById("backButton");
let nextButton = document.getElementById("nextButton");
let currentIndex = 0;

nextButton.addEventListener("click", goNext)

backButton.addEventListener("click", goBack)

function goNext(){
    indexPics[currentIndex].setAttribute("id","pic5");
    currentIndex++
    if (currentIndex>=indexPics.length){
        currentIndex = 0;
    }
    indexPics[currentIndex].setAttribute("id","pic1");
}

function goBack(){
    indexPics[currentIndex].setAttribute("id", "pic2");
    currentIndex--
    if (currentIndex<0){
        currentIndex = indexPics.length-1;
    }
    indexPics[currentIndex].setAttribute("id","pic1");
}

let progressBar = document.getElementById("progressBar")

progressBar.background.addEventListener("click", showProgress);

function showProgress(){
    let progress = 62.66
    progressBar.style.background = `linear-gradient(green ${progress}%, floralwhite ${100-progress}%)`
}