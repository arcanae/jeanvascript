function test() {
    console.log("bloup");
}

function test2() {
    console.log("bloup2");
}

let ele = document.querySelector("h1");

ele.addEventListener("click", test());

ele.addEventListener("click", test2);

ele.addEventListener("click", function() {
    console.log("bloup3");
});