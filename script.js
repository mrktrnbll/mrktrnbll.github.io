const introHeading = "Hello I'm Mark!"
const introBody = "I'm a software engineer and computing science graduate of the University of Glasgow! Scroll down or hit one of my links to see what I am all about! :)"

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
    links[0].style.opacity = 1;
}

function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    console.log(event.currentTarget);

    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
