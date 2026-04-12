document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    const contentBody = document.getElementById('content-body');
    const patchTitle = document.getElementById('patch-title');
    const patchHero = document.getElementById('patch-hero');
    const navSubtitle = document.getElementById('navSubtitle');
    
    // Fallback to TR if not saved
    let currentLang = localStorage.getItem('quinfall_lang') || 'tr';
    
    // Initialize
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

        // Add a fade out transition
        contentBody.style.opacity = '0';
        patchHero.style.opacity = '0';
        
        setTimeout(() => {
            renderContent(lang);
            // Fade back in
            contentBody.style.opacity = '1';
            patchHero.style.opacity = '1';
        }, 300);
    }

    function renderContent(lang) {
        const data = patchData[lang];
        if (!data) return;

        // Set static UI elements (Optional: if we want to change logo subtitle)
        // Set Header details
        patchTitle.textContent = data.title;
        
        // Assemble HTML from JS data instead of huge string, for better modularity
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
