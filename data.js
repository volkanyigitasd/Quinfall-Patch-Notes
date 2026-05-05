const patchList = [
    {
        id: '0.28',
        versionBadge: 'v1.0.0.28',
        date: '5 May 2026',
        data: {
            en: {
                title: "The Quinfall - Patch v1.0.0.28",
                intro: "In this update, we are introducing a variety of improvements, bug fixes, and class balancing adjustments to provide a more refined combat and gameplay experience.<br><br>Notable changes include a guarantee (pity) system added to the upgrade system, mount speed increases, and numerous adjustments to Trio Arena matchmaking, rewards, and gameplay mechanics.",
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
                                title: "Sword & Shield",
                                icon: "fas fa-shield-alt",
                                intro: "Adjustments to better fit its defensive role.",
                                changes: [
                                    { name: "Auto Attacks:", detail: "Damage reduced by 50%." }
                                ]
                            },
                            {
                                title: "Two Hand Sword",
                                icon: "fas fa-gavel",
                                intro: "Damage output and burst potential have been balanced.",
                                changes: [
                                    { name: "Auto Attacks:", detail: "Damage reduced by 10%." },
                                    { name: "Razor Echo:", detail: "Cooldown increased by 7 seconds." }
                                ]
                            },
                            {
                                title: "Life Staff",
                                icon: "fas fa-heart",
                                intro: "Mobility advantage has been reduced.",
                                changes: [
                                    { name: "Realm Shift:", detail: "Cooldown increased from 18s to 30s." }
                                ]
                            },
                            {
                                title: "Arcane Staff",
                                icon: "fas fa-magic",
                                intro: "Mobility has been balanced.",
                                changes: [
                                    { name: "Elemental Dash:", detail: "Cooldown increased from 15s to 25s." }
                                ]
                            },
                            {
                                title: "Crossbow",
                                icon: "fas fa-crosshairs",
                                intro: "Improves overall damage output, usability, and control reliability.",
                                changes: [
                                    { name: "Stun Bomb:", detail: "Stun duration increased to 0.75 seconds." },
                                    { name: "Explosive Arrow:", detail: "Casting speed increased and AoE radius expanded." },
                                    { name: "Auto Attacks:", detail: "Damage increased by 15%." }
                                ]
                            },
                            {
                                title: "Bow",
                                icon: "fas fa-bullseye",
                                intro: "Enhances responsiveness, hit consistency, and sustained damage.",
                                changes: [
                                    { name: "Quick Draw:", detail: "Hitbox increased." },
                                    { name: "Piercing Arrow:", detail: "Casting speed and projectile speed increased." },
                                    { name: "Deadeye (Passive):", detail: "Bonus damage increased from 10% to 20%." }
                                ]
                            },
                            {
                                title: "Warhammer",
                                icon: "fas fa-hammer",
                                intro: "Improves skill uptime, control frequency, and significantly increases survivability.",
                                changes: [
                                    { name: "Discharge:", detail: "Required stacks reduced from 5 to 4." },
                                    { name: "Earthshatter:", detail: "Cooldown reduced from 80s to 60s." },
                                    { name: "Stone Arena:", detail: "Cooldown reduced from 80s to 60s." },
                                    { name: "Iron Will:", detail: "Shield strength doubled." }
                                ]
                            }
                        ]
                    },
                    {
                        sectionTitle: "Trio Arena Updates",
                        icon: "fas fa-users",
                        listInfo: [
                            { title: "A collider issue related to some escape points has been fixed.", desc: "Unintended escape paths have been removed to ensure fairer engagements." },
                            { title: "Trio Arena is now only accessible on Channel 4 (CH4).", desc: "This change was made to improve matchmaking speed and consistency." },
                            { title: "The number of participants is now displayed during matchmaking.", desc: "Players can better track queue status, and the minimum player requirement has been reduced." },
                            { title: "Victory and Defeat indicators have been added.", desc: "These appear at the end of each round to provide clearer feedback on match progress and outcomes." },
                            { title: "Tera Protection and Tera Fragments have been added to rewards.", desc: "Arena participation is now more rewarding and progression-focused." },
                            { title: "Match outcome calculation adjusted for time-outs.", desc: "If all 3 target enemies are not eliminated before time runs out, the result is now determined by the number of defeated players. This prevents unnecessary draws and discourages passive play." },
                            { title: "Round-end rewards based on player rankings have been added.", desc: "Players can now see performance-based rewards directly in the UI." },
                            { title: "A rare issue where players were instantly removed from matches has been fixed.", desc: "This improves overall match stability." }
                        ]
                    },
                    {
                        sectionTitle: "System & General Updates",
                        icon: "fas fa-cog",
                        listInfo: [
                            { title: "A guarantee (pity) system has been added to the upgrade system.", desc: "After a certain number of attempts, the next upgrade is guaranteed to succeed, with a dynamic counter system." },
                            { title: "Mount speed has been increased by 2x.", desc: "PvE mount combat restrictions have been removed, while PvP restrictions remain." },
                            { title: "The invulnerability effect during dodge (roll) has been removed.", desc: "However, CC Protection remains active." },
                            { title: "Low star-level item bonuses have been rebalanced.", desc: "High star-level items remain unchanged while lower tiers are improved." },
                            { title: "Robe set Physical Defense reduction increased from 10% to 25%.", desc: "Creates a more noticeable risk/reward balance." },
                            { title: "Critical Chance of Tier 2 and Tier 3 Power Stones increased by 20%.", desc: "This makes these items more impactful in builds." },
                            { title: "PVP Coin Market prices have been significantly reduced.", desc: "This improves accessibility to market items." },
                            { title: "A new button has been added to the Repair screen.", desc: "You can now automatically select all repairable equipment to streamline the repair process." },
                            { title: "Informational warnings have been added to certain interfaces.", desc: "Added to screens like the Mail screen to help players better understand interface-related actions and system messages." },
                            { title: "An issue where set bonus items caused stat inconsistencies has been fixed.", desc: "All gear bonuses now apply correctly and consistently." },
                            { title: "Various text, localization, and clan UI issues have been fixed.", desc: "General wording improvements have been applied and clan join dates are now displayed correctly." }
                        ]
                    }
                ]
            },
            tr: {
                title: "The Quinfall - Yama v1.0.0.28",
                intro: "Bu güncellemede, daha iyi bir savaş ve oynanış deneyimi sunmak amacıyla çeşitli iyileştirmeler, hata düzeltmeleri ve sınıf dengeleme ayarlamaları yapıyoruz.<br><br>Önemli değişiklikler arasında eşya yükseltme sistemine eklenen garanti (pity) sistemi, binek hızı artışları ve Trio Arena eşleştirmesi, ödülleri ve mekaniklerinde yapılan sayısız düzenleme yer alıyor.",
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
                                title: "Kılıç ve Kalkan (Sword & Shield)",
                                icon: "fas fa-shield-alt",
                                intro: "Savunma rolüne daha iyi uyması için ayarlandı.",
                                changes: [
                                    { name: "Temel Saldırılar:", detail: "Hasar %50 azaltıldı." }
                                ]
                            },
                            {
                                title: "Çift Elli Kılıç (Two Hand Sword)",
                                icon: "fas fa-gavel",
                                intro: "Hasar çıkışı ve anlık hasar potansiyeli dengelendi.",
                                changes: [
                                    { name: "Temel Saldırılar:", detail: "Hasar %10 azaltıldı." },
                                    { name: "Jilet Yankı (Razor Echo):", detail: "Bekleme süresi 7 saniye artırıldı." }
                                ]
                            },
                            {
                                title: "Yaşam Asası (Life Staff)",
                                icon: "fas fa-heart",
                                intro: "Hareketlilik avantajı azaltıldı.",
                                changes: [
                                    { name: "Diyar Kayması (Realm Shift):", detail: "Bekleme süresi 18 saniyeden 30 saniyeye çıkarıldı." }
                                ]
                            },
                            {
                                title: "Arkan Asası (Arcane Staff)",
                                icon: "fas fa-magic",
                                intro: "Hareketlilik dengelendi.",
                                changes: [
                                    { name: "Elementel Atılım (Elemental Dash):", detail: "Bekleme süresi 15 saniyeden 25 saniyeye çıkarıldı." }
                                ]
                            },
                            {
                                title: "Arbalet (Crossbow)",
                                icon: "fas fa-crosshairs",
                                intro: "Genel hasar çıkışı, kullanılabilirlik ve kontrol güvenilirliği artırıldı.",
                                changes: [
                                    { name: "Sersemletme Bombası (Stun Bomb):", detail: "Sersemletme süresi 0.75 saniyeye çıkarıldı." },
                                    { name: "Patlayıcı Ok (Explosive Arrow):", detail: "Kullanım hızı artırıldı ve etki alanı genişletildi." },
                                    { name: "Temel Saldırılar:", detail: "Hasar %15 artırıldı." }
                                ]
                            },
                            {
                                title: "Yay (Bow)",
                                icon: "fas fa-bullseye",
                                intro: "Tepki süresi, isabet tutarlılığı ve sürekli hasar potansiyeli iyileştirildi.",
                                changes: [
                                    { name: "Hızlı Çekim (Quick Draw):", detail: "İsabet alanı (hitbox) artırıldı." },
                                    { name: "Delici Ok (Piercing Arrow):", detail: "Kullanım hızı ve mermi hızı artırıldı." },
                                    { name: "Keskin Nişancı (Deadeye - Pasif):", detail: "Bonus hasar %10'dan %20'ye çıkarıldı." }
                                ]
                            },
                            {
                                title: "Savaş Çekici (Warhammer)",
                                icon: "fas fa-hammer",
                                intro: "Yeteneklerin kullanılabilirliği iyileştirildi ve hayatta kalma becerisi önemli ölçüde artırıldı.",
                                changes: [
                                    { name: "Deşarj (Discharge):", detail: "Gereken yük sayısı 5'ten 4'e düşürüldü." },
                                    { name: "Yeri Yaran (Earthshatter):", detail: "Bekleme süresi 80 saniyeden 60 saniyeye düşürüldü." },
                                    { name: "Taş Arena (Stone Arena):", detail: "Bekleme süresi 80 saniyeden 60 saniyeye düşürüldü." },
                                    { name: "Demir İrade (Iron Will):", detail: "Kalkan gücü iki katına çıkarıldı." }
                                ]
                            }
                        ]
                    },
                    {
                        sectionTitle: "Trio Arena Güncellemeleri",
                        icon: "fas fa-users",
                        listInfo: [
                            { title: "Bazı kaçış noktalarıyla ilgili çarpışma sorunu düzeltildi.", desc: "Daha adil bir ortam sağlamak için istenmeyen kaçış yolları kaldırıldı." },
                            { title: "Trio Arena artık sadece Kanal 4 (CH4) üzerinden erişilebilir.", desc: "Bu değişiklik eşleştirme hızını ve tutarlılığını artırmak için yapıldı." },
                            { title: "Eşleştirme sırasında artık katılımcı sayısı görüntüleniyor.", desc: "Oyuncular kuyruk durumunu daha iyi takip edebilir ve minimum oyuncu gereksinimi azaltıldı." },
                            { title: "Zafer ve Bozgun göstergeleri eklendi.", desc: "Her turun sonuna eklenen bu göstergeler maç sonuçları hakkında daha net geri bildirim sağlar." },
                            { title: "Ödüllere Tera Koruması ve Tera Parçacıkları eklendi.", desc: "Arena katılımı artık daha ödüllendirici ve gelişime odaklı." },
                            { title: "Süre aşımı durumunda maç sonucu hesaplaması güncellendi.", desc: "Süre dolmadan 3 düşman da elimine edilmezse, sonuç mağlup edilen oyuncu sayısına göre belirlenecek. Bu pasif oyunu caydırır." },
                            { title: "Oyuncu sıralamalarına dayalı tur sonu ödülleri eklendi.", desc: "Oyuncular artık performansa dayalı ödülleri doğrudan arayüzde görebilir." },
                            { title: "Oyuncuların maçlardan anında çıkarılmasına neden olan nadir bir sorun düzeltildi.", desc: "Bu düzeltme genel maç istikrarını artırır." }
                        ]
                    },
                    {
                        sectionTitle: "Sistem ve Genel Güncellemeler",
                        icon: "fas fa-cog",
                        listInfo: [
                            { title: "Geliştirme sistemine bir garanti (pity) sistemi eklendi.", desc: "Belirli bir deneme sayısından sonra, dinamik bir sayaç sistemiyle bir sonraki eşya yükseltmesinin başarılı olması garanti edilir." },
                            { title: "Binek hızı 2 kat artırıldı.", desc: "PvE binek savaşı kısıtlamaları kaldırıldı (PvP kısıtlamaları aktif kalmaya devam ediyor)." },
                            { title: "Kaçınma (dodge/roll) sırasındaki hasar görmezlik etkisi kaldırıldı.", desc: "Ancak CC (Kitle Kontrol) Koruması aktif kalmaya devam ediyor." },
                            { title: "Düşük yıldız seviyeli eşya bonusları yeniden dengelendi.", desc: "Yüksek yıldız seviyeli eşyalar değişmezken alt kademeler iyileştirildi." },
                            { title: "Kumaş (Robe) seti Fiziksel Savunma düşüşü %10'dan %25'e çıkarıldı.", desc: "Bu değişiklik daha belirgin bir risk/ödül dengesi yaratır." },
                            { title: "Seviye 2 ve Seviye 3 Güç Taşlarının Kritik Şansı %20 artırıldı.", desc: "Bu eşyalar artık dizilimlerde daha etkili hale geldi." },
                            { title: "PVP Coin Market fiyatları önemli ölçüde düşürüldü.", desc: "Market eşyalarına erişilebilirlik kolaylaştırıldı." },
                            { title: "Tamir (Repair) ekranına yeni bir buton eklendi.", desc: "Tamir edilebilir tüm ekipmanları otomatik olarak seçerek süreci hızlandırabilirsiniz." },
                            { title: "Belirli arayüzlere bilgilendirici uyarılar eklendi.", desc: "Oyuncuların sistem mesajlarını daha iyi anlamaları için Posta ekranı gibi yerlere bilgilendirmeler eklendi." },
                            { title: "Set bonusu eşyalarının stat tutarsızlıklarına neden olduğu sorun düzeltildi.", desc: "Tüm ekipman bonusları artık doğru ve tutarlı bir şekilde uygulanıyor." },
                            { title: "Çeşitli metin, yerelleştirme ve klan arayüzü sorunları düzeltildi.", desc: "Genel çeviri iyileştirmeleri uygulandı ve klan katılma tarihleri artık doğru şekilde görüntüleniyor." }
                        ]
                    }
                ]
            }
        }
    },
    {
        id: '0.26',
        versionBadge: 'v1.0.0.26',
        date: '30 April 2026',
        data: {
            en: {
                title: "The Quinfall - Patch v1.0.0.26",
                intro: "In this update, we are introducing the highly anticipated 3v3 Trio Arena, alongside significant adjustments to World Boss rewards and Combat Zone dynamics.<br><br>We've also focused on improving the game's economy and progression systems, addressing various bugs, and implementing quality-of-life enhancements across the board.",
                ui: {
                    devNoteTitle: "Dev Note",
                    devCommentaryTitle: "Developer Commentary"
                },
                sections: [
                    {
                        sectionTitle: "Bug Fixes",
                        icon: "fas fa-bug",
                        listInfo: [
                            { title: "Fixed an issue where the statue buff providing 15% PvP Defense would occasionally not apply instantly.", desc: "PvP Defense bonus now applies instantly and reliably every time." },
                            { title: "Fixed a visual bug encountered during Elite Accessory crafting.", desc: "The crafting UI was showing things it shouldn’t. We’ve cleaned it up so Elite Accessory crafting looks and behaves exactly as intended." },
                            { title: "Fixed an issue where the final hit of the Spear skill Aerial Onslaught would sometimes not deal damage.", desc: "The damage application has been corrected to ensure the ability now reliably lands all intended hits, delivering the full impact of the combo every time." },
                            { title: "Fixed an issue in the Combat Zone where dead characters would sometimes appear with full HP.", desc: "This was a display desync issue causing confusing health states after death. The UI now properly reflects character status." },
                            { title: "Fixed an issue where the Main Menu could not be closed with the ESC key.", desc: "We’ve fixed the issue so players can now smoothly exit the Main Menu without getting stuck." },
                            { title: "Fixed a visual bug where other players could not properly see the resurrection animation.", desc: "This display desync issue regarding revived characters has been fixed." }
                        ]
                    },
                    {
                        sectionTitle: "Combat Zone Updates",
                        icon: "fas fa-skull-crossbones",
                        listInfo: [
                            { title: "The entry fee for the Combat Zone has been removed.", desc: "The Combat Zone is now open to everyone—no entry cost, no barriers. More players, more fights, more action." },
                            { title: "The number of monsters in the Combat Zone has been significantly increased.", desc: "We’ve cranked up the monster density to keep the action constant, boost rewards, and make every run feel worth your time." }
                        ]
                    },
                    {
                        sectionTitle: "General Updates",
                        icon: "fas fa-list-ul",
                        listInfo: [
                            { title: "The new 3v3 event system, Trio Arena, has been added.", desc: "This is a fully queue-based competitive arena. Equalized gear, no consumables, 1 tank and 1 healer cap per team, played in a Best of 3 format. Ranks and rewards are distributed weekly." },
                            { title: "Vorgath World Boss adjustments.", desc: "Vorgath's HP has been reduced by 25%. Additionally, the 3x Tera reward has been removed, and total distributed Action Coins have been increased from 5k to 90k for better contribution-based reward distribution." },
                            { title: "Kraken World Boss adjustments.", desc: "The Kraken will now spawn every 12 hours. The guaranteed Tera reward has been removed, and total distributed Action Coins have been increased from 5k to 30k for better scaling with dealt damage." },
                            { title: "PvP Point rewards in Arena battles have been increased.", desc: "PvP Point rewards have been massively boosted by 4 times so every match feels worth the grind." },
                            { title: "Prices of items in the Olympic Coin Market have been slightly reduced.", desc: "Tera pricing has been significantly reduced from 2000 to 700, and several other materials have seen their costs cut by up to half." },
                            { title: "NPC sell prices for equipment level 75 and below have been decreased.", desc: "We’ve reduced their NPC sell prices by half to keep early-mid game economy balanced." },
                            { title: "Tera Protection obtained from Silver Prize Wheels is now non-tradable.", desc: "By restricting trade on certain high-value rewards, we aim to reduce unintended market activity." },
                            { title: "Clan Coin deposit restrictions have been implemented.", desc: "Clan members can now deposit Coins into the clan storage only if at least 5 days have passed since the clan’s creation and the clan is above level 2." },
                            { title: "A crown indicator has been added to clan leaders’ titles.", desc: "We’ve added a crown indicator so clan leadership is instantly recognizable." },
                            { title: "Central Market limits have been increased.", desc: "The purchase limit for materials and the limit for buy orders have both been increased from 999 to 1000." },
                            { title: "The character limit for the Reference ID input field has been increased.", desc: "We’ve expanded the limit to better accommodate longer reference nicknames for new players." },
                            { title: "Various spelling errors in translations have been corrected.", desc: "We’ve cleaned up a number of translation issues and typos across the game to improve clarity." },
                            { title: "A new costume wheel has been added to the shop.", desc: "Fresh looks, new styles, same spin." }
                        ]
                    }
                ]
            },
            tr: {
                title: "The Quinfall - Yama v1.0.0.26",
                intro: "Bu güncellemede, merakla beklenen 3v3 Trio Arena'yı, Dünya Bossu ödüllerindeki ve Savaş Bölgesi dinamiklerindeki önemli ayarlamalarla birlikte sunuyoruz.<br><br>Ayrıca oyunun ekonomisini ve ilerleme sistemlerini iyileştirmeye odaklandık, çeşitli hataları giderdik ve genel yaşam kalitesi iyileştirmelerini hayata geçirdik.",
                ui: {
                    devNoteTitle: "Geliştirici Notu",
                    devCommentaryTitle: "Geliştiricinin Yorumu"
                },
                sections: [
                    {
                        sectionTitle: "Hata Düzeltmeleri",
                        icon: "fas fa-bug",
                        listInfo: [
                            { title: "%15 PvP Defans sağlayan heykel güçlendirmesinin bazen anında uygulanmaması sorunu düzeltildi.", desc: "PvP Savunma bonusu artık her seferinde anında ve güvenilir bir şekilde uygulanıyor." },
                            { title: "Elit Takı üretimi sırasında karşılaşılan görsel bir hata düzeltildi.", desc: "Üretim arayüzündeki görüntü hataları giderildi, artık Elit Takı üretimi tamamen tasarlandığı gibi görünüyor ve çalışıyor." },
                            { title: "Mızrak yeteneği Aerial Onslaught'un (Havadan Saldırı) son vuruşunun bazen hasar vermemesi sorunu düzeltildi.", desc: "Hasar uygulaması düzeltildi, böylece yetenek artık tüm planlanan vuruşları güvenilir bir şekilde gerçekleştiriyor." },
                            { title: "Savaş Bölgesi'nde ölü karakterlerin bazen tam HP ile görünmesine neden olan bir hata düzeltildi.", desc: "Bu, ölümden sonra kafa karıştırıcı sağlık durumlarına neden olan bir görüntü senkronizasyonu sorunuydu. Arayüz artık karakter durumunu doğru şekilde yansıtıyor." },
                            { title: "Ana Menünün ESC tuşu ile kapatılamaması sorunu düzeltildi.", desc: "Oyuncuların Ana Menüden takılı kalmadan sorunsuz bir şekilde çıkabilmesi için bu hata giderildi." },
                            { title: "Diğer oyuncuların diriltilen karakterlerin diriliş animasyonunu düzgün göremediği görsel bir hata düzeltildi.", desc: "Diriltilen karakterlerle ilgili bu görsel senkronizasyon sorunu giderildi." }
                        ]
                    },
                    {
                        sectionTitle: "Savaş Bölgesi Güncellemeleri",
                        icon: "fas fa-skull-crossbones",
                        listInfo: [
                            { title: "Savaş Bölgesi (Combat Zone) giriş ücreti kaldırıldı.", desc: "Savaş Bölgesi artık herkese açık; giriş maliyeti veya bariyer yok. Daha fazla oyuncu, daha fazla savaş, daha fazla aksiyon." },
                            { title: "Savaş Bölgesi'ndeki canavar sayısı önemli ölçüde artırıldı.", desc: "Aksiyonu sürekli kılmak, ödülleri artırmak ve her girişin harcanan zamana değmesini sağlamak için canavar yoğunluğunu artırdık." }
                        ]
                    },
                    {
                        sectionTitle: "Genel Güncellemeler",
                        icon: "fas fa-list-ul",
                        listInfo: [
                            { title: "Yeni 3v3 etkinlik sistemi Trio Arena eklendi.", desc: "Bu, tamamen sıraya dayalı rekabetçi bir arenadır. Eşitlenmiş ekipman, tüketilebilir eşya yok, takım başına en fazla 1 tank ve 1 şifacı sınırı var. Maçlar 3 maçlık (Best of 3) seriler halinde oynanır. Sıralamalar ve ödüller haftalık olarak dağıtılır." },
                            { title: "Vorgath Dünya Bossu ayarlamaları.", desc: "Vorgath'ın HP'si %25 düşürüldü. Ayrıca, 3x Tera ödülü kaldırıldı ve daha iyi katkıya dayalı ödül dağıtımı için dağıtılan toplam Action Coin (Aksiyon Sikkesi) 5 binden 90 bine çıkarıldı." },
                            { title: "Kraken Dünya Bossu ayarlamaları.", desc: "Kraken artık her 12 saatte bir doğacak. Garantili Tera ödülü kaldırıldı ve verilen hasarla daha iyi ölçeklenmesi için dağıtılan toplam Action Coin (Aksiyon Sikkesi) 5 binden 30 bine çıkarıldı." },
                            { title: "Arena savaşlarındaki PvP Puanı ödülleri artırıldı.", desc: "Her maçın emeğe değmesi için PvP Puanı ödülleri 4 katına çıkarıldı." },
                            { title: "Olimpiyat Sikkesi (Olympic Coin) Marketindeki eşyaların fiyatları hafifçe düşürüldü.", desc: "Tera fiyatı 2000'den 700'e düşürüldü ve diğer birçok malzemenin maliyeti yarı yarıya azaltıldı." },
                            { title: "Seviye 75 ve altı ekipmanların NPC'ye satış fiyatları düşürüldü.", desc: "Erken-orta oyun ekonomisini dengede tutmak için bu eşyaların NPC satış fiyatlarını yarı yarıya düşürdük." },
                            { title: "Gümüş Şans Çarklarından elde edilen Tera Koruması artık takas edilemez.", desc: "Belirli yüksek değerli ödüllerin ticaretini kısıtlayarak, istenmeyen piyasa faaliyetlerini azaltmayı hedefliyoruz." },
                            { title: "Klan Altın yatırma kısıtlamaları uygulandı.", desc: "Klan üyeleri artık klan deposuna yalnızca klanın kuruluşunun üzerinden en az 5 gün geçmişse ve klan 2. seviyenin üzerindeyse Altın yatırabilir." },
                            { title: "Klan liderlerinin unvanlarına bir taç göstergesi eklendi.", desc: "Klan liderliğinin anında fark edilebilmesi için bir taç göstergesi ekledik." },
                            { title: "Merkez Market limitleri artırıldı.", desc: "Malzemeler için satın alma limiti ve alım emirleri limiti 999'dan 1000'e çıkarıldı." },
                            { title: "Referans ID giriş alanı için karakter sınırı artırıldı.", desc: "Yeni oyuncular için daha uzun referans takma adlarını desteklemek amacıyla sınırı genişlettik." },
                            { title: "Çevirilerdeki çeşitli yazım hataları düzeltildi.", desc: "Oyun genelindeki çeviri sorunlarını ve yazım hatalarını düzelttik." },
                            { title: "Mağazaya yeni bir kostüm çarkı eklendi.", desc: "Yeni görünümler, yeni stiller, aynı çark deneyimi." }
                        ]
                    }
                ]
            }
        }
    },
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
