function orgTooltipElementsShow (element) {
    var tooltip_id = "org_elements_tooltip"
    var tooltip = document.getElementById(tooltip_id);

    var org_elements_tooltip_wrapper_category_add = document.getElementById("org_elements_tooltip_wrapper_category_add");
    org_elements_tooltip_wrapper_category_add.classList.replace('hidden','visible');

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
        orgTooltipElementsHide();
    },{ once: true });
};

function orgTooltipElementsHide () {
    var tooltip = document.getElementById("org_elements_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_elements_tooltip_wrapper_category_add = document.getElementById("org_elements_tooltip_wrapper_category_add");
    org_elements_tooltip_wrapper_category_add.classList.replace('visible','hidden');
};

function orgTooltipElementsCategoryShow (element) {
    var tooltip_id = "org_elements_tooltip_category"
    var tooltip = document.getElementById(tooltip_id);

    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var category_id = parent_wrapper.getAttribute('categoryid');

    // set tooltip attributes
    tooltip.setAttribute('categoryid', category_id);

    var org_elements_tooltip_wrapper_category_del = document.getElementById("org_elements_tooltip_wrapper_category_del");
    org_elements_tooltip_wrapper_category_del.classList.replace('hidden','visible');

    var org_elements_tooltip_wrapper_subcategory_add = document.getElementById("org_elements_tooltip_wrapper_subcategory_add");
    org_elements_tooltip_wrapper_subcategory_add.classList.replace('hidden','visible');

    var org_elements_tooltip_wrapper_category_element_add = document.getElementById("org_elements_tooltip_wrapper_category_element_add");
    org_elements_tooltip_wrapper_category_element_add.classList.replace('hidden','visible');

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
        orgTooltipElementsCategoryHide();
    },{ once: true });
};

function orgTooltipElementsCategoryHide () {
    var tooltip = document.getElementById("org_elements_tooltip_category");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_elements_tooltip_wrapper_category_del = document.getElementById("org_elements_tooltip_wrapper_category_del");
    org_elements_tooltip_wrapper_category_del.classList.replace('visible','hidden');

    var org_elements_tooltip_wrapper_subcategory_add = document.getElementById("org_elements_tooltip_wrapper_subcategory_add");
    org_elements_tooltip_wrapper_subcategory_add.classList.replace('visible','hidden');

    var org_elements_tooltip_wrapper_category_element_add = document.getElementById("org_elements_tooltip_wrapper_category_element_add");
    org_elements_tooltip_wrapper_category_element_add.classList.replace('visible','hidden');
};

function orgTooltipElementsSubCategoryShow (element) {
    var tooltip_id = "org_elements_tooltip_subcategory"
    var tooltip = document.getElementById(tooltip_id);

    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var category_id = parent_wrapper.getAttribute('categoryid');
    var subcategory_id = parent_wrapper.getAttribute('subcategoryid');

    // set tooltip attributes
    tooltip.setAttribute('categoryid', category_id);
    tooltip.setAttribute('subcategoryid', subcategory_id);

    var org_elements_tooltip_wrapper_subcategory_del = document.getElementById("org_elements_tooltip_wrapper_subcategory_del");
    org_elements_tooltip_wrapper_subcategory_del.classList.replace('hidden','visible');

    var org_elements_tooltip_wrapper_subcategory_element_add = document.getElementById("org_elements_tooltip_wrapper_subcategory_element_add");
    org_elements_tooltip_wrapper_subcategory_element_add.classList.replace('hidden','visible');

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
        orgTooltipElementsSubCategoryHide();
    },{ once: true });
};

function orgTooltipElementsSubCategoryHide () {
    var tooltip = document.getElementById("org_elements_tooltip_subcategory");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_elements_tooltip_wrapper_subcategory_del = document.getElementById("org_elements_tooltip_wrapper_subcategory_del");
    org_elements_tooltip_wrapper_subcategory_del.classList.replace('visible','hidden');

    var org_elements_tooltip_wrapper_subcategory_element_add = document.getElementById("org_elements_tooltip_wrapper_subcategory_element_add");
    org_elements_tooltip_wrapper_subcategory_element_add.classList.replace('visible','hidden');
};

function orgTooltipElementsCategoryElementShow (element) {
    var tooltip_id = "org_elements_tooltip_category_element"
    var tooltip = document.getElementById(tooltip_id);

    var parent_wrapper_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var category_id = parent_wrapper.getAttribute('categoryid');
    var subcategory_id = parent_wrapper.getAttribute('subcategoryid');
    var element_id = parent_wrapper.getAttribute('elementid');

    // set tooltip attributes
    tooltip.setAttribute('categoryid', category_id);
    tooltip.setAttribute('subcategoryid', subcategory_id);
    tooltip.setAttribute('elementid', element_id);

    var org_elements_tooltip_wrapper_category_element_del = document.getElementById("org_elements_tooltip_wrapper_category_element_del");
    org_elements_tooltip_wrapper_category_element_del.classList.replace('hidden','visible');

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
        orgTooltipElementsCategoryElementHide();
    },{ once: true });
};

function orgTooltipElementsCategoryElementHide () {
    var tooltip = document.getElementById("org_elements_tooltip_category_element");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_elements_tooltip_wrapper_category_element_del = document.getElementById("org_elements_tooltip_wrapper_category_element_del");
    org_elements_tooltip_wrapper_category_element_del.classList.replace('visible','hidden');

};

function orgTooltipElementsSubCategoryElementShow (element) {
    var tooltip_id = "org_elements_tooltip_subcategory_element"
    var tooltip = document.getElementById(tooltip_id);

    var parent_wrapper_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var category_id = parent_wrapper.getAttribute('categoryid');
    var subcategory_id = parent_wrapper.getAttribute('subcategoryid');
    var element_id = parent_wrapper.getAttribute('elementid');

    // set tooltip attributes
    tooltip.setAttribute('categoryid', category_id);
    tooltip.setAttribute('subcategoryid', subcategory_id);
    tooltip.setAttribute('elementid', element_id);

    var org_elements_tooltip_wrapper_subcategory_element_del = document.getElementById("org_elements_tooltip_wrapper_subcategory_element_del");
    org_elements_tooltip_wrapper_subcategory_element_del.classList.replace('hidden','visible');

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
        orgTooltipElementsSubCategoryElementHide();
    },{ once: true });
};

function orgTooltipElementsSubCategoryElementHide () {
    var tooltip = document.getElementById("org_elements_tooltip_subcategory_element");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_elements_tooltip_wrapper_subcategory_element_del = document.getElementById("org_elements_tooltip_wrapper_subcategory_element_del");
    org_elements_tooltip_wrapper_subcategory_element_del.classList.replace('visible','hidden');

};