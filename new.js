document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.moving-image');
    const container = document.querySelector('#oval-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const borderOffsetx = 60;
    const borderOffsety = 30;
    const radiusX = (containerWidth / 2) - borderOffsetx;
    const radiusY = (containerHeight / 2) - borderOffsety;
    const speed = 2;

    images.forEach((img) => {
        let x, y, angle, dx, dy;

        function setInitialPosition() {

            x = Math.random() * (containerWidth - 2 * borderOffsetx - img.clientWidth) + borderOffsetx;
            y = Math.random() * (containerHeight - 2 * borderOffsety - img.clientHeight) + borderOffsety;
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

            if (x <= borderOffsetx || x + img.clientWidth >= containerWidth - borderOffsetx) {
                if (x <= borderOffsetx) {
                    x = borderOffsetx;
                } else {
                    x = containerWidth - borderOffsetx - img.clientWidth;
                }
                setRandomDirection();
            }
            if (y <= borderOffsety || y + img.clientHeight >= containerHeight - borderOffsety) {
                if (y <= borderOffsety) {
                    y = borderOffsety;
                } else {
                    y = containerHeight - borderOffsety - img.clientHeight;
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
