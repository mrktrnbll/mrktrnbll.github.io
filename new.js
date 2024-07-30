document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.moving-image');
    const container = document.querySelector('#oval-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const borderOffset = 40;
    const radiusX = (containerWidth / 2) - borderOffset;
    const radiusY = (containerHeight / 2) - borderOffset;
    const speed = 2;

    images.forEach((img) => {
        let x, y, angle, dx, dy;

        function setInitialPosition() {

            x = Math.random() * (containerWidth - 2 * borderOffset - img.clientWidth) + borderOffset;
            y = Math.random() * (containerHeight - 2 * borderOffset - img.clientHeight) + borderOffset;
            angle = Math.random() * 2 * Math.PI;
            dx = speed * Math.cos(angle);
            dy = speed * Math.sin(angle);

            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;
            const ellipseValue = ((x + img.clientWidth / 2 - centerX) ** 2) / (radiusX ** 2) +
                                 ((y + img.clientHeight / 2 - centerY) ** 2) / (radiusY ** 2);

            if (ellipseValue > 1) {
                setInitialPosition();
            }
        }

        function setRandomDirection() {

            let angle = Math.random() * 2 * Math.PI;
            let normalX = Math.cos(angle);
            let normalY = Math.sin(angle);

            const length = Math.sqrt(normalX ** 2 + normalY ** 2);
            normalX /= length;
            normalY /= length;

            dx = speed * normalX;
            dy = speed * normalY;
        }

        setInitialPosition();

        function moveImage() {
            x += dx;
            y += dy;

            if (x <= borderOffset || x + img.clientWidth >= containerWidth - borderOffset) {
                if (x <= borderOffset) {
                    x = borderOffset;
                } else {
                    x = containerWidth - borderOffset - img.clientWidth;
                }
                setRandomDirection();
            }
            if (y <= borderOffset || y + img.clientHeight >= containerHeight - borderOffset) {
                if (y <= borderOffset) {
                    y = borderOffset;
                } else {
                    y = containerHeight - borderOffset - img.clientHeight;
                }
                setRandomDirection();
            }
            
            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;
            const ellipseValue = ((x + img.clientWidth / 2 - centerX) ** 2) / (radiusX ** 2) +
                                 ((y + img.clientHeight / 2 - centerY) ** 2) / (radiusY ** 2);

            if (ellipseValue > 1) {
                dx = -dx;
                dy = -dy;
                x += dx * 2;
                y += dy * 2;
            }

            img.style.left = `${x}px`;
            img.style.top = `${y}px`;

            requestAnimationFrame(moveImage);
        }

        moveImage();
    });
});
