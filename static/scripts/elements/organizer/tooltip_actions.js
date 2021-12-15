function addElementsCategory() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var category_id = generateID(8);

    // organizer ids
    var org_elements_category_wrapper_id = "org_elements_category_wrapper_" + category_id;

    var org_elements_category_header_id = "org_elements_category_header_" + category_id;
    var org_elements_category_header_content_id = "org_elements_category_header_" + category_id + "_content";
    var org_elements_category_header_settings_id = "org_elements_category_header_" + category_id + "_settings";

    // workspace ids
    var ws_elements_category_wrapper_id = "ws_elements_category_wrapper_" + category_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_elements = document.getElementById('org_wrapper_elements');

    var org_elements_category_wrapper = document.createElement("div");

    var org_elements_category_header = document.createElement("div");
    var org_elements_category_header_arrow = document.createElement("div");
    var org_elements_category_header_icon = document.createElement("div");
    var org_elements_category_header_content = document.createElement("div");
    var org_elements_category_header_spacer = document.createElement("div");
    var org_elements_category_header_settings = document.createElement("div");

    // org item
    org_elements_category_wrapper.id = org_elements_category_wrapper_id;
    org_elements_category_wrapper.className = "flex ";
    org_elements_category_wrapper.className += "column ";
    org_elements_category_wrapper.className += "org_elements_category_wrapper";
    org_elements_category_wrapper.setAttribute('categoryid', category_id);
    org_elements_category_wrapper.setAttribute('subcategoryid', "00000000");

    // 
    org_elements_category_header.id = org_elements_category_header_id;
    org_elements_category_header.className = "flex ";
    org_elements_category_header.className += "orgitem ";
    org_elements_category_header.className += "orgitem_lv2";
    org_elements_category_header.setAttribute('categoryid', category_id);
    org_elements_category_header.setAttribute('subcategoryid', "00000000");

    //
    org_elements_category_header_arrow.className = "flex ";
    org_elements_category_header_arrow.className += "org_svg_arrow_down";
    org_elements_category_header_arrow.onclick = function () {
        orgToggleCollapse(this);
    };

    //
    org_elements_category_header_icon.className = "flex ";
    org_elements_category_header_icon.className += "org_svg_book_open_dark";
    org_elements_category_header_icon.onclick = function () {
        setFocusElementsCategory(this);
    };

    //
    org_elements_category_header_content.id = org_elements_category_header_content_id;
    org_elements_category_header_content.className = "flex ";
    org_elements_category_header_content.className += "org_content";
    org_elements_category_header_content.innerHTML += "Category " + category_id;
    org_elements_category_header_content.onclick = function () {
        setFocusElementsCategory(this);
    };

    //
    org_elements_category_header_spacer.className = "flex ";
    org_elements_category_header_spacer.className += "org_spacer";

    //
    org_elements_category_header_settings.id = org_elements_category_header_settings_id;
    org_elements_category_header_settings.className = "flex ";
    org_elements_category_header_settings.className += "org_svg_settings";
    org_elements_category_header_settings.onclick = function () {
        orgTooltipElementsCategoryShow(this);
    };

    // 
    org_elements_category_header.appendChild(org_elements_category_header_arrow);
    org_elements_category_header.appendChild(org_elements_category_header_icon);
    org_elements_category_header.appendChild(org_elements_category_header_content);
    org_elements_category_header.appendChild(org_elements_category_header_spacer);
    org_elements_category_header.appendChild(org_elements_category_header_settings);

    org_elements_category_wrapper.appendChild(org_elements_category_header);

    // 
    org_elements.appendChild(org_elements_category_wrapper);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_elements = document.getElementById("ws_wrapper_elements");

    var ws_elements_category_wrapper = document.createElement("div");

    //
    ws_elements_category_wrapper.id = ws_elements_category_wrapper_id;
    ws_elements_category_wrapper.className = "flex ";
    ws_elements_category_wrapper.className += "column ";
    ws_elements_category_wrapper.className += "item_visible ";
    ws_elements_category_wrapper.className += "ws_elements_category_wrapper";
    ws_elements_category_wrapper.setAttribute('categoryid', category_id);
    ws_elements_category_wrapper.setAttribute('subcategoryid', "00000000");

    ws_elements.appendChild(ws_elements_category_wrapper);

    orgTooltipElementsHide();

    updateElementsFocus();
};

function delElementsCategory() {
    var tooltip = document.getElementById("org_elements_tooltip_category");
    var category_id = tooltip.getAttribute('categoryid');

    var org_item_id = "org_elements_category_wrapper_" + category_id;
    var ws_item_id = "ws_elements_category_wrapper_" + category_id;
    var org_item = document.getElementById(org_item_id);
    org_item.remove(); 
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipElementsCategoryHide();
};

function addElementsSubCategory() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var tooltip = document.getElementById("org_elements_tooltip_category");

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var category_id = tooltip.getAttribute('categoryid');
    var subcategory_id = generateID(8);

    // organizer ids
    var org_elements_category_wrapper_id = "org_elements_category_wrapper_" + category_id;
    var org_elements_subcategory_wrapper_id = "org_elements_subcategory_wrapper_" + subcategory_id;

    var org_elements_subcategory_header_id = "org_elements_subcategory_header_" + subcategory_id;
    var org_elements_subcategory_header_content_id = "org_elements_subcategory_header_" + subcategory_id + "_content";
    var org_elements_subcategory_header_settings_id = "org_elements_subcategory_header_" + subcategory_id + "_settings";

    // workspace ids
    var ws_elements_category_wrapper_id = "ws_elements_category_wrapper_" + category_id;
    var ws_elements_subcategory_wrapper_id = "ws_elements_subcategory_wrapper_" + subcategory_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_elements_category = document.getElementById(org_elements_category_wrapper_id);

    var org_elements_subcategory_wrapper = document.createElement("div");

    var org_elements_subcategory_header = document.createElement("div");
    var org_elements_subcategory_header_arrow = document.createElement("div");
    var org_elements_subcategory_header_icon = document.createElement("div");
    var org_elements_subcategory_header_content = document.createElement("div");
    var org_elements_subcategory_header_spacer = document.createElement("div");
    var org_elements_subcategory_header_settings = document.createElement("div");

    // org item
    org_elements_subcategory_wrapper.id = org_elements_subcategory_wrapper_id;
    org_elements_subcategory_wrapper.className = "flex ";
    org_elements_subcategory_wrapper.className += "column ";
    org_elements_subcategory_wrapper.className += "org_elements_subcategory_wrapper";
    org_elements_subcategory_wrapper.setAttribute('categoryid', category_id);
    org_elements_subcategory_wrapper.setAttribute('subcategoryid', subcategory_id);

    // 
    org_elements_subcategory_header.id = org_elements_subcategory_header_id;
    org_elements_subcategory_header.className = "flex ";
    org_elements_subcategory_header.className += "orgitem ";
    org_elements_subcategory_header.className += "orgitem_lv3";
    org_elements_subcategory_header.setAttribute('categoryid', category_id);
    org_elements_subcategory_header.setAttribute('subcategoryid', subcategory_id);

    //
    org_elements_subcategory_header_arrow.className = "flex ";
    org_elements_subcategory_header_arrow.className += "org_svg_arrow_down";
    org_elements_subcategory_header_arrow.onclick = function () {
        orgToggleCollapse(this);
    };

    //
    org_elements_subcategory_header_icon.className = "flex ";
    org_elements_subcategory_header_icon.className += "org_svg_book_open_dark";
    org_elements_subcategory_header_icon.onclick = function () {
        setFocusElementsSubCategory(this);
    };

    //
    org_elements_subcategory_header_content.id = org_elements_subcategory_header_content_id;
    org_elements_subcategory_header_content.className = "flex ";
    org_elements_subcategory_header_content.className += "org_content";
    org_elements_subcategory_header_content.innerHTML += "Subcategory " + subcategory_id;
    org_elements_subcategory_header_content.onclick = function () {
        setFocusElementsSubCategory(this);
    };

    //
    org_elements_subcategory_header_spacer.className = "flex ";
    org_elements_subcategory_header_spacer.className += "org_spacer";

    //
    org_elements_subcategory_header_settings.id = org_elements_subcategory_header_settings_id;
    org_elements_subcategory_header_settings.className = "flex ";
    org_elements_subcategory_header_settings.className += "org_svg_settings";
    org_elements_subcategory_header_settings.onclick = function () {
        orgTooltipElementsSubCategoryShow(this);
    };

    // 
    org_elements_subcategory_header.appendChild(org_elements_subcategory_header_arrow);
    org_elements_subcategory_header.appendChild(org_elements_subcategory_header_icon);
    org_elements_subcategory_header.appendChild(org_elements_subcategory_header_content);
    org_elements_subcategory_header.appendChild(org_elements_subcategory_header_spacer);
    org_elements_subcategory_header.appendChild(org_elements_subcategory_header_settings);

    org_elements_subcategory_wrapper.appendChild(org_elements_subcategory_header);

    // 
    org_elements_category.appendChild(org_elements_subcategory_wrapper);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_elements_category = document.getElementById(ws_elements_category_wrapper_id);

    var ws_elements_subcategory_wrapper = document.createElement("div");

    //
    ws_elements_subcategory_wrapper.id = ws_elements_subcategory_wrapper_id;
    ws_elements_subcategory_wrapper.className = "flex ";
    ws_elements_subcategory_wrapper.className += "column ";
    ws_elements_subcategory_wrapper.className += "item_visible ";
    ws_elements_subcategory_wrapper.className += "ws_elements_subcategory_wrapper";
    ws_elements_subcategory_wrapper.setAttribute('categoryid', category_id);
    ws_elements_subcategory_wrapper.setAttribute('subcategoryid', subcategory_id);

    ws_elements_category.appendChild(ws_elements_subcategory_wrapper);

    orgTooltipElementsCategoryHide();

    updateElementsFocus();
};

function delElementsSubCategory() {
    var tooltip = document.getElementById("org_elements_tooltip_subcategory");
    var subcategory_id = tooltip.getAttribute('subcategoryid');

    var org_item_id = "org_elements_subcategory_wrapper_" + subcategory_id;
    var ws_item_id = "ws_elements_subcategory_wrapper_" + subcategory_id;
    var org_item = document.getElementById(org_item_id);
    org_item.remove(); 
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipElementsSubCategoryHide();
};

function addElementsCategoryElement() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var tooltip = document.getElementById("org_elements_tooltip_category");

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var category_id = tooltip.getAttribute('categoryid');
    var element_id = generateID(8);

    // organizer ids
    var org_elements_category_wrapper_id = "org_elements_category_wrapper_" + category_id;

    var org_elements_category_element_id = "org_elements_category_element_" + element_id;

    // workspace ids
    var ws_elements_category_wrapper_id = "ws_elements_category_wrapper_" + category_id;

    var ws_elements_category_element_id = "ws_elements_category_element_" + element_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_elements_category_wrapper = document.getElementById(org_elements_category_wrapper_id);

    var org_elements_category_element = document.createElement("div");

    var org_elements_category_element_icon = document.createElement("div");
    var org_elements_category_element_content = document.createElement("div");
    var org_elements_category_element_spacer = document.createElement("div");
    var org_elements_category_element_settings = document.createElement("div");

    // 
    org_elements_category_element.id = org_elements_category_element_id;
    org_elements_category_element.className = "flex ";
    org_elements_category_element.className += "orgitem ";
    org_elements_category_element.className += "orgitem_lv3";
    org_elements_category_element.setAttribute('categoryid', category_id);
    org_elements_category_element.setAttribute('subcategoryid', "00000000");
    org_elements_category_element.setAttribute('elementid', element_id);
    org_elements_category_element.setAttribute('wsid', ws_elements_category_element_id);
    org_elements_category_element.setAttribute('wswrapperid', ws_elements_category_wrapper_id);

    // 
    org_elements_category_element_icon.className = "flex ";
    org_elements_category_element_icon.className += "org_svg_filled_element_light";
    org_elements_category_element_icon.onclick = function () {
        setFocusElementsCategoryElement(this);
    };

    // 
    org_elements_category_element_content.id = "org_elements_category_element_" + element_id + "_content";
    org_elements_category_element_content.className = "flex ";
    org_elements_category_element_content.className += "org_content";
    org_elements_category_element_content.innerHTML += "Element " + element_id;
    org_elements_category_element_content.onclick = function () {
        setFocusElementsCategoryElement(this);
    };

    // 
    org_elements_category_element_spacer.className = "flex ";
    org_elements_category_element_spacer.className += "org_spacer";

    // 
    org_elements_category_element_settings.id = "org_elements_category_element_" + element_id + "_settings";
    org_elements_category_element_settings.className = "flex ";
    org_elements_category_element_settings.className += "org_svg_settings";
    org_elements_category_element_settings.onclick = function () {
        orgTooltipElementsCategoryElementShow(this);
    };

    // 
    org_elements_category_element.appendChild(org_elements_category_element_icon);
    org_elements_category_element.appendChild(org_elements_category_element_content);
    org_elements_category_element.appendChild(org_elements_category_element_spacer);
    org_elements_category_element.appendChild(org_elements_category_element_settings);

    org_elements_category_wrapper.insertBefore(org_elements_category_element, org_elements_category_wrapper.childNodes[1]);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_elements_category_wrapper = document.getElementById(ws_elements_category_wrapper_id);

    var ws_elements_category_element = document.createElement("div");

    // 
    ws_elements_category_element.id = ws_elements_category_element_id;
    ws_elements_category_element.className = "flex ";
    ws_elements_category_element.className += "page ";
    ws_elements_category_element.className += "item_visible ";
    ws_elements_category_element.className += "ws_elements_category_element";
    ws_elements_category_element.innerHTML += "Element " + element_id;
    ws_elements_category_element.setAttribute('categoryid', category_id);
    ws_elements_category_element.setAttribute('subcategoryid', "00000000");
    ws_elements_category_element.setAttribute('elementid', element_id);

    // 
    ws_elements_category_wrapper.appendChild(ws_elements_category_element);

    ws_elements_category_wrapper.insertBefore(ws_elements_category_element, ws_elements_category_wrapper.childNodes[0]);

    orgTooltipElementsCategoryHide();

    updateElementsFocus();
};

function delElementsCategoryElement() {
    var tooltip = document.getElementById("org_elements_tooltip_category_element");
    var element_id = tooltip.getAttribute('elementid');
 
    var org_item_id = "org_elements_category_element_" + element_id
    var org_item = document.getElementById(org_item_id);
    org_item.remove();
    var ws_item_id = "ws_elements_category_element_" + element_id
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 
 
    orgTooltipElementsCategoryElementHide();
};

function addElementsSubCategoryElement() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // tooltip /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var tooltip = document.getElementById("org_elements_tooltip_subcategory");

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var category_id = tooltip.getAttribute('categoryid');
    var subcategory_id = tooltip.getAttribute('subcategoryid');
    var element_id = generateID(8);

    // organizer ids
    var org_elements_subcategory_wrapper_id = "org_elements_subcategory_wrapper_" + subcategory_id;

    var org_elements_subcategory_element_id = "org_elements_subcategory_element_" + element_id;

    // workspace ids
    var ws_elements_subcategory_wrapper_id = "ws_elements_subcategory_wrapper_" + subcategory_id;

    var ws_elements_subcategory_element_id = "ws_elements_subcategory_element_" + element_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_elements_subcategory_wrapper = document.getElementById(org_elements_subcategory_wrapper_id);

    var org_elements_subcategory_element = document.createElement("div");

    var org_elements_subcategory_element_icon = document.createElement("div");
    var org_elements_subcategory_element_content = document.createElement("div");
    var org_elements_subcategory_element_spacer = document.createElement("div");
    var org_elements_subcategory_element_settings = document.createElement("div");

    // 
    org_elements_subcategory_element.id = org_elements_subcategory_element_id;
    org_elements_subcategory_element.className = "flex ";
    org_elements_subcategory_element.className += "orgitem ";
    org_elements_subcategory_element.className += "orgitem_lv4";
    org_elements_subcategory_element.setAttribute('categoryid', category_id);
    org_elements_subcategory_element.setAttribute('subcategoryid', subcategory_id);
    org_elements_subcategory_element.setAttribute('elementid', element_id);

    // 
    org_elements_subcategory_element_icon.className = "flex ";
    org_elements_subcategory_element_icon.className += "org_svg_filled_element_light";
    org_elements_subcategory_element_icon.onclick = function () {
        setFocusElementsSubCategoryElement(this);
    };

    // 
    org_elements_subcategory_element_content.id = "org_elements_subcategory_element_" + element_id + "_content";
    org_elements_subcategory_element_content.className = "flex ";
    org_elements_subcategory_element_content.className += "org_content";
    org_elements_subcategory_element_content.innerHTML += "Element " + element_id;
    org_elements_subcategory_element_content.onclick = function () {
        setFocusElementsSubCategoryElement(this);
    };

    // 
    org_elements_subcategory_element_spacer.className = "flex ";
    org_elements_subcategory_element_spacer.className += "org_spacer";

    // 
    org_elements_subcategory_element_settings.id = "org_elements_subcategory_element_" + element_id + "_settings";
    org_elements_subcategory_element_settings.className = "flex ";
    org_elements_subcategory_element_settings.className += "org_svg_settings";
    org_elements_subcategory_element_settings.onclick = function () {
        orgTooltipElementsSubCategoryElementShow(this);
    };

    // 
    org_elements_subcategory_element.appendChild(org_elements_subcategory_element_icon);
    org_elements_subcategory_element.appendChild(org_elements_subcategory_element_content);
    org_elements_subcategory_element.appendChild(org_elements_subcategory_element_spacer);
    org_elements_subcategory_element.appendChild(org_elements_subcategory_element_settings);

    org_elements_subcategory_wrapper.insertBefore(org_elements_subcategory_element, org_elements_subcategory_wrapper.childNodes[1]);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_elements_subcategory_wrapper = document.getElementById(ws_elements_subcategory_wrapper_id);

    var ws_elements_subcategory_element = document.createElement("div");

    // 
    ws_elements_subcategory_element.id = ws_elements_subcategory_element_id;
    ws_elements_subcategory_element.className = "flex ";
    ws_elements_subcategory_element.className += "page ";
    ws_elements_subcategory_element.className += "item_visible ";
    ws_elements_subcategory_element.className += "ws_elements_subcategory_element";
    ws_elements_subcategory_element.innerHTML += "Element " + element_id;
    ws_elements_subcategory_element.setAttribute('categoryid', category_id);
    ws_elements_subcategory_element.setAttribute('subcategoryid', subcategory_id);
    ws_elements_subcategory_element.setAttribute('elementid', element_id);

    // 
    ws_elements_subcategory_wrapper.appendChild(ws_elements_subcategory_element);

    ws_elements_subcategory_wrapper.insertBefore(ws_elements_subcategory_element, ws_elements_subcategory_wrapper.childNodes[0]);

    orgTooltipElementsSubCategoryHide();

    updateElementsFocus();
};

function delElementsSubCategoryElement() {
   var tooltip = document.getElementById("org_elements_tooltip_subcategory_element");
   var element_id = tooltip.getAttribute('elementid');

   var org_item_id = "org_elements_subcategory_element_" + element_id
   var org_item = document.getElementById(org_item_id);
   org_item.remove();
   var ws_item_id = "ws_elements_subcategory_element_" + element_id
   var ws_item = document.getElementById(ws_item_id);
   ws_item.remove(); 

   orgTooltipElementsSubCategoryElementHide();
};




















// elements
// add category


// category
// add subcategory
// add element
// delete category


// subcategory
// delete subcategory
// add element


// uncategorized
// add element


// element
// delete element
// add element









































