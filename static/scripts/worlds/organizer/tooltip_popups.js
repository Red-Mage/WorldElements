function orgTooltipWorldsShow (element) {
    var org_worlds_tooltip_wrapper_world_add = document.getElementById("org_worlds_tooltip_wrapper_world_add");
    org_worlds_tooltip_wrapper_world_add.classList.replace('hidden','visible');

    // get position information
    var parent_id = element.parentElement.id;
    var tooltip_id = "org_worlds_tooltip"
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
        orgTooltipWorldsHide();
    },{ once: true });
};

function orgTooltipWorldsHide () {
    var tooltip = document.getElementById("org_worlds_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_worlds_tooltip_wrapper_world_add = document.getElementById("org_worlds_tooltip_wrapper_world_add");

    org_worlds_tooltip_wrapper_world_add.classList.replace('visible','hidden');
};

function orgTooltipWorldSectionShow (element) {
    var tooltip_id = "org_world_section_tooltip"
    var tooltip = document.getElementById(tooltip_id);

    var org_worlds_tooltip_wrapper_world_section_add = document.getElementById("org_worlds_tooltip_wrapper_world_section_add");
    org_worlds_tooltip_wrapper_world_section_add.classList.replace('hidden','visible');

    var org_worlds_tooltip_wrapper_world_section_del = document.getElementById("org_worlds_tooltip_wrapper_world_section_del");
    org_worlds_tooltip_wrapper_world_section_del.classList.replace('hidden','visible');

    var parent_wrapper_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var world_id = parent_wrapper.getAttribute('worldid');

    // set tooltip attributes
    tooltip.setAttribute('worldid', world_id);

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
        orgTooltipWorldSectionHide();
    },{ once: true });
};

function orgTooltipWorldSectionHide () {
    var tooltip = document.getElementById("org_world_section_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_worlds_tooltip_wrapper_world_section_add = document.getElementById("org_worlds_tooltip_wrapper_world_section_add");
    var org_worlds_tooltip_wrapper_world_section_del = document.getElementById("org_worlds_tooltip_wrapper_world_section_del");

    org_worlds_tooltip_wrapper_world_section_add.classList.replace('visible','hidden');
    org_worlds_tooltip_wrapper_world_section_del.classList.replace('visible','hidden');
};
