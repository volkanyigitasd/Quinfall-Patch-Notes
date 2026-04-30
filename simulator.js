// Database of mockup items for the simulator
const itemDB = {
    helmet: [
        { id: 'h1', setId: 'dragon', nameTr: 'Kadim Ejder Kaskı', nameEn: 'Ancient Dragon Helmet', baseDP: 315, baseHP: 1200, baseAP: 0, rarity: 'legendary' },
        { id: 'h2', setId: 'shadow', nameTr: 'Gölge Muhafız Kukuletası', nameEn: 'Shadow Guard Hood', baseDP: 290, baseHP: 950, baseAP: 15, rarity: 'rare' }
    ],
    chest: [
        { id: 'c1', setId: 'dragon', nameTr: 'Kadim Ejder Göğüslüğü', nameEn: 'Ancient Dragon Chestplate', baseDP: 321, baseHP: 1800, baseAP: 0, rarity: 'legendary' },
        { id: 'c2', setId: 'shadow', nameTr: 'Gölge Muhafız Cübbesi', nameEn: 'Shadow Guard Robe', baseDP: 295, baseHP: 1400, baseAP: 25, rarity: 'rare' }
    ],
    gloves: [
        { id: 'g1', setId: 'dragon', nameTr: 'Kadim Ejder Eldiveni', nameEn: 'Ancient Dragon Gloves', baseDP: 305, baseHP: 800, baseAP: 10, rarity: 'legendary' },
        { id: 'g2', setId: 'shadow', nameTr: 'Gölge Muhafız Eldiveni', nameEn: 'Shadow Guard Gloves', baseDP: 285, baseHP: 600, baseAP: 30, rarity: 'rare' }
    ],
    legs: [
        { id: 'l1', setId: 'dragon', nameTr: 'Kadim Ejder Pantolonu', nameEn: 'Ancient Dragon Legs', baseDP: 318, baseHP: 1500, baseAP: 0, rarity: 'legendary' },
        { id: 'l2', setId: 'shadow', nameTr: 'Gölge Muhafız Pantolonu', nameEn: 'Shadow Guard Pants', baseDP: 292, baseHP: 1100, baseAP: 20, rarity: 'rare' }
    ],
    boots: [
        { id: 'b1', setId: 'dragon', nameTr: 'Kadim Ejder Çizmesi', nameEn: 'Ancient Dragon Boots', baseDP: 300, baseHP: 900, baseAP: 0, rarity: 'legendary' },
        { id: 'b2', setId: 'shadow', nameTr: 'Gölge Muhafız Çizmesi', nameEn: 'Shadow Guard Boots', baseDP: 288, baseHP: 700, baseAP: 15, rarity: 'rare' }
    ],
    weapon1: [
        { id: 'w1_1', setId: 'doomsday', nameTr: 'Mahşer Kılıcı', nameEn: 'Doomsday Sword', baseDP: 0, baseHP: 0, baseAP: 321, rarity: 'legendary' },
        { id: 'w1_2', setId: 'shadow', nameTr: 'Kanlı Hançer', nameEn: 'Bloody Dagger', baseDP: 0, baseHP: 0, baseAP: 295, rarity: 'rare' },
        { id: 'w1_3', setId: 'doomsday', nameTr: 'Yıldız Düşüren Yay', nameEn: 'Starfall Bow', baseDP: 0, baseHP: 0, baseAP: 315, rarity: 'legendary' },
        { id: 'w1_4', setId: 'tempest', nameTr: 'Buzul Asası', nameEn: 'Glacial Staff', baseDP: 0, baseHP: 0, baseAP: 288, rarity: 'rare' }
    ],
    weapon2: [
        { id: 'w2_1', setId: 'doomsday', nameTr: 'Mahşer Kalkanı', nameEn: 'Doomsday Shield', baseDP: 320, baseHP: 2000, baseAP: 15, rarity: 'legendary' },
        { id: 'w2_2', setId: 'shadow', nameTr: 'Karanlık Arbalet', nameEn: 'Dark Crossbow', baseDP: 0, baseHP: 0, baseAP: 290, rarity: 'rare' },
        { id: 'w2_3', setId: 'tempest', nameTr: 'Ruh Kristali', nameEn: 'Soul Crystal', baseDP: 20, baseHP: 500, baseAP: 310, rarity: 'legendary' }
    ],
    necklace: [
        { id: 'n1', setId: 'emperor', nameTr: 'İmparator Kolyesi', nameEn: 'Emperor Necklace', baseDP: 50, baseHP: 800, baseAP: 318, rarity: 'legendary' },
        { id: 'n2', setId: 'oracle', nameTr: 'Kahin Kolyesi', nameEn: 'Oracle Necklace', baseDP: 30, baseHP: 600, baseAP: 285, rarity: 'rare' }
    ],
    ring1: [
        { id: 'r1_1', setId: 'emperor', nameTr: 'İmparator Yüzüğü', nameEn: 'Emperor Ring', baseDP: 20, baseHP: 400, baseAP: 310, rarity: 'legendary' },
        { id: 'r1_2', setId: 'oracle', nameTr: 'Kahin Yüzüğü', nameEn: 'Oracle Ring', baseDP: 10, baseHP: 300, baseAP: 290, rarity: 'rare' }
    ],
    earring1: [
        { id: 'e1_1', setId: 'emperor', nameTr: 'İmparator Küpesi', nameEn: 'Emperor Earring', baseDP: 30, baseHP: 500, baseAP: 305, rarity: 'legendary' },
        { id: 'e1_2', setId: 'oracle', nameTr: 'Kahin Küpesi', nameEn: 'Oracle Earring', baseDP: 15, baseHP: 350, baseAP: 288, rarity: 'rare' }
    ]
};

// Aliasing rings and earrings so both slots use the same list
itemDB.ring2 = itemDB.ring1;
itemDB.earring2 = itemDB.earring1;

// Set Bonus Definitions
const setBonusDB = {
    'dragon': {
        nameTr: 'Kadim Ejder Seti', nameEn: 'Ancient Dragon Set',
        bonuses: {
            2: { stat: 'hp', value: 500, descTr: '+500 Can (HP)', descEn: '+500 Health (HP)' },
            3: { stat: 'dp', value: 150, descTr: '+150 Savunma (DP)', descEn: '+150 Defense (DP)' },
            4: { stat: 'ap', value: 200, descTr: '+200 Saldırı Gücü (AP)', descEn: '+200 Attack Power (AP)' }
        }
    },
    'shadow': {
        nameTr: 'Gölge Muhafız Seti', nameEn: 'Shadow Guard Set',
        bonuses: {
            2: { stat: 'ap', value: 100, descTr: '+100 Saldırı Gücü (AP)', descEn: '+100 Attack Power (AP)' },
            3: { stat: 'hp', value: 400, descTr: '+400 Can (HP)', descEn: '+400 Health (HP)' },
            4: { stat: 'dp', value: 200, descTr: '+200 Savunma (DP)', descEn: '+200 Defense (DP)' }
        }
    },
    'doomsday': {
        nameTr: 'Mahşer Seti', nameEn: 'Doomsday Set',
        bonuses: {
            2: { stat: 'ap', value: 250, descTr: '+250 Saldırı Gücü (AP)', descEn: '+250 Attack Power (AP)' }
        }
    },
    'tempest': {
        nameTr: 'Tempest Bound Seti', nameEn: 'Tempest Bound Set',
        bonuses: {
            2: { stat: 'dp', value: 150, descTr: '+150 Magic DP', descEn: '+150 Magic DP' }
        }
    },
    'emperor': {
        nameTr: 'İmparator Takı Seti', nameEn: 'Emperor Accessory Set',
        bonuses: {
            2: { stat: 'ap', value: 150, descTr: '+150 Saldırı Gücü (AP)', descEn: '+150 Attack Power (AP)' },
            3: { stat: 'hp', value: 1000, descTr: '+1000 Can (HP)', descEn: '+1000 Health (HP)' },
            4: { stat: 'dp', value: 250, descTr: '+250 Savunma (DP)', descEn: '+250 Defense (DP)' }
        }
    },
    'oracle': {
        nameTr: 'Kahin Takı Seti', nameEn: 'Oracle Accessory Set',
        bonuses: {
            2: { stat: 'dp', value: 100, descTr: '+100 Savunma (DP)', descEn: '+100 Defense (DP)' },
            3: { stat: 'hp', value: 600, descTr: '+600 Can (HP)', descEn: '+600 Health (HP)' },
            4: { stat: 'ap', value: 180, descTr: '+180 Saldırı Gücü (AP)', descEn: '+180 Attack Power (AP)' }
        }
    }
};

// Base Stats (like a naked character)
const BASE_CHARACTER_HP = 3500;
const BASE_CHARACTER_MP = 1200;

// State
let selectedGear = {
    helmet: null, chest: null, gloves: null, legs: null, boots: null,
    weapon1: null, weapon2: null, necklace: null, ring1: null, ring2: null, earring1: null, earring2: null
};

let currentSlot = null;
let currentLevel = 0; // Global enhancement level
let currentLang = localStorage.getItem('quinfall_lang') || 'tr';

document.addEventListener('DOMContentLoaded', () => {
    
    // Listen for language changes from UI
    document.addEventListener('languageChanged', (e) => {
        currentLang = e.detail;
        if(currentSlot) {
            renderItemList(currentSlot); // Re-render middle panel
        }
        updateUI(); // Re-render stats
    });

    const gearSlots = document.querySelectorAll('.gear-slot');
    const levelSlider = document.getElementById('global-level-slider');
    const levelDisplay = document.getElementById('global-level-display');
    const resetBtn = document.getElementById('reset-build');
    const itemListContainer = document.getElementById('item-selector-list');
    const selectionTitle = document.getElementById('selection-title');

    // Slot click handler
    gearSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            // Remove active from all
            gearSlots.forEach(s => s.classList.remove('active-slot'));
            // Add active to this
            slot.classList.add('active-slot');
            
            const slotType = slot.getAttribute('data-slot');
            currentSlot = slotType;
            
            // Update Title
            const titleTr = slotType.charAt(0).toUpperCase() + slotType.slice(1) + " Seçimi";
            const titleEn = slotType.charAt(0).toUpperCase() + slotType.slice(1) + " Selection";
            selectionTitle.textContent = currentLang === 'tr' ? titleTr : titleEn;
            
            renderItemList(slotType);
        });
    });

    // Global Level Slider
    levelSlider.addEventListener('input', (e) => {
        currentLevel = parseInt(e.target.value);
        levelDisplay.textContent = '+' + currentLevel;
        updateUI(); // Recalculate stats with new level
    });

    // Reset build
    resetBtn.addEventListener('click', () => {
        for(let key in selectedGear) {
            selectedGear[key] = null;
        }
        // Deselect slot
        currentSlot = null;
        gearSlots.forEach(s => s.classList.remove('active-slot'));
        
        selectionTitle.textContent = currentLang === 'tr' ? "Bir Slot Seçin" : "Select a Slot";
        itemListContainer.innerHTML = `
            <div class="empty-selection">
                <i class="fas fa-mouse-pointer"></i>
                <p>${currentLang === 'tr' ? "Eşyaları görmek için soldaki grid üzerinden bir slot seçin." : "Select a slot from the grid on the left to see available items."}</p>
            </div>
        `;
        
        updateUI();
    });

    function calculateStats(item, level) {
        // 8% increase per level as base generic scaling
        const multiplier = 1 + (level * 0.08);
        return {
            ap: Math.floor(item.baseAP * multiplier),
            dp: Math.floor(item.baseDP * multiplier),
            hp: Math.floor(item.baseHP * multiplier)
        };
    }

    function renderItemList(slotType) {
        itemListContainer.innerHTML = '';
        const items = itemDB[slotType] || [];
        
        if (items.length === 0) {
            itemListContainer.innerHTML = `
                <div class="empty-selection">
                    <p>${currentLang === 'tr' ? "Bu slot için eşya bulunamadı." : "No items found for this slot."}</p>
                </div>
            `;
            return;
        }

        // Add 'Unequip' Option at the top
        const unequipDiv = document.createElement('div');
        unequipDiv.className = 'item-card';
        unequipDiv.style.justifyContent = 'center';
        unequipDiv.style.color = '#ef4444';
        unequipDiv.innerHTML = `<span style="font-weight:600;"><i class="fas fa-ban"></i> ${currentLang === 'tr' ? 'Slotu Boşalt' : 'Unequip Slot'}</span>`;
        unequipDiv.addEventListener('click', () => {
            selectedGear[slotType] = null;
            updateUI();
            // Re-render list to show removed selection
            renderItemList(slotType);
        });
        itemListContainer.appendChild(unequipDiv);

        items.forEach(item => {
            const isSelected = selectedGear[slotType] && selectedGear[slotType].id === item.id;
            const itemName = currentLang === 'tr' ? item.nameTr : item.nameEn;
            const setName = setBonusDB[item.setId] ? (currentLang === 'tr' ? setBonusDB[item.setId].nameTr : setBonusDB[item.setId].nameEn) : '';
            const rarityClass = item.rarity === 'legendary' ? 'legendary' : 'rare';
            const rarityName = item.rarity === 'legendary' ? 'Legendary' : 'Rare';
            
            // Calculate stats just to display them (base level 0 here in the picker usually, but we can show them with current global level)
            const stats = calculateStats(item, currentLevel);

            const card = document.createElement('div');
            card.className = `item-card ${rarityClass}`;
            if(isSelected) {
                card.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }

            card.innerHTML = `
                <div style="display:flex; flex-direction:column; gap:0.2rem;">
                    <div class="item-card-title ${rarityClass}">${itemName}</div>
                    <div class="item-card-meta">${rarityName} ${setName ? ` • ${setName}` : ''}</div>
                </div>
                <div class="item-card-stats">
                    ${stats.ap > 0 ? `<span style="color: #ef4444;"><i class="fas fa-khanda"></i> ${stats.ap}</span>` : ''}
                    ${stats.dp > 0 ? `<span style="color: #3b82f6;"><i class="fas fa-shield-halved"></i> ${stats.dp}</span>` : ''}
                    ${stats.hp > 0 ? `<span style="color: #22c55e;"><i class="fas fa-heart"></i> ${stats.hp}</span>` : ''}
                </div>
            `;

            card.addEventListener('click', () => {
                selectedGear[slotType] = item;
                updateUI();
                renderItemList(slotType); // Re-render to show selection
            });

            itemListContainer.appendChild(card);
        });
    }

    function updateUI() {
        let totalAP = 0;
        let totalDP = 0;
        let totalHP = BASE_CHARACTER_HP;
        
        let setCounts = {};

        // Update Slot Visuals
        gearSlots.forEach(slot => {
            const slotType = slot.getAttribute('data-slot');
            const item = selectedGear[slotType];
            
            // Clean up existing extra UI in slot
            const existingLevelBadge = slot.querySelector('.gear-slot-level');
            if(existingLevelBadge) existingLevelBadge.remove();
            
            if (item) {
                const stats = calculateStats(item, currentLevel);
                totalAP += stats.ap;
                totalDP += stats.dp;
                totalHP += stats.hp;

                if(item.setId) {
                    setCounts[item.setId] = (setCounts[item.setId] || 0) + 1;
                }
                
                slot.classList.add('filled');
                slot.setAttribute('data-rarity', item.rarity);
                
                if(currentLevel > 0) {
                    const levelBadge = document.createElement('div');
                    levelBadge.className = 'gear-slot-level';
                    levelBadge.textContent = '+' + currentLevel;
                    slot.appendChild(levelBadge);
                }

            } else {
                slot.classList.remove('filled');
                slot.removeAttribute('data-rarity');
            }
        });

        // Calculate Set Bonuses
        const activeSetBonusesContainer = document.getElementById('active-set-bonuses-list');
        activeSetBonusesContainer.innerHTML = '';
        let hasSetBonus = false;

        for (let setId in setCounts) {
            const count = setCounts[setId];
            const setData = setBonusDB[setId];
            if(!setData) continue;

            let activeBonuses = [];
            for (let reqCount in setData.bonuses) {
                if (count >= parseInt(reqCount)) {
                    const bonus = setData.bonuses[reqCount];
                    activeBonuses.push(bonus);
                    
                    if(bonus.stat === 'ap') totalAP += bonus.value;
                    if(bonus.stat === 'dp') totalDP += bonus.value;
                    if(bonus.stat === 'hp') totalHP += bonus.value;
                }
            }

            if (activeBonuses.length > 0) {
                hasSetBonus = true;
                const setName = currentLang === 'tr' ? setData.nameTr : setData.nameEn;
                const bonusDescriptions = activeBonuses.map(b => currentLang === 'tr' ? b.descTr : b.descEn).join(' • ');
                
                const bonusDiv = document.createElement('div');
                bonusDiv.className = 'set-bonus-item';
                bonusDiv.innerHTML = `
                    <div class="set-bonus-title">[${count} Parça] ${setName}</div>
                    <div class="set-bonus-desc">${bonusDescriptions}</div>
                `;
                activeSetBonusesContainer.appendChild(bonusDiv);
            }
        }

        if(!hasSetBonus) {
            activeSetBonusesContainer.innerHTML = `
                <div style="font-size: 0.85rem; color: var(--text-muted); opacity: 0.6; text-align: center; padding: 1rem;">
                    ${currentLang === 'tr' ? 'Şu anda aktif bir set bonusu yok.' : 'No active set bonuses currently.'}
                </div>
            `;
        }

        // Animate Stat Numbers
        animateValue("stat-total-hp", parseInt(document.getElementById("stat-total-hp").textContent), totalHP, 300);
        animateValue("stat-total-ap", parseInt(document.getElementById("stat-total-ap").textContent), totalAP, 300);
        animateValue("stat-total-dp", parseInt(document.getElementById("stat-total-dp").textContent), totalDP, 300);
    }

    function animateValue(id, start, end, duration) {
        if (start === end) return;
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerHTML = end;
            }
        };
        window.requestAnimationFrame(step);
    }

    // Initial render
    updateUI();
});
