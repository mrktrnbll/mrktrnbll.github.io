const introHeading = "Hello I'm Mark!"
const introBody = "I'm a 3rd University of Glasgow computing science student, theres nothing here just now, instead heres my links!"

async function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

// const flashCaret = async (id) => {
//     const caret = "|"
//     for (let i = 0; i < 7; i++) {
//         await sleep(100);
//         if (id.textContent == caret) {
//             id.textContent = ;
//         }
//         else { id.textContent = caret; }
//     }
// }

const typeCharacters = async () => {
    let heading = document.getElementById("textHeading");
    let body = document.getElementById("textBody");
    let links = document.getElementById("links");

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
    links.style.opacity = 1;
}