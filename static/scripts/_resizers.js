document.addEventListener('DOMContentLoaded', function() {
    // Query the element
    const organizer = document.getElementById('organizer');
    const elements = document.getElementById('elements');
    const resizer_left = document.getElementById('resizer_left');
    const resizer_right = document.getElementById('resizer_right');

    // The current position of mouse
    let x = 0;
    let y = 0;
    let leftWidth = 0;
    let rightWidth = 0;

    // Handle the mousedown event
    // that's triggered when user drags the resizer
    const mouseDownHandlerLeft = function(e) {
        // Get the current mouse position
        x = e.clientX;
        y = e.clientY;
        leftWidth = organizer.getBoundingClientRect().width;

        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandlerLeft);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseDownHandlerRight = function(e) {
        // Get the current mouse position
        x = e.clientX;
        y = e.clientY;

        rightWidth = elements.getBoundingClientRect().width;

        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandlerRight);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandlerLeft = function(e) {
        // How far the mouse has been moved
        const lx = e.clientX - x;
        const ly = e.clientY - y;

        const newLeftWidth = leftWidth + lx;
        organizer.style.width = `${newLeftWidth}px`;

        if (newLeftWidth < 2) {
            organizer.style.overflow = "hidden";
        }
        if (newLeftWidth >= 2) {
            organizer.style.overflow = "auto";
        }

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

        resizer_left.style.cursor = 'col-resize';
        document.body.style.cursor = 'col-resize';

        organizer.style.userSelect = 'none';
        organizer.style.pointerEvents = 'none';
    };

    const mouseMoveHandlerRight = function(e) {
        // How far the mouse has been moved
        const rx = e.clientX - x;
        const ry = e.clientY - y;

        const newRightWidth = rightWidth - rx;
        elements.style.width = `${newRightWidth}px`;

        if (newRightWidth < 2) {
            elements.style.overflow = "hidden";
        }
        if (newRightWidth >= 2) {
            elements.style.overflow = "auto";
        }
        resizer_right.style.visibility = "hidden"

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

        resizer_right.style.cursor = 'col-resize';
        document.body.style.cursor = 'col-resize';

        elements.style.userSelect = 'none';
        elements.style.pointerEvents = 'none';

        if (window.getSelection) {window.getSelection().removeAllRanges();
        } else if (document.selection) {
            document.selection.empty();
        }
    };

    const mouseUpHandler = function() {
        resizer_left.style.removeProperty('cursor');
        organizer.style.removeProperty('user-select');
        organizer.style.removeProperty('pointer-events');
        document.removeEventListener('mousemove', mouseMoveHandlerLeft);

        var checkExist = document.getElementById('resizer_right');
        if (checkExist) {
            rightWidth = elements.getBoundingClientRect().width;
            resizer_right.style.right = `${rightWidth}px`
            resizer_right.style.visibility = "visible"
            resizer_right.style.removeProperty('cursor');
            elements.style.removeProperty('user-select');
            elements.style.removeProperty('pointer-events');
            document.removeEventListener('mousemove', mouseMoveHandlerRight);
        }

        document.body.style.removeProperty('cursor');
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handlers
    resizer_left.addEventListener('mousedown', mouseDownHandlerLeft);
    var checkExist = document.getElementById('resizer_right');
    if (checkExist) {
        resizer_right.addEventListener('mousedown', mouseDownHandlerRight);
    }
});
