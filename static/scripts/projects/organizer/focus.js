function setFocusProjectsPage (element) {
    var project_pages = document.getElementsByClassName("project_page");
    for ( let i = 0; i < project_pages.length; i++ ) {
        project_pages[i].classList.replace("item_visible","item_hidden");
    }
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var project_id = parent_wrapper.getAttribute('projectid');
    var project_page_id = "ws_project_" + project_id
    var project_page = document.getElementById(project_page_id);
    project_page.classList.replace("item_hidden","item_visible");

    window.localStorage.setItem("projects_focus", element.id);

    setActiveOrgItem(element);
}

function removeFocusProjectsPage (element) {
    var project_pages = document.getElementsByClassName("project_page");
    for ( let i = 0; i < project_pages.length; i++ ) {
        project_pages[i].classList.replace("item_hidden","item_visible");
    }

    window.localStorage.setItem("projects_focus", element.id);

    setActiveOrgItem(element);
};

function updateProjectsFocus () {
    var currentFocus = window.localStorage.getItem("projects_focus");
    var element = document.getElementById(currentFocus);
    if (element) {
        if (currentFocus === "org_item_projects_content") {
            var element = document.getElementById(currentFocus);
            removeFocusProjectsPage(element);
        } else {
            var element = document.getElementById(currentFocus);
            setFocusProjectsPage(element);
        }
    } else {
        var element = document.getElementById("org_item_projects_content");
        window.localStorage.setItem("projects_focus", "org_item_projects_content");
        removeFocusProjectsPage(element);
    }
};