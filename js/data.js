/* ============================================
   syn. — Drink Data & Ingredient Stories
   ============================================ */

const DRINKS = [
    {
        id: 'laal',
        number: '01',
        name: 'Elle',
        color: '#C2453D',
        textOnHero: '#FFFFFF',
        gems: 'Red · Ruby · Manik',
        tagline: 'Sindoor. Kumkum. The vermillion of Holi.',
        description: 'Sindoor. Kumkum. The vermillion of Holi. Roselle — Gongura, the sour queen of Andhra — gives Elle its deep cranberry and its iron-rich character.',
        ingredientList: 'Roselle · Amla · Ginger · Himalayan Salt',
        celebratory: false,
        ingredients: [
            {
                name: 'Roselle',
                story: 'Called Gongura in Telugu — the sour queen of Andhra cuisine. NRIs list it among the top three things they miss about home. The Charaka Samhita classifies it as Balya (strength-giving) and Raktaprasadana (blood-purifying). The same flower is Bissap in Senegal — the national drink of West Africa. One flower, multiple civilizations.',
                flavor: 'Intensely tart — cranberry with a floral edge',
                science: 'Anthocyanins reduce systolic blood pressure as effectively as captopril (2010 RCT, Journal of Ethnopharmacology)'
            },
            {
                name: 'Amla',
                story: 'The Charaka Samhita singles out amla above all medicinal fruits — "Among all rasayanas, Amalaki is the best." The Padma Purana: Lord Vishnu resides in the amla tree. Worshipped on Amalaki Ekadashi. The soul of Chyawanprash for 2,000 years.',
                flavor: 'Sour, astringent, then a sweet cooling aftertaste 20 seconds later — no other fruit does this',
                science: '600mg Vitamin C per 100g — 20× an orange. Vitamin C bound to tannins, survives processing unlike synthetic ascorbic acid.'
            },
            {
                name: 'Fresh Ginger',
                story: 'Sanskrit: Vishwabhesaj — the Universal Medicine. All three foundational Ayurvedic texts list it as essential. Traded from Malabar to Rome in gold (Tamil Sangam literature, 200 BCE). India produces 40% of global supply.',
                flavor: 'Warm, sharp, clean heat',
                science: 'Gingerol inhibits COX-1 and COX-2 — same anti-inflammatory pathways as ibuprofen, without gastric side effects.'
            }
        ]
    },
    {
        id: 'neela',
        number: '02',
        name: 'Ternate',
        color: '#4A7FA8',
        textOnHero: '#FFFFFF',
        gems: 'Blue · Sapphire · Neelam',
        tagline: 'Aparajita means the unconquered — Durga\'s epithet.',
        description: 'Aparajita means the unconquered — Durga\'s epithet. Butterfly pea flower, a Medhya Rasayana for 3,000 years, contains anthocyanins that cross the blood-brain barrier.',
        ingredientList: 'Butterfly Pea · Blue Spirulina · Tulsi · Lemon',
        celebratory: false,
        ingredients: [
            {
                name: 'Butterfly Pea',
                story: 'Aparajita — named for Durga\'s invincibility. One of four Medhya Rasayanas in Charaka Samhita. Served in Thai royal courts for centuries as Nam Dok Anchan. The anthocyanins cross the blood-brain barrier — rare in plant medicine.',
                flavor: 'Mild, woody, earthy-floral',
                science: 'Delphinidin-3,5-glucoside crosses blood-brain barrier (confirmed). Anti-anxiety, neuroprotective.'
            },
            {
                name: 'Tulsi',
                story: 'The most sacred plant in Hinduism — worshipped as Lakshmi. The Atharva Veda (1200 BCE) references it. Tulsi Vivah — her annual marriage to Vishnu — performed in homes across India. Present at every Hindu birth and death.',
                flavor: 'Clove-like, peppery, warm',
                science: 'Classified adaptogen — RCT shows cortisol and anxiety reduction equal to pharmaceutical anxiolytics.'
            },
            {
                name: 'Blue Spirulina',
                story: 'Parry Nutraceuticals in Chennai — part of the 125-year-old Murugappa Group — is one of the world\'s first commercial spirulina producers. Indian-grown, world-exported. The Aztecs called it Tecuitlatl. India grows it for the world.',
                flavor: 'At 0.3g: zero taste',
                science: 'Phycocyanin — potent antioxidant. Highest ORAC values in plant kingdom.'
            }
        ]
    },
    {
        id: 'sona',
        number: '03',
        name: 'Gold',
        color: '#D4A832',
        textOnHero: '#1A1612',
        gems: 'Gold · Topaz · Pukhraj · Celebratory Trio',
        tagline: 'The color of Lakshmi\'s sari.',
        description: 'The color of Lakshmi\'s sari, the haldi at every wedding. Lemongrass, bone dry and citrus-floral, is the champagne you drink every day and every occasion.',
        ingredientList: 'Lemongrass · Turmeric (micro) · Bromelain · Lime Zest',
        celebratory: true,
        ingredients: [
            {
                name: 'Lemongrass',
                story: 'Bhustrina in Ayurveda — digestive stimulant, carminative, fever-reducing. India produces the world\'s largest essential oil supply. Used in Kerala Ayurvedic massage, temple incense, South Indian cooking. Cold-infused only — heat destroys the champagne effect.',
                flavor: 'Dry, citrus-floral, lifting',
                science: 'Citral — anti-anxiety (comparable to diazepam in animal models), antimicrobial.'
            },
            {
                name: 'Turmeric (micro)',
                story: 'Haridra — the golden one. The haldi ceremony before every Hindu wedding. Atharvaveda (1500 BCE). Erode, Tamil Nadu — the Yellow City, world\'s largest turmeric trading center. In Gold at micro-dose: color only, not flavor.',
                flavor: 'Color only — pale gold (#D4A832)',
                science: '3,000+ curcumin studies. Inhibits NF-kB, master inflammatory regulator.'
            },
            {
                name: 'Bromelain',
                story: 'Used in folk medicine across South and Southeast Asia for centuries as digestive and wound healer. Heat-sensitive — must be cold-processed. In Gold: barely-there tropical softness that rounds the dryness without sweetening.',
                flavor: 'Softness without sweetness',
                science: 'Proteolytic enzyme — digests proteins, reduces inflammation, prescribed post-surgery in European clinical practice.'
            }
        ]
    },
    {
        id: 'hara',
        number: '04',
        name: 'Sage',
        color: '#4A7A4E',
        textOnHero: '#FFFFFF',
        gems: 'Green · Emerald · Panna',
        tagline: 'The drumstick in sambar. The Murungai leaf in Tamil dal.',
        description: 'The drumstick in sambar. The Murungai leaf in Tamil dal. Moringa — 92 nutrients, complete plant protein — is what the WHO calls a food security intervention. Tamil Nadu calls it lunch.',
        ingredientList: 'Moringa · Spirulina · Spearmint · Lime',
        celebratory: false,
        ingredients: [
            {
                name: 'Moringa',
                story: 'Shigru — arrow swift — in Sanskrit. The Sushruta Samhita (600 BCE) lists it for the broadest range of applications. Tamil Sangam literature (200 BCE) documents it. The drumstick in sambar. The WHO calls it a food security intervention. Tamil Nadu calls it lunch.',
                flavor: 'Mildly grassy, earthy, clean',
                science: '92 nutrients, all 9 essential amino acids, 7× Vitamin C of oranges, WHO-recommended.'
            },
            {
                name: 'Spirulina (whole green)',
                story: 'Parry Nutraceuticals, Chennai — Tamil Nadu\'s most extraordinary nutritional export. The Aztecs called it Tecuitlatl. Lake Chad\'s Kanembu people have eaten Dihé for generations. 60-70% protein by weight.',
                flavor: 'Fully masked by lime and mint',
                science: 'Complete B vitamin complex including B12. Highest protein density per gram of any food.'
            }
        ]
    },
    {
        id: 'narangi',
        number: '05',
        name: 'Tsetal',
        color: '#D4723A',
        textOnHero: '#FFFFFF',
        gems: 'Orange · Amber · Gomed',
        tagline: '11,000 feet in the Indus valley.',
        description: '11,000 feet in the Indus valley. Where nothing grows, sea buckthorn does. The Indian Army planted it. The Tibetan Gyushi prescribed it in the 12th century.',
        ingredientList: 'Sea Buckthorn · Amla · Orange Peel',
        celebratory: false,
        ingredients: [
            {
                name: 'Sea Buckthorn',
                story: 'Tsetal in Ladakhi. Chharma in Tibetan — prescribed in the Gyushi (12th century) for cardiac and respiratory conditions. DRDO discovered it in the 1980s as a high-altitude food security crop. LAHDC-certified farmers at 11,000 feet.',
                flavor: 'Intensely tart — concentrated orange-mango-passionfruit with oily richness',
                science: '190+ bioactive compounds. Vitamin C rivaling amla. Rare plant source of Omega-7 (palmitoleic acid).'
            }
        ]
    },
    {
        id: 'gulaabi',
        number: '06',
        name: 'Rose',
        color: '#D4899A',
        textOnHero: '#FFFFFF',
        gems: 'Pink · Rose Quartz · Celebratory Trio',
        tagline: 'Gulal in the air. The sky above the Ganga at first light.',
        description: 'Gulal in the air. The sky above the Ganga at first light. Kannauj rose water — 400 years of Mughal attar — with Bihar\'s Shahi lychee. The rosé champagne India never made.',
        ingredientList: 'Roselle (light) · Kannauj Rose · Lychee · Cardamom',
        celebratory: true,
        ingredients: [
            {
                name: 'Kannauj Rose Water',
                story: '400 years of Mughal attar making. Copper degs unchanged since Akbar\'s court. Nur Jahan\'s rose water discovery (Mughal chronicles). Gulab Jal in gulab jamun, lassi, kheer for centuries. Unani Hridya — cardiac tonic. French perfumers source from here.',
                flavor: 'Intensely floral, delicate, faint waxy complexity',
                science: 'Quercetin and kaempferol — antioxidants. Anxiolytic: rose scent reduces cortisol (documented studies).'
            },
            {
                name: 'Lychee (Shahi)',
                story: 'Muzaffarpur\'s Shahi Lychee — GI protected. Two weeks in June, then gone. Emperor Xuanzong sent 500 horses across China to deliver lychees to Yang Guifei. The geraniol and nerol that make lychee taste like champagne are the same molecules in Kannauj roses.',
                flavor: 'Floral-sweet, muscat-like, champagne-adjacent',
                science: 'Geraniol and nerol — same champagne-aroma compounds as in Rosa damascena and Chardonnay grapes.'
            },
            {
                name: 'Hibiscus Vinegar',
                story: 'Made in-house by fermenting roselle concentrate with live mother culture for 3–4 weeks. At 3ml per can: wine-like tartness, not vinegar. The Poppi mechanism — functional acid that changes glycemic behavior and adds complexity unavailable from flavor alone.',
                flavor: 'Wine-like dryness',
                science: 'GI support, deepens anthocyanin content, proprietary.'
            }
        ]
    },
    {
        id: 'baingani',
        number: '07',
        name: 'Soma',
        color: '#6B5490',
        textOnHero: '#FFFFFF',
        gems: 'Purple · Amethyst · Jamunia',
        tagline: 'Jamun from the Ramayana\'s forests.',
        description: 'Jamun from the Ramayana\'s forests. Kokum from the Konkan coast. Kala namak from Himalayan volcanic deposits. The most Indian soda ever made.',
        ingredientList: 'Jamun · Kokum · Tulsi · Black Salt · Cumin · Ashwagandha',
        celebratory: false,
        ingredients: [
            {
                name: 'Jamun',
                story: 'The Valmiki Ramayana (500 BCE) — Rama gathers jamun in the Dandakaranya forest during exile. Bhagavata Purana — Krishna\'s Vrindavan shaded by jamun trees. Charaka Samhita prescribes the seeds for Madhumeha (diabetes) 2,000 years before jamboline was isolated.',
                flavor: 'Deep, astringent, tannic — dark plum + blackberry with a purple stain',
                science: 'GI: 25. Jamboline and jambosine inhibit starch-to-glucose enzyme. Anti-cancer ellagic acid.'
            },
            {
                name: 'Kokum',
                story: 'Endemic to the Konkan coast — grows nowhere else on earth at commercial scale. Ashtanga Hridayam (7th century) — prescribed for nausea, thirst, loss of appetite. Sol Kadhi at every Malvani meal. The souring agent of an entire coastal civilization.',
                flavor: 'Deep, wine-like sourness, slightly sweet when dried',
                science: 'Hydroxycitric acid (HCA). Garcinol — anti-cancer compound. Cooling Sheetaveerya potency.'
            },
            {
                name: 'Kala Namak',
                story: 'Vida Lavana in Charaka Samhita — digestive stimulant, carminative. Mined from Himalayan volcanic deposits, heated in sealed kilns with harad seeds for 24 hours — unchanged for centuries. The salt of chaat, jaljeera, pani puri.',
                flavor: 'Sulfuric, eggy, the most Indian flavor in existence. At 0.4g exactly: the signature note.',
                science: ''
            },
            {
                name: 'Ashwagandha KSM-66',
                story: 'Charaka Samhita: "the strength of a horse, fertility of the earth, longevity of the mountains." All three foundational Ayurvedic texts. KSM-66 by Ixoreal Biomed, Hyderabad — 22 published gold-standard RCTs.',
                flavor: '',
                science: 'Cortisol -27.9%, VO2 max improved, anxiety reduced — most evidence-backed adaptogen in the world.'
            }
        ]
    },
    {
        id: 'mitti',
        number: '08',
        name: 'Ahga',
        color: '#8A6E5A',
        textOnHero: '#FFFFFF',
        gems: 'Brown · Smoky Quartz · Sphatik',
        tagline: 'South Indian filter coffee\'s best-kept secret is chicory.',
        description: 'South Indian filter coffee\'s best-kept secret is chicory. Ahga takes that 200-year tradition, adds Ashwagandha KSM-66 and Chaga from Tibetan mountain medicine. Zero caffeine.',
        ingredientList: 'Roasted Chicory · Ashwagandha · Chaga · Ceylon Cinnamon',
        celebratory: false,
        ingredients: [
            {
                name: 'Roasted Chicory',
                story: 'Ibn Sina\'s Canon of Medicine (1025 CE) — the greatest liver tonic in Unani. South Indian filter coffee has contained chicory since the British colonial era — the substitution became the tradition. Brahmin\'s Coffee Bar, Kumbakonam degree coffee. Maillard compounds: same chemistry as coffee. Zero caffeine.',
                flavor: 'Deep, roasty, coffee-like with caramel undertones',
                science: 'Prebiotic fiber. Liver-protective. Anti-inflammatory.'
            },
            {
                name: 'Chaga',
                story: 'Grows on birch trees as a dark, cracked mass. Inside: deep orange-rust betulinic acid. Siberian folk medicine — 400+ years. Polish chronicle 16th century — cancer treatment. Tibetan Gyushi — medicinal mushrooms for longevity. Highest ORAC antioxidant score of any natural substance.',
                flavor: 'Earthy, slightly vanilla-like, woody',
                science: 'Betulinic acid — anti-tumour. Beta-glucans — immune modulation.'
            },
            {
                name: 'Ceylon Cinnamon',
                story: '2,500 years of Indian Ocean spice trade. Mughal biryani. Kerala curries. Masala chai. Must be Ceylon — Cassia contains coumarin which is hepatotoxic. Ceylon is both safer and more delicate.',
                flavor: 'Warm, sweet-spicy, citrus-undertoned',
                science: 'Potent insulin sensitizer. Negligible coumarin (unlike Cassia).'
            }
        ]
    },
    {
        id: 'ujla',
        number: '09',
        name: 'Pearl',
        color: '#C8C4BC',
        textOnHero: '#1A1612',
        gems: 'Pearl · Moti · Celebratory Trio',
        tagline: 'Nannari sharbat — sold in Mylapore\'s lanes for centuries.',
        description: 'Nannari sharbat — sold in Mylapore\'s lanes for centuries. Anantamul, the root without end, nine millennia of Tamil Siddha medicine. Nothing anywhere tastes like this.',
        ingredientList: 'Nannari · Coconut Water · White Pepper',
        celebratory: true,
        ingredients: [
            {
                name: 'Nannari',
                story: 'Sanskrit: Anantamul — root without end. Charaka Samhita: Sheetala (cooling), prescribed for Pittaja disorders (fever, burning, thirst). Tamil Siddha medicine — some scholars date to 9,000+ years. Street stalls of old Chennai for centuries. British colonial botanists documented it as "cooling beyond what temperature can explain."',
                flavor: 'Vanilla-like but earthier. Cooling in a way that defies temperature. The most original flavor in global beverages.',
                science: 'Saponins — reduce LDL, immune modulation. Thermoregulatory cooling effect documented.'
            },
            {
                name: 'Coconut Water',
                story: 'Kalpa Vriksha — wish-fulfilling tree — in Sanskrit. Atharvaveda, Rigveda, Ramayana. During WWII Pacific theater, British and Japanese field surgeons used coconut water as emergency IV fluid substitute when saline ran out. Naturally isotonic — identical electrolyte profile to blood plasma.',
                flavor: 'Clean, faintly sweet, almost neutral — perfect carrier for nannari',
                science: '600mg potassium per cup. Rehydrates at cellular level. The original electrolyte drink.'
            }
        ]
    }
];

const SOURCING_DATA = [
    {
        name: 'Raw Sugarcane',
        region: 'UP · Maharashtra · Karnataka',
        text: 'Cold-pressed, unrefined — from jaggery cooperatives in Kolhapur and Mandya. Not sugar, not jaggery. The juice, with its trace minerals intact. The Arthashastra called it Ikshu. We call it the first ingredient on the label.'
    },
    {
        name: 'Chicory Root Inulin',
        region: 'Madhya Pradesh · Belgium (clinical grade)',
        text: 'Ibn Sina\'s greatest liver medicine. South Indian filter coffee\'s secret for 200 years. 1.5g per can. Root fiber. No jargon needed.'
    },
    {
        name: 'Roselle (Elle)',
        region: 'Maharashtra · Tamil Nadu',
        text: 'Dried calyces from Nashik and Coimbatore. Cold-steeped 12 hours, concentrated 40%. The same flower is Gongura in Andhra, Mathipuli in Kerala, Bissap in Senegal.'
    },
    {
        name: 'Amla (Elle, Tsetal)',
        region: 'Pratapgarh, UP',
        text: 'Cold-pressed during the November–January harvest. The Amla festival — when farmers perform puja before harvest begins — is when we time our order. 150,000 tonnes from one district.'
    },
    {
        name: 'Sea Buckthorn (Tsetal)',
        region: 'Ladakh · LAHDC certified',
        text: 'LAHDC-certified farmers in the Indus valley at 11,000 feet. Every Tsetal can sold puts money in Ladakh. The Tibetan Gyushi prescribed it. The Indian Army planted it.'
    },
    {
        name: 'Butterfly Pea (Ternate)',
        region: 'Kerala · Tamil Nadu · Assam',
        text: 'Dried flowers, steeped at 60°C — never boiled. The Charaka Samhita\'s Medhya Rasayana. The flower that crosses the blood-brain barrier.'
    },
    {
        name: 'Jamun (Soma, Rose)',
        region: 'UP · MP · June–July only',
        text: 'Three weeks in season. Cold-press, freeze immediately. The Ramayana\'s forest fruit. Prescribed for diabetes 2,000 years before jamboline was isolated.'
    },
    {
        name: 'Kokum (Soma)',
        region: 'Sindhudurg · Konkan coast',
        text: 'Sun-dried rind from Sindhudurg farmer groups. The souring agent of an entire coastal civilization. Grows nowhere else on earth at commercial scale.'
    },
    {
        name: 'Rose Water (Rose)',
        region: 'Kannauj, UP · 400 years',
        text: 'Food-grade distilled from Kannauj attar makers — copper degs unchanged since the Mughal era. Not synthetic. Never. Kannauj or nothing.'
    },
    {
        name: 'Lychee (Rose)',
        region: 'Muzaffarpur, Bihar · GI certified',
        text: 'Shahi Lychee, GI protected. Two weeks in June. The same geraniol and nerol molecules that make lychee taste like champagne are in the Kannauj roses. Chemistry, not coincidence.'
    },
    {
        name: 'Nannari (Pearl)',
        region: 'Tamil Nadu · Kerala forests',
        text: 'Dried root from Siddha herb suppliers in Chennai. Made into syrup in-house — boiled, double-strained through muslin, reduced. The proprietary nannari syrup cannot be outsourced at the quality Pearl demands.'
    },
    {
        name: 'Ashwagandha KSM-66',
        region: 'Rajasthan · Ixoreal Biomed, Hyderabad',
        text: 'The patented extract — the only ashwagandha with 22 published RCTs. Indian herb, Indian science, global validation. KSM-66 or nothing.'
    }
];
