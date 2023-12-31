// global variables 



const fillBook = document.querySelector(".fill-book")
const addBook = document.querySelector(".Add-book")
const closeForm = document.querySelector(".close-form")
const elmHolder = document.querySelector(".elm-holder")

const bookList = document.querySelector(".book")
const bookAdd = document.querySelector(".add-bk")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#number-of-pages")
const checkbox = document.querySelector("#checkbox")
const book = document.querySelector(".book")
const first = document.querySelector("#first")
const firstBook = document.querySelector("#first-book")
const toggle = document.querySelector("#d")
const toggle2 = document.querySelector("#x")

toggle.addEventListener("click" , ()=>{
    first.removeChild(firstBook)
})

let didRead = false
toggle2.addEventListener("click" , ()=>{
    let unreadIcon = "assets/wrong.svg"
    let readIcon = "assets/mark.svg"


    if (!didRead) {
        toggle2.src = readIcon
        // newBook.isRead = true
    } else {
        toggle2.src = unreadIcon
        // newBook.isRead = false
    }
    didRead = !didRead

})

const myBooks = []



function Book(title, author, numberOfPages, isRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.isRead = isRead
}


addBook.addEventListener("click", () => {
    fillBook.style.display = "flex"
    elmHolder.style.opacity = "0.1"


    event.preventDefault()
})



bookAdd.addEventListener("click", () => {


    const newBook = Object.create(Book.prototype)
    newBook.title = title.value
    newBook.author = author.value
    newBook.numberOfPages = pages.value
    if (checkbox.checked === false) {
        newBook.isRead = false
    }
    else {
        newBook.isRead = true
    }
    console.log(newBook.title)
    console.log(newBook.author)
    console.log(newBook.numberOfPages)
    console.log(newBook.isRead)




    let bookIcon = "assets/read-svgrepo-com (1).svg"
    let unreadIcon = "assets/wrong.svg"
    let readIcon = "assets/mark.svg"
    let deleteIcon = "assets/ic_delete_48px.svg"



    const li = document.createElement("li")
    const img = document.createElement("img")
    const liDiv = document.createElement("div")
    const bookTitle = document.createElement("p")
    const liDivDiv = document.createElement("div")
    const span = document.createElement("span")
    const bookAuthor = document.createElement("p")
    const img2 = document.createElement("img")
    const img3 = document.createElement("img")
    const numpages = document.createElement("span")
    img.src = bookIcon
    li.appendChild(img)
    bookTitle.textContent = newBook.title
    liDiv.appendChild(bookTitle)
    li.appendChild(liDiv)
    liDiv.appendChild(liDivDiv)
    liDivDiv.appendChild(span)
    liDivDiv.appendChild(bookAuthor)
    liDivDiv.appendChild(numpages)
    span.textContent = "Author : "
    bookAuthor.textContent = `${newBook.author} | `
    numpages.textContent = `pages: ${newBook.numberOfPages}`
    li.appendChild(img2)


    
    if (newBook.isRead === false) {
        img2.src = unreadIcon
    } else {
        img2.src = readIcon
    }
    li.appendChild(img3)
    img3.src = deleteIcon
    
    img3.addEventListener("click", () => {
        book.removeChild(li)
        let index = myBooks.indexOf(newBook)
        myBooks.splice(index , 1)
        
        
        

    })
    
    let didRead = false
    
    myBooks.push(newBook)






    img2.addEventListener("click", () => {
        console.log("the button is clicked")

        if (!didRead) {
            img2.src = readIcon
            newBook.isRead = true
        } else {
            img2.src = unreadIcon
            newBook.isRead = false
        }

        didRead = !didRead
    })


    book.appendChild(li)

    fillBook.style.display = "none"
    elmHolder.style.opacity = "1"



    event.preventDefault()




})

function searchThroughLibrary(myBooks) {

}





function displayBook() {

    let bookIcon = "assets/read-svgrepo-com (1).svg"
    let unreadIcon = "assets/wrong-delete-remove-trash-minus-cancel-close-2-svgrepo-com.svg"
    let readIcon = "assets/check-mark-svgrepo-com.svg"
    let deleteIcon = "assets/ic_delete_48px.svg"


    for (i = 0; i < myBooks.length; i++) {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const liDiv = document.createElement("div")
        const bookTitle = document.createElement("p")
        const liDivDiv = document.createElement("div")
        const span = document.createElement("span")
        const bookAuthor = document.createElement("p")
        const img2 = document.createElement("img")
        const img3 = document.createElement("img")
        img.src = bookIcon
        li.appendChild(img)
        bookTitle.textContent = myBooks[i].title
        liDiv.appendChild(bookTitle)
        li.appendChild(liDiv)
        liDiv.appendChild(liDivDiv)
        liDivDiv.appendChild(span)
        liDivDiv.appendChild(bookAuthor)
        span.textContent = "Author"
        bookAuthor.textContent = myBooks[i].author
        li.appendChild(img2)
        if (myBooks[i].isRead === false) {
            img2.src = unreadIcon
        } else {
            img2.src = readIcon
            li.style.backgroundColor = "#c43958"
        }
        li.appendChild(img3)
        img3.src = deleteIcon


















        console.log("this function is executed")
        book.appendChild(li)





    }







}



const input = document.querySelector(".input")
const search = document.querySelector(".search")
const searchBook = document.querySelector(".search-book")
const searchDisplayTitle = document.querySelector(".search-display-title")
const searchDisplayAuthor = document.querySelector(".search-display-author")
const searchDisplayPages = document.querySelector(".search-display-pages")
const searchDisplayStatus = document.querySelector(".search-display-status")
const closeSearch = document.createElement("button")

search.addEventListener("click" , ()=>{
    let value = input.value
    if ( value === ""){
        console.log("You Don't Have any book in the list")
    }
    else{
        if (myBooks.length === 0 ){

            searchBook.textContent = "You Don't Have any book in the list"
            searchBook.appendChild(closeSearch)
            closeSearch.textContent = "Close"
            closeSearch.style.marginTop = "8px"
            closeSearch.style.padding = "4px"
            closeSearch.style.backgroundColor = "white"

            closeSearch.addEventListener("click" , ()=>{
                searchBook.style.display = "none"
            })

            
        }
        searchBook.style.display = "flex"
        for (i = 0 ; i<= myBooks.length ; i++){
            if (myBooks[i].title === value ){
                let title = myBooks[i].title 
                let pages = myBooks[i].numberOfPages
                let author = myBooks[i].author
                let readingStatus = ()=>{
                    if (myBooks[i].isRead){
                        return "yes read"
                    } else{
                        return "not yet "
                    }
                }
                searchBook.appendChild(closeSearch)
                searchDisplayTitle.textContent = title
                searchDisplayAuthor.textContent = author
                searchDisplayPages.textContent =  pages
                searchDisplayStatus.textContent = readingStatus()
                
                
                closeSearch.textContent = "Close"
                closeSearch.style.marginTop = "8px"
                closeSearch.style.padding = "4px"
                closeSearch.style.backgroundColor = "white"

                closeSearch.addEventListener("click" , ()=>{
                    searchBook.removeChild(searchDisplayTitle)
                    searchBook.removeChild(searchDisplayAuthor)
                    searchBook.removeChild(searchDisplayPages)
                    searchBook.removeChild(searchDisplayStatus)

                    searchBook.style.display = "none"
                })
            }
            
            
            // input.value = ""
        }
    }
})