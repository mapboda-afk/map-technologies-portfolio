/* =====================================================
   MAP_TECHNOLOGIES
   JAVASCRIPT
===================================================== */


/* =========================
   CONSOLE MESSAGE
========================= */

console.log("Map_Technologies is running 🚀");


/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


if (menuButton && navMenu) {

    menuButton.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("open");

        }
    );


    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove("open");

                }
            );

        }
    );

}


/* =========================
   TYPING EFFECT
========================= */

const typingText =
    document.getElementById("typingText");


const messages = [
    "SOFTWARE ENGINEER IN THE MAKING",
    "BUILDER • LEARNER • DREAMER",
    "FUTURE SOFTWARE ENGINEER",
    "BUILDING MAP_TECHNOLOGIES"
];


let messageIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeWriter() {

    if (!typingText) {
        return;
    }


    const currentMessage =
        messages[messageIndex];


    if (!deleting) {

        characterIndex++;

        typingText.textContent =
            currentMessage.substring(
                0,
                characterIndex
            );


        if (
            characterIndex ===
            currentMessage.length
        ) {

            deleting = true;

            setTimeout(
                typeWriter,
                1800
            );

            return;
        }

    } else {

        characterIndex--;

        typingText.textContent =
            currentMessage.substring(
                0,
                characterIndex
            );


        if (characterIndex === 0) {

            deleting = false;

            messageIndex =
                (messageIndex + 1)
                % messages.length;

        }

    }


    setTimeout(
        typeWriter,
        deleting ? 45 : 75
    );

}


typeWriter();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section, .skill-card, .project-card, .about-card, .timeline-item"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

            revealObserver.observe(
                element
            );

        }
    );

}


/* =========================
   PARTICLES
========================= */

const particleContainer =
    document.getElementById(
        "particles"
    );


if (particleContainer) {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            (5 + Math.random() * 8) + "s";


        particle.style.animationDelay =
            (Math.random() * 8) + "s";


        particleContainer.appendChild(
            particle
        );

    }

}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


function updateActiveNavigation() {

    let currentSection = "home";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.id;

            }

        }
    );


    navigationLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href")
                ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================
   CODE WINDOW 3D EFFECT
========================= */

const codeWindow =
    document.getElementById(
        "codeWindow"
    );


if (
    codeWindow &&
    window.innerWidth > 700
) {

    codeWindow.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                codeWindow.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateX =
                ((y / rect.height) - 0.5)
                * -8;


            const rotateY =
                ((x / rect.width) - 0.5)
                * 8;


            codeWindow.style.transform =
                "perspective(1000px) " +
                "rotateX(" +
                rotateX +
                "deg) " +
                "rotateY(" +
                rotateY +
                "deg)";

        }
    );


    codeWindow.addEventListener(
        "mouseleave",
        function () {

            codeWindow.style.transform =
                "perspective(1000px) " +
                "rotate(2deg)";

        }
    );

}


/* =========================
   SMOOTH NAVIGATION
========================= */

navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId &&
                    targetId.startsWith("#")
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    }
);
