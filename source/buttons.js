window.onscroll = function() {scrollFunction()};
window.onload = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("pgupBtn").style.display = "block";
		document.getElementById("homeBtn").style.display = "block";
    } else {
        document.getElementById("homeBtn").style.display = "block";
		document.getElementById("pgupBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function homeFunction() {
	window.location='https://sirtowsalot.github.io'
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}