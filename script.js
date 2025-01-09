const introHeading = "Hello I'm Mark!"
const introBody = "I'm a software engineer and final year Computing Science student at the University of Glasgow! Scroll down to see what I am all about! :)"

async function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

const typeCharacters = async () => {
    let heading = document.getElementById("textHeading");
    let body = document.getElementById("textBody");
    let links = document.getElementsByClassName("links");

    for (let i = 0; i < introHeading.length; i++) {
        await sleep(100);
        heading.textContent += introHeading[i];
    }
    await sleep(400);
    for (let i = 0; i < introBody.length; i++) {
        await sleep(30);
        body.textContent += introBody[i];
    }
    await sleep(1000);
    for (let i = 0; links.length>0; i++)
        links[i].style.opacity = 1;
    }

document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const introductionHeight = document.getElementById("introduction").offsetHeight;

    if (scrollY >= introductionHeight / 2) {
        document.body.classList.add("scrolled");
        document.getElementById("end-padding").style.opacity = 1;
        document.getElementById("end-padding").style.zIndex = 3;
    } else {
        document.body.classList.remove("scrolled");
        document.getElementById("end-padding").style.opacity = 0;
        document.getElementById("end-padding").style.zIndex = 1;
    }
});