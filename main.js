async function main() {

fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(console.log);

}

main();