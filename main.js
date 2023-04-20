async function main() {

fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(console.log);

}

async function getPosts() {

//querySelector - selects the very first element
let postNumber = document.querySelector('input').valueAsNumber

}

main();
getPosts();