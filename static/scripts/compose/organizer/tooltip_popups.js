 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// front matter ////////////////////////////////////////////////////////////////////////////////////////////////////////

function orgTooltipFrontShow (element) {
    // hide half title tooltip option if the section exists
    var org_item_half_title = document.getElementById("org_item_half_title");
    var org_front_matter_tooltip_wrapper_half_title = document.getElementById("org_front_matter_tooltip_wrapper_half_title");
    var org_front_matter_tooltip_wrapper_half_title_del = document.getElementById("org_front_matter_tooltip_wrapper_half_title_del");
    org_front_matter_tooltip_wrapper_half_title.classList.replace('hidden','visible');
    if (org_item_half_title) {
        org_front_matter_tooltip_wrapper_half_title.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_half_title.style.height = "0px";
        org_front_matter_tooltip_wrapper_half_title_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_half_title_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_half_title.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_half_title.style.height = "21px";
        org_front_matter_tooltip_wrapper_half_title_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_half_title_del.style.height = "0px";
    }

    // hide title tooltip option if the section exists
    var org_item_title = document.getElementById("org_item_title");
    var org_front_matter_tooltip_wrapper_title = document.getElementById("org_front_matter_tooltip_wrapper_title");
    var org_front_matter_tooltip_wrapper_title_del = document.getElementById("org_front_matter_tooltip_wrapper_title_del");
    org_front_matter_tooltip_wrapper_title.classList.replace('hidden','visible');
    if (org_item_title) {
        org_front_matter_tooltip_wrapper_title.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_title.style.height = "0px";
        org_front_matter_tooltip_wrapper_title_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_title_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_title.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_title.style.height = "21px";
        org_front_matter_tooltip_wrapper_title_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_title_del.style.height = "0px";
    }

    // hide other works tooltip option if the section exists
    var org_item_other_works = document.getElementById("org_item_other_works");
    var org_front_matter_tooltip_wrapper_other_works = document.getElementById("org_front_matter_tooltip_wrapper_other_works");
    var org_front_matter_tooltip_wrapper_other_works_del = document.getElementById("org_front_matter_tooltip_wrapper_other_works_del");
    org_front_matter_tooltip_wrapper_other_works.classList.replace('hidden','visible');
    if (org_item_other_works) {
        org_front_matter_tooltip_wrapper_other_works.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_other_works.style.height = "0px";
        org_front_matter_tooltip_wrapper_other_works_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_other_works_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_other_works.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_other_works.style.height = "21px";
        org_front_matter_tooltip_wrapper_other_works_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_other_works_del.style.height = "0px";
    }

    // hide copyright tooltip option if the section exists
    var org_item_copyright = document.getElementById("org_item_copyright");
    var org_front_matter_tooltip_wrapper_copyright = document.getElementById("org_front_matter_tooltip_wrapper_copyright");
    var org_front_matter_tooltip_wrapper_copyright_del = document.getElementById("org_front_matter_tooltip_wrapper_copyright_del");
    org_front_matter_tooltip_wrapper_copyright.classList.replace('hidden','visible');
    if (org_item_copyright) {
        org_front_matter_tooltip_wrapper_copyright.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_copyright.style.height = "0px";
        org_front_matter_tooltip_wrapper_copyright_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_copyright_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_copyright.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_copyright.style.height = "21px";
        org_front_matter_tooltip_wrapper_copyright_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_copyright_del.style.height = "0px";
    }

    // hide dedication tooltip option if the section exists
    var org_item_dedication = document.getElementById("org_item_dedication");
    var org_front_matter_tooltip_wrapper_dedication = document.getElementById("org_front_matter_tooltip_wrapper_dedication");
    var org_front_matter_tooltip_wrapper_dedication_del = document.getElementById("org_front_matter_tooltip_wrapper_dedication_del");
    org_front_matter_tooltip_wrapper_dedication.classList.replace('hidden','visible');
    if (org_item_dedication) {
        org_front_matter_tooltip_wrapper_dedication.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_dedication.style.height = "0px";
        org_front_matter_tooltip_wrapper_dedication_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_dedication_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_dedication.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_dedication.style.height = "21px";
        org_front_matter_tooltip_wrapper_dedication_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_dedication_del.style.height = "0px";
    }

    // hide epigraph tooltip option if the section exists
    var org_item_epigraph = document.getElementById("org_item_epigraph");
    var org_front_matter_tooltip_wrapper_epigraph = document.getElementById("org_front_matter_tooltip_wrapper_epigraph");
    var org_front_matter_tooltip_wrapper_epigraph_del = document.getElementById("org_front_matter_tooltip_wrapper_epigraph_del");
    org_front_matter_tooltip_wrapper_epigraph.classList.replace('hidden','visible');
    if (org_item_epigraph) {
        org_front_matter_tooltip_wrapper_epigraph.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_epigraph.style.height = "0px";
        org_front_matter_tooltip_wrapper_epigraph_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_epigraph_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_epigraph.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_epigraph.style.height = "21px";
        org_front_matter_tooltip_wrapper_epigraph_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_epigraph_del.style.height = "0px";
    }

    // hide table of contents tooltip option if the section exists
    var org_item_toc = document.getElementById("org_item_toc");
    var org_front_matter_tooltip_wrapper_toc = document.getElementById("org_front_matter_tooltip_wrapper_toc");
    var org_front_matter_tooltip_wrapper_toc_del = document.getElementById("org_front_matter_tooltip_wrapper_toc_del");
    org_front_matter_tooltip_wrapper_toc.classList.replace('hidden','visible');
    if (org_item_toc) {
        org_front_matter_tooltip_wrapper_toc.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_toc.style.height = "0px";
        org_front_matter_tooltip_wrapper_toc_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_toc_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_toc.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_toc.style.height = "21px";
        org_front_matter_tooltip_wrapper_toc_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_toc_del.style.height = "0px";
    }

    // hide foreword tooltip option if the section exists
    var org_item_foreword = document.getElementById("org_item_foreword");
    var org_front_matter_tooltip_wrapper_foreword = document.getElementById("org_front_matter_tooltip_wrapper_foreword");
    var org_front_matter_tooltip_wrapper_foreword_del = document.getElementById("org_front_matter_tooltip_wrapper_foreword_del");
    org_front_matter_tooltip_wrapper_foreword_del.classList.replace('hidden','visible');
    if (org_item_foreword) {
        org_front_matter_tooltip_wrapper_foreword.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_foreword.style.height = "0px";
        org_front_matter_tooltip_wrapper_foreword_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_foreword_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_foreword.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_foreword.style.height = "21px";
        org_front_matter_tooltip_wrapper_foreword_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_foreword_del.style.height = "0px";
    }

    // hide preface tooltip option if the section exists
    var org_item_preface = document.getElementById("org_item_preface");
    var org_front_matter_tooltip_wrapper_preface = document.getElementById("org_front_matter_tooltip_wrapper_preface");
    var org_front_matter_tooltip_wrapper_preface_del = document.getElementById("org_front_matter_tooltip_wrapper_preface_del");
    org_front_matter_tooltip_wrapper_preface.classList.replace('hidden','visible');
    if (org_item_preface) {
        org_front_matter_tooltip_wrapper_preface.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_preface.style.height = "0px";
        org_front_matter_tooltip_wrapper_preface_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_preface_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_preface.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_preface.style.height = "21px";
        org_front_matter_tooltip_wrapper_preface_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_preface_del.style.height = "0px";
    }

    // hide acknowledgements tooltip option if the section exists
    var org_item_acknowledgements = document.getElementById("org_item_acknowledgements");
    var org_front_matter_tooltip_wrapper_acknowledgements = document.getElementById("org_front_matter_tooltip_wrapper_acknowledgements");
    var org_front_matter_tooltip_wrapper_acknowledgements_del = document.getElementById("org_front_matter_tooltip_wrapper_acknowledgements_del");
    org_front_matter_tooltip_wrapper_acknowledgements.classList.replace('hidden','visible');
    if (org_item_acknowledgements) {
        org_front_matter_tooltip_wrapper_acknowledgements.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_acknowledgements.style.height = "0px";
        org_front_matter_tooltip_wrapper_acknowledgements_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_acknowledgements_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_acknowledgements.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_acknowledgements.style.height = "21px";
        org_front_matter_tooltip_wrapper_acknowledgements_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_acknowledgements_del.style.height = "0px";
    }

    // hide introduction tooltip option if the section exists
    var org_item_introduction = document.getElementById("org_item_introduction");
    var org_front_matter_tooltip_wrapper_introduction = document.getElementById("org_front_matter_tooltip_wrapper_introduction");
    var org_front_matter_tooltip_wrapper_introduction_del = document.getElementById("org_front_matter_tooltip_wrapper_introduction_del");
    org_front_matter_tooltip_wrapper_introduction.classList.replace('hidden','visible');
    if (org_item_introduction) {
        org_front_matter_tooltip_wrapper_introduction.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_introduction.style.height = "0px";
        org_front_matter_tooltip_wrapper_introduction_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_introduction_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_introduction.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_introduction.style.height = "21px";
        org_front_matter_tooltip_wrapper_introduction_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_introduction_del.style.height = "0px";
    }

    // hide prologue tooltip option if the section exists
    var org_item_prologue = document.getElementById("org_item_prologue");
    var org_front_matter_tooltip_wrapper_prologue = document.getElementById("org_front_matter_tooltip_wrapper_prologue");
    var org_front_matter_tooltip_wrapper_prologue_del = document.getElementById("org_front_matter_tooltip_wrapper_prologue_del");
    org_front_matter_tooltip_wrapper_prologue.classList.replace('hidden','visible');
    if (org_item_prologue) {
        org_front_matter_tooltip_wrapper_prologue.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_prologue.style.height = "0px";
        org_front_matter_tooltip_wrapper_prologue_del.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_prologue_del.style.height = "21px";
    } else {
        org_front_matter_tooltip_wrapper_prologue.classList.replace('hidden','visible');
        org_front_matter_tooltip_wrapper_prologue.style.height = "21px";
        org_front_matter_tooltip_wrapper_prologue_del.classList.replace('visible','hidden');
        org_front_matter_tooltip_wrapper_prologue_del.style.height = "0px";
    }

    // get position information
    var parent_id = element.parentElement.id;
    var tooltip_id = "org_front_matter_tooltip"
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
        orgTooltipFrontHide();
    },{ once: true });
};

function orgTooltipFrontHide () {
    var tooltip = document.getElementById("org_front_matter_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_front_matter_tooltip_wrapper_half_title = document.getElementById("org_front_matter_tooltip_wrapper_half_title");
    var org_front_matter_tooltip_wrapper_half_title_del = document.getElementById("org_front_matter_tooltip_wrapper_half_title_del");
    var org_front_matter_tooltip_wrapper_title = document.getElementById("org_front_matter_tooltip_wrapper_title");
    var org_front_matter_tooltip_wrapper_title_del = document.getElementById("org_front_matter_tooltip_wrapper_title_del");
    var org_front_matter_tooltip_wrapper_other_works = document.getElementById("org_front_matter_tooltip_wrapper_other_works");
    var org_front_matter_tooltip_wrapper_other_works_del = document.getElementById("org_front_matter_tooltip_wrapper_other_works_del");
    var org_front_matter_tooltip_wrapper_copyright = document.getElementById("org_front_matter_tooltip_wrapper_copyright");
    var org_front_matter_tooltip_wrapper_copyright_del = document.getElementById("org_front_matter_tooltip_wrapper_copyright_del");
    var org_front_matter_tooltip_wrapper_epigraph = document.getElementById("org_front_matter_tooltip_wrapper_epigraph");
    var org_front_matter_tooltip_wrapper_epigraph_del = document.getElementById("org_front_matter_tooltip_wrapper_epigraph_del");
    var org_front_matter_tooltip_wrapper_toc = document.getElementById("org_front_matter_tooltip_wrapper_toc");
    var org_front_matter_tooltip_wrapper_toc_del = document.getElementById("org_front_matter_tooltip_wrapper_toc_del");
    var org_front_matter_tooltip_wrapper_foreword = document.getElementById("org_front_matter_tooltip_wrapper_foreword");
    var org_front_matter_tooltip_wrapper_foreword_del = document.getElementById("org_front_matter_tooltip_wrapper_foreword_del");
    var org_front_matter_tooltip_wrapper_preface = document.getElementById("org_front_matter_tooltip_wrapper_preface");
    var org_front_matter_tooltip_wrapper_preface_del = document.getElementById("org_front_matter_tooltip_wrapper_preface_del");
    var org_front_matter_tooltip_wrapper_acknowledgements = document.getElementById("org_front_matter_tooltip_wrapper_acknowledgements");
    var org_front_matter_tooltip_wrapper_acknowledgements_del = document.getElementById("org_front_matter_tooltip_wrapper_acknowledgements_del");
    var org_front_matter_tooltip_wrapper_introduction = document.getElementById("org_front_matter_tooltip_wrapper_introduction");
    var org_front_matter_tooltip_wrapper_introduction_del = document.getElementById("org_front_matter_tooltip_wrapper_introduction_del");
    var org_front_matter_tooltip_wrapper_prologue = document.getElementById("org_front_matter_tooltip_wrapper_prologue");
    var org_front_matter_tooltip_wrapper_prologue_del = document.getElementById("org_front_matter_tooltip_wrapper_prologue_del");

    org_front_matter_tooltip_wrapper_half_title.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_half_title_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_title.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_title_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_other_works.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_other_works_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_copyright.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_copyright_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_dedication.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_dedication_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_epigraph.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_epigraph_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_toc.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_toc_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_foreword.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_foreword_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_preface.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_preface_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_acknowledgements.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_acknowledgements_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_introduction.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_introduction_del.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_prologue.classList.replace('visible','hidden');
    org_front_matter_tooltip_wrapper_prologue_del.classList.replace('visible','hidden');
};

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// body matter /////////////////////////////////////////////////////////////////////////////////////////////////////////

function orgTooltipBodyShow (element) {
    var tooltip_id = "org_body_matter_tooltip"
    var tooltip = document.getElementById(tooltip_id);

    var org_body_matter_tooltip_wrapper_part_module = document.getElementById("org_body_matter_tooltip_wrapper_part_module");
    org_body_matter_tooltip_wrapper_part_module.classList.replace('hidden','visible');

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
        orgTooltipBodyHide();
    },{ once: true });
};

function orgTooltipBodyHide () {
    var tooltip = document.getElementById("org_body_matter_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_body_matter_tooltip_wrapper_part_module = document.getElementById("org_body_matter_tooltip_wrapper_part_module");
    org_body_matter_tooltip_wrapper_part_module.classList.replace('visible','hidden');
}

function orgTooltipPartShow (element) {
    var tooltip_id = "org_body_matter_tooltip_part_module"
    var tooltip = document.getElementById(tooltip_id);

    // get part name
    var org_body_matter_tooltip_part_module_wrapper_chapter = document.getElementById("org_body_matter_tooltip_part_module_wrapper_chapter");
    org_body_matter_tooltip_part_module_wrapper_chapter.classList.replace('hidden','visible');

    var org_body_matter_tooltip_part_module_wrapper_del_part_module = document.getElementById("org_body_matter_tooltip_part_module_wrapper_del_part_module");
    org_body_matter_tooltip_part_module_wrapper_del_part_module.classList.replace('hidden','visible');

    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var part_id = parent_wrapper.getAttribute('partid');

    var title_id = "org_part_title_" + part_id;
    var org_item_title = document.getElementById(title_id);
    var org_body_matter_tooltip_part_module_wrapper_title = document.getElementById("org_body_matter_tooltip_part_module_wrapper_title");
    var org_body_matter_tooltip_part_module_wrapper_title_del = document.getElementById("org_body_matter_tooltip_part_module_wrapper_title_del");
    org_body_matter_tooltip_part_module_wrapper_title.classList.replace('hidden','visible');
    if (org_item_title) {
        org_body_matter_tooltip_part_module_wrapper_title.classList.replace('visible','hidden');
        org_body_matter_tooltip_part_module_wrapper_title.style.height = "0px";
        org_body_matter_tooltip_part_module_wrapper_title_del.classList.replace('hidden','visible');
        org_body_matter_tooltip_part_module_wrapper_title_del.style.height = "21px";
    } else {
        org_body_matter_tooltip_part_module_wrapper_title.classList.replace('hidden','visible');
        org_body_matter_tooltip_part_module_wrapper_title.style.height = "21px";
        org_body_matter_tooltip_part_module_wrapper_title_del.classList.replace('visible','hidden');
        org_body_matter_tooltip_part_module_wrapper_title_del.style.height = "0px";
    }

    var epigraph_id = "org_part_epigraph_" + part_id;
    var org_item_epigraph = document.getElementById(epigraph_id);
    var org_body_matter_tooltip_part_module_wrapper_epigraph = document.getElementById("org_body_matter_tooltip_part_module_wrapper_epigraph");
    var org_body_matter_tooltip_part_module_wrapper_epigraph_del = document.getElementById("org_body_matter_tooltip_part_module_wrapper_epigraph_del");
    org_body_matter_tooltip_part_module_wrapper_epigraph.classList.replace('hidden','visible');
    if (org_item_epigraph) {
        org_body_matter_tooltip_part_module_wrapper_epigraph.classList.replace('visible','hidden');
        org_body_matter_tooltip_part_module_wrapper_epigraph.style.height = "0px";
        org_body_matter_tooltip_part_module_wrapper_epigraph_del.classList.replace('hidden','visible');
        org_body_matter_tooltip_part_module_wrapper_epigraph_del.style.height = "21px";
    } else {
        org_body_matter_tooltip_part_module_wrapper_epigraph.classList.replace('hidden','visible');
        org_body_matter_tooltip_part_module_wrapper_epigraph.style.height = "21px";
        org_body_matter_tooltip_part_module_wrapper_epigraph_del.classList.replace('visible','hidden');
        org_body_matter_tooltip_part_module_wrapper_epigraph_del.style.height = "0px";
    }

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

    // set tooltip attributes
    tooltip.setAttribute('partid', part_id);

    // add event to hide tooltip when clicked outside tooltip area
    window.addEventListener('mouseup', function(e){
        orgTooltipPartHide();
    },{ once: true });
};

function orgTooltipPartHide () {
    var tooltip = document.getElementById("org_body_matter_tooltip_part_module");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_body_matter_tooltip_part_module_wrapper_chapter = document.getElementById("org_body_matter_tooltip_part_module_wrapper_chapter");
    org_body_matter_tooltip_part_module_wrapper_chapter.classList.replace('visible','hidden');

    var org_body_matter_tooltip_part_module_wrapper_del_part_module = document.getElementById("org_body_matter_tooltip_part_module_wrapper_del_part_module");
    org_body_matter_tooltip_part_module_wrapper_del_part_module.classList.replace('visible','hidden');

    var org_body_matter_tooltip_part_module_wrapper_title = document.getElementById("org_body_matter_tooltip_part_module_wrapper_title");
    org_body_matter_tooltip_part_module_wrapper_title.classList.replace('visible','hidden');

    var org_body_matter_tooltip_part_module_wrapper_title_del = document.getElementById("org_body_matter_tooltip_part_module_wrapper_title_del");
    org_body_matter_tooltip_part_module_wrapper_title_del.classList.replace('visible','hidden');

    var org_body_matter_tooltip_part_module_wrapper_epigraph = document.getElementById("org_body_matter_tooltip_part_module_wrapper_epigraph");
    org_body_matter_tooltip_part_module_wrapper_epigraph.classList.replace('visible','hidden');

    var org_body_matter_tooltip_part_module_wrapper_epigraph_del = document.getElementById("org_body_matter_tooltip_part_module_wrapper_epigraph_del");
    org_body_matter_tooltip_part_module_wrapper_epigraph_del.classList.replace('visible','hidden');
};

function orgTooltipTitlePartShow (element) {
    var tooltip_id = "org_body_matter_tooltip_part_title"
    var tooltip = document.getElementById(tooltip_id);


    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var part_id = parent_wrapper.getAttribute('partid');
    var chapter_id = parent_wrapper.getAttribute('chapterid');

    // set tooltip attributes
    tooltip.setAttribute('partid',part_id);
    if (chapter_id) {
        tooltip.setAttribute('chapterid',chapter_id);
    }

    var org_body_matter_tooltip_part_title_wrapper_del_title = document.getElementById("org_body_matter_tooltip_part_title_wrapper_del_title");
    org_body_matter_tooltip_part_title_wrapper_del_title.classList.replace('hidden','visible');

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
        orgTooltipTitlePartHide();
    },{ once: true });
};

function orgTooltipTitlePartHide () {
    var tooltip = document.getElementById("org_body_matter_tooltip_part_title");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_body_matter_tooltip_part_title_wrapper_del_title = document.getElementById("org_body_matter_tooltip_part_title_wrapper_del_title");
    org_body_matter_tooltip_part_title_wrapper_del_title.classList.replace('visible','hidden');
};

function orgTooltipEpigraphPartShow (element) {
    var tooltip_id = "org_body_matter_tooltip_part_epigraph"
    var tooltip = document.getElementById(tooltip_id);


    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var part_id = parent_wrapper.getAttribute('partid');
    var chapter_id = parent_wrapper.getAttribute('chapterid');

    // set tooltip attributes
    tooltip.setAttribute('partid',part_id);
    if (chapter_id) {
        tooltip.setAttribute('chapterid',chapter_id);
    }

    var org_body_matter_tooltip_part_epigraph_wrapper_del_epigraph = document.getElementById("org_body_matter_tooltip_part_epigraph_wrapper_del_epigraph");
    org_body_matter_tooltip_part_epigraph_wrapper_del_epigraph.classList.replace('hidden','visible');

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
        orgTooltipEpigraphPartHide();
    },{ once: true });
};

function orgTooltipEpigraphPartHide () {
    var tooltip = document.getElementById("org_body_matter_tooltip_part_epigraph");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_body_matter_tooltip_part_epigraph_wrapper_del_epigraph = document.getElementById("org_body_matter_tooltip_part_epigraph_wrapper_del_epigraph");
    org_body_matter_tooltip_part_epigraph_wrapper_del_epigraph.classList.replace('visible','hidden');
};

function orgTooltipChapterShow (element) {
    var tooltip_id = "org_body_matter_tooltip_chapter"
    var tooltip = document.getElementById(tooltip_id);

    var org_body_matter_tooltip_chapter_wrapper_section = document.getElementById("org_body_matter_tooltip_chapter_wrapper_section");
    org_body_matter_tooltip_chapter_wrapper_section.classList.replace('hidden','visible');

    var org_body_matter_tooltip_chapter_wrapper_del_chapter = document.getElementById("org_body_matter_tooltip_chapter_wrapper_del_chapter");
    org_body_matter_tooltip_chapter_wrapper_del_chapter.classList.replace('hidden','visible');

    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var part_id = parent_wrapper.getAttribute('partid');
    var chapter_id = parent_wrapper.getAttribute('chapterid');

    // set tooltip attributes
    tooltip.setAttribute('partid',part_id);
    tooltip.setAttribute('chapterid',chapter_id);

    var title_id = "org_chapter_title_" + chapter_id;
    var org_item_title = document.getElementById(title_id);
    var org_body_matter_tooltip_chapter_wrapper_title = document.getElementById("org_body_matter_tooltip_chapter_wrapper_title");
    var org_body_matter_tooltip_chapter_wrapper_title_del = document.getElementById("org_body_matter_tooltip_chapter_wrapper_title_del");
    org_body_matter_tooltip_chapter_wrapper_title.classList.replace('hidden','visible');
    if (org_item_title) {
        org_body_matter_tooltip_chapter_wrapper_title.classList.replace('visible','hidden');
        org_body_matter_tooltip_chapter_wrapper_title.style.height = "0px";
        org_body_matter_tooltip_chapter_wrapper_title_del.classList.replace('hidden','visible');
        org_body_matter_tooltip_chapter_wrapper_title_del.style.height = "21px";
    } else {
        org_body_matter_tooltip_chapter_wrapper_title.classList.replace('hidden','visible');
        org_body_matter_tooltip_chapter_wrapper_title.style.height = "21px";
        org_body_matter_tooltip_chapter_wrapper_title_del.classList.replace('visible','hidden');
        org_body_matter_tooltip_chapter_wrapper_title_del.style.height = "0px";
    }

    var epigraph_id = "org_chapter_epigraph_" + chapter_id;
    var org_item_epigraph = document.getElementById(epigraph_id);
    var org_body_matter_tooltip_chapter_wrapper_epigraph = document.getElementById("org_body_matter_tooltip_chapter_wrapper_epigraph");
    var org_body_matter_tooltip_chapter_wrapper_epigraph_del = document.getElementById("org_body_matter_tooltip_chapter_wrapper_epigraph_del");
    org_body_matter_tooltip_chapter_wrapper_epigraph.classList.replace('hidden','visible');
    if (org_item_epigraph) {
        org_body_matter_tooltip_chapter_wrapper_epigraph.classList.replace('visible','hidden');
        org_body_matter_tooltip_chapter_wrapper_epigraph.style.height = "0px";
        org_body_matter_tooltip_chapter_wrapper_epigraph_del.classList.replace('hidden','visible');
        org_body_matter_tooltip_chapter_wrapper_epigraph_del.style.height = "21px";
    } else {
        org_body_matter_tooltip_chapter_wrapper_epigraph.classList.replace('hidden','visible');
        org_body_matter_tooltip_chapter_wrapper_epigraph.style.height = "21px";
        org_body_matter_tooltip_chapter_wrapper_epigraph_del.classList.replace('visible','hidden');
        org_body_matter_tooltip_chapter_wrapper_epigraph_del.style.height = "0px";
    }

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
        orgTooltipChapterHide();
    },{ once: true });
};

function orgTooltipChapterHide () {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_body_matter_tooltip_chapter_wrapper_section = document.getElementById("org_body_matter_tooltip_chapter_wrapper_section");
    org_body_matter_tooltip_chapter_wrapper_section.classList.replace('visible','hidden');

    var org_body_matter_tooltip_chapter_wrapper_del_chapter = document.getElementById("org_body_matter_tooltip_chapter_wrapper_del_chapter");
    org_body_matter_tooltip_chapter_wrapper_del_chapter.classList.replace('visible','hidden');

    var org_body_matter_tooltip_chapter_wrapper_title = document.getElementById("org_body_matter_tooltip_chapter_wrapper_title");
    org_body_matter_tooltip_chapter_wrapper_title.classList.replace('visible','hidden');

    var org_body_matter_tooltip_chapter_wrapper_title_del = document.getElementById("org_body_matter_tooltip_chapter_wrapper_title_del");
    org_body_matter_tooltip_chapter_wrapper_title_del.classList.replace('visible','hidden');

    var org_body_matter_tooltip_chapter_wrapper_epigraph = document.getElementById("org_body_matter_tooltip_chapter_wrapper_epigraph");
    org_body_matter_tooltip_chapter_wrapper_epigraph.classList.replace('visible','hidden');

    var org_body_matter_tooltip_chapter_wrapper_epigraph_del = document.getElementById("org_body_matter_tooltip_chapter_wrapper_epigraph_del");
    org_body_matter_tooltip_chapter_wrapper_epigraph_del.classList.replace('visible','hidden');
};

function orgTooltipTitleChapterShow (element) {
    var tooltip_id = "org_body_matter_tooltip_chapter_title"
    var tooltip = document.getElementById(tooltip_id);


    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var part_id = parent_wrapper.getAttribute('partid');
    var chapter_id = parent_wrapper.getAttribute('chapterid');

    // set tooltip attributes
    tooltip.setAttribute('partid',part_id);
    if (chapter_id) {
        tooltip.setAttribute('chapterid',chapter_id);
    }

    var org_body_matter_tooltip_chapter_title_wrapper_del_title = document.getElementById("org_body_matter_tooltip_chapter_title_wrapper_del_title");
    org_body_matter_tooltip_chapter_title_wrapper_del_title.classList.replace('hidden','visible');

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
        orgTooltipTitleChapterHide();
    },{ once: true });
};

function orgTooltipTitleChapterHide () {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter_title");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_body_matter_tooltip_chapter_title_wrapper_del_title = document.getElementById("org_body_matter_tooltip_chapter_title_wrapper_del_title");
    org_body_matter_tooltip_chapter_title_wrapper_del_title.classList.replace('visible','hidden');
};

function orgTooltipEpigraphChapterShow (element) {
    var tooltip_id = "org_body_matter_tooltip_chapter_epigraph"
    var tooltip = document.getElementById(tooltip_id);


    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var part_id = parent_wrapper.getAttribute('partid');
    var chapter_id = parent_wrapper.getAttribute('chapterid');

    // set tooltip attributes
    tooltip.setAttribute('partid',part_id);
    if (chapter_id) {
        tooltip.setAttribute('chapterid',chapter_id);
    }

    var org_body_matter_tooltip_chapter_epigraph_wrapper_del_epigraph = document.getElementById("org_body_matter_tooltip_chapter_epigraph_wrapper_del_epigraph");
    org_body_matter_tooltip_chapter_epigraph_wrapper_del_epigraph.classList.replace('hidden','visible');

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
        orgTooltipEpigraphChapterHide();
    },{ once: true });
};

function orgTooltipEpigraphChapterHide () {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter_epigraph");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_body_matter_tooltip_chapter_epigraph_wrapper_del_epigraph = document.getElementById("org_body_matter_tooltip_chapter_epigraph_wrapper_del_epigraph");
    org_body_matter_tooltip_chapter_epigraph_wrapper_del_epigraph.classList.replace('visible','hidden');
};

function orgTooltipChapterSectionShow (element) {
    var tooltip_id = "org_body_matter_tooltip_chapter_section"
    var tooltip = document.getElementById(tooltip_id);

    var org_body_matter_tooltip_chapter_section_wrapper_section = document.getElementById("org_body_matter_tooltip_chapter_section_wrapper_section");
    org_body_matter_tooltip_chapter_section_wrapper_section.classList.replace('hidden','visible');

    var org_body_matter_tooltip_chapter_section_wrapper_del_section = document.getElementById("org_body_matter_tooltip_chapter_section_wrapper_del_section");
    org_body_matter_tooltip_chapter_section_wrapper_del_section.classList.replace('hidden','visible');

    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var part_id = parent_wrapper.getAttribute('partid');
    var chapter_id = parent_wrapper.getAttribute('chapterid');
    var section_id = parent_wrapper.getAttribute('sectionid');

    // set tooltip attributes
    tooltip.setAttribute('partid',part_id);
    tooltip.setAttribute('chapterid',chapter_id);
    tooltip.setAttribute('sectionid',section_id);

    // get position information
    var parent_id = element.parentElement.id;
    var pointer = document.getElementById("resizer_left");
    var parent = document.getElementById(parent_id);
    var parentTop = parent.getBoundingClientRect().top;
    var panelBottom = pointer.getBoundingClientRect().bottom;
    var tooltipBottom = tooltip.getBoundingClientRect().bottom;
    var leftPosition = pointer.offsetLeft + 5;
    var section_id = parent.getAttribute('sectionid');

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

    // set tooltip attributes
    tooltip.setAttribute('partid',part_id);
    tooltip.setAttribute('chapterid',chapter_id);
    tooltip.setAttribute('sectionid',section_id);

    // add event to hide tooltip when clicked outside tooltip area
    window.addEventListener('mouseup', function(e){
        orgTooltipChapterSectionHide();
    },{ once: true });
};

function orgTooltipChapterSectionHide () {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter_section");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_body_matter_tooltip_chapter_section_wrapper_section = document.getElementById("org_body_matter_tooltip_chapter_section_wrapper_section");
    org_body_matter_tooltip_chapter_section_wrapper_section.classList.replace('visible','hidden');

    var org_body_matter_tooltip_chapter_section_wrapper_del_section = document.getElementById("org_body_matter_tooltip_chapter_section_wrapper_del_section");
    org_body_matter_tooltip_chapter_section_wrapper_del_section.classList.replace('visible','hidden');
};

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// back matter /////////////////////////////////////////////////////////////////////////////////////////////////////////

function orgTooltipBackShow (element) {

    var org_item_epilogue = document.getElementById("org_item_epilogue");
    var org_back_matter_tooltip_wrapper_epilogue = document.getElementById("org_back_matter_tooltip_wrapper_epilogue");
    var org_back_matter_tooltip_wrapper_epilogue_del = document.getElementById("org_back_matter_tooltip_wrapper_epilogue_del");
    org_back_matter_tooltip_wrapper_epilogue.classList.replace('hidden','visible');
    if (org_item_epilogue) {
        org_back_matter_tooltip_wrapper_epilogue.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_epilogue.style.height = "0px";
        org_back_matter_tooltip_wrapper_epilogue_del.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_epilogue_del.style.height = "21px";
    } else {
        org_back_matter_tooltip_wrapper_epilogue.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_epilogue.style.height = "21px";
        org_back_matter_tooltip_wrapper_epilogue_del.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_epilogue_del.style.height = "0px";
    }

    var org_item_afterword = document.getElementById("org_item_afterword");
    var org_back_matter_tooltip_wrapper_afterword = document.getElementById("org_back_matter_tooltip_wrapper_afterword");
    var org_back_matter_tooltip_wrapper_afterword_del = document.getElementById("org_back_matter_tooltip_wrapper_afterword_del");
    org_back_matter_tooltip_wrapper_afterword.classList.replace('hidden','visible');
    if (org_item_afterword) {
        org_back_matter_tooltip_wrapper_afterword.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_afterword.style.height = "0px";
        org_back_matter_tooltip_wrapper_afterword_del.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_afterword_del.style.height = "21px";
    } else {
        org_back_matter_tooltip_wrapper_afterword.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_afterword.style.height = "21px";
        org_back_matter_tooltip_wrapper_afterword_del.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_afterword_del.style.height = "0px";
    }
    
    var org_item_appendix = document.getElementById("org_item_appendix");
    var org_back_matter_tooltip_wrapper_appendix = document.getElementById("org_back_matter_tooltip_wrapper_appendix");
    var org_back_matter_tooltip_wrapper_appendix_del = document.getElementById("org_back_matter_tooltip_wrapper_appendix_del");
    org_back_matter_tooltip_wrapper_appendix.classList.replace('hidden','visible');
    if (org_item_appendix) {
        org_back_matter_tooltip_wrapper_appendix.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_appendix.style.height = "0px";
        org_back_matter_tooltip_wrapper_appendix_del.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_appendix_del.style.height = "21px";
    } else {
        org_back_matter_tooltip_wrapper_appendix.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_appendix.style.height = "21px";
        org_back_matter_tooltip_wrapper_appendix_del.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_appendix_del.style.height = "0px";
    }
    
    var org_item_glossary = document.getElementById("org_item_glossary");
    var org_back_matter_tooltip_wrapper_glossary = document.getElementById("org_back_matter_tooltip_wrapper_glossary");
    var org_back_matter_tooltip_wrapper_glossary_del = document.getElementById("org_back_matter_tooltip_wrapper_glossary_del");
    org_back_matter_tooltip_wrapper_glossary.classList.replace('hidden','visible');
    if (org_item_glossary) {
        org_back_matter_tooltip_wrapper_glossary.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_glossary.style.height = "0px";
        org_back_matter_tooltip_wrapper_glossary_del.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_glossary_del.style.height = "21px";
    } else {
        org_back_matter_tooltip_wrapper_glossary.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_glossary.style.height = "21px";
        org_back_matter_tooltip_wrapper_glossary_del.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_glossary_del.style.height = "0px";
    }
    
    var org_item_bibliography = document.getElementById("org_item_bibliography");
    var org_back_matter_tooltip_wrapper_bibliography = document.getElementById("org_back_matter_tooltip_wrapper_bibliography");
    var org_back_matter_tooltip_wrapper_bibliography_del = document.getElementById("org_back_matter_tooltip_wrapper_bibliography_del");
    org_back_matter_tooltip_wrapper_bibliography.classList.replace('hidden','visible');
    if (org_item_bibliography) {
        org_back_matter_tooltip_wrapper_bibliography.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_bibliography.style.height = "0px";
        org_back_matter_tooltip_wrapper_bibliography_del.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_bibliography_del.style.height = "21px";
    } else {
        org_back_matter_tooltip_wrapper_bibliography.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_bibliography.style.height = "21px";
        org_back_matter_tooltip_wrapper_bibliography_del.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_bibliography_del.style.height = "0px";
    }
    
    var org_item_authorbio = document.getElementById("org_item_authorbio");
    var org_back_matter_tooltip_wrapper_authorbio = document.getElementById("org_back_matter_tooltip_wrapper_authorbio");
    var org_back_matter_tooltip_wrapper_authorbio_del = document.getElementById("org_back_matter_tooltip_wrapper_authorbio_del");
    org_back_matter_tooltip_wrapper_authorbio.classList.replace('hidden','visible');
    if (org_item_authorbio) {
        org_back_matter_tooltip_wrapper_authorbio.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_authorbio.style.height = "0px";
        org_back_matter_tooltip_wrapper_authorbio_del.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_authorbio_del.style.height = "21px";
    } else {
        org_back_matter_tooltip_wrapper_authorbio.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_authorbio.style.height = "21px";
        org_back_matter_tooltip_wrapper_authorbio_del.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_authorbio_del.style.height = "0px";
    }

    var org_item_synopsis = document.getElementById("org_item_synopsis");
    var org_back_matter_tooltip_wrapper_synopsis = document.getElementById("org_back_matter_tooltip_wrapper_synopsis");
    var org_back_matter_tooltip_wrapper_synopsis_del = document.getElementById("org_back_matter_tooltip_wrapper_synopsis_del");
    org_back_matter_tooltip_wrapper_synopsis.classList.replace('hidden','visible');
    if (org_item_synopsis) {
        org_back_matter_tooltip_wrapper_synopsis.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_synopsis.style.height = "0px";
        org_back_matter_tooltip_wrapper_synopsis_del.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_synopsis_del.style.height = "21px";
    } else {
        org_back_matter_tooltip_wrapper_synopsis.classList.replace('hidden','visible');
        org_back_matter_tooltip_wrapper_synopsis.style.height = "21px";
        org_back_matter_tooltip_wrapper_synopsis_del.classList.replace('visible','hidden');
        org_back_matter_tooltip_wrapper_synopsis_del.style.height = "0px";
    }


    // get position information
    var parent_id = element.parentElement.id;
    var tooltip_id = "org_back_matter_tooltip"
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
        orgTooltipBackHide();
    },{ once: true });
};

function orgTooltipBackHide () {
    var tooltip = document.getElementById("org_back_matter_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_back_matter_tooltip_wrapper_epilogue = document.getElementById("org_back_matter_tooltip_wrapper_epilogue");
    var org_back_matter_tooltip_wrapper_epilogue_del = document.getElementById("org_back_matter_tooltip_wrapper_epilogue_del");
    var org_back_matter_tooltip_wrapper_afterword = document.getElementById("org_back_matter_tooltip_wrapper_afterword");
    var org_back_matter_tooltip_wrapper_afterword_del = document.getElementById("org_back_matter_tooltip_wrapper_afterword_del");
    var org_back_matter_tooltip_wrapper_appendix = document.getElementById("org_back_matter_tooltip_wrapper_appendix");
    var org_back_matter_tooltip_wrapper_appendix_del = document.getElementById("org_back_matter_tooltip_wrapper_appendix_del");
    var org_back_matter_tooltip_wrapper_glossary = document.getElementById("org_back_matter_tooltip_wrapper_glossary");
    var org_back_matter_tooltip_wrapper_glossary_del = document.getElementById("org_back_matter_tooltip_wrapper_glossary_del");
    var org_back_matter_tooltip_wrapper_bibliography = document.getElementById("org_back_matter_tooltip_wrapper_bibliography");
    var org_back_matter_tooltip_wrapper_bibliography_del = document.getElementById("org_back_matter_tooltip_wrapper_bibliography_del");
    var org_back_matter_tooltip_wrapper_authorbio = document.getElementById("org_back_matter_tooltip_wrapper_authorbio");
    var org_back_matter_tooltip_wrapper_authorbio_del = document.getElementById("org_back_matter_tooltip_wrapper_authorbio_del");
    var org_back_matter_tooltip_wrapper_synopsis = document.getElementById("org_back_matter_tooltip_wrapper_synopsis");
    var org_back_matter_tooltip_wrapper_synopsis_del = document.getElementById("org_back_matter_tooltip_wrapper_synopsis_del");

    org_back_matter_tooltip_wrapper_epilogue.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_epilogue_del.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_afterword.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_afterword_del.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_appendix.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_appendix_del.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_glossary.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_glossary_del.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_bibliography.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_bibliography_del.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_authorbio.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_authorbio_del.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_synopsis.classList.replace('visible','hidden');
    org_back_matter_tooltip_wrapper_synopsis_del.classList.replace('visible','hidden');
};
