AOS.init({ duration: 800, once: true });
(function () {
    // Elements
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMaterialsBtn = document.getElementById('mobileMaterialsBtn');
    const materialsOverlay = document.getElementById('materialsOverlay');
    const closeOverlay = document.getElementById('closeOverlay');
    const overlayGrid = document.getElementById('overlayGrid');

    const materialsDesktopBtn = document.getElementById('materialsDesktopBtn');
    const desktopDropdown = document.getElementById('desktopDropdown');
    const desktopGrid = document.getElementById('desktopDropdownGrid');

    const desktopItems = Array.from(document.querySelectorAll('.desktop-item'));
    const materialsCards = document.getElementById('materialsCards');

    // CATEGORY DATA
    const categories = [
        { key: 'steel', icon: '🔩', title: 'Reinforced Steel', desc: 'Steel bars, meshes & commercial steel' },
        { key: 'wood', icon: '🌲', title: 'Woods & Plywood', desc: 'Timber, white wood, meranti & plywood' },
        { key: 'blocks', icon: '🧱', title: 'Blocks', desc: 'Hollow blocks & insulation blocks' },
        { key: 'concrete', icon: '🏗️', title: 'ReadyMix', desc: 'All concrete mixes available' },
        { key: 'mortars', icon: '🧴', title: 'Mortars & Admixtures', desc: 'Mortar mixes, admixtures & tools' },
        { key: 'other', icon: '⚙️', title: 'Hardware & Tools', desc: 'Safety, tools, nails, cables & accessories' }
    ];
    // MATERIALS WITH IMAGES
    const materialsData = {
        // ============================================================
        // 🔩 STEEL CATEGORY
        // ============================================================
        steel: [
            {
                title: 'Reinforced Steel Bars (Rebar)',
                desc: 'High-strength rebars for foundations, slabs and columns.',
                imgs: ['images/rebarsallsizes.jfif'],
                features: [
                    '<b>Available In:</b> Qatar, Bahrain, Saudi Arabia',
                    'High tensile strength for structural works',
                    'Excellent bonding with concrete',
                    'Corrosion-resistant',
                    'Suitable for commercial & residential construction'
                ]
            },

            {
                title: 'BRC Mesh Steel',
                desc: 'Welded reinforcement mesh for slabs and flooring.',
                imgs: ['images/BRCMeshSteel.jfif', 'images/BRCMeshSteel1.jfif', 'images/BRCMeshSteel.jfif', 'images/BRCMeshSteel2.jfif',
                    'images/BRCMeshSteel4.png', 'images/BRCMeshSteel5.png', 'images/BRCMeshSteel6.png', 'images/BRCMeshSteel7.png',
                    'images/BRCMeshSteel8.png', 'images/BRCMeshSteel9.jpg', 'images/BRCMeshSteel10.jpg'
                ],
                features: [
                    '<b>Available Sizes / Types:</b> 4mm, 6mm, 10mm',
                    'High-strength welded steel mesh',
                    'Fast & easy slab reinforcement installation'
                ]
            },

            // Commercial Steel Products — Individual Cards
            {
                title: 'Steel Tubes',
                desc: 'Industrial-grade steel tubes for fabrication.',
                imgs: ['images/SteelTubes.jfif', 'images/SteelTubes1.jfif', 'images/SteelTubes2.jfif', 'images/SteelTubes3.jpg',
                    'images/SteelTubes4.jpg'
                ],
                features: [
                    'Durable & corrosion-resistant',
                    'Used for frames, gates, pipe works'
                ]
            },
            {
                title: 'Steel Sheets',
                desc: 'High-quality steel sheets for fabrication.',
                imgs: ['images/SteelSheets.jfif', 'images/SteelSheets1.jfif', 'images/SteelSheets2.jfif', 'images/SteelSheets3.jpg',
                    'images/SteelSheets4.jpg', 'images/SteelSheets5.jpg', 'images/SteelSheets6.jfif'
                ],
                features: [
                    'Premium finish with high strength',
                    'Used in industrial fabrication & covering'
                ]
            },
            {
                title: 'Pipes (Steel / GI / MS)',
                desc: 'Pipes for plumbing, structure & fabrication.',
                imgs: ['images/Pipes1.jpeg', 'images/Pipes2.jpeg', 'images/Pipes3.jpg', 'images/Pipes4.jfif', 'images/Pipes5.jpg'],
                features: [
                    'Strong load bearing',
                    'Used in scaffolding, construction & utilities'
                ]
            },
            {
                title: 'Aluminium Sheet',
                desc: 'Lightweight, corrosion-proof aluminium sheets.',
                imgs: ['images/AluminiumSheet.jfif', 'images/AluminiumSheet1.jpg', 'images/AluminiumSheet2.jfif', 'images/AluminiumSheet3.jfif',
                    'images/AluminiumSheet4.jfif', 'images/AluminiumSheet5.jpg'
                ],
                features: [
                    'Lightweight material',
                    'Ideal for cladding & industrial use'
                ]
            },
            {
                title: 'Stainless Steel (SS) Sheet',
                desc: 'Rust-free premium stainless steel sheets.',
                imgs: ['images/StainlessSteel.jfif', 'images/StainlessSteel1.jfif', 'images/StainlessSteel2.jfif', 'images/StainlessSteel3.jpg',
                    'images/StainlessSteel4.jpg', 'images/StainlessSteel5.png'
                ],
                features: [
                    'Polished, anti-rust finish',
                    'Used in kitchens, industries & exterior use'
                ]
            },
            {
                title: 'Mild Steel (MS) Sheet',
                desc: 'Versatile MS sheet for fabrication.',
                imgs: ['images/MildSteel.jfif', 'images/MildSteel1.jfif', 'images/MildSteel2.jpg', 'images/MildSteel3.jfif', 'images/MildSteel4.jfif',
                    'images/MildSteel5.jfif'
                ],
                features: [
                    'Strong & easy to weld',
                    'Used in structure, fabrication & machinery'
                ]
            },
            {
                title: 'Galvanized Iron (GI) Sheet',
                desc: 'Corrosion-protected galvanized steel sheet.',
                imgs: ['images/GalvanizedIron.jpg', 'images/GalvanizedIron1.jfif', 'images/GalvanizedIron2.jfif', 'images/GalvanizedIron3.jfif',
                    'images/GalvanizedIron4.jfif', 'images/GalvanizedIron5.jfif'
                ],
                features: [
                    'Zinc-coated long-life protection',
                    'Ideal for roofing & ducting'
                ]
            }
        ],

        // ============================================================
        // 🪵 WOOD & PLYWOOD CATEGORY
        // ============================================================
        wood: [
            {
                title: 'Austrian White Wood',
                desc: 'High-quality whitewood for construction & carpentry.',
                imgs: ['images/AustrianWhiteWood.jfif', 'images/AustrianWhiteWood1.jfif', 'images/AustrianWhiteWood2.jfif', 'images/AustrianWhiteWood3.jfif',
                    'images/AustrianWhiteWood4.jfif', 'images/AustrianWhiteWood5.jfif'
                ],
                features: [
                    '<b>Available Sizes:</b> 2×3, 3×3, 4×4, 2×10',
                    'Smooth finish and good durability',
                    'Ideal for formwork & framing'
                ]
            },

            {
                title: 'Meranti Timber',
                desc: 'Strong hardwood for furniture & frames.',
                imgs: ['images/MerantiTimber.jfif', 'images/MerantiTimber1.jfif', 'images/MerantiTimber2.jfif', 'images/MerantiTimber3.jpg',
                    'images/MerantiTimber4.jpg', 'images/MerantiTimber5.jfif'
                ],
                features: [
                    '<b>Available Dimensions:</b> 2 × 10 (Length: 10–20 ft)',
                    'Premium hardwood',
                    'Smooth grain & long-lasting'
                ]
            },

            {
                title: 'Ordinary MDF Plywood',
                desc: 'Standard MDF boards for furniture and interior works.',
                imgs: ['images/OrdinaryMDFPlywood.jfif', 'images/OrdinaryMDFPlywood1.jfif', 'images/OrdinaryMDFPlywood2.jfif', 'images/OrdinaryMDFPlywood3.jfif',
                    'images/OrdinaryMDFPlywood4.jfif', 'images/OrdinaryMDFPlywood5.jfif'
                ],
                features: [
                    '<b>Thickness Options:</b> 6mm, 8mm, 12mm, 18mm',
                    'Smooth surface for painting',
                    'Best for cabinets & partitions'
                ]
            },

            {
                title: 'Marine Plywood',
                desc: 'High-grade waterproof plywood.',
                imgs: ['images/MarinePlywood.jpeg', 'images/MarinePlywood1.jpeg', 'images/MarinePlywood2.jpeg', 'images/MarinePlywood3.jpeg', 'images/MarinePlywood4.jpeg',
                    'images/MarinePlywood5.jpeg'
                ],
                features: [
                    '<b>Available Types:</b> 18mm, 12mm, Hardwood, Combi-Core, Finger Joint',
                    'Water-resistant & strong',
                    'Suitable for exterior and wet-area work'
                ]
            },

            {
                title: 'Ordinary China Plywood',
                desc: 'Economical plywood for shuttering & temporary works.',
                imgs: ['images/OrdinaryChinaPlywood.jfif', 'images/OrdinaryChinaPlywood1.jfif', 'images/OrdinaryChinaPlywood2.jfif',
                    'images/OrdinaryChinaPlywood3.jfif', 'images/OrdinaryChinaPlywood4.jfif', 'images/OrdinaryChinaPlywood5.jfif'
                ],
                features: [
                    '<b>Thickness Options:</b> 12mm, 18mm',
                    'Affordable & easy to work with'
                ]
            }
        ],

        // ============================================================
        // 🧱 BLOCKS CATEGORY
        // ============================================================
        blocks: [
            {
                title: 'Hollow Blocks',
                desc: 'Lightweight construction blocks.',
                imgs: ['images/hollowblock1.jfif', 'images/hollowblock2.jfif', 'images/hollowblock3.jfif', 'images/hollowblock4.jfif',
                    'images/hollowblock5.jfif'
                ],
                features: [
                    'Ideal for building walls and partitions',
                    'Easy and fast installation'
                ]
            },
            {
                title: 'Insulation Blocks',
                desc: 'High-thermal insulation blocks.',
                imgs: ['images/InsulationBlocks.jfif', 'images/InsulationBlocks1.jfif', 'images/InsulationBlocks2.jfif', 'images/InsulationBlocks3.jfif',
                    'images/InsulationBlocks4.jfif'
                ],
                features: [
                    '<b>Available Sizes:</b> 4", 6", 8", 12"',
                    'Improves cooling efficiency',
                    'Lightweight & durable'
                ]
            }
        ],

        // ============================================================
        // 🏗️ READY MIX CATEGORY
        // ============================================================
        concrete: [
            {
                title: 'ReadyMix Concrete',
                desc: 'Factory-controlled concrete delivered on-site.',
                imgs: ['images/ReadyMixConcrete.jpg'],
                features: [
                    'All grades available',
                    'Fast supply & high consistency'
                ]
            }
        ],

        // ============================================================
        // 🧴 MORTARS CATEGORY
        // ============================================================
        mortars: [
            {
                title: 'Mortar Mixes',
                desc: 'Pre-mixed masonry and plastering mortars.',
                imgs: ['images/mortar.jpg'],
                features: [
                    'Ready-to-use mix',
                    'Consistent bonding strength'
                ]
            },
            {
                title: 'Admixtures',
                desc: 'Performance-enhancing concrete chemicals.',
                imgs: ['images/Admixtures.png'],
                features: [
                    'Improves strength & durability',
                    'Controls setting time'
                ]
            },
            {
                title: 'Mortar Pan',
                desc: 'Heavy-duty pan for mixing mortar.',
                imgs: ['images/mortarpan.jpg'],
                features: [
                    'Corrosion resistant',
                    'Large capacity'
                ]
            },
            {
                title: 'Trowels',
                desc: 'Hand tools for smooth finishing.',
                imgs: ['images/Trowels.jpg'],
                features: [
                    'Ergonomic handle',
                    'Precision finishing'
                ]
            }
        ],

        // ============================================================
        // ⚙️ HARDWARE & SAFETY SUPPLIES (INDIVIDUAL CARDS)
        // ============================================================
        other: [
            {
                title: 'Plothene Sheet',
                desc: 'Heavy-duty protection sheet for construction.',
                imgs: ['images/PlotheneSheet.jfif', 'images/PlotheneSheet1.jfif', 'images/PlotheneSheet2.jfif', 'images/PlotheneSheet3.jfif'
                ],
                features: [
                    '<b>Available Microns:</b> 250 mic, 1000 mic',
                    'Used for floor protection & covering'
                ]
            },
            {
                title: 'Nails (General Use)',
                desc: 'Multi-purpose construction nails.',
                imgs: ['images/Nails.jfif', 'images/Nails1.jfif', 'images/Nails2.jfif', 'images/Nails3.jfif'],
                features: [
                    'Strong & durable',
                    'Available in all sizes'
                ]
            },
            {
                title: 'Wood Nails',
                desc: 'Special nails for carpentry works.',
                imgs: ['images/WoodNails.jfif', 'images/WoodNails1.jfif'],
                features: [
                    'Excellent grip on wood',
                    'Rust-resistant options available'
                ]
            },
            {
                title: 'Steel Nails',
                desc: 'Hard steel nails for construction.',
                imgs: ['images/SteelNails.jfif', 'images/SteelNails1.jfif'],
                features: [
                    'High strength steel',
                    'Suitable for concrete and heavy fixing'
                ]
            },
            {
                title: 'Gloves',
                desc: 'Industrial safety hand gloves.',
                imgs: ['images/Gloves.jfif', 'images/Gloves1.jfif'],
                features: [
                    'Comfortable & durable',
                    'For general site work'
                ]
            },
            {
                title: 'Safety Shoes',
                desc: 'Steel-toe protection shoes.',
                imgs: ['images/SafetyShoes.jfif', 'images/SafetyShoes1.jfif'],
                features: [
                    'Slip-resistant',
                    'Toe protection'
                ]
            },
            {
                title: 'Binding Wire',
                desc: 'High tensile binding wire for rebar work.',
                imgs: ['images/BindingWire.jfif', 'images/BindingWire1.jfif'],
                features: [
                    'Strong holding strength',
                    'Used in steel reinforcement'
                ]
            },
            {
                title: 'Electrical Cables & Wires',
                desc: 'High-quality wiring for installations.',
                imgs: ['images/ElectricalCablesWires.jfif', 'images/ElectricalCablesWires1.jfif'],
                features: [
                    'Available in all gauges',
                    'High insulation quality'
                ]
            },
            {
                title: 'Safety Helmets',
                desc: 'Essential head protection on site.',
                imgs: ['images/SafetyHelmets.jfif', 'images/SafetyHelmets1.jfif', 'images/SafetyHelmets2.jfif'],
                features: [
                    'Shock-resistant',
                    'Comfort strap'
                ]
            },
            {
                title: 'Safety Jackets',
                desc: 'High-visibility reflective jackets.',
                imgs: ['images/SafetyJackets.jfif', 'images/SafetyJackets1.jfif', 'images/SafetyJackets2.jfif'],
                features: [
                    'Reflective strips',
                    'Breathable fabric'
                ]
            },
            {
                title: 'Traffic Cones',
                desc: 'Durable cones for site safety.',
                imgs: ['images/TrafficCones.jfif', 'images/TrafficCones1.jfif'],
                features: [
                    'Bright reflective design',
                    'Weather resistant'
                ]
            }
        ]
    };

    // RENDER SECTIONS
    const sectionsRoot = document.getElementById('sectionsRoot');

    function createSection(category) {
        const sec = document.createElement('section');
        sec.className = 'section';
        sec.dataset.key = category.key;

        sec.innerHTML = `
        <div class="section-head">
            <div class="cat-icon">${category.icon}</div>
            <div>
                <h2>${category.title}</h2>
                <p>${category.desc}</p>
            </div>
        </div>
        <div class="grid cards-container"></div>
    `;

        const grid = sec.querySelector('.grid');
        const items = materialsData[category.key];

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.onclick = () => openModal(item); // optional modal

            card.innerHTML = `
            <img src="${item.imgs[0]}" alt="${item.title}">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            <ul class="card-features">
                ${item.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        `;

            grid.appendChild(card);
        });

        return sec;
    }

    function renderAll() {
        sectionsRoot.innerHTML = "";
        categories.forEach(cat => sectionsRoot.appendChild(createSection(cat)));
    }

    renderAll();
    let currentImages = [];
    let currentIndex = 0;

    // Open modal
    function openModal(item) {
        document.getElementById("modalTitle").textContent = item.title;
        document.getElementById("modalDesc").textContent = item.desc;

        currentImages = item.imgs;
        currentIndex = 0;
        updateModalImage();

        document.getElementById("materialModal").style.display = "flex";
    }

    // Update displayed image
    function updateModalImage() {
        document.getElementById("modalImage").src = currentImages[currentIndex];
    }

    // Next / Prev buttons
    function prevImage() {
        if (!currentImages.length) return;
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateModalImage();
    }

    function nextImage() {
        if (!currentImages.length) return;
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateModalImage();
    }

    // Close modal
    function closeModal() {
        document.getElementById("materialModal").style.display = "none";
    }

    // Attach button events AFTER DOM is loaded
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("prevBtn").addEventListener("click", prevImage);
        document.getElementById("nextBtn").addEventListener("click", nextImage);
        document.getElementById("modalClose").addEventListener("click", closeModal);

        window.addEventListener("click", e => {
            if (e.target.id === "materialModal") closeModal();
        });
    });

    // -----------------------------
    // MENU → SCROLL TO SECTION
    // -----------------------------
    document.querySelectorAll('.desktop-item').forEach(item => {
        item.addEventListener('click', () => {
            const catKey = item.dataset.cat;
            const targetSection = document.querySelector(`section[data-key="${catKey}"]`);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

                targetSection.classList.add("highlight-section");
                setTimeout(() => targetSection.classList.remove("highlight-section"), 1500);
            }

            document.getElementById("desktopDropdown").setAttribute("aria-hidden", "true");
        });
    });

    /* Helpers */
    function clearChildren(el) { while (el.firstChild) el.removeChild(el.firstChild); }

    /* Desktop dropdown toggle */
    materialsDesktopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const shown = desktopDropdown.style.display === 'block';
        if (shown) {
            desktopDropdown.style.display = 'none';
            materialsDesktopBtn.setAttribute('aria-expanded', 'false');
            desktopDropdown.setAttribute('aria-hidden', 'true');
        } else {
            desktopDropdown.style.display = 'block';
            materialsDesktopBtn.setAttribute('aria-expanded', 'true');
            desktopDropdown.setAttribute('aria-hidden', 'false');
            adjustDesktopDropdownPosition();
            // focus first item for accessibility
            const first = desktopGrid.querySelector('.desktop-item');
            if (first) first.focus();
        }
    });

    // close dropdown when clicking outside
    document.addEventListener('click', () => {
        desktopDropdown.style.display = 'none';
        materialsDesktopBtn.setAttribute('aria-expanded', 'false');
        desktopDropdown.setAttribute('aria-hidden', 'true');
    });
    desktopDropdown.addEventListener('click', e => e.stopPropagation());
    materialsDesktopBtn.addEventListener('click', e => e.stopPropagation());

    function adjustDesktopDropdownPosition() {
        // keep dropdown inside viewport — simple approach
        desktopDropdown.style.left = 'auto';
        desktopDropdown.style.right = '0';
        const rect = desktopDropdown.getBoundingClientRect();
        const overflow = rect.right - window.innerWidth;
        if (overflow > 0) {
            desktopDropdown.style.left = `-${overflow + 8}px`;
            desktopDropdown.style.right = 'auto';
        } else {
            desktopDropdown.style.left = '0';
            desktopDropdown.style.right = 'auto';
        }
    }

    /* Desktop item click -> populate page grid */
    desktopItems.forEach(item => {
        item.addEventListener('click', () => {
            desktopDropdown.style.display = 'none';
            materialsDesktopBtn.setAttribute('aria-expanded', 'false');
            desktopDropdown.setAttribute('aria-hidden', 'true');
        });

        // keyboard accessible activation
        item.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter' || ev.key === ' ') {
                ev.preventDefault(); item.click();
            }
        });
    });

    /* Mobile: Hamburger / Slide menu */
    const openMobileMenu = document.getElementById('hamburger');
    openMobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('open');
    });
    // close mobile menu on outside click
    document.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
    mobileMenu.addEventListener('click', e => e.stopPropagation());

    /* Mobile overlay (build overlay cards) */
    function buildOverlay() {
        clearChildren(overlayGrid);
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'overlay-card';
            btn.innerHTML = `<div class="icon">${cat.icon}</div><h4 style="margin:6px 0">${cat.title}</h4><p>${cat.desc}</p>`;
            btn.dataset.cat = cat.key;
            btn.addEventListener('click', (ev) => {
                ev.stopPropagation();
                closeOverlayFn();
                mobileMenu.classList.remove('open');
            });
            btn.setAttribute('tabindex', '0');
            overlayGrid.appendChild(btn);
        });
    }
    buildOverlay();

    // mobile Materials button -> open overlay
    mobileMaterialsBtn.addEventListener('click', (ev) => {
        ev.preventDefault(); ev.stopPropagation();
        openOverlayFn();
        mobileMenu.classList.remove('open');
    });

    function openOverlayFn() {
        materialsOverlay.classList.add('open');
        materialsOverlay.setAttribute('aria-hidden', 'false');
    }
    function closeOverlayFn() {
        materialsOverlay.classList.remove('open');
        materialsOverlay.setAttribute('aria-hidden', 'true');
    }
    closeOverlay.addEventListener('click', closeOverlayFn);

    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') {
            closeOverlayFn();
            desktopDropdown.style.display = 'none';
        }
    });
    // clicking outside overlay should close it
    materialsOverlay.addEventListener('click', (e) => {
        if (e.target === materialsOverlay) closeOverlayFn();
    });

    /* Responsive adjustments */
    window.addEventListener('resize', () => {
        desktopDropdown.style.display = 'none';
        materialsDesktopBtn.setAttribute('aria-expanded', 'false');
        desktopDropdown.setAttribute('aria-hidden', 'true');
        mobileMenu.classList.remove('open');
        closeOverlayFn();
    });

    // initial hidden states
    desktopDropdown.style.display = 'none';
    desktopDropdown.setAttribute('aria-hidden', 'true');
    materialsOverlay.classList.remove('open');
    materialsOverlay.setAttribute('aria-hidden', 'true');

    // keyboard support for desktop grid: arrow up/down for scrolling
    desktopGrid.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') { desktopGrid.scrollBy({ top: 120, behavior: 'smooth' }); e.preventDefault(); }
        if (e.key === 'ArrowUp') { desktopGrid.scrollBy({ top: -120, behavior: 'smooth' }); e.preventDefault(); }
    });

    document.getElementById('requestQuoteMPBtn').addEventListener('click', e => {
        e.preventDefault();
        const quoteModal = document.getElementById('quoteModal');
        quoteModal.style.display = 'flex';
        quoteModal.setAttribute('aria-hidden', 'false');
        // focus first input
        setTimeout(() => {
            const firstInput = quoteModal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 80);
    });

    /* Quote modal logic (preserved) */
    const quoteModal = document.getElementById('quoteModal');
    const openQuoteBtn = document.getElementById('requestQuoteBtn');
    const closeQuoteBtn = document.getElementById('closeQuoteModal');
    const quoteFormModal = document.getElementById('quoteFormModal');
    const formMessage = quoteFormModal.querySelector('.form-message');

    openQuoteBtn.addEventListener('click', e => {
        e.preventDefault();
        quoteModal.style.display = 'flex';
        quoteModal.setAttribute('aria-hidden', 'false');
        // focus on name input
        setTimeout(() => {
            const firstInput = quoteFormModal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 80);
    });

    closeQuoteBtn.addEventListener('click', () => {
        quoteModal.style.display = 'none';
        quoteModal.setAttribute('aria-hidden', 'true');
    });
    quoteModal.addEventListener('click', e => {
        if (e.target === quoteModal) {
            quoteModal.style.display = 'none';
            quoteModal.setAttribute('aria-hidden', 'true');
        }
    });

    quoteFormModal.addEventListener('submit', e => {
        e.preventDefault();
        // Example UI response only — replace endpoint as needed
        const formData = new FormData(quoteFormModal);
        // Mimic network action
        formMessage.style.display = 'block';
        formMessage.textContent = 'Sending...';
        setTimeout(() => {
            formMessage.textContent = 'Quote request sent successfully!';
            quoteFormModal.reset();
        }, 700);
    });

    /* small enhancement: build desktop items dynamically if you want */
    // (kept the static markup for keyboard accessibility)
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('sliderDots');
    let index = 0;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('button');

    function goToSlide(i) {
        slides[index].classList.remove('active');
        dots[index].classList.remove('active');
        index = i;
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function autoSlide() {
        let next = index + 1 >= slides.length ? 0 : index + 1;
        goToSlide(next);
    }

    setInterval(autoSlide, 4800);

    // Catalog Modal Logic
    const catalogBtn = document.getElementById("catalogBtn");
    const mobileCatalogBtn = document.getElementById("mobileCatalogBtn");
    const catalogModal = document.getElementById("catalogModal");
    const catalogClose = document.getElementById("catalogClose");

    // Open modal
    function openCatalog() {
        catalogModal.style.display = "flex";
    }

    // Close modal
    function closeCatalog() {
        catalogModal.style.display = "none";
    }

    // Desktop click
    if (catalogBtn) catalogBtn.addEventListener("click", openCatalog);

    // Mobile click
    if (mobileCatalogBtn) mobileCatalogBtn.addEventListener("click", openCatalog);

    // Close button
    catalogClose.addEventListener("click", closeCatalog);

    // Close if clicking outside frame
    catalogModal.addEventListener("click", function (e) {
        if (e.target === catalogModal) closeCatalog();
    });

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("close-modal") || e.target.classList.contains("modal")) {
            closeCatalogModal();
        }
    });

    function closeCatalogModal() {
        document.getElementById("catalogModal").style.display = "none";
    }

})();

document.addEventListener("DOMContentLoaded", () => {
    const themeLink = document.getElementById("themeStylesheet");
    const themeToggle = document.getElementById("themeToggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("site-theme");

    if (savedTheme === "light") {
        themeLink.href = "lighttheme.css";
        themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        themeLink.href = "styles.css";
        themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }

    // Toggle theme on click
    themeToggle.addEventListener("click", () => {
        if (themeLink.href.includes("styles.css")) {
            // Switch to light theme
            themeLink.href = "lighttheme.css";
            localStorage.setItem("site-theme", "light");
            themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        } else {
            // Switch to dark theme
            themeLink.href = "styles.css";
            localStorage.setItem("site-theme", "dark");
            themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        }
    });
});