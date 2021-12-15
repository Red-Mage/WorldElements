function addProjectSectionProjects () {
    var project_id = generateID(8);

    var org_projects = document.getElementById("org_wrapper_projects");

    // org item
    var org_project = document.createElement("div");
    org_project.id = "org_item_project_" + project_id;
    org_project.className = "flex ";
    org_project.className += "orgitem ";
    org_project.className += "orgitem_lv2";
    org_project.setAttribute('projectid', project_id);

    var icon = document.createElement("div");
    icon.className = "flex ";
    icon.className += "org_svg_project_section";
    icon.onclick = function () {
        setFocusProjectsPage(this);
    };
    org_project.appendChild(icon);

    var content = document.createElement("div");
    content.id = "org_item_project_" + project_id + "_content";
    content.className = "flex ";
    content.className += "org_content";
    content.onclick = function () {
        setFocusProjectsPage(this);
    };
    content.innerHTML = "Project " + project_id;
    org_project.appendChild(content);

    var spacer = document.createElement("div");
    spacer.className = "flex ";
    spacer.className += "org_spacer";
    spacer.onclick = function () {
        setFocusProjectsPage(this);
    };
    org_project.appendChild(spacer);

    var settings = document.createElement("div");
    settings.id = "org_item_project_" + project_id + "_settings";
    settings.className = "flex ";
    settings.className += "org_svg_settings";
    settings.onclick = function () {
        orgTooltipProjectSectionShow(this)
    };
    org_project.appendChild(settings);

    // 
    org_project.appendChild(icon);
    org_project.appendChild(content);
    org_project.appendChild(spacer);
    org_project.appendChild(settings);

    // 
    org_projects.appendChild(org_project);

    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");

    var ws_project = document.createElement("div");
    ws_project.id = "ws_project_" + project_id;
    ws_project.className = "flex ";
    ws_project.className += "item_visible ";
    ws_project.className += "page ";
    ws_project.className += "project_page";
    ws_project.innerHTML += "Project " + project_id;

    ws_wrapper_projects.appendChild(ws_project);

    orgTooltipProjectsHide();
};

function addProjectSectionProject () {
    var project_id = generateID(8);

    var org_projects = document.getElementById("org_wrapper_projects");

    // org item
    var org_project = document.createElement("div");
    org_project.id = "org_item_project_" + project_id;
    org_project.className = "flex ";
    org_project.className += "orgitem ";
    org_project.className += "orgitem_lv2";
    org_project.setAttribute('projectid', project_id);

    var icon = document.createElement("div");
    icon.className = "flex ";
    icon.className += "org_svg_project_section";
    icon.onclick = function () {
        setFocusProjectsPage(this);
    };
    org_project.appendChild(icon);

    var content = document.createElement("div");
    content.id = "org_item_project_" + project_id + "_content";
    content.className = "flex ";
    content.className += "org_content";
    content.innerHTML = "Project " + project_id;
    content.onclick = function () {
        setFocusProjectsPage(this);
    };
    org_project.appendChild(content);

    var spacer = document.createElement("div");
    spacer.className = "flex ";
    spacer.className += "org_spacer";
    org_project.appendChild(spacer);

    var settings = document.createElement("div");
    settings.id = "org_item_project_" + project_id + "_settings";
    settings.className = "flex ";
    settings.className += "org_svg_settings";
    settings.onclick = function () {
        orgTooltipProjectSectionShow(this)
    };
    org_project.appendChild(settings);

    // 
    org_project.appendChild(icon);
    org_project.appendChild(content);
    org_project.appendChild(spacer);
    org_project.appendChild(settings);

    // 
    org_projects.appendChild(org_project);

    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");

    var ws_project = document.createElement("div");
    ws_project.id = "ws_project_" + project_id;
    ws_project.className = "flex ";
    ws_project.className += "item_visible ";
    ws_project.className += "page ";
    ws_project.className += "project_page";
    ws_project.innerHTML += "Project " + project_id;

    ws_wrapper_projects.appendChild(ws_project);

    orgTooltipProjectSectionHide();
};

function delProjectSection (element) {
    var tooltip = document.getElementById("org_project_section_tooltip");
    var project_id = tooltip.getAttribute('projectid');

    var org_item_id = "org_item_project_" + project_id;
    var ws_item_id = "ws_project_" + project_id;

    var org_item = document.getElementById(org_item_id);
    org_item.remove(); 
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipProjectSectionHide();
};
