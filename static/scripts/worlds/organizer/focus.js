function setFocusWorldPage (element) {
    var world_pages = document.getElementsByClassName("world_page");
    for ( let i = 0; i < world_pages.length; i++ ) {
        world_pages[i].classList.replace("item_visible","item_hidden");
    }
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var world_id = parent_wrapper.getAttribute('worldid');
    var world_page_id = "ws_world_" + world_id
    var world_page = document.getElementById(world_page_id);
    world_page.classList.replace("item_hidden","item_visible");

    window.localStorage.setItem("worlds_focus", element.id);

    setActiveOrgItem(element);
};

function removeFocusWorldPage (element) {
    var world_pages = document.getElementsByClassName("world_page");
    for ( let i = 0; i < world_pages.length; i++ ) {
        world_pages[i].classList.replace("item_hidden","item_visible");
    }

    window.localStorage.setItem("worlds_focus", element.id);

    setActiveOrgItem(element);
};

function updateWorldsFocus () {
    var currentFocus = window.localStorage.getItem("worlds_focus");
    var element = document.getElementById(currentFocus);
    if (element) {
        if (currentFocus === "org_item_worlds_content") {
            var element = document.getElementById(currentFocus);
            removeFocusWorldPage(element);
        } else {
            var element = document.getElementById(currentFocus);
            setFocusWorldPage(element);
        }
    } else {
        var element = document.getElementById("org_item_worlds_content");
        window.localStorage.setItem("worlds_focus", "org_item_worlds_content");
        removeFocusWorldPage(element);
    }
};