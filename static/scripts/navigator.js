document.addEventListener('DOMContentLoaded', function() {

    var current_view = window.localStorage.getItem('current_view');
    if (current_view) {
        if (current_view === "worlds") {
            showWorldsView();
        }
        if (current_view === "projects") {
            showProjectsView();
        }
        if (current_view === "books") {
            showBooksView();
        }
        if (current_view === "compose") {
            showComposeView();
        }
        if (current_view === "plotlines") {
            showPlotlinesView();
        }
        if (current_view === "elements") {
            showElementsView();
        }
        if (current_view === "relationships") {
            showRelationshipsView();
        }
        if (current_view === "settings") {
            showSettingsView();
        }
    } else {
        window.localStorage.setItem('current_view', 'worlds');
        showWorldsView();
    }
});

function hideElementsPanel () {
    // hide elements panel
    var panels = document.getElementById('panels');
    var organizer = document.getElementById('organizer');
    var workspace = document.getElementById('workspace');
    var wrapper = document.getElementById('wrapper');
    var elements = document.getElementById('elements');
    var resizer_right = document.getElementById("resizer_right");

    elements.classList.add('hide_panel');
    resizer_right.classList.add('hide_panel');

    var wWidth = window.innerWidth

    var workspaceWidth = wWidth - 55 - organizer.offsetWidth;
    var wrapperWidth = workspaceWidth - 15;

    workspace.style.width = `${workspaceWidth}px`;
    wrapper.style.width = `${wrapperWidth}px`;

    var panelHeight = panels.innerHeight;

    organizer.style.height = panelHeight;
    workspace.style.height = panelHeight;
    wrapper.style.height = panelHeight;
};

function showElementsPanel () {
    // hide elements panel
    var panels = document.getElementById('panels');
    var organizer = document.getElementById('organizer');
    var workspace = document.getElementById('workspace');
    var wrapper = document.getElementById('wrapper');
    var elements = document.getElementById('elements');
    var resizer_right = document.getElementById("resizer_right");

    elements.classList.remove('hide_panel');
    resizer_right.classList.remove('hide_panel');

    var wWidth = window.innerWidth

    var workspaceWidth = wWidth - 58 - organizer.offsetWidth - elements.offsetWidth;
    var wrapperWidth = workspaceWidth - 15;

    workspace.style.width = `${workspaceWidth}px`;
    wrapper.style.width = `${wrapperWidth}px`;

    var panelHeight = panels.innerHeight;

    organizer.style.height = panelHeight;
    workspace.style.height = panelHeight;
    wrapper.style.height = panelHeight;
    elements.style.height = panelHeight;
};

function showWorldsView () {
    // Organizer wrappers
    var org_wrapper_worlds = document.getElementById("org_wrapper_worlds");
    var org_wrapper_projects = document.getElementById("org_wrapper_projects");
    var org_wrapper_books = document.getElementById("org_wrapper_books");
    var org_wrapper_compose = document.getElementById("org_wrapper_compose");
    var org_wrapper_plotlines = document.getElementById("org_wrapper_plotlines");
    var org_wrapper_elements = document.getElementById("org_wrapper_elements");
    var org_wrapper_relationships = document.getElementById("org_wrapper_relationships");
    var org_wrapper_settings = document.getElementById("org_wrapper_settings");

    // Workspace wrappers
    var ws_wrapper_worldss = document.getElementById("ws_wrapper_worlds");
    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");
    var ws_wrapper_books = document.getElementById("ws_wrapper_books");
    var ws_wrapper_compose = document.getElementById("ws_wrapper_compose");
    var ws_wrapper_plotlines = document.getElementById("ws_wrapper_plotlines");
    var ws_wrapper_elements = document.getElementById("ws_wrapper_elements");
    var ws_wrapper_relationships = document.getElementById("ws_wrapper_relationships");
    var ws_wrapper_settings = document.getElementById("ws_wrapper_settings");

    // Elements wrappers
    var el_wrapper_worldss = document.getElementById("el_wrapper_worlds");
    var el_wrapper_projects = document.getElementById("el_wrapper_projects");
    var el_wrapper_books = document.getElementById("el_wrapper_books");
    var el_wrapper_compose = document.getElementById("el_wrapper_compose");
    var el_wrapper_plotlines = document.getElementById("el_wrapper_plotlines");
    var el_wrapper_elements = document.getElementById("el_wrapper_elements");
    var el_wrapper_relationships = document.getElementById("el_wrapper_relationships");
    var el_wrapper_settings = document.getElementById("el_wrapper_settings");

    // Set organizer wrapper visibility
    org_wrapper_worlds.classList.replace('item_hidden','item_visible');
    org_wrapper_projects.classList.replace('item_visible','item_hidden');
    org_wrapper_books.classList.replace('item_visible','item_hidden');
    org_wrapper_compose.classList.replace('item_visible','item_hidden');
    org_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    org_wrapper_elements.classList.replace('item_visible','item_hidden');
    org_wrapper_relationships.classList.replace('item_visible','item_hidden');
    org_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set workspace wrapper visibility
    ws_wrapper_worldss.classList.replace('item_hidden','item_visible');
    ws_wrapper_projects.classList.replace('item_visible','item_hidden');
    ws_wrapper_books.classList.replace('item_visible','item_hidden');
    ws_wrapper_compose.classList.replace('item_visible','item_hidden');
    ws_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    ws_wrapper_elements.classList.replace('item_visible','item_hidden');
    ws_wrapper_relationships.classList.replace('item_visible','item_hidden');
    ws_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set element wrapper visibility
    el_wrapper_worldss.classList.replace('item_hidden','item_visible');
    el_wrapper_projects.classList.replace('item_visible','item_hidden');
    el_wrapper_books.classList.replace('item_visible','item_hidden');
    el_wrapper_compose.classList.replace('item_visible','item_hidden');
    el_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    el_wrapper_elements.classList.replace('item_visible','item_hidden');
    el_wrapper_relationships.classList.replace('item_visible','item_hidden');
    el_wrapper_settings.classList.replace('item_visible','item_hidden');

    showElementsPanel();

    window.localStorage.setItem("current_view", "worlds");

    updateWorldsFocus();
};

function showProjectsView () {
    // Organizer wrappers
    var org_wrapper_worlds = document.getElementById("org_wrapper_worlds");
    var org_wrapper_projects = document.getElementById("org_wrapper_projects");
    var org_wrapper_books = document.getElementById("org_wrapper_books");
    var org_wrapper_compose = document.getElementById("org_wrapper_compose");
    var org_wrapper_plotlines = document.getElementById("org_wrapper_plotlines");
    var org_wrapper_elements = document.getElementById("org_wrapper_elements");
    var org_wrapper_relationships = document.getElementById("org_wrapper_relationships");
    var org_wrapper_settings = document.getElementById("org_wrapper_settings");

    // Workspace wrappers
    var ws_wrapper_worldss = document.getElementById("ws_wrapper_worlds");
    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");
    var ws_wrapper_books = document.getElementById("ws_wrapper_books");
    var ws_wrapper_compose = document.getElementById("ws_wrapper_compose");
    var ws_wrapper_plotlines = document.getElementById("ws_wrapper_plotlines");
    var ws_wrapper_elements = document.getElementById("ws_wrapper_elements");
    var ws_wrapper_relationships = document.getElementById("ws_wrapper_relationships");
    var ws_wrapper_settings = document.getElementById("ws_wrapper_settings");

    // Elements wrappers
    var el_wrapper_worldss = document.getElementById("el_wrapper_worlds");
    var el_wrapper_projects = document.getElementById("el_wrapper_projects");
    var el_wrapper_books = document.getElementById("el_wrapper_books");
    var el_wrapper_compose = document.getElementById("el_wrapper_compose");
    var el_wrapper_plotlines = document.getElementById("el_wrapper_plotlines");
    var el_wrapper_elements = document.getElementById("el_wrapper_elements");
    var el_wrapper_relationships = document.getElementById("el_wrapper_relationships");
    var el_wrapper_settings = document.getElementById("el_wrapper_settings");

    // Set organizer wrapper visibility
    org_wrapper_worlds.classList.replace('item_visible','item_hidden');
    org_wrapper_projects.classList.replace('item_hidden','item_visible');
    org_wrapper_books.classList.replace('item_visible','item_hidden');
    org_wrapper_compose.classList.replace('item_visible','item_hidden');
    org_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    org_wrapper_elements.classList.replace('item_visible','item_hidden');
    org_wrapper_relationships.classList.replace('item_visible','item_hidden');
    org_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set workspace wrapper visibility
    ws_wrapper_worldss.classList.replace('item_visible','item_hidden');
    ws_wrapper_projects.classList.replace('item_hidden','item_visible');
    ws_wrapper_books.classList.replace('item_visible','item_hidden');
    ws_wrapper_compose.classList.replace('item_visible','item_hidden');
    ws_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    ws_wrapper_elements.classList.replace('item_visible','item_hidden');
    ws_wrapper_relationships.classList.replace('item_visible','item_hidden');
    ws_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set element wrapper visibility
    el_wrapper_worldss.classList.replace('item_visible','item_hidden');
    el_wrapper_projects.classList.replace('item_hidden','item_visible');
    el_wrapper_books.classList.replace('item_visible','item_hidden');
    el_wrapper_compose.classList.replace('item_visible','item_hidden');
    el_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    el_wrapper_elements.classList.replace('item_visible','item_hidden');
    el_wrapper_relationships.classList.replace('item_visible','item_hidden');
    el_wrapper_settings.classList.replace('item_visible','item_hidden');

    showElementsPanel();

    window.localStorage.setItem("current_view", "projects");

    updateProjectsFocus();
};

function showBooksView () {
    // Organizer wrappers
    var org_wrapper_worlds = document.getElementById("org_wrapper_worlds");
    var org_wrapper_projects = document.getElementById("org_wrapper_projects");
    var org_wrapper_books = document.getElementById("org_wrapper_books");
    var org_wrapper_compose = document.getElementById("org_wrapper_compose");
    var org_wrapper_plotlines = document.getElementById("org_wrapper_plotlines");
    var org_wrapper_elements = document.getElementById("org_wrapper_elements");
    var org_wrapper_relationships = document.getElementById("org_wrapper_relationships");
    var org_wrapper_settings = document.getElementById("org_wrapper_settings");

    // Workspace wrappers
    var ws_wrapper_worldss = document.getElementById("ws_wrapper_worlds");
    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");
    var ws_wrapper_books = document.getElementById("ws_wrapper_books");
    var ws_wrapper_compose = document.getElementById("ws_wrapper_compose");
    var ws_wrapper_plotlines = document.getElementById("ws_wrapper_plotlines");
    var ws_wrapper_elements = document.getElementById("ws_wrapper_elements");
    var ws_wrapper_relationships = document.getElementById("ws_wrapper_relationships");
    var ws_wrapper_settings = document.getElementById("ws_wrapper_settings");

    // Elements wrappers
    var el_wrapper_worldss = document.getElementById("el_wrapper_worlds");
    var el_wrapper_projects = document.getElementById("el_wrapper_projects");
    var el_wrapper_books = document.getElementById("el_wrapper_books");
    var el_wrapper_compose = document.getElementById("el_wrapper_compose");
    var el_wrapper_plotlines = document.getElementById("el_wrapper_plotlines");
    var el_wrapper_elements = document.getElementById("el_wrapper_elements");
    var el_wrapper_relationships = document.getElementById("el_wrapper_relationships");
    var el_wrapper_settings = document.getElementById("el_wrapper_settings");

    // Set organizer wrapper visibility
    org_wrapper_worlds.classList.replace('item_visible','item_hidden');
    org_wrapper_projects.classList.replace('item_visible','item_hidden');
    org_wrapper_books.classList.replace('item_hidden','item_visible');
    org_wrapper_compose.classList.replace('item_visible','item_hidden');
    org_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    org_wrapper_elements.classList.replace('item_visible','item_hidden');
    org_wrapper_relationships.classList.replace('item_visible','item_hidden');
    org_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set workspace wrapper visibility
    ws_wrapper_worldss.classList.replace('item_visible','item_hidden');
    ws_wrapper_projects.classList.replace('item_visible','item_hidden');
    ws_wrapper_books.classList.replace('item_hidden','item_visible');
    ws_wrapper_compose.classList.replace('item_visible','item_hidden');
    ws_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    ws_wrapper_elements.classList.replace('item_visible','item_hidden');
    ws_wrapper_relationships.classList.replace('item_visible','item_hidden');
    ws_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set element wrapper visibility
    el_wrapper_worldss.classList.replace('item_visible','item_hidden');
    el_wrapper_projects.classList.replace('item_visible','item_hidden');
    el_wrapper_books.classList.replace('item_hidden','item_visible');
    el_wrapper_compose.classList.replace('item_visible','item_hidden');
    el_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    el_wrapper_elements.classList.replace('item_visible','item_hidden');
    el_wrapper_relationships.classList.replace('item_visible','item_hidden');
    el_wrapper_settings.classList.replace('item_visible','item_hidden');

    showElementsPanel();

    window.localStorage.setItem("current_view", "books");
};

function showComposeView () {
    // Organizer wrappers
    var org_wrapper_worlds = document.getElementById("org_wrapper_worlds");
    var org_wrapper_projects = document.getElementById("org_wrapper_projects");
    var org_wrapper_books = document.getElementById("org_wrapper_books");
    var org_wrapper_compose = document.getElementById("org_wrapper_compose");
    var org_wrapper_plotlines = document.getElementById("org_wrapper_plotlines");
    var org_wrapper_elements = document.getElementById("org_wrapper_elements");
    var org_wrapper_relationships = document.getElementById("org_wrapper_relationships");
    var org_wrapper_settings = document.getElementById("org_wrapper_settings");

    // Workspace wrappers
    var ws_wrapper_worldss = document.getElementById("ws_wrapper_worlds");
    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");
    var ws_wrapper_books = document.getElementById("ws_wrapper_books");
    var ws_wrapper_compose = document.getElementById("ws_wrapper_compose");
    var ws_wrapper_plotlines = document.getElementById("ws_wrapper_plotlines");
    var ws_wrapper_elements = document.getElementById("ws_wrapper_elements");
    var ws_wrapper_relationships = document.getElementById("ws_wrapper_relationships");
    var ws_wrapper_settings = document.getElementById("ws_wrapper_settings");

    // Elements wrappers
    var el_wrapper_worldss = document.getElementById("el_wrapper_worlds");
    var el_wrapper_projects = document.getElementById("el_wrapper_projects");
    var el_wrapper_books = document.getElementById("el_wrapper_books");
    var el_wrapper_compose = document.getElementById("el_wrapper_compose");
    var el_wrapper_plotlines = document.getElementById("el_wrapper_plotlines");
    var el_wrapper_elements = document.getElementById("el_wrapper_elements");
    var el_wrapper_relationships = document.getElementById("el_wrapper_relationships");
    var el_wrapper_settings = document.getElementById("el_wrapper_settings");

    // Set organizer wrapper visibility
    org_wrapper_worlds.classList.replace('item_visible','item_hidden');
    org_wrapper_projects.classList.replace('item_visible','item_hidden');
    org_wrapper_books.classList.replace('item_visible','item_hidden');
    org_wrapper_compose.classList.replace('item_hidden','item_visible');
    org_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    org_wrapper_elements.classList.replace('item_visible','item_hidden');
    org_wrapper_relationships.classList.replace('item_visible','item_hidden');
    org_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set workspace wrapper visibility
    ws_wrapper_worldss.classList.replace('item_visible','item_hidden');
    ws_wrapper_projects.classList.replace('item_visible','item_hidden');
    ws_wrapper_books.classList.replace('item_visible','item_hidden');
    ws_wrapper_compose.classList.replace('item_hidden','item_visible');
    ws_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    ws_wrapper_elements.classList.replace('item_visible','item_hidden');
    ws_wrapper_relationships.classList.replace('item_visible','item_hidden');
    ws_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set element wrapper visibility
    el_wrapper_worldss.classList.replace('item_visible','item_hidden');
    el_wrapper_projects.classList.replace('item_visible','item_hidden');
    el_wrapper_books.classList.replace('item_visible','item_hidden');
    el_wrapper_compose.classList.replace('item_hidden','item_visible');
    el_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    el_wrapper_elements.classList.replace('item_visible','item_hidden');
    el_wrapper_relationships.classList.replace('item_visible','item_hidden');
    el_wrapper_settings.classList.replace('item_visible','item_hidden');

    showElementsPanel();

    window.localStorage.setItem("current_view", "compose");

    updateComposeFocus();
};

function showPlotlinesView () {
    // Organizer wrappers
    var org_wrapper_worlds = document.getElementById("org_wrapper_worlds");
    var org_wrapper_projects = document.getElementById("org_wrapper_projects");
    var org_wrapper_books = document.getElementById("org_wrapper_books");
    var org_wrapper_compose = document.getElementById("org_wrapper_compose");
    var org_wrapper_plotlines = document.getElementById("org_wrapper_plotlines");
    var org_wrapper_elements = document.getElementById("org_wrapper_elements");
    var org_wrapper_relationships = document.getElementById("org_wrapper_relationships");
    var org_wrapper_settings = document.getElementById("org_wrapper_settings");

    // Workspace wrappers
    var ws_wrapper_worldss = document.getElementById("ws_wrapper_worlds");
    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");
    var ws_wrapper_books = document.getElementById("ws_wrapper_books");
    var ws_wrapper_compose = document.getElementById("ws_wrapper_compose");
    var ws_wrapper_plotlines = document.getElementById("ws_wrapper_plotlines");
    var ws_wrapper_elements = document.getElementById("ws_wrapper_elements");
    var ws_wrapper_relationships = document.getElementById("ws_wrapper_relationships");
    var ws_wrapper_settings = document.getElementById("ws_wrapper_settings");

    // Elements wrappers
    var el_wrapper_worldss = document.getElementById("el_wrapper_worlds");
    var el_wrapper_projects = document.getElementById("el_wrapper_projects");
    var el_wrapper_books = document.getElementById("el_wrapper_books");
    var el_wrapper_compose = document.getElementById("el_wrapper_compose");
    var el_wrapper_plotlines = document.getElementById("el_wrapper_plotlines");
    var el_wrapper_elements = document.getElementById("el_wrapper_elements");
    var el_wrapper_relationships = document.getElementById("el_wrapper_relationships");
    var el_wrapper_settings = document.getElementById("el_wrapper_settings");

    // Set organizer wrapper visibility
    org_wrapper_worlds.classList.replace('item_visible','item_hidden');
    org_wrapper_projects.classList.replace('item_visible','item_hidden');
    org_wrapper_books.classList.replace('item_visible','item_hidden');
    org_wrapper_compose.classList.replace('item_visible','item_hidden');
    org_wrapper_plotlines.classList.replace('item_hidden','item_visible');
    org_wrapper_elements.classList.replace('item_visible','item_hidden');
    org_wrapper_relationships.classList.replace('item_visible','item_hidden');
    org_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set workspace wrapper visibility
    ws_wrapper_worldss.classList.replace('item_visible','item_hidden');
    ws_wrapper_projects.classList.replace('item_visible','item_hidden');
    ws_wrapper_books.classList.replace('item_visible','item_hidden');
    ws_wrapper_compose.classList.replace('item_visible','item_hidden');
    ws_wrapper_plotlines.classList.replace('item_hidden','item_visible');
    ws_wrapper_elements.classList.replace('item_visible','item_hidden');
    ws_wrapper_relationships.classList.replace('item_visible','item_hidden');
    ws_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set element wrapper visibility
    el_wrapper_worldss.classList.replace('item_visible','item_hidden');
    el_wrapper_projects.classList.replace('item_visible','item_hidden');
    el_wrapper_books.classList.replace('item_visible','item_hidden');
    el_wrapper_compose.classList.replace('item_visible','item_hidden');
    el_wrapper_plotlines.classList.replace('item_hidden','item_visible');
    el_wrapper_elements.classList.replace('item_visible','item_hidden');
    el_wrapper_relationships.classList.replace('item_visible','item_hidden');
    el_wrapper_settings.classList.replace('item_visible','item_hidden');

    showElementsPanel();

    window.localStorage.setItem("current_view", "plotlines");
};

function showElementsView () {
    // Organizer wrappers
    var org_wrapper_worlds = document.getElementById("org_wrapper_worlds");
    var org_wrapper_projects = document.getElementById("org_wrapper_projects");
    var org_wrapper_books = document.getElementById("org_wrapper_books");
    var org_wrapper_compose = document.getElementById("org_wrapper_compose");
    var org_wrapper_plotlines = document.getElementById("org_wrapper_plotlines");
    var org_wrapper_elements = document.getElementById("org_wrapper_elements");
    var org_wrapper_relationships = document.getElementById("org_wrapper_relationships");
    var org_wrapper_settings = document.getElementById("org_wrapper_settings");

    // Workspace wrappers
    var ws_wrapper_worldss = document.getElementById("ws_wrapper_worlds");
    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");
    var ws_wrapper_books = document.getElementById("ws_wrapper_books");
    var ws_wrapper_compose = document.getElementById("ws_wrapper_compose");
    var ws_wrapper_plotlines = document.getElementById("ws_wrapper_plotlines");
    var ws_wrapper_elements = document.getElementById("ws_wrapper_elements");
    var ws_wrapper_relationships = document.getElementById("ws_wrapper_relationships");
    var ws_wrapper_settings = document.getElementById("ws_wrapper_settings");

    // Elements wrappers
    var el_wrapper_worldss = document.getElementById("el_wrapper_worlds");
    var el_wrapper_projects = document.getElementById("el_wrapper_projects");
    var el_wrapper_books = document.getElementById("el_wrapper_books");
    var el_wrapper_compose = document.getElementById("el_wrapper_compose");
    var el_wrapper_plotlines = document.getElementById("el_wrapper_plotlines");
    var el_wrapper_elements = document.getElementById("el_wrapper_elements");
    var el_wrapper_relationships = document.getElementById("el_wrapper_relationships");
    var el_wrapper_settings = document.getElementById("el_wrapper_settings");

    // Set organizer wrapper visibility
    org_wrapper_worlds.classList.replace('item_visible','item_hidden');
    org_wrapper_projects.classList.replace('item_visible','item_hidden');
    org_wrapper_books.classList.replace('item_visible','item_hidden');
    org_wrapper_compose.classList.replace('item_visible','item_hidden');
    org_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    org_wrapper_elements.classList.replace('item_hidden','item_visible');
    org_wrapper_relationships.classList.replace('item_visible','item_hidden');
    org_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set workspace wrapper visibility
    ws_wrapper_worldss.classList.replace('item_visible','item_hidden');
    ws_wrapper_projects.classList.replace('item_visible','item_hidden');
    ws_wrapper_books.classList.replace('item_visible','item_hidden');
    ws_wrapper_compose.classList.replace('item_visible','item_hidden');
    ws_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    ws_wrapper_elements.classList.replace('item_hidden','item_visible');
    ws_wrapper_relationships.classList.replace('item_visible','item_hidden');
    ws_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set element wrapper visibility
    el_wrapper_worldss.classList.replace('item_visible','item_hidden');
    el_wrapper_projects.classList.replace('item_visible','item_hidden');
    el_wrapper_books.classList.replace('item_visible','item_hidden');
    el_wrapper_compose.classList.replace('item_visible','item_hidden');
    el_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    el_wrapper_elements.classList.replace('item_hidden','item_visible');
    el_wrapper_relationships.classList.replace('item_visible','item_hidden');
    el_wrapper_settings.classList.replace('item_visible','item_hidden');

    showElementsPanel();

    window.localStorage.setItem("current_view", "elements");

    updateElementsFocus();
};

function showRelationshipsView () {
    // Organizer wrappers
    var org_wrapper_worlds = document.getElementById("org_wrapper_worlds");
    var org_wrapper_projects = document.getElementById("org_wrapper_projects");
    var org_wrapper_books = document.getElementById("org_wrapper_books");
    var org_wrapper_compose = document.getElementById("org_wrapper_compose");
    var org_wrapper_plotlines = document.getElementById("org_wrapper_plotlines");
    var org_wrapper_elements = document.getElementById("org_wrapper_elements");
    var org_wrapper_relationships = document.getElementById("org_wrapper_relationships");
    var org_wrapper_settings = document.getElementById("org_wrapper_settings");

    // Workspace wrappers
    var ws_wrapper_worldss = document.getElementById("ws_wrapper_worlds");
    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");
    var ws_wrapper_books = document.getElementById("ws_wrapper_books");
    var ws_wrapper_compose = document.getElementById("ws_wrapper_compose");
    var ws_wrapper_plotlines = document.getElementById("ws_wrapper_plotlines");
    var ws_wrapper_elements = document.getElementById("ws_wrapper_elements");
    var ws_wrapper_relationships = document.getElementById("ws_wrapper_relationships");
    var ws_wrapper_settings = document.getElementById("ws_wrapper_settings");

    // Elements wrappers
    var el_wrapper_worldss = document.getElementById("el_wrapper_worlds");
    var el_wrapper_projects = document.getElementById("el_wrapper_projects");
    var el_wrapper_books = document.getElementById("el_wrapper_books");
    var el_wrapper_compose = document.getElementById("el_wrapper_compose");
    var el_wrapper_plotlines = document.getElementById("el_wrapper_plotlines");
    var el_wrapper_elements = document.getElementById("el_wrapper_elements");
    var el_wrapper_relationships = document.getElementById("el_wrapper_relationships");
    var el_wrapper_settings = document.getElementById("el_wrapper_settings");

    // Set organizer wrapper visibility
    org_wrapper_worlds.classList.replace('item_visible','item_hidden');
    org_wrapper_projects.classList.replace('item_visible','item_hidden');
    org_wrapper_books.classList.replace('item_visible','item_hidden');
    org_wrapper_compose.classList.replace('item_visible','item_hidden');
    org_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    org_wrapper_elements.classList.replace('item_visible','item_hidden');
    org_wrapper_relationships.classList.replace('item_hidden','item_visible');
    org_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set workspace wrapper visibility
    ws_wrapper_worldss.classList.replace('item_visible','item_hidden');
    ws_wrapper_projects.classList.replace('item_visible','item_hidden');
    ws_wrapper_books.classList.replace('item_visible','item_hidden');
    ws_wrapper_compose.classList.replace('item_visible','item_hidden');
    ws_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    ws_wrapper_elements.classList.replace('item_visible','item_hidden');
    ws_wrapper_relationships.classList.replace('item_hidden','item_visible');
    ws_wrapper_settings.classList.replace('item_visible','item_hidden');

    // Set element wrapper visibility
    el_wrapper_worldss.classList.replace('item_visible','item_hidden');
    el_wrapper_projects.classList.replace('item_visible','item_hidden');
    el_wrapper_books.classList.replace('item_visible','item_hidden');
    el_wrapper_compose.classList.replace('item_visible','item_hidden');
    el_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    el_wrapper_elements.classList.replace('item_visible','item_hidden');
    el_wrapper_relationships.classList.replace('item_hidden','item_visible');
    el_wrapper_settings.classList.replace('item_visible','item_hidden');

    hideElementsPanel();

    window.localStorage.setItem("current_view", "relationships");
};

function showSettingsView () {
    // Organizer wrappers
    var org_wrapper_worlds = document.getElementById("org_wrapper_worlds");
    var org_wrapper_projects = document.getElementById("org_wrapper_projects");
    var org_wrapper_books = document.getElementById("org_wrapper_books");
    var org_wrapper_compose = document.getElementById("org_wrapper_compose");
    var org_wrapper_plotlines = document.getElementById("org_wrapper_plotlines");
    var org_wrapper_elements = document.getElementById("org_wrapper_elements");
    var org_wrapper_relationships = document.getElementById("org_wrapper_relationships");
    var org_wrapper_settings = document.getElementById("org_wrapper_settings");

    // Workspace wrappers
    var ws_wrapper_worldss = document.getElementById("ws_wrapper_worlds");
    var ws_wrapper_projects = document.getElementById("ws_wrapper_projects");
    var ws_wrapper_books = document.getElementById("ws_wrapper_books");
    var ws_wrapper_compose = document.getElementById("ws_wrapper_compose");
    var ws_wrapper_plotlines = document.getElementById("ws_wrapper_plotlines");
    var ws_wrapper_elements = document.getElementById("ws_wrapper_elements");
    var ws_wrapper_relationships = document.getElementById("ws_wrapper_relationships");
    var ws_wrapper_settings = document.getElementById("ws_wrapper_settings");

    // Elements wrappers
    var el_wrapper_worldss = document.getElementById("el_wrapper_worlds");
    var el_wrapper_projects = document.getElementById("el_wrapper_projects");
    var el_wrapper_books = document.getElementById("el_wrapper_books");
    var el_wrapper_compose = document.getElementById("el_wrapper_compose");
    var el_wrapper_plotlines = document.getElementById("el_wrapper_plotlines");
    var el_wrapper_elements = document.getElementById("el_wrapper_elements");
    var el_wrapper_relationships = document.getElementById("el_wrapper_relationships");
    var el_wrapper_settings = document.getElementById("el_wrapper_settings");

    // Set organizer wrapper visibility
    org_wrapper_worlds.classList.replace('item_visible','item_hidden');
    org_wrapper_projects.classList.replace('item_visible','item_hidden');
    org_wrapper_books.classList.replace('item_visible','item_hidden');
    org_wrapper_compose.classList.replace('item_visible','item_hidden');
    org_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    org_wrapper_elements.classList.replace('item_visible','item_hidden');
    org_wrapper_relationships.classList.replace('item_visible','item_hidden');
    org_wrapper_settings.classList.replace('item_hidden','item_visible');

    // Set workspace wrapper visibility
    ws_wrapper_worldss.classList.replace('item_visible','item_hidden');
    ws_wrapper_projects.classList.replace('item_visible','item_hidden');
    ws_wrapper_books.classList.replace('item_visible','item_hidden');
    ws_wrapper_compose.classList.replace('item_visible','item_hidden');
    ws_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    ws_wrapper_elements.classList.replace('item_visible','item_hidden');
    ws_wrapper_relationships.classList.replace('item_visible','item_hidden');
    ws_wrapper_settings.classList.replace('item_hidden','item_visible');

    // Set element wrapper visibility
    el_wrapper_worldss.classList.replace('item_visible','item_hidden');
    el_wrapper_projects.classList.replace('item_visible','item_hidden');
    el_wrapper_books.classList.replace('item_visible','item_hidden');
    el_wrapper_compose.classList.replace('item_visible','item_hidden');
    el_wrapper_plotlines.classList.replace('item_visible','item_hidden');
    el_wrapper_elements.classList.replace('item_visible','item_hidden');
    el_wrapper_relationships.classList.replace('item_visible','item_hidden');
    el_wrapper_settings.classList.replace('item_hidden','item_visible');

    showElementsPanel();

    window.localStorage.setItem("current_view", "settings");
};
