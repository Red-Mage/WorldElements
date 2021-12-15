function orgTooltipPlotlinesShow (element) {
    var tooltip_id = "org_plotlines_tooltip"
    var tooltip = document.getElementById(tooltip_id);

    var org_item_plot_overview = document.getElementById("org_item_plot_overview");
    var org_plotlines_tooltip_wrapper_plot_overview_add = document.getElementById("org_plotlines_tooltip_wrapper_plot_overview_add");
    org_plotlines_tooltip_wrapper_plot_overview_add.classList.replace('hidden','visible');
    if (org_item_plot_overview) {
        org_plotlines_tooltip_wrapper_plot_overview_add.classList.replace('visible','hidden');
        org_plotlines_tooltip_wrapper_plot_overview_add.style.height = "0px";
    } else {
        org_plotlines_tooltip_wrapper_plot_overview_add.classList.replace('hidden','visible');
        org_plotlines_tooltip_wrapper_plot_overview_add.style.height = "21px";
    }

    var org_plotlines_tooltip_wrapper_plotline_add = document.getElementById("org_plotlines_tooltip_wrapper_plotline_add");
    org_plotlines_tooltip_wrapper_plotline_add.classList.replace('hidden','visible');

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
        orgTooltipPlotlinesHide();
    },{ once: true });
};

function orgTooltipPlotlinesHide () {
    var tooltip = document.getElementById("org_plotlines_tooltip");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_plotlines_tooltip_wrapper_plot_overview_add = document.getElementById("org_plotlines_tooltip_wrapper_plot_overview_add");
    org_plotlines_tooltip_wrapper_plot_overview_add.classList.replace('visible','hidden');

    var org_plotlines_tooltip_wrapper_plotline_add = document.getElementById("org_plotlines_tooltip_wrapper_plotline_add");
    org_plotlines_tooltip_wrapper_plotline_add.classList.replace('visible','hidden');
};

function orgTooltipPlotOverviewShow (element) {
    var tooltip_id = "org_plotlines_tooltip_plot_overview"
    var tooltip = document.getElementById(tooltip_id);

    var org_plotlines_tooltip_wrapper_plot_overview_del = document.getElementById("org_plotlines_tooltip_wrapper_plot_overview_del");
    org_plotlines_tooltip_wrapper_plot_overview_del.classList.replace('hidden','visible');

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
        orgTooltipPlotlinesHide();
    },{ once: true });
};

function orgTooltipPlotOverviewHide () {
    var tooltip = document.getElementById("org_plotlines_tooltip_plot_overview");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_plotlines_tooltip_wrapper_plot_overview_del = document.getElementById("org_plotlines_tooltip_wrapper_plot_overview_del");
    org_plotlines_tooltip_wrapper_plot_overview_del.classList.replace('visible','hidden');
};

function orgTooltipPlotlinesPlotlineShow (element) {
    var tooltip_id = "org_plotlines_tooltip_plotline"
    var tooltip = document.getElementById(tooltip_id);

    var parent_wrapper_id = element.parentElement.parentElement.id;
    var parent_wrapper = document.getElementById(parent_wrapper_id);
    var plotline_id = parent_wrapper.getAttribute('plotlineid');

    var org_item_plotline_overview_id = "org_plotlines_plotline_overview_" + plotline_id;
    var org_item_plotline_overview = document.getElementById(org_item_plotline_overview_id);
    var org_plotlines_tooltip_wrapper_plotline_overview_add = document.getElementById("org_plotlines_tooltip_wrapper_plotline_overview_add");
    org_plotlines_tooltip_wrapper_plotline_overview_add.classList.replace('hidden','visible');
    if (org_item_plotline_overview) {
        org_plotlines_tooltip_wrapper_plotline_overview_add.classList.replace('visible','hidden');
        org_plotlines_tooltip_wrapper_plotline_overview_add.style.height = "0px";
    } else {
        org_plotlines_tooltip_wrapper_plotline_overview_add.classList.replace('hidden','visible');
        org_plotlines_tooltip_wrapper_plotline_overview_add.style.height = "21px";
    }

    var org_plotlines_tooltip_wrapper_plotline_plot_point_add = document.getElementById("org_plotlines_tooltip_wrapper_plotline_plot_point_add");
    org_plotlines_tooltip_wrapper_plotline_plot_point_add.classList.replace('hidden','visible');

    var org_plotlines_tooltip_wrapper_plotline_event_add = document.getElementById("org_plotlines_tooltip_wrapper_plotline_event_add");
    org_plotlines_tooltip_wrapper_plotline_event_add.classList.replace('hidden','visible');

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
        orgTooltipPlotlinesHide();
    },{ once: true });
};

function orgTooltipPlotlinesPlotlineHide () {
    var tooltip = document.getElementById("org_plotlines_tooltip_plotline");
    var elements = document.getElementsByClassName("org_svg_settings_active");

    tooltip.classList.replace('visible','hidden');
    if (elements[0]) {
        elements[0].classList.replace("org_svg_settings_active","org_svg_settings");
    };

    var org_plotlines_tooltip_wrapper_plotline_overview_add = document.getElementById("org_plotlines_tooltip_wrapper_plotline_overview_add");
    org_plotlines_tooltip_wrapper_plotline_overview_add.classList.replace('visible','hidden');

    var org_plotlines_tooltip_wrapper_plotline_plot_point_add = document.getElementById("org_plotlines_tooltip_wrapper_plotline_plot_point_add");
    org_plotlines_tooltip_wrapper_plotline_plot_point_add.classList.replace('visible','hidden');

    var org_plotlines_tooltip_wrapper_plotline_event_add = document.getElementById("org_plotlines_tooltip_wrapper_plotline_event_add");
    org_plotlines_tooltip_wrapper_plotline_event_add.classList.replace('visible','hidden');
};





// plot overview

// plotline
// plotline overview
// plot points
// events






