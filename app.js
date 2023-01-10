const autumnObj = {
    1: "./images/autumn/img1.png", 2: "./images/autumn/img2.png", 3: "./images/autumn/img3.png", 
    4: "./images/autumn/img4.png", 5: "./images/autumn/img5.png", 6: "./images/autumn/img6.png", 
    7: "./images/autumn/img7.png", 8: "./images/autumn/img8.png", 9: "./images/autumn/img9.png", 
    10: "./images/autumn/img10.png", 11: "./images/autumn/img11.png", 12: "./images/autumn/img12.png", 
    13: "./images/autumn/img13.png", 14: "./images/autumn/img14.png", 15: "./images/autumn/img15.png", 
    16: "./images/autumn/img16.png", 17: "./images/autumn/img17.png", 18: "./images/autumn/img18.png", 
    19: "./images/autumn/img19.png", 20: "./images/autumn/img20.png", 21: "./images/autumn/img21.png", 
    22: "./images/autumn/img22.png", 23: "./images/autumn/img23.png", 24: "./images/autumn/img24.png", 
    25: "./images/autumn/img25.png", 26: "./images/autumn/img26.png", 27: "./images/autumn/img27.png", 
    28: "./images/autumn/img28.png", 29: "./images/autumn/img29.png", 30: "./images/autumn/img30.png", 
    31: "./images/autumn/img31.png", 32: "./images/autumn/img32.png", 
}
const morningObj = {
    1: "./images/morning/img1.png", 2: "./images/morning/img2.png", 3: "./images/morning/img3.png", 
    4: "./images/morning/img4.png", 5: "./images/morning/img5.png", 6: "./images/morning/img6.png", 
    7: "./images/morning/img7.png", 8: "./images/morning/img8.png", 9: "./images/morning/img9.png", 
    10: "./images/morning/img10.png", 11: "./images/morning/img11.png", 12: "./images/morning/img12.png", 
    13: "./images/morning/img13.png", 14: "./images/morning/img14.png", 15: "./images/morning/img15.png", 
    16: "./images/morning/img16.png", 17: "./images/morning/img17.png", 18: "./images/morning/img18.png", 
    19: "./images/morning/img19.png", 20: "./images/morning/img20.png", 21: "./images/morning/img21.png", 
    22: "./images/morning/img22.png", 23: "./images/morning/img23.png", 24: "./images/morning/img24.png", 
    25: "./images/morning/img25.png", 26: "./images/morning/img26.png", 27: "./images/morning/img27.png", 
    28: "./images/morning/img28.png", 29: "./images/morning/img29.png", 30: "./images/morning/img30.png", 
    31: "./images/morning/img31.png", 32: "./images/morning/img32.png", 
}

const preLoad = document.querySelector(".preload")
const bookSelectWindow = document.querySelector(".book-select-window")
const pageSelectWindow = document.querySelector(".page-select-window")
const pageSelectHeader = document.querySelector(".page-select-header")
const pageSelectButtonContainer = document.querySelector(".page-select-button-container")
const pageViewWindow = document.querySelector(".page-view-window")
const autumnStartBtn = document.querySelector(".start-autumn")
const morningStartBtn = document.querySelector(".start-morning")
const pageSelectGrid = document.querySelector(".page-select-grid")
const naviLeft = document.querySelector(".navi-button-left")
const naviRight = document.querySelector(".navi-button-right")
const naviBack = document.querySelector(".navi-button-back")

function preload(){
    let getAll = Object.values(autumnObj).concat( Object.values(morningObj) )
    for ( let i = 0; i < getAll.length; i++ ) {
        preLoad.innerHTML += `<img src="${getAll[i]}">`
    }
}
//preload()

let pageSelectBoxes
let bookPage
let selectPage
let autumn = false
let morning = false
let selectOpen = false
let pageOpen = false
let canGoLeft = false
let canGoRight = false
let canGoBack = false
let book
let title

autumnStartBtn.addEventListener("click",()=>{
    title = "In the Autumn Forest"
    start(autumnObj,title)
    book = autumnObj
})
morningStartBtn.addEventListener("click",()=>{
    title = "Good Morning"
    start(morningObj,title)
    book = morningObj
})
naviBack.addEventListener("click",()=>{
    if ( selectOpen ) {
        bookSelectWindow.classList.remove("behind")
        selectOpen = false
        pageOpen = false
    } else if ( pageOpen ) {
        pageSelectButtonContainer.classList.remove("behind")
        pageViewWindow.classList.add("behind")
        pageSelectHeader.textContent = title
        pageOpen = false
        selectOpen = true
    }
})
naviRight.addEventListener("click",()=>{
    if ( selectOpen ) {
        if ( selectPage === 1 ) {
            pageSelectGrid.innerHTML = ""
            for ( let i = 13; i < 25; i++ ) {
                pageSelectGrid.innerHTML += `
                <div class="page-select-box"><img src="${book[i]}"></div>
                `
            }
            setBoxClickEvent()
            selectPage = 2
        } else if ( selectPage === 2 ) {
            pageSelectGrid.innerHTML = ""
            for ( let i = 25; i < 33; i++ ) {
                pageSelectGrid.innerHTML += `
                <div class="page-select-box"><img src="${book[i]}"></div>
                `
            }
            setBoxClickEvent()
            selectPage = 3
        }
    } else if ( pageOpen && bookPage < 32) {
        bookPage++
        pageViewWindow.innerHTML = `<div class="page-view"><img src="${book[bookPage]}"></div>`
        pageSelectHeader.textContent = title + " (p: " + bookPage+")"
        if ( bookPage === 13 ) {
            pageSelectGrid.innerHTML = ""
            for ( let i = 13; i < 25; i++ ) {
                pageSelectGrid.innerHTML += `
                <div class="page-select-box"><img src="${book[i]}"></div>
                `
            }
            setBoxClickEvent()
            selectPage = 2
        } else if ( bookPage === 25 ) {
            pageSelectGrid.innerHTML = ""
            for ( let i = 25; i < 33; i++ ) {
                pageSelectGrid.innerHTML += `
                <div class="page-select-box"><img src="${book[i]}"></div>
                `
            }
            setBoxClickEvent()
            selectPage = 3
        }
    }
})
naviLeft.addEventListener("click",()=>{
    if ( selectOpen ) {
        if ( selectPage === 3 ) {
            pageSelectGrid.innerHTML = ""
            for ( let i = 13; i < 25; i++ ) {
                pageSelectGrid.innerHTML += `
                <div class="page-select-box"><img src="${book[i]}"></div>
                `
            }
            setBoxClickEvent()
            selectPage = 2
        } else if ( selectPage === 2 ) {
            pageSelectGrid.innerHTML = ""
            for ( let i = 1; i < 13; i++ ) {
                pageSelectGrid.innerHTML += `
                <div class="page-select-box"><img src="${book[i]}"></div>
                `
            }
            setBoxClickEvent()
            selectPage = 1
        }
    } else if ( pageOpen && bookPage > 1) {
        bookPage--
        pageViewWindow.innerHTML = `<div class="page-view"><img src="${book[bookPage]}"></div>`
        pageSelectHeader.textContent = title + " (p: " + bookPage+")"
        if ( bookPage === 24 ) {
            pageSelectGrid.innerHTML = ""
            for ( let i = 13; i < 25; i++ ) {
                pageSelectGrid.innerHTML += `
                <div class="page-select-box"><img src="${book[i]}"></div>
                `
            }
            setBoxClickEvent()
            selectPage = 2
        } else if ( bookPage === 12 ) {
            pageSelectGrid.innerHTML = ""
            for ( let i = 1; i < 13; i++ ) {
                pageSelectGrid.innerHTML += `
                <div class="page-select-box"><img src="${book[i]}"></div>
                `
            }
            setBoxClickEvent()
            selectPage = 1
        }
    }
})

function start(book,title) {
    pageSelectHeader.textContent = title
    pageSelectGrid.innerHTML = ""
    for ( let i = 1; i < 13; i++ ) {
        pageSelectGrid.innerHTML += `
        <div class="page-select-box"><img src="${book[i]}"></div>
        `
    }
    setBoxClickEvent()
    bookSelectWindow.classList.add("behind")
    selectOpen = true
    selectPage = 1
    canGoBack = true
    canGoRight = true
}

function openPage(src,title) {
    pageViewWindow.innerHTML = `<div class="page-view"><img src="${src}"></div>`
    bookPage = getObjKey(book,src)
    pageSelectHeader.textContent = title + " (p: " + bookPage+")"
    pageViewWindow.classList.remove("behind")
    pageSelectButtonContainer.classList.add("behind")
    pageOpen = true
    selectOpen = false
}

function setBoxClickEvent() {
    pageSelectBoxes = document.querySelectorAll(".page-select-box")
    pageSelectBoxes.forEach( (box)=>{
        box.addEventListener("click",()=>{
            let currentPage = box.firstChild.getAttribute("src")
            openPage(currentPage,title)
        })
    })
}

function getObjKey(obj,value) {
    return Object.keys(obj).find(key => obj[key] === value)
}