function setFocusBooksPage (element) {
    var book_pages = document.getElementsByClassName("book_page");
    for ( let i = 0; i < book_pages.length; i++ ) {
        book_pages[i].classList.replace("item_visible","item_hidden");
    }
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var book_id = parent_wrapper.getAttribute('bookid');
    var book_page_id = "ws_book_" + book_id
    var book_page = document.getElementById(book_page_id);
    book_page.classList.replace("item_hidden","item_visible");

    window.localStorage.setItem("books_focus", element.id);

    setActiveOrgItem(element);
};

function removeFocusBooksPage (element) {
    var book_pages = document.getElementsByClassName("book_page");
    for ( let i = 0; i < book_pages.length; i++ ) {
        book_pages[i].classList.replace("item_hidden","item_visible");
    }

    window.localStorage.setItem("books_focus", element.id);

    setActiveOrgItem(element);
};

function updateBooksFocus () {
    var currentFocus = window.localStorage.getItem("books_focus");
    var element = document.getElementById(currentFocus);
    if (element) {
        if (currentFocus === "org_item_books_content") {
            var element = document.getElementById(currentFocus);
            removeFocusBooksPage(element);
        } else {
            var element = document.getElementById(currentFocus);
            setFocusBooksPage(element);
        }
    } else {
        var element = document.getElementById("org_item_books_content");
        window.localStorage.setItem("books_focus", "org_item_books_content");
        removeFocusBooksPage(element);
    }
};