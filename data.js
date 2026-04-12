const patchList = [
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
