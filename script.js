/* =========================================================
   MAP_TECHNOLOGIES
   PROFESSIONAL PORTFOLIO JAVASCRIPT
   DEVICE DETECTION + MENU + TYPING + PARTICLES
   + NAVIGATION + CODE WINDOW + SCROLL REVEAL
========================================================= */

"use strict";


/* =========================================================
   PAGE READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DEVICE DETECTION
    ===================================================== */

    const userAgent = navigator.userAgent || navigator.vendor || "";

    const body = document.body;

    const isAndroid =
        /Android/i.test(userAgent);

    const isIOS =
        /iPhone|iPad|iPod/i.test(userAgent) ||
        (
            navigator.platform === "MacIntel" &&
            navigator.maxTouchPoints > 1
        );

    const isWindows =
        /Windows/i.test(userAgent);

    const isMac =
        /Macintosh|Mac OS X/i.test(userAgent) &&
        !isIOS;

    const isTablet =
        /Tablet|iPad/i.test(userAgent) ||
        (
            /Android/i.test(userAgent) &&
            !/Mobile/i.test(userAgent)
        );


    /* Remove previous device classes */

    body.classList.remove(
        "android",
        "ios",
        "windows",
        "mac",
        "tablet",
        "desktop",
        "mobile"
    );


    /* Add correct device classes */

    if (isAndroid) {

        body.classList.add("android");

    } else if (isIOS) {

        body.classList.add("ios");

    } else if (isWindows) {

        body.classList.add("windows");

    } else if (isMac) {

        body.classList.add("mac");
    }


    if (isTablet) {

        body.classList.add("tablet");

    } else if (
        isAndroid ||
        isIOS
    ) {

        body.classList.add("mobile");

    } else {

        body.classList.add("desktop");
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const navMenu =
        document.getElementById("navMenu");


    if (menuButton && navMenu) {


        menuButton.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("open");

                const isOpen =
                    navMenu.classList.contains("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        /* Close menu after clicking a link */

        const menuLinks =
            navMenu.querySelectorAll("a");


        menuLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navMenu.classList.remove(
                            "open"
                        );

                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );


        /* Close menu when clicking outside */

        document.addEventListener(
            "click",
            function (event) {

                const clickedInsideMenu =
                    navMenu.contains(event.target);

                const clickedButton =
                    menuButton.contains(event.target);


                if (
                    !clickedInsideMenu &&
                    !clickedButton
                ) {

                    navMenu.classList.remove(
                        "open"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            }
        );

    }


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

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
                characterIndex >=
                currentMessage.length
            ) {

                deleting = true;

                setTimeout(
                    typeWriter,
                    1600
                );

                return;
            }


            setTimeout(
                typeWriter,
                65
            );


        } else {

            characterIndex--;


            typingText.textContent =
                currentMessage.substring(
                    0,
                    characterIndex
                );


            if (characterIndex <= 0) {

                deleting = false;

                messageIndex =
                    (
                        messageIndex + 1
                    ) %
                    messages.length;

            }


            setTimeout(
                typeWriter,
                35
            );
        }
    }


    if (typingText) {

        typingText.textContent = "";

        typeWriter();

    }


    /* =====================================================
       BACKGROUND PARTICLES
    ===================================================== */

    const particles =
        document.getElementById("particles");


    if (particles) {


        /* Clear existing particles */

        particles.innerHTML = "";


        const particleCount =
            window.innerWidth <= 600
                ? 25
                : 45;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {


            const particle =
                document.createElement("span");


            particle.className =
                "particle";


            particle.style.left =
                Math.random() * 100 + "%";


            particle.style.animationDuration =
                (
                    5 +
                    Math.random() * 8
                ) + "s";


            particle.style.animationDelay =
                (
                    Math.random() * 8
                ) + "s";


            particles.appendChild(
                particle
            );

        }

    }


    /* =====================================================
       CODE WINDOW 3D EFFECT
    ===================================================== */

    const codeWindow =
        document.getElementById("codeWindow");


    if (
        codeWindow &&
        window.innerWidth > 1000
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
                    (
                        (y / rect.height) -
                        0.5
                    ) * -8;


                const rotateY =
                    (
                        (x / rect.width) -
                        0.5
                    ) * 8;


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
                    "perspective(1000px) rotate(2deg)";

            }
        );

    }


    /* =====================================================
       NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            "#navMenu a"
        );


    function updateNavigation() {


        let currentSection =
            "home";


        sections.forEach(
            function (section) {


                const sectionTop =
                    section.offsetTop - 250;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            function (link) {


                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute("href");


                if (
                    href ===
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
        updateNavigation,
        {
            passive: true
        }
    );


    updateNavigation();


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    navLinks.forEach(
        function (link) {


            link.addEventListener(
                "click",
                function (event) {


                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-card, " +
            ".skill, " +
            ".project, " +
            ".focus-card, " +
            ".timeline-item, " +
            ".stat-card"
        );


    if (
        "IntersectionObserver" in window
    ) {


        const revealObserver =
            new IntersectionObserver(
                function (
                    entries,
                    observer
                ) {


                    entries.forEach(
                        function (entry) {


                            if (
                                entry.isIntersecting
                            ) {


                                entry.target.style.opacity =
                                    "1";


                                entry.target.style.transform =
                                    "translateY(0)";


                                observer.unobserve(
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


                element.style.opacity =
                    "0";


                element.style.transform =
                    "translateY(30px)";


                element.style.transition =
                    "opacity 0.7s ease, " +
                    "transform 0.7s ease";


                revealObserver.observe(
                    element
                );

            }
        );


    } else {


        /* Older browsers */

        revealElements.forEach(
            function (element) {

                element.style.opacity =
                    "1";

                element.style.transform =
                    "translateY(0)";

            }
        );

    }


    /* =====================================================
       WINDOW RESIZE
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        function () {


            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    function () {


                        /* Close mobile menu
                           when screen becomes large */

                        if (
                            window.innerWidth >
                            1100 &&
                            navMenu &&
                            menuButton
                        ) {

                            navMenu.classList.remove(
                                "open"
                            );

                            menuButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }


                    },
                    150
                );

        }
    );


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cMap_Technologies 🚀",
        "color:#1683ff;font-size:20px;font-weight:bold;"
    );


    console.log(
        "Device detected:",
        isAndroid
            ? "Android"
            : isIOS
                ? "iOS"
                : isWindows
                    ? "Windows"
                    : isMac
                        ? "Mac"
                        : "Other"
    );


});