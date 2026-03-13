const internships = [
{
title: "Software Developer Intern",
company: "Google",
location: "Remote"
},
{
title: "Web Development Intern",
company: "Microsoft",
location: "Hyderabad"
},
{
title: "Data Analyst Intern",
company: "Amazon",
location: "Bangalore"
},
{
title: "AI/ML Intern",
company: "Infosys",
location: "Pune"
}
];

function displayInternships(list){
const container = document.getElementById("internship-list");
container.innerHTML = "";

list.forEach(intern => {
const div = document.createElement("div");
div.className="card";

div.innerHTML = `
<h3>${intern.title}</h3>
<p>Company: ${intern.company}</p>
<p>Location: ${intern.location}</p>
`;

container.appendChild(div);
});
}

displayInternships(internships);

document.getElementById("search").addEventListener("keyup", function(){
const value = this.value.toLowerCase();

const filtered = internships.filter(intern =>
intern.title.toLowerCase().includes(value) ||
intern.company.toLowerCase().includes(value)
);

displayInternships(filtered);
});
