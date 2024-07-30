// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.moving-image');
    const container = document.querySelector('#oval-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const borderOffset = 40; // 20px offset from the white border
    const radiusX = (containerWidth / 2) - borderOffset;
    const radiusY = (containerHeight / 2) - borderOffset;
    const speed = 2; // Set a uniform speed for all images

    images.forEach((img, index) => {
        let x, y, angle, dx, dy;

        function setInitialPosition() {
            // Random initial positions well within the container and oval boundary
            x = Math.random() * (containerWidth - 2 * borderOffset - img.clientWidth) + borderOffset;
            y = Math.random() * (containerHeight - 2 * borderOffset - img.clientHeight) + borderOffset;
            angle = Math.random() * 2 * Math.PI; // Random initial angle for direction
            dx = speed * Math.cos(angle);
            dy = speed * Math.sin(angle);

            // Ensure the initial position is within the oval boundary
            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;
            const ellipseValue = ((x + img.clientWidth / 2 - centerX) ** 2) / (radiusX ** 2) +
                                 ((y + img.clientHeight / 2 - centerY) ** 2) / (radiusY ** 2);

            if (ellipseValue > 1) {
                setInitialPosition(); // Recalculate if outside the boundary
            }
        }

        setInitialPosition();

        function moveImage() {
            x += dx;
            y += dy;

            // Check collision with edges and bounce back
            if (x <= borderOffset || x + img.clientWidth >= containerWidth - borderOffset) {
                dx = -dx;
            }
            if (y <= borderOffset || y + img.clientHeight >= containerHeight - borderOffset) {
                dy = -dy;
            }

            // Check if within oval boundary
            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;
            const ellipseValue = ((x + img.clientWidth / 2 - centerX) ** 2) / (radiusX ** 2) +
                                 ((y + img.clientHeight / 2 - centerY) ** 2) / (radiusY ** 2);

            if (ellipseValue > 1) {
                dx = -dx;
                dy = -dy;
            }

            img.style.left = `${x}px`;
            img.style.top = `${y}px`;

            requestAnimationFrame(moveImage);
        }

        moveImage();
    });
});
