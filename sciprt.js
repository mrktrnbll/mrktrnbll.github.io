// document.addEventListener('DOMContentLoaded', function () {
//     const elements = document.querySelectorAll('.fade-in-typing-text > *');
    
//     elements.forEach((element, index) => {
//         const animationDelay = parseFloat(window.getComputedStyle(element).animationDelay) * 1000;
//         const animationDuration = parseFloat(window.getComputedStyle(element).animationDuration) * 1000;
//         const blinkCaret = element.querySelector('::after');
        
//         setTimeout(() => {
//             // Pause the blink-caret animation after the typing animation completes
//             blinkCaret.style.animationPlayState = 'paused';
            
//             // Remove the blinking caret after it's paused
//             blinkCaret.style.display = 'none';
//         }, animationDelay + animationDuration);
//     });
// });