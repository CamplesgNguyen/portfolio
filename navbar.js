fetch('nav_bar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#topNavbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})