document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    const contentBody = document.getElementById('content-body');
    const patchTitle = document.getElementById('patch-title');
    const patchHero = document.getElementById('patch-hero');
    const versionBadge = document.getElementById('version-badge');
    const patchDate = document.getElementById('patch-date');
    const versionListEl = document.getElementById('version-list');
    
    // State
    let currentLang = localStorage.getItem('quinfall_lang') || 'tr';
    let currentVersionId = patchList[0].id; // default to latest
    
    // Initialize
    renderSidebar();
    setLanguage(currentLang);

    // Event Listeners for language buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            if (selectedLang !== currentLang) {
                setLanguage(selectedLang);
            }
        });
    });

    function renderSidebar() {
        versionListEl.innerHTML = '';
        patchList.forEach(patch => {
            const li = document.createElement('li');
            li.className = 'version-btn';
            if (patch.id === currentVersionId) li.classList.add('active');
            
            li.innerHTML = `
                <span>Patch ${patch.versionBadge}</span>
                <span class="version-tag">${patch.id}</span>
            `;
            
            li.addEventListener('click', () => {
                if (currentVersionId !== patch.id) {
                    currentVersionId = patch.id;
                    updateSidebarState();
                    transitionContent();
                }
            });
            versionListEl.appendChild(li);
        });
    }

    function updateSidebarState() {
        const items = versionListEl.querySelectorAll('.version-btn');
        items.forEach((item, index) => {
            if (patchList[index].id === currentVersionId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('quinfall_lang', lang);

        // Update active button state
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        transitionContent();
    }

    function transitionContent() {
        contentBody.style.opacity = '0';
        patchHero.style.opacity = '0';
        
        setTimeout(() => {
            renderContent();
            contentBody.style.opacity = '1';
            patchHero.style.opacity = '1';
        }, 300);
    }

    function renderContent() {
        const patchDef = patchList.find(p => p.id === currentVersionId);
        if (!patchDef) return;

        const data = patchDef.data[currentLang];
        if (!data) return;

        patchTitle.textContent = data.title;
        versionBadge.textContent = patchDef.versionBadge;
        patchDate.textContent = patchDef.date;
        
        // Translate sidebar title dynamically
        document.getElementById('sidebar-title').textContent = currentLang === 'tr' ? 'Yama Geçmişi' : 'Update History';
        
        let html = '';
        
        // Intro
        if (data.intro) {
            html += `<div class="intro-text">${data.intro}</div>`;
        }

        // Main Sections
        if (data.sections) {
            data.sections.forEach(section => {
                html += `<h2 class="section-title"><i class="${section.icon}"></i> ${section.sectionTitle}</h2>`;
                
                // Section Intro
                if (section.intro) {
                    html += `<div class="intro-text" style="text-align: left; margin-bottom: 2rem;">${section.intro}</div>`;
                }

                // Render Class Blocks or Content Blocks
                if (section.blocks) {
                    section.blocks.forEach(block => {
                        html += `<div class="class-block">
                            <div class="class-header">
                                <div class="class-icon"><i class="${block.icon || 'fas fa-shield-alt'}"></i></div>
                                <h3>${block.title}</h3>
                            </div>`;
                        
                        if (block.intro) {
                            html += `<div class="class-intro"><p>${block.intro}</p></div>`;
                        }

                        if (block.changes && block.changes.length > 0) {
                            html += `<ul class="changes-list">`;
                            block.changes.forEach(change => {
                                html += `<li><span class="skill-name">${change.name || ''}</span> ${change.detail}</li>`;
                            });
                            html += `</ul>`;
                        }

                        if (block.devNote) {
                            html += `
                            <div class="dev-note">
                                <i class="fas fa-info-circle"></i>
                                <div>
                                    <span class="dev-note-title">${data.ui.devNoteTitle}</span>
                                    <p>${block.devNote}</p>
                                </div>
                            </div>
                            `;
                        }
                        
                        html += `</div>`;
                    });
                }
                
                // Generic List Block
                if (section.listInfo) {
                    html += `<ul class="system-list">`;
                    section.listInfo.forEach(item => {
                        html += `<li><strong>${item.title}</strong><span>${item.desc}</span></li>`;
                    });
                    html += `</ul>`;
                }

                if (section.devNote) {
                    html += `
                    <div class="dev-note">
                        <i class="fas fa-comment-dots"></i>
                        <div>
                            <span class="dev-note-title">${data.ui.devCommentaryTitle || 'Note'}</span>
                            <p>${section.devNote}</p>
                        </div>
                    </div>
                    `;
                }
            });
        }

        contentBody.innerHTML = html;
    }
});
