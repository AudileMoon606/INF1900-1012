const people = [
    {
        name: "Jérôme Collin",
        role: "Coordonnateur et enseignant",
        image: "https://www.polymtl.ca/expertises/sites/expertises.lxpolywebprod.polymtl.ca/files/jerome-collin.jpg",
    },
    {
        name: "Geneviève Cyr",
        role: "Enseignante",
        image: "https://www.polymtl.ca/expertises/sites/expertises.lxpolywebprod.polymtl.ca/files/genevieve-cyr.jpg",
    },
    {
        name: "Laurent Tremblay",
        role: "Analyste au département de génie informatique et génie logiciel. Aide technique supplémentaire",
    },
    {
        name: "Maude St-Cyr Bouchard",
        role: "Coordonnatrice pour le travail en équipe en génie informatique – personne-ressource dans ce cours",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQG86b9xuNOIkg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694480638264?e=1778112000&v=beta&t=7Sx13xLLqvZDvqU7w1sn7V2bVy_S75xs-Ufei_LfSzI",
    },
    {
        name: "Gaëtan Florio",
        role: "Chargé de laboratoire, Lundi AM, section 1",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQHgy7H_FeK-xg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663879563448?e=1778112000&v=beta&t=r6yc5MtDgVX-rs9ta--3beIcpRG9sgDdCKME6Tf_3NM",
    },
    {
        name: "Kais Fallouh",
        role: "Chargé de laboratoire, Mercredi PM, section 1",
        image: "https://media.licdn.com/dms/image/v2/D4E35AQF22EwAjfsqmg/profile-framedphoto-shrink_200_200/B4EZy8TaOLGcAY-/0/1772685730955?e=1777338000&v=beta&t=QBF-eAC9CtJwChikkGFPdfNz7qDW8lKNAZ0eqkNqvuM",
    },
    {
        name: "Laurent Bourgon",
        role: "Chargé de laboratoire, Mardi PM, section 2",
    },
    {
        name: "Tristan Rioux",
        role: "Chargée de laboratoire, Jeudi AM, section 2",
    },
    {
        name: "Raphaël Tremblay",
        role: "Chargé de laboratoire, Lundi PM, section 3",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQF5kqupnQFyqw/profile-displayphoto-scale_200_200/B4EZyWA.lMH0AY-/0/1772043365659?e=1778112000&v=beta&t=eaS70V8gXJ9eQehav9IylR3DYixAEWB2X-yPE3ge-Rg",
    },
    {
        name: "Nathan Bougie",
        role: "Chargé de laboratoire, Jeudi PM, section 3",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQFzqB-fsS_z8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700183853777?e=1778112000&v=beta&t=LgbELr133ufn2hCq3IozqVUR9tdjXFIO3e3C0ritxQY",
    },
    {
        name: "Marc-Antoine Manningham",
        role: "Chargé de laboratoire, Mardi AM, section 4",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQHr7PDc_8WKOQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1681071604027?e=1778112000&v=beta&t=LMjk6qLWoXA4ZvGLKc8g_YGelGjtIpXoBGU0-TedyAI",
    },
    {
        name: "Aymane Bouchich",
        role: "Chargé de laboratoire, Vendredi AM, section 4",
        image: "https://media.licdn.com/dms/image/v2/D4E35AQEO0PnAh5paRA/profile-framedphoto-shrink_200_200/B4EZxxrvTZJsAY-/0/1771433817669?e=1777338000&v=beta&t=XpD7NG3NaVVKmWTLvT18j4l0xRssLB7vhX3QAOzGdkc",
    },
    {
        name: "Abdul-Wahab Chaarani",
        role: "Chargé de laboratoire, Mercredi AM, section 5",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQGiH3zAFYpMhw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724165956415?e=1778112000&v=beta&t=f2qCfSteJpjJWxXpz97Nk6u9yS5ydWZBvqPXjwqLW_E",
    },
    {
        name: "Meriam Ben Rabia",
        role: "Chargé de laboratoire, Vendredi PM, section 5",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQHqRZEbSsjFFw/profile-displayphoto-scale_200_200/B4EZuwXET8KwAY-/0/1768190399519?e=1778112000&v=beta&t=5LposWDm6rjkP8zlJoGdl_X92P_MR80e5qaHeQY6-7s",
    },
    {
        name: "Manuel Jarry",
        role: "Répétiteur, Sect. 1, Lundi AM",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQH1qxcUKBDYRw/profile-displayphoto-shrink_200_200/B4EZWqFcC.GYAc-/0/1742315309014?e=1778112000&v=beta&t=AQT_3y3JOlbeyqvvABa1OoG0gJfVCJSDA0KyOhHQ8zo",
    },
    {
        name: "Renato Rezende",
        role: "Répétiteur, Sect. 1, Mercredi PM",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQFASpa7VMvLkQ/profile-displayphoto-scale_200_200/B4EZggUxKBGYAY-/0/1752888974135?e=1778112000&v=beta&t=asEsO1YOkkxDnOQT2l1YlXbt0NffvBhgxFg1R0E5ZPM",
    },
    {
        name: "Mathieu Lambert",
        role: "Répétiteur, Sect. 2, Mardi PM",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQG-6JC2SKYPUQ/profile-displayphoto-shrink_200_200/B4DZc_9Yu4G8AY-/0/1749124747456?e=1778112000&v=beta&t=E8yzK5T_B11sOdKLlQYHqMkNyt2aBPwmp8cIKWBiIYA",
    },
    {
        name: "Paul Wilfried Elomo Atanga",
        role: "Répétiteur, Sect. 2, Jeudi AM",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQGOsnd-uC5lMQ/profile-displayphoto-scale_200_200/B4EZwdHt_7GsAY-/0/1770015089296?e=1778112000&v=beta&t=8MRZv5wQpW8h_MogruducGifpVzf3esRU6lTIS6NBBk",
    },
    {
        name: "Samuel Bélanger",
        role: "Répétiteur, Sect. 3, Lundi PM",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQH_MKXSgLr6ZA/profile-displayphoto-scale_200_200/B4EZzjriRPHsAY-/0/1773346367574?e=1778112000&v=beta&t=VWcj_3eIhydHk3HF4HD-3H32Xi6NqQrEe0-37h_zSZQ",
    },
    {
        name: "Beaurel Fohom Takala",
        role: "Répétiteur, Sect. 3, Jeudi PM",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQHoB3AjDxVGrA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720672534893?e=1778112000&v=beta&t=rKT9sO1PS82azyeE0bKBkXgRC9RXrg48dgJyBG3CpUk",
    },
    {
        name: "Thierry Poulin",
        role: "Répétiteur, Sect. 4, Mardi AM",
        image: "",
    },
    {
        name: "Ghadi Falouh",
        role: "Répétiteur, Sect. 4, Vendredi AM",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQFHjztYg5t1Yw/profile-displayphoto-scale_200_200/B4EZxz1otWJ8AY-/0/1771469968454?e=1778112000&v=beta&t=Co4LhDnZfEJLh9OEfb9ywp0bF1VgGAjaym8DiuEhMDc",
    },
    {
        name: "Arnaud Grandisson",
        role: "Répétiteur, Sect. 5, Mercredi AM",
        image: "https://media.licdn.com/dms/image/v2/D4E35AQGgcgI4I0Yiag/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1725535416483?e=1777338000&v=beta&t=G3ZqRpLfQ60iweX0xc5r4sXN72CRU10r-onEwAHtoZs",
    },
    {
        name: "Milinda Zeggane",
        role: "Répétiteur, Sect. 5, Vendredi PM",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQGuO72lfdFF6A/profile-displayphoto-shrink_200_200/B4EZVK5v_EGgAc-/0/1740718408104?e=1778112000&v=beta&t=zwWA2iMrvKytgTto3okJBZ_xiZ0PVaG7AKqrAk6rNUE",
    }
];

function getSectionNumber(role) {
    const sectionMatch = role.match(/(?:section|Sect\.)\s*(\d)/i);
    return sectionMatch ? Number(sectionMatch[1]) : 0;
}

const storePeople = [...people].sort((firstPerson, secondPerson) => {
    const firstSection = getSectionNumber(firstPerson.role);
    const secondSection = getSectionNumber(secondPerson.role);
    const priorityNames = ["Jérôme Collin", "Geneviève Cyr"];
    const firstPriority = priorityNames.indexOf(firstPerson.name);
    const secondPriority = priorityNames.indexOf(secondPerson.name);

    if (firstSection !== secondSection) {
        return firstSection - secondSection;
    }

    if (firstPriority !== -1 || secondPriority !== -1) {
        if (firstPriority === -1) {
            return 1;
        }
        if (secondPriority === -1) {
            return -1;
        }
        return firstPriority - secondPriority;
    }

    return firstPerson.name.localeCompare(secondPerson.name, "fr-CA");
});

function avatarFromName(name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=256&background=0A66C2&color=ffffff&bold=true`;
}

function imageForPerson(person) {
    return person.image || avatarFromName(person.name);
}

function setupTheme() {
    const root = document.body;
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        root.classList.add("dark");
    }
    if (themeIcon) {
        themeIcon.textContent = root.classList.contains("dark") ? "☀️" : "🌙";
    }

    if (!themeToggle) {
        return;
    }

    themeToggle.addEventListener("click", () => {
        root.classList.toggle("dark");
        const isDark = root.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeIcon.textContent = isDark ? "☀️" : "🌙";
    });
}

function setupActiveNav() {
    const currentPage = document.body.dataset.page;
    if (!currentPage) {
        return;
    }
    const currentLink = document.querySelector(`[data-nav="${currentPage}"]`);
    if (currentLink) {
        currentLink.classList.add("active");
    }
}

function setupMobileHeader() {
    const navWrap = document.querySelector(".nav-wrap");
    const nav = navWrap?.querySelector("nav");

    if (!navWrap || !nav) {
        return;
    }

    const menuToggle = document.createElement("button");
    menuToggle.type = "button";
    menuToggle.className = "btn-icon menu-toggle";
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";

    navWrap.insertBefore(menuToggle, nav);

    function closeMenu() {
        navWrap.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
        menuToggle.textContent = "☰";
    }

    function openMenu() {
        navWrap.classList.add("menu-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Fermer le menu");
        menuToggle.textContent = "✕";
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navWrap.classList.contains("menu-open");
        if (isOpen) {
            closeMenu();
            return;
        }
        openMenu();
    });

    nav.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }
        if (target.tagName === "A") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) {
            closeMenu();
        }
    });
}

function renderAcknowledgements() {
    const grid = document.getElementById("peopleGrid");
    if (!grid) {
        return;
    }

    grid.innerHTML = people.map((person) => {
        const imageUrl = imageForPerson(person);

        return `
            <article class="card person-card">
                <div class="person-head">
                    <img src="${imageUrl}" alt="Portrait de ${person.name}" loading="lazy">
                    <div>
                        <h3>${person.name}</h3>
                        <p class="person-role">${person.role}</p>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function setupStore() {
    const grid = document.getElementById("storeGrid");
    if (!grid) {
        return;
    }

    const cartButton = document.getElementById("cartButton");
    const cartCount = document.getElementById("cartCount");
    const cartDrawer = document.getElementById("cartDrawer");
    const cartItems = document.getElementById("cartItems");
    const closeCart = document.getElementById("closeCart");
    const overlay = document.getElementById("overlay");
    const cartSummary = document.getElementById("cartSummary");
    const checkoutBtn = document.getElementById("checkoutBtn");

    const cart = new Map();

    function shirtVariant(person) {
        const sectionNumber = getSectionNumber(person.role);
        if (sectionNumber) {
            return `section-${sectionNumber}`;
        }

        if (/Répétiteur/i.test(person.role)) {
            return "repetiteur";
        }

        if (/Chargé|Chargée/i.test(person.role)) {
            return "charge";
        }

        return "coordination";
    }

    grid.innerHTML = storePeople.map((person, index) => `
        <article class="card product-card">
            <div class="shirt-image">
                <div class="shirt ${shirtVariant(person)}">
                    <span class="shirt-collar" aria-hidden="true"></span>
                    <span class="shirt-print" aria-hidden="true">INF1900</span>
                    <img src="${imageForPerson(person)}" alt="Visage de ${person.name}">
                </div>
            </div>
            <h3>Chandail "${person.name}"</h3>
            <p class="product-role">${person.role}</p>
            <p class="price-tag">Prix: Inestimable</p>
            <button class="btn add-cart" data-id="${index}" type="button">Ajouter au panier</button>
        </article>
    `).join("");

    function redrawCart() {
        const entries = [...cart.entries()];
        const quantity = entries.reduce((acc, [, item]) => acc + item.qty, 0);
        cartCount.textContent = String(quantity);

        if (entries.length === 0) {
            cartItems.innerHTML = `<p class="muted">Votre panier est vide. Ajoutez quelques chandails hommage.</p>`;
            cartSummary.textContent = "0 article • Total: Inestimable";
            return;
        }

        cartItems.innerHTML = entries.map(([, item]) => `
            <div class="cart-line">
                <div>
                    <h4>${item.title}</h4>
                    <p class="muted">${item.qty} × Inestimable</p>
                </div>
                <button class="btn-icon remove-item" data-id="${item.id}" aria-label="Retirer un article">−</button>
            </div>
        `).join("");

        cartSummary.textContent = `${quantity} article${quantity > 1 ? "s" : ""} • Total: Inestimable`;
    }

    grid.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }
        if (!target.classList.contains("add-cart")) {
            return;
        }
        const id = Number(target.dataset.id);
        const person = storePeople[id];
        if (!person) {
            return;
        }
        const key = `shirt-${id}`;
        const existing = cart.get(key);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.set(key, { id, qty: 1, title: `Chandail \"${person.name}\"` });
        }
        redrawCart();
    });

    cartItems.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }
        if (!target.classList.contains("remove-item")) {
            return;
        }
        const id = Number(target.dataset.id);
        const key = `shirt-${id}`;
        const existing = cart.get(key);
        if (!existing) {
            return;
        }
        existing.qty -= 1;
        if (existing.qty <= 0) {
            cart.delete(key);
        }
        redrawCart();
    });

    function openCart() {
        cartDrawer.classList.add("open");
        cartDrawer.setAttribute("aria-hidden", "false");
        overlay.hidden = false;
    }

    function closeCartDrawer() {
        cartDrawer.classList.remove("open");
        cartDrawer.setAttribute("aria-hidden", "true");
        overlay.hidden = true;
    }

    cartButton.addEventListener("click", openCart);
    closeCart.addEventListener("click", closeCartDrawer);
    overlay.addEventListener("click", closeCartDrawer);

    checkoutBtn.addEventListener("click", () => {
        const quantity = [...cart.values()].reduce((acc, item) => acc + item.qty, 0);
        if (!quantity) {
            alert("Ajoutez au moins un chandail avant de passer la commande symbolique.");
            return;
        }
        alert("Commande symbolique enregistrée ✅\nTotal: Inestimable");
        cart.clear();
        redrawCart();
        closeCartDrawer();
    });

    redrawCart();
}

setupTheme();
setupActiveNav();
setupMobileHeader();
renderAcknowledgements();
setupStore();
