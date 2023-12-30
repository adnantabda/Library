// global variables 



const fillBook = document.querySelector(".fill-book")
const addBook = document.querySelector(".Add-book")
const closeForm = document.querySelector(".close-form")
const elmHolder = document.querySelector(".elm-holder")


addBook.addEventListener("click" , ()=>{
    fillBook.style.display = "flex"
    elmHolder.style.opacity = "0.1"


    event.preventDefault()
})

closeForm.addEventListener("click" , ()=>{
    fillBook.style.display = "none"
    elmHolder.style.opacity = "1"
    displayBook()
    event.preventDefault()

})






const bookList = document.querySelector(".book")
const bookAdd = document.querySelector(".add-bk")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#number-of-pages")
const checkbox = document.querySelector("#checkbox")
const book = document.querySelector(".book")

const myBooks = []

function Book(title , author , numberOfPages , isRead){
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.isRead = isRead
}

function addBookToLibrary(){
    const newBook = Object.create(Book.prototype)
    newBook.title = title.value
    newBook.author = author.value
    newBook.numberOfPages = pages.value
    if (checkbox.checked === false){
        newBook.isRead = false
    }
    else{
        newBook.isRead = true
    }
    console.log(newBook.title)
    console.log(newBook.author)
    console.log(newBook.numberOfPages)
    console.log(newBook.isRead)
    myBooks.push(newBook)
    // console.log(checkbox.value)

    event.preventDefault()
}


bookAdd.addEventListener("click" , addBookToLibrary)

{/* <ul class="book">
<li>
    <img src="assets/read-svgrepo-com (1).svg" alt="">
    <div class="bk-desc">
        <p>Problem Solving with C++</p>
        <div>

            <span>Author</span>
            <p>D s Malik</p>

        </div>

    </div>
    <div>
        <img src="assets/wrong-delete-remove-trash-minus-cancel-close-2-svgrepo-com.svg" alt="">
    </div>
    <div>
        <img src="assets/ic_delete_48px.svg" alt="">
    </div>

    
</li>
</ul> */}





function displayBook(){

    let bookIcon = "assets/read-svgrepo-com (1).svg"
    let unreadIcon = "assets/wrong-delete-remove-trash-minus-cancel-close-2-svgrepo-com.svg"
    let readIcon = "assets/check-mark-svgrepo-com.svg"
    let deleteIcon = "assets/ic_delete_48px.svg"


    for( i = 0 ; i < myBooks.length ; i++)
    {
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
        if (myBooks[i].isRead === false){
            img2.src = unreadIcon
        }else{
            img2.src = readIcon
        }
        li.appendChild(img3)
        img3.src = deleteIcon

        


        













        console.log("this function is executed")
        book.appendChild(li)





    }







}