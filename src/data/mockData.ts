import { Product, HeroSlide, BrandPost } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-ivf',
    title: 'MAKING ACCESS TO IVF, ART AND MEDICAL EQUIPMENT EASY',
    subtitle: 'Advanced Embryology & Infertility Technologies',
    highlightText: 'Minimizing Distances, Promising Happiness',
    description: 'By focusing on clinical precision and by establishing a relationship of trust, Hisense International delivers vital Assisted Reproductive Technologies, EchoFlex™ ultrasound catheters, and ICSI needles to fertility centers across Pakistan.',
    categoryTag: 'HISENSE INTERNATIONAL · ESTD. 2010',
    modelKey: 'catheter',
    specsPreview: [
      { label: 'Echogenicity', val: 'Tip-Enhanced Ultra-Clear' },
      { label: 'Outer Diameter', val: '4.5 French (1.5mm)' },
      { label: 'Sterility', val: 'Gamma Radiation 10⁻⁶ SAL' },
      { label: 'MEA Tested', val: '≥ 80% Blastocyst Survival' },
    ],
    primaryCta: 'Explore 3D Product Demo',
    secondaryCta: 'Request Institutional Tender Pack',
    image: '/assets/images/home/slide1.jpg',
    backgroundImage: '/assets/images/home/hero1.jpg',
    badge: 'ISO 13485 • MEA > 80% Validated',
    videoTitle: 'Hisense Medical Devices 4K Reel',
    shortLabel: '01. IVF & ART Reproductive Tech',
    statsTitle: '+42K RECEIVED ORDERS',
    statsSubtitle: 'PIONEERING IVF REPRODUCTIVE DEVICES SINCE 2010',
  },
  {
    id: 'slide-contraceptive',
    title: 'WHO-SPEC COPPER T 380A & REPRODUCTIVE HEALTHCARE',
    subtitle: 'National Family Planning & Maternal Healthcare Solutions',
    highlightText: '10-Year Safe & Effective Protection',
    description: 'Pre-packaged sterile Copper T 380A Intrauterine Contraceptive Devices and post-partum PPIUCD kits engineered to national health department tender specifications with biocompatible polyethylene frames.',
    categoryTag: 'WHO SPECIFICATIONS · DRAP APPROVED',
    modelKey: 'copper-t',
    specsPreview: [
      { label: 'Copper Area', val: '380 mm² Active Wire' },
      { label: 'Efficacy', val: 'Up to 10 Years Protection' },
      { label: 'Threads', val: 'Ultra-Soft Dual Monofilament' },
      { label: 'Packaging', val: 'Sterile Blister Pack with Plunger' },
    ],
    primaryCta: 'Inspect Copper T 3D Model',
    secondaryCta: 'Download Family Planning Spec',
    image: '/assets/images/home/slide2.jpg',
    backgroundImage: '/assets/images/home/hero2.jpg',
    badge: 'WHO Compliant • DRAP Verified',
    videoTitle: 'Hisense Cu-T 380A Sterile Packaging Demo',
    shortLabel: '02. Copper-T 380A & Contraceptives',
    statsTitle: '+250K WOMEN SERVED',
    statsSubtitle: 'SUPPLYING NATIONAL REPRODUCTIVE HEALTH PROGRAMS',
  },
  {
    id: 'slide-surgical-cssd',
    title: 'HOSPITAL CSSD STERILIZATION & SURGICAL PRECISION',
    subtitle: 'Turnkey CSSD Autoclaves & Titanium Laparoscopy Tools',
    highlightText: 'Government Procurement & Healthcare Supply',
    description: 'European Class-B vacuum autoclave chambers, titanium laparoscopy trocar forceps equipped with 4000V dielectric ceramic insulation, and high-speed fiber-optic dental handpieces with local Lahore warranty.',
    categoryTag: 'GOVERNMENT CONTRACTOR · TURNKEY SUPPLIES',
    modelKey: 'surgical',
    specsPreview: [
      { label: 'Chamber Volume', val: '23 Litres Medical Grade 304' },
      { label: 'Vacuum Type', val: 'Class-B Fractional Pre/Post' },
      { label: 'Surgical Alloy', val: 'Titanium Grade 5 Dielectric' },
      { label: 'Dispatch Lead', val: '2-3 Working Days Nationwide' },
    ],
    primaryCta: 'Inspect Surgical 3D Geometry',
    secondaryCta: 'Inquire Bulk / Tender Quote',
    image: '/assets/images/home/slide3.jpg',
    backgroundImage: '/assets/images/home/hero3.jpg',
    badge: 'Class-B European • 4000V Insulated',
    videoTitle: 'Hisense Surgical & Hospital Machinery Demo',
    shortLabel: '03. Surgical Trocar & CSSD Autoclaves',
    statsTitle: '80+ HOSPITALS EQUIPPED',
    statsSubtitle: 'NATIONWIDE SERVICE & STANDING WAREHOUSE STOCK',
  },
];

export const PRODUCTS: Product[] = [
  {
    "id": "hisense-1001",
    "articleNo": "Hisense 1001",
    "name": "Hisense 1001 \u00b7 Operating & Dissecting Scissors Curved",
    "category": "surgical-instruments",
    "subcategory": "Surgical & Operating Scissors",
    "length": "14.5 cm",
    "shortDesc": "Curved surgical cutting blades engineered for soft tissue separation with satin anti-glare finish.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1001"
      },
      {
        "label": "Working Length",
        "value": "14.5 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1001",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scissors/hisense-1001.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1002",
    "articleNo": "Hisense 1002",
    "name": "Hisense 1002 \u00b7 Metzenbaum Dissecting Scissors Straight",
    "category": "surgical-instruments",
    "subcategory": "Surgical & Operating Scissors",
    "length": "18.0 cm",
    "shortDesc": "Straight blunt/blunt dissecting blades for deep anatomical soft tissue dissection.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1002"
      },
      {
        "label": "Working Length",
        "value": "18.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1002",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scissors/hisense-1002.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1003",
    "articleNo": "Hisense 1003",
    "name": "Hisense 1003 \u00b7 Mayo Stille Operating Scissors Straight",
    "category": "surgical-instruments",
    "subcategory": "Surgical & Operating Scissors",
    "length": "16.0 cm",
    "shortDesc": "Heavy-duty beveled cutting edges engineered for fascia, muscle layers, and tough biological tissue.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1003"
      },
      {
        "label": "Working Length",
        "value": "16.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1003",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scissors/hisense-1003.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1004",
    "articleNo": "Hisense 1004",
    "name": "Hisense 1004 \u00b7 Sterile Surgical Wire & Pin Cutter Heavy",
    "category": "surgical-instruments",
    "subcategory": "Surgical & Operating Scissors",
    "length": "18.0 cm",
    "shortDesc": "Tungsten carbide reinforced cutting jaws for orthopedic Kirschner wires and suture pins.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1004"
      },
      {
        "label": "Working Length",
        "value": "18.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1004",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scissors/hisense-1004.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1005",
    "articleNo": "Hisense 1005",
    "name": "Hisense 1005 \u00b7 Ligature & Suture Wire Cutting Plier",
    "category": "surgical-instruments",
    "subcategory": "Surgical & Operating Scissors",
    "length": "15.0 cm",
    "shortDesc": "Angled compound leverage jaws for rapid wire ligature trimming and surgical hardware removal.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1005"
      },
      {
        "label": "Working Length",
        "value": "15.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1005",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scissors/hisense-1005.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1006",
    "articleNo": "Hisense 1006",
    "name": "Hisense 1006 \u00b7 Bone Wire & Cannula Cutter Heavy",
    "category": "surgical-instruments",
    "subcategory": "Surgical & Operating Scissors",
    "length": "17.0 cm",
    "shortDesc": "Double-action high-leverage cutter designed for smooth flush cutting of surgical bone wires.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1006"
      },
      {
        "label": "Working Length",
        "value": "17.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1006",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scissors/hisense-1006.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1007",
    "articleNo": "Hisense 1007",
    "name": "Hisense 1007 \u00b7 Iris Micro-Ophthalmic Scissors Curved",
    "category": "surgical-instruments",
    "subcategory": "Surgical & Operating Scissors",
    "length": "11.5 cm",
    "shortDesc": "Fine needle-point tips designed for delicate ophthalmic, vascular, and cosmetic micro-dissection.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1007"
      },
      {
        "label": "Working Length",
        "value": "11.5 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1007",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scissors/hisense-1007.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1008",
    "articleNo": "Hisense 1008",
    "name": "Hisense 1008 \u00b7 Stevens Tenotomy Scissors Curved",
    "category": "surgical-instruments",
    "subcategory": "Surgical & Operating Scissors",
    "length": "13.0 cm",
    "shortDesc": "Tapered blunt probe tips for tenotomy, neurological dissection, and fine tendon handling.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1008"
      },
      {
        "label": "Working Length",
        "value": "13.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1008",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scissors/hisense-1008.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1101",
    "articleNo": "Hisense 1101",
    "name": "Hisense 1101 \u00b7 Halsted Mosquito Forceps Straight",
    "category": "surgical-instruments",
    "subcategory": "Hemostatic Forceps & Clamps",
    "length": "12.5 cm",
    "shortDesc": "Delicate full-length transverse serrations for precise microvascular bleeders control.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1101"
      },
      {
        "label": "Working Length",
        "value": "12.5 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1101",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/hemostatic-forceps/hisense-1101.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1102",
    "articleNo": "Hisense 1102",
    "name": "Hisense 1102 \u00b7 Halsted Mosquito Forceps Curved",
    "category": "surgical-instruments",
    "subcategory": "Hemostatic Forceps & Clamps",
    "length": "12.5 cm",
    "shortDesc": "Curved fine jaws for clamping small bleeding vessels in shallow and confined surgical cavities.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1102"
      },
      {
        "label": "Working Length",
        "value": "12.5 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1102",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/hemostatic-forceps/hisense-1102.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1103",
    "articleNo": "Hisense 1103",
    "name": "Hisense 1103 \u00b7 Kelly Hemostatic Forceps Curved",
    "category": "surgical-instruments",
    "subcategory": "Hemostatic Forceps & Clamps",
    "length": "14.0 cm",
    "shortDesc": "Half-serrated jaws preventing accidental vessel crushing while securing arterial hemostasis.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1103"
      },
      {
        "label": "Working Length",
        "value": "14.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1103",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/hemostatic-forceps/hisense-1103.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1104",
    "articleNo": "Hisense 1104",
    "name": "Hisense 1104 \u00b7 Crile Hemostatic Artery Forceps Straight",
    "category": "surgical-instruments",
    "subcategory": "Hemostatic Forceps & Clamps",
    "length": "14.0 cm",
    "shortDesc": "Full jaw interdigitating transverse serrations engineered for reliable vessel occlusion.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1104"
      },
      {
        "label": "Working Length",
        "value": "14.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1104",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/hemostatic-forceps/hisense-1104.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1105",
    "articleNo": "Hisense 1105",
    "name": "Hisense 1105 \u00b7 Rochester-Pean Hemostatic Forceps Straight",
    "category": "surgical-instruments",
    "subcategory": "Hemostatic Forceps & Clamps",
    "length": "16.0 cm",
    "shortDesc": "Heavy-pattern clamping blades for vascular pedicles, visceral ligaments, and deep vessel trunks.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1105"
      },
      {
        "label": "Working Length",
        "value": "16.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1105",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/hemostatic-forceps/hisense-1105.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1106",
    "articleNo": "Hisense 1106",
    "name": "Hisense 1106 \u00b7 Kocher Hemostatic Artery Forceps 1x2 Teeth",
    "category": "surgical-instruments",
    "subcategory": "Hemostatic Forceps & Clamps",
    "length": "14.0 cm",
    "shortDesc": "Aggressive 1x2 interlocking teeth preventing slippage on tough fascia and fibrous tissue bundles.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1106"
      },
      {
        "label": "Working Length",
        "value": "14.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1106",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/hemostatic-forceps/hisense-1106.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1107",
    "articleNo": "Hisense 1107",
    "name": "Hisense 1107 \u00b7 Mixter Right-Angle Dissecting Hemostat",
    "category": "surgical-instruments",
    "subcategory": "Hemostatic Forceps & Clamps",
    "length": "18.0 cm",
    "shortDesc": "90-degree curved jaw for tunneling beneath deep blood vessels and duct isolation.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1107"
      },
      {
        "label": "Working Length",
        "value": "18.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1107",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/hemostatic-forceps/hisense-1107.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1108",
    "articleNo": "Hisense 1108",
    "name": "Hisense 1108 \u00b7 Baby-Overholt Atraumatic Vascular Clamp",
    "category": "surgical-instruments",
    "subcategory": "Hemostatic Forceps & Clamps",
    "length": "13.5 cm",
    "shortDesc": "Non-traumatic fine longitudinal serrations minimizing endothelial intimal trauma during clamping.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1108"
      },
      {
        "label": "Working Length",
        "value": "13.5 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1108",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/hemostatic-forceps/hisense-1108.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1201",
    "articleNo": "Hisense 1201",
    "name": "Hisense 1201 \u00b7 Adson Surgical Tissue Forceps 1x2 Teeth",
    "category": "surgical-instruments",
    "subcategory": "Dissecting & Tissue Forceps",
    "length": "12.0 cm",
    "shortDesc": "Wide fluted thumb grip with 1x2 micro-teeth for non-slip dermal and subcutaneous tissue manipulation.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1201"
      },
      {
        "label": "Working Length",
        "value": "12.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1201",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/dissecting-forceps/hisense-1201.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1202",
    "articleNo": "Hisense 1202",
    "name": "Hisense 1202 \u00b7 Adson Brown Micro-Tissue Forceps 7x7 Teeth",
    "category": "surgical-instruments",
    "subcategory": "Dissecting & Tissue Forceps",
    "length": "12.0 cm",
    "shortDesc": "Multi-tooth atraumatic gripping surface designed for plastic surgery and precise skin edge eversion.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1202"
      },
      {
        "label": "Working Length",
        "value": "12.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1202",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/dissecting-forceps/hisense-1202.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1203",
    "articleNo": "Hisense 1203",
    "name": "Hisense 1203 \u00b7 Standard Anatomical Dissecting Forceps",
    "category": "surgical-instruments",
    "subcategory": "Dissecting & Tissue Forceps",
    "length": "14.5 cm",
    "shortDesc": "Fine transverse serrations without teeth for delicate mucosal and general visceral handling.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1203"
      },
      {
        "label": "Working Length",
        "value": "14.5 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1203",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/dissecting-forceps/hisense-1203.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1204",
    "articleNo": "Hisense 1204",
    "name": "Hisense 1204 \u00b7 DeBakey Atraumatic Surgical Forceps",
    "category": "surgical-instruments",
    "subcategory": "Dissecting & Tissue Forceps",
    "length": "20.0 cm",
    "shortDesc": "Non-crushing patented ribbed jaw profile designed for vascular bypass and fragile organ manipulation.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1204"
      },
      {
        "label": "Working Length",
        "value": "20.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1204",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/dissecting-forceps/hisense-1204.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1205",
    "articleNo": "Hisense 1205",
    "name": "Hisense 1205 \u00b7 Micro-Jeweler Bipolar Forceps Straight",
    "category": "surgical-instruments",
    "subcategory": "Dissecting & Tissue Forceps",
    "length": "11.0 cm",
    "shortDesc": "Ultra-fine precision tip for microsurgical neurovascular exploration and delicate coagulation.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1205"
      },
      {
        "label": "Working Length",
        "value": "11.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1205",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/dissecting-forceps/hisense-1205.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1206",
    "articleNo": "Hisense 1206",
    "name": "Hisense 1206 \u00b7 Gerald Surgical Dressing Forceps Bayonet",
    "category": "surgical-instruments",
    "subcategory": "Dissecting & Tissue Forceps",
    "length": "17.5 cm",
    "shortDesc": "Slender bayonet shaft offering unobstructed visual line-of-sight under surgical loupes and microscopes.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1206"
      },
      {
        "label": "Working Length",
        "value": "17.5 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1206",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/dissecting-forceps/hisense-1206.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1301",
    "articleNo": "Hisense 1301",
    "name": "Hisense 1301 \u00b7 Mayo-Hegar Needle Holder Tungsten Carbide",
    "category": "surgical-instruments",
    "subcategory": "Needle Holders & Suture",
    "length": "16.0 cm",
    "shortDesc": "Cross-serrated gold-handle TC inserts preventing needle slippage and rotation under high tension.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1301"
      },
      {
        "label": "Working Length",
        "value": "16.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1301",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/needle-holders/hisense-1301.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1302",
    "articleNo": "Hisense 1302",
    "name": "Hisense 1302 \u00b7 Crile-Wood Precision Needle Holder",
    "category": "surgical-instruments",
    "subcategory": "Needle Holders & Suture",
    "length": "15.0 cm",
    "shortDesc": "Delicate tapered jaws designed for holding 3-0 to 6-0 needles with multi-position box lock.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1302"
      },
      {
        "label": "Working Length",
        "value": "15.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1302",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/needle-holders/hisense-1302.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1303",
    "articleNo": "Hisense 1303",
    "name": "Hisense 1303 \u00b7 Castroviejo Micro-Surgical Needle Holder",
    "category": "surgical-instruments",
    "subcategory": "Needle Holders & Suture",
    "length": "14.0 cm",
    "shortDesc": "Flat spring-action knurled handle with micro-ratchet for 7-0 to 10-0 microsurgical sutures.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1303"
      },
      {
        "label": "Working Length",
        "value": "14.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1303",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/needle-holders/hisense-1303.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1304",
    "articleNo": "Hisense 1304",
    "name": "Hisense 1304 \u00b7 Mathieu Palm-Held Needle Holder",
    "category": "surgical-instruments",
    "subcategory": "Needle Holders & Suture",
    "length": "17.0 cm",
    "shortDesc": "Spring-loaded palm grip with quick-squeeze ratchet release for high-speed continuous stitching.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1304"
      },
      {
        "label": "Working Length",
        "value": "17.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1304",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/needle-holders/hisense-1304.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1305",
    "articleNo": "Hisense 1305",
    "name": "Hisense 1305 \u00b7 Olsen-Hegar Combined Needle Holder & Scissors",
    "category": "surgical-instruments",
    "subcategory": "Needle Holders & Suture",
    "length": "14.0 cm",
    "shortDesc": "Dual-function instrument with gripping jaws and cutting scissor blades behind the box-lock.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1305"
      },
      {
        "label": "Working Length",
        "value": "14.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1305",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/needle-holders/hisense-1305.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1306",
    "articleNo": "Hisense 1306",
    "name": "Hisense 1306 \u00b7 Ryder Vascular Micro Needle Holder",
    "category": "surgical-instruments",
    "subcategory": "Needle Holders & Suture",
    "length": "13.0 cm",
    "shortDesc": "Ultra-narrow profile jaws specifically engineered for coronary and peripheral vascular anastomoses.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1306"
      },
      {
        "label": "Working Length",
        "value": "13.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1306",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/needle-holders/hisense-1306.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1401",
    "articleNo": "Hisense 1401",
    "name": "Hisense 1401 \u00b7 Langenbeck Surgical Hand Retractor",
    "category": "surgical-instruments",
    "subcategory": "Retractors, Hooks & Speculums",
    "length": "21.0 cm",
    "shortDesc": "Ergonomic teardrop handle with deep L-shaped blade for deep surgical wound exposure in open surgery.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1401"
      },
      {
        "label": "Working Length",
        "value": "21.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1401",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/retractors-speculums/hisense-1401.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1402",
    "articleNo": "Hisense 1402",
    "name": "Hisense 1402 \u00b7 Senn-Miller Double-Ended Wound Retractor",
    "category": "surgical-instruments",
    "subcategory": "Retractors, Hooks & Speculums",
    "length": "16.0 cm",
    "shortDesc": "Dual-ended configuration with 3 sharp curved prongs on one side and a solid flat blade on the other.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1402"
      },
      {
        "label": "Working Length",
        "value": "16.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1402",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/retractors-speculums/hisense-1402.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1403",
    "articleNo": "Hisense 1403",
    "name": "Hisense 1403 \u00b7 Weitlaner Self-Retaining Retractor 3x4 Blunt",
    "category": "surgical-instruments",
    "subcategory": "Retractors, Hooks & Speculums",
    "length": "13.0 cm",
    "shortDesc": "Cams and ratchet locking system holding wounds open continuously without requiring surgical assistant hands.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1403"
      },
      {
        "label": "Working Length",
        "value": "13.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1403",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/retractors-speculums/hisense-1403.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1404",
    "articleNo": "Hisense 1404",
    "name": "Hisense 1404 \u00b7 Volkmann Bone & Skin Hook Retractor 4 Prongs",
    "category": "surgical-instruments",
    "subcategory": "Retractors, Hooks & Speculums",
    "length": "22.0 cm",
    "shortDesc": "Four semi-sharp prongs for heavy muscle retraction in joint and orthopedic surgical procedures.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1404"
      },
      {
        "label": "Working Length",
        "value": "22.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1404",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/retractors-speculums/hisense-1404.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1405",
    "articleNo": "Hisense 1405",
    "name": "Hisense 1405 \u00b7 Balfour Abdominal Self-Retaining Retractor Set",
    "category": "surgical-instruments",
    "subcategory": "Retractors, Hooks & Speculums",
    "length": "Adjustable",
    "shortDesc": "Stainless steel rack with dual lateral blades and adjustable third bladder blade for abdominal surgery.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1405"
      },
      {
        "label": "Working Length",
        "value": "Adjustable"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1405",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/retractors-speculums/hisense-1405.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1406",
    "articleNo": "Hisense 1406",
    "name": "Hisense 1406 \u00b7 Graves Vaginal Speculum Medium Stainless",
    "category": "surgical-instruments",
    "subcategory": "Retractors, Hooks & Speculums",
    "length": "100 x 35 mm",
    "shortDesc": "Bivalve duckbill blades with knurled thumb nut and calibrated angle adjustment for gynecology.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1406"
      },
      {
        "label": "Working Length",
        "value": "100 x 35 mm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1406",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/retractors-speculums/hisense-1406.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1501",
    "articleNo": "Hisense 1501",
    "name": "Hisense 1501 \u00b7 Surgical Scalpel Handle No. 3 Standard",
    "category": "surgical-instruments",
    "subcategory": "Scalpel Handles & Knives",
    "length": "12.5 cm",
    "shortDesc": "Precision fitted for standard surgical blades No. 10, 11, 12, and 15 with metric millimeter rule.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1501"
      },
      {
        "label": "Working Length",
        "value": "12.5 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1501",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scalpels-handles/hisense-1501.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1502",
    "articleNo": "Hisense 1502",
    "name": "Hisense 1502 \u00b7 Surgical Scalpel Handle No. 4 Heavy Duty",
    "category": "surgical-instruments",
    "subcategory": "Scalpel Handles & Knives",
    "length": "13.5 cm",
    "shortDesc": "Fits larger surgical blades No. 20, 21, 22, 23, and 24 for macroscopic tissue incision.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1502"
      },
      {
        "label": "Working Length",
        "value": "13.5 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1502",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scalpels-handles/hisense-1502.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1503",
    "articleNo": "Hisense 1503",
    "name": "Hisense 1503 \u00b7 Scalpel Handle No. 7 Long Slender",
    "category": "surgical-instruments",
    "subcategory": "Scalpel Handles & Knives",
    "length": "16.0 cm",
    "shortDesc": "Slender pencil-shank handle providing exceptional fingertip control in deep confined surgical spaces.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1503"
      },
      {
        "label": "Working Length",
        "value": "16.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1503",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scalpels-handles/hisense-1503.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1504",
    "articleNo": "Hisense 1504",
    "name": "Hisense 1504 \u00b7 Micro-Blade Handle Round Knurled",
    "category": "surgical-instruments",
    "subcategory": "Scalpel Handles & Knives",
    "length": "14.0 cm",
    "shortDesc": "Round spherical knurled grip allowing 360-degree axial rotation in plastic and aesthetic surgery.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1504"
      },
      {
        "label": "Working Length",
        "value": "14.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1504",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scalpels-handles/hisense-1504.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1505",
    "articleNo": "Hisense 1505",
    "name": "Hisense 1505 \u00b7 Silver Dermatome Skin Graft Knife",
    "category": "surgical-instruments",
    "subcategory": "Scalpel Handles & Knives",
    "length": "19.0 cm",
    "shortDesc": "Calibrated thickness adjustment roller guide for uniform split-thickness donor skin harvesting.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1505"
      },
      {
        "label": "Working Length",
        "value": "19.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1505",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/scalpels-handles/hisense-1505.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1601",
    "articleNo": "Hisense 1601",
    "name": "Hisense 1601 \u00b7 Ruskin Bone Rongeur Double Action Curved",
    "category": "surgical-instruments",
    "subcategory": "Bone Surgery & Orthopedic",
    "length": "18.0 cm",
    "shortDesc": "Compound mechanical leverage reducing user hand fatigue while resecting hard cortical bone fragments.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1601"
      },
      {
        "label": "Working Length",
        "value": "18.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1601",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/bone-orthopedic/hisense-1601.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1602",
    "articleNo": "Hisense 1602",
    "name": "Hisense 1602 \u00b7 Liston Bone Cutting Forceps Straight",
    "category": "surgical-instruments",
    "subcategory": "Bone Surgery & Orthopedic",
    "length": "19.0 cm",
    "shortDesc": "Hardened scissor-like shear blades engineered for clean orthogonal osteotomy and bone transection.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1602"
      },
      {
        "label": "Working Length",
        "value": "19.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1602",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/bone-orthopedic/hisense-1602.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1603",
    "articleNo": "Hisense 1603",
    "name": "Hisense 1603 \u00b7 Cobb Spinal & Orthopedic Bone Curette",
    "category": "surgical-instruments",
    "subcategory": "Bone Surgery & Orthopedic",
    "length": "28.0 cm",
    "shortDesc": "Long hexagonal handle with sharp oval cupped scoop for debriding spinal fusion and bone graft beds.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1603"
      },
      {
        "label": "Working Length",
        "value": "28.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1603",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/bone-orthopedic/hisense-1603.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1604",
    "articleNo": "Hisense 1604",
    "name": "Hisense 1604 \u00b7 Stille-Luer Bone Rongeur Curved Jaws",
    "category": "surgical-instruments",
    "subcategory": "Bone Surgery & Orthopedic",
    "length": "22.0 cm",
    "shortDesc": "Multi-linkage power joint for bone smoothing, laminectomy decompression, and orthopedic remodeling.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1604"
      },
      {
        "label": "Working Length",
        "value": "22.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1604",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/bone-orthopedic/hisense-1604.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1605",
    "articleNo": "Hisense 1605",
    "name": "Hisense 1605 \u00b7 Bruns Orthopedic Bone Curette Angular",
    "category": "surgical-instruments",
    "subcategory": "Bone Surgery & Orthopedic",
    "length": "17.0 cm",
    "shortDesc": "Solid stainless steel grip with angled sharp scoop for curettage of joints, cysts, and osteomyelitis.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1605"
      },
      {
        "label": "Working Length",
        "value": "17.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1605",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/bone-orthopedic/hisense-1605.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1701",
    "articleNo": "Hisense 1701",
    "name": "Hisense 1701 \u00b7 Yankauer Surgical Suction Tube Stainless",
    "category": "surgical-instruments",
    "subcategory": "Suction Tubes, Probes & Trocars",
    "length": "28.0 cm",
    "shortDesc": "Removable bulbous tip with 4 lateral aspiration ports ensuring high-flow aspiration without tissue clogging.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1701"
      },
      {
        "label": "Working Length",
        "value": "28.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1701",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/suction-probes/hisense-1701.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1702",
    "articleNo": "Hisense 1702",
    "name": "Hisense 1702 \u00b7 Frazier Micro-Suction Tube 8 French",
    "category": "surgical-instruments",
    "subcategory": "Suction Tubes, Probes & Trocars",
    "length": "18.0 cm",
    "shortDesc": "Thumb cutoff vacuum valve allows surgeon to regulate suction pressure precisely near vital nerve structures.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1702"
      },
      {
        "label": "Working Length",
        "value": "18.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1702",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/suction-probes/hisense-1702.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1703",
    "articleNo": "Hisense 1703",
    "name": "Hisense 1703 \u00b7 Double-Ended Olive Probe Stainless",
    "category": "surgical-instruments",
    "subcategory": "Suction Tubes, Probes & Trocars",
    "length": "16.0 cm",
    "shortDesc": "Flexible malleable silver-nickel alloy with smooth olive bulb ends for exploring fistula tracts.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1703"
      },
      {
        "label": "Working Length",
        "value": "16.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1703",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/suction-probes/hisense-1703.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1704",
    "articleNo": "Hisense 1704",
    "name": "Hisense 1704 \u00b7 Grooved Director with Tongue Tie Guard",
    "category": "surgical-instruments",
    "subcategory": "Suction Tubes, Probes & Trocars",
    "length": "14.0 cm",
    "shortDesc": "Butterfly shield isolates sublingual lingual frenulum while grooved channel guides bistoury blades safely.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1704"
      },
      {
        "label": "Working Length",
        "value": "14.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1704",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/suction-probes/hisense-1704.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-1705",
    "articleNo": "Hisense 1705",
    "name": "Hisense 1705 \u00b7 Poole Abdominal Suction Cannula with Sheath",
    "category": "surgical-instruments",
    "subcategory": "Suction Tubes, Probes & Trocars",
    "length": "22.0 cm",
    "shortDesc": "Outer perforated removable mantle distributes suction over multiple ports preventing omentum suction entrapment.",
    "fullDesc": "Manufactured by Hisense International from premium medical-grade AISI 410/420 surgical stainless steel. Fully compliant with ISO 13485, CE Medical standards, and DRAP requirements. Engineered for exceptional tensile strength, corrosion resistance, and repeated autoclave sterilization at 134\u00b0C. Features a fine satin matte anti-glare finish to eliminate operating theatre glare under surgical shadowless lights.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 1705"
      },
      {
        "label": "Working Length",
        "value": "22.0 cm"
      },
      {
        "label": "Steel Grade",
        "value": "German Standard AISI 420 / 410 Surgical Stainless"
      },
      {
        "label": "Surface Finish",
        "value": "Satin Matte Anti-Glare / Passivated"
      },
      {
        "label": "Autoclavable",
        "value": "134\u00b0C (273\u00b0F) Class-B Vacuum Compatible"
      },
      {
        "label": "Hardness",
        "value": "50 - 54 HRC Rockwell Hardness"
      },
      {
        "label": "Warranty",
        "value": "5-Year Hisense Factory Guarantee against Corrosion"
      }
    ],
    "features": [
      "Official Hisense Article Code: Hisense 1705",
      "Laser-etched DRAP batch trace and ISO 13485 certification",
      "Mirror passivated joint box preventing tissue fluid corrosion",
      "Ergonomic finger rings and tactile non-slip serrations",
      "Direct supply from central Multan Road Lahore warehouse"
    ],
    "certifications": [
      "ISO 13485:2016",
      "ISO 9001:2015",
      "CE Medical 93/42/EEC",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
    "image": "/assets/images/products/surgical-instruments/suction-probes/hisense-1705.jpg",
    "downloadPath": "/downloads/Hisense-Surgical-Instruments.zip",
    "badge": "Surgical Grade"
  },
  {
    "id": "hisense-2001",
    "articleNo": "Hisense 2001",
    "name": "Hisense 2001 \u00b7 Dental Extraction Forceps Upper Anteriors (Fig. 1)",
    "category": "dental-instruments",
    "subcategory": "Extraction Forceps",
    "length": "17.0 cm",
    "shortDesc": "Straight beak extraction forceps designed for upper central incisors and canines with deep-grooved tactile grip.",
    "fullDesc": "Manufactured by Hisense International from medical-grade AISI 410 stainless steel. Compliant with ISO 13485 and ISO 7153-1 dental instrument standards. Features precision anatomically contoured beaks that conform directly to the cervical tooth curvature, eliminating coronal fracture risks during tooth elevation. Autoclavable up to 134\u00b0C with satin anti-glare finish.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2001"
      },
      {
        "label": "Pattern",
        "value": "English Pattern Fig. 1"
      },
      {
        "label": "Indication",
        "value": "Upper Central & Lateral Incisors, Canines"
      },
      {
        "label": "Length",
        "value": "17.0 cm (6.7 inches)"
      },
      {
        "label": "Material",
        "value": "Surgical Martensitic Stainless Steel AISI 410"
      },
      {
        "label": "Hinge Type",
        "value": "Teflon-bushed smooth glide screw joint"
      },
      {
        "label": "Autoclave Cycle",
        "value": "134\u00b0C (273\u00b0F) at 2.2 bar pressure"
      }
    ],
    "features": [
      "Precision anatomically contoured beaks conforming to cervical crown",
      "Cross-hatched tactile knurling ensuring wet-glove slip prevention",
      "Passivated anti-oxidation finish resisting saliva corrosion",
      "Laser-etched DRAP batch trace and ISO 13485 identifier"
    ],
    "certifications": [
      "ISO 13485:2016 Certified",
      "ISO 7153-1 Dental Grade",
      "CE Medical Device Class I",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (In Stock Lahore Hub)",
    "image": "/assets/images/products/dental-instruments/hisense-2001.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Dental Surgery"
  },
  {
    "id": "hisense-2002",
    "articleNo": "Hisense 2002",
    "name": "Hisense 2002 \u00b7 Dental Extraction Forceps Upper Premolars (Fig. 7)",
    "category": "dental-instruments",
    "subcategory": "Extraction Forceps",
    "length": "16.5 cm",
    "shortDesc": "S-curved extraction forceps engineered for upper premolars and bicuspids with non-slip cross-serrations.",
    "fullDesc": "Ergonomically engineered for atraumatic extraction of maxillary premolars. The gentle S-curve shank allows clearance of the lower lip while transmitting controlled axial luxation force directly to the periodontal ligament.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2002"
      },
      {
        "label": "Pattern",
        "value": "English Pattern Fig. 7"
      },
      {
        "label": "Indication",
        "value": "Maxillary First & Second Premolars"
      },
      {
        "label": "Length",
        "value": "16.5 cm"
      },
      {
        "label": "Material",
        "value": "AISI 410 Surgical Stainless Steel"
      }
    ],
    "features": [
      "S-curved bayonet shank ensuring unobstructed sightline",
      "Convex outer beak geometry minimizing soft tissue impingement",
      "Satin matte electro-polish resisting glare under operatory LED lights"
    ],
    "certifications": [
      "ISO 13485:2016 Certified",
      "CE Medical Device Class I",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (24-48 hrs Nationwide)",
    "image": "/assets/images/products/dental-instruments/hisense-2002.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Dental Surgery"
  },
  {
    "id": "hisense-2003",
    "articleNo": "Hisense 2003",
    "name": "Hisense 2003 \u00b7 Lower Molar Cowhorn Extraction Forceps (Fig. 22)",
    "category": "dental-instruments",
    "subcategory": "Extraction Forceps",
    "length": "17.0 cm",
    "shortDesc": "Pointed dual-tapered cowhorn beaks designed to engage the mandibular molar root bifurcation.",
    "fullDesc": "Heavy-duty surgical extraction forceps for lower first and second molars. The sharp conical beaks squeeze deep into the root bifurcation, using wedging action to luxate and elevate submerged or broken-down molar roots cleanly without root fracture.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2003"
      },
      {
        "label": "Pattern",
        "value": "Cowhorn Fig. 22"
      },
      {
        "label": "Indication",
        "value": "Mandibular Molars Bifurcation Luxation"
      },
      {
        "label": "Length",
        "value": "17.0 cm"
      },
      {
        "label": "Material",
        "value": "Forged Surgical Stainless Steel 410"
      }
    ],
    "features": [
      "Sharp conical bifurcated wedges for deep subgingival access",
      "Reinforced hinge box capable of sustaining high rotational torque",
      "Heavy-gauge knurled handles providing secure palm leverage"
    ],
    "certifications": [
      "ISO 13485:2016 Certified",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate (In Stock)",
    "image": "/assets/images/products/dental-instruments/hisense-2003.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Oral Surgery"
  },
  {
    "id": "hisense-2004",
    "articleNo": "Hisense 2004",
    "name": "Hisense 2004 \u00b7 Bein Straight Root Elevator 3.0mm",
    "category": "dental-instruments",
    "subcategory": "Root Elevators & Luxators",
    "length": "15.0 cm",
    "shortDesc": "Straight gouge blade root elevator designed for periodontal ligament severance and socket expansion.",
    "fullDesc": "Precision dental luxator and root elevator. The 3.0mm concave blade tip enters the periodontal space to expand alveolar bone and luxate tooth roots prior to forceps application, minimizing patient trauma and preserving buccal bone plate.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2004"
      },
      {
        "label": "Tip Width",
        "value": "3.0 mm Concave Straight"
      },
      {
        "label": "Handle",
        "value": "Hollow Pear-Shaped Ergonomic Grip"
      },
      {
        "label": "Material",
        "value": "AISI 420 High Carbon Surgical Steel"
      }
    ],
    "features": [
      "Ultra-thin sharp working tip for atraumatic tooth luxation",
      "Ergonomic hollow handle providing optimal tactile sensitivity",
      "Full passivated corrosion resistance against sterilization autoclave cycles"
    ],
    "certifications": [
      "ISO 13485:2016 Certified",
      "CE Approved"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/dental-instruments/hisense-2004.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Dental Surgery"
  },
  {
    "id": "hisense-2005",
    "articleNo": "Hisense 2005",
    "name": "Hisense 2005 \u00b7 Cryer Curved Root Elevator (Left & Right)",
    "category": "dental-instruments",
    "subcategory": "Root Elevators & Luxators",
    "length": "15.5 cm",
    "shortDesc": "Triangular flag-tip angled elevator engineered for lifting fractured mandibular molar roots.",
    "fullDesc": "Designed with a sharp triangular pick head set at an acute angle to the shaft. When rotated within an empty root socket, the elevator bites into the adjacent inter-radicular bone septum and lifts the retained root fragment upwards with minimal effort.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2005"
      },
      {
        "label": "Configuration",
        "value": "Cryer Triangular Pick (Angled)"
      },
      {
        "label": "Material",
        "value": "AISI 420 Martensitic Stainless"
      }
    ],
    "features": [
      "Sharp triangular claw edge engaging fractured root tips",
      "Rigid heat-treated shaft preventing bending under levering forces"
    ],
    "certifications": [
      "ISO 13485:2016 Certified",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/dental-instruments/hisense-2005.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Dental Surgery"
  },
  {
    "id": "hisense-2006",
    "articleNo": "Hisense 2006",
    "name": "Hisense 2006 \u00b7 Dental Aspirating Cartridge Syringe 1.8ml",
    "category": "dental-instruments",
    "subcategory": "Anesthesia & Diagnostic",
    "length": "14.0 cm",
    "shortDesc": "Breech-loading manual aspirating dental local anesthetic syringe with harpoon plunger and thumb ring.",
    "fullDesc": "Engineered for smooth aspiration prior to local anesthetic injection. Accepts all standard 1.8ml dental glass cartridges and standard dental threaded needles (Imperial & Metric). Heavy chrome-plated brass and stainless steel construction.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2006"
      },
      {
        "label": "Capacity",
        "value": "1.8 ml Standard Dental Cartridge"
      },
      {
        "label": "Aspiration",
        "value": "Harpoon Mechanical Plunger"
      },
      {
        "label": "Thread",
        "value": "M7 & 7/32-40 Thread Adaptable"
      }
    ],
    "features": [
      "Large ergonomic thumb ring for positive one-handed aspiration",
      "Full side viewing port for instant anesthetic dosage verification",
      "Steam autoclave sterilizable at 134\u00b0C"
    ],
    "certifications": [
      "ISO 13485:2016 Certified",
      "CE Medical Class I"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/dental-instruments/hisense-2006.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Dental Operatory"
  },
  {
    "id": "hisense-2007",
    "articleNo": "Hisense 2007",
    "name": "Hisense 2007 \u00b7 Hylin Wax & Composite Sculpting Carver",
    "category": "dental-instruments",
    "subcategory": "Restorative & Lab",
    "length": "17.0 cm",
    "shortDesc": "Double-ended dental modeling instrument with spoon scooper and lance carver for anatomical restoration.",
    "fullDesc": "Essential restorative instrument for dental clinics and prosthodontic laboratories. Handcrafted with ultra-sharp margins for carving occlusal fissures, marginal ridges, and interproximal contours in waxes and composite resins.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2007"
      },
      {
        "label": "Ends",
        "value": "Double-Ended (Spoon & Lancet)"
      },
      {
        "label": "Material",
        "value": "Spring Tempered Stainless Steel"
      }
    ],
    "features": [
      "Non-stick mirror polished tip preventing composite resin pull-back",
      "Balanced hexagonal knurled handle for fingertip stability"
    ],
    "certifications": [
      "ISO 13485:2016 Certified",
      "CE Approved"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/dental-instruments/hisense-2007.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Restorative"
  },
  {
    "id": "hisense-2008",
    "articleNo": "Hisense 2008",
    "name": "Hisense 2008 \u00b7 Zahle Double-Ended Wax Carver",
    "category": "dental-instruments",
    "subcategory": "Restorative & Lab",
    "length": "16.5 cm",
    "shortDesc": "Dual-function dental laboratory carver featuring knife edge and concave contouring spoon.",
    "fullDesc": "Classic Zahle instrument for prosthetics, crown & bridge wax-ups, and diagnostic wax mockups. Engineered to deliver sharp, clean margins without chatter marks.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2008"
      },
      {
        "label": "Pattern",
        "value": "Zahle Fig. 1"
      },
      {
        "label": "Material",
        "value": "High-tensile stainless alloy"
      }
    ],
    "features": [
      "Knife edge for precise marginal line trimming",
      "Contoured teardrop spoon for smooth lingual and buccal anatomy"
    ],
    "certifications": [
      "ISO 13485:2016 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/dental-instruments/hisense-2008.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Dental Lab"
  },
  {
    "id": "hisense-2009",
    "articleNo": "Hisense 2009",
    "name": "Hisense 2009 \u00b7 Gritman Dental Plaster & Cement Spatula",
    "category": "dental-instruments",
    "subcategory": "Restorative & Lab",
    "length": "18.0 cm",
    "shortDesc": "Stiff broad stainless steel mixing blade with rosewood or stainless handle for gypsum and alginate.",
    "fullDesc": "Designed for mixing dental stone, plaster of Paris, and impression materials on glass slabs or in rubber bowls. Rigid blade provides ample spreading power without flexing uncontrollably.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2009"
      },
      {
        "label": "Length",
        "value": "18.0 cm"
      },
      {
        "label": "Blade Type",
        "value": "Rigid Tapered Spatula Blade"
      }
    ],
    "features": [
      "Polished flat working surface preventing alginate entrapment",
      "Easy-clean seamless transition between blade and handle"
    ],
    "certifications": [
      "ISO 13485:2016 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/dental-instruments/hisense-2009.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Dental Lab"
  },
  {
    "id": "hisense-2010",
    "articleNo": "Hisense 2010",
    "name": "Hisense 2010 \u00b7 Dental Sickle Scaler & Calculus Remover",
    "category": "dental-instruments",
    "subcategory": "Periodontal & Hygiene",
    "length": "16.5 cm",
    "shortDesc": "Dual-angled supragingival scaling tips designed for anterior and posterior tooth surface cleaning.",
    "fullDesc": "Periodontal sickle scaler featuring ultra-sharp triangular cross-section cutting edges. Removes tenacious supragingival calculus deposits and extrinsic stains without gouging tooth enamel.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 2010"
      },
      {
        "label": "Tip Pattern",
        "value": "Sickle Scaler H6/H7 Anterior"
      },
      {
        "label": "Blade Steel",
        "value": "Cryogenically Treated High-Carbon Steel"
      }
    ],
    "features": [
      "Razor-sharp blade retaining edge through repeated autoclaving",
      "Large diameter hollow handle reduces hand fatigue during scaling"
    ],
    "certifications": [
      "ISO 13485:2016 Certified",
      "DRAP Registered"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/dental-instruments/hisense-2010.jpg",
    "downloadPath": "/downloads/Hisense-Dental-Instruments.zip",
    "badge": "Periodontology"
  },
  {
    "id": "hisense-3001",
    "articleNo": "Hisense 3001",
    "name": "Hisense 3001 \u00b7 Professional Corner Nail Nipper Straight Jaw (12.5 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Nail & Cuticle Nippers",
    "length": "12.5 cm",
    "shortDesc": "Straight pointed cutting jaw designed for precise trimming of ingrown and lateral toenail edges.",
    "fullDesc": "Handcrafted by Hisense International from premium hot-forged AISI 420 stainless steel with Rockwell hardness 50-52 HRC. Specially designed for podiatry and professional pedicure clinics. The straight, slim cutting jaw reaches cleanly into lateral nail folds to trim stubborn ingrown corners without crushing or splintering the nail plate.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3001"
      },
      {
        "label": "Jaw Style",
        "value": "14mm Slim Straight Cutting Jaw"
      },
      {
        "label": "Joint Type",
        "value": "Precision Lap Joint with Brass Bushing"
      },
      {
        "label": "Spring Mechanism",
        "value": "Double Leaf Spring for Responsive Action"
      },
      {
        "label": "Steel Grade",
        "value": "AISI 420 High-Carbon Martensitic Stainless"
      },
      {
        "label": "Finish",
        "value": "Smooth Satin Matte Anti-Reflective"
      }
    ],
    "features": [
      "Hand-honed cutting edges tested on calibrated test foil",
      "Slim pointed tip for painless deep lateral sulcus access",
      "Full resistance to alcohol disinfection and autoclave cycles",
      "Ergonomic grooved handles for comfortable all-day salon use"
    ],
    "certifications": [
      "ISO 9001:2015 Quality Management",
      "CE Compliant",
      "Anti-Corrosion Passivated"
    ],
    "inStock": true,
    "leadTime": "Immediate (In Stock Lahore)",
    "image": "/assets/images/products/beauty-nail-care/hisense-3001.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Podiatry Grade"
  },
  {
    "id": "hisense-3002",
    "articleNo": "Hisense 3002",
    "name": "Hisense 3002 \u00b7 Heavy-Duty Pedicure Barrel Spring Corner Nipper (14 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Nail & Cuticle Nippers",
    "length": "14.0 cm",
    "shortDesc": "Heavy-duty barrel spring toenail clipper engineered for thickened fungal and dystrophic nails.",
    "fullDesc": "Engineered for maximum cutting leverage. The integrated heavy barrel spring and ergonomic curved handles transfer high crushing power with minimal palm fatigue, cleanly slicing through thick or hardened toenails without snagging.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3002"
      },
      {
        "label": "Jaw Style",
        "value": "16mm Straight Heavy Beak"
      },
      {
        "label": "Spring",
        "value": "Cylindrical Barrel Spring with Safety Latch"
      },
      {
        "label": "Length",
        "value": "14.0 cm (5.5 inches)"
      }
    ],
    "features": [
      "High mechanical advantage lever arms for effortless cutting",
      "Locking safety clasp for safe storage in instrument trays",
      "Corrosion-resistant medical stainless alloy"
    ],
    "certifications": [
      "ISO 9001:2015 Certified",
      "CE Approved"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/beauty-nail-care/hisense-3002.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Heavy Duty"
  },
  {
    "id": "hisense-3003",
    "articleNo": "Hisense 3003",
    "name": "Hisense 3003 \u00b7 Precision Cuticle Nipper Quarter Jaw (10 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Nail & Cuticle Nippers",
    "length": "10.0 cm",
    "shortDesc": "Micro 4mm quarter jaw nipper engineered for delicate eponychium and dead cuticle trimming.",
    "fullDesc": "The gold standard for manicure technicians. Ultra-fine micro-ground cutting blades close perfectly together from tip to heel with uniform pressure, trimming dead cuticle skin seamlessly without pulling or tearing live tissue.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3003"
      },
      {
        "label": "Jaw Size",
        "value": "Quarter Jaw (4.0 mm)"
      },
      {
        "label": "Spring",
        "value": "Double Spring Action"
      },
      {
        "label": "Finish",
        "value": "Fine Satin Brushed Steel"
      }
    ],
    "features": [
      "Micro-pointed tips allowing millimeter-accurate cuticle trimming",
      "Smooth frictionless pivot movement reducing wrist tension",
      "Hand-aligned under 10x magnification"
    ],
    "certifications": [
      "ISO 9001:2015 Certified",
      "Salon Grade Spec"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/beauty-nail-care/hisense-3003.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Salon Precision"
  },
  {
    "id": "hisense-3004",
    "articleNo": "Hisense 3004",
    "name": "Hisense 3004 \u00b7 Half Jaw Cuticle Nipper Double Spring (10.5 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Nail & Cuticle Nippers",
    "length": "10.5 cm",
    "shortDesc": "Versatile 6mm half jaw cuticle nipper for rapid cuticle cleanup and hangnail removal.",
    "fullDesc": "Designed with medium-length cutting blades that offer an optimal compromise between speed and micro-detail, perfect for busy high-end salons and spas.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3004"
      },
      {
        "label": "Jaw Size",
        "value": "Half Jaw (6.0 mm)"
      },
      {
        "label": "Spring",
        "value": "Double Leaf Spring"
      }
    ],
    "features": [
      "Precision ground cutting bevels for burr-free cuts",
      "Full stainless steel body suitable for liquid sterilants and autoclaves"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/beauty-nail-care/hisense-3004.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Salon Precision"
  },
  {
    "id": "hisense-3005",
    "articleNo": "Hisense 3005",
    "name": "Hisense 3005 \u00b7 Extra-Fine Curved Cuticle Scissors Tower Point (9.5 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Manicure & Pedicure Scissors",
    "length": "9.5 cm",
    "shortDesc": "Needle-thin tower point curved scissor blades for ultra-precise Russian manicure cuticle trimming.",
    "fullDesc": "Specially designed for the popular Russian dry manicure technique. The extra-thin, sharply curved blades follow the natural curve of the nail matrix with microscopic accuracy, snipping the cuticle band in one continuous smooth pass.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3005"
      },
      {
        "label": "Blade Type",
        "value": "Curved Tower Point (Needle Fine)"
      },
      {
        "label": "Length",
        "value": "9.5 cm (3.75 inches)"
      },
      {
        "label": "Steel Grade",
        "value": "Hardened Stainless Steel AISI 420"
      }
    ],
    "features": [
      "Micro-thin blade profile preventing accidental skin nicks",
      "Torx screw pivot allowing custom tension calibration",
      "Flawlessly sharp tips aligned by master sharpeners"
    ],
    "certifications": [
      "ISO 9001:2015 Certified",
      "CE Approved"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/beauty-nail-care/hisense-3005.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Russian Manicure"
  },
  {
    "id": "hisense-3006",
    "articleNo": "Hisense 3006",
    "name": "Hisense 3006 \u00b7 Stainless Cuticle & Nail Scissors Arrow Point (9.5 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Manicure & Pedicure Scissors",
    "length": "9.5 cm",
    "shortDesc": "Arrow point curved manicure scissors with reinforced cutting edge for fingernails and cuticles.",
    "fullDesc": "Versatile grooming scissors with sharp arrow point tips and wide ergonomic finger rings. Polished blades provide crisp, clean cuts on both delicate skin and natural fingernails.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3006"
      },
      {
        "label": "Length",
        "value": "9.5 cm"
      },
      {
        "label": "Blade Profile",
        "value": "Curved Arrow Point"
      }
    ],
    "features": [
      "Precision ground edges maintaining sharpness for 5,000+ cuts",
      "Comfort finger rings reducing pressure points on thumb and index finger"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/beauty-nail-care/hisense-3006.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Beauty Pro"
  },
  {
    "id": "hisense-3007",
    "articleNo": "Hisense 3007",
    "name": "Hisense 3007 \u00b7 Podiatry Heavy Nail Pliers & Cantilever Cutter (13 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Podiatry & Nail Pliers",
    "length": "13.0 cm",
    "shortDesc": "Cantilever high-leverage nail cutting pliers with safety latch for orthopedic foot care.",
    "fullDesc": "Heavy-duty plier-type nail cutter engineered for podiatrists and foot health practitioners. The double-action compound leverage hinge triples the cutting force applied by the hand, slicing through severe onychogryphosis or fungal nails effortlessly.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3007"
      },
      {
        "label": "Hinge Action",
        "value": "Compound Double Action Lever"
      },
      {
        "label": "Length",
        "value": "13.0 cm"
      },
      {
        "label": "Safety Catch",
        "value": "Bottom Wire Ring Catch"
      }
    ],
    "features": [
      "Compound leverage generating 300% more cutting torque",
      "Thick hardened stainless jaws that will not flex under extreme load"
    ],
    "certifications": [
      "ISO 9001:2015 Certified",
      "Podiatry Grade"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/beauty-nail-care/hisense-3007.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Podiatry Grade"
  },
  {
    "id": "hisense-3008",
    "articleNo": "Hisense 3008",
    "name": "Hisense 3008 \u00b7 Acrylic Nail Tip & Wire Header Cutter (11.5 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Acrylic & Tip Cutters",
    "length": "11.5 cm",
    "shortDesc": "Flush cutting pliers engineered for trimming artificial acrylic tips, fiberglass wraps and nail art wire.",
    "fullDesc": "Essential nail technician tool featuring perfectly flat flush cutting jaws that slice cleanly through artificial acrylic nail extensions and metal nail art wires without leaving jagged edges or burrs.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3008"
      },
      {
        "label": "Jaw Geometry",
        "value": "Full Flush Cut (Zero Bevel)"
      },
      {
        "label": "Length",
        "value": "11.5 cm"
      }
    ],
    "features": [
      "Flush cutting surface preventing acrylic edge cracking",
      "Internal spring return for fast repetitive trimming"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/beauty-nail-care/hisense-3008.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Salon Nail Tech"
  },
  {
    "id": "hisense-3009",
    "articleNo": "Hisense 3009",
    "name": "Hisense 3009 \u00b7 Podiatry Moon-Blade Curved Toenail Nipper (13.5 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Nail & Cuticle Nippers",
    "length": "13.5 cm",
    "shortDesc": "Concave crescent moon blade conforming naturally to human toenail contour for neat rounding.",
    "fullDesc": "Concave moon-blade nail nipper specifically shaped to follow the natural arch of adult toenails, ensuring smooth edges that prevent painful shoe impingement.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3009"
      },
      {
        "label": "Blade Shape",
        "value": "Concave Moon Crescent 18mm"
      },
      {
        "label": "Length",
        "value": "13.5 cm"
      }
    ],
    "features": [
      "Follows natural nail curvature preventing jagged edges",
      "Heavy textured handles providing non-slip grip"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/beauty-nail-care/hisense-3009.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Podiatry Pro"
  },
  {
    "id": "hisense-3010",
    "articleNo": "Hisense 3010",
    "name": "Hisense 3010 \u00b7 Professional Full Jaw Manicure Cuticle Nipper (11 cm)",
    "category": "beauty-nail-care",
    "subcategory": "Nail & Cuticle Nippers",
    "length": "11.0 cm",
    "shortDesc": "Full 8mm jaw cuticle trimmer with double spring for rapid full-hand salon manicure prep.",
    "fullDesc": "Heavy salon duty cuticle nipper crafted for speed and precision. Ideal for removing overgrown cuticles around large nail beds with fewer strokes.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 3010"
      },
      {
        "label": "Jaw Size",
        "value": "Full Jaw (8.0 mm)"
      },
      {
        "label": "Length",
        "value": "11.0 cm"
      }
    ],
    "features": [
      "Wider cutting span for accelerated salon appointments",
      "Full surgical-grade stainless steel with satin finish"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/beauty-nail-care/hisense-3010.png",
    "downloadPath": "/downloads/Hisense-Beauty-Nail-Care.zip",
    "badge": "Salon Precision"
  },
  {
    "id": "hisense-4001",
    "articleNo": "Hisense 4001",
    "name": "Hisense 4001 \u00b7 Master Shears Titanium Rainbow Hair Cutting Shear (6.0\")",
    "category": "barber-salon-shears",
    "subcategory": "Professional Hair Cutting Shears",
    "length": "6.0 inches (15.2 cm)",
    "shortDesc": "Titanium plasma rainbow finished Japanese 440C stainless steel hair shear in custom velvet gift presentation case.",
    "fullDesc": "The flagship barber and master stylist cutting shear. Handcrafted from premium cryogenic-treated Japanese 440C stainless steel (59-61 HRC) with a striking wear-resistant multi-color rainbow titanium plasma coating. Features razor-sharp convex clam-shell blades, an ultra-smooth gold tension adjustment dial, and an ergonomic semi-offset crane handle with permanent finger rest. Shipped in a luxury red velvet lined presentation box with Master Shears insignia.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4001"
      },
      {
        "label": "Length",
        "value": "6.0 inches (15.2 cm)"
      },
      {
        "label": "Steel Type",
        "value": "Japanese 440C High-Carbon Stainless Steel"
      },
      {
        "label": "Hardness",
        "value": "59\u201361 HRC Cryogenically Tempered"
      },
      {
        "label": "Coating",
        "value": "Titanium Plasma Multi-Chromatic PVD Finish"
      },
      {
        "label": "Blade Geometry",
        "value": "Convex Clam-Shell Razor Edge (38\u00b0 Angle)"
      },
      {
        "label": "Tension System",
        "value": "Micro-Click Ball Bearing Tension Dial in Gold"
      },
      {
        "label": "Handle Style",
        "value": "Ergonomic Crane Offset with Contoured Finger Rest"
      }
    ],
    "features": [
      "Ultra-sharp convex edges delivering effortless slide cutting and blunt trims",
      "Titanium coating prevents nickel allergy and resists salon chemical styling agents",
      "Ergonomic offset handle reduces carpal tunnel syndrome and shoulder fatigue",
      "Supplied in luxury velvet presentation storage case with cleaning cloth"
    ],
    "certifications": [
      "Master Shears Benchmark Quality",
      "ISO 9001:2015 Certified",
      "Japanese Steel Verified"
    ],
    "inStock": true,
    "leadTime": "Immediate (In Stock Lahore Warehouse)",
    "image": "/assets/images/products/barber-salon-shears/hisense-4001.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Master Shears"
  },
  {
    "id": "hisense-4002",
    "articleNo": "Hisense 4002",
    "name": "Hisense 4002 \u00b7 Professional Japanese Convex Edge Hair Shear (6.5\")",
    "category": "barber-salon-shears",
    "subcategory": "Professional Hair Cutting Shears",
    "length": "6.5 inches (16.5 cm)",
    "shortDesc": "Hand-honed convex razor cutting shears with flat-screw ball bearing pivot and mirror finish.",
    "fullDesc": "Longer 6.5-inch barber shears designed specifically for scissor-over-comb techniques, precision geometric bobs, and bulk hair removal. The razor-sharp Japanese blade slices wet or dry hair without pushing or bending hair shafts.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4002"
      },
      {
        "label": "Blade Length",
        "value": "6.5 inches (16.5 cm)"
      },
      {
        "label": "Steel Type",
        "value": "Forged VG-10 / 440C Alloy"
      },
      {
        "label": "Edge",
        "value": "True Japanese Convex Blade"
      }
    ],
    "features": [
      "Hollow-ground inner blade face ensuring whisper-quiet cutting glide",
      "Removable blue rubber finger insert sizers included for bespoke finger fit"
    ],
    "certifications": [
      "ISO 9001:2015 Certified",
      "CE Approved"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/barber-salon-shears/hisense-4002.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Barber Pro"
  },
  {
    "id": "hisense-4003",
    "articleNo": "Hisense 4003",
    "name": "Hisense 4003 \u00b7 Master Shears 30-Tooth Texturizing & Thinning Shear (6.0\")",
    "category": "barber-salon-shears",
    "subcategory": "Texturizing & Thinning Shears",
    "length": "6.0 inches (15.2 cm)",
    "shortDesc": "30 micro-grooved V-teeth blending shear delivering seamless 25% hair texturizing without visible lines.",
    "fullDesc": "Engineered to soften blunt lines and remove internal bulk weight seamlessly. Each of the 30 teeth features micro-laser grooving that grips hair strands securely before cutting, preventing snagging or tearing on dry hair.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4003"
      },
      {
        "label": "Tooth Count",
        "value": "30 Precision V-Shaped Teeth"
      },
      {
        "label": "Cut Ratio",
        "value": "25% - 30% Weight Removal"
      },
      {
        "label": "Length",
        "value": "6.0 inches"
      }
    ],
    "features": [
      "Zero-line blending for seamless fade and layering transitions",
      "Silicone bumper stop providing quiet opening and closing dampening"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/barber-salon-shears/hisense-4003.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Master Shears"
  },
  {
    "id": "hisense-4004",
    "articleNo": "Hisense 4004",
    "name": "Hisense 4004 \u00b7 Ergonomic Offset Crane Barber Hair Shears (7.0\")",
    "category": "barber-salon-shears",
    "subcategory": "Professional Hair Cutting Shears",
    "length": "7.0 inches (17.8 cm)",
    "shortDesc": "Long 7-inch barber cutting shears with drop-handle crane offset for effortless scissor-over-comb fades.",
    "fullDesc": "The heavyweight champion for professional barbers. The 7.0-inch blade covers large hair sections quickly, making clipper-over-comb and scissor-over-comb tapers faster, straighter, and more uniform.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4004"
      },
      {
        "label": "Length",
        "value": "7.0 inches (17.8 cm)"
      },
      {
        "label": "Handle",
        "value": "Full Crane Drop Offset"
      }
    ],
    "features": [
      "Maximizes cutting surface for fast fade transitions",
      "Keeps elbow low and wrist straight, eliminating chronic barber shoulder strain"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/barber-salon-shears/hisense-4004.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Barber Pro"
  },
  {
    "id": "hisense-4005",
    "articleNo": "Hisense 4005",
    "name": "Hisense 4005 \u00b7 Master Stylist Shears Set in Wooden Case (6.0\")",
    "category": "barber-salon-shears",
    "subcategory": "Presentation Shears Sets",
    "length": "6.0 inches (15.2 cm)",
    "shortDesc": "Complete barber stylist kit in natural wooden glass-lid presentation case with finger sizers & oil pin.",
    "fullDesc": "Luxury presentation master shears set. Handcrafted polished Japanese steel shear nestled inside a glass-windowed pine wooden display case with brass latch. Includes two blue ergonomic silicone finger sizers and precision needle oil dispenser.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4005"
      },
      {
        "label": "Set Includes",
        "value": "6.0\" Shear + Wooden Case + 2x Sizers + Oil Pen"
      },
      {
        "label": "Case Material",
        "value": "Solid Natural Pine with Glass Inspection Lid"
      }
    ],
    "features": [
      "Premium gift / professional presentation ready",
      "Full service kit with lubricating oil ensuring lifetime smooth glide"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/barber-salon-shears/hisense-4005.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Executive Kit"
  },
  {
    "id": "hisense-4006",
    "articleNo": "Hisense 4006",
    "name": "Hisense 4006 \u00b7 Professional Barber Cutting & Blending Shears (6.5\")",
    "category": "barber-salon-shears",
    "subcategory": "Professional Hair Cutting Shears",
    "length": "6.5 inches",
    "shortDesc": "High-torque sword blade hair cutting shear with leaf spring tension dial for dry and wet hair.",
    "fullDesc": "Features an elevated sword spine running down the center of the blade to reinforce stiffness, allowing the barber to power through coarse thick hair without blade displacement or hair push.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4006"
      },
      {
        "label": "Blade Geometry",
        "value": "Sword Spine Stiffened Convex Edge"
      },
      {
        "label": "Length",
        "value": "6.5 inches"
      }
    ],
    "features": [
      "Enhanced blade rigidity for powerful dry cutting",
      "Adjustable click leaf spring tension wheel"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/barber-salon-shears/hisense-4006.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Barber Pro"
  },
  {
    "id": "hisense-4007",
    "articleNo": "Hisense 4007",
    "name": "Hisense 4007 \u00b7 Classic Master Barber Straight Hair Shears (6.0\")",
    "category": "barber-salon-shears",
    "subcategory": "Professional Hair Cutting Shears",
    "length": "6.0 inches",
    "shortDesc": "Traditional symmetrical German design hair scissor with micro-fine edge for precision detailing.",
    "fullDesc": "Clean, classic barber scissors crafted for precision outlining around the ears, sideburn detailing, beard trimming, and traditional geometric sectioning.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4007"
      },
      {
        "label": "Handle",
        "value": "Classic Symmetrical Level Handle"
      },
      {
        "label": "Length",
        "value": "6.0 inches"
      }
    ],
    "features": [
      "Traditional balanced feel preferred by classic grooming barbers",
      "Dual removable finger rests allowing reversible operation"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/barber-salon-shears/hisense-4007.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Classic Barber"
  },
  {
    "id": "hisense-4008",
    "articleNo": "Hisense 4008",
    "name": "Hisense 4008 \u00b7 Master Salon Thinning & Finishing Shear (6.0\")",
    "category": "barber-salon-shears",
    "subcategory": "Texturizing & Thinning Shears",
    "length": "6.0 inches",
    "shortDesc": "28-tooth curved teeth texturizing scissors for soft feathered tips and face-framing fringes.",
    "fullDesc": "Specifically contoured teeth tips that release cut hair immediately without snagging or pulling, giving women and men salon clients ultra-soft feathered perimeter finishes.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4008"
      },
      {
        "label": "Tooth Count",
        "value": "28 Contoured Teeth"
      },
      {
        "label": "Cut Ratio",
        "value": "20% - 25% Soft Feathering"
      }
    ],
    "features": [
      "Instant hair release preventing snagging on comb-outs",
      "Ultra smooth ball bearing center pivot"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/barber-salon-shears/hisense-4008.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Salon Styling"
  },
  {
    "id": "hisense-4009",
    "articleNo": "Hisense 4009",
    "name": "Hisense 4009 \u00b7 Master Shears Precision Trimming Scissors (5.5\")",
    "category": "barber-salon-shears",
    "subcategory": "Professional Hair Cutting Shears",
    "length": "5.5 inches",
    "shortDesc": "Compact 5.5-inch haircutting shears engineered for detailed point cutting and fringe styling.",
    "fullDesc": "Short blade geometry allows extreme control when doing point cutting into hair ends, creating texture and movement in modern textured crops and pixie cuts.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4009"
      },
      {
        "label": "Length",
        "value": "5.5 inches (14.0 cm)"
      },
      {
        "label": "Steel",
        "value": "AISI 440C Stainless"
      }
    ],
    "features": [
      "Short compact blade for millimeter control near scalp and neck",
      "High polish mirror surface resisting chemical tint residues"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/barber-salon-shears/hisense-4009.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Precision Cut"
  },
  {
    "id": "hisense-4010",
    "articleNo": "Hisense 4010",
    "name": "Hisense 4010 \u00b7 Salon Master Barber Straight Razor Shears (6.0\")",
    "category": "barber-salon-shears",
    "subcategory": "Professional Hair Cutting Shears",
    "length": "6.0 inches",
    "shortDesc": "Razor-ground straight hair scissors with hollow grind and ergonomic contoured finger rings.",
    "fullDesc": "Versatile all-around salon workhorse shear. Crafted with matched Rockwell hardness across both blades for enduring cutting sharpness through hundreds of client cuts between sharpenings.",
    "specifications": [
      {
        "label": "Article Number",
        "value": "Hisense 4010"
      },
      {
        "label": "Length",
        "value": "6.0 inches"
      },
      {
        "label": "Edge",
        "value": "Honed Razor Clamshell"
      }
    ],
    "features": [
      "Even blade wear with tension balance screw",
      "Satin matte body resisting fingerprint smudges"
    ],
    "certifications": [
      "ISO 9001:2015 Certified"
    ],
    "inStock": true,
    "leadTime": "Immediate",
    "image": "/assets/images/products/barber-salon-shears/hisense-4010.jpg",
    "downloadPath": "/downloads/Hisense-Barber-Salon-Shears.zip",
    "badge": "Barber Pro"
  },
  {
      "id": "hisense-5001",
      "articleNo": "Hisense 5001",
      "name": "Hisense 5001 \u00b7 Heer ISMILA-28F Low-Dose Oral Contraceptive",
      "category": "contraceptive-range",
      "subcategory": "Oral Contraceptive Cycles",
      "length": "3 Cycles (84 Tablets)",
      "shortDesc": "Low-dose Levonorgestrel & Ethinyl Estradiol oral tablets USP with ferrous fumarate iron reminder pills.",
      "fullDesc": "Manufactured for institutional distribution and national family planning adherence. Features 3 complete 28-day cycles (21 active low-dose hormonal pills + 7 iron-fortified reminder tablets to prevent anemia and maintain continuous daily routine). Fully registered and quality validated by DRAP and international reproductive health authorities.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5001"
          },
          {
              "label": "Regimen",
              "value": "21 Active + 7 Ferrous Fumarate Iron Tablets"
          },
          {
              "label": "Active Hormones",
              "value": "Levonorgestrel 0.15 mg + Ethinyl Estradiol 0.03 mg USP"
          },
          {
              "label": "Iron Supplement",
              "value": "Ferrous Fumarate BIP 75 mg"
          },
          {
              "label": "Cycle Duration",
              "value": "3 Consecutive Cycles (84 Tablets Total)"
          },
          {
              "label": "Regulatory",
              "value": "DRAP Registered & ISO 9001:2015"
          },
          {
              "label": "Packaging",
              "value": "Tamper-Evident Sealed Institutional Box"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5001",
          "Low-dose oral formulation minimizing hormonal breakthrough symptoms",
          "7-day reminder iron pills prevent dropouts and treat nutritional anemia",
          "Blister pack with clearly marked directional days of the week",
          "Direct supply from central Multan Road Lahore warehouse"
      ],
      "certifications": [
          "DRAP Registered",
          "ISO 9001:2015",
          "USP Formulated",
          "CE Compliant"
      ],
      "inStock": true,
      "leadTime": "Immediate (24-48 hrs Lahore & Nationwide)",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0003.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "3-Cycle Oral"
  },
  {
      "id": "hisense-5002",
      "articleNo": "Hisense 5002",
      "name": "Hisense 5002 \u00b7 Famila 28F Low-Dose Combined Oral Tablets",
      "category": "contraceptive-range",
      "subcategory": "Oral Contraceptive Cycles",
      "length": "3 Cycles (84 Tablets)",
      "shortDesc": "Trusted national low-dose combined oral contraceptive with blister calendar strip.",
      "fullDesc": "Nationally recognized and widely recommended combined oral contraceptive tablets. Formulated with optimal low hormonal concentrations of Levonorgestrel and Ethinyl Estradiol to deliver 99.3% efficacy with exceptional patient tolerance. Supplied in 3-cycle clinical cartons.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5002"
          },
          {
              "label": "Composition",
              "value": "Levonorgestrel USP 0.15 mg + Ethinyl Estradiol USP 0.03 mg"
          },
          {
              "label": "Presentation",
              "value": "3 Cycles of 28 Tablets (84 Tablets Total)"
          },
          {
              "label": "Dosage Form",
              "value": "Sugar-coated oral tablets with blister backing"
          },
          {
              "label": "Efficacy",
              "value": "> 99.3% with consistent daily compliance"
          },
          {
              "label": "Approval",
              "value": "DRAP Verified & ZAFA / DKT Standard"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5002",
          "Clinically proven cycle regularity and reduced dysmenorrhea",
          "Moisture-proof blister protection suited to tropical climates",
          "Clear Urdu and English patient administration instructions"
      ],
      "certifications": [
          "DRAP Registered",
          "ISO 9001:2015",
          "USP Grade"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0004.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Daily Regimen"
  },
  {
      "id": "hisense-5003",
      "articleNo": "Hisense 5003",
      "name": "Hisense 5003 \u00b7 Mirena\u00ae Intrauterine System (IUS) 52mg",
      "category": "contraceptive-range",
      "subcategory": "Intrauterine Devices (IUCD)",
      "length": "5\u20138 Years LARC",
      "shortDesc": "Sterile pre-loaded Levonorgestrel-releasing 52mg intrauterine system for long-acting contraception.",
      "fullDesc": "The gold standard in intrauterine hormonal systems. Contains a cylinder of 52mg Levonorgestrel releasing an initial rate of 20 mcg/day into the uterine cavity. Engineered for up to 8 years of contraceptive protection and therapeutic treatment of idiopathic menorrhagia. Supplied sterile, loaded, and ready for immediate clinical insertion.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5003"
          },
          {
              "label": "Active Substance",
              "value": "Levonorgestrel 52 mg Intrauterine Reservoir"
          },
          {
              "label": "Release Rate",
              "value": "20 mcg/24 hours initial sustained intrauterine delivery"
          },
          {
              "label": "Duration",
              "value": "Up to 8 Years Contraceptive Protection"
          },
          {
              "label": "Sterility",
              "value": "Sterile, Loaded in Inserter Tube, Ready to Use"
          },
          {
              "label": "Manufacturer Spec",
              "value": "Bayer Healthcare / International Standards"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5003",
          "One-handed insertion mechanism with depth slider gauge",
          "Significantly reduces menstrual blood loss and pain",
          "Completely reversible upon outpatient removal",
          "Full cold-chain and medical-grade warehouse custody"
      ],
      "certifications": [
          "FDA Approved",
          "CE 0088",
          "DRAP Registered",
          "ISO 13485"
      ],
      "inStock": true,
      "leadTime": "Immediate (24-48 hrs)",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0005.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "LARC Gold Standard"
  },
  {
      "id": "hisense-5004",
      "articleNo": "Hisense 5004",
      "name": "Hisense 5004 \u00b7 Sabz Sitara ECP Emergency Contraceptive Pill",
      "category": "contraceptive-range",
      "subcategory": "Emergency Contraception",
      "length": "2 Tablets (0.75mg)",
      "shortDesc": "High-efficacy post-coital emergency contraceptive tablets containing Levonorgestrel 0.75mg each.",
      "fullDesc": "Greenstar Sabz Sitara emergency contraceptive pill is the leading dedicated post-coital contraceptive in Pakistan. Formulated with Levonorgestrel 0.75 mg per tablet (2 tablets per pack) for prompt prevention of unintended pregnancy when taken within 72 hours of unprotected intercourse.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5004"
          },
          {
              "label": "Composition",
              "value": "Levonorgestrel 0.75 mg per tablet"
          },
          {
              "label": "Quantity",
              "value": "2 Oral Tablets per Pack"
          },
          {
              "label": "Time Window",
              "value": "Take within 72 hours (optimally within 12-24 hours)"
          },
          {
              "label": "Brand Authority",
              "value": "Sabz Sitara / Greenstar Social Marketing"
          },
          {
              "label": "Regulatory",
              "value": "DRAP Enlisted Form 6"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5004",
          "Prevents ovulation and fertilization safely and reliably",
          "Does not interrupt established pregnancy (non-abortifacient)",
          "Standard institutional tender pack with tamper-proof foil"
      ],
      "certifications": [
          "DRAP Enlisted",
          "ISO 9001:2015",
          "National Formulary"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0006.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Emergency Pill"
  },
  {
      "id": "hisense-5005",
      "articleNo": "Hisense 5005",
      "name": "Hisense 5005 \u00b7 Jadelle\u00ae 2-Rod Contraceptive Subdermal Implant & Trocar",
      "category": "contraceptive-range",
      "subcategory": "Subdermal Implants",
      "length": "5 Years LARC",
      "shortDesc": "Two-rod subdermal implant system releasing Levonorgestrel 75mg each with specialized 2.8mm disposable trocar.",
      "fullDesc": "Jadelle is a continuous long-acting reversible contraceptive system consisting of two flexible silicone-covered rods (each containing 75 mg of Levonorgestrel). Inserted subdermally into the inner upper arm using the supplied 2.8mm stainless steel trocar, delivering up to 5 full years of continuous protection.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5005"
          },
          {
              "label": "Rods",
              "value": "2 Flexible Silastic Rods (43mm length, 2.5mm diameter)"
          },
          {
              "label": "Active Hormone",
              "value": "Levonorgestrel 75 mg per rod (150 mg total)"
          },
          {
              "label": "Trocar Included",
              "value": "Graduated 2.8mm Surgical Steel Insertion Trocar"
          },
          {
              "label": "Duration",
              "value": "5 Years Continuous Efficacy"
          },
          {
              "label": "Manufacturer",
              "value": "Bayer Healthcare / International Standards"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5005",
          "Over 99.5% theoretical and clinical effectiveness",
          "Rapid return to natural baseline fertility within weeks of removal",
          "Ideal for public health clinics and maternal health programs",
          "Pre-sterilized double-blister packaging"
      ],
      "certifications": [
          "WHO Prequalified",
          "CE 0088",
          "DRAP Registered"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0008.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "5-Year Implant"
  },
  {
      "id": "hisense-5006",
      "articleNo": "Hisense 5006",
      "name": "Hisense 5006 \u00b7 Famila 28F Daily Cycle Tablets & Blister Foil",
      "category": "contraceptive-range",
      "subcategory": "Oral Contraceptive Cycles",
      "length": "28 Days / Strip",
      "shortDesc": "Hygienic aluminum push-through blister calendar pack for precision daily compliance and zero moisture absorption.",
      "fullDesc": "High-barrier blister strip packaging for Famila 28F oral contraceptive cycle tablets. Engineered with individual foil cavities that protect the micro-dosed Levonorgestrel and Ethinyl Estradiol active compounds from high ambient humidity and ultraviolet degradation.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5006"
          },
          {
              "label": "Foil Type",
              "value": "Hard-Tempered Medical Aluminum Blister"
          },
          {
              "label": "Tablet Count",
              "value": "28 Tablets (21 White Hormonal + 7 Brown Ferrous)"
          },
          {
              "label": "Barrier Rating",
              "value": "USP <671> Class A High Moisture Protection"
          },
          {
              "label": "Storage",
              "value": "Stable up to 30\u00b0C in tropical conditions"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5006",
          "Laser batch numbering and expiry embossed directly on foil",
          "Color-contrasted active vs iron reminder tablets",
          "Compact discrete purse-sized layout"
      ],
      "certifications": [
          "DRAP Registered",
          "ISO 9001:2015"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0009.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Blister Pack"
  },
  {
      "id": "hisense-5007",
      "articleNo": "Hisense 5007",
      "name": "Hisense 5007 \u00b7 NORIFAM 1-Month Combined Contraceptive Injection",
      "category": "contraceptive-range",
      "subcategory": "Injectable Contraceptives",
      "length": "1 ml Ampoule + Syringe",
      "shortDesc": "Combined monthly intramuscular injectable (Norethisterone Enanthate 50mg + Estradiol Valerate 5mg) with AD syringe.",
      "fullDesc": "NORIFAM is a modern combined once-a-month injectable contraceptive manufactured by ZAFA Pharmaceuticals. Each 1ml ampoule combines Norethisterone Enanthate 50mg (progestin) and Estradiol Valerate USP 5mg (estrogen). Offers superior menstrual cycle control compared to progestin-only injectables.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5007"
          },
          {
              "label": "Composition",
              "value": "Norethisterone Enanthate 50 mg + Estradiol Valerate USP 5 mg"
          },
          {
              "label": "Volume",
              "value": "1 ml Amber Glass Ampoule"
          },
          {
              "label": "Frequency",
              "value": "Every 30 \u00b1 3 Days Intramuscular"
          },
          {
              "label": "Syringe",
              "value": "Supplied with Sterile Auto-Disable (AD) Syringe"
          },
          {
              "label": "Manufacturer",
              "value": "ZAFA Pharmaceutical Laboratories / DKT"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5007",
          "Monthly injection maintains regular predictable monthly bleeding",
          "Amber glass protects sensitive hormonal esters against photodegradation",
          "Ideal for clients wanting injectable convenience without amenorrhea"
      ],
      "certifications": [
          "DRAP Registered",
          "ISO 9001:2015",
          "USP Standard"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0011.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Monthly Injection"
  },
  {
      "id": "hisense-5008",
      "articleNo": "Hisense 5008",
      "name": "Hisense 5008 \u00b7 Heer Levonor Single-Dose Oral Emergency Pill",
      "category": "contraceptive-range",
      "subcategory": "Emergency Contraception",
      "length": "1 Tablet (1.5mg)",
      "shortDesc": "Single tablet high-potency Levonorgestrel BP 1.5mg oral emergency contraceptive for use within 72 hours.",
      "fullDesc": "Heer Levonor by DKT Pakistan provides the modern single-dose 1.5mg emergency regimen in one convenient tablet. Eliminates the need for a second dose 12 hours later, drastically reducing compliance failures. Provides up to 95% efficacy when ingested promptly after unprotected intercourse.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5008"
          },
          {
              "label": "Strength",
              "value": "Levonorgestrel Tablet BP 1.5 mg"
          },
          {
              "label": "Unit Count",
              "value": "1 Oral Tablet per Wallet Pack"
          },
          {
              "label": "Protocol",
              "value": "Single Dose within 72 Hours"
          },
          {
              "label": "Brand Holder",
              "value": "DKT Pakistan / Heer Women Healthcare"
          },
          {
              "label": "Approval",
              "value": "DRAP Verified"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5008",
          "Single dose maximizes complete patient compliance",
          "Well-tolerated with low incidence of nausea",
          "Security seal with barcode and tamper indicator"
      ],
      "certifications": [
          "DRAP Registered",
          "BP Formulated",
          "ISO 9001:2015"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0012.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Single Dose ECP"
  },
  {
      "id": "hisense-5009",
      "articleNo": "Hisense 5009",
      "name": "Hisense 5009 \u00b7 Famila DMPA 150mg/ml 3-Month Contraceptive Injection",
      "category": "contraceptive-range",
      "subcategory": "Injectable Contraceptives",
      "length": "1 ml Aqueous Suspension",
      "shortDesc": "Depot Medroxyprogesterone Acetate Injectable Suspension USP 150mg/ml providing 3 months of protection.",
      "fullDesc": "Famila Injection contains 150 mg/ml Medroxyprogesterone Acetate in a microcrystalline sterile aqueous suspension. Formulated for deep intramuscular injection into the gluteal or deltoid muscle, providing safe, discreet, and highly effective contraception for a full 3-month (13 weeks) interval.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5009"
          },
          {
              "label": "Concentration",
              "value": "Medroxyprogesterone Acetate USP 150 mg/ml"
          },
          {
              "label": "Volume",
              "value": "1 ml Sterile Aqueous Suspension"
          },
          {
              "label": "Route",
              "value": "Deep Intramuscular (I.M. use only)"
          },
          {
              "label": "Duration",
              "value": "3 Months (13 Weeks Protection per Shot)"
          },
          {
              "label": "Manufacturers",
              "value": "ZAFA / DKT Institutional Standards"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5009",
          "No estrogen-related vascular or thromboembolic risks",
          "Safe for breastfeeding mothers starting 6 weeks postpartum",
          "Long shelf life and institutional tender packaging"
      ],
      "certifications": [
          "DRAP Registered",
          "USP Compliant",
          "ISO 9001:2015"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0013.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "3-Month DMPA"
  },
  {
      "id": "hisense-5010",
      "articleNo": "Hisense 5010",
      "name": "Hisense 5010 \u00b7 Heer Sleek ML Cu 375 Multiload Intrauterine Device",
      "category": "contraceptive-range",
      "subcategory": "Intrauterine Devices (IUCD)",
      "length": "5 Units Pack (5-Yr LARC)",
      "shortDesc": "Multiload Cu 375 curved flexible-arm intrauterine contraceptive device designed for reduced expulsion.",
      "fullDesc": "Heer Sleek ML Cu 375 features anatomically curved polyethylene side arms with flexible spurs that conform gently to uterine fundal curvature without cervical stretching. Wound with 375 mm\u00b2 of high-purity copper wire. Supplied in a clinical multi-pack containing 5 sterile sealed units for institutional maternity units.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5010"
          },
          {
              "label": "Active Copper",
              "value": "375 mm\u00b2 Electrolytic Copper Wire"
          },
          {
              "label": "Design Type",
              "value": "Multiload Flexible Serrated Arm Frame"
          },
          {
              "label": "Pack Size",
              "value": "5 Individually Sterile Packed Units"
          },
          {
              "label": "Duration",
              "value": "5 Years Continuous Efficacy"
          },
          {
              "label": "Origin",
              "value": "DKT Pakistan / DR7 International USA"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5010",
          "Curved flexible arms substantially decrease expulsion rates",
          "Pre-assembled plunger requires no manual arm folding prior to insertion",
          "Graduated insertion tube with adjustable fundal stop collar"
      ],
      "certifications": [
          "CE Certified",
          "ISO 13485:2016",
          "DRAP Registered"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0014.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "5-Unit Multi-Pack"
  },
  {
      "id": "hisense-5011",
      "articleNo": "Hisense 5011",
      "name": "Hisense 5011 \u00b7 Emkit-DS 1.5mg Single Dose Emergency Contraceptive",
      "category": "contraceptive-range",
      "subcategory": "Emergency Contraception",
      "length": "1 Tablet (1.5mg)",
      "shortDesc": "Double-strength 1.5mg Levonorgestrel USP oral tablet designed for prompt post-coital pregnancy prevention.",
      "fullDesc": "Emkit-DS (Double Strength) by ZAFA and DKT Pakistan contains 1.5 mg of pure Levonorgestrel USP in a single oral dose. Formulated for high bioavailability and rapid peak plasma absorption, preventing unintended pregnancy within 72 hours of unprotected sexual contact.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5011"
          },
          {
              "label": "Strength",
              "value": "Levonorgestrel USP 1.5 mg (Double Strength DS)"
          },
          {
              "label": "Presentation",
              "value": "1 Oral Tablet in Foil Blister"
          },
          {
              "label": "Administration",
              "value": "Single Oral Dose with Water"
          },
          {
              "label": "Manufacturer",
              "value": "ZAFA Pharmaceutical / DKT Pakistan"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5011",
          "Over 95% efficacy when administered within 24 hours",
          "No delayed second dose required",
          "Quality controlled under ISO 9001 manufacturing systems"
      ],
      "certifications": [
          "DRAP Registered",
          "ISO 9001:2015",
          "USP Formulated"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0015.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Double Strength DS"
  },
  {
      "id": "hisense-5012",
      "articleNo": "Hisense 5012",
      "name": "Hisense 5012 \u00b7 Primolut N 5mg Progestogen Oral Tablets (3x10)",
      "category": "contraceptive-range",
      "subcategory": "Oral Hormonal Therapy",
      "length": "30 Tablets (3x10)",
      "shortDesc": "Bayer Norethisterone 5mg tablets for menstrual cycle timing, cycle control, and progestational therapy.",
      "fullDesc": "Primolut N by Bayer contains Norethisterone 5mg per tablet. Widely prescribed by gynecologists for cycle postponement, treatment of dysfunctional uterine bleeding (DUB), endometriosis, and timing of reproductive procedures. Supplied in 3 strips of 10 tablets.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5012"
          },
          {
              "label": "Active Substance",
              "value": "Norethisterone 5 mg"
          },
          {
              "label": "Pack Size",
              "value": "3 Strips x 10 Tablets (30 Tablets Total)"
          },
          {
              "label": "Route",
              "value": "Oral Administration"
          },
          {
              "label": "Manufacturer",
              "value": "Bayer AG / International Standards"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5012",
          "Potent progestational endometrium stabilization",
          "Enables deliberate cycle delay for pilgrimage (Hajj/Umrah) or surgery",
          "Direct pharmacy and institutional hospital tender supplies"
      ],
      "certifications": [
          "DRAP Registered",
          "Bayer Quality Certified",
          "Ph.Eur."
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0016.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Progestogen 5mg"
  },
  {
      "id": "hisense-5013",
      "articleNo": "Hisense 5013",
      "name": "Hisense 5013 \u00b7 Salpex Palnet-M Norethisterone 5mg Tablets",
      "category": "contraceptive-range",
      "subcategory": "Oral Hormonal Therapy",
      "length": "30 Tablets (3x10)",
      "shortDesc": "Therapeutic progestogen 5mg tablets for clinical cycle regulation and institutional distribution.",
      "fullDesc": "Palnet-M by Salpex Pharmaceuticals provides 5 mg of pharmaceutical-grade Norethisterone per tablet. Engineered for institutional tender programs and maternity hospitals for the medical treatment of menorrhagia, secondary amenorrhea, and hormonal contraception counseling protocols.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5013"
          },
          {
              "label": "Compound",
              "value": "Norethisterone 5 mg"
          },
          {
              "label": "Quantity",
              "value": "3x10 Tablets Blister Pack (30 Tablets)"
          },
          {
              "label": "Pharmaceutical Standard",
              "value": "BP / USP Formulations"
          },
          {
              "label": "Producer",
              "value": "Salpex Pharmaceuticals (Pvt) Ltd"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5013",
          "Cost-effective alternative for public welfare departments and NGOs",
          "Uniform dosage consistency batch-tested via HPLC",
          "Stable blister seal against tropical moisture"
      ],
      "certifications": [
          "DRAP Registered",
          "ISO 9001:2015"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0018.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Therapeutic Cycle"
  },
  {
      "id": "hisense-5014",
      "articleNo": "Hisense 5014",
      "name": "Hisense 5014 \u00b7 Heer Safe Load T Cu 380A PLUS Intrauterine Device",
      "category": "contraceptive-range",
      "subcategory": "Intrauterine Devices (IUCD)",
      "length": "10-Year Protection",
      "shortDesc": "WHO-standard Copper T 380A PLUS with Safe-Load insertion mechanism for effortless no-touch deployment.",
      "fullDesc": "Heer Safe Load T Cu 380A PLUS features a pre-assembled no-touch loading mechanism that allows healthcare providers to load the T-arms into the inserter tube without touching the sterile device. Features 380 mm\u00b2 of active electrolytic copper surface area for up to 10 full years of reversible contraception.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5014"
          },
          {
              "label": "Active Surface",
              "value": "380 mm\u00b2 Electrolytic Copper Wire + Solid Sleeves"
          },
          {
              "label": "Frame Material",
              "value": "Medical-Grade Radiopaque Polyethylene with Barium Sulfate"
          },
          {
              "label": "Loader Feature",
              "value": "No-Touch Safe-Load Sterile Slider System"
          },
          {
              "label": "Lifespan",
              "value": "10 Years Continuous Contraceptive Protection"
          },
          {
              "label": "Sponsor",
              "value": "DKT Pakistan / DR7 International USA"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5014",
          "Zero infection risk with complete aseptic no-touch loading",
          "Graduated millimeter insertion tube with movable cervix flange",
          "High tensile soft monofilament strings for effortless inspection"
      ],
      "certifications": [
          "WHO Technical Specifications",
          "ISO 13485:2016",
          "DRAP Registered"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0019.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Safe-Load 10-Yr"
  },
  {
      "id": "hisense-5015",
      "articleNo": "Hisense 5015",
      "name": "Hisense 5015 \u00b7 NORIFAM 1ml Sterile Ampoules Clinical Multi-Pack",
      "category": "contraceptive-range",
      "subcategory": "Injectable Contraceptives",
      "length": "1 ml Amber Ampoules",
      "shortDesc": "Norethisterone Enanthate 50mg + Estradiol 5mg clinical batch for hospital and public health tender procurement.",
      "fullDesc": "Institutional presentation of NORIFAM monthly combined contraceptive injections. Includes individual ampoules of Norethisterone Enanthate 50mg and Estradiol Valerate 5mg in sterile oily solution for intramuscular injection, complete with patient information leaflet and batch analytics.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5015"
          },
          {
              "label": "Constituents",
              "value": "Norethisterone 50mg + Estradiol 5mg per ml"
          },
          {
              "label": "Solvent Vehicle",
              "value": "Sterile Neutral Pharmaceutical Oil Solution"
          },
          {
              "label": "Administration",
              "value": "Intramuscular (I.M.) injection once every 30 days"
          },
          {
              "label": "Institutional Pack",
              "value": "Ampoules with verified batch and expiry verification"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5015",
          "Batch-to-batch chemical assay certificate included",
          "Minimal disruption of natural monthly bleeding rhythm",
          "Fully compliant with federal public procurement guidelines"
      ],
      "certifications": [
          "DRAP Registered",
          "ISO 9001:2015",
          "cGMP Facility"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0020.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Clinical Multi-Pack"
  },
  {
      "id": "hisense-5016",
      "articleNo": "Hisense 5016",
      "name": "Hisense 5016 \u00b7 Ipas MVA PLUS Manual Vacuum Aspirator & EasyGrip Cannulae",
      "category": "contraceptive-range",
      "subcategory": "Clinical Gynecological Systems",
      "length": "Aspirator + 4 Cannulae (4-8mm)",
      "shortDesc": "Gold-standard portable manual vacuum aspirator with 4 EasyGrip cannulae for post-abortion care & biopsy.",
      "fullDesc": "The Ipas MVA PLUS aspirator and EasyGrip cannulae system is the globally accredited clinical device for uterine evacuation, post-abortion care (PAC), and endometrial biopsy without electrical power. Generates instantaneous vacuum of 610-660 mmHg with dual locking valves.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5016"
          },
          {
              "label": "Aspirator Volume",
              "value": "60 ml Double-Valve Handheld Vacuum Cylinder"
          },
          {
              "label": "Vacuum Generated",
              "value": "610 \u2013 660 mm Hg (equivalent to electric pump)"
          },
          {
              "label": "Cannulae Set",
              "value": "4 EasyGrip Semi-Flexible Cannulae (4mm, 5mm, 6mm, 7/8mm)"
          },
          {
              "label": "Autoclavable",
              "value": "Cold Sterilizable / Autoclavable Components"
          },
          {
              "label": "Distribution",
              "value": "DKT WomanCare Global Services Paris / DKT Pakistan"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5016",
          "Safe, portable, quiet, and operates without electrical generator dependency",
          "EasyGrip color-coded winged base for firm, secure attachment",
          "Integral dual-valve retains high vacuum until insertion is complete",
          "Essential equipment for maternity and obstetric emergency suites"
      ],
      "certifications": [
          "WHO Technical List",
          "CE Medical 0086",
          "DRAP Enlisted",
          "ISO 13485"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0021.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Clinical Vacuum System"
  },
  {
      "id": "hisense-5017",
      "articleNo": "Hisense 5017",
      "name": "Hisense 5017 \u00b7 Implanon NXT\u00ae 68mg Etonogestrel Subdermal Single-Rod",
      "category": "contraceptive-range",
      "subcategory": "Subdermal Implants",
      "length": "3-Year Protection",
      "shortDesc": "Single-rod radiopaque subdermal implant pre-loaded in an ergonomic applicator for precise insertion.",
      "fullDesc": "Implanon NXT by MSD is a single-rod subdermal implant containing 68 mg of Etonogestrel. The 4cm x 2mm ethylene vinyl acetate rod is impregnated with barium sulfate for x-ray echogenicity. Pre-loaded into a dedicated sterile, single-handed spring-assisted applicator that prevents deep insertion errors.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5017"
          },
          {
              "label": "Implant Size",
              "value": "Single Rod (4 cm length, 2 mm diameter)"
          },
          {
              "label": "Active Progestin",
              "value": "Etonogestrel 68 mg Sustained Release"
          },
          {
              "label": "Applicator",
              "value": "Integrated Pre-Loaded Single-Handed Applicator"
          },
          {
              "label": "Duration",
              "value": "3 Full Years of Efficacy (> 99.95%)"
          },
          {
              "label": "Manufacturer",
              "value": "MSD (Merck Sharp & Dohme) / International"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5017",
          "Highest efficacy rate of any reversible contraceptive method (> 99.9%)",
          "Pre-loaded single-rod avoids procedural loading and rod count issues",
          "Radiopaque composition enables x-ray or CT localization if required"
      ],
      "certifications": [
          "FDA Approved",
          "EMA Approved",
          "WHO Prequalified",
          "DRAP Registered"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0022.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "Single-Rod NXT"
  },
  {
      "id": "hisense-5018",
      "articleNo": "Hisense 5018",
      "name": "Hisense 5018 \u00b7 Heer DREIJET Medroxyprogesterone 150mg/ml Injectable",
      "category": "contraceptive-range",
      "subcategory": "Injectable Contraceptives",
      "length": "1 ml Ampoule (3-Month)",
      "shortDesc": "Single-dose 150mg/ml sterile aqueous suspension for deep intramuscular injection providing 3 months protection.",
      "fullDesc": "Heer DREIJET by DKT Pakistan is an ultra-pure sterile aqueous suspension of Medroxyprogesterone Acetate USP 150mg/ml. Delivers prolonged systemic progestational action that suppresses follicular maturation, thickens cervical mucus, and maintains dependable contraceptive security for 13 weeks.",
      "specifications": [
          {
              "label": "Article Number",
              "value": "Hisense 5018"
          },
          {
              "label": "Active Molecule",
              "value": "Medroxyprogesterone Acetate USP 150 mg"
          },
          {
              "label": "Formulation",
              "value": "Sterile Aqueous Suspension (1 ml Ampoule)"
          },
          {
              "label": "Dosing Cycle",
              "value": "One Injection every 3 Months (12-13 Weeks)"
          },
          {
              "label": "Brand",
              "value": "Heer DREIJET / DKT Pakistan"
          },
          {
              "label": "Storage",
              "value": "Store at 20\u00b0C to 25\u00b0C, protect from frost"
          }
      ],
      "features": [
          "Official Hisense Article Code: Hisense 5018",
          "Deep intramuscular sustained depot release",
          "3-Month duration suited for rural outreach & national health drives",
          "Batch tested for sterility, endotoxins, and particle size uniformity"
      ],
      "certifications": [
          "DRAP Registered",
          "USP Standard",
          "ISO 9001:2015"
      ],
      "inStock": true,
      "leadTime": "Immediate",
      "image": "/assets/images/products/contraceptive-range/IMG-20261108-WA0024.jpg",
      "downloadPath": "/downloads/Hisense-Contraceptive-Range.zip",
      "badge": "DREIJET 3-Month"
  }
];

export const BRAND_POSTS: BrandPost[] = [
  {
    id: 'post-surgical-catalog',
    title: 'Hisense Launches Dedicated AISI 420 Surgical Instruments Range with Laser DRAP Traceability',
    category: 'SURGICAL PRECISION',
    date: 'October 2026',
    excerpt: 'Comprehensive theater-ready surgical lines covering operating scissors, hemostats, needle holders, retractors, and bone surgery instruments with satin anti-glare finish.',
    image: '/assets/images/products/surgical-instruments/scissors/hisense-1001.jpg',
    readTime: '3 min read',
    author: 'Hisense Surgical Division',
    tags: ['Surgical Instruments', 'AISI 420', 'ISO 13485', 'DRAP Approved'],
  },
  {
    id: 'post-cleanroom',
    title: 'Hisense International Commissions State-of-the-Art ISO Class 100 Cleanroom in Lahore',
    category: 'INFRASTRUCTURE & MANUFACTURING',
    date: 'October 2026',
    excerpt: 'Expanded manufacturing and packaging capacity under automated laminar airflow with zero pyrogen standards at 48-Main Multan Road Lahore hub.',
    image: '/assets/images/about/hisense_lab_cleanroom_post_1792385753427.jpg',
    readTime: '4 min read',
    author: 'Hisense Engineering Board',
    tags: ['Class 100 Cleanroom', 'Hospital Supply', 'ISO 13485', 'Quality Control'],
  },
  {
    id: 'post-bone-surgery',
    title: 'Advanced Orthopedic & Bone Surgery Range Deployed to Teaching Hospitals Nationwide',
    category: 'ORTHOPEDIC INNOVATION',
    date: 'September 2026',
    excerpt: 'High-leverage Ruskin bone rongeurs, Liston cutting forceps, and Cobb curettes engineered from tempered stainless steel for heavy surgical workload.',
    image: '/assets/images/products/surgical-instruments/scissors/hisense-1004.jpg',
    readTime: '4 min read',
    author: 'Clinical Advisory Group',
    tags: ['Orthopedic Surgery', 'Double Action', 'Hospital Tenders', 'Lahore Reserve'],
  },
];

export const COMPANY_DETAILS = {
  name: 'HISENSE INTERNATIONAL',
  legalRole: 'GOVERNMENT CONTRACTOR | IMPORTER | EXPORTER | GENERAL SUPPLIER',
  tagline: 'Trusted Partner in Healthcare, Procurement & Supply Solutions',
  philosophy: 'Minimizing Distances, Promising Happiness.',
  ceo: {
    name: 'Hafiz Asif Ali',
    title: 'Chief Executive Officer',
    experience: 'Decades of healthcare procurement and executive supply leadership across Pakistan.',
    phone: '0321-8000560 / 0333-8000560',
  },
  leadership: [
    { name: 'Mr. Hafiz Asif Ali', role: 'Chief Executive Officer', qualification: 'Executive Direction & Tenders' },
    { name: 'Mrs. Nusrat Ramzan', role: 'Chief Marketing Officer', qualification: 'Institutional Business Development' },
    { name: 'Rana Muhammad Siddique', role: 'Business Unit Manager', qualification: 'Operations & Procurement' },
    { name: 'Mrs. Ruba Bano', role: 'Warehouse Incharge', qualification: 'Registered Pharmacist' },
    { name: 'Dr. Faisal Saeed', role: 'Marketing Manager', qualification: 'Registered Pharmacist' },
    { name: 'Mr. Matloob Subhani', role: 'Sales & Services Manager', qualification: 'Biotechnologist' },
    { name: 'Mr. Muhammad Ali', role: 'IT Manager', qualification: 'Digital Systems & Operations' },
    { name: 'Mr. Haji Rehmat Ali', role: 'Finance Manager', qualification: 'Accounts & Audits' },
    { name: 'Muhammad Moez', role: 'Supply Chain Manager', qualification: 'Logistics & Dispatch' },
  ],
  contacts: {
    phoneMobile: '+92 321 8000560',
    phoneMobileAlt: '+92 333 8000560',
    phoneOffice: '+92 42 35494400',
    whatsapp: '923218000560',
    email: 'hisenseinternational@gmail.com',
    website: 'www.hisenseinternational.com',
    address: '48-Main Multan Road, Lahore, Pakistan',
    postalCode: '54000',
    workingHours: 'Monday – Saturday: 9:00 AM – 6:00 PM',
    established: '2010',
    isoCertification: 'ISO 9001:2015 Certified',
  },
  stats: [
    { label: 'Established', value: '2010' },
    { label: 'Surgical Articles', value: '1,000+' },
    { label: 'Hospital Clients', value: '80+' },
    { label: 'Quality Standard', value: 'ISO 9001:2015' },
    { label: 'National Dispatch', value: '2-3 Days' },
  ],
  services: [
    {
      title: 'Government Procurement & Tender Supply',
      desc: 'Registered contractor for provincial and federal health departments, teaching hospitals, and armed forces medical procurement.',
      icon: 'Building2',
    },
    {
      title: 'Theater-Ready Surgical Instruments',
      desc: 'Full lines of AISI 410/420 surgical scissors, hemostats, needle holders, retractors, bone instruments, and suction tubes.',
      icon: 'Scissors',
    },
    {
      title: 'IVF, ART & Fertility Consumables',
      desc: 'Specialized supply of embryo transfer catheters, ICSI needles, IUI sets, and culture media accessories for fertility centers.',
      icon: 'Sparkles',
    },
    {
      title: 'CSSD Sterilization & Autoclaves',
      desc: 'Class-B European vacuum autoclaves, sterilization pouches, indicator reels, and biological monitoring supplies.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Import & Export Services',
      desc: 'Global sourcing from certified international manufacturers with compliant customs clearance and DRAP documentation.',
      icon: 'Globe',
    },
    {
      title: 'Institutional & Corporate Supplies',
      desc: 'Tailored procurement solutions for private hospital groups, NGO trusts, donor-funded reproductive health programs, and social marketing networks.',
      icon: 'Users',
    },
  ],
};

/**
 * Deterministically mixes products across all five manufacturing lines
 * (Contraceptive Range, Surgical Instruments, Dental Instruments, Barber Shears, Beauty & Nail Care)
 * so that the "ALL PRODUCTS" view showcases a balanced, comprehensive representation on every page.
 */
export const getMixedProducts = (allProducts: Product[]): Product[] => {
  const contraceptive = allProducts.filter((p) => p.category === 'contraceptive-range');
  const surgical = allProducts.filter((p) => p.category === 'surgical-instruments');
  const dental = allProducts.filter((p) => p.category === 'dental-instruments');
  const barber = allProducts.filter((p) => p.category === 'barber-salon-shears');
  const beauty = allProducts.filter((p) => p.category === 'beauty-nail-care');
  const others = allProducts.filter(
    (p) =>
      !['contraceptive-range', 'surgical-instruments', 'dental-instruments', 'barber-salon-shears', 'beauty-nail-care'].includes(
        p.category
      )
  );

  const mixed: Product[] = [];
  let ci = 0;
  let si = 0;
  let di = 0;
  let bai = 0;
  let bei = 0;

  // Interleave in waves of 6 matching the grid layout (1 contraceptive, 1 surgical, 1 dental, 1 barber, 1 beauty, 1 surgical)
  while (
    ci < contraceptive.length ||
    si < surgical.length ||
    di < dental.length ||
    bai < barber.length ||
    bei < beauty.length
  ) {
    if (ci < contraceptive.length) mixed.push(contraceptive[ci++]);
    if (si < surgical.length) mixed.push(surgical[si++]);
    if (di < dental.length) mixed.push(dental[di++]);
    if (bai < barber.length) mixed.push(barber[bai++]);
    if (bei < beauty.length) mixed.push(beauty[bei++]);
    if (si < surgical.length) mixed.push(surgical[si++]);
  }

  others.forEach((p) => mixed.push(p));

  return mixed;
};

export const MIXED_PRODUCTS: Product[] = getMixedProducts(PRODUCTS);

