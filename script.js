const introHeading = "Hello I'm Mark!"
const introBody = "I'm a software engineer and computing science graduate of the University of Glasgow! Scroll down or hit one of my links to see what I am all about! :)"
const projectsJSON = [
    {
        "id": 1,
        "name": "Hexis",
        "demo_url": "https://hexis.live",
        "thumbnail_url": "assets/photos/hexis_thumbnail.webp",
        "description": "Built on advanced performance science and AI, Hexis empowers teams to optimise performance, enhance recovery, and unlock the true potential of every athlete."
    },
    {
        "id": 2,
        "name": "CRUK Scotland Institute Data Portal",
        "demo_url": "https://github.com/mrktrnbll/beatson-team-project",
        "thumbnail_url": "assets/photos/cruk.webp",
        "description": "The CRUK Scotland Institute Data Portal is a web application that allows researchers to access and analyse data over all Mouse Model Research (MMR)."
    },
    {
        "id": 3,
        "name": "Breast Cancer Detection ML Model",
        "demo_url": "https://github.com/mrktrnbll/ml-breastcancer-classifier",
        "thumbnail_url": "assets/photos/ml_breastcancer.png",
        "description": "A machine learning model that predicts whether a patient has breast cancer or not based on the features of the cell nuclei present in the image."
    },
    {
        "id": 4,
        "name": "BeePomodoro",
        "demo_url": "https://github.com/mrktrnbll/bee-pomodoro-timer",
        "thumbnail_url": "assets/photos/bee.png",
        "description": "Fun little bee themed pomodoro timer! This was my first ever project and it is... rubbish! It is a reminder of how far I have come and that my efforts pay off - for that reason it is my best project to date."
    },
    {
        "id": 5,
        "name": "This Website! (ofcourse)",
        "demo_url": "https://www.mrktrnbll.dev",
        "thumbnail_url": "assets/photos/website.webp",
        "description": "A thrown together website to showcase my projects and hobbies. It is not quite finished and it never will be, until now I let perfect get in the way of done - which for a software would mean I'd never deploy!"
    }
]

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

// const projects = document.querySelector("#more-information");
// const renderProjects = async () => {
//     try {
//         let item = "";
//         for (let i = 0; i < projectsJSON.length; i++) {
//             if (i % 2 === 1) {
//                 item += `
//                 <div class="project">
//                     <div style="margin-right: 1em;" class="project-description">
//                         <h3>${projectsJSON[i].name}</h3>
//                         <p>${projectsJSON[i].description}</p>
//                     </div>
//                     <a href=${projectsJSON[i].demo_url}>
//                         <img src=${projectsJSON[i].thumbnail_url} alt=${projectsJSON[i].name}/>
//                     </a>
//                 </div>`
//             } else {
//                 item += `
//                 <div class="project">
//                     <a href=${projectsJSON[i].demo_url}>
//                         <img src=${projectsJSON[i].thumbnail_url} alt=${projectsJSON[i].name}/>
//                     </a>
//                     <div class="project-description" style="margin-left: 1em;">
//                         <h3>${projectsJSON[i].name}</h3>
//                         <p>${projectsJSON[i].description}</p>
//                     </div>
//                 </div>`
//             }
//         }
//         projects.innerHTML = item;
//     } catch (error) {
//         console.log("projects error ===>>>", error);
//     }
// };

// window.addEventListener("load", () => {
//     renderProjects()
// })
