let indexPics = document.getElementsByClassName("indexImages");
let backButton = document.getElementById("backButton");
let nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", ()=>{
    console.log(indexPics[0].id);
})

backButton.addEventListener("click", ()=>{
    console.log(indexPics[0].id);
})

function goNext(){
    if (indexPics[0].id==="pic1"){
        indexPics[0].setAttribute("id", "pic4");
        indexPics[1].setAttribute("id", "pic1");
        indexPics[2].setAttribute("id", "pic2");
        indexPics[3].setAttribute("id", "pic3");
        console.log(indexPics[0].id)
        return
    } else if (indexPics[0].id==="pic2") {
        indexPics[0].setAttribute("id", "pic1");
        indexPics[1].setAttribute("id", "pic2");
        indexPics[2].setAttribute("id", "pic3");
        indexPics[3].setAttribute("id", "pic4");
        console.log(indexPics[0].id)
        return
    } else if (indexPics[0].id==="pic3") {
        indexPics[0].setAttribute("id", "pic2");
        indexPics[1].setAttribute("id", "pic3");
        indexPics[2].setAttribute("id", "pic4");
        indexPics[3].setAttribute("id", "pic1");
        console.log(indexPics[0].id)
        return
    } else if (indexPics[0].id==="pic4") {
        indexPics[0].setAttribute("id", "pic3");
        indexPics[1].setAttribute("id", "pic4");
        indexPics[2].setAttribute("id", "pic1");
        indexPics[3].setAttribute("id", "pic2");
        console.log(indexPics[0].id)
        return
    } else {
        return "help"
    }
}






















function goBack(){
    if (indexPics[0].id==="pic1"){
        indexPics[0].setAttribute("id", "pic2");
        indexPics[1].setAttribute("id", "pic3");
        indexPics[2].setAttribute("id", "pic4");
        indexPics[3].setAttribute("id", "pic1");
        console.log(indexPics[0].id)
        return
    } else if (indexPics[0].id==="pic2") {
        indexPics[0].setAttribute("id", "pic3");
        indexPics[1].setAttribute("id", "pic4");
        indexPics[2].setAttribute("id", "pic1");
        indexPics[3].setAttribute("id", "pic2");
        console.log(indexPics[0].id)
        return
    } else if (indexPics[0].id==="pic3") {
        indexPics[0].setAttribute("id", "pic4");
        indexPics[1].setAttribute("id", "pic1");
        indexPics[2].setAttribute("id", "pic2");
        indexPics[3].setAttribute("id", "pic3");
        console.log(indexPics[0].id)
        return
    } else if (indexPics[0].id==="pic4") {
        indexPics[0].setAttribute("id", "pic1");
        indexPics[1].setAttribute("id", "pic2");
        indexPics[2].setAttribute("id", "pic3");
        indexPics[3].setAttribute("id", "pic4");
        console.log(indexPics[0].id)
        return
    } else {
        return "help"
    }
}