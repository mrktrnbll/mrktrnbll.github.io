const introHeading = "Hello I'm Mark!"
const introBody = "I'm a 3rd year computing science student at the University of Glasgow, there's nothing here just now, so instead, heres my links!"

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