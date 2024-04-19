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
        link:" link to portfolio",
        desc: "this is my first portfolio website"
    },
    {
        name:"portfolio",
        link:" link to portfolio",
        desc: "this is my first portfolio website this is my first portfolio website this is my first portfolio website"
    },
    {
        name:"portfolio",
        link:" link to portfolio",
        desc: "this is my first portfolio website"
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
        <h3>${project.name}</h3>
    </div>
    <p>Description: ${project.desc}</p>
    <a href="${project.link}" target="_blank">Link to project</a>
    <hr>
`;
projectList.appendChild(projectItem);
}