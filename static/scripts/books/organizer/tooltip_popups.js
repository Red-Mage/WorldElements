function orgTooltipBooksShow (element) {
    var org_books_tooltip_wrapper_book_add = document.getElementById("org_books_tooltip_wrapper_book_add");
    org_books_tooltip_wrapper_book_add.classList.replace('hidden','visible');

    // get position information
    var parent_id = element.parentElement.id;
    var tooltip_id = "org_books_tooltip"
    var pointer = document.getElementById("resizer_left");
    var parent = document.getElementById(parent_id);
    var tooltip = document.getElementById(tooltip_id);
    var parentTop = parent.getBoundingClientRect().top;
    var panelBottom = pointer.getBoundingClientRect().bottom;
    var tooltipBottom = tooltip.getBoundingClientRect().bottom;
    var leftPosition = pointer.offsetLeft + 5;

    // position tooltip to the right of organizer
    tooltip.style.left = `${leftPosition}px`;

    // handle tooltip overflowing footer
    var marker = panelBottom - tooltipBottom;
    if (marker < 0) {
        var mod = parentTop + marker - 39;
        tooltip.style.top = `${mod}px`;
    } else {
        var mod = parentTop - 34;
        tooltip.style.top = `${mod}px`;
    }

    // unhide settings icon while tooltip is active
    element.classList.replace("org_svg_settings","org_svg_settings_active");
    tooltip.classList.replace('hidden','visible');

    // add event to hide tooltip when clicked outside tooltip area
    window.addEventListener('mouseup', function(e){
        orgTooltipBooksHide();
    },{ once: true });
};

function orgTooltipBooksHide () {
    var tooltip = document.getElementById("org_books_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_books_tooltip_wrapper_book_add = document.getElementById("org_books_tooltip_wrapper_book_add");

    org_books_tooltip_wrapper_book_add.classList.replace('visible','hidden');
};

function orgTooltipBookSectionShow (element) {
    var tooltip_id = "org_book_section_tooltip"
    var tooltip = document.getElementById(tooltip_id);

    var org_books_tooltip_wrapper_book_section_add = document.getElementById("org_books_tooltip_wrapper_book_section_add");
    org_books_tooltip_wrapper_book_section_add.classList.replace('hidden','visible');

    var org_books_tooltip_wrapper_book_section_del = document.getElementById("org_books_tooltip_wrapper_book_section_del");
    org_books_tooltip_wrapper_book_section_del.classList.replace('hidden','visible');

    var parent_wrapper_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var book_id = parent_wrapper.getAttribute('bookid');

    // set tooltip attributes
    tooltip.setAttribute('bookid', book_id);

    // get position information
    var parent_id = element.parentElement.id;
    var pointer = document.getElementById("resizer_left");
    var parent = document.getElementById(parent_id);
    var parentTop = parent.getBoundingClientRect().top;
    var panelBottom = pointer.getBoundingClientRect().bottom;
    var tooltipBottom = tooltip.getBoundingClientRect().bottom;
    var leftPosition = pointer.offsetLeft + 5;

    // position tooltip to the right of organizer
    tooltip.style.left = `${leftPosition}px`;

    // handle tooltip overflowing footer
    var marker = panelBottom - tooltipBottom;
    if (marker < 0) {
        var mod = parentTop + marker - 39;
        tooltip.style.top = `${mod}px`;
    } else {
        var mod = parentTop - 34;
        tooltip.style.top = `${mod}px`;
    }

    // unhide settings icon while tooltip is active
    element.classList.replace("org_svg_settings","org_svg_settings_active");
    tooltip.classList.replace('hidden','visible');

    // add event to hide tooltip when clicked outside tooltip area
    window.addEventListener('mouseup', function(e){
        orgTooltipBookSectionHide();
    },{ once: true });
};

function orgTooltipBookSectionHide () {
    var tooltip = document.getElementById("org_book_section_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_books_tooltip_wrapper_book_section_add = document.getElementById("org_books_tooltip_wrapper_book_section_add");
    var org_books_tooltip_wrapper_book_section_del = document.getElementById("org_books_tooltip_wrapper_book_section_del");

    org_books_tooltip_wrapper_book_section_add.classList.replace('visible','hidden');
    org_books_tooltip_wrapper_book_section_del.classList.replace('visible','hidden');
};
