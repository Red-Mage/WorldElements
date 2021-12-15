 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// front matter ////////////////////////////////////////////////////////////////////////////////////////////////////////


function addHalfTitleSection () {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_half_title";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_half_title");
    org_section.setAttribute('wswrapperid', "ws_half_title");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_half_title_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Half Title";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_half_title_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_half_title";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Half Title";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delHalfTitleSection () {
    var org_item = document.getElementById("org_item_half_title");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_half_title");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addTitleSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_title";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_title");
    org_section.setAttribute('wswrapperid', "ws_title");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_title_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Title";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_title_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_title";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Title";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delTitleSection (element) {
    var org_item = document.getElementById("org_item_title");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_title");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addOtherWorksSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_other_works";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_other_works");
    org_section.setAttribute('wswrapperid', "ws_other_works");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_other_works_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Other Works";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_other_works_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_other_works";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Other Works";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delOtherWorksSection (element) {
    var org_item = document.getElementById("org_item_other_works");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_other_works");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addCopyrightSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_copyright";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_copyright");
    org_section.setAttribute('wswrapperid', "ws_copyright");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_copyright_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Copyright";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_copyright_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_copyright";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Copyright";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delCopyrightSection (element) {
    var org_item = document.getElementById("org_item_copyright");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_copyright");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addDedicationSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_dedication";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_dedication");
    org_section.setAttribute('wswrapperid', "ws_dedication");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_dedication_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Dedication";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_dedication_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_dedication";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Dedication";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delDedicationSection (element) {
    var org_item = document.getElementById("org_item_dedication");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_dedication");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addEpigraphSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_epigraph";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_epigraph");
    org_section.setAttribute('wswrapperid', "ws_epigraph");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_epigraph_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Epigraph";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_epigraph_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_epigraph";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Epigraph";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delEpigraphSection (element) {
    var org_item = document.getElementById("org_item_epigraph");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_epigraph");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addTocSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_toc";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_toc");
    org_section.setAttribute('wswrapperid', "ws_toc");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_toc_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Table of Contents";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_toc_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_toc";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Table of Contents";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delTocSection (element) {
    var org_item = document.getElementById("org_item_toc");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_toc");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addForewordSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_foreword";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_foreword");
    org_section.setAttribute('wswrapperid', "ws_foreword");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_foreword_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Foreword";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_foreword_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_foreword";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Foreword";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delForewordSection (element) {
    var org_item = document.getElementById("org_item_foreword");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_foreword");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addPrefaceSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_preface";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_preface");
    org_section.setAttribute('wswrapperid', "ws_preface");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_preface_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Preface";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_preface_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_preface";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Preface";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delPrefaceSection (element) {
    var org_item = document.getElementById("org_item_preface");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_preface");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addAcknowledgementsSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_acknowledgements";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_acknowledgements");
    org_section.setAttribute('wswrapperid', "ws_acknowledgements");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_acknowledgements_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Acknowledgements";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_acknowledgements_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_acknowledgements";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Acknowledgements";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delAcknowledgementsSection (element) {
    var org_item = document.getElementById("org_item_acknowledgements");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_acknowledgements");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addIntroductionSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_introduction";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_introduction");
    org_section.setAttribute('wswrapperid', "ws_introduction");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_introduction_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Introduction";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_introduction_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_introduction";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Introduction";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delIntroductionSection (element) {
    var org_item = document.getElementById("org_item_introduction");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_introduction");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addPrologueSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_front_matter = document.getElementById("org_wrapper_front_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_prologue";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_prologue");
    org_section.setAttribute('wswrapperid', "ws_prologue");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_content.id = "org_item_prologue_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Prologue";
    org_section_content.onclick = function () {
        setFocusComposeFrontMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_prologue_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipFrontShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_front_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_prologue";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "ws_front_matter_section";
    ws_section.innerHTML += "Prologue";

    // 
    ws_wrapper_front_matter.appendChild(ws_section);

    orgTooltipFrontHide();

    updateComposeFocus();
};

function delPrologueSection (element) {
    var org_item = document.getElementById("org_item_prologue");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_prologue");
    ws_item.remove(); 

    orgTooltipFrontHide();
};

function addMapSection (element) {
    orgTooltipFrontHide();
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// body matter /////////////////////////////////////////////////////////////////////////////////////////////////////////

function addPartModule() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var part_id = generateID(8);

    // organizer ids
    var org_part_wrapper_id = "org_part_wrapper_" + part_id;

    var org_part_header_id = "org_part_header_" + part_id;
    var org_part_header_content_id = "org_part_header_" + part_id + "_content";
    var org_part_header_settings_id = "org_part_header_" + part_id + "_settings";

    // var org_part_title_id = "org_part_title_" + part_id;
    // var org_part_title_content_id = "org_part_title_" + part_id + "_content";
    // var org_part_title_settings_id = "org_part_title_" + part_id + "_settings";

    // workspace ids
    var ws_part_wrapper_id = "ws_part_wrapper_" + part_id;

    // var ws_part_title_id = "ws_part_title_" + part_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_body_matter = document.getElementById('org_wrapper_body_matter');

    var org_part_wrapper = document.createElement("div");

    var org_part_header = document.createElement("div");
    var org_part_header_arrow = document.createElement("div");
    var org_part_header_icon = document.createElement("div");
    var org_part_header_content = document.createElement("div");
    var org_part_header_spacer = document.createElement("div");
    var org_part_header_settings = document.createElement("div");

    // org item
    org_part_wrapper.id = org_part_wrapper_id;
    org_part_wrapper.className = "flex ";
    org_part_wrapper.className += "column ";
    org_part_wrapper.className += "org_body_matter_part_wrapper";
    org_part_wrapper.setAttribute('partid', part_id);
    org_part_wrapper.setAttribute('wsid', ws_part_wrapper_id);
    org_part_wrapper.setAttribute('wswrapperid', ws_part_wrapper_id);

    // 
    org_part_header.id = org_part_header_id;
    org_part_header.className = "flex ";
    org_part_header.className += "orgitem ";
    org_part_header.className += "orgitem_lv3";
    org_part_header.setAttribute('partid', part_id);
    org_part_header.setAttribute('wswrapperid', ws_part_wrapper_id);

    //
    org_part_header_arrow.className = "flex ";
    org_part_header_arrow.className += "org_svg_arrow_down";
    org_part_header_arrow.onclick = function () {
        orgToggleCollapse(this);
    };

    //
    org_part_header_icon.className = "flex ";
    org_part_header_icon.className += "org_svg_book_open_dark";
    org_part_header_icon.onclick = function () {
        setFocusComposePart(this);
    };

    //
    org_part_header_content.id = org_part_header_content_id;
    org_part_header_content.className = "flex ";
    org_part_header_content.className += "org_content";
    org_part_header_content.innerHTML += "Part " + part_id;
    org_part_header_content.onclick = function () {
        setFocusComposePart(this);
    };

    //
    org_part_header_spacer.className = "flex ";
    org_part_header_spacer.className += "org_spacer";

    //
    org_part_header_settings.id = org_part_header_settings_id;
    org_part_header_settings.className = "flex ";
    org_part_header_settings.className += "org_svg_settings";
    org_part_header_settings.onclick = function () {
        orgTooltipPartShow(this);
    };

    // 
    org_part_header.appendChild(org_part_header_arrow);
    org_part_header.appendChild(org_part_header_icon);
    org_part_header.appendChild(org_part_header_content);
    org_part_header.appendChild(org_part_header_spacer);
    org_part_header.appendChild(org_part_header_settings);

    org_part_wrapper.appendChild(org_part_header);
    // org_part_wrapper.appendChild(org_part_title);

    // 
    org_body_matter.appendChild(org_part_wrapper);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_body_matter = document.getElementById("ws_wrapper_body_matter");

    var ws_part_wrapper = document.createElement("div");

    // var ws_part_title = document.createElement("div");

    //
    ws_part_wrapper.id = ws_part_wrapper_id;
    ws_part_wrapper.className = "flex ";
    ws_part_wrapper.className += "column ";
    ws_part_wrapper.className += "item_visible ";
    ws_part_wrapper.className += "ws_body_matter_part_wrapper";
    ws_part_wrapper.setAttribute('partid', part_id);

    ws_body_matter.appendChild(ws_part_wrapper);

    orgTooltipPartHide();

    updateComposeFocus();
};

function delPartModule() {
    var tooltip = document.getElementById("org_body_matter_tooltip_part_module");
    var part_id = tooltip.getAttribute('partid');

    var org_item_id = "org_part_wrapper_" + part_id;
    var ws_item_id = "ws_part_wrapper_" + part_id;
    var org_item = document.getElementById(org_item_id);
    org_item.remove(); 
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipPartHide();
};

function addPartModuleTitle(element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var tooltip = document.getElementById("org_body_matter_tooltip_part_module");

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var part_id = tooltip.getAttribute('partid');

    // organizer ids
    var org_part_wrapper_id = "org_part_wrapper_" + part_id;

    var org_part_title_id = "org_part_title_" + part_id;
    var org_part_title_content_id = "org_part_title_" + part_id + "_content";
    var org_part_title_settings_id = "org_part_title_" + part_id + "_settings";

    // workspace ids
    var ws_part_wrapper_id = "ws_part_wrapper_" + part_id;
    var ws_part_title_id = "ws_part_title_" + part_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_part_wrapper = document.getElementById(org_part_wrapper_id);

    var org_part_title = document.createElement("div");

    var org_part_title_icon = document.createElement("div");
    var org_part_title_content = document.createElement("div");
    var org_part_title_spacer = document.createElement("div");
    var org_part_title_settings = document.createElement("div");

    // 
    org_part_title.id = org_part_title_id;
    org_part_title.className = "flex ";
    org_part_title.className += "orgitem ";
    org_part_title.className += "orgitem_lv4";
    org_part_title.setAttribute('partid', part_id);
    org_part_title.setAttribute('chapterid',"0000");
    org_part_title.setAttribute('wsid', ws_part_title_id);
    org_part_title.setAttribute('wswrapperid', ws_part_wrapper_id);

    // 
    org_part_title_icon.className = "flex ";
    org_part_title_icon.className += "org_svg_page_lines_light";
    org_part_title_icon.onclick = function () {
        setFocusComposePartTitle(this);
    };

    // 
    org_part_title_content.id = org_part_title_content_id;
    org_part_title_content.className = "flex ";
    org_part_title_content.className += "org_content";
    org_part_title_content.innerHTML += "Title " + part_id;
    org_part_title_content.onclick = function () {
        setFocusComposePartTitle(this);
    };

    // 
    org_part_title_spacer.className = "flex ";
    org_part_title_spacer.className += "org_spacer";

    //
    org_part_title_settings.id = org_part_title_settings_id;
    org_part_title_settings.className = "flex ";
    org_part_title_settings.className += "org_svg_settings";
    org_part_title_settings.onclick = function () {
        orgTooltipTitlePartShow(this);
    };

    // 
    org_part_title.appendChild(org_part_title_icon);
    org_part_title.appendChild(org_part_title_content);
    org_part_title.appendChild(org_part_title_spacer);
    org_part_title.appendChild(org_part_title_settings);

    org_part_wrapper.insertBefore(org_part_title, org_part_wrapper.childNodes[1]);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_part_wrapper = document.getElementById(ws_part_wrapper_id);

    var ws_part_title = document.createElement("div");

    // 
    ws_part_title.id = ws_part_title_id;
    ws_part_title.className = "flex ";
    ws_part_title.className += "page ";
    ws_part_title.className += "item_visible ";
    ws_part_title.className += "ws_body_matter_part_title";
    ws_part_title.innerHTML += "Part Title " + part_id;
    ws_part_title.setAttribute('partid', part_id);
    ws_part_title.setAttribute('wswrapperid', ws_part_wrapper_id);

    ws_part_wrapper.insertBefore(ws_part_title, ws_part_wrapper.childNodes[1]);

    orgTooltipPartHide();

    updateComposeFocus();
};

function delPartModuleTitle(element) {
    var tooltip = document.getElementById("org_body_matter_tooltip_part_module");

    var part_id = tooltip.getAttribute('partid');

    var org_item_id = "org_part_title_" + part_id
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item_id = "ws_part_title_" + part_id
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipPartHide();
};

function delTitlePartModule(element) {
    var tooltip = document.getElementById("org_body_matter_tooltip_part_title");

    var part_id = tooltip.getAttribute('partid');

    var org_item_id = "org_part_title_" + part_id
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item_id = "ws_part_title_" + part_id
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipTitlePartHide();
};

function addPartModuleEpigraph(element) {
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var tooltip = document.getElementById("org_body_matter_tooltip_part_module");

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var part_id = tooltip.getAttribute('partid');

    // organizer ids
    var org_part_wrapper_id = "org_part_wrapper_" + part_id;

    var org_part_epigraph_id = "org_part_epigraph_" + part_id;
    var org_part_epigraph_content_id = "org_part_epigraph_" + part_id + "_content";
    var org_part_epigraph_settings_id = "org_part_epigraph_" + part_id + "_settings";

    // workspace ids
    var ws_part_wrapper_id = "ws_part_wrapper_" + part_id;
    var ws_part_epigraph_id = "ws_part_epigraph_" + part_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_part_wrapper = document.getElementById(org_part_wrapper_id);

    var org_part_epigraph = document.createElement("div");

    var org_part_epigraph_icon = document.createElement("div");
    var org_part_epigraph_content = document.createElement("div");
    var org_part_epigraph_spacer = document.createElement("div");
    var org_part_epigraph_settings = document.createElement("div");

    // 
    org_part_epigraph.id = org_part_epigraph_id;
    org_part_epigraph.className = "flex ";
    org_part_epigraph.className += "orgitem ";
    org_part_epigraph.className += "orgitem_lv4";
    org_part_epigraph.setAttribute('partid', part_id);
    org_part_epigraph.setAttribute('chapterid',"0000");
    org_part_epigraph.setAttribute('wsid', ws_part_epigraph_id);
    org_part_epigraph.setAttribute('wswrapperid', ws_part_wrapper_id);

    // 
    org_part_epigraph_icon.className = "flex ";
    org_part_epigraph_icon.className += "org_svg_page_lines_light";
    org_part_epigraph_icon.onclick = function () {
        setFocusComposePartEpigraph(this);
    };

    // 
    org_part_epigraph_content.id = org_part_epigraph_content_id;
    org_part_epigraph_content.className = "flex ";
    org_part_epigraph_content.className += "org_content";
    org_part_epigraph_content.innerHTML += "Epigraph " + part_id;
    org_part_epigraph_content.onclick = function () {
        setFocusComposePartEpigraph(this);
    };

    // 
    org_part_epigraph_spacer.className = "flex ";
    org_part_epigraph_spacer.className += "org_spacer";

    //
    org_part_epigraph_settings.id = org_part_epigraph_settings_id;
    org_part_epigraph_settings.className = "flex ";
    org_part_epigraph_settings.className += "org_svg_settings";
    org_part_epigraph_settings.onclick = function () {
        orgTooltipEpigraphPartShow(this);
    };

    // 
    org_part_epigraph.appendChild(org_part_epigraph_icon);
    org_part_epigraph.appendChild(org_part_epigraph_content);
    org_part_epigraph.appendChild(org_part_epigraph_spacer);
    org_part_epigraph.appendChild(org_part_epigraph_settings);

    org_part_wrapper.insertBefore(org_part_epigraph, org_part_wrapper.childNodes[1]);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_part_wrapper = document.getElementById(ws_part_wrapper_id);

    var ws_part_epigraph = document.createElement("div");

    // 
    ws_part_epigraph.id = ws_part_epigraph_id;
    ws_part_epigraph.className = "flex ";
    ws_part_epigraph.className += "page ";
    ws_part_epigraph.className += "item_visible ";
    ws_part_epigraph.className += "ws_body_matter_part_epigraph";
    ws_part_epigraph.innerHTML += "Part Epigraph " + part_id;
    ws_part_epigraph.setAttribute('partid', part_id);
    ws_part_epigraph.setAttribute('wswrapperid', ws_part_wrapper_id);

    ws_part_wrapper.insertBefore(ws_part_epigraph, ws_part_wrapper.childNodes[1]);

    orgTooltipPartHide();

    updateComposeFocus();
};

function delPartModuleEpigraph(element) {
    var tooltip = document.getElementById("org_body_matter_tooltip_part_module");

    var part_id = tooltip.getAttribute('partid');

    var org_item_id = "org_part_epigraph_" + part_id
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item_id = "ws_part_epigraph_" + part_id
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipPartHide();
};

function delEpigraphPartModule(element) {
    var tooltip = document.getElementById("org_body_matter_tooltip_part_epigraph");

    var part_id = tooltip.getAttribute('partid');

    var org_item_id = "org_part_epigraph_" + part_id
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item_id = "ws_part_epigraph_" + part_id
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipEpigraphPartHide();
};

function addChapter(element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var tooltip = document.getElementById("org_body_matter_tooltip_part_module");
    
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var part_id = tooltip.getAttribute('partid');
    var chapter_id = generateID(8);

    // organizer ids
    var org_part_wrapper_id = "org_part_wrapper_" + part_id;

    var org_chapter_wrapper_id = "org_chapter_wrapper_" + chapter_id;

    var org_chapter_header_id = "org_chapter_header_" + chapter_id;
    var org_chapter_content_id = "org_chapter_header_" + chapter_id + "_content";
    var org_chapter_settings_id = "org_chapter_header_" + chapter_id + "_settings";

    // workspace ids
    var ws_part_wrapper_id = "ws_part_wrapper_" + part_id;

    var ws_chapter_wrapper_id = "ws_chapter_wrapper_" + chapter_id;

    //    var ws_chapter_title_id = "ws_chapter_title_" + chapter_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_part_wrapper = document.getElementById(org_part_wrapper_id);

    var org_chapter_wrapper = document.createElement("div");

    var org_chapter_header = document.createElement("div");
    var org_chapter_arrow = document.createElement("div");
    var org_chapter_icon = document.createElement("div");
    var org_chapter_content = document.createElement("div");
    var org_chapter_spacer = document.createElement("div");
    var org_chapter_settings = document.createElement("div");

    //
    org_chapter_wrapper.id = org_chapter_wrapper_id;
    org_chapter_wrapper.className = "flex ";
    org_chapter_wrapper.className += "column";
    org_chapter_wrapper.setAttribute('partid', part_id);
    org_chapter_wrapper.setAttribute('chapterid', chapter_id);
    org_chapter_wrapper.setAttribute('wsid', ws_chapter_wrapper_id);
    org_chapter_wrapper.setAttribute('wswrapperid', ws_part_wrapper_id);

    // 
    org_chapter_header.id = org_chapter_header_id;
    org_chapter_header.className = "flex ";
    org_chapter_header.className += "orgitem ";
    org_chapter_header.className += "orgitem_lv4";
    org_chapter_header.setAttribute('partid', part_id);
    org_chapter_header.setAttribute('chapterid', chapter_id);
    org_chapter_header.setAttribute('wswrapperid', ws_chapter_wrapper_id);

    //
    org_chapter_arrow.className = "flex ";
    org_chapter_arrow.className += "org_svg_arrow_down";
    org_chapter_arrow.onclick = function () {
        orgToggleCollapse(this);
    };

    //
    org_chapter_icon.className = "flex ";
    org_chapter_icon.className += "org_svg_chapter_dark";
    org_chapter_icon.onclick = function () {
        setFocusComposeChapter(this);
    };

    //
    org_chapter_content.id = org_chapter_content_id;
    org_chapter_content.className = "flex ";
    org_chapter_content.className += "org_content";
    org_chapter_content.innerHTML += "Chapter " + chapter_id;
    org_chapter_content.onclick = function () {
        setFocusComposeChapter(this);
    };

    //
    org_chapter_spacer.className = "flex ";
    org_chapter_spacer.className += "org_spacer";

    //
    org_chapter_settings.id = org_chapter_settings_id;
    org_chapter_settings.className = "flex ";
    org_chapter_settings.className += "org_svg_settings";
    org_chapter_settings.onclick = function () {
        orgTooltipChapterShow(this);
    };

    // 
    org_chapter_header.appendChild(org_chapter_arrow);
    org_chapter_header.appendChild(org_chapter_icon);
    org_chapter_header.appendChild(org_chapter_content);
    org_chapter_header.appendChild(org_chapter_spacer);
    org_chapter_header.appendChild(org_chapter_settings);

    org_chapter_wrapper.appendChild(org_chapter_header);

    org_part_wrapper.appendChild(org_chapter_wrapper);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_part_wrapper = document.getElementById(ws_part_wrapper_id);

    var ws_chapter_wrapper = document.createElement("div");

    //    var ws_chapter_title = document.createElement("div");

    // 
    ws_chapter_wrapper.id = ws_chapter_wrapper_id;
    ws_chapter_wrapper.className = "flex ";
    ws_chapter_wrapper.className = "column ";
    ws_chapter_wrapper.className = "item_visible ";
    ws_chapter_wrapper.className += "ws_body_matter_chapter_wrapper";
    ws_chapter_wrapper.setAttribute('partid', part_id);
    ws_chapter_wrapper.setAttribute('chapterid', chapter_id);

    ws_part_wrapper.appendChild(ws_chapter_wrapper);

    orgTooltipChapterHide();

    updateComposeFocus();
};

function delChapter() {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter");
    var chapter_id = tooltip.getAttribute('chapterid');

    var org_item_id = "org_chapter_wrapper_" + chapter_id;
    var ws_item_id = "ws_chapter_wrapper_" + chapter_id;
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipChapterHide();
};

function addChapterTitle() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var tooltip = document.getElementById("org_body_matter_tooltip_chapter");

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var part_id = tooltip.getAttribute('partid');
    var chapter_id = tooltip.getAttribute('chapterid');

    // organizer ids
    var org_chapter_wrapper_id = "org_chapter_wrapper_" + chapter_id;

    var org_chapter_title_id = "org_chapter_title_" + chapter_id;
    var org_chapter_title_content_id = "org_chapter_title_" + chapter_id + "_content";
    var org_chapter_title_settings_id = "org_chapter_title_" + chapter_id + "_settings";

    // workspace ids
    var ws_chapter_wrapper_id = "ws_chapter_wrapper_" + chapter_id;

    var ws_chapter_title_id = "ws_chapter_title_" + chapter_id;


     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_chapter_wrapper = document.getElementById(org_chapter_wrapper_id);
    
    var org_chapter_title = document.createElement("div");

    var org_chapter_title_icon = document.createElement("div");
    var org_chapter_title_content = document.createElement("div");
    var org_chapter_title_spacer = document.createElement("div");
    var org_chapter_title_settings = document.createElement("div");

    // 
    org_chapter_title.id = org_chapter_title_id;
    org_chapter_title.className = "flex ";
    org_chapter_title.className += "orgitem ";
    org_chapter_title.className += "orgitem_lv5";
    org_chapter_title.setAttribute('partid', part_id);
    org_chapter_title.setAttribute('chapterid', chapter_id);
    org_chapter_title.setAttribute('wsid', ws_chapter_title_id);
    org_chapter_title.setAttribute('wswrapperid', ws_chapter_wrapper_id);
        
    // 
    org_chapter_title_icon.className = "flex ";
    org_chapter_title_icon.className += "org_svg_page_lines_light";
    org_chapter_title_icon.onclick = function () {
        setFocusComposeChapterTitle(this);
    };

    // 
    org_chapter_title_content.id = org_chapter_title_content_id;
    org_chapter_title_content.className = "flex ";
    org_chapter_title_content.className += "org_content";
    org_chapter_title_content.innerHTML += "Title " + part_id;
    org_chapter_title_content.onclick = function () {
        setFocusComposeChapterTitle(this);
    };

    // 
    org_chapter_title_spacer.className = "flex ";
    org_chapter_title_spacer.className += "org_spacer";

    // 
    org_chapter_title_settings.id = org_chapter_title_settings_id;
    org_chapter_title_settings.className = "flex ";
    org_chapter_title_settings.className += "org_svg_settings";
    org_chapter_title_settings.onclick = function () {
        orgTooltipTitleChapterShow(this);
    };

    // 
    org_chapter_title.appendChild(org_chapter_title_icon);
    org_chapter_title.appendChild(org_chapter_title_content);
    org_chapter_title.appendChild(org_chapter_title_spacer);
    org_chapter_title.appendChild(org_chapter_title_settings);

    org_chapter_wrapper.insertBefore(org_chapter_title, org_chapter_wrapper.childNodes[1]);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_chapter_title = document.createElement("div");

    var ws_chapter_wrapper = document.getElementById(ws_chapter_wrapper_id);

    // 
    ws_chapter_title.id = ws_chapter_title_id;
    ws_chapter_title.className = "flex ";
    ws_chapter_title.className += "page ";
    ws_chapter_title.className += "item_visible ";
    ws_chapter_title.className += "ws_body_matter_chapter_title";
    ws_chapter_title.innerHTML += "Chapter Title " + chapter_id;
    ws_chapter_title.setAttribute('partid', part_id);
    ws_chapter_title.setAttribute('chapterid', chapter_id);

    // 
    ws_chapter_wrapper.insertBefore(ws_chapter_title, ws_chapter_wrapper.childNodes[0]);

    orgTooltipChapterHide();

    updateComposeFocus();
};

function delChapterTitle() {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter");
    var chapter_id = tooltip.getAttribute('chapterid');

    var org_item_id = "org_chapter_title_" + chapter_id
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item_id = "ws_chapter_title_" + chapter_id
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipChapterHide();
};

function delTitleChapter() {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter_title");
    var chapter_id = tooltip.getAttribute('chapterid');

    var org_item_id = "org_chapter_title_" + chapter_id
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item_id = "ws_chapter_title_" + chapter_id
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipTitleChapterHide();
};

function addChapterEpigraph() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var tooltip = document.getElementById("org_body_matter_tooltip_chapter");

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var part_id = tooltip.getAttribute('partid');
    var chapter_id = tooltip.getAttribute('chapterid');

    // organizer ids
    var org_chapter_wrapper_id = "org_chapter_wrapper_" + chapter_id;

    var org_chapter_epigraph_id = "org_chapter_epigraph_" + chapter_id;
    var org_chapter_epigraph_content_id = "org_chapter_epigraph_" + chapter_id + "_content";
    var org_chapter_epigraph_settings_id = "org_chapter_epigraph_" + chapter_id + "_settings";

    // workspace ids
    var ws_chapter_wrapper_id = "ws_chapter_wrapper_" + chapter_id;

    var ws_chapter_epigraph_id = "ws_chapter_epigraph_" + chapter_id;


     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_chapter_wrapper = document.getElementById(org_chapter_wrapper_id);
    
    var org_chapter_epigraph = document.createElement("div");

    var org_chapter_epigraph_icon = document.createElement("div");
    var org_chapter_epigraph_content = document.createElement("div");
    var org_chapter_epigraph_spacer = document.createElement("div");
    var org_chapter_epigraph_settings = document.createElement("div");

    // 
    org_chapter_epigraph.id = org_chapter_epigraph_id;
    org_chapter_epigraph.className = "flex ";
    org_chapter_epigraph.className += "orgitem ";
    org_chapter_epigraph.className += "orgitem_lv5";
    org_chapter_epigraph.setAttribute('partid', part_id);
    org_chapter_epigraph.setAttribute('chapterid', chapter_id);
    org_chapter_epigraph.setAttribute('wsid', ws_chapter_epigraph_id);
    org_chapter_epigraph.setAttribute('wswrapperid', ws_chapter_wrapper_id);
        
    // 
    org_chapter_epigraph_icon.className = "flex ";
    org_chapter_epigraph_icon.className += "org_svg_page_lines_light";
    org_chapter_epigraph_icon.onclick = function () {
        setFocusComposeChapterEpigraph(this);
    };

    // 
    org_chapter_epigraph_content.id = org_chapter_epigraph_content_id;
    org_chapter_epigraph_content.className = "flex ";
    org_chapter_epigraph_content.className += "org_content";
    org_chapter_epigraph_content.innerHTML += "Epigraph " + part_id;
    org_chapter_epigraph_content.onclick = function () {
        setFocusComposeChapterEpigraph(this);
    };

    // 
    org_chapter_epigraph_spacer.className = "flex ";
    org_chapter_epigraph_spacer.className += "org_spacer";

    // 
    org_chapter_epigraph_settings.id = org_chapter_epigraph_settings_id;
    org_chapter_epigraph_settings.className = "flex ";
    org_chapter_epigraph_settings.className += "org_svg_settings";
    org_chapter_epigraph_settings.onclick = function () {
        orgTooltipEpigraphChapterShow(this);
    };

    // 
    org_chapter_epigraph.appendChild(org_chapter_epigraph_icon);
    org_chapter_epigraph.appendChild(org_chapter_epigraph_content);
    org_chapter_epigraph.appendChild(org_chapter_epigraph_spacer);
    org_chapter_epigraph.appendChild(org_chapter_epigraph_settings);

    org_chapter_wrapper.insertBefore(org_chapter_epigraph, org_chapter_wrapper.childNodes[1]);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_chapter_epigraph = document.createElement("div");

    var ws_chapter_wrapper = document.getElementById(ws_chapter_wrapper_id);

    // 
    ws_chapter_epigraph.id = ws_chapter_epigraph_id;
    ws_chapter_epigraph.className = "flex ";
    ws_chapter_epigraph.className += "page ";
    ws_chapter_epigraph.className += "item_visible ";
    ws_chapter_epigraph.className += "ws_body_matter_chapter_epigraph";
    ws_chapter_epigraph.innerHTML += "Chapter Epigraph " + chapter_id;
    ws_chapter_epigraph.setAttribute('partid', part_id);
    ws_chapter_epigraph.setAttribute('chapterid', chapter_id);

    // 
    ws_chapter_wrapper.insertBefore(ws_chapter_epigraph, ws_chapter_wrapper.childNodes[0]);

    orgTooltipChapterHide();

    updateComposeFocus();
};

function delChapterEpigraph() {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter");
    var chapter_id = tooltip.getAttribute('chapterid');

    var org_item_id = "org_chapter_epigraph_" + chapter_id
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item_id = "ws_chapter_epigraph_" + chapter_id
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipChapterHide();
};

function delEpigraphChapter() {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter_epigraph");
    var chapter_id = tooltip.getAttribute('chapterid');

    var org_item_id = "org_chapter_epigraph_" + chapter_id
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item_id = "ws_chapter_epigraph_" + chapter_id
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipEpigraphChapterHide();
};

function addChapterSection() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter");

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var part_id = tooltip.getAttribute('partid');
    var chapter_id = tooltip.getAttribute('chapterid');
    var section_id = generateID(8);

    // organizer ids
    var org_chapter_wrapper_id = "org_chapter_wrapper_" + chapter_id;

    var org_chapter_section_id = "org_chapter_section_" + section_id;

    // workspace ids
    var ws_chapter_wrapper_id = "ws_chapter_wrapper_" + chapter_id;

    var ws_chapter_section_id = "ws_chapter_section_" + section_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_chapter_wrapper = document.getElementById(org_chapter_wrapper_id);

    var org_chapter_section = document.createElement("div");

    var org_chapter_section_icon = document.createElement("div");
    var org_chapter_section_content = document.createElement("div");
    var org_chapter_section_spacer = document.createElement("div");
    var org_chapter_section_settings = document.createElement("div");

    // 
    org_chapter_section.id = org_chapter_section_id;
    org_chapter_section.className = "flex ";
    org_chapter_section.className += "orgitem ";
    org_chapter_section.className += "orgitem_lv5";
    org_chapter_section.setAttribute('partid', part_id);
    org_chapter_section.setAttribute('chapterid', chapter_id);
    org_chapter_section.setAttribute('sectionid', section_id);
    org_chapter_section.setAttribute('wsid', ws_chapter_section_id);
    org_chapter_section.setAttribute('wswrapperid', ws_chapter_wrapper_id);

    // 
    org_chapter_section_icon.className = "flex ";
    org_chapter_section_icon.className += "org_svg_filled_section_light";
    org_chapter_section_icon.onclick = function () {
        setFocusComposeChapterSection(this);
    };

    // 
    org_chapter_section_content.id = "org_chapter_section_" + section_id + "_content";
    org_chapter_section_content.className = "flex ";
    org_chapter_section_content.className += "org_content";
    org_chapter_section_content.innerHTML += "Section " + section_id;
    org_chapter_section_content.onclick = function () {
        setFocusComposeChapterSection(this);
    };

    // 
    org_chapter_section_spacer.className = "flex ";
    org_chapter_section_spacer.className += "org_spacer";

    // 
    org_chapter_section_settings.id = "org_chapter_section_" + section_id + "_settings";
    org_chapter_section_settings.className = "flex ";
    org_chapter_section_settings.className += "org_svg_settings";
    org_chapter_section_settings.onclick = function () {
        orgTooltipChapterSectionShow(this);
    };

    // 
    org_chapter_section.appendChild(org_chapter_section_icon);
    org_chapter_section.appendChild(org_chapter_section_content);
    org_chapter_section.appendChild(org_chapter_section_spacer);
    org_chapter_section.appendChild(org_chapter_section_settings);

    org_chapter_wrapper.appendChild(org_chapter_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_chapter_wrapper = document.getElementById(ws_chapter_wrapper_id);

    var ws_chapter_section = document.createElement("div");

    // 
    ws_chapter_section.id = ws_chapter_section_id;
    ws_chapter_section.className = "flex ";
    ws_chapter_section.className += "page ";
    ws_chapter_section.className += "item_visible ";
    ws_chapter_section.className += "ws_body_matter_chapter_section";
    ws_chapter_section.innerHTML += "Chapter Section " + section_id;
    ws_chapter_section.setAttribute('partid', part_id);
    ws_chapter_section.setAttribute('chapterid', chapter_id);
    ws_chapter_section.setAttribute('sectionid', section_id);

    // 
    ws_chapter_wrapper.appendChild(ws_chapter_section);

    orgTooltipChapterHide();

    updateComposeFocus();
};

function addSectionChapter() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter_section");

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var part_id = tooltip.getAttribute('partid');
    var chapter_id = tooltip.getAttribute('chapterid');
    var parent_section_id = tooltip.getAttribute('sectionid');
    var section_id = generateID(8);

    // organizer ids
    var org_parent_id = "org_chapter_section_" + parent_section_id;

    var org_chapter_section_id = "org_chapter_section_" + section_id;

    // workspace ids
    var ws_chapter_wrapper_id = "ws_chapter_wrapper_" + chapter_id;

    var ws_parent_id = "ws_chapter_section_" + parent_section_id;

    var ws_chapter_section_id = "ws_chapter_section_" + section_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_parent = document.getElementById(org_parent_id);

    var org_chapter_section = document.createElement("div");

    var org_chapter_section_icon = document.createElement("div");
    var org_chapter_section_content = document.createElement("div");
    var org_chapter_section_spacer = document.createElement("div");
    var org_chapter_section_settings = document.createElement("div");

    // 
    org_chapter_section.id = org_chapter_section_id;
    org_chapter_section.className = "flex ";
    org_chapter_section.className += "orgitem ";
    org_chapter_section.className += "orgitem_lv5";
    org_chapter_section.setAttribute('partid', part_id);
    org_chapter_section.setAttribute('chapterid', chapter_id);
    org_chapter_section.setAttribute('sectionid', section_id);
    org_chapter_section.setAttribute('wsid', ws_chapter_section_id);
    org_chapter_section.setAttribute('wswrapperid', ws_chapter_wrapper_id);

    // 
    org_chapter_section_icon.className = "flex ";
    org_chapter_section_icon.className += "org_svg_filled_section_light";
    org_chapter_section_icon.onclick = function () {
        setFocusComposeChapterSection(this);
    };

    // 
    org_chapter_section_content.id = "org_chapter_section_" + section_id + "_content";
    org_chapter_section_content.className = "flex ";
    org_chapter_section_content.className += "org_content";
    org_chapter_section_content.innerHTML += "Section " + section_id;
    org_chapter_section_content.onclick = function () {
        setFocusComposeChapterSection(this);
    };

    // 
    org_chapter_section_spacer.className = "flex ";
    org_chapter_section_spacer.className += "org_spacer";

    // 
    org_chapter_section_settings.id = "org_chapter_section_" + section_id + "_settings";
    org_chapter_section_settings.className = "flex ";
    org_chapter_section_settings.className += "org_svg_settings";
    org_chapter_section_settings.onclick = function () {
        orgTooltipChapterSectionShow(this);
    };

    // 
    org_chapter_section.appendChild(org_chapter_section_icon);
    org_chapter_section.appendChild(org_chapter_section_content);
    org_chapter_section.appendChild(org_chapter_section_spacer);
    org_chapter_section.appendChild(org_chapter_section_settings);

    org_parent.after(org_chapter_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_parent = document.getElementById(ws_parent_id);

    var ws_chapter_section = document.createElement("div");

    // 
    ws_chapter_section.id = ws_chapter_section_id;
    ws_chapter_section.className = "flex ";
    ws_chapter_section.className += "page ";
    ws_chapter_section.className += "item_visible ";
    ws_chapter_section.className += "ws_body_matter_chapter_section";
    ws_chapter_section.innerHTML += "Chapter Section " + section_id;

    // 
    ws_parent.after(ws_chapter_section);

    orgTooltipChapterHide();

    updateComposeFocus();
};

function delSectionChapter() {
    var tooltip = document.getElementById("org_body_matter_tooltip_chapter_section");
    var section_id = tooltip.getAttribute('sectionid');

    var org_item_id = "org_chapter_section_" + section_id;
    var ws_item_id = "ws_chapter_section_" + section_id;
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipChapterHide();
};

function addBlankSectionChapter (element) {

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// back matter /////////////////////////////////////////////////////////////////////////////////////////////////////////

function addEpilogueSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_back_matter = document.getElementById("org_wrapper_back_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_epilogue";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_epilogue");
    org_section.setAttribute('wswrapperid', "ws_epilogue");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_content.id = "org_item_epilogue_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Epilogue";
    org_section_content.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_epilogue_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipBackShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_back_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_back_matter = document.getElementById("ws_wrapper_back_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_epilogue";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "back_matter_section";
    ws_section.innerHTML += "Epilogue";

    // 
    ws_wrapper_back_matter.appendChild(ws_section);

    orgTooltipBackHide();

    updateComposeFocus();
    };

    function delEpilogueSection (element) {
    var org_item = document.getElementById("org_item_epilogue");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_epilogue");
    ws_item.remove(); 

    orgTooltipBackHide();
};

function addAfterwordSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_back_matter = document.getElementById("org_wrapper_back_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_afterword";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_afterword");
    org_section.setAttribute('wswrapperid', "ws_afterword");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_content.id = "org_item_afterword_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Afterword";
    org_section_content.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_afterword_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipBackShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_back_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_back_matter = document.getElementById("ws_wrapper_back_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_afterword";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "back_matter_section";
    ws_section.innerHTML += "Afterword";

    // 
    ws_wrapper_back_matter.appendChild(ws_section);

    orgTooltipBackHide();

    updateComposeFocus();
};

function delAfterwordSection (element) {
    var org_item = document.getElementById("org_item_afterword");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_afterword");
    ws_item.remove(); 

    orgTooltipBackHide();
};

function addAppendixSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_back_matter = document.getElementById("org_wrapper_back_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_appendix";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_appendix");
    org_section.setAttribute('wswrapperid', "ws_appendix");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_content.id = "org_item_appendix_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Appendix";
    org_section_content.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_appendix_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipBackShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_back_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_back_matter = document.getElementById("ws_wrapper_back_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_appendix";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "back_matter_section";
    ws_section.innerHTML += "Appendix";

    // 
    ws_wrapper_back_matter.appendChild(ws_section);

    orgTooltipBackHide();

    updateComposeFocus();
};

function delAppendixSection (element) {
    var org_item = document.getElementById("org_item_appendix");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_appendix");
    ws_item.remove(); 

    orgTooltipBackHide();
};

function addGlossarySection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_back_matter = document.getElementById("org_wrapper_back_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_glossary";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_glossary");
    org_section.setAttribute('wswrapperid', "ws_glossary");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_content.id = "org_item_glossary_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Glossary";
    org_section_content.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_glossary_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipBackShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_back_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_back_matter = document.getElementById("ws_wrapper_back_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_glossary";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "back_matter_section";
    ws_section.innerHTML += "Glossary";

    // 
    ws_wrapper_back_matter.appendChild(ws_section);

    orgTooltipBackHide();

    updateComposeFocus();
};

function delGlossarySection (element) {
    var org_item = document.getElementById("org_item_glossary");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_glossary");
    ws_item.remove(); 

    orgTooltipBackHide();
};

function addBibliographySection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_back_matter = document.getElementById("org_wrapper_back_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_bibliography";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_bibliography");
    org_section.setAttribute('wswrapperid', "ws_bibliography");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_content.id = "org_item_bibliography_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Bibliography";
    org_section_content.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_bibliography_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipBackShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_back_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_back_matter = document.getElementById("ws_wrapper_back_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_bibliography";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "back_matter_section";
    ws_section.innerHTML += "Bibliography";

    // 
    ws_wrapper_back_matter.appendChild(ws_section);

    orgTooltipBackHide();

    updateComposeFocus();
};

function delBibliographySection (element) {
    var org_item = document.getElementById("org_item_bibliography");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_bibliography");
    ws_item.remove(); 

    orgTooltipBackHide();
};

function addAuthorBioSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_back_matter = document.getElementById("org_wrapper_back_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_authorbio";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_authorbio");
    org_section.setAttribute('wswrapperid', "ws_authorbio");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_content.id = "org_item_authorbio_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Author Bio";
    org_section_content.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_authorbio_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipBackShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_back_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_back_matter = document.getElementById("ws_wrapper_back_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_authorbio";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "back_matter_section";
    ws_section.innerHTML += "Author Bio";

    // 
    ws_wrapper_back_matter.appendChild(ws_section);

    orgTooltipBackHide();

    updateComposeFocus();
};

function delAuthorBioSection (element) {
    var org_item = document.getElementById("org_item_authorbio");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_authorbio");
    ws_item.remove(); 

    orgTooltipBackHide();
};

function addSynopsisSection (element) {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_back_matter = document.getElementById("org_wrapper_back_matter");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_synopsis";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv3";
    org_section.setAttribute('wsid', "ws_synopsis");
    org_section.setAttribute('wswrapperid', "ws_synopsis");

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_content.id = "org_item_synopsis_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Synopsis";
    org_section_content.onclick = function () {
        setFocusComposeBackMatterSection(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_synopsis_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipBackShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_back_matter.appendChild(org_section);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_back_matter = document.getElementById("ws_wrapper_back_matter");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_synopsis";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.className += "back_matter_section";
    ws_section.innerHTML += "Synopsis";

    // 
    ws_wrapper_back_matter.appendChild(ws_section);

    orgTooltipBackHide();

    updateComposeFocus();
};

function delSynopsisSection (element) {
    var org_item = document.getElementById("org_item_synopsis");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_synopsis");
    ws_item.remove(); 

    orgTooltipBackHide();
};
