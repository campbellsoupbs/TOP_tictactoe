const field = Array.from(document.querySelectorAll(".field"));

for (let i of field) {
    i.addEventListener("click", logIndex)
}

function logIndex(e) {
    console.log(e.target.dataset['index'])
}