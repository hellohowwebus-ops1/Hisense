import json, re

with open('src/data/mockData.ts') as f:
    orig = f.read()

idx_prod = orig.find('export const PRODUCTS: Product[] = [')
idx_post = orig.find('export const BRAND_POSTS')

header = orig[:idx_prod]
footer = orig[idx_post:]

# Extract existing surgical items
prod_block = orig[idx_prod:idx_post].strip()
prod_json_str = prod_block.replace('export const PRODUCTS: Product[] = ', '')
if prod_json_str.endswith(';'):
    prod_json_str = prod_json_str[:-1]

existing_products = json.loads(prod_json_str)
print(f'Parsed {len(existing_products)} existing products')

# Update all existing products to category 'surgical-instruments'
for p in existing_products:
    p['category'] = 'surgical-instruments'
    p['downloadPath'] = '/downloads/Hisense-Surgical-Instruments.zip'

# Dental products
dental_products = [
    {
        'id': 'hisense-2001',
        'articleNo': 'Hisense 2001',
        'name': 'Hisense 2001 · Dental Extraction Forceps Upper Anteriors (Fig. 1)',
        'category': 'dental-instruments',
        'subcategory': 'Extraction Forceps',
        'length': '17.0 cm',
        'shortDesc': 'Straight beak extraction forceps designed for upper central incisors and canines with deep-grooved tactile grip.',
        'fullDesc': 'Manufactured by Hisense International from medical-grade AISI 410 stainless steel. Compliant with ISO 13485 and ISO 7153-1 dental instrument standards. Features precision anatomically contoured beaks that conform directly to the cervical tooth curvature, eliminating coronal fracture risks during tooth elevation. Autoclavable up to 134°C with satin anti-glare finish.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2001'},
            {'label': 'Pattern', 'value': 'English Pattern Fig. 1'},
            {'label': 'Indication', 'value': 'Upper Central & Lateral Incisors, Canines'},
            {'label': 'Length', 'value': '17.0 cm (6.7 inches)'},
            {'label': 'Material', 'value': 'Surgical Martensitic Stainless Steel AISI 410'},
            {'label': 'Hinge Type', 'value': 'Teflon-bushed smooth glide screw joint'},
            {'label': 'Autoclave Cycle', 'value': '134°C (273°F) at 2.2 bar pressure'}
        ],
        'features': [
            'Precision anatomically contoured beaks conforming to cervical crown',
            'Cross-hatched tactile knurling ensuring wet-glove slip prevention',
            'Passivated anti-oxidation finish resisting saliva corrosion',
            'Laser-etched DRAP batch trace and ISO 13485 identifier'
        ],
        'certifications': ['ISO 13485:2016 Certified', 'ISO 7153-1 Dental Grade', 'CE Medical Device Class I', 'DRAP Registered'],
        'inStock': True,
        'leadTime': 'Immediate (In Stock Lahore Hub)',
        'image': '/assets/images/products/dental-instruments/hisense-2001.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Dental Surgery'
    },
    {
        'id': 'hisense-2002',
        'articleNo': 'Hisense 2002',
        'name': 'Hisense 2002 · Dental Extraction Forceps Upper Premolars (Fig. 7)',
        'category': 'dental-instruments',
        'subcategory': 'Extraction Forceps',
        'length': '16.5 cm',
        'shortDesc': 'S-curved extraction forceps engineered for upper premolars and bicuspids with non-slip cross-serrations.',
        'fullDesc': 'Ergonomically engineered for atraumatic extraction of maxillary premolars. The gentle S-curve shank allows clearance of the lower lip while transmitting controlled axial luxation force directly to the periodontal ligament.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2002'},
            {'label': 'Pattern', 'value': 'English Pattern Fig. 7'},
            {'label': 'Indication', 'value': 'Maxillary First & Second Premolars'},
            {'label': 'Length', 'value': '16.5 cm'},
            {'label': 'Material', 'value': 'AISI 410 Surgical Stainless Steel'}
        ],
        'features': [
            'S-curved bayonet shank ensuring unobstructed sightline',
            'Convex outer beak geometry minimizing soft tissue impingement',
            'Satin matte electro-polish resisting glare under operatory LED lights'
        ],
        'certifications': ['ISO 13485:2016 Certified', 'CE Medical Device Class I', 'DRAP Registered'],
        'inStock': True,
        'leadTime': 'Immediate (24-48 hrs Nationwide)',
        'image': '/assets/images/products/dental-instruments/hisense-2002.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Dental Surgery'
    },
    {
        'id': 'hisense-2003',
        'articleNo': 'Hisense 2003',
        'name': 'Hisense 2003 · Lower Molar Cowhorn Extraction Forceps (Fig. 22)',
        'category': 'dental-instruments',
        'subcategory': 'Extraction Forceps',
        'length': '17.0 cm',
        'shortDesc': 'Pointed dual-tapered cowhorn beaks designed to engage the mandibular molar root bifurcation.',
        'fullDesc': 'Heavy-duty surgical extraction forceps for lower first and second molars. The sharp conical beaks squeeze deep into the root bifurcation, using wedging action to luxate and elevate submerged or broken-down molar roots cleanly without root fracture.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2003'},
            {'label': 'Pattern', 'value': 'Cowhorn Fig. 22'},
            {'label': 'Indication', 'value': 'Mandibular Molars Bifurcation Luxation'},
            {'label': 'Length', 'value': '17.0 cm'},
            {'label': 'Material', 'value': 'Forged Surgical Stainless Steel 410'}
        ],
        'features': [
            'Sharp conical bifurcated wedges for deep subgingival access',
            'Reinforced hinge box capable of sustaining high rotational torque',
            'Heavy-gauge knurled handles providing secure palm leverage'
        ],
        'certifications': ['ISO 13485:2016 Certified', 'DRAP Registered'],
        'inStock': True,
        'leadTime': 'Immediate (In Stock)',
        'image': '/assets/images/products/dental-instruments/hisense-2003.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Oral Surgery'
    },
    {
        'id': 'hisense-2004',
        'articleNo': 'Hisense 2004',
        'name': 'Hisense 2004 · Bein Straight Root Elevator 3.0mm',
        'category': 'dental-instruments',
        'subcategory': 'Root Elevators & Luxators',
        'length': '15.0 cm',
        'shortDesc': 'Straight gouge blade root elevator designed for periodontal ligament severance and socket expansion.',
        'fullDesc': 'Precision dental luxator and root elevator. The 3.0mm concave blade tip enters the periodontal space to expand alveolar bone and luxate tooth roots prior to forceps application, minimizing patient trauma and preserving buccal bone plate.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2004'},
            {'label': 'Tip Width', 'value': '3.0 mm Concave Straight'},
            {'label': 'Handle', 'value': 'Hollow Pear-Shaped Ergonomic Grip'},
            {'label': 'Material', 'value': 'AISI 420 High Carbon Surgical Steel'}
        ],
        'features': [
            'Ultra-thin sharp working tip for atraumatic tooth luxation',
            'Ergonomic hollow handle providing optimal tactile sensitivity',
            'Full passivated corrosion resistance against sterilization autoclave cycles'
        ],
        'certifications': ['ISO 13485:2016 Certified', 'CE Approved'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/dental-instruments/hisense-2004.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Dental Surgery'
    },
    {
        'id': 'hisense-2005',
        'articleNo': 'Hisense 2005',
        'name': 'Hisense 2005 · Cryer Curved Root Elevator (Left & Right)',
        'category': 'dental-instruments',
        'subcategory': 'Root Elevators & Luxators',
        'length': '15.5 cm',
        'shortDesc': 'Triangular flag-tip angled elevator engineered for lifting fractured mandibular molar roots.',
        'fullDesc': 'Designed with a sharp triangular pick head set at an acute angle to the shaft. When rotated within an empty root socket, the elevator bites into the adjacent inter-radicular bone septum and lifts the retained root fragment upwards with minimal effort.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2005'},
            {'label': 'Configuration', 'value': 'Cryer Triangular Pick (Angled)'},
            {'label': 'Material', 'value': 'AISI 420 Martensitic Stainless'}
        ],
        'features': [
            'Sharp triangular claw edge engaging fractured root tips',
            'Rigid heat-treated shaft preventing bending under levering forces'
        ],
        'certifications': ['ISO 13485:2016 Certified', 'DRAP Registered'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/dental-instruments/hisense-2005.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Dental Surgery'
    },
    {
        'id': 'hisense-2006',
        'articleNo': 'Hisense 2006',
        'name': 'Hisense 2006 · Dental Aspirating Cartridge Syringe 1.8ml',
        'category': 'dental-instruments',
        'subcategory': 'Anesthesia & Diagnostic',
        'length': '14.0 cm',
        'shortDesc': 'Breech-loading manual aspirating dental local anesthetic syringe with harpoon plunger and thumb ring.',
        'fullDesc': 'Engineered for smooth aspiration prior to local anesthetic injection. Accepts all standard 1.8ml dental glass cartridges and standard dental threaded needles (Imperial & Metric). Heavy chrome-plated brass and stainless steel construction.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2006'},
            {'label': 'Capacity', 'value': '1.8 ml Standard Dental Cartridge'},
            {'label': 'Aspiration', 'value': 'Harpoon Mechanical Plunger'},
            {'label': 'Thread', 'value': 'M7 & 7/32-40 Thread Adaptable'}
        ],
        'features': [
            'Large ergonomic thumb ring for positive one-handed aspiration',
            'Full side viewing port for instant anesthetic dosage verification',
            'Steam autoclave sterilizable at 134°C'
        ],
        'certifications': ['ISO 13485:2016 Certified', 'CE Medical Class I'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/dental-instruments/hisense-2006.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Dental Operatory'
    },
    {
        'id': 'hisense-2007',
        'articleNo': 'Hisense 2007',
        'name': 'Hisense 2007 · Hylin Wax & Composite Sculpting Carver',
        'category': 'dental-instruments',
        'subcategory': 'Restorative & Lab',
        'length': '17.0 cm',
        'shortDesc': 'Double-ended dental modeling instrument with spoon scooper and lance carver for anatomical restoration.',
        'fullDesc': 'Essential restorative instrument for dental clinics and prosthodontic laboratories. Handcrafted with ultra-sharp margins for carving occlusal fissures, marginal ridges, and interproximal contours in waxes and composite resins.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2007'},
            {'label': 'Ends', 'value': 'Double-Ended (Spoon & Lancet)'},
            {'label': 'Material', 'value': 'Spring Tempered Stainless Steel'}
        ],
        'features': [
            'Non-stick mirror polished tip preventing composite resin pull-back',
            'Balanced hexagonal knurled handle for fingertip stability'
        ],
        'certifications': ['ISO 13485:2016 Certified', 'CE Approved'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/dental-instruments/hisense-2007.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Restorative'
    },
    {
        'id': 'hisense-2008',
        'articleNo': 'Hisense 2008',
        'name': 'Hisense 2008 · Zahle Double-Ended Wax Carver',
        'category': 'dental-instruments',
        'subcategory': 'Restorative & Lab',
        'length': '16.5 cm',
        'shortDesc': 'Dual-function dental laboratory carver featuring knife edge and concave contouring spoon.',
        'fullDesc': 'Classic Zahle instrument for prosthetics, crown & bridge wax-ups, and diagnostic wax mockups. Engineered to deliver sharp, clean margins without chatter marks.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2008'},
            {'label': 'Pattern', 'value': 'Zahle Fig. 1'},
            {'label': 'Material', 'value': 'High-tensile stainless alloy'}
        ],
        'features': [
            'Knife edge for precise marginal line trimming',
            'Contoured teardrop spoon for smooth lingual and buccal anatomy'
        ],
        'certifications': ['ISO 13485:2016 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/dental-instruments/hisense-2008.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Dental Lab'
    },
    {
        'id': 'hisense-2009',
        'articleNo': 'Hisense 2009',
        'name': 'Hisense 2009 · Gritman Dental Plaster & Cement Spatula',
        'category': 'dental-instruments',
        'subcategory': 'Restorative & Lab',
        'length': '18.0 cm',
        'shortDesc': 'Stiff broad stainless steel mixing blade with rosewood or stainless handle for gypsum and alginate.',
        'fullDesc': 'Designed for mixing dental stone, plaster of Paris, and impression materials on glass slabs or in rubber bowls. Rigid blade provides ample spreading power without flexing uncontrollably.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2009'},
            {'label': 'Length', 'value': '18.0 cm'},
            {'label': 'Blade Type', 'value': 'Rigid Tapered Spatula Blade'}
        ],
        'features': [
            'Polished flat working surface preventing alginate entrapment',
            'Easy-clean seamless transition between blade and handle'
        ],
        'certifications': ['ISO 13485:2016 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/dental-instruments/hisense-2009.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Dental Lab'
    },
    {
        'id': 'hisense-2010',
        'articleNo': 'Hisense 2010',
        'name': 'Hisense 2010 · Dental Sickle Scaler & Calculus Remover',
        'category': 'dental-instruments',
        'subcategory': 'Periodontal & Hygiene',
        'length': '16.5 cm',
        'shortDesc': 'Dual-angled supragingival scaling tips designed for anterior and posterior tooth surface cleaning.',
        'fullDesc': 'Periodontal sickle scaler featuring ultra-sharp triangular cross-section cutting edges. Removes tenacious supragingival calculus deposits and extrinsic stains without gouging tooth enamel.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 2010'},
            {'label': 'Tip Pattern', 'value': 'Sickle Scaler H6/H7 Anterior'},
            {'label': 'Blade Steel', 'value': 'Cryogenically Treated High-Carbon Steel'}
        ],
        'features': [
            'Razor-sharp blade retaining edge through repeated autoclaving',
            'Large diameter hollow handle reduces hand fatigue during scaling'
        ],
        'certifications': ['ISO 13485:2016 Certified', 'DRAP Registered'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/dental-instruments/hisense-2010.jpg',
        'downloadPath': '/downloads/Hisense-Dental-Instruments.zip',
        'badge': 'Periodontology'
    }
]

# Beauty & Nail Care products
beauty_products = [
    {
        'id': 'hisense-3001',
        'articleNo': 'Hisense 3001',
        'name': 'Hisense 3001 · Professional Corner Nail Nipper Straight Jaw (12.5 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Nail & Cuticle Nippers',
        'length': '12.5 cm',
        'shortDesc': 'Straight pointed cutting jaw designed for precise trimming of ingrown and lateral toenail edges.',
        'fullDesc': 'Handcrafted by Hisense International from premium hot-forged AISI 420 stainless steel with Rockwell hardness 50-52 HRC. Specially designed for podiatry and professional pedicure clinics. The straight, slim cutting jaw reaches cleanly into lateral nail folds to trim stubborn ingrown corners without crushing or splintering the nail plate.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3001'},
            {'label': 'Jaw Style', 'value': '14mm Slim Straight Cutting Jaw'},
            {'label': 'Joint Type', 'value': 'Precision Lap Joint with Brass Bushing'},
            {'label': 'Spring Mechanism', 'value': 'Double Leaf Spring for Responsive Action'},
            {'label': 'Steel Grade', 'value': 'AISI 420 High-Carbon Martensitic Stainless'},
            {'label': 'Finish', 'value': 'Smooth Satin Matte Anti-Reflective'}
        ],
        'features': [
            'Hand-honed cutting edges tested on calibrated test foil',
            'Slim pointed tip for painless deep lateral sulcus access',
            'Full resistance to alcohol disinfection and autoclave cycles',
            'Ergonomic grooved handles for comfortable all-day salon use'
        ],
        'certifications': ['ISO 9001:2015 Quality Management', 'CE Compliant', 'Anti-Corrosion Passivated'],
        'inStock': True,
        'leadTime': 'Immediate (In Stock Lahore)',
        'image': '/assets/images/products/beauty-nail-care/hisense-3001.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Podiatry Grade'
    },
    {
        'id': 'hisense-3002',
        'articleNo': 'Hisense 3002',
        'name': 'Hisense 3002 · Heavy-Duty Pedicure Barrel Spring Corner Nipper (14 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Nail & Cuticle Nippers',
        'length': '14.0 cm',
        'shortDesc': 'Heavy-duty barrel spring toenail clipper engineered for thickened fungal and dystrophic nails.',
        'fullDesc': 'Engineered for maximum cutting leverage. The integrated heavy barrel spring and ergonomic curved handles transfer high crushing power with minimal palm fatigue, cleanly slicing through thick or hardened toenails without snagging.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3002'},
            {'label': 'Jaw Style', 'value': '16mm Straight Heavy Beak'},
            {'label': 'Spring', 'value': 'Cylindrical Barrel Spring with Safety Latch'},
            {'label': 'Length', 'value': '14.0 cm (5.5 inches)'}
        ],
        'features': [
            'High mechanical advantage lever arms for effortless cutting',
            'Locking safety clasp for safe storage in instrument trays',
            'Corrosion-resistant medical stainless alloy'
        ],
        'certifications': ['ISO 9001:2015 Certified', 'CE Approved'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/beauty-nail-care/hisense-3002.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Heavy Duty'
    },
    {
        'id': 'hisense-3003',
        'articleNo': 'Hisense 3003',
        'name': 'Hisense 3003 · Precision Cuticle Nipper Quarter Jaw (10 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Nail & Cuticle Nippers',
        'length': '10.0 cm',
        'shortDesc': 'Micro 4mm quarter jaw nipper engineered for delicate eponychium and dead cuticle trimming.',
        'fullDesc': 'The gold standard for manicure technicians. Ultra-fine micro-ground cutting blades close perfectly together from tip to heel with uniform pressure, trimming dead cuticle skin seamlessly without pulling or tearing live tissue.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3003'},
            {'label': 'Jaw Size', 'value': 'Quarter Jaw (4.0 mm)'},
            {'label': 'Spring', 'value': 'Double Spring Action'},
            {'label': 'Finish', 'value': 'Fine Satin Brushed Steel'}
        ],
        'features': [
            'Micro-pointed tips allowing millimeter-accurate cuticle trimming',
            'Smooth frictionless pivot movement reducing wrist tension',
            'Hand-aligned under 10x magnification'
        ],
        'certifications': ['ISO 9001:2015 Certified', 'Salon Grade Spec'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/beauty-nail-care/hisense-3003.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Salon Precision'
    },
    {
        'id': 'hisense-3004',
        'articleNo': 'Hisense 3004',
        'name': 'Hisense 3004 · Half Jaw Cuticle Nipper Double Spring (10.5 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Nail & Cuticle Nippers',
        'length': '10.5 cm',
        'shortDesc': 'Versatile 6mm half jaw cuticle nipper for rapid cuticle cleanup and hangnail removal.',
        'fullDesc': 'Designed with medium-length cutting blades that offer an optimal compromise between speed and micro-detail, perfect for busy high-end salons and spas.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3004'},
            {'label': 'Jaw Size', 'value': 'Half Jaw (6.0 mm)'},
            {'label': 'Spring', 'value': 'Double Leaf Spring'}
        ],
        'features': [
            'Precision ground cutting bevels for burr-free cuts',
            'Full stainless steel body suitable for liquid sterilants and autoclaves'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/beauty-nail-care/hisense-3004.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Salon Precision'
    },
    {
        'id': 'hisense-3005',
        'articleNo': 'Hisense 3005',
        'name': 'Hisense 3005 · Extra-Fine Curved Cuticle Scissors Tower Point (9.5 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Manicure & Pedicure Scissors',
        'length': '9.5 cm',
        'shortDesc': 'Needle-thin tower point curved scissor blades for ultra-precise Russian manicure cuticle trimming.',
        'fullDesc': 'Specially designed for the popular Russian dry manicure technique. The extra-thin, sharply curved blades follow the natural curve of the nail matrix with microscopic accuracy, snipping the cuticle band in one continuous smooth pass.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3005'},
            {'label': 'Blade Type', 'value': 'Curved Tower Point (Needle Fine)'},
            {'label': 'Length', 'value': '9.5 cm (3.75 inches)'},
            {'label': 'Steel Grade', 'value': 'Hardened Stainless Steel AISI 420'}
        ],
        'features': [
            'Micro-thin blade profile preventing accidental skin nicks',
            'Torx screw pivot allowing custom tension calibration',
            'Flawlessly sharp tips aligned by master sharpeners'
        ],
        'certifications': ['ISO 9001:2015 Certified', 'CE Approved'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/beauty-nail-care/hisense-3005.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Russian Manicure'
    },
    {
        'id': 'hisense-3006',
        'articleNo': 'Hisense 3006',
        'name': 'Hisense 3006 · Stainless Cuticle & Nail Scissors Arrow Point (9.5 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Manicure & Pedicure Scissors',
        'length': '9.5 cm',
        'shortDesc': 'Arrow point curved manicure scissors with reinforced cutting edge for fingernails and cuticles.',
        'fullDesc': 'Versatile grooming scissors with sharp arrow point tips and wide ergonomic finger rings. Polished blades provide crisp, clean cuts on both delicate skin and natural fingernails.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3006'},
            {'label': 'Length', 'value': '9.5 cm'},
            {'label': 'Blade Profile', 'value': 'Curved Arrow Point'}
        ],
        'features': [
            'Precision ground edges maintaining sharpness for 5,000+ cuts',
            'Comfort finger rings reducing pressure points on thumb and index finger'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/beauty-nail-care/hisense-3006.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Beauty Pro'
    },
    {
        'id': 'hisense-3007',
        'articleNo': 'Hisense 3007',
        'name': 'Hisense 3007 · Podiatry Heavy Nail Pliers & Cantilever Cutter (13 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Podiatry & Nail Pliers',
        'length': '13.0 cm',
        'shortDesc': 'Cantilever high-leverage nail cutting pliers with safety latch for orthopedic foot care.',
        'fullDesc': 'Heavy-duty plier-type nail cutter engineered for podiatrists and foot health practitioners. The double-action compound leverage hinge triples the cutting force applied by the hand, slicing through severe onychogryphosis or fungal nails effortlessly.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3007'},
            {'label': 'Hinge Action', 'value': 'Compound Double Action Lever'},
            {'label': 'Length', 'value': '13.0 cm'},
            {'label': 'Safety Catch', 'value': 'Bottom Wire Ring Catch'}
        ],
        'features': [
            'Compound leverage generating 300% more cutting torque',
            'Thick hardened stainless jaws that will not flex under extreme load'
        ],
        'certifications': ['ISO 9001:2015 Certified', 'Podiatry Grade'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/beauty-nail-care/hisense-3007.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Podiatry Grade'
    },
    {
        'id': 'hisense-3008',
        'articleNo': 'Hisense 3008',
        'name': 'Hisense 3008 · Acrylic Nail Tip & Wire Header Cutter (11.5 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Acrylic & Tip Cutters',
        'length': '11.5 cm',
        'shortDesc': 'Flush cutting pliers engineered for trimming artificial acrylic tips, fiberglass wraps and nail art wire.',
        'fullDesc': 'Essential nail technician tool featuring perfectly flat flush cutting jaws that slice cleanly through artificial acrylic nail extensions and metal nail art wires without leaving jagged edges or burrs.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3008'},
            {'label': 'Jaw Geometry', 'value': 'Full Flush Cut (Zero Bevel)'},
            {'label': 'Length', 'value': '11.5 cm'}
        ],
        'features': [
            'Flush cutting surface preventing acrylic edge cracking',
            'Internal spring return for fast repetitive trimming'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/beauty-nail-care/hisense-3008.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Salon Nail Tech'
    },
    {
        'id': 'hisense-3009',
        'articleNo': 'Hisense 3009',
        'name': 'Hisense 3009 · Podiatry Moon-Blade Curved Toenail Nipper (13.5 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Nail & Cuticle Nippers',
        'length': '13.5 cm',
        'shortDesc': 'Concave crescent moon blade conforming naturally to human toenail contour for neat rounding.',
        'fullDesc': 'Concave moon-blade nail nipper specifically shaped to follow the natural arch of adult toenails, ensuring smooth edges that prevent painful shoe impingement.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3009'},
            {'label': 'Blade Shape', 'value': 'Concave Moon Crescent 18mm'},
            {'label': 'Length', 'value': '13.5 cm'}
        ],
        'features': [
            'Follows natural nail curvature preventing jagged edges',
            'Heavy textured handles providing non-slip grip'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/beauty-nail-care/hisense-3009.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Podiatry Pro'
    },
    {
        'id': 'hisense-3010',
        'articleNo': 'Hisense 3010',
        'name': 'Hisense 3010 · Professional Full Jaw Manicure Cuticle Nipper (11 cm)',
        'category': 'beauty-nail-care',
        'subcategory': 'Nail & Cuticle Nippers',
        'length': '11.0 cm',
        'shortDesc': 'Full 8mm jaw cuticle trimmer with double spring for rapid full-hand salon manicure prep.',
        'fullDesc': 'Heavy salon duty cuticle nipper crafted for speed and precision. Ideal for removing overgrown cuticles around large nail beds with fewer strokes.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 3010'},
            {'label': 'Jaw Size', 'value': 'Full Jaw (8.0 mm)'},
            {'label': 'Length', 'value': '11.0 cm'}
        ],
        'features': [
            'Wider cutting span for accelerated salon appointments',
            'Full surgical-grade stainless steel with satin finish'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/beauty-nail-care/hisense-3010.png',
        'downloadPath': '/downloads/Hisense-Beauty-Nail-Care.zip',
        'badge': 'Salon Precision'
    }
]

# Barber and Salon Hair Shears products
barber_products = [
    {
        'id': 'hisense-4001',
        'articleNo': 'Hisense 4001',
        'name': 'Hisense 4001 · Master Shears Titanium Rainbow Hair Cutting Shear (6.0")',
        'category': 'barber-salon-shears',
        'subcategory': 'Professional Hair Cutting Shears',
        'length': '6.0 inches (15.2 cm)',
        'shortDesc': 'Titanium plasma rainbow finished Japanese 440C stainless steel hair shear in custom velvet gift presentation case.',
        'fullDesc': 'The flagship barber and master stylist cutting shear. Handcrafted from premium cryogenic-treated Japanese 440C stainless steel (59-61 HRC) with a striking wear-resistant multi-color rainbow titanium plasma coating. Features razor-sharp convex clam-shell blades, an ultra-smooth gold tension adjustment dial, and an ergonomic semi-offset crane handle with permanent finger rest. Shipped in a luxury red velvet lined presentation box with Master Shears insignia.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4001'},
            {'label': 'Length', 'value': '6.0 inches (15.2 cm)'},
            {'label': 'Steel Type', 'value': 'Japanese 440C High-Carbon Stainless Steel'},
            {'label': 'Hardness', 'value': '59–61 HRC Cryogenically Tempered'},
            {'label': 'Coating', 'value': 'Titanium Plasma Multi-Chromatic PVD Finish'},
            {'label': 'Blade Geometry', 'value': 'Convex Clam-Shell Razor Edge (38° Angle)'},
            {'label': 'Tension System', 'value': 'Micro-Click Ball Bearing Tension Dial in Gold'},
            {'label': 'Handle Style', 'value': 'Ergonomic Crane Offset with Contoured Finger Rest'}
        ],
        'features': [
            'Ultra-sharp convex edges delivering effortless slide cutting and blunt trims',
            'Titanium coating prevents nickel allergy and resists salon chemical styling agents',
            'Ergonomic offset handle reduces carpal tunnel syndrome and shoulder fatigue',
            'Supplied in luxury velvet presentation storage case with cleaning cloth'
        ],
        'certifications': ['Master Shears Benchmark Quality', 'ISO 9001:2015 Certified', 'Japanese Steel Verified'],
        'inStock': True,
        'leadTime': 'Immediate (In Stock Lahore Warehouse)',
        'image': '/assets/images/products/barber-salon-shears/hisense-4001.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Master Shears'
    },
    {
        'id': 'hisense-4002',
        'articleNo': 'Hisense 4002',
        'name': 'Hisense 4002 · Professional Japanese Convex Edge Hair Shear (6.5")',
        'category': 'barber-salon-shears',
        'subcategory': 'Professional Hair Cutting Shears',
        'length': '6.5 inches (16.5 cm)',
        'shortDesc': 'Hand-honed convex razor cutting shears with flat-screw ball bearing pivot and mirror finish.',
        'fullDesc': 'Longer 6.5-inch barber shears designed specifically for scissor-over-comb techniques, precision geometric bobs, and bulk hair removal. The razor-sharp Japanese blade slices wet or dry hair without pushing or bending hair shafts.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4002'},
            {'label': 'Blade Length', 'value': '6.5 inches (16.5 cm)'},
            {'label': 'Steel Type', 'value': 'Forged VG-10 / 440C Alloy'},
            {'label': 'Edge', 'value': 'True Japanese Convex Blade'}
        ],
        'features': [
            'Hollow-ground inner blade face ensuring whisper-quiet cutting glide',
            'Removable blue rubber finger insert sizers included for bespoke finger fit'
        ],
        'certifications': ['ISO 9001:2015 Certified', 'CE Approved'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/barber-salon-shears/hisense-4002.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Barber Pro'
    },
    {
        'id': 'hisense-4003',
        'articleNo': 'Hisense 4003',
        'name': 'Hisense 4003 · Master Shears 30-Tooth Texturizing & Thinning Shear (6.0")',
        'category': 'barber-salon-shears',
        'subcategory': 'Texturizing & Thinning Shears',
        'length': '6.0 inches (15.2 cm)',
        'shortDesc': '30 micro-grooved V-teeth blending shear delivering seamless 25% hair texturizing without visible lines.',
        'fullDesc': 'Engineered to soften blunt lines and remove internal bulk weight seamlessly. Each of the 30 teeth features micro-laser grooving that grips hair strands securely before cutting, preventing snagging or tearing on dry hair.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4003'},
            {'label': 'Tooth Count', 'value': '30 Precision V-Shaped Teeth'},
            {'label': 'Cut Ratio', 'value': '25% - 30% Weight Removal'},
            {'label': 'Length', 'value': '6.0 inches'}
        ],
        'features': [
            'Zero-line blending for seamless fade and layering transitions',
            'Silicone bumper stop providing quiet opening and closing dampening'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/barber-salon-shears/hisense-4003.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Master Shears'
    },
    {
        'id': 'hisense-4004',
        'articleNo': 'Hisense 4004',
        'name': 'Hisense 4004 · Ergonomic Offset Crane Barber Hair Shears (7.0")',
        'category': 'barber-salon-shears',
        'subcategory': 'Professional Hair Cutting Shears',
        'length': '7.0 inches (17.8 cm)',
        'shortDesc': 'Long 7-inch barber cutting shears with drop-handle crane offset for effortless scissor-over-comb fades.',
        'fullDesc': 'The heavyweight champion for professional barbers. The 7.0-inch blade covers large hair sections quickly, making clipper-over-comb and scissor-over-comb tapers faster, straighter, and more uniform.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4004'},
            {'label': 'Length', 'value': '7.0 inches (17.8 cm)'},
            {'label': 'Handle', 'value': 'Full Crane Drop Offset'}
        ],
        'features': [
            'Maximizes cutting surface for fast fade transitions',
            'Keeps elbow low and wrist straight, eliminating chronic barber shoulder strain'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/barber-salon-shears/hisense-4004.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Barber Pro'
    },
    {
        'id': 'hisense-4005',
        'articleNo': 'Hisense 4005',
        'name': 'Hisense 4005 · Master Stylist Shears Set in Wooden Case (6.0")',
        'category': 'barber-salon-shears',
        'subcategory': 'Presentation Shears Sets',
        'length': '6.0 inches (15.2 cm)',
        'shortDesc': 'Complete barber stylist kit in natural wooden glass-lid presentation case with finger sizers & oil pin.',
        'fullDesc': 'Luxury presentation master shears set. Handcrafted polished Japanese steel shear nestled inside a glass-windowed pine wooden display case with brass latch. Includes two blue ergonomic silicone finger sizers and precision needle oil dispenser.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4005'},
            {'label': 'Set Includes', 'value': '6.0\" Shear + Wooden Case + 2x Sizers + Oil Pen'},
            {'label': 'Case Material', 'value': 'Solid Natural Pine with Glass Inspection Lid'}
        ],
        'features': [
            'Premium gift / professional presentation ready',
            'Full service kit with lubricating oil ensuring lifetime smooth glide'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/barber-salon-shears/hisense-4005.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Executive Kit'
    },
    {
        'id': 'hisense-4006',
        'articleNo': 'Hisense 4006',
        'name': 'Hisense 4006 · Professional Barber Cutting & Blending Shears (6.5")',
        'category': 'barber-salon-shears',
        'subcategory': 'Professional Hair Cutting Shears',
        'length': '6.5 inches',
        'shortDesc': 'High-torque sword blade hair cutting shear with leaf spring tension dial for dry and wet hair.',
        'fullDesc': 'Features an elevated sword spine running down the center of the blade to reinforce stiffness, allowing the barber to power through coarse thick hair without blade displacement or hair push.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4006'},
            {'label': 'Blade Geometry', 'value': 'Sword Spine Stiffened Convex Edge'},
            {'label': 'Length', 'value': '6.5 inches'}
        ],
        'features': [
            'Enhanced blade rigidity for powerful dry cutting',
            'Adjustable click leaf spring tension wheel'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/barber-salon-shears/hisense-4006.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Barber Pro'
    },
    {
        'id': 'hisense-4007',
        'articleNo': 'Hisense 4007',
        'name': 'Hisense 4007 · Classic Master Barber Straight Hair Shears (6.0")',
        'category': 'barber-salon-shears',
        'subcategory': 'Professional Hair Cutting Shears',
        'length': '6.0 inches',
        'shortDesc': 'Traditional symmetrical German design hair scissor with micro-fine edge for precision detailing.',
        'fullDesc': 'Clean, classic barber scissors crafted for precision outlining around the ears, sideburn detailing, beard trimming, and traditional geometric sectioning.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4007'},
            {'label': 'Handle', 'value': 'Classic Symmetrical Level Handle'},
            {'label': 'Length', 'value': '6.0 inches'}
        ],
        'features': [
            'Traditional balanced feel preferred by classic grooming barbers',
            'Dual removable finger rests allowing reversible operation'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/barber-salon-shears/hisense-4007.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Classic Barber'
    },
    {
        'id': 'hisense-4008',
        'articleNo': 'Hisense 4008',
        'name': 'Hisense 4008 · Master Salon Thinning & Finishing Shear (6.0")',
        'category': 'barber-salon-shears',
        'subcategory': 'Texturizing & Thinning Shears',
        'length': '6.0 inches',
        'shortDesc': '28-tooth curved teeth texturizing scissors for soft feathered tips and face-framing fringes.',
        'fullDesc': 'Specifically contoured teeth tips that release cut hair immediately without snagging or pulling, giving women and men salon clients ultra-soft feathered perimeter finishes.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4008'},
            {'label': 'Tooth Count', 'value': '28 Contoured Teeth'},
            {'label': 'Cut Ratio', 'value': '20% - 25% Soft Feathering'}
        ],
        'features': [
            'Instant hair release preventing snagging on comb-outs',
            'Ultra smooth ball bearing center pivot'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/barber-salon-shears/hisense-4008.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Salon Styling'
    },
    {
        'id': 'hisense-4009',
        'articleNo': 'Hisense 4009',
        'name': 'Hisense 4009 · Master Shears Precision Trimming Scissors (5.5")',
        'category': 'barber-salon-shears',
        'subcategory': 'Professional Hair Cutting Shears',
        'length': '5.5 inches',
        'shortDesc': 'Compact 5.5-inch haircutting shears engineered for detailed point cutting and fringe styling.',
        'fullDesc': 'Short blade geometry allows extreme control when doing point cutting into hair ends, creating texture and movement in modern textured crops and pixie cuts.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4009'},
            {'label': 'Length', 'value': '5.5 inches (14.0 cm)'},
            {'label': 'Steel', 'value': 'AISI 440C Stainless'}
        ],
        'features': [
            'Short compact blade for millimeter control near scalp and neck',
            'High polish mirror surface resisting chemical tint residues'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/barber-salon-shears/hisense-4009.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Precision Cut'
    },
    {
        'id': 'hisense-4010',
        'articleNo': 'Hisense 4010',
        'name': 'Hisense 4010 · Salon Master Barber Straight Razor Shears (6.0")',
        'category': 'barber-salon-shears',
        'subcategory': 'Professional Hair Cutting Shears',
        'length': '6.0 inches',
        'shortDesc': 'Razor-ground straight hair scissors with hollow grind and ergonomic contoured finger rings.',
        'fullDesc': 'Versatile all-around salon workhorse shear. Crafted with matched Rockwell hardness across both blades for enduring cutting sharpness through hundreds of client cuts between sharpenings.',
        'specifications': [
            {'label': 'Article Number', 'value': 'Hisense 4010'},
            {'label': 'Length', 'value': '6.0 inches'},
            {'label': 'Edge', 'value': 'Honed Razor Clamshell'}
        ],
        'features': [
            'Even blade wear with tension balance screw',
            'Satin matte body resisting fingerprint smudges'
        ],
        'certifications': ['ISO 9001:2015 Certified'],
        'inStock': True,
        'leadTime': 'Immediate',
        'image': '/assets/images/products/barber-salon-shears/hisense-4010.jpg',
        'downloadPath': '/downloads/Hisense-Barber-Salon-Shears.zip',
        'badge': 'Barber Pro'
    }
]

all_products = existing_products + dental_products + beauty_products + barber_products
print(f'Total combined products: {len(all_products)}')

products_json = json.dumps(all_products, indent=2)
new_content = header + 'export const PRODUCTS: Product[] = ' + products_json + ';\n\n' + footer

with open('src/data/mockData.ts', 'w') as f:
    f.write(new_content)

print('Successfully written src/data/mockData.ts')
