var page = 1;
function next() {
   
    page = 2;
}
function back() {
    page = 1
}
if (page === 1) {
    document.write(' <img id="manga" src="Images/XY_001-me.jpg">')
} else if(page === 2) {
    document.write(' <img id="manga" src="Images/XY_002-me.jpg">')
}

document.getElementById("back").onclick(document.write(' <img id="manga" src="Images/XY_002-me.jpg">'));