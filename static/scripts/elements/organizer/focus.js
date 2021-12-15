 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// focus elements //////////////////////////////////////////////////////////////////////////////////////////////////////

function setFocusElements (element) {
    showElementsCategoryWrappers();
    showElementsCategoryElements();
    showElementsSubCategoryWrappers();
    showElementsSubCategoryElements();

    window.localStorage.setItem("elements_focus", "org_item_elements_content");

    setActiveOrgItem(element);
};

function setFocusElementsCategory (element) {
    hideElementsCategoryWrappers();
    hideElementsCategoryElements();
    hideElementsSubCategoryWrappers();
    hideElementsSubCategoryElements();

    showElementsCategoryWrapper(element);
    showElementsCategoryElements(element);
    showElementsSubCategoryWrappers(element);

    showElementsSubCategoryElements(element);

    window.localStorage.setItem("elements_focus", element.id);

    setActiveOrgItem(element);
};

function setFocusElementsSubCategory (element) {
    hideElementsCategoryWrappers();
    hideElementsCategoryElements();
    hideElementsSubCategoryWrappers();
    hideElementsSubCategoryElements();

    showElementsCategoryWrapper(element);
    showElementsSubCategoryWrapper(element);
    showElementsSubCategoryElements(element);

    window.localStorage.setItem("elements_focus", element.id);

    setActiveOrgItem(element);
};

function setFocusElementsCategoryElement (element) {
    hideElementsCategoryWrappers();
    hideElementsCategoryElements();
    hideElementsSubCategoryWrappers();
    hideElementsSubCategoryElements();

    showElementsCategoryWrapper(element);
    showElementsCategoryElement(element);

    window.localStorage.setItem("elements_focus", element.id);

    setActiveOrgItem(element);
};

function setFocusElementsSubCategoryElement (element) {
    hideElementsCategoryWrappers();
    hideElementsCategoryElements();
    hideElementsSubCategoryWrappers();
    hideElementsSubCategoryElements();

    showElementsCategoryWrapper(element);
    showElementsSubCategoryWrapper(element);
    showElementsSubCategoryElement(element);

    window.localStorage.setItem("elements_focus", element.id);

    setActiveOrgItem(element);
};

function showElementsCategoryWrappers () {
    var ws_pages = document.getElementsByClassName("ws_elements_category_wrapper");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_hidden","item_visible");
    }
};

function hideElementsCategoryWrappers () {
    var ws_pages = document.getElementsByClassName("ws_elements_category_wrapper");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function showElementsCategoryWrapper (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var category_id = parent_wrapper.getAttribute('categoryid');
    var ws_page_id = "ws_elements_category_wrapper_" + category_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function showElementsSubCategoryWrappers (element) {
    if (element) {
        // get part id
        var parent_id = element.parentElement.id;
        var parent_wrapper = document.getElementById(parent_id);
        var category_id = parent_wrapper.getAttribute('categoryid');

        // show category elements
        var ws_items = document.getElementsByClassName("ws_elements_subcategory_wrapper");
        for ( let i = 0; i < ws_items.length; i++ ) {
            var subcategory_category_id = ws_items[i].getAttribute('categoryid');
            if (subcategory_category_id === category_id) {
                ws_items[i].classList.replace("item_hidden","item_visible");
            }
        }
    } else {
        var ws_pages = document.getElementsByClassName("ws_elements_subcategory_wrapper");
        for ( let i = 0; i < ws_pages.length; i++ ) {
            ws_pages[i].classList.replace("item_hidden","item_visible");
        }
    }
};

function hideElementsSubCategoryWrappers () {
    var ws_pages = document.getElementsByClassName("ws_elements_subcategory_wrapper");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function showElementsSubCategoryWrapper (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var subcategory_id = parent_wrapper.getAttribute('subcategoryid');
    var ws_page_id = "ws_elements_subcategory_wrapper_" + subcategory_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function showElementsCategoryElements (element) {
    if (element) {
        // get part id
        var parent_id = element.parentElement.id;
        var parent_wrapper = document.getElementById(parent_id);
        var category_id = parent_wrapper.getAttribute('categoryid');

        // show category elements
        var ws_pages = document.getElementsByClassName("ws_elements_category_element");
        for ( let i = 0; i < ws_pages.length; i++ ) {
            var element_category_id = ws_pages[i].getAttribute('categoryid');
            if (element_category_id === category_id) {
                ws_pages[i].classList.replace("item_hidden","item_visible");
            }
        }
    } else {
        var ws_pages = document.getElementsByClassName("ws_elements_category_element");
        for ( let i = 0; i < ws_pages.length; i++ ) {
            ws_pages[i].classList.replace("item_hidden","item_visible");
        }
    }
};

function hideElementsCategoryElements () {
    var ws_pages = document.getElementsByClassName("ws_elements_category_element");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function showElementsCategoryElement (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var element_id = parent_wrapper.getAttribute('elementid');
    var ws_page_id = "ws_elements_category_element_" + element_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function showElementsSubCategoryElements (element) {
    if (element) {
        // get part id
        var parent_id = element.parentElement.id;
        var parent_wrapper = document.getElementById(parent_id);
        var category_id = parent_wrapper.getAttribute('categoryid');
        var subcategory_id = parent_wrapper.getAttribute('subcategoryid');

        // show category elements
        var ws_pages = document.getElementsByClassName("ws_elements_subcategory_element");
        for ( let i = 0; i < ws_pages.length; i++ ) {
            if (subcategory_id === "00000000") {
                var element_category_id = ws_pages[i].getAttribute('categoryid');
                if (element_category_id === category_id) {
                    ws_pages[i].classList.replace("item_hidden","item_visible");
                }
            } else {
                var element_subcategory_id = ws_pages[i].getAttribute('subcategoryid');
                if (element_subcategory_id === subcategory_id) {
                    ws_pages[i].classList.replace("item_hidden","item_visible");
                }
            }
        }
    } else {
        var ws_pages = document.getElementsByClassName("ws_elements_subcategory_element");
        for ( let i = 0; i < ws_pages.length; i++ ) {
            ws_pages[i].classList.replace("item_hidden","item_visible");
        }
    }
};

function hideElementsSubCategoryElements () {
    var ws_pages = document.getElementsByClassName("ws_elements_subcategory_element");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function showElementsSubCategoryElement (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var element_id = parent_wrapper.getAttribute('elementid');
    var ws_page_id = "ws_elements_subcategory_element_" + element_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function updateElementsFocus () {
    var currentFocus = window.localStorage.getItem("elements_focus");
    var element = document.getElementById(currentFocus);
    if (element) {
        if (currentFocus === "org_item_elements_content") {
            var element = document.getElementById(currentFocus);
            setFocusElements(element);
        } else if (currentFocus.includes('elements_category_element')) {
            var element = document.getElementById(currentFocus);
            setFocusElementsCategoryElement(element);
        } else if (currentFocus.includes('elements_subcategory_element')) {
            var element = document.getElementById(currentFocus);
            setFocusElementsSubCategoryElement(element);
        } else if (currentFocus.includes('elements_category')) {
            var element = document.getElementById(currentFocus);
            setFocusElementsCategory(element);
        } else if (currentFocus.includes('elements_subcategory')) {
            var element = document.getElementById(currentFocus);
            setFocusElementsSubCategory(element);
        } 
    } else {
        var element = document.getElementById("org_item_elements_content");
        window.localStorage.setItem("elements_focus", "org_item_elements_content");
        setFocusElements(element);
    }
};
