window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("pgupBtn").style.display = "block";
    } else {
		document.getElementById("pgupBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}