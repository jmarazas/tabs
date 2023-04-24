
const tabs = document.getElementsByClassName("tab1")
const tabs2 = document.getElementsByClassName("tab2")
const tabs3 = document.getElementsByClassName("tab3")
const h1 = document.querySelector("h1")
const buttons = document.getElementsByClassName("btn1")
const buttons2 = document.getElementsByClassName("btn2")
const buttons3 = document.getElementsByClassName("btn3")


// parodo pirma taba
tabs[0].style.display = "block"

function showTab(evt, id){
    //paslepia visus tabus, kai paleidziama funkcija
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"
        buttons[i].classList.remove("selected")
    }

    // rodo tik ta pagal id
    document.getElementById(id).style.display = "block"

    // prideda selected klase prie paspausto mygtuko
    evt.currentTarget.classList.add("selected")
}

tabs2[0].style.display = "block"

function showTab2(evt, id){
    //paslepia visus tabus, kai paleidziama funkcija
    for (let i = 0; i < tabs.length; i++) {
        tabs2[i].style.display = "none"
        buttons2[i].classList.remove("selected")
    }

    // rodo tik ta pagal id
    document.getElementById(id).style.display = "block"

    // prideda selected klase prie paspausto mygtuko
    evt.currentTarget.classList.add("selected")
}

tabs3[0].style.display = "block"

function showTab3(evt, id){
    //paslepia visus tabus, kai paleidziama funkcija
    for (let i = 0; i < tabs.length; i++) {
        tabs3[i].style.display = "none"
        buttons3[i].classList.remove("selected")
    }

    // rodo tik ta pagal id
    document.getElementById(id).style.display = "block"

    // prideda selected klase prie paspausto mygtuko
    evt.currentTarget.classList.add("selected")
}



