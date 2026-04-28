const patchList = [
    {
        id: '0.25',
        versionBadge: 'v1.0.0.25',
        date: '19 April 2026',
        data: {
            en: {
                title: "The Quinfall - Patch v1.0.0.25",
                intro: "This patch focuses on targeted bug fixes, class-specific adjustments, and quality-of-life improvements based on community feedback.<br><br>We've addressed several issues caused by the free-form melee movement system, corrected various combat and UI bugs, and introduced new features including Power Stone tiers and a custom referral nickname system.<br><br>Additionally, Combat Zone rewards have been significantly increased to better align with player expectations.",
                ui: {
                    devNoteTitle: "Dev Note",
                    devCommentaryTitle: "Developer Commentary"
                },
                sections: [
                    {
                        sectionTitle: "Class Balance",
                        icon: "fas fa-balance-scale",
                        blocks: [
                            {
                                title: "Crossbow",
                                icon: "fas fa-crosshairs",
                                intro: "Since Crossbow usage has declined after the last update, this adjustment is intended as a targeted buff to improve its overall effectiveness:",
                                changes: [
                                    { name: "Steel Trap:", detail: "Now triggers instantly without delay, slows the target by 90% for 1.5 seconds, and its projectile speed has been increased by 50%." },
                                    { name: "Stun Bomb:", detail: "Base damage increased from 200% to 240%." },
                                    { name: "Ballista:", detail: "Range has been increased by 20%." }
                                ],
                                devNote: "Since Crossbow usage has declined after the last update, this adjustment is intended as a targeted buff to improve its overall effectiveness. Steel Trap has been enhanced to make the weapon more competitive in combat. Along with this change, Ballista has also been improved to further support its viability in combat."
                            },
                            {
                                title: "Warhammer",
                                icon: "fas fa-hammer",
                                intro: "Collision fixes for Warhammer barrier abilities:",
                                changes: [
                                    { name: "Stonewall:", detail: "Fixed an issue where ranged attacks could pass through the wall. The wall now properly blocks incoming ranged attacks as intended." },
                                    { name: "Stone Arena:", detail: "Fixed an issue where ranged attacks could pass through the wall. The wall now properly blocks incoming ranged attacks as intended." }
                                ],
                                devNote: "These fixes address collision issues where ranged projectiles were incorrectly able to pass through the Warhammer barriers. Both walls now properly block incoming ranged attacks as intended."
                            },
                            {
                                title: "Dual Dagger",
                                icon: "fas fa-khanda",
                                intro: "",
                                changes: [
                                    { name: "Blindside:", detail: "Now prevents the character from taking damage during its usage. It now works as intended." }
                                ]
                            },
                            {
                                title: "Two-Hand Sword",
                                icon: "fas fa-gavel",
                                intro: "",
                                changes: [
                                    { name: "Frenzy:", detail: "Fixed an issue where Frenzy would not trigger its cooldown in some cases. It now works as intended." }
                                ]
                            }
                        ]
                    },
                    {
                        sectionTitle: "Bug Fixes",
                        icon: "fas fa-bug",
                        listInfo: [
                            { title: "Kraken size has been increased.", desc: "An issue where its damage-over-time effect could leave players at 1 HP has been fixed. This change also addresses an unintended strategy where players could surround the Kraken to zone others out, creating an unfair advantage in encounters." },
                            { title: "Fixed an issue where certain skills were being canceled during movement-based auto attacks.", desc: "This was one of the bugs caused by the free-form melee movement system. When players performed auto attacks while moving, certain skills could unintentionally get canceled. Adjustments have been made to ensure smoother combat flow." },
                            { title: "Fixed a bug that prevented players from assisting characters who died while sprinting with the Q key.", desc: "This unintended behavior has been corrected, and reviving now properly follows normal combat rules." },
                            { title: "Fixed an issue where enemy players were not affected by CC effects in some cases.", desc: "This issue was related to the free-form melee movement system, where desync or timing inconsistencies could sometimes prevent CC effects from applying correctly. The behavior has been fixed for more consistent combat interactions." },
                            { title: "Fixed a visual bug where the Silver Wheel of Fortune list would sometimes appear invisible.", desc: "This was a UI-related issue where the Silver Wheel of Fortune rewards list would fail to render properly in certain cases. The display issue has been fixed." },
                            { title: "Fixed an issue where excess EXP was not carried over to the next level upon leveling up Profession EXP and Clan EXP.", desc: "Previously, any excess EXP gained during level-ups for Profession and Clan EXP was not being carried over correctly. This has now been fixed so overflow EXP is properly applied to the next level." },
                            { title: "Fixed an issue where materials refunded after canceling high-cost crafting could become unusable.", desc: "In some cases, refunded materials would return in a broken state and couldn't be used again. This has been resolved." }
                        ]
                    },
                    {
                        sectionTitle: "General Updates",
                        icon: "fas fa-list-ul",
                        listInfo: [
                            { title: "New accounts now receive a 1-week 50% EXP Boost.", desc: "This change is aimed at helping new players progress faster during their early game experience, making it easier to catch up and integrate into the game world." },
                            { title: "Central Market storage protection added.", desc: "To prevent item loss when the Central Market storage is full, placing new sell orders is now restricted. Sufficient space in the market storage is required for both buy and sell orders." },
                            { title: "Clan war rewards have been increased.", desc: "The amount of coins awarded for 1st place has been increased to 20B, and additionally boss chests have been added as rewards. The 1st place will receive 100 of them. Rewards for the other rankings will also be increased gradually." },
                            { title: "A custom nickname system has been added to the referral system.", desc: "Players can now set a referral nickname of their own choice and share it with new players instead of a referral ID. It is a customizable system that works the same as the referral ID system." },
                            { title: "New tiers have been added to Power Stones.", desc: "The current power stones will be marked as Level 1, and new Level 2 and Level 3 power stones have been added. Level 2 and Level 3 stones can be obtained by combining Level 1 stones via crafting stations. These stones provide more powerful bonuses." },
                            { title: "Variant 1 Silver Wheel of Fortune has been adjusted.", desc: "Since the introduction of Variant 2, the popularity of Variant 1 has declined. An update has been made along with an adjusted silver cost of 15M." },
                            { title: "The score gained from healing effects in Arena battles has been reduced by half.", desc: "An issue was identified where healers could gain an unfair advantage by healing players at full health to farm score. To ensure a more balanced and competitive environment, the score gained from healing has been reduced." }
                        ]
                    },
                    {
                        sectionTitle: "Combat Zone Updates",
                        icon: "fas fa-skull-crossbones",
                        listInfo: [
                            { title: "The drop chance of Tera Shards from mobs has been doubled.", desc: "Based on feedback from our players, we've decided to increase the drop rate of Tera Shards to improve overall accessibility and progression." },
                            { title: "PVP score gain has been increased from 3x to 4x.", desc: "Based on feedback from our players, we are increasing the PVP score gained in the Combat Zone to make it more rewarding and engaging." },
                            { title: "PVE rewards from mobs have been increased from 1k to 3k.", desc: "Based on feedback from our players, we are increasing the PVE score gained in the Combat Zone to make it more rewarding and engaging." },
                            { title: "The drop chance of Blueprint fragments from mobs has been doubled.", desc: "Based on feedback from our players, we've increased the drop chance of Blueprint fragments from mobs in the Combat Zone to improve progression and overall rewards." },
                            { title: "Blueprint fragment rewards from the Vorgath World Boss have been increased from 1 to 5.", desc: "Based on player feedback, we've significantly increased the Blueprint fragment rewards from the Vorgath World Boss to make the encounter more rewarding and worth the effort." }
                        ]
                    }
                ]
            },
            tr: {
                title: "The Quinfall - Yama v1.0.0.25",
                intro: "Bu yama; topluluk geri bildirimlerine dayanan hedefli hata düzeltmeleri, sınıf bazlı ayarlamalar ve yaşam kalitesi iyileştirmelerine odaklanmaktadır.<br><br>Serbest hareketli yakın dövüş sistemi kaynaklı birçok sorunu giderdik, çeşitli savaş ve arayüz hatalarını düzelttik. Güç Taşı kademeleri ve özel referans takma adı sistemi gibi yeni özellikler ekledik.<br><br>Ayrıca, oyuncu beklentileriyle daha iyi uyum sağlaması için Savaş Bölgesi ödülleri önemli ölçüde artırıldı.",
                ui: {
                    devNoteTitle: "Geliştirici Notu",
                    devCommentaryTitle: "Geliştiricinin Yorumu"
                },
                sections: [
                    {
                        sectionTitle: "Sınıf Dengelemeleri",
                        icon: "fas fa-balance-scale",
                        blocks: [
                            {
                                title: "Arbalet (Crossbow)",
                                icon: "fas fa-crosshairs",
                                intro: "Son güncellemeden sonra Arbalet kullanımı düştüğü için, genel etkinliğini artırmaya yönelik hedefli bir güçlendirme yapıldı:",
                                changes: [
                                    { name: "Çelik Kapan (Steel Trap):", detail: "Artık gecikmesiz olarak anında tetikleniyor, hedefi 1.5 saniyeliğine %90 yavaşlatıyor ve mermi hızı %50 artırıldı." },
                                    { name: "Sersemletme Bombası (Stun Bomb):", detail: "Temel hasar %200'den %240'a yükseltildi." },
                                    { name: "Balista (Ballista):", detail: "Menzili %20 artırıldı." }
                                ],
                                devNote: "Son güncellemeden sonra Arbalet kullanımı düştüğü için, bu ayarlama genel etkinliğini artırmaya yönelik hedefli bir güçlendirmedir. Çelik Kapan, silahı savaşta daha rekabetçi hale getirmek için güçlendirildi. Balista da savaştaki etkinliğini desteklemek için iyileştirildi."
                            },
                            {
                                title: "Savaş Çekici (Warhammer)",
                                icon: "fas fa-hammer",
                                intro: "Savaş Çekici bariyer yetenekleri için çarpışma düzeltmeleri:",
                                changes: [
                                    { name: "Taş Duvar (Stonewall):", detail: "Menzilli saldırıların duvardan geçebildiği bir sorun düzeltildi. Duvar artık gelen menzilli saldırıları doğru şekilde engelliyor." },
                                    { name: "Taş Arena (Stone Arena):", detail: "Menzilli saldırıların duvardan geçebildiği bir sorun düzeltildi. Duvar artık gelen menzilli saldırıları doğru şekilde engelliyor." }
                                ],
                                devNote: "Bu düzeltmeler, menzilli mermilerin Savaş Çekici bariyerlerinden yanlışlıkla geçebildiği çarpışma sorunlarını giderir. Her iki duvar da artık gelen menzilli saldırıları düzgün şekilde engelliyor."
                            },
                            {
                                title: "Çift Hançer (Dual Dagger)",
                                icon: "fas fa-khanda",
                                intro: "",
                                changes: [
                                    { name: "Blindside:", detail: "Artık kullanım sırasında karakterin hasar almasını engelliyor. Artık amaçlandığı gibi çalışıyor." }
                                ]
                            },
                            {
                                title: "Çift Elli Kılıç (Two-Hand Sword)",
                                icon: "fas fa-gavel",
                                intro: "",
                                changes: [
                                    { name: "Cinnet (Frenzy):", detail: "Bazı durumlarda bekleme süresinin tetiklenmediği bir sorun düzeltildi. Artık amaçlandığı gibi çalışıyor." }
                                ]
                            }
                        ]
                    },
                    {
                        sectionTitle: "Hata Düzeltmeleri",
                        icon: "fas fa-bug",
                        listInfo: [
                            { title: "Kraken boyutu artırıldı.", desc: "Sürekli hasar etkisinin oyuncuları 1 HP'de bırakabildiği bir sorun düzeltildi. Bu değişiklik ayrıca oyuncuların Kraken'i çevreleyerek diğerlerini engellemesine neden olan istenmeyen bir stratejiyi de çözüyor." },
                            { title: "Hareket halindeki otomatik saldırılar sırasında bazı yeteneklerin iptal edildiği bir sorun düzeltildi.", desc: "Bu, serbest hareketli yakın dövüş sistemi kaynaklı hatalardan biriydi. Oyuncular hareket halindeyken otomatik saldırı yaptığında bazı yetenekler istemeden iptal olabiliyordu. Daha akıcı savaş akışı sağlamak için ayarlamalar yapıldı." },
                            { title: "Q tuşuyla koşarken ölen karakterlere yardım edilememesine neden olan bir hata düzeltildi.", desc: "Bu istenmeyen davranış düzeltildi ve diriltme artık normal savaş kurallarına uygun şekilde çalışıyor." },
                            { title: "Bazı durumlarda düşman oyuncuların CC etkilerinden etkilenmediği bir sorun düzeltildi.", desc: "Bu sorun, serbest hareketli yakın dövüş sistemiyle ilgiliydi. Eşzamanlama tutarsızlıkları bazen CC etkilerinin doğru uygulanmasını engelleyebiliyordu. Daha tutarlı savaş etkileşimleri için davranış düzeltildi." },
                            { title: "Gümüş Şans Çarkı listesinin bazen görünmez olduğu bir görsel hata düzeltildi.", desc: "Bu, Gümüş Şans Çarkı ödül listesinin bazı durumlarda düzgün görüntülenmediği arayüzle ilgili bir sorundu. Görüntüleme hatası düzeltildi." },
                            { title: "Meslek EXP ve Klan EXP seviye atlarken fazla EXP'nin bir sonraki seviyeye aktarılmadığı bir sorun düzeltildi.", desc: "Daha önce, seviye atlama sırasında kazanılan fazla EXP doğru şekilde aktarılmıyordu. Bu artık düzeltildi ve taşan EXP bir sonraki seviyeye düzgün şekilde uygulanıyor." },
                            { title: "Yüksek maliyetli üretim iptali sonrası iade edilen malzemelerin bazı durumlarda kullanılamaz hale geldiği bir sorun düzeltildi.", desc: "Bazı durumlarda iade edilen malzemeler bozuk durumda geri dönüyor ve tekrar kullanılamıyordu. Bu sorun çözüldü." }
                        ]
                    },
                    {
                        sectionTitle: "Genel Güncellemeler",
                        icon: "fas fa-list-ul",
                        listInfo: [
                            { title: "Yeni hesaplar artık 1 haftalık %50 EXP Artışı alıyor.", desc: "Bu değişiklik, yeni oyuncuların erken oyun deneyimlerinde daha hızlı ilerlemelerine yardımcı olmayı amaçlıyor ve oyun dünyasına daha kolay entegre olmalarını sağlıyor." },
                            { title: "Merkez Market depolama koruması eklendi.", desc: "Market deposu dolduğunda eşya kaybını önlemek için yeni satış emirleri kısıtlandı. Hem alış hem satış emirleri için yeterli depolama alanı gerekli." },
                            { title: "Klan savaşı ödülleri artırıldı.", desc: "1. sıra için verilen altın miktarı 20B'ye yükseltildi, ayrıca boss sandıkları ödül olarak eklendi. 1. sıra 100 adet alacak. Diğer sıralamalar için ödüller de kademeli olarak artırılacak." },
                            { title: "Referans sistemine özel takma ad sistemi eklendi.", desc: "Oyuncular artık kendi seçtikleri bir referans takma adı belirleyebilir ve bunu yeni oyuncularla referans ID yerine paylaşabilir. Referans ID sistemiyle aynı şekilde çalışan özelleştirilebilir bir sistem." },
                            { title: "Güç Taşlarına yeni kademeler eklendi.", desc: "Mevcut güç taşları Seviye 1 olarak işaretlenecek, yeni Seviye 2 ve Seviye 3 güç taşları eklendi. Seviye 2 ve 3 taşları, Seviye 1 taşlarını üretim istasyonlarında birleştirerek elde edilebilir. Bu taşlar daha güçlü bonuslar sağlar." },
                            { title: "Varyant 1 Gümüş Şans Çarkı güncellendi.", desc: "Varyant 2'nin tanıtılmasından bu yana Varyant 1'in popülerliği düştü. Güncel ilerlemeyle uyumlu hale getirmek için güncelleme yapıldı ve gümüş maliyeti 15M olarak ayarlandı." },
                            { title: "Arena savaşlarında iyileştirme etkilerinden kazanılan puan yarıya indirildi.", desc: "İyileştiricilerin tam canlı oyuncuları iyileştirerek puan kasabildiği bir sorun tespit edildi. Daha dengeli ve rekabetçi bir ortam sağlamak için iyileştirmeden kazanılan puan azaltıldı." }
                        ]
                    },
                    {
                        sectionTitle: "Savaş Bölgesi Güncellemeleri",
                        icon: "fas fa-skull-crossbones",
                        listInfo: [
                            { title: "Yaratıklardan Tera Parçacığı düşme şansı iki katına çıkarıldı.", desc: "Oyuncularımızın geri bildirimlerine dayanarak, genel erişilebilirliği ve ilerlemeyi iyileştirmek için Tera Parçacıklarının düşme oranını artırmaya karar verdik." },
                            { title: "PVP puan kazanımı 3x'ten 4x'e yükseltildi.", desc: "Oyuncularımızın geri bildirimlerine dayanarak, Savaş Bölgesinde kazanılan PVP puanını daha ödüllendirici ve çekici hale getirmek için artırıyoruz." },
                            { title: "Yaratıklardan PVE ödülleri 1k'dan 3k'ya artırıldı.", desc: "Oyuncularımızın geri bildirimlerine dayanarak, Savaş Bölgesinde kazanılan PVE puanını daha ödüllendirici ve çekici hale getirmek için artırıyoruz." },
                            { title: "Yaratıklardan Blueprint parça düşme şansı iki katına çıkarıldı.", desc: "Oyuncularımızın geri bildirimlerine dayanarak, ilerlemeyi ve genel ödülleri iyileştirmek için Blueprint parça düşme şansını artırdık." },
                            { title: "Vorgath Dünya Bossu'ndan Blueprint parça ödülleri 1'den 5'e artırıldı.", desc: "Oyuncu geri bildirimlerine dayanarak, karşılaşmayı daha ödüllendirici ve çabaya değer kılmak için Vorgath Dünya Bossu'ndan düşen Blueprint parça ödüllerini önemli ölçüde artırdık." }
                        ]
                    }
                ]
            }
        }
    },
    {
        id: '0.24',
        versionBadge: 'v1.0.0.24',
        date: '12 April 2026',
        data: {
            en: {
                title: "The Quinfall - Patch v1.0.0.24 (Combat Balance Part)",
                intro: "In this update, our primary focus has been improving combat clarity, responsiveness, and overall gameplay flow.<br><br>Over time, we observed that the high density of crowd control effects across multiple classes was negatively impacting the pace and readability of combat. Encounters—especially in large-scale battles—often left little room for counterplay. With this patch, we are taking a significant step toward reducing excessive crowd control and creating a healthier, more skill-driven combat environment.<br><br>Additionally, based on valuable player feedback collected throughout the week, we’ve implemented a number of targeted improvements in the Combat Zone to better align with community expectations and gameplay experience.",
                ui: {
                    devNoteTitle: "Dev Note",
                    devCommentaryTitle: "Developer Commentary"
                },
                sections: [
                    {
                        sectionTitle: "Class Balance",
                        icon: "fas fa-balance-scale",
                        blocks: [
                            {
                                title: "Necromancer",
                                icon: "fas fa-skull",
                                intro: "The Necromancer has been performing beyond its intended role. While designed as a durable, frontline-capable caster, its damage output exceeded expectations, allowing it to dominate fights without meaningful trade-offs.<br><br>To better align the class with its core identity, we’ve adjusted its damage profile while reinforcing its summoner and debuff-oriented strengths:",
                                changes: [
                                    { name: "Necro Herd:", detail: "Damage behavior has been reworked: each summon now deals damage only once. Overall damage has been adjusted accordingly." },
                                    { name: "Grave Legion:", detail: "Skeleton movement speed increased by 50%. Spawn rate increased by 50%." },
                                    { name: "Revenant’s Vengeance:", detail: "Now reduces the target’s damage by 20% for 5 seconds." }
                                ],
                                devNote: "Necromancer’s power was too heavily concentrated in burst damage while also maintaining high durability. With these changes, we’re redistributing its strength into sustained pressure and team utility, reinforcing its intended identity without allowing it to dominate fights uncontested."
                            },
                            {
                                title: "Elementalist",
                                icon: "fas fa-fire",
                                intro: "The Elementalist excels in long-range area control and large-scale engagements. However, the immediacy of its abilities and the amount of crowd control available left little room for opponents to react.<br><br>To improve counterplay and reduce frustration in large fights:",
                                changes: [
                                    { name: "Meteor:", detail: "Crowd control effect removed." },
                                    { name: "Tornado:", detail: "Added a 0.7-second pre-impact indicator before activation." },
                                    { name: "Ice Cage:", detail: "Added a 0.7-second pre-impact indicator before activation." },
                                    { name: "All ranged AoE abilities:", detail: "Maximum range reduced by 10%." }
                                ],
                                devNote: "Elementalist remains a powerful area-control class, but its previous lack of counterplay created frustrating gameplay, especially in large-scale fights. These changes introduce clearer reaction windows and slightly higher positioning risk while preserving its core strengths."
                            },
                            {
                                title: "Dual Crossbow",
                                icon: "fas fa-crosshairs",
                                intro: "While originally designed as a high sustained DPS class, Dual Crossbow had access to excessive crowd control and chaining potential, creating an unhealthy balance dynamic.<br><br>To address this:",
                                changes: [
                                    { name: "Explosive Arrow:", detail: "Projectile speed increased by 25%. No longer collides with friendly units." },
                                    { name: "Stun Bomb:", detail: "Stun duration reduced to 0.5 seconds. Fixed an issue where the character could get stuck mid-air during casting." },
                                    { name: "Steel Trap:", detail: "Armor reduction decreased from 50% to 25%." }
                                ],
                                devNote: "Dual Crossbow was offering too much control alongside its already high damage output. By reducing its crowd control and defensive shredding, we’re keeping its DPS identity intact while removing its ability to lock down targets for extended periods."
                            },
                            {
                                title: "Dual Dagger",
                                icon: "fas fa-khanda",
                                intro: "",
                                changes: [
                                    { name: "Ambush:", detail: "Cooldown reduced from 27s to 24s. No longer collides with allies." },
                                    { name: "Poison Shroud:", detail: "Retreat distance increased by 25%." }
                                ],
                                devNote: "These changes are focused on improving fluidity and consistency. Dual Dagger should feel agile and precise, rewarding smart positioning and quick engagements rather than being limited by mechanical friction."
                            },
                            {
                                title: "Two-Handed Sword",
                                icon: "fas fa-gavel",
                                intro: "The Two-Handed Sword represents a high-impact melee playstyle, built around strong engagements and sustained frontline pressure. While effective in close combat, some aspects of its kit were overly restrictive in moment-to-moment gameplay.<br><br>To improve overall combat flow and responsiveness, we’ve adjusted how the class interacts with its core mechanics:",
                                changes: [
                                    { name: "Frenzy:", detail: "Damage component removed. Can now be activated while moving without entering animation lock." }
                                ],
                                devNote: "Two-Handed Sword should feel powerful and fluid in close-range combat. Previously, Frenzy created unnecessary rigidity despite being a core part of the kit. By removing its damage and allowing activation during movement, we’re giving players more control and flexibility while maintaining the class’s aggressive identity."
                            },
                            {
                                title: "Spear & Dual Dagger (Auto Attacks)",
                                icon: "fas fa-bolt",
                                intro: "",
                                changes: [
                                    { name: "Spear and Dual Dagger:", detail: "Auto-attack damage reduced by 25%." }
                                ],
                                devNote: "Basic attacks were contributing disproportionately to total damage output. This adjustment emphasizes ability usage and decision-making, leading to more interactive and skill-based combat."
                            }
                        ]
                    },
                    {
                        sectionTitle: "System & Combat Adjustments",
                        icon: "fas fa-cogs",
                        intro: "The Two-Handed Sword represents a high-impact melee playstyle, built around strong engagements and sustained frontline pressure. While effective in close combat, some aspects of its kit were overly restrictive in moment-to-moment gameplay.<br><br>To improve overall combat flow and responsiveness, we’ve adjusted how the class interacts with its core mechanics:",
                        listInfo: [
                            { title: "Dodge Mechanic", desc: "Energy cost increased from 25 → 33." },
                            { title: "Power Stones", desc: "Critical Strike Chance reduced from 1.3% → 1%." },
                            { title: "Heavy Set Bonus", desc: "Added +10% Critical Defense Chance." }
                        ],
                        devNote: "These systemic changes aim to reduce excessive burst and mobility while strengthening defensive options. Overall, this should lead to more deliberate combat pacing and greater build diversity."
                    },
                    {
                        sectionTitle: "Developer Commentary",
                        icon: "fas fa-bullhorn",
                        intro: "Our goal with this patch is not simply to reduce power, but to improve the overall quality of combat.<br><br>By lowering excessive crowd control, toning down outlier damage sources, and introducing clearer counterplay windows, we aim to create a more balanced, fair, and engaging experience for all players.<br><br>We understand that balance changes—especially nerfs—can be sensitive. Every adjustment in this patch has been made with long-term game health in mind, ensuring that each class retains its identity while contributing to a more enjoyable and competitive environment.<br><br>We will continue closely monitoring gameplay data and your feedback as these changes go live."
                    },
                    {
                        sectionTitle: "General Updates",
                        icon: "fas fa-list-ul",
                        listInfo: [
                            { title: "Free form melee movement has been added.", desc: "All melee characters can now perform basic attacks while moving, providing a more dynamic gameplay experience for melee classes." },
                            { title: "Adjustments has been made to Combat Zone.", desc: "The entry fee for the Combat Zone has been set to 10m. The number of monsters has been increased by 3x, and the zone is now accessible only via Channel 4 (CH4)." },
                            { title: "A new Silver Prize Wheel Variant (Variant 2) has been added.", desc: "Added new rewards including 5x Tera and 1x guaranteed Tera, along with additional bonus rewards." },
                            { title: "Adjustments has been made to Vorgath World Boss.", desc: "Vorgath World Boss HP has been reduced by 10%." },
                            { title: "Adjustments has been made to PvP bonus gain in the Combat Zone.", desc: "The PvP bonus gained in the Combat Zone has been increased from 2x to 3x." },
                            { title: "A visual stat issue related to newly added Elite accessories has been fixed.", desc: "This fix ensures that the displayed stats of Elite accessories now accurately reflect their actual in-game values." },
                            { title: "Adjustments has been made to grindable items for Ancient Ore.", desc: "Equipment that can yield Ancient Ore but was previously marked as non-grindable can now be placed into the grinder." },
                            { title: "Buffs obtained from the Pelthera Statue are now received as Scrolls...", desc: "...and can be activated from the inventory. This change provides greater flexibility." },
                            { title: "A new buff has been added to the Pelthera Statue.", desc: "Granting +15% PvP Defense for 10 minutes." },
                            { title: "Alchemist and Weaponsmith NPCs have been added to the Combat Zone.", desc: "Longer gameplay sessions in the Combat Zone by allowing players to manage their needs without leaving the area." },
                            { title: "Fall damage and damage treshold has been adjusted.", desc: "Fall damage has been reduced by 30%, and the minimum damage threshold has been increased by 50%." },
                            { title: "Fixed an issue where players could move into safe zones...", desc: "Fixed from certain edge points within the Combat Zone." },
                            { title: "Vorgath World Boss timers has been adjusted.", desc: "Vorgath World Boss will now spawn every 6 hours in the Combat Zone." },
                            { title: "PvE Score gain has been adjusted in the Combat Zone.", desc: "Combat Zone mobs now grant 1000 PvE Score when defeated." },
                            { title: "A guaranteed Tera Protection reward has been added...", desc: "For the player who deals the highest damage to the Kraken Boss. This is in addition to the existing Tera drop chance." },
                            { title: "Tera Shards have been added to the game.", desc: "Collect 100 shards and right-click to obtain 1 Tera Protection. These shards are now guaranteed drops from all World Bosses and Dungeon Bosses." }
                        ]
                    }
                ]
            },
            tr: {
                title: "The Quinfall - Yama v1.0.0.24 (Savaş Dengesi Bölümü)",
                intro: "Bu güncellemede birincil odak noktamız savaş netliğini, tepki süresini ve genel oynanış akışını iyileştirmek oldu.<br><br>Zamanla, birden fazla sınıftaki kitle kontrolü (crowd control) etkilerinin yüksek yoğunluğunun savaşın hızını ve okunabilirliğini olumsuz etkilediğini gözlemledik. Özellikle büyük ölçekli savaşlarda, karşı oyun için çok az yer kalıyordu. Bu yamayla, aşırı kitle kontrolünü azaltma ve daha sağlıklı, yeteneğe dayalı bir savaş ortamı yaratma yönünde önemli bir adım atıyoruz.<br><br>Ayrıca, hafta boyunca toplanan değerli oyuncu geri bildirimlerine dayanarak, Savaş Bölgesi'nde (Combat Zone) topluluk beklentileriyle daha iyi uyum sağlaması adına bazı hedefli iyileştirmeler uyguladık.",
                ui: {
                    devNoteTitle: "Geliştirici Notu",
                    devCommentaryTitle: "Geliştiricinin Yorumu"
                },
                sections: [
                    {
                        sectionTitle: "Sınıf Dengelemeleri",
                        icon: "fas fa-balance-scale",
                        blocks: [
                            {
                                title: "Necromancer (Büyücü)",
                                icon: "fas fa-skull",
                                intro: "Necromancer, amaçlanan rolünün ötesinde bir performans sergiliyordu. Dayanıklı, ön saflarda yer alabilen bir büyücü olarak tasarlanmış olmasına rağmen, hasar çıkışı beklentileri aştı ve dövüşleri tek taraflı domine etmesine izin verdi.<br><br>Sınıfı temel kimliğiyle daha iyi uyumlu hale getirmek için hasar profilini ayarladık, yaratık çağırma ve zayıflatma odaklı güçlü yönlerini pekiştirdik:",
                                changes: [
                                    { name: "Necro Sürüsü:", detail: "Hasar mantığı yeniden düzenlendi: Piyasaya sürülen her yaratık artık yalnızca bir kez hasar vuracak. Toplam hasar buna göre uyarlandı." },
                                    { name: "Mezar Lejyonu:", detail: "İskelet hareket hızı %50 artırıldı. Doğma (spawn) oranı %50 artırıldı." },
                                    { name: "Revenant’ın İntikamı:", detail: "Artık hedefin hasarını 5 saniyeliğine %20 düşürüyor." }
                                ],
                                devNote: "Necromancer'ın gücü, yüksek dayanıklılığı korurken anlık hasarda çok yoğunlaşmıştı. Bu değişikliklerle, gücünü sürekli baskı ve takım faydasına yönlendiriyoruz."
                            },
                            {
                                title: "Elementalist",
                                icon: "fas fa-fire",
                                intro: "Elementalist, uzun menzilli alan kontrolü ve büyük ölçekli çatışmalarda öne çıkıyor. Ancak, yeteneklerinin anilik oranı ve mevcut kitle kontrolü, rakiplerin tepki vermesine çok az olanak tanıyordu.<br><br>Karşı oyunu iyileştirmek ve büyük savaşlardaki hayal kırıklığını azaltmak için:",
                                changes: [
                                    { name: "Meteor:", detail: "Kitle kontrolü etkisi kaldırıldı." },
                                    { name: "Hortum (Tornado):", detail: "Aktivasyondan önce 0.7 saniyelik bir ön etki göstergesi eklendi." },
                                    { name: "Buz Kafesi:", detail: "Aktivasyondan önce 0.7 saniyelik bir ön etki göstergesi eklendi." },
                                    { name: "Tüm menzilli AoE (Alan) yetenekleri:", detail: "Maksimum menzil %10 düşürüldü." }
                                ],
                                devNote: "Elementalist güçlü bir alan kontrol sınıfı olmaya devam ediyor, ancak önceki karşı oyun eksikliği özellikle büyük savaşlarda sinir bozucu oyun tarzları yarattı. Bu değişiklikler daha net tepki mekanikleri doğuracak."
                            },
                            {
                                title: "Çift Arbalet (Dual Crossbow)",
                                icon: "fas fa-crosshairs",
                                intro: "Başlangıçta yüksek sürekli DPS sınıfı olarak tasarlanan Çift Arbalet, aşırı kitle kontrolüne ve zincirleme yetenek potansiyeline erişerek sağlıksız bir denge dinamiği yarattı.<br><br>Bunu çözmek için:",
                                changes: [
                                    { name: "Patlayıcı Ok:", detail: "Mermi hızı %25 artırıldı. Artık dost birimlerle çarpışmıyor." },
                                    { name: "Sersemletme Bombası:", detail: "Sersemletme süresi 0.5 saniyeye düşürüldü. Yetenek kullanımı sırasında karakterin havada asılı kalması sorunu düzeltildi." },
                                    { name: "Çelik Kapan:", detail: "Zırh kırma etkisi %50'den %25'e düşürüldü." }
                                ],
                                devNote: "Çift Arbalet, zaten yüksek hasarının yanında çok fazla kontrol sunuyordu. Kitle kontrolünü ve defansif parçalamasını azaltarak, hedefleri uzun süreler kilitli tutma yeteneğini elinden alıyoruz, fakat DPS kimliğini sağlam tutuyoruz."
                            },
                            {
                                title: "Çift Hançer (Dual Dagger)",
                                icon: "fas fa-khanda",
                                intro: "Mekanik sürtünmeleri azaltıp, sınıfı daha çevik hissettirmeyi amaçladık:",
                                changes: [
                                    { name: "Pusu (Ambush):", detail: "Bekleme süresi 27sn'den 24sn'ye düşürüldü. Artık dostlarla çarpışmıyor." },
                                    { name: "Zehir Örtüsü (Poison Shroud):", detail: "Geri çekilme mesafesi %25 artırıldı." }
                                ],
                                devNote: "Bu değişiklikler akıcılığı ve tutarlılığı artırmaya odaklanıyor. Çift Hançer daha da çevik hissettirmeli ve akıllıca konumlanmayı ödüllendirmeli."
                            },
                            {
                                title: "Çift Elli Kılıç (Two-Handed Sword)",
                                icon: "fas fa-gavel",
                                intro: "Çift Elli Kılıç, sağlam çarpışmalar ve cephe baskısı etrafında inşa edilmiş yüksek etkili bir yakın dövüş tarzını temsil eder. Yakın dövüşte etkili olsa da teçhizatının bazı yönleri aşırı derecede kısıtlayıcıydı.<br><br>Akışı iyileştirmek adına ayarlamalar yaptık:",
                                changes: [
                                    { name: "Cinnet (Frenzy):", detail: "Hasar bileşeni kaldırıldı. Artık animasyon kilitlenmesine girmeden hareket halindeyken etkinleştirilebilir." }
                                ],
                                devNote: "Çift Elli Kılıç yakın dövüşte güçlü ve akıcı hissettirmeli. Cinnet özelliğini daha kullanışlı hale getirmek için hasar noktasını pas geçip esnekliği artırdık."
                            },
                            {
                                title: "Mızrak ve Çift Hançer (Düz Vuruşlar)",
                                icon: "fas fa-bolt",
                                intro: "",
                                changes: [
                                    { name: "Mızrak ve Çift Hançer:", detail: "Düz vuruş (Oto-atak) hasarı %25 oranında azaltıldı." }
                                ],
                                devNote: "Temel saldırılar toplam hasar çıktısına orantısız şekilde yüksek katkıda bulunuyordu. Bu ayarlama yetenek kullanımını ön plana çıkarıyor."
                            }
                        ]
                    },
                    {
                        sectionTitle: "Sistem ve Savaş Ayarlamaları",
                        icon: "fas fa-cogs",
                        intro: "Genel savaş akışını iyileştirmek adına ayarlamalar yaptık:",
                        listInfo: [
                            { title: "Kaçınma (Dodge) Mekaniği", desc: "Enerji bedeli artırıldı: 25 → 33." },
                            { title: "Güç Taşları (Power Stones)", desc: "Kritik Vuruş Şansı düşürüldü: %1.3 → %1." },
                            { title: "Ağır Zırh Set Bonusu", desc: "+%10 Kritik Savunma Şansı eklendi." }
                        ],
                        devNote: "Bu sistemsel değişiklikler, defansif seçenekleri güçlendirirken anlık ve limitsiz hareketliliği azaltmayı amaçlamaktadır."
                    },
                    {
                        sectionTitle: "Geliştiricinin Yorumu",
                        icon: "fas fa-bullhorn",
                        intro: "Bu yama ile amacımız sadece gücü azaltmak değil, savaşın genel kalitesini artırmaktır. Tüm oyuncular için daha adil, dengeli ve ilgi çekici bir ortam yaratmayı hedefliyoruz.<br><br>Aşırı kitle kontrolünü düşürerek, aykırı hasar kaynaklarını hafifleterek ve daha net karşı oyun pencereleri sunarak dengeli bir zemin kuruyoruz. Tüm sınıfların kimliklerini kaybetmeden daha keyifli ve rekabetçi bir ortama katkı yapmalarını sağlamaktayız."
                    },
                    {
                        sectionTitle: "Genel Güncellemeler",
                        icon: "fas fa-list-ul",
                        listInfo: [
                            { title: "Serbest hareketli yakın dövüş (Melee) eklendi.", desc: "Tüm yakın dövüş karakterleri artık hareket halindeyken temel saldırı yapabilir." },
                            { title: "Savaş Bölgesi (Combat Zone) güncellemeleri yapıldı.", desc: "Giriş ücreti 10m oldu. Canavar sayısı 3 katına çıkarıldı. Bölgeye artık sadece Kanal 4 (CH4) üzerinden giriş yapılabilir." },
                            { title: "Yeni Gümüş Ödül Çarkı Varyantı eklendi.", desc: "Garantili Tera ve 5x Tera da dahil olmak üzere ekstra bonus ödülleri eklendi." },
                            { title: "Vorgath Dünya Bossu güncellendi.", desc: "HP'si (Canı) %10 düşürüldü. Artık Savaş Bölgesinde 6 saatte bir canlanacak." },
                            { title: "PvP bonusları yükseltildi.", desc: "Savaş Bölgesinde kazanılan PvP bonusu 2x'den 3x'e çıkarıldı." },
                            { title: "Elit takılardaki görsel statü hatası giderildi.", desc: "Bu düzeltme, görüntülenen değerlerin gerçek değerlerle eşleşmesini garanti altına aldı." },
                            { title: "Kadim Cevher öğeleri ayarlandı.", desc: "Önceden öğütülemez işaretlenmesine rağmen Kadim Cevher veren eşyalar artık öğütücüye yerleştirilebilir." },
                            { title: "Pelthera Heykeli güçlendirmeleri artık Parşömen halinde.", desc: "Envanterden dilediğiniz zaman aktive edebilirsiniz. Ayrıca heykeline +%15 PvP Defans (10 dk) sağlayan yeni bir güçlendirme eklendi." },
                            { title: "Simyacı ve Silah Ustası NPC'leri Savaş Bölgesine eklendi.", desc: "Oyuncuların alandan çıkmadan tüm ihtiyaçlarını karşılama olanağı sağlandı." },
                            { title: "Düşme hasarları düşürüldü.", desc: "Düşme hasarı %30 düşürüldü, buna karşılık minimum hasar eşiği %50 artırıldı." },
                            { title: "Harita hataları (Güvenli Bölge geçişleri) düzeltildi.", desc: "Oyuncuların hedef dışı kenarlardan güvenli bölgelere girmesini sağlayan bir hata giderildi." },
                            { title: "Kraken Boss ödüllerine garantili Tera koruması eklendi.", desc: "En yüksek hasarı vuran kişiye (veya o partinin üyelerinden birine) doğrudan verilecek." },
                            { title: "Tera Parçacıkları (Tera Shards) oyuna eklendi.", desc: "100 adet toplayın ve 1 Tera Korumasına dönüştürün! Dünya Bossları, Zindan Bossları ve Savaş Bölgesi yaratıklarından düşme şansı var." }
                        ]
                    }
                ]
            }
        }
    },
    {
        id: '0.23',
        versionBadge: 'v1.0.0.23',
        date: '12 April 2026',
        data: {
            en: {
                title: "The Quinfall - Patch v1.0.0.23 (Combat Balance Part)",
                intro: "Recent Combat Balance changes applied to specific classes to improve combat fluidity.",
                ui: {
                    devNoteTitle: "Dev Note",
                    devCommentaryTitle: "Developer Commentary"
                },
                sections: [
                    {
                        sectionTitle: "Class Balance",
                        icon: "fas fa-balance-scale",
                        blocks: [
                            {
                                title: "Sword and Shield",
                                icon: "fas fa-shield-alt",
                                intro: "",
                                changes: [
                                    { name: "Shield Bash:", detail: "After using the skill the character now gains 25% movement speed for 3 seconds. The stance animation at the end is removed." },
                                    { name: "Heroic Drop:", detail: "Area diameter is increased by 25%. The character getting stuck on the target is removed." }
                                ]
                            },
                            {
                                title: "Dual Dagger",
                                icon: "fas fa-khanda",
                                intro: "",
                                changes: [
                                    { name: "Razor Shuriken:", detail: "After using the skill the character now gains 30% movement speed for 3 seconds. Damaged enemies are slowed by 30% for 2 seconds." },
                                    { name: "Death Waltz:", detail: "Attack animation is sped up by 80%." }
                                ]
                            },
                            {
                                title: "Spear",
                                icon: "fas fa-bolt",
                                intro: "",
                                changes: [
                                    { name: "Rule:", detail: "The character getting stuck on the target during use is removed." },
                                    { name: "Face Off:", detail: "The character getting stuck on the target during use is removed." },
                                    { name: "Mirage:", detail: "The character now gains immunity to negative effects for 1 second during skill use. Also, the character getting stuck on the target during movement is removed." },
                                    { name: "Equilibrium:", detail: "The HP value of the passive skill is increased from 40% to 60%." },
                                    { name: "Spearfall:", detail: "Area of effect is increased by 20%." },
                                    { name: "Lance Cyclone:", detail: "Area of effect is increased by 20%." }
                                ]
                            },
                            {
                                title: "Dual Axe",
                                icon: "fas fa-hammer",
                                intro: "",
                                changes: [
                                    { name: "Basic Attacks:", detail: "Basic attack animations are sped up by 25%." },
                                    { name: "Slaughter:", detail: "Slows the damaged target by 30% for 2 seconds." },
                                    { name: "Battle Roar:", detail: "HP loss during skill use is removed." },
                                    { name: "Deathroll:", detail: "Area of effect is increased by 20%." },
                                    { name: "Rage Burst:", detail: "Movement range is increased. HP loss during skill use is removed." },
                                    { name: "Guillotine:", detail: "Animation speed is increased by 40%, range is increased. 2X" },
                                    { name: "Cruel Authority:", detail: "Effect range is increased by 40%." }
                                ]
                            }
                        ]
                    }
                ]
            },
            tr: {
                title: "The Quinfall - Yama v1.0.0.23 (Savaş Dengesi Bölümü)",
                intro: "Savaş akıcılığını geliştirmek için belirli sınıflara uygulanan Savaş Dengesi değişiklikleri.",
                ui: {
                    devNoteTitle: "Geliştirici Notu",
                    devCommentaryTitle: "Geliştiricinin Yorumu"
                },
                sections: [
                    {
                        sectionTitle: "Sınıf Dengelemeleri",
                        icon: "fas fa-balance-scale",
                        blocks: [
                            {
                                title: "Kılıç ve Kalkan (Sword and Shield)",
                                icon: "fas fa-shield-alt",
                                intro: "",
                                changes: [
                                    { name: "Kalkan Darbesi (Shield Bash):", detail: "Yeteneği kullandıktan sonra karakter artık 3 saniyeliğine %25 hareket hızı kazanıyor. Sonda yer alan duruş animasyonu kaldırıldı." },
                                    { name: "Kahraman Düşüşü (Heroic Drop):", detail: "Alan çapı %25 artırıldı. Karakterin hedefe takılma sorunu giderildi." }
                                ]
                            },
                            {
                                title: "Çift Hançer (Dual Dagger)",
                                icon: "fas fa-khanda",
                                intro: "",
                                changes: [
                                    { name: "Jilet Shuriken (Razor Shuriken):", detail: "Yeteneği kullandıktan sonra karakter artık 3 saniyeliğine %30 hareket hızı kazanıyor. Hasar alan düşmanlar 2 saniyeliğine %30 yavaşlar." },
                                    { name: "Ölüm Valsi (Death Waltz):", detail: "Saldırı animasyonu %80 hızlandırıldı." }
                                ]
                            },
                            {
                                title: "Mızrak (Spear)",
                                icon: "fas fa-bolt",
                                intro: "",
                                changes: [
                                    { name: "Kural (Rule):", detail: "Kullanım sırasında karakterin hedefe takılma sorunu giderildi." },
                                    { name: "Yüzleşme (Face Off):", detail: "Kullanım sırasında karakterin hedefe takılma sorunu giderildi." },
                                    { name: "Serap (Mirage):", detail: "Yetenek kullanımı sırasında karakter artık 1 saniyeliğine olumsuz etkilere karşı bağışıklık kazanıyor. Ayrıca hareket sırasında karakterin hedefe takılma sorunu giderildi." },
                                    { name: "Denge (Equilibrium):", detail: "Pasif yeteneğin HP değeri %40'tan %60'a çıkarıldı." },
                                    { name: "Mızrak Düşüşü (Spearfall):", detail: "Etki alanı %20 artırıldı." },
                                    { name: "Mızrak Kasırgası (Lance Cyclone):", detail: "Etki alanı %20 artırıldı." }
                                ]
                            },
                            {
                                title: "Çift Balta (Dual Axe)",
                                icon: "fas fa-hammer",
                                intro: "",
                                changes: [
                                    { name: "Temel Saldırılar:", detail: "Temel saldırı animasyonları %25 hızlandırıldı." },
                                    { name: "Katliam (Slaughter):", detail: "Hasar alan hedefi 2 saniyeliğine %30 yavaşlatır." },
                                    { name: "Savaş Narası (Battle Roar):", detail: "Yetenek kullanımı sırasındaki HP kaybı kaldırıldı." },
                                    { name: "Ölüm Dönüşü (Deathroll):", detail: "Etki alanı %20 artırıldı." },
                                    { name: "Öfke Patlaması (Rage Burst):", detail: "Hareket menzili artırıldı. Yetenek kullanımı sırasındaki HP kaybı kaldırıldı." },
                                    { name: "Giyotin (Guillotine):", detail: "Animasyon hızı %40 artırıldı, menzili genişletildi. 2X" },
                                    { name: "Zalim Otorite (Cruel Authority):", detail: "Etki alanı %40 artırıldı." }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
];
