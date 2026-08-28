(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const activityGrid = document.getElementById("activity-grid");

    const activityPattern = [
        1, 2, 0, 1, 3, 2, 1, 0, 1, 2, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 3, 1, 0,
        2, 1, 3, 2, 1, 0, 1, 2, 3, 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 3, 2, 0, 1, 2,
        3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 3, 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 3, 2,
        1, 0, 1, 2, 3, 1, 0, 2, 1, 3, 2, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 3, 1, 2
    ];

    activityPattern.forEach((level, index) => {
        const cell = document.createElement("span");
        cell.className = `activity-cell level-${level}`;
        cell.style.setProperty("--cell-delay", `${index * 10}ms`);
        activityGrid.append(cell);
    });

    function setMenu(open) {
        menuToggle.setAttribute("aria-expanded", String(open));
        mobileNav.hidden = !open;
        document.body.classList.toggle("menu-open", open);
    }

    menuToggle.addEventListener("click", () => {
        setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenu(false));
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.14 });

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
})();
