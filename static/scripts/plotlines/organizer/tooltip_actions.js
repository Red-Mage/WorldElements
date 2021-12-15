function addPlotlinesPlotline() {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // common ids
    var plotline_id = generateID(8);

    // organizer ids
    var org_plotlines_plotline_wrapper_id = "org_plotlines_plotline_wrapper_" + plotline_id;

    var org_plotlines_plotline_header_id = "org_plotlines_plotline_header_" + plotline_id;
    var org_plotlines_plotline_header_content_id = "org_plotlines_plotline_header_" + plotline_id + "_content";
    var org_plotlines_plotline_header_settings_id = "org_plotlines_plotline_header_" + plotline_id + "_settings";

    // workspace ids
    var ws_plotlines_plotline_wrapper_id = "ws_plotlines_plotline_wrapper_" + plotline_id;

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_plotlines = document.getElementById('org_wrapper_plotlines');

    var org_plotlines_plotline_wrapper = document.createElement("div");

    var org_plotlines_plotline_header = document.createElement("div");
    var org_plotlines_plotline_header_arrow = document.createElement("div");
    var org_plotlines_plotline_header_icon = document.createElement("div");
    var org_plotlines_plotline_header_content = document.createElement("div");
    var org_plotlines_plotline_header_spacer = document.createElement("div");
    var org_plotlines_plotline_header_settings = document.createElement("div");

    // org item
    org_plotlines_plotline_wrapper.id = org_plotlines_plotline_wrapper_id;
    org_plotlines_plotline_wrapper.className = "flex ";
    org_plotlines_plotline_wrapper.className += "column ";
    org_plotlines_plotline_wrapper.className += "org_plotlines_plotline_wrapper";
    org_plotlines_plotline_wrapper.setAttribute('plotlineid', plotline_id);

    // 
    org_plotlines_plotline_header.id = org_plotlines_plotline_header_id;
    org_plotlines_plotline_header.className = "flex ";
    org_plotlines_plotline_header.className += "orgitem ";
    org_plotlines_plotline_header.className += "orgitem_lv2";
    org_plotlines_plotline_header.setAttribute('plotlineid', plotline_id);

    //
    org_plotlines_plotline_header_arrow.className = "flex ";
    org_plotlines_plotline_header_arrow.className += "org_svg_arrow_down";
    org_plotlines_plotline_header_arrow.onclick = function () {
        orgToggleCollapse(this);
    };

    //
    org_plotlines_plotline_header_icon.className = "flex ";
    org_plotlines_plotline_header_icon.className += "org_svg_book_open_dark";
    org_plotlines_plotline_header_icon.onclick = function () {
        setFocusPlotlinesPlotline(this);
    };

    //
    org_plotlines_plotline_header_content.id = org_plotlines_plotline_header_content_id;
    org_plotlines_plotline_header_content.className = "flex ";
    org_plotlines_plotline_header_content.className += "org_content";
    org_plotlines_plotline_header_content.innerHTML += "Plotline " + plotline_id;
    org_plotlines_plotline_header_content.onclick = function () {
        setFocusPlotlinesPlotline(this);
    };

    //
    org_plotlines_plotline_header_spacer.className = "flex ";
    org_plotlines_plotline_header_spacer.className += "org_spacer";

    //
    org_plotlines_plotline_header_settings.id = org_plotlines_plotline_header_settings_id;
    org_plotlines_plotline_header_settings.className = "flex ";
    org_plotlines_plotline_header_settings.className += "org_svg_settings";
    org_plotlines_plotline_header_settings.onclick = function () {
        orgTooltipPlotlinesPlotlineShow(this);
    };

    // 
    org_plotlines_plotline_header.appendChild(org_plotlines_plotline_header_arrow);
    org_plotlines_plotline_header.appendChild(org_plotlines_plotline_header_icon);
    org_plotlines_plotline_header.appendChild(org_plotlines_plotline_header_content);
    org_plotlines_plotline_header.appendChild(org_plotlines_plotline_header_spacer);
    org_plotlines_plotline_header.appendChild(org_plotlines_plotline_header_settings);

    org_plotlines_plotline_wrapper.appendChild(org_plotlines_plotline_header);

    // 
    org_plotlines.appendChild(org_plotlines_plotline_wrapper);

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_plotlines = document.getElementById("ws_wrapper_plotlines");

    var ws_plotlines_plotline_wrapper = document.createElement("div");

    //
    ws_plotlines_plotline_wrapper.id = ws_plotlines_plotline_wrapper_id;
    ws_plotlines_plotline_wrapper.className = "flex ";
    ws_plotlines_plotline_wrapper.className += "column ";
    ws_plotlines_plotline_wrapper.className += "item_visible ";
    ws_plotlines_plotline_wrapper.className += "ws_plotlines_plotline_wrapper";
    ws_plotlines_plotline_wrapper.setAttribute('plotlineid', plotline_id);

    ws_plotlines.appendChild(ws_plotlines_plotline_wrapper);

    orgTooltipPlotlinesHide();

    //updatePlotlinesFocus();
};

function delPlotlinesPlotline() {
    var tooltip = document.getElementById("org_plotlines_tooltip_plotline");
    var plotline_id = tooltip.getAttribute('plotlineid');

    var org_item_id = "org_plotlines_plotline_wrapper_" + plotline_id;
    var ws_item_id = "ws_plotlines_plotline_wrapper_" + plotline_id;
    var org_item = document.getElementById(org_item_id);
    org_item.remove(); 
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipPlotlinesPlotlineHide();
};

function addPlotlinesPlotOverview () {
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // organizer ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var org_wrapper_plotlines = document.getElementById("org_wrapper_plotlines");

    var org_item_plotlines = document.getElementById("org_item_plotlines");

    var org_section = document.createElement("div");
    var org_section_icon = document.createElement("div");
    var org_section_content = document.createElement("div");
    var org_section_spacer = document.createElement("div");
    var org_section_settings = document.createElement("div");

    // 
    org_section.id = "org_item_plot_overview";
    org_section.className = "flex ";
    org_section.className += "orgitem ";
    org_section.className += "orgitem_lv2";

    //
    org_section_icon.className = "flex ";
    org_section_icon.className += "org_svg_page_lines_light";
    org_section_icon.onclick = function () {
        setFocusPlotlinesPlotOverview(this);
    };

    //
    org_section_content.id = "org_item_plot_overview_content";
    org_section_content.className = "flex ";
    org_section_content.className += "org_content";
    org_section_content.innerHTML = "Plot Overview";
    org_section_content.onclick = function () {
        setFocusPlotlinesPlotOverview(this);
    };

    //
    org_section_spacer.className = "flex ";
    org_section_spacer.className += "org_spacer";

    //
    org_section_settings.id = "org_item_plot_overview_settings";
    org_section_settings.className = "flex ";
    org_section_settings.className += "org_svg_settings";
    org_section_settings.onclick = function () {
        orgTooltipPlotOverviewShow(this);
    };

    // 
    org_section.appendChild(org_section_icon);
    org_section.appendChild(org_section_content);
    org_section.appendChild(org_section_spacer);
    org_section.appendChild(org_section_settings);

    org_wrapper_plotlines.insertBefore(org_section, org_wrapper_plotlines.childNodes[1]);
    if(org_item_plotlines.nextSibling){
        org_item_plotlines.parentNode.insertBefore(org_section,org_item_plotlines.nextSibling);
    } else {
        org_wrapper_plotlines.appendChild(org_section);
    }

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // workspace ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // objects
    var ws_wrapper_plotlines = document.getElementById("ws_wrapper_plotlines");

    var ws_section = document.createElement("div");

    // 
    ws_section.id = "ws_plot_overview";
    ws_section.className = "flex ";
    ws_section.className += "page ";
    ws_section.className += "item_visible ";
    ws_section.innerHTML += "Plot Overview";

    // 
    ws_wrapper_plotlines.insertBefore(ws_section, ws_wrapper_plotlines.childNodes[1]);
    
    orgTooltipPlotlinesHide();

    //updatePlotlinesFocus();
};

function delPlotOverview () {
    var org_item = document.getElementById("org_item_plot_overview");
    org_item.remove(); 
    var ws_item = document.getElementById("ws_plot_overview");
    ws_item.remove(); 

    orgTooltipPlotOverviewHide();
};







