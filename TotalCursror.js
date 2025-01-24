function bigCursor() {
    const style = document.createElement("style");
    style.textContent = `
  .large-cursor {
    cursor: url('Big-Cursor(1).png'), auto;
    }
    `;
    document.head.appendChild(style);
    document.body.classList.add("large-cursor");
}

function createReadingGuide() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.zIndex = '9999';
    container.style.pointerEvents = 'none';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';

    const line = document.createElement('div');
    line.style.width = '100%';
    line.style.height = '5px';
    line.style.backgroundColor = 'black';
    line.style.border = "1px solid yellow";

    const pointer = document.createElement('div');
    pointer.style.border = "1px solid yellow"
    pointer.style.width = '0';
    pointer.style.height = '0';
    pointer.style.borderLeft = '8px solid transparent';
    pointer.style.borderRight = '8px solid transparent';
    pointer.style.borderBottom = '8px solid black';
    pointer.style.marginBottom = '-1px';
    pointer.style.position = 'relative';
    pointer.style.transition = 'left 0.001s ease-out';

    container.appendChild(pointer);
    container.appendChild(line);

    document.body.appendChild(container);

    const updateGuideWidth = () => {
        const guideWidth = Math.max(300, Math.min(window.innerWidth * 0.1, 150));
        container.style.width = `${guideWidth}px`;
        return guideWidth;
    };

    let guideWidth = updateGuideWidth();

    window.addEventListener('resize', () => {
        guideWidth = updateGuideWidth();
    });

    document.addEventListener('mousemove', (e) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let leftPosition = e.clientX - (guideWidth / 2);
        let topPosition = e.clientY;

        let pointerOffset = 0;

        if (leftPosition <= 0) {
            const overflow = -leftPosition;
            pointerOffset = -Math.min(overflow, guideWidth / 2 - 8);
            leftPosition = 0;
        }
        else if (leftPosition + guideWidth >= windowWidth) {
            const overflow = (leftPosition + guideWidth) - windowWidth;
            pointerOffset = Math.min(overflow, guideWidth / 2 - 8);
            leftPosition = windowWidth - guideWidth;
        }

        topPosition = Math.max(8, Math.min(topPosition, windowHeight - 2));

        container.style.left = `${leftPosition}px`;
        container.style.top = `${topPosition}px`;
        pointer.style.left = `${pointerOffset}px`;
    });
}
function addReadingMask() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createMask);
    } else {
        createMask();
    }

    function createMask() {
        const maskOverlay = document.createElement('div');
        maskOverlay.style.position = 'fixed';
        maskOverlay.style.top = '0';
        maskOverlay.style.left = '0';
        maskOverlay.style.width = '100%';
        maskOverlay.style.height = '100%';
        maskOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        maskOverlay.style.pointerEvents = 'none';
        maskOverlay.style.zIndex = '9999';

        const borderElement = document.createElement('div');
        borderElement.style.position = 'absolute';
        borderElement.style.top = '0';
        borderElement.style.left = '0';
        borderElement.style.width = '100%';
        borderElement.style.height = '100%';
        borderElement.style.pointerEvents = 'none';
        borderElement.style.border = '2px solid white';
        borderElement.style.zIndex = 9998;

        document.body.appendChild(borderElement);
        document.body.appendChild(maskOverlay);
        document.body.style.cursor = 'none';

        document.addEventListener('mousemove', (event) => {
            const mouseY = event.clientY;
            const stripHeight = 150;
            const topPosition = mouseY - stripHeight / 2;
            maskOverlay.style.clipPath = `polygon(
                0 0,
                100% 0,
                100% ${topPosition}px,
                0 ${topPosition}px,
                0 ${topPosition + stripHeight}px,
                100% ${topPosition + stripHeight}px,
                100% 100%,
                0 100%
            )`;

            borderElement.style.clipPath = `polygon(
                0 0,
                100% 0,
                100% ${topPosition + 2}px, /* Adjust for border width */
                0 ${topPosition + 2}px,       /* Adjust for border width */
                0 ${topPosition + stripHeight - 2}px, /* Adjust for border width */
                100% ${topPosition + stripHeight - 2}px, /* Adjust for border width */
                100% 100%,
                0 100%
            )`;
        });
    }
}


