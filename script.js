
document.getElementById("greetBtn").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;
    document.querySelector("h1").innerText = "Hello " + name;
});


document.getElementById("red").addEventListener("click", function () {
    this.style.backgroundColor = "red";
});

document.getElementById("blue").addEventListener("click", function () {
    this.style.backgroundColor = "blue";
});

document.getElementById("green").addEventListener("click", function () {
    this.style.backgroundColor = "green";
});

document.getElementById("yellow").addEventListener("click", function () {
    this.style.backgroundColor = "yellow";
});
