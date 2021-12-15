// collapse/expand organizer sections when arrow is clicked
function orgToggleCollapse (element) {
    var parent_id = element.parentElement.parentElement.id;
    var parent = document.getElementById(parent_id);
    var height = parent.style.height;
    if (height == "") {
        parent.style.height = "21px";
        element.classList.replace('org_svg_arrow_down','org_svg_arrow_right');
        parent.classList.add('orgitem_collapsed');
    } else {
        parent.style.height = null;
        element.classList.replace('org_svg_arrow_right','org_svg_arrow_down');
        parent.classList.remove('orgitem_collapsed');
    }
};

function setActiveOrgItem (element) {
    var elements = document.getElementsByClassName("orgitem_focus");
    for ( let i = 0; i < elements.length; i++ ) {
        elements[i].classList.remove("orgitem_focus");
    }
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    parent_wrapper.classList.add("orgitem_focus");
};
