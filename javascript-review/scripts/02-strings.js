
let myShortName = "Lau";
let aka = "cool dev";
let complet = myShortName + " is a " + aka;

console.log(complet);

let template = `
hi
im
Lau
`;

console.log(template);

let coolTemplate= `
${myShortName} is a ${aka}`;

console.log(coolTemplate);

let withHTML = `
<div class="container">
<h2>${myShortName}</h2>
<p>${complet}</p>
</div>`;

let container = document.createElement("section");

container.innerHTML = withHTML;


document.addEventListener("DOMContentLoaded", function(){
    document.body.appendChild(container);
}, false);

function othersInners (name, info, other){
    
let othersWithHTML = `
<div class="container">
<h2>${name}</h2>
<p>${info}</p>
<h3>${other}</h3>
</div>`;

return othersWithHTML;
}

container.innerHTML += othersInners("Ana", " is a ", "very nice person.");
container.innerHTML += othersInners("Paco", " want to ", "be a dev.");

