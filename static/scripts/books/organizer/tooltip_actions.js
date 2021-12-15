function addBookSectionBooks () {
    var book_id = generateID(8);

    var org_books = document.getElementById("org_wrapper_books");

    // org item
    var org_book = document.createElement("div");
    org_book.id = "org_item_book_" + book_id;
    org_book.className = "flex ";
    org_book.className += "orgitem ";
    org_book.className += "orgitem_lv2";
    org_book.setAttribute('bookid', book_id);

    var icon = document.createElement("div");
    icon.className = "flex ";
    icon.className += "org_svg_book_section";
    icon.onclick = function () {
        setFocusBooksPage(this);
    };
    org_book.appendChild(icon);

    var content = document.createElement("div");
    content.id = "org_item_book_" + book_id + "_content";
    content.className = "flex ";
    content.className += "org_content";
    content.onclick = function () {
        setFocusBooksPage(this);
    };
    content.innerHTML = "Book " + book_id;
    org_book.appendChild(content);

    var spacer = document.createElement("div");
    spacer.className = "flex ";
    spacer.className += "org_spacer";
    spacer.onclick = function () {
        setFocusBooksPage(this);
    };
    org_book.appendChild(spacer);

    var settings = document.createElement("div");
    settings.id = "org_item_book_" + book_id + "_settings";
    settings.className = "flex ";
    settings.className += "org_svg_settings";
    settings.onclick = function () {
        orgTooltipBookSectionShow(this)
    };
    org_book.appendChild(settings);

    // 
    org_book.appendChild(icon);
    org_book.appendChild(content);
    org_book.appendChild(spacer);
    org_book.appendChild(settings);

    // 
    org_books.appendChild(org_book);

    var ws_wrapper_books = document.getElementById("ws_wrapper_books");

    var ws_book = document.createElement("div");
    ws_book.id = "ws_book_" + book_id;
    ws_book.className = "flex ";
    ws_book.className += "item_visible ";
    ws_book.className += "page ";
    ws_book.className += "book_page";
    ws_book.innerHTML += "Book " + book_id;

    ws_wrapper_books.appendChild(ws_book);

    orgTooltipBooksHide();
};

function addBookSectionBook () {
    var book_id = generateID(8);

    var org_books = document.getElementById("org_wrapper_books");

    // org item
    var org_book = document.createElement("div");
    org_book.id = "org_item_book_" + book_id;
    org_book.className = "flex ";
    org_book.className += "orgitem ";
    org_book.className += "orgitem_lv2";
    org_book.setAttribute('bookid', book_id);

    var icon = document.createElement("div");
    icon.className = "flex ";
    icon.className += "org_svg_book_section";
    icon.onclick = function () {
        setFocusBooksPage(this);
    };
    org_book.appendChild(icon);

    var content = document.createElement("div");
    content.id = "org_item_book_" + book_id + "_content";
    content.className = "flex ";
    content.className += "org_content";
    content.innerHTML = "Book " + book_id;
    content.onclick = function () {
        setFocusBooksPage(this);
    };
    org_book.appendChild(content);

    var spacer = document.createElement("div");
    spacer.className = "flex ";
    spacer.className += "org_spacer";
    org_book.appendChild(spacer);

    var settings = document.createElement("div");
    settings.id = "org_item_book_" + book_id + "_settings";
    settings.className = "flex ";
    settings.className += "org_svg_settings";
    settings.onclick = function () {
        orgTooltipBookSectionShow(this)
    };
    org_book.appendChild(settings);

    // 
    org_book.appendChild(icon);
    org_book.appendChild(content);
    org_book.appendChild(spacer);
    org_book.appendChild(settings);

    // 
    org_books.appendChild(org_book);

    var ws_wrapper_books = document.getElementById("ws_wrapper_books");

    var ws_book = document.createElement("div");
    ws_book.id = "ws_book_" + book_id;
    ws_book.className = "flex ";
    ws_book.className += "item_visible ";
    ws_book.className += "page ";
    ws_book.className += "book_page";
    ws_book.innerHTML += "Book " + book_id;

    ws_wrapper_books.appendChild(ws_book);

    orgTooltipBookSectionHide();
};

function delBookSection (element) {
    var tooltip = document.getElementById("org_book_section_tooltip");
    var book_id = tooltip.getAttribute('bookid');

    var org_item_id = "org_item_book_" + book_id;
    var ws_item_id = "ws_book_" + book_id;

    var org_item = document.getElementById(org_item_id);
    org_item.remove(); 
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipBookSectionHide();
};
