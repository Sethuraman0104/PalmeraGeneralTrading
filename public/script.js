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
                { key: 'steel', icon: '🔩', title: 'Steel', desc: 'Rebars, sheets & sections' },
                { key: 'wood', icon: '🌲', title: 'Wood', desc: 'Timber & plywood' },
                { key: 'blocks', icon: '🧱', title: 'Blocks', desc: 'Concrete blocks & bricks' },
                { key: 'concrete', icon: '🏗', title: 'Concrete', desc: 'Ready-mix & aggregates' },
                { key: 'mortars', icon: '🧴', title: 'Mortars', desc: 'Mortars & admixtures' },
                { key: 'other', icon: '⚙️', title: 'Other', desc: 'Tools, paints & fixings' }
            ];

            // MATERIALS WITH IMAGES
            const materialsData = {
                steel: [
                    {
                        title: 'Rebars (TMT)', desc: 'High strength rebar for structural work.', imgs: ['images/rebars.jfif', 'images/steels.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'I-beams', desc: 'Structural beams and channels.', imgs: ['images/ibeams.png'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Sheets & Plates', desc: 'Galvanized and cold-rolled sheets.', imgs: ['images/sheets.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    }
                ],
                wood: [
                    {
                        title: 'Timber',
                        desc: 'Hardwood and softwood timber.',
                        imgs: ['images/woods.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Plywood',
                        desc: 'Formwork & finishing plywood.',
                        imgs: ['images/plywood.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Wood Pallet',
                        desc: 'Standard wood pallet. Can be customized with any measurements and quantities.',
                        imgs: ['images/wood1.jpg',
                            'images/wood2.jpg',
                            'images/wood3.jpg',
                            'images/wood4.jpg',
                            'images/wood5.jpg',
                            'images/wood6.jpg',
                            'images/wood7.jpg',
                            'images/wood8.jpg',
                            'images/wood9.jpg',
                            'images/wood10.jpg',
                            'images/wood11.jpg',
                            'images/wood12.jpg',
                            'images/wood13.jpg',
                            'images/wood14.jpg',
                            'images/wood15.jpg',
                            'images/wood16.jpg',
                            'images/wood17.jpg',
                            'images/wood18.jpg',
                            'images/wood19.jpg',
                            'images/wood20.jpg',
                            'images/wood21.jpg',
                            'images/wood22.jpg',
                            'images/wood23.jpg',
                            'images/wood24.jpg',
                            'images/wood25.jpg',
                            'images/wood26.jpg',
                            'images/wood27.jpg',
                            'images/wood28.jpg',
                            'images/wood29.jpg'], features: [
                                'Thermo-Mechanically Treated for strength & flexibility',
                                'Ideal for beams, columns, slabs, foundations',
                                'Corrosion-resistant and durable',
                                'Meets international quality standards',
                                'Ensures strong bonding with concrete',
                                'Suitable for residential, commercial, industrial projects'
                            ]
                    }
                ]
                ,
                blocks: [
                    {
                        title: 'Hollow Blocks', desc: 'Lightweight & insulated.', imgs: ['images/blocks.jpg', 'images/hollowblock1.jfif'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Solid Blocks', desc: 'High strength solid blocks.', imgs: ['images/solidblock.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Concrete Blocks Set',
                        desc: 'Includes hollow and solid blocks for construction.',
                        imgs: [
                            'images/ConcreteBlocksSet.jpg'
                        ], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    }
                ],
                concrete: [
                    {
                        title: 'Ready-Mix', desc: 'Delivered on-site.', imgs: ['images/ReadyMixConcrete.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Sand & Aggregates', desc: 'Fine/coarse sand & gravel.', imgs: ['images/sandaggergates.jpeg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    }
                ],
                mortars: [
                    {
                        title: 'Mortar Mixes', desc: 'Pre-mixed masonry mortar.', imgs: ['images/mortar.png'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Admixtures', desc: 'Performance-enhancing chemicals.', imgs: ['images/Admixtures.png'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Mortar Set',
                        desc: 'Includes various mortar mixes and admixtures for construction.',
                        imgs: ['images/MortarSet.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Mortar Pan',
                        desc: 'Used for mixing mortar on site.',
                        imgs: ['images/mortarpan.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Trowels',
                        desc: 'Hand tools for spreading and finishing mortar.',
                        imgs: ['images/Trowels.jpg', 'images/Trowels1.jfif', 'images/Trowels2.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    }
                ],
                other: [
                    {
                        title: 'Paints & Coatings', desc: 'Decorative / protective paints.', imgs: ['images/paint.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
                        ]
                    },
                    {
                        title: 'Tools & Hardware', desc: 'Tools, fasteners, safety items.', imgs: ['images/tools.jpg'], features: [
                            'Thermo-Mechanically Treated for strength & flexibility',
                            'Ideal for beams, columns, slabs, foundations',
                            'Corrosion-resistant and durable',
                            'Meets international quality standards',
                            'Ensures strong bonding with concrete',
                            'Suitable for residential, commercial, industrial projects'
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
                <h3>${category.title}</h3>
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
        })();