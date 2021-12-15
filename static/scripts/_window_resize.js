document.addEventListener('DOMContentLoaded', function() {
    const panels = document.getElementById('panels');
    const organizer = document.getElementById('organizer');
    const workspace = document.getElementById('workspace');
    const wrapper = document.getElementById('wrapper');
    const elements = document.getElementById('elements');

    var wWidth = window.innerWidth

    if (elements) {
        var workspaceWidth = wWidth - 58 - organizer.offsetWidth - elements.offsetWidth;
        var wrapperWidth = workspaceWidth - 15;
    } else {
        var workspaceWidth = wWidth - 55 - organizer.offsetWidth;
        var wrapperWidth = workspaceWidth - 15;
    }
    workspace.style.width = `${workspaceWidth}px`;
    wrapper.style.width = `${wrapperWidth}px`;

    var panelHeight = panels.innerHeight;

    organizer.style.height = panelHeight;
    workspace.style.height = panelHeight;
    wrapper.style.height = panelHeight;
    if (elements) {
        elements.style.height = panelHeight;
    }
});

window.addEventListener('resize', function() {
    const panels = document.getElementById('panels');
    const organizer = document.getElementById('organizer');
    const elements = document.getElementById('elements');
    const workspace = document.getElementById('workspace');
    const wrapper = document.getElementById('wrapper');

    var wWidth = window.innerWidth

    if (elements) {
        var workspaceWidth = wWidth - 58 - organizer.offsetWidth - elements.offsetWidth;
        var wrapperWidth = workspaceWidth - 15;
    } else {
        var workspaceWidth = wWidth - 55 - organizer.offsetWidth;
        var wrapperWidth = workspaceWidth - 15;
    }
    workspace.style.width = `${workspaceWidth}px`;
    wrapper.style.width = `${wrapperWidth}px`;

    var panelHeight = panels.innerHeight;

    organizer.style.height = panelHeight;
    workspace.style.height = panelHeight;
    wrapper.style.height = panelHeight;
    if (elements) {
        elements.style.height = panelHeight;
    }
});