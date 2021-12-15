 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// focus compose ///////////////////////////////////////////////////////////////////////////////////////////////////////

function setFocusCompose (element) {
    showComposeFrontMatter();
    showComposeBodyMatter();
    showComposeBackMatter();

    showComposeBodyMatterPartWrappers();
    showComposeBodyMatterPartTitles();
    showComposeBodyMatterPartEpigraphs();

    showComposeBodyMatterChapterWrappers();
    showComposeBodyMatterChapterTitles();
    showComposeBodyMatterChapterEpigraphs();
    showComposeBodyMatterChapterSections();

    window.localStorage.setItem("compose_focus", "org_item_compose_content");

    setActiveOrgItem(element);
};

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// focus front matter //////////////////////////////////////////////////////////////////////////////////////////////////

function showComposeFrontMatter () {
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");
    ws_wrapper_front_matter.classList.replace("item_hidden","item_visible");
    showComposeFrontMatterSections();
};

function showComposeFrontMatterSections () {
    var ws_pages = document.getElementsByClassName("ws_front_matter_section");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_hidden","item_visible");
    }
};

function hideComposeFrontMatter () {
    var ws_wrapper_front_matter = document.getElementById("ws_wrapper_front_matter");
    ws_wrapper_front_matter.classList.replace("item_visible","item_hidden");
    hideComposeFrontMatterSections();
}

function hideComposeFrontMatterSections () {
    var ws_pages = document.getElementsByClassName("ws_front_matter_section");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function showComposeFrontMatterSection (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var ws_id = parent_wrapper.getAttribute('wsid');
    var ws_page = document.getElementById(ws_id);
    ws_page.classList.replace("item_hidden","item_visible");
};

function setFocusComposeFrontMatter (element) {
    showComposeFrontMatter();
    hideComposeBodyMatter();
    hideComposeBackMatter();

    window.localStorage.setItem("compose_focus", "org_item_front_matter_content");

    setActiveOrgItem(element);
}

function setFocusComposeFrontMatterSection (element) {
    showComposeFrontMatter();
    hideComposeBodyMatter();
    hideComposeBackMatter();

    hideComposeFrontMatterSections();

    showComposeFrontMatterSection(element);

    window.localStorage.setItem("compose_focus", element.id);

    setActiveOrgItem(element);
};

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// focus body matter ///////////////////////////////////////////////////////////////////////////////////////////////////

function showComposeBodyMatter () {
    var ws_wrapper_body_matter = document.getElementById("ws_wrapper_body_matter");
    ws_wrapper_body_matter.classList.replace("item_hidden","item_visible");
};

function hideComposeBodyMatter () {
    var ws_wrapper_body_matter = document.getElementById("ws_wrapper_body_matter");
    ws_wrapper_body_matter.classList.replace("item_visible","item_hidden");
};

function setFocusComposeBodyMatter (element) {
    hideComposeFrontMatter();
    showComposeBodyMatter();
    hideComposeBackMatter();

    showComposeBodyMatterPartWrappers();
    showComposeBodyMatterPartTitles();
    showComposeBodyMatterPartEpigraphs();

    showComposeBodyMatterChapterWrappers();
    showComposeBodyMatterChapterTitles();
    showComposeBodyMatterChapterEpigraphs();
    showComposeBodyMatterChapterSections();

    window.localStorage.setItem("compose_focus", "org_item_body_matter_content");

    setActiveOrgItem(element);
};

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// focus back matter ///////////////////////////////////////////////////////////////////////////////////////////////////

function showComposeBackMatter () {
    var ws_wrapper_back_matter = document.getElementById("ws_wrapper_back_matter");
    ws_wrapper_back_matter.classList.replace("item_hidden","item_visible");
    showComposeBackMatterSections();
};

function showComposeBackMatterSections () {
    var ws_pages = document.getElementsByClassName("back_matter_section");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_hidden","item_visible");
    }
};

function showComposeFrontMatterSection (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var ws_id = parent_wrapper.getAttribute('wsid');
    var ws_page = document.getElementById(ws_id);
    ws_page.classList.replace("item_hidden","item_visible");
};

function hideComposeBackMatter () {
    var ws_wrapper_back_matter = document.getElementById("ws_wrapper_back_matter");
    ws_wrapper_back_matter.classList.replace("item_visible","item_hidden");
    hideComposeBackMatterSections();
}

function hideComposeBackMatterSections () {
    var ws_pages = document.getElementsByClassName("back_matter_section");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function setFocusComposeBackMatter (element) {
    hideComposeFrontMatter();
    hideComposeBodyMatter();
    showComposeBackMatter();

    window.localStorage.setItem("compose_focus", "org_item_back_matter_content");

    setActiveOrgItem(element);
}

function setFocusComposeBackMatterSection (element) {
    hideComposeFrontMatter();
    hideComposeBodyMatter();
    showComposeBackMatter();

    hideComposeBackMatterSections();

    showComposeFrontMatterSection(element);

    window.localStorage.setItem("compose_focus", "back_matter");

    setActiveOrgItem(element);
};

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// focus body matter part //////////////////////////////////////////////////////////////////////////////////////////////

function showComposeBodyMatterPartWrappers () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_part_wrapper");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterPartWrapper (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var part_id = parent_wrapper.getAttribute('partid');
    var ws_page_id = "ws_part_wrapper_" + part_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterPartTitles () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_part_title");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterPartTitle (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var part_id = parent_wrapper.getAttribute('partid');
    var ws_page_id = "ws_part_title_" + part_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterPartEpigraphs (element) {
    var ws_pages = document.getElementsByClassName("ws_body_matter_part_epigraph");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterPartEpigraph (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var part_id = parent_wrapper.getAttribute('partid');
    var ws_page_id = "ws_part_epigraph_" + part_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterPartChapters (element) {
    // get part id
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var part_id = parent_wrapper.getAttribute('partid');
    // show part chapter wrappers
    var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_wrapper");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        var ws_item_id = ws_pages[i].id;
        var ws_item = document.getElementById(ws_item_id);
        var chapter_part_id = ws_item.getAttribute('partid');
        if (chapter_part_id === part_id) {
            var org_item_id = ws_item.id.replace('ws_','org_') + "_content";
            var org_item_id = org_item_id.replace('wrapper','header');
            var org_item = document.getElementById(org_item_id);
            showComposeBodyMatterChapterWrapper(org_item);
            showComposeBodyMatterChapterTitle(org_item);
            showComposeBodyMatterChapterEpigraph(org_item);
            // show chapter sections
            showComposeBodyMatterChapterSections(org_item);
        }
    }
};

function hideComposeBodyMatterPartWrappers () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_part_wrapper");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function hideComposeBodyMatterPartTitles () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_part_title");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function hideComposeBodyMatterPartEpigraphs () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_part_epigraph");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function setFocusComposePart (element) {
    hideComposeFrontMatter();
    hideComposeBackMatter();

    hideComposeBodyMatterPartWrappers();
    hideComposeBodyMatterPartTitles();
    hideComposeBodyMatterPartEpigraphs();

    hideComposeBodyMatterChapterWrappers();
    hideComposeBodyMatterChapterTitles();
    hideComposeBodyMatterChapterEpigraphs();

    hideComposeBodyMatterChapterSections();

    showComposeBodyMatterPartWrapper(element);
    showComposeBodyMatterPartTitle(element);
    showComposeBodyMatterPartEpigraph(element);

    showComposeBodyMatterPartChapters(element);

    window.localStorage.setItem("compose_focus", element.id);

    setActiveOrgItem(element);

};

function setFocusComposePartTitle (element) {
    hideComposeFrontMatter();
    hideComposeBackMatter();

    hideComposeBodyMatterPartWrappers();
    hideComposeBodyMatterPartTitles();
    hideComposeBodyMatterPartEpigraphs();

    hideComposeBodyMatterChapterWrappers();
    hideComposeBodyMatterChapterTitles();
    hideComposeBodyMatterChapterEpigraphs();

    hideComposeBodyMatterChapterSections();

    showComposeBodyMatterPartWrapper(element);
    showComposeBodyMatterPartTitle(element);

    window.localStorage.setItem("compose_focus", element.id);

    setActiveOrgItem(element);
};

function setFocusComposePartEpigraph (element) {
    hideComposeFrontMatter();
    hideComposeBackMatter();

    hideComposeBodyMatterPartWrappers();
    hideComposeBodyMatterPartTitles();
    hideComposeBodyMatterPartEpigraphs();

    hideComposeBodyMatterChapterWrappers();
    hideComposeBodyMatterChapterTitles();
    hideComposeBodyMatterChapterEpigraphs();

    hideComposeBodyMatterChapterSections();

    showComposeBodyMatterPartWrapper(element);
    showComposeBodyMatterPartEpigraph(element);

    window.localStorage.setItem("compose_focus", element.id);

    setActiveOrgItem(element);
};

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// focus body matter chapter ///////////////////////////////////////////////////////////////////////////////////////////

function showComposeBodyMatterChapterWrappers () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_wrapper");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterChapterWrapper (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var chapter_id = parent_wrapper.getAttribute('chapterid');
    var ws_page_id = "ws_chapter_wrapper_" + chapter_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterChapterTitles () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_title");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterChapterTitle (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var chapter_id = parent_wrapper.getAttribute('chapterid');
    var ws_page_id = "ws_chapter_title_" + chapter_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterChapterEpigraphs () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_epigraph");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterChapterEpigraph (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var chapter_id = parent_wrapper.getAttribute('chapterid');
    var ws_page_id = "ws_chapter_epigraph_" + chapter_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function showComposeBodyMatterChapterSections (element) {
    if (element) {
        // get part id
        var parent_id = element.parentElement.id;
        var parent_wrapper = document.getElementById(parent_id);
        var chapter_id = parent_wrapper.getAttribute('chapterid');

        // show chapter sections
        var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_section");
        for ( let i = 0; i < ws_pages.length; i++ ) {
            var chapter_section_id = ws_pages[i].getAttribute('chapterid');
            if (chapter_section_id === chapter_id) {
                ws_pages[i].classList.replace("item_hidden","item_visible");
            }
        }
    } else {
        var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_section");
        for ( let i = 0; i < ws_pages.length; i++ ) {
            ws_pages[i].classList.replace("item_hidden","item_visible");
        }
    }
};

function showComposeBodyMatterChapterSection (element) {
    var parent_id = element.parentElement.id;
    var parent_wrapper = document.getElementById(parent_id);
    var section_id = parent_wrapper.getAttribute('sectionid');

    var ws_page_id = "ws_chapter_section_" + section_id;
    var ws_page = document.getElementById(ws_page_id);
    if (ws_page) {
        ws_page.classList.replace("item_hidden","item_visible");
    }
};

function hideComposeBodyMatterChapterWrappers () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_wrapper");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function hideComposeBodyMatterChapterTitles () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_title");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function hideComposeBodyMatterChapterEpigraphs () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_epigraph");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function hideComposeBodyMatterChapterSections () {
    var ws_pages = document.getElementsByClassName("ws_body_matter_chapter_section");
    for ( let i = 0; i < ws_pages.length; i++ ) {
        ws_pages[i].classList.replace("item_visible","item_hidden");
    }
};

function setFocusComposeChapter (element) {
    hideComposeFrontMatter();
    hideComposeBackMatter();

    hideComposeBodyMatterPartWrappers();
    hideComposeBodyMatterPartTitles();
    hideComposeBodyMatterPartEpigraphs();

    hideComposeBodyMatterChapterWrappers();
    hideComposeBodyMatterChapterTitles();
    hideComposeBodyMatterChapterEpigraphs();

    hideComposeBodyMatterChapterSections();

    showComposeBodyMatterPartWrapper(element);
    showComposeBodyMatterChapterWrapper(element);
    showComposeBodyMatterChapterTitle(element);
    showComposeBodyMatterChapterEpigraph(element);
    showComposeBodyMatterChapterSections(element);

    window.localStorage.setItem("compose_focus", element.id);

    setActiveOrgItem(element);
};

function setFocusComposeChapterTitle (element) {
    hideComposeFrontMatter();
    hideComposeBackMatter();

    hideComposeBodyMatterPartWrappers();
    hideComposeBodyMatterPartTitles();
    hideComposeBodyMatterPartEpigraphs();

    hideComposeBodyMatterChapterWrappers();
    hideComposeBodyMatterChapterTitles();
    hideComposeBodyMatterChapterEpigraphs();

    hideComposeBodyMatterChapterSections();

    showComposeBodyMatterPartWrapper(element);
    showComposeBodyMatterChapterWrapper(element);
    showComposeBodyMatterChapterTitle(element);

    window.localStorage.setItem("compose_focus", element.id);

    setActiveOrgItem(element);
};

function setFocusComposeChapterEpigraph (element) {
    hideComposeFrontMatter();
    hideComposeBackMatter();

    hideComposeBodyMatterPartWrappers();
    hideComposeBodyMatterPartTitles();
    hideComposeBodyMatterPartEpigraphs();

    hideComposeBodyMatterChapterWrappers();
    hideComposeBodyMatterChapterTitles();
    hideComposeBodyMatterChapterEpigraphs();

    hideComposeBodyMatterChapterSections();

    showComposeBodyMatterPartWrapper(element);
    showComposeBodyMatterChapterWrapper(element);
    showComposeBodyMatterChapterEpigraph(element);

    window.localStorage.setItem("compose_focus", element.id);

    setActiveOrgItem(element);
};

function setFocusComposeChapterSection (element) {
    hideComposeFrontMatter();
    hideComposeBackMatter();

    hideComposeBodyMatterPartWrappers();
    hideComposeBodyMatterPartTitles();
    hideComposeBodyMatterPartEpigraphs();

    hideComposeBodyMatterChapterWrappers();
    hideComposeBodyMatterChapterTitles();
    hideComposeBodyMatterChapterEpigraphs();

    hideComposeBodyMatterChapterSections();

    showComposeBodyMatterPartWrapper(element);
    showComposeBodyMatterChapterWrapper(element);
    showComposeBodyMatterChapterSection(element);

    window.localStorage.setItem("compose_focus", element.id);

    setActiveOrgItem(element);
};

function updateComposeFocus () {
    var currentFocus = window.localStorage.getItem("compose_focus");
    var element = document.getElementById(currentFocus);
    if (element) {
        if (currentFocus === "org_item_compose_content") {
            var element = document.getElementById(currentFocus);
            setFocusCompose(element);
        } else if (currentFocus === "org_item_front_matter_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatter(element);
        } else if (currentFocus === "org_item_half_title_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_title_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_other_works_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_copyright_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_dedication_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_epigraph_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_toc_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_foreword_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_preface_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_acknowledgements_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_introduction_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_item_prologue_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeFrontMatterSection(element);
        } else if (currentFocus === "org_body_matter_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeBodyMatter(element);
        } else if (currentFocus.includes('part_header')) {
            var element = document.getElementById(currentFocus);
            setFocusComposePart(element);
        } else if (currentFocus.includes('part_title')) {
            var element = document.getElementById(currentFocus);
            setFocusComposePartTitle(element);
        } else if (currentFocus.includes('part_epigraph')) {
            var element = document.getElementById(currentFocus);
            setFocusComposeEpigraph(element);
        } else if (currentFocus.includes('chapter_header')) {
            var element = document.getElementById(currentFocus);
            setFocusComposeChapter(element);
        } else if (currentFocus.includes('chapter_title')) {
            var element = document.getElementById(currentFocus);
            setFocusComposeChapterTitle(element);
        } else if (currentFocus.includes('chapter_epigraph')) {
            var element = document.getElementById(currentFocus);
            setFocusComposeChapterEpigraph(element);
        } else if (currentFocus.includes('chapter_section')) {
            var element = document.getElementById(currentFocus);
            setFocusComposeChapterSection(element);
        } else if (currentFocus === "org_item_back_matter_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeBackMatter(element);
        } else if (currentFocus === "org_item_epilogue_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeBackMatterSection(element);
        } else if (currentFocus === "org_item_afterword_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeBackMatterSection(element);
        } else if (currentFocus === "org_item_appendix_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeBackMatterSection(element);
        } else if (currentFocus === "org_item_glossary_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeBackMatterSection(element);
        } else if (currentFocus === "org_item_bibliography_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeBackMatterSection(element);
        } else if (currentFocus === "org_item_author_bio_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeBackMatterSection(element);
        } else if (currentFocus === "org_item_synopsis_content") {
            var element = document.getElementById(currentFocus);
            setFocusComposeBackMatterSection(element);
        }
    } else {
        var element = document.getElementById("org_item_compose_content");
        window.localStorage.setItem("compose_focus", "org_item_compose_content");
        setFocusCompose(element);
    }
};
