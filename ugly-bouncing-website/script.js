/// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('.moving-anchor');
    console.log(anchors)
    const container = document.querySelector('#oval-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const borderOffset = 50; // 20px offset from the white border
    const radiusX = (containerWidth / 2) - borderOffset;
    const radiusY = (containerHeight / 2) - borderOffset;
    const speed = 2; // Set a uniform speed for all images

    anchors.forEach((anchor) => {
        const img = anchor.querySelector('img');
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

        function setRandomDirection() {
            // Calculate the normal to the border and adjust angle
            let angle = Math.random() * 2 * Math.PI;
            let normalX = Math.cos(angle);
            let normalY = Math.sin(angle);

            // Normalize direction
            const length = Math.sqrt(normalX ** 2 + normalY ** 2);
            normalX /= length;
            normalY /= length;

            dx = speed * normalX;
            dy = speed * normalY;
        }

        setInitialPosition();

        function moveAnchor() {
            x += dx;
            y += dy;

            // Check collision with edges and adjust direction
            if (x <= borderOffset || x + img.clientWidth >= containerWidth - borderOffset) {
                // Bounce off the edge by reversing the direction and setting a new random angle
                if (x <= borderOffset) {
                    x = borderOffset; // Prevent sticking to the border
                } else {
                    x = containerWidth - borderOffset - img.clientWidth; // Prevent sticking to the border
                }
                setRandomDirection();
            }
            if (y <= borderOffset || y + img.clientHeight >= containerHeight - borderOffset) {
                // Bounce off the edge by reversing the direction and setting a new random angle
                if (y <= borderOffset) {
                    y = borderOffset; // Prevent sticking to the border
                } else {
                    y = containerHeight - borderOffset - img.clientHeight; // Prevent sticking to the border
                }
                setRandomDirection();
            }

            // Check if within oval boundary and adjust direction
            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;
            const ellipseValue = ((x + img.clientWidth / 2 - centerX) ** 2) / (radiusX ** 2) +
                                 ((y + img.clientHeight / 2 - centerY) ** 2) / (radiusY ** 2);

            if (ellipseValue > 1) {
                // Move the image slightly back inside the boundary
                dx = -dx;
                dy = -dy;
                // Adjust position to make sure it stays within the boundary
                x += dx * 2;
                y += dy * 2;
            }

            anchor.style.left = `${x}px`;
            anchor.style.top = `${y}px`;

            requestAnimationFrame(moveAnchor);
        }

        moveAnchor();
    });
});