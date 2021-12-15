function addWorldSectionWorlds () {
    var world_id = generateID(8);

    var org_worlds = document.getElementById("org_wrapper_worlds");

    // org item
    var org_world = document.createElement("div");
    org_world.id = "org_item_world_" + world_id;
    org_world.className = "flex ";
    org_world.className += "orgitem ";
    org_world.className += "orgitem_lv2";
    org_world.setAttribute('worldid', world_id);

    var icon = document.createElement("div");
    icon.className = "flex ";
    icon.className += "org_svg_world_section";
    icon.onclick = function () {
        setFocusWorldPage(this);
    };
    org_world.appendChild(icon);

    var content = document.createElement("div");
    content.id = "org_item_world_" + world_id + "_content";
    content.className = "flex ";
    content.className += "org_content";
    content.onclick = function () {
        setFocusWorldPage(this);
    };
    content.innerHTML = "World " + world_id;
    org_world.appendChild(content);

    var spacer = document.createElement("div");
    spacer.className = "flex ";
    spacer.className += "org_spacer";
    spacer.onclick = function () {
        setFocusWorldPage(this);
    };
    org_world.appendChild(spacer);

    var settings = document.createElement("div");
    settings.id = "org_item_world_" + world_id + "_settings";
    settings.className = "flex ";
    settings.className += "org_svg_settings";
    settings.onclick = function () {
        orgTooltipWorldSectionShow(this)
    };
    org_world.appendChild(settings);

    // 
    org_world.appendChild(icon);
    org_world.appendChild(content);
    org_world.appendChild(spacer);
    org_world.appendChild(settings);

    // 
    org_worlds.appendChild(org_world);

    var ws_wrapper_worlds = document.getElementById("ws_wrapper_worlds");

    var ws_world = document.createElement("div");
    ws_world.id = "ws_world_" + world_id;
    ws_world.className = "flex ";
    ws_world.className += "item_visible ";
    ws_world.className += "page ";
    ws_world.className += "world_page";
    ws_world.innerHTML += "World " + world_id;

    ws_wrapper_worlds.appendChild(ws_world);

    orgTooltipWorldsHide();
};

function addWorldSectionWorld () {
    var world_id = generateID(8);

    var org_worlds = document.getElementById("org_wrapper_worlds");

    // org item
    var org_world = document.createElement("div");
    org_world.id = "org_item_world_" + world_id;
    org_world.className = "flex ";
    org_world.className += "orgitem ";
    org_world.className += "orgitem_lv2";
    org_world.setAttribute('worldid', world_id);

    var icon = document.createElement("div");
    icon.className = "flex ";
    icon.className += "org_svg_world_section";
    icon.onclick = function () {
        setFocusWorldPage(this);
    };
    org_world.appendChild(icon);

    var content = document.createElement("div");
    content.id = "org_item_world_" + world_id + "_content";
    content.className = "flex ";
    content.className += "org_content";
    content.innerHTML = "World " + world_id;
    content.onclick = function () {
        setFocusWorldPage(this);
    };
    org_world.appendChild(content);

    var spacer = document.createElement("div");
    spacer.className = "flex ";
    spacer.className += "org_spacer";
    org_world.appendChild(spacer);

    var settings = document.createElement("div");
    settings.id = "org_item_world_" + world_id + "_settings";
    settings.className = "flex ";
    settings.className += "org_svg_settings";
    settings.onclick = function () {
        orgTooltipWorldSectionShow(this)
    };
    org_world.appendChild(settings);

    // 
    org_world.appendChild(icon);
    org_world.appendChild(content);
    org_world.appendChild(spacer);
    org_world.appendChild(settings);

    // 
    org_worlds.appendChild(org_world);

    var ws_wrapper_worlds = document.getElementById("ws_wrapper_worlds");

    var ws_world = document.createElement("div");
    ws_world.id = "ws_world_" + world_id;
    ws_world.className = "flex ";
    ws_world.className += "item_visible ";
    ws_world.className += "page ";
    ws_world.className += "world_page";
    ws_world.innerHTML += "World " + world_id;

    ws_wrapper_worlds.appendChild(ws_world);

    orgTooltipWorldSectionHide();
};

function delWorldSection (element) {
    var tooltip = document.getElementById("org_world_section_tooltip");
    var world_id = tooltip.getAttribute('worldid');

    var org_item_id = "org_item_world_" + world_id;
    var ws_item_id = "ws_world_" + world_id;

    var org_item = document.getElementById(org_item_id);
    org_item.remove(); 
    var ws_item = document.getElementById(ws_item_id);
    ws_item.remove(); 

    orgTooltipWorldSectionHide();
};
