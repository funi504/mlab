// Function to set the text content of the element with the id "my-Name"
function setMyName() {
    const name = "Nekhunguni Funanani";
    const myName = document.getElementById("my-name");
    
    // Check if the element with the id "my-Name" exists
    if (myName) {
        // Set the text content of the element to the value of the name variable
        myName.textContent = name;
    } else {
        console.error("Element with id 'my-name' not found.");
    }
}

// Wait for the DOM content to load before executing the function
document.addEventListener('DOMContentLoaded', setMyName);


const data = [
    {
        name:"portfolio",
        link:"https://funi.netlify.app/",
        desc: "This is my first ever portfolio website."
    },
    {
        name:"User management System",
        link:"https://user-management-r7wf.onrender.com",
        desc: "A user management system built with flask , bootstrap , jinja , postgresql and redis database. "
    },
    {
        name:"Deep Fake Detector",
        link:"https://github.com/funi504/deepfakeDetector",
        desc: "A machine learning model trained to detect deep fake images , built with pytorch."
    }
]


const projectList =  document.getElementById("projectList");

for(let i = 0 ; i < data.length ; i++){

    const project = data[i]
    console.log(project.name)
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');

    projectItem.innerHTML = `
    <div class="name-background-image">
        <h3 style="color:rgb(99, 99, 196);">${project.name}</h3>
    </div>
    <p>${project.desc}</p>
    <a href="${project.link}" >Link to project</a>
    <hr>
`;
projectList.appendChild(projectItem);
}