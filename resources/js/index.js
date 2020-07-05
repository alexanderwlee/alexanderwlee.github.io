function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter() {
    var i = 0;
    var greetingText = "> print(\"Hi, I'm Alex Lee!\")";
    var greetingTextLength = greetingText.length;
    var j = greetingTextLength;
    while (true) {
        if (i < greetingText.length) {
            document.getElementById('greeting-text').innerHTML += greetingText.charAt(i);
            i++;
            await sleep(75);
            if (i == greetingTextLength) {
                document.getElementById('greeting-text-2').innerHTML = "Hi, I'm Alex Lee!";
                await sleep(3000);
                document.getElementById('greeting-text-2').innerHTML = "<span>&#8203;</span>";
            }
        } else if (i == greetingTextLength && j > 2) {
            document.getElementById('greeting-text').innerHTML = greetingText.slice(0, j - 1);
            j--;
            await sleep(60);
        } else {
            i = 1;
            j = greetingTextLength;
        }
    }
}

function activeTabScroll() {
    window.addEventListener('scroll', function() {
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
    });
}

activeTabScroll();
typeWriter();
