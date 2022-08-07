import {booksList} from "./test.js"


let bookID = localStorage.getItem("BookId");
let bookDetails = `
<header>
    <h4 class="text-center">${booksList[bookID].bookname}</h4>
</header>
<div class="container-fluid bg-light pt-5">
<div class="row d-flex">
    <div class="col-lg-8">
        <img class="w-100" src="images/${booksList[bookID].image}">
        <p class="p-4 lead text-black">${booksList[bookID].bigDesc1}</p>
        <p class="p-4 lead">${booksList[bookID].bigDesc2}</p>
    </div>

    <div class="col-lg-4 bg-light event-details">
        <h2>تفاصيل الكتاب</h2>
        <ul>
            <li class="list">
                <i class="fa-regular fa-calendar-check"></i>
                <span class="para">
                    <p class="d-inline-block text-bolder"> تاريخ النشر</p>
                    <p class="text-muted ps-4 ">${booksList[bookID].publishDate}</p>
                </span>
            </li>

            <li class="list">
                <i class="fa-solid fa-feather-pointed"></i>
                <span class="para">
                    <p class="d-inline-block text-bolder"> تاليف</p>
                    <p class="text-muted ps-4 ">${booksList[bookID].author}</p>
                </span>
            </li>
            <li class="list">
                <i class="fa-solid fa-book-open"></i>
                <span class="para">
                    <p class="d-inline-block text-bolder"> الناشر</p>
                    <p class="text-muted ps-4 ">${booksList[bookID].publisher}</p>
                </span>
            </li>
            <li class="list">
                <i class="fa-solid fa-book"></i>
                <span class="para">
                    <p class="d-inline-block text-bolder"> تصنيف الكتاب</p>
                    <p class="text-muted ps-4">${booksList[bookID].bookCat}</p>
                </span>
            </li>
            <li class="list">
                <i class="fa-regular fa-flag"></i>
                <span class="para">
                    <p class="d-inline-block text-bolder"> عدد الصفحات</p>
                    <p class="text-muted ps-4 ">${booksList[bookID].pagesNo}</p>
                </span>
            </li>


        </ul>


        <audio controls class="w-100 bg-warning border border-2 border-warning">
            <source src="audio/${booksList[bookID].record}" type="audio/ogg">
            <source src="audio/${booksList[bookID].record}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
</div>
</div>

</div>

`
$('#bookDeatails').html(bookDetails);