/*ar banner= document.getElementById('page-banner')//get element by id
console.log(banner)

var lis =documnet.getElementsByTagName('li')//to get by tag name
console.log(lis)
lis[0]

var titles = getElementsByClassName('title')//to get elements of class name
titles[0] //to get first index of titles
Array.from(titles).forEach(function(item){
    console.log(item)
})


 const wrap = document.querySelector('#wrapper')
 console.log(wrap)


 const BOOK = document.querySelector('#book-list li:nth-child(2).name')
 console.log(BOOK)

 
 var books=document.querySelectorAll('#book-list li.name')//to return collection of elements we use queryselector all
 console.log(books)

  //if we get a node list then there is no need to convert it in to array we can directly  use forEach

  books.forEach(book){
      book.textContent += '(book title)'//to change the text content
  }                                      // here we added book title with the title of the book
  

  const bookList= document.querySelector('#book-list')
  bookList.innerHTML+='<p> Books and more books...</p>'

  const banner = document.querySelector('#page-banner')
console.log('#page-banner node type is:',banner.nodeType);//to know the type of the node banner we get 1 .
console.log('#page-banner node name is:',banner.nodeName);//to know node name
console.log('#page-banner has child node:',banner.hasChildNodes())//to know whether it has childnodes
const clonedBanner = banner.cloneNode(true)//true is used to get the nested elements
console.log(clonedBanner);//cone the element and reinsert it somewhere

const bookList= document.querySelector('#book-list')//dom traversing
console.log('the parent node is:',bookList.parentNode)//to find parent node
console.log('the parent node is:',bookList.parentElement)//parent element
console.log('the parent node is:',bookList.parentElement.parentElement)

console.log(bookList.childNodes)//find child node with line break
console.log(bookList.children)//child element without br

console.log('book-list next sibling is:',bookList.nextSibling)//next sibling
console.log('book-list next sibling is:',bookList.nextElementSibling)//w/o line breaks
console.log('book-list previous sibling is:',bookList.previousElementSibling)//previous element
bookList.previousElementSibling.querySelector('p').innerHTML +='<br> Too cool for everyone'//adding content

//events
var h2=document.querySelector('#book-list h2')//listens to the click and calls the function
h2.addEventListener('click',function(){
    console.log("helloworld")
})

var btns=document.querySelectorAll('#book-list.delete')//deleting a book name
btns.forEach(function(btn)){
    btn.addEventListener('click',function(e){
const li=e.target.parentElement;
li.parentElement.removeChild(li)
    })
}

const list=document.querySelector('#book-list ul')//eventbubbling
list.addEventListener('click',function(e){
    if(e.target.className=='delete')
    const li=e.target.parentElement
    list.removeChild(li)
})



// adding existing forms
const addForm =document.forms['add-book'];//formname
addForm.addEventListener('submit',function(e){
    e.preventDefault();//prevent default
    const value=addForm.querySelector('input(type="text")').value;//accept only text as value
    console.log(value)
})

//creating an element
const li = document.createElement('li')//a list
const bookName=document.createElement('span')//bookName
const deleteBtn=document.createElement('span')//delete btn
//adding classNames
bookName.classList.add('name')
deleteBtn.classList.add('delete')

//appending it to Dom

li.appendChild(bookName)//to add booknmae nested in li
li.appendChild(deleteBtn)//to add delete btn nested in li and the order matters

//adding text content
bookName.textContent='value'
deleteBtn.textContent='delete'

//changing attribute
getAttribute('class')//toget an attribute
setAttribute('class','name')//to set an attribute attname and value
removeAttribute('class')//to remove

//changing events and checkboxes

const hideBox= document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if(hideBox.checked){                        //if box is checked
        list.style.display="none";              //it displays none
    }else{list.style.display="initial"

    }
})*/





