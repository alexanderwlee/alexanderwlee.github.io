function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function greetingTypeWriterReturn() {
    document.getElementById('greeting-text-2').innerHTML = "Hi, I'm Alex Lee!";
    await sleep(3000);
    document.getElementById('greeting-text-2').innerHTML = "<span>&#8203;</span>";
}

async function typeWriter(elemId, text) {
    var i = 0;
    var textLength = text.length;
    var j = textLength;
    while (true) {
        if (i < textLength) {
            document.getElementById(elemId).innerHTML += text.charAt(i);
            i++;
            await sleep(75);
            if (i == textLength) {
                if (elemId == 'greeting-text') {
                    await greetingTypeWriterReturn();
                } else if (elemId == 'contact-text') {
                    await sleep(3000);
                }
            }
        } else if (i == textLength && j > 2) {
            document.getElementById(elemId).innerHTML = text.slice(0, j - 1);
            j--;
            await sleep(60);
        } else {
            i = 1;
            j = textLength;
        }
    }
}

function activeTab() {
    var navLinks = document.getElementsByClassName("nav-link");
    for (var i = 0; i < navLinks.length; i++) {
        var sectionId = navLinks[i].href.split('#').pop();
        var sectionElem = document.getElementById(sectionId);
        var sectionElemRect = sectionElem.getBoundingClientRect();
        var sectionElemBottom = Math.floor(sectionElemRect.bottom);
        var sectionElemHeight = Math.floor(sectionElemRect.height);
        if (sectionElemBottom <= sectionElemHeight && sectionElemBottom > 0) {
            if (!navLinks[i].classList.contains('active')) {
                navLinks[i].classList.add('active');
            }
        } else {
            if (navLinks[i].classList.contains('active')) {
                navLinks[i].classList.remove('active');
            }
        }
    }
}

window.addEventListener("load", activeTab);
window.addEventListener("scroll", activeTab);
typeWriter('greeting-text', "> console.log(\"Hi, I'm Alex Lee!\");")
typeWriter('contact-text', "> if (youLikeWhatYouSee) letsGetInTouch();");
