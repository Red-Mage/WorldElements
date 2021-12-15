function orgTooltipProjectsShow (element) {
    var org_projects_tooltip_wrapper_project_add = document.getElementById("org_projects_tooltip_wrapper_project_add");
    org_projects_tooltip_wrapper_project_add.classList.replace('hidden','visible');

    // get position information
    var parent_id = element.parentElement.id;
    var tooltip_id = "org_projects_tooltip"
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
        orgTooltipProjectsHide();
    },{ once: true });
};

function orgTooltipProjectsHide () {
    var tooltip = document.getElementById("org_projects_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_projects_tooltip_wrapper_project_add = document.getElementById("org_projects_tooltip_wrapper_project_add");

    org_projects_tooltip_wrapper_project_add.classList.replace('visible','hidden');
};

function orgTooltipProjectSectionShow (element) {
    var tooltip_id = "org_project_section_tooltip"
    var tooltip = document.getElementById(tooltip_id);

    var org_projects_tooltip_wrapper_project_section_add = document.getElementById("org_projects_tooltip_wrapper_project_section_add");
    org_projects_tooltip_wrapper_project_section_add.classList.replace('hidden','visible');

    var org_projects_tooltip_wrapper_project_section_del = document.getElementById("org_projects_tooltip_wrapper_project_section_del");
    org_projects_tooltip_wrapper_project_section_del.classList.replace('hidden','visible');

    var parent_wrapper_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var project_id = parent_wrapper.getAttribute('projectid');

    // set tooltip attributes
    tooltip.setAttribute('projectid', project_id);

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
        orgTooltipProjectSectionHide();
    },{ once: true });
};

function orgTooltipProjectSectionHide () {
    var tooltip = document.getElementById("org_project_section_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_projects_tooltip_wrapper_project_section_add = document.getElementById("org_projects_tooltip_wrapper_project_section_add");
    var org_projects_tooltip_wrapper_project_section_del = document.getElementById("org_projects_tooltip_wrapper_project_section_del");

    org_projects_tooltip_wrapper_project_section_add.classList.replace('visible','hidden');
    org_projects_tooltip_wrapper_project_section_del.classList.replace('visible','hidden');
};
