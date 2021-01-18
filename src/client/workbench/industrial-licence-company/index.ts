import page1 from './pages/login';
import page2 from './pages/enter-trade-name';
import page3 from './pages/enter-company-details';
import page4 from './pages/choose-activities';
import page5 from './pages/upload-document';
import page6 from './pages/application-inprogress';
import page7 from './pages/application-inprogress-2';
import page8 from './pages/application-approved';
import page9 from './pages/licence-issued';
import page10 from './pages/went-wrong';
import page11 from './pages/service-status';
import page12 from './pages/continue-process';

import dictEn from './localization/en';
import dictAr from './localization/ar';

import symbol1 from './symbols/I74xTV9CmPftnlBY6a9py';
import symbol2 from './symbols/TH0ur8trAjubV5SVTKPNB';
import symbol3 from './symbols/_rSFAtv4sbf3yNFwRaLhl';
import symbol4 from './symbols/u_7BA0xr8Q0oku7QtzxvE';
import symbol5 from './symbols/pOuCbjftw6l5xN5WTMEPb';
import symbol6 from './symbols/n36dpY3tGRdQ5XTjH5wlv';
import symbol7 from './symbols/oxjIoMIWX28LAuIpS0Rcv';
import symbol8 from './symbols/sS7NVpd6W7XMQbd-WOGLK';
import symbol9 from './symbols/tGBD8lzV5jP7jlq2kcvyS';
import symbol10 from './symbols/Rss0QvQnyApYxH97BAjrI';

const config = {
  "version": "1027",
  "appName": "Request for Economic Licence (Industrial Leader) Company",
  "defaults": {
    "title": "Request for Economic Licence (Industrial Leader) Company"
  },
  "initialState": {
    "categories": [
      {
        "label": "All",
        "id": "All"
      },
      {
        "label": "Mining and quarrying",
        "id": "Mining and quarrying"
      },
      {
        "label": "Manufacturing",
        "id": "Manufacturing"
      },
      {
        "label": "Electricity, gas, steam and air conditioning supply",
        "id": "Electricity, gas, steam and air conditioning supply"
      },
      {
        "label": "Water supply; sewerage, waste management and remediation activities",
        "id": "Water supply; sewerage, waste management and remediation activities"
      },
      {
        "label": "Wholesale and retail trade; repair of motor vehicles and motorcycles",
        "id": "Wholesale and retail trade; repair of motor vehicles and motorcycles"
      },
      {
        "label": "Professional, scientific and technical activities",
        "id": "Professional, scientific and technical activities"
      },
      {
        "label": "Agriculture, forestry and fishing",
        "id": "Agriculture, forestry and fishing"
      }
    ],
    "divisions": [
      {
        "id": "All",
        "label": "All"
      },
      {
        "id": "Mining support service activities",
        "label": "Mining support service activities"
      },
      {
        "id": "Manufacture of food products",
        "label": "Manufacture of food products"
      },
      {
        "id": "Manufacture of beverages",
        "label": "Manufacture of beverages"
      },
      {
        "id": "Manufacture of tobacco products",
        "label": "Manufacture of tobacco products"
      },
      {
        "id": "Manufacture of textiles",
        "label": "Manufacture of textiles"
      },
      {
        "id": "Manufacture of wearing apparel",
        "label": "Manufacture of wearing apparel"
      },
      {
        "id": "Manufacture of leather and related products",
        "label": "Manufacture of leather and related products"
      },
      {
        "id": "Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials",
        "label": "Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials"
      },
      {
        "id": "Manufacture of paper and paper products",
        "label": "Manufacture of paper and paper products"
      },
      {
        "id": "Printing and reproduction of recorded media",
        "label": "Printing and reproduction of recorded media"
      },
      {
        "id": "Manufacture of coke and refined petroleum products",
        "label": "Manufacture of coke and refined petroleum products"
      },
      {
        "id": "Manufacture of chemicals and chemical products",
        "label": "Manufacture of chemicals and chemical products"
      },
      {
        "id": "Manufacture of basic pharmaceutical products and pharmaceutical preparations",
        "label": "Manufacture of basic pharmaceutical products and pharmaceutical preparations"
      },
      {
        "id": "Manufacture of rubber and plastics products",
        "label": "Manufacture of rubber and plastics products"
      },
      {
        "id": "Manufacture of other non-metallic mineral products",
        "label": "Manufacture of other non-metallic mineral products"
      },
      {
        "id": "Manufacture of basic metals",
        "label": "Manufacture of basic metals"
      },
      {
        "id": "Manufacture of fabricated metal products, except machinery and equipment",
        "label": "Manufacture of fabricated metal products, except machinery and equipment"
      },
      {
        "id": "Manufacture of computer, electronic and optical products",
        "label": "Manufacture of computer, electronic and optical products"
      },
      {
        "id": "Manufacture of electrical equipment",
        "label": "Manufacture of electrical equipment"
      },
      {
        "id": "Manufacture of machinery and equipment n.e.c.",
        "label": "Manufacture of machinery and equipment n.e.c."
      },
      {
        "id": "Manufacture of motor vehicles, trailers and semi-trailers",
        "label": "Manufacture of motor vehicles, trailers and semi-trailers"
      },
      {
        "id": "Manufacture of other transport equipment",
        "label": "Manufacture of other transport equipment"
      },
      {
        "id": "Manufacture of furniture",
        "label": "Manufacture of furniture"
      },
      {
        "id": "Other manufacturing",
        "label": "Other manufacturing"
      },
      {
        "id": "Repair and installation of machinery and equipment",
        "label": "Repair and installation of machinery and equipment"
      },
      {
        "id": "Electricity, gas, steam and air conditioning supply",
        "label": "Electricity, gas, steam and air conditioning supply"
      },
      {
        "id": "Water collection, treatment and supply",
        "label": "Water collection, treatment and supply"
      },
      {
        "id": "Waste collection, treatment and disposal activities; materials recovery",
        "label": "Waste collection, treatment and disposal activities; materials recovery"
      },
      {
        "id": "Wholesale trade, except of motor vehicles and motorcycles",
        "label": "Wholesale trade, except of motor vehicles and motorcycles"
      },
      {
        "id": "Retail trade, except of motor vehicles and motorcycles",
        "label": "Retail trade, except of motor vehicles and motorcycles"
      },
      {
        "id": "Scientific research and development",
        "label": "Scientific research and development"
      },
      {
        "id": "Crop and animal production, hunting and related service activities",
        "label": "Crop and animal production, hunting and related service activities"
      }
    ],
    "groups": [
      {
        "id": "All",
        "label": "All"
      },
      {
        "id": "Support activities for petroleum and natural gas extraction",
        "label": "Support activities for petroleum and natural gas extraction"
      },
      {
        "id": "Processing and preserving of meat",
        "label": "Processing and preserving of meat"
      },
      {
        "id": "Processing and preserving of fish, crustaceans and molluscs",
        "label": "Processing and preserving of fish, crustaceans and molluscs"
      },
      {
        "id": "Processing and preserving of fruit and vegetables",
        "label": "Processing and preserving of fruit and vegetables"
      },
      {
        "id": "Manufacture of vegetable and animal oils and fats",
        "label": "Manufacture of vegetable and animal oils and fats"
      },
      {
        "id": "Manufacture of dairy products",
        "label": "Manufacture of dairy products"
      },
      {
        "id": "Manufacture of grain mill products, starches and starch products",
        "label": "Manufacture of grain mill products, starches and starch products"
      },
      {
        "id": "Manufacture of other food products",
        "label": "Manufacture of other food products"
      },
      {
        "id": "Manufacture of prepared animal feeds",
        "label": "Manufacture of prepared animal feeds"
      },
      {
        "id": "Manufacture of beverages",
        "label": "Manufacture of beverages"
      },
      {
        "id": "Manufacture of tobacco products",
        "label": "Manufacture of tobacco products"
      },
      {
        "id": "Spinning, weaving and finishing of textiles",
        "label": "Spinning, weaving and finishing of textiles"
      },
      {
        "id": "Manufacture of other textiles",
        "label": "Manufacture of other textiles"
      },
      {
        "id": "Manufacture of wearing apparel, except fur apparel",
        "label": "Manufacture of wearing apparel, except fur apparel"
      },
      {
        "id": "Manufacture of articles of fur",
        "label": "Manufacture of articles of fur"
      },
      {
        "id": "Manufacture of knitted and crocheted apparel",
        "label": "Manufacture of knitted and crocheted apparel"
      },
      {
        "id": "Tanning and dressing of leather; manufacture of luggage, handbags, saddlery and harness; dressing and dyeing of fur",
        "label": "Tanning and dressing of leather; manufacture of luggage, handbags, saddlery and harness; dressing and dyeing of fur"
      },
      {
        "id": "Manufacture of footwear",
        "label": "Manufacture of footwear"
      },
      {
        "id": "Sawmilling and planing of wood",
        "label": "Sawmilling and planing of wood"
      },
      {
        "id": "Manufacture of products of wood, cork, straw and plaiting materials",
        "label": "Manufacture of products of wood, cork, straw and plaiting materials"
      },
      {
        "id": "Manufacture of paper and paper products",
        "label": "Manufacture of paper and paper products"
      },
      {
        "id": "Printing and service activities related to printing",
        "label": "Printing and service activities related to printing"
      },
      {
        "id": "Reproduction of recorded media",
        "label": "Reproduction of recorded media"
      },
      {
        "id": "Manufacture of coke oven products",
        "label": "Manufacture of coke oven products"
      },
      {
        "id": "Manufacture of refined petroleum products",
        "label": "Manufacture of refined petroleum products"
      },
      {
        "id": "Manufacture of basic chemicals, fertilizers and nitrogen compounds, plastics and synthetic rubber in primary forms",
        "label": "Manufacture of basic chemicals, fertilizers and nitrogen compounds, plastics and synthetic rubber in primary forms"
      },
      {
        "id": "Manufacture of other chemical products",
        "label": "Manufacture of other chemical products"
      },
      {
        "id": "Manufacture of man-made fibres",
        "label": "Manufacture of man-made fibres"
      },
      {
        "id": "Manufacture of pharmaceuticals, medicinal chemical and botanical products",
        "label": "Manufacture of pharmaceuticals, medicinal chemical and botanical products"
      },
      {
        "id": "Manufacture of rubber products",
        "label": "Manufacture of rubber products"
      },
      {
        "id": "Manufacture of plastics products",
        "label": "Manufacture of plastics products"
      },
      {
        "id": "Manufacture of glass and glass products",
        "label": "Manufacture of glass and glass products"
      },
      {
        "id": "Manufacture of non-metallic mineral products n.e.c.",
        "label": "Manufacture of non-metallic mineral products n.e.c."
      },
      {
        "id": "Manufacture of basic iron and steel",
        "label": "Manufacture of basic iron and steel"
      },
      {
        "id": "Manufacture of basic precious and other non-ferrous metals",
        "label": "Manufacture of basic precious and other non-ferrous metals"
      },
      {
        "id": "Casting of metals",
        "label": "Casting of metals"
      },
      {
        "id": "Manufacture of structural metal products, tanks, reservoirs and steam generators",
        "label": "Manufacture of structural metal products, tanks, reservoirs and steam generators"
      },
      {
        "id": "Manufacture of weapons and ammunition",
        "label": "Manufacture of weapons and ammunition"
      },
      {
        "id": "Manufacture of other fabricated metal products; metalworking service activities",
        "label": "Manufacture of other fabricated metal products; metalworking service activities"
      },
      {
        "id": "Manufacture of electronic components and boards",
        "label": "Manufacture of electronic components and boards"
      },
      {
        "id": "Manufacture of computers and peripheral equipment",
        "label": "Manufacture of computers and peripheral equipment"
      },
      {
        "id": "Manufacture of communication equipment",
        "label": "Manufacture of communication equipment"
      },
      {
        "id": "Manufacture of consumer electronics",
        "label": "Manufacture of consumer electronics"
      },
      {
        "id": "Manufacture of measuring, testing, navigating and control equipment; watches and clocks",
        "label": "Manufacture of measuring, testing, navigating and control equipment; watches and clocks"
      },
      {
        "id": "Manufacture of irradiation, electromedical and electrotherapeutic equipment",
        "label": "Manufacture of irradiation, electromedical and electrotherapeutic equipment"
      },
      {
        "id": "Manufacture of optical instruments and photographic equipment",
        "label": "Manufacture of optical instruments and photographic equipment"
      },
      {
        "id": "Manufacture of magnetic and optical media",
        "label": "Manufacture of magnetic and optical media"
      },
      {
        "id": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus",
        "label": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus"
      },
      {
        "id": "Manufacture of batteries and accumulators",
        "label": "Manufacture of batteries and accumulators"
      },
      {
        "id": "Manufacture of wiring and wiring devices",
        "label": "Manufacture of wiring and wiring devices"
      },
      {
        "id": "Manufacture of electric lighting equipment",
        "label": "Manufacture of electric lighting equipment"
      },
      {
        "id": "Manufacture of domestic appliances",
        "label": "Manufacture of domestic appliances"
      },
      {
        "id": "Manufacture of other electrical equipment",
        "label": "Manufacture of other electrical equipment"
      },
      {
        "id": "Manufacture of general-purpose machinery",
        "label": "Manufacture of general-purpose machinery"
      },
      {
        "id": "Manufacture of special-purpose machinery",
        "label": "Manufacture of special-purpose machinery"
      },
      {
        "id": "Manufacture of motor vehicles",
        "label": "Manufacture of motor vehicles"
      },
      {
        "id": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers",
        "label": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers"
      },
      {
        "id": "Manufacture of parts and accessories for motor vehicles",
        "label": "Manufacture of parts and accessories for motor vehicles"
      },
      {
        "id": "Building of ships and boats",
        "label": "Building of ships and boats"
      },
      {
        "id": "Manufacture of railway locomotives and rolling stock",
        "label": "Manufacture of railway locomotives and rolling stock"
      },
      {
        "id": "Manufacture of air and spacecraft and related machinery",
        "label": "Manufacture of air and spacecraft and related machinery"
      },
      {
        "id": "Manufacture of military fighting vehicles",
        "label": "Manufacture of military fighting vehicles"
      },
      {
        "id": "Manufacture of transport equipment n.e.c.",
        "label": "Manufacture of transport equipment n.e.c."
      },
      {
        "id": "Manufacture of furniture",
        "label": "Manufacture of furniture"
      },
      {
        "id": "Manufacture of jewellery, bijouterie and related articles",
        "label": "Manufacture of jewellery, bijouterie and related articles"
      },
      {
        "id": "Manufacture of musical instruments",
        "label": "Manufacture of musical instruments"
      },
      {
        "id": "Manufacture of musical instruments",
        "label": "Manufacture of musical instruments"
      },
      {
        "id": "Manufacture of sports goods",
        "label": "Manufacture of sports goods"
      },
      {
        "id": "Manufacture of games and toys",
        "label": "Manufacture of games and toys"
      },
      {
        "id": "Manufacture of medical and dental instruments and supplies",
        "label": "Manufacture of medical and dental instruments and supplies"
      },
      {
        "id": "Other manufacturing n.e.c.",
        "label": "Other manufacturing n.e.c."
      },
      {
        "id": "Repair of fabricated metal products, machinery and equipment",
        "label": "Repair of fabricated metal products, machinery and equipment"
      },
      {
        "id": "Electric power generation, transmission and distribution",
        "label": "Electric power generation, transmission and distribution"
      },
      {
        "id": "Steam and air conditioning supply",
        "label": "Steam and air conditioning supply"
      },
      {
        "id": "Water collection, treatment and supply",
        "label": "Water collection, treatment and supply"
      },
      {
        "id": "Waste treatment and disposal",
        "label": "Waste treatment and disposal"
      },
      {
        "id": "Materials recovery",
        "label": "Materials recovery"
      },
      {
        "id": "Wholesale on a fee or contract basis",
        "label": "Wholesale on a fee or contract basis"
      },
      {
        "id": "Other specialized wholesale",
        "label": "Other specialized wholesale"
      },
      {
        "id": "Retail sale of other household equipment in specialized stores",
        "label": "Retail sale of other household equipment in specialized stores"
      },
      {
        "id": "Research and experimental development on natural sciences and engineering",
        "label": "Research and experimental development on natural sciences and engineering"
      },
      {
        "id": "Plant propagation",
        "label": "Plant propagation"
      }
    ],
    "classes": [
      {
        "id": "All",
        "label": "All"
      },
      {
        "id": "Support activities for petroleum and natural gas extraction",
        "label": "Support activities for petroleum and natural gas extraction"
      },
      {
        "id": "Processing and preserving of meat",
        "label": "Processing and preserving of meat"
      },
      {
        "id": "Processing and preserving of fish, crustaceans and molluscs",
        "label": "Processing and preserving of fish, crustaceans and molluscs"
      },
      {
        "id": "Processing and preserving of fruit and vegetables",
        "label": "Processing and preserving of fruit and vegetables"
      },
      {
        "id": "Manufacture of vegetable and animal oils and fats",
        "label": "Manufacture of vegetable and animal oils and fats"
      },
      {
        "id": "Manufacture of dairy products",
        "label": "Manufacture of dairy products"
      },
      {
        "id": "Manufacture of grain mill products",
        "label": "Manufacture of grain mill products"
      },
      {
        "id": "Manufacture of starches and starch products",
        "label": "Manufacture of starches and starch products"
      },
      {
        "id": "Manufacture of bakery products",
        "label": "Manufacture of bakery products"
      },
      {
        "id": "Manufacture of sugar",
        "label": "Manufacture of sugar"
      },
      {
        "id": "Manufacture of cocoa, chocolate and sugar confectionery",
        "label": "Manufacture of cocoa, chocolate and sugar confectionery"
      },
      {
        "id": "Manufacture of macaroni, noodles, couscous and similar farinaceous products",
        "label": "Manufacture of macaroni, noodles, couscous and similar farinaceous products"
      },
      {
        "id": "Manufacture of prepared meals and dishes",
        "label": "Manufacture of prepared meals and dishes"
      },
      {
        "id": "Manufacture of other food products n.e.c.",
        "label": "Manufacture of other food products n.e.c."
      },
      {
        "id": "Manufacture of prepared animal feeds",
        "label": "Manufacture of prepared animal feeds"
      },
      {
        "id": "Manufacture of wines",
        "label": "Manufacture of wines"
      },
      {
        "id": "Manufacture of malt liquors and malt",
        "label": "Manufacture of malt liquors and malt"
      },
      {
        "id": "Manufacture of soft drinks; production of mineral waters and other bottled waters",
        "label": "Manufacture of soft drinks; production of mineral waters and other bottled waters"
      },
      {
        "id": "Manufacture of tobacco products",
        "label": "Manufacture of tobacco products"
      },
      {
        "id": "Preparation and spinning of textile fibres",
        "label": "Preparation and spinning of textile fibres"
      },
      {
        "id": "Weaving of textiles",
        "label": "Weaving of textiles"
      },
      {
        "id": "Manufacture of knitted and crocheted fabrics",
        "label": "Manufacture of knitted and crocheted fabrics"
      },
      {
        "id": "Manufacture of made-up textile articles, except apparel",
        "label": "Manufacture of made-up textile articles, except apparel"
      },
      {
        "id": "Manufacture of carpets and rugs",
        "label": "Manufacture of carpets and rugs"
      },
      {
        "id": "Manufacture of cordage, rope, twine and netting",
        "label": "Manufacture of cordage, rope, twine and netting"
      },
      {
        "id": "Manufacture of other textiles n.e.c.",
        "label": "Manufacture of other textiles n.e.c."
      },
      {
        "id": "Manufacture of wearing apparel, except fur apparel",
        "label": "Manufacture of wearing apparel, except fur apparel"
      },
      {
        "id": "Manufacture of articles of fur",
        "label": "Manufacture of articles of fur"
      },
      {
        "id": "Manufacture of knitted and crocheted apparel",
        "label": "Manufacture of knitted and crocheted apparel"
      },
      {
        "id": "Tanning and dressing of leather; dressing and dyeing of fur",
        "label": "Tanning and dressing of leather; dressing and dyeing of fur"
      },
      {
        "id": "Manufacture of luggage, handbags and the like, saddlery and harness",
        "label": "Manufacture of luggage, handbags and the like, saddlery and harness"
      },
      {
        "id": "Manufacture of footwear",
        "label": "Manufacture of footwear"
      },
      {
        "id": "Sawmilling and planing of wood",
        "label": "Sawmilling and planing of wood"
      },
      {
        "id": "Manufacture of veneer sheets and wood-based panels",
        "label": "Manufacture of veneer sheets and wood-based panels"
      },
      {
        "id": "Manufacture of builders' carpentry and joinery",
        "label": "Manufacture of builders' carpentry and joinery"
      },
      {
        "id": "Manufacture of wooden containers",
        "label": "Manufacture of wooden containers"
      },
      {
        "id": "Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials",
        "label": "Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials"
      },
      {
        "id": "Manufacture of pulp, paper and paperboard",
        "label": "Manufacture of pulp, paper and paperboard"
      },
      {
        "id": "Manufacture of corrugated paper and paperboard and of containers of paper and paperboard",
        "label": "Manufacture of corrugated paper and paperboard and of containers of paper and paperboard"
      },
      {
        "id": "Manufacture of other articles of paper and paperboard",
        "label": "Manufacture of other articles of paper and paperboard"
      },
      {
        "id": "Printing",
        "label": "Printing"
      },
      {
        "id": "Service activities related to printing",
        "label": "Service activities related to printing"
      },
      {
        "id": "Reproduction of recorded media",
        "label": "Reproduction of recorded media"
      },
      {
        "id": "Manufacture of coke oven products",
        "label": "Manufacture of coke oven products"
      },
      {
        "id": "Manufacture of refined petroleum products",
        "label": "Manufacture of refined petroleum products"
      },
      {
        "id": "Manufacture of basic chemicals",
        "label": "Manufacture of basic chemicals"
      },
      {
        "id": "Manufacture of fertilizers and nitrogen compounds",
        "label": "Manufacture of fertilizers and nitrogen compounds"
      },
      {
        "id": "Manufacture of plastics and synthetic rubber in primary forms",
        "label": "Manufacture of plastics and synthetic rubber in primary forms"
      },
      {
        "id": "Manufacture of pesticides and other agrochemical products",
        "label": "Manufacture of pesticides and other agrochemical products"
      },
      {
        "id": "Manufacture of paints, varnishes and similar coatings, printing ink and mastics",
        "label": "Manufacture of paints, varnishes and similar coatings, printing ink and mastics"
      },
      {
        "id": "Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations",
        "label": "Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations"
      },
      {
        "id": "Manufacture of other chemical products n.e.c.",
        "label": "Manufacture of other chemical products n.e.c."
      },
      {
        "id": "Manufacture of man-made fibres",
        "label": "Manufacture of man-made fibres"
      },
      {
        "id": "Manufacture of pharmaceuticals, medicinal chemical and botanical products",
        "label": "Manufacture of pharmaceuticals, medicinal chemical and botanical products"
      },
      {
        "id": "Manufacture of rubber tyres and tubes; retreading and rebuilding of rubber tyres",
        "label": "Manufacture of rubber tyres and tubes; retreading and rebuilding of rubber tyres"
      },
      {
        "id": "Manufacture of other rubber products",
        "label": "Manufacture of other rubber products"
      },
      {
        "id": "Manufacture of plastics products",
        "label": "Manufacture of plastics products"
      },
      {
        "id": "Manufacture of glass and glass products",
        "label": "Manufacture of glass and glass products"
      },
      {
        "id": "Manufacture of refractory products",
        "label": "Manufacture of refractory products"
      },
      {
        "id": "Manufacture of clay building materials",
        "label": "Manufacture of clay building materials"
      },
      {
        "id": "Manufacture of other porcelain and ceramic products",
        "label": "Manufacture of other porcelain and ceramic products"
      },
      {
        "id": "Manufacture of cement, lime and plaster",
        "label": "Manufacture of cement, lime and plaster"
      },
      {
        "id": "Manufacture of articles of concrete, cement and plaster",
        "label": "Manufacture of articles of concrete, cement and plaster"
      },
      {
        "id": "Cutting, shaping and finishing of stone",
        "label": "Cutting, shaping and finishing of stone"
      },
      {
        "id": "Manufacture of other non-metallic mineral products n.e.c.",
        "label": "Manufacture of other non-metallic mineral products n.e.c."
      },
      {
        "id": "Manufacture of basic iron and steel",
        "label": "Manufacture of basic iron and steel"
      },
      {
        "id": "Manufacture of basic precious and other non-ferrous metals",
        "label": "Manufacture of basic precious and other non-ferrous metals"
      },
      {
        "id": "Casting of iron and steel",
        "label": "Casting of iron and steel"
      },
      {
        "id": "Casting of non-ferrous metals",
        "label": "Casting of non-ferrous metals"
      },
      {
        "id": "Manufacture of structural metal products",
        "label": "Manufacture of structural metal products"
      },
      {
        "id": "Manufacture of tanks, reservoirs and containers of metal",
        "label": "Manufacture of tanks, reservoirs and containers of metal"
      },
      {
        "id": "Manufacture of steam generators, except central heating hot water boilers",
        "label": "Manufacture of steam generators, except central heating hot water boilers"
      },
      {
        "id": "Manufacture of weapons and ammunition",
        "label": "Manufacture of weapons and ammunition"
      },
      {
        "id": "Forging, pressing, stamping and roll-forming of metal; powder metallurgy",
        "label": "Forging, pressing, stamping and roll-forming of metal; powder metallurgy"
      },
      {
        "id": "Treatment and coating of metals; machining",
        "label": "Treatment and coating of metals; machining"
      },
      {
        "id": "Manufacture of cutlery, hand tools and general hardware",
        "label": "Manufacture of cutlery, hand tools and general hardware"
      },
      {
        "id": "Manufacture of other fabricated metal products n.e.c.",
        "label": "Manufacture of other fabricated metal products n.e.c."
      },
      {
        "id": "Manufacture of electronic components and boards",
        "label": "Manufacture of electronic components and boards"
      },
      {
        "id": "Manufacture of computers and peripheral equipment",
        "label": "Manufacture of computers and peripheral equipment"
      },
      {
        "id": "Manufacture of communication equipment",
        "label": "Manufacture of communication equipment"
      },
      {
        "id": "Manufacture of consumer electronics",
        "label": "Manufacture of consumer electronics"
      },
      {
        "id": "Manufacture of measuring, testing, navigating and control equipment",
        "label": "Manufacture of measuring, testing, navigating and control equipment"
      },
      {
        "id": "Manufacture of watches and clocks",
        "label": "Manufacture of watches and clocks"
      },
      {
        "id": "Manufacture of irradiation, electromedical and electrotherapeutic equipment",
        "label": "Manufacture of irradiation, electromedical and electrotherapeutic equipment"
      },
      {
        "id": "Manufacture of optical instruments and photographic equipment",
        "label": "Manufacture of optical instruments and photographic equipment"
      },
      {
        "id": "Manufacture of magnetic and optical media",
        "label": "Manufacture of magnetic and optical media"
      },
      {
        "id": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus",
        "label": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus"
      },
      {
        "id": "Manufacture of batteries and accumulators",
        "label": "Manufacture of batteries and accumulators"
      },
      {
        "id": "Manufacture of fibre optic cables",
        "label": "Manufacture of fibre optic cables"
      },
      {
        "id": "Manufacture of other electronic and electric wires and cables",
        "label": "Manufacture of other electronic and electric wires and cables"
      },
      {
        "id": "Manufacture of wiring devices",
        "label": "Manufacture of wiring devices"
      },
      {
        "id": "Manufacture of electric lighting equipment",
        "label": "Manufacture of electric lighting equipment"
      },
      {
        "id": "Manufacture of domestic appliances",
        "label": "Manufacture of domestic appliances"
      },
      {
        "id": "Manufacture of other electrical equipment",
        "label": "Manufacture of other electrical equipment"
      },
      {
        "id": "Manufacture of engines and turbines, except aircraft, vehicle and cycle engines",
        "label": "Manufacture of engines and turbines, except aircraft, vehicle and cycle engines"
      },
      {
        "id": "Manufacture of fluid power equipment",
        "label": "Manufacture of fluid power equipment"
      },
      {
        "id": "Plant propagation",
        "label": "Plant propagation"
      }
    ],
    "branches": [
      {
        "id": "All",
        "label": "All"
      },
      {
        "id": "Branch of a Foreign Company",
        "label": "Branch of a Foreign Company"
      },
      {
        "id": "Branch of a GCC",
        "label": "Branch of a GCC"
      },
      {
        "id": "Branch of a Local Company",
        "label": "Branch of a Local Company"
      },
      {
        "id": "Branch of a Local Establishment",
        "label": "Branch of a Local Establishment"
      },
      {
        "id": "Company from Another Emirate",
        "label": "Company from Another Emirate"
      },
      {
        "id": "Establishment from Another Emirate",
        "label": "Establishment from Another Emirate"
      },
      {
        "id": "Branch of Free Zone",
        "label": "Branch of Free Zone"
      }
    ],
    "categoryValue": "All",
    "divisionValue": "All",
    "groupValue": "All",
    "classValue": "All",
    "branchValue": "All",
    "divisionDisabled": true,
    "groupDisabled": true,
    "classDisabled": true,
    "branchDisabled": true,
    "tableColumns": [],
    "tableActivities": [],
    "currentStepIndex": 0,
    "currentSubStepIndex": 0,
    "steps": [
      {
        "id": "step_fillApplication",
        "label": "Fill application",
        "link": "",
        "status": ""
      },
      {
        "id": "step_getEconomicLicence",
        "label": "Get economic licence",
        "link": "",
        "status": ""
      }
    ],
    "expandedStepIndexes": [],
    "showSidebar": true,
    "individualIssuedTags": [
      {
        "label": "i18n('referenceNo')",
        "value": ""
      },
      {
        "label": "i18n('submittedOn')",
        "value": ""
      }
    ],
    "referenceNo": "IN-12345678",
    "paymentSummaryColoum": [
      {
        "id": "description",
        "title": "i18n('individual_description_title')",
        "align": "start"
      },
      {
        "id": "price",
        "title": "i18n('price')",
        "align": "end"
      }
    ],
    "paymentSummaryRows": [],
    "paymentTotal": 0,
    "listOfLegalForm": [
      {
        "id": "",
        "label": "",
        "disabled": false
      }
    ],
    "selectedLegalFrom": "",
    "industrialList": [
      {
        "id": "Chemical Industries",
        "label": "i18n('chemical-industries')",
        "disabled": false
      },
      {
        "id": "Construction and Glass Industries",
        "label": "i18n('construction-and-glass-industries')",
        "disabled": false
      },
      {
        "id": "Electronic and Electrical Industries",
        "label": "i18n('electronic-and-electrical-industries')",
        "disabled": false
      },
      {
        "id": "Energy and Sustainability Industries",
        "label": "i18n('energy-and-sustainability-industries')",
        "disabled": false
      },
      {
        "id": "Food Industries",
        "label": "i18n('food-industries')",
        "disabled": false
      },
      {
        "id": "General Industries",
        "label": "i18n('general-industries')",
        "disabled": false
      },
      {
        "id": "Machineries and Equipment's Industries",
        "label": "i18n('machineries-and-equipment-industries')",
        "disabled": false
      },
      {
        "id": "Metal Industries",
        "label": "i18n('metal-industries')",
        "disabled": false
      },
      {
        "id": "Printing and Media Industries",
        "label": "i18n('printing-and-media-industries')",
        "disabled": false
      },
      {
        "id": "Rubber, Plastic, and Fiberglass Industries",
        "label": "i18n('rubber-plastic-and-fiberglass-industries')",
        "disabled": false
      },
      {
        "id": "Textiles, Wearing Apparel, and Leather Industries",
        "label": "i18n('textiles-wearing-apparel-and-leather-industries')",
        "disabled": false
      },
      {
        "id": "Wood and Paper Industries",
        "label": "i18n('wood-and-paper-industries')",
        "disabled": false
      }
    ],
    "selectedIndustrialType": "",
    "ownerDetailsColumns": [
      {
        "id": "name",
        "title": "i18n('individual_owner_label_name')"
      },
      {
        "id": "idNumber",
        "title": "i18n('individual_owner_label_id_number')"
      },
      {
        "id": "nationality",
        "title": "i18n('individual_owner_label_nationality')"
      },
      {
        "id": "share",
        "title": "i18n('individual_owner_label_share')"
      }
    ],
    "ownerDetailsRow": [
      {
        "_id": "1",
        "exampleField": "Example Value"
      }
    ],
    "tableAllActivities": [],
    "tableSearch": "",
    "tableTotalRecords": 0,
    "tableCurrPage": 1,
    "tablePageSize": 10,
    "tablePageResizeOptions": [],
    "basket": [],
    "totalCapitalvalue": "",
    "totalInvestmentValue": "",
    "companySubmitStatusDisabled": false,
    "comanyTotalDisabled": false,
    "getActivitiesReqFilter": [],
    "transactionNumber": "",
    "englishPreferedName": "",
    "arabicPreferedName": "",
    "englishPreferedNameValidStatus": "null",
    "arabicPreferedNameValidStatus": "null",
    "englishPreferedNameHelpMsg": "",
    "arabicPreferedNameHelpMsg": "",
    "economicNameDisabled": true,
    "economicNameCheckLoader": false,
    "checkAvailabilityBtnDisabled": false,
    "showNameSuggestions": false,
    "tableEconomicNameColumns": [
      {
        "id": "nameEn",
        "title": "English economic name"
      },
      {
        "id": "nameAr",
        "title": "Arabic economic name"
      }
    ],
    "tableEconomicNameItems": [],
    "validateStatus_ totalCapitalvalue": "",
    "validateStatusTotalCapitalValue": "",
    "validateStatusTotalInvestmentValue": "",
    "helpValidateStatusTotalCapitalValue": "",
    "helpValidateStatusTotalInvestmentValue": "",
    "companyDetailsCheckLoader": false,
    "chooseActivitiesCheckLoader": false,
    "applicationApprovedCheckLoader": false,
    "downloadCertificateCheckLoader": false,
    "economicNameSubmitCheckLoader": false,
    "tags_bffdfccfdc": [
      {
        "label": "",
        "value": ""
      }
    ],
    "currency": "AED",
    "chooseActivitiesBtnDisabled": true,
    "autogenerateChecked": false,
    "economicNameEngDisabled": false,
    "economicNameArbDisabled": false,
    "isModalOpen": false,
    "companyDetailsExistingBranchType": [
      {
        "id": "Yes",
        "label": "i18n('existingBranchType_key1')",
        "disabled": false
      },
      {
        "id": "No",
        "label": "i18n('existingBranchType_key2')",
        "disabled": false
      }
    ],
    "companyDetailsExistingBranchTypeVal": "",
    "companyDetailsBranchType": [
      {
        "id": "i18n('companyDetailsBranchType_key1')",
        "label": "i18n('companyDetailsBranchType_key1')",
        "disabled": false
      },
      {
        "id": "i18n('companyDetailsBranchType_key2')",
        "label": "i18n('companyDetailsBranchType_key2')",
        "disabled": false
      },
      {
        "id": "i18n('companyDetailsBranchType_key3')",
        "label": "i18n('companyDetailsBranchType_key3')",
        "disabled": false
      },
      {
        "id": "i18n('companyDetailsBranchType_key4')",
        "label": "i18n('companyDetailsBranchType_key4')",
        "disabled": false
      },
      {
        "id": "i18n('companyDetailsBranchType_key5')",
        "label": "i18n('companyDetailsBranchType_key5')",
        "disabled": false
      },
      {
        "id": "i18n('companyDetailsBranchType_key6')",
        "label": "i18n('companyDetailsBranchType_key6')",
        "disabled": false
      },
      {
        "id": "i18n('companyDetailsBranchType_key7)",
        "label": "i18n('companyDetailsBranchType_key7')",
        "disabled": false
      }
    ],
    "companyDetailsBranchTypeVal": "",
    "parentCompanylicenceNumberVal": "",
    "validateStatus_existingLicense": "",
    "help_existingLicense": "",
    "existingLicenceVisibility": true,
    "validateStatus_industryType": "",
    "help_industryType": false,
    "validateStatus_branchType": "",
    "help_branchType": false,
    "validateStatus_parentLicenceNumber": "",
    "help_parentLicenceNumber": false,
    "download_dropdown_items": [
      {
        "id": "certificate",
        "label": "i18n('download_dropdown_certificate')",
        "disabled": false
      },
      {
        "id": "Commercial Register",
        "label": "i18n('download_dropdown_licence')",
        "disabled": false
      }
    ],
    "download_value": "",
    "tradeNameTableColumn": [
      {
        "id": "englishName",
        "title": "i18n('englishName')"
      },
      {
        "id": "arabicName",
        "title": "i18n('arabicName')"
      }
    ],
    "tradeNameTableRow": [],
    "uploadDocumentNextBtnDisabled": true,
    "files": [],
    "tnNumber": "",
    "partners": [],
    "tradeNameBtnDisabled": true,
    "tradeNameCheckLoader": false,
    "tradeNameBtnCheckLoader": false,
    "tradeNamePartnersList": [],
    "tradeNameCapId": "",
    "selectedActivities": [],
    "smartPassURL": "",
    "uaePassURL": "",
    "branchType": "",
    "mainLicenseNumber": "",
    "isbranch": "",
    "legalType": "",
    "somethingWentWrongContent": "",
    "applicationsList": [],
    "applicationStatuses": [
      {
        "id": "1",
        "iconName": "",
        "iconColor": "",
        "label": ""
      }
    ],
    "tradeNumberCheckDisabled": true,
    "legalFormSelect": [],
    "legalTypeArb": "",
    "tradeNumberValidateStatus": "",
    "tradeNumberHelpMsg": "",
    "loading": false,
    "responseDescription": "",
    "tableActivitiesStatus": "",
    "tradeNameStatus": "",
    "isProcessStarted": false,
    "adgeName": "DED",
    "serviceCode": "DED_028",
    "productName": "NOP",
    "breadCrumItems": [
      {
        "label": "",
        "link": "",
        "linkTarget": ""
      }
    ],
    "relevant_entities": [],
    "tradeNameLink": "",
    "isCancelModalOpen": false,
    "activitiesCommonSelection": "unchecked"
  },
  "persistStates": [
    "branchType",
    "mainLicenseNumber",
    "isbranch",
    "legalType",
    "legalTypeArb",
    "loading",
    "responseDescription",
    "isProcessStarted"
  ],
  "symbols": [
		...symbol1,
		...symbol2,
		...symbol3,
		...symbol4,
		...symbol5,
		...symbol6,
		...symbol7,
		...symbol8,
		...symbol9,
		...symbol10,
	],
  "dictionary": {
    "en": dictEn,
    "ar": dictAr
  },
  "skipFetchState": [],
  "pages": [
		...page1,
		...page2,
		...page3,
		...page4,
		...page5,
		...page6,
		...page7,
		...page8,
		...page9,
		...page10,
		...page11,
		...page12,
	],
  "states": {
    "initialState": {
      "categories": [
        {
          "label": "All",
          "id": "All"
        },
        {
          "label": "Mining and quarrying",
          "id": "Mining and quarrying"
        },
        {
          "label": "Manufacturing",
          "id": "Manufacturing"
        },
        {
          "label": "Electricity, gas, steam and air conditioning supply",
          "id": "Electricity, gas, steam and air conditioning supply"
        },
        {
          "label": "Water supply; sewerage, waste management and remediation activities",
          "id": "Water supply; sewerage, waste management and remediation activities"
        },
        {
          "label": "Wholesale and retail trade; repair of motor vehicles and motorcycles",
          "id": "Wholesale and retail trade; repair of motor vehicles and motorcycles"
        },
        {
          "label": "Professional, scientific and technical activities",
          "id": "Professional, scientific and technical activities"
        },
        {
          "label": "Agriculture, forestry and fishing",
          "id": "Agriculture, forestry and fishing"
        }
      ],
      "divisions": [
        {
          "id": "All",
          "label": "All"
        },
        {
          "id": "Mining support service activities",
          "label": "Mining support service activities"
        },
        {
          "id": "Manufacture of food products",
          "label": "Manufacture of food products"
        },
        {
          "id": "Manufacture of beverages",
          "label": "Manufacture of beverages"
        },
        {
          "id": "Manufacture of tobacco products",
          "label": "Manufacture of tobacco products"
        },
        {
          "id": "Manufacture of textiles",
          "label": "Manufacture of textiles"
        },
        {
          "id": "Manufacture of wearing apparel",
          "label": "Manufacture of wearing apparel"
        },
        {
          "id": "Manufacture of leather and related products",
          "label": "Manufacture of leather and related products"
        },
        {
          "id": "Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials",
          "label": "Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials"
        },
        {
          "id": "Manufacture of paper and paper products",
          "label": "Manufacture of paper and paper products"
        },
        {
          "id": "Printing and reproduction of recorded media",
          "label": "Printing and reproduction of recorded media"
        },
        {
          "id": "Manufacture of coke and refined petroleum products",
          "label": "Manufacture of coke and refined petroleum products"
        },
        {
          "id": "Manufacture of chemicals and chemical products",
          "label": "Manufacture of chemicals and chemical products"
        },
        {
          "id": "Manufacture of basic pharmaceutical products and pharmaceutical preparations",
          "label": "Manufacture of basic pharmaceutical products and pharmaceutical preparations"
        },
        {
          "id": "Manufacture of rubber and plastics products",
          "label": "Manufacture of rubber and plastics products"
        },
        {
          "id": "Manufacture of other non-metallic mineral products",
          "label": "Manufacture of other non-metallic mineral products"
        },
        {
          "id": "Manufacture of basic metals",
          "label": "Manufacture of basic metals"
        },
        {
          "id": "Manufacture of fabricated metal products, except machinery and equipment",
          "label": "Manufacture of fabricated metal products, except machinery and equipment"
        },
        {
          "id": "Manufacture of computer, electronic and optical products",
          "label": "Manufacture of computer, electronic and optical products"
        },
        {
          "id": "Manufacture of electrical equipment",
          "label": "Manufacture of electrical equipment"
        },
        {
          "id": "Manufacture of machinery and equipment n.e.c.",
          "label": "Manufacture of machinery and equipment n.e.c."
        },
        {
          "id": "Manufacture of motor vehicles, trailers and semi-trailers",
          "label": "Manufacture of motor vehicles, trailers and semi-trailers"
        },
        {
          "id": "Manufacture of other transport equipment",
          "label": "Manufacture of other transport equipment"
        },
        {
          "id": "Manufacture of furniture",
          "label": "Manufacture of furniture"
        },
        {
          "id": "Other manufacturing",
          "label": "Other manufacturing"
        },
        {
          "id": "Repair and installation of machinery and equipment",
          "label": "Repair and installation of machinery and equipment"
        },
        {
          "id": "Electricity, gas, steam and air conditioning supply",
          "label": "Electricity, gas, steam and air conditioning supply"
        },
        {
          "id": "Water collection, treatment and supply",
          "label": "Water collection, treatment and supply"
        },
        {
          "id": "Waste collection, treatment and disposal activities; materials recovery",
          "label": "Waste collection, treatment and disposal activities; materials recovery"
        },
        {
          "id": "Wholesale trade, except of motor vehicles and motorcycles",
          "label": "Wholesale trade, except of motor vehicles and motorcycles"
        },
        {
          "id": "Retail trade, except of motor vehicles and motorcycles",
          "label": "Retail trade, except of motor vehicles and motorcycles"
        },
        {
          "id": "Scientific research and development",
          "label": "Scientific research and development"
        },
        {
          "id": "Crop and animal production, hunting and related service activities",
          "label": "Crop and animal production, hunting and related service activities"
        }
      ],
      "groups": [
        {
          "id": "All",
          "label": "All"
        },
        {
          "id": "Support activities for petroleum and natural gas extraction",
          "label": "Support activities for petroleum and natural gas extraction"
        },
        {
          "id": "Processing and preserving of meat",
          "label": "Processing and preserving of meat"
        },
        {
          "id": "Processing and preserving of fish, crustaceans and molluscs",
          "label": "Processing and preserving of fish, crustaceans and molluscs"
        },
        {
          "id": "Processing and preserving of fruit and vegetables",
          "label": "Processing and preserving of fruit and vegetables"
        },
        {
          "id": "Manufacture of vegetable and animal oils and fats",
          "label": "Manufacture of vegetable and animal oils and fats"
        },
        {
          "id": "Manufacture of dairy products",
          "label": "Manufacture of dairy products"
        },
        {
          "id": "Manufacture of grain mill products, starches and starch products",
          "label": "Manufacture of grain mill products, starches and starch products"
        },
        {
          "id": "Manufacture of other food products",
          "label": "Manufacture of other food products"
        },
        {
          "id": "Manufacture of prepared animal feeds",
          "label": "Manufacture of prepared animal feeds"
        },
        {
          "id": "Manufacture of beverages",
          "label": "Manufacture of beverages"
        },
        {
          "id": "Manufacture of tobacco products",
          "label": "Manufacture of tobacco products"
        },
        {
          "id": "Spinning, weaving and finishing of textiles",
          "label": "Spinning, weaving and finishing of textiles"
        },
        {
          "id": "Manufacture of other textiles",
          "label": "Manufacture of other textiles"
        },
        {
          "id": "Manufacture of wearing apparel, except fur apparel",
          "label": "Manufacture of wearing apparel, except fur apparel"
        },
        {
          "id": "Manufacture of articles of fur",
          "label": "Manufacture of articles of fur"
        },
        {
          "id": "Manufacture of knitted and crocheted apparel",
          "label": "Manufacture of knitted and crocheted apparel"
        },
        {
          "id": "Tanning and dressing of leather; manufacture of luggage, handbags, saddlery and harness; dressing and dyeing of fur",
          "label": "Tanning and dressing of leather; manufacture of luggage, handbags, saddlery and harness; dressing and dyeing of fur"
        },
        {
          "id": "Manufacture of footwear",
          "label": "Manufacture of footwear"
        },
        {
          "id": "Sawmilling and planing of wood",
          "label": "Sawmilling and planing of wood"
        },
        {
          "id": "Manufacture of products of wood, cork, straw and plaiting materials",
          "label": "Manufacture of products of wood, cork, straw and plaiting materials"
        },
        {
          "id": "Manufacture of paper and paper products",
          "label": "Manufacture of paper and paper products"
        },
        {
          "id": "Printing and service activities related to printing",
          "label": "Printing and service activities related to printing"
        },
        {
          "id": "Reproduction of recorded media",
          "label": "Reproduction of recorded media"
        },
        {
          "id": "Manufacture of coke oven products",
          "label": "Manufacture of coke oven products"
        },
        {
          "id": "Manufacture of refined petroleum products",
          "label": "Manufacture of refined petroleum products"
        },
        {
          "id": "Manufacture of basic chemicals, fertilizers and nitrogen compounds, plastics and synthetic rubber in primary forms",
          "label": "Manufacture of basic chemicals, fertilizers and nitrogen compounds, plastics and synthetic rubber in primary forms"
        },
        {
          "id": "Manufacture of other chemical products",
          "label": "Manufacture of other chemical products"
        },
        {
          "id": "Manufacture of man-made fibres",
          "label": "Manufacture of man-made fibres"
        },
        {
          "id": "Manufacture of pharmaceuticals, medicinal chemical and botanical products",
          "label": "Manufacture of pharmaceuticals, medicinal chemical and botanical products"
        },
        {
          "id": "Manufacture of rubber products",
          "label": "Manufacture of rubber products"
        },
        {
          "id": "Manufacture of plastics products",
          "label": "Manufacture of plastics products"
        },
        {
          "id": "Manufacture of glass and glass products",
          "label": "Manufacture of glass and glass products"
        },
        {
          "id": "Manufacture of non-metallic mineral products n.e.c.",
          "label": "Manufacture of non-metallic mineral products n.e.c."
        },
        {
          "id": "Manufacture of basic iron and steel",
          "label": "Manufacture of basic iron and steel"
        },
        {
          "id": "Manufacture of basic precious and other non-ferrous metals",
          "label": "Manufacture of basic precious and other non-ferrous metals"
        },
        {
          "id": "Casting of metals",
          "label": "Casting of metals"
        },
        {
          "id": "Manufacture of structural metal products, tanks, reservoirs and steam generators",
          "label": "Manufacture of structural metal products, tanks, reservoirs and steam generators"
        },
        {
          "id": "Manufacture of weapons and ammunition",
          "label": "Manufacture of weapons and ammunition"
        },
        {
          "id": "Manufacture of other fabricated metal products; metalworking service activities",
          "label": "Manufacture of other fabricated metal products; metalworking service activities"
        },
        {
          "id": "Manufacture of electronic components and boards",
          "label": "Manufacture of electronic components and boards"
        },
        {
          "id": "Manufacture of computers and peripheral equipment",
          "label": "Manufacture of computers and peripheral equipment"
        },
        {
          "id": "Manufacture of communication equipment",
          "label": "Manufacture of communication equipment"
        },
        {
          "id": "Manufacture of consumer electronics",
          "label": "Manufacture of consumer electronics"
        },
        {
          "id": "Manufacture of measuring, testing, navigating and control equipment; watches and clocks",
          "label": "Manufacture of measuring, testing, navigating and control equipment; watches and clocks"
        },
        {
          "id": "Manufacture of irradiation, electromedical and electrotherapeutic equipment",
          "label": "Manufacture of irradiation, electromedical and electrotherapeutic equipment"
        },
        {
          "id": "Manufacture of optical instruments and photographic equipment",
          "label": "Manufacture of optical instruments and photographic equipment"
        },
        {
          "id": "Manufacture of magnetic and optical media",
          "label": "Manufacture of magnetic and optical media"
        },
        {
          "id": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus",
          "label": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus"
        },
        {
          "id": "Manufacture of batteries and accumulators",
          "label": "Manufacture of batteries and accumulators"
        },
        {
          "id": "Manufacture of wiring and wiring devices",
          "label": "Manufacture of wiring and wiring devices"
        },
        {
          "id": "Manufacture of electric lighting equipment",
          "label": "Manufacture of electric lighting equipment"
        },
        {
          "id": "Manufacture of domestic appliances",
          "label": "Manufacture of domestic appliances"
        },
        {
          "id": "Manufacture of other electrical equipment",
          "label": "Manufacture of other electrical equipment"
        },
        {
          "id": "Manufacture of general-purpose machinery",
          "label": "Manufacture of general-purpose machinery"
        },
        {
          "id": "Manufacture of special-purpose machinery",
          "label": "Manufacture of special-purpose machinery"
        },
        {
          "id": "Manufacture of motor vehicles",
          "label": "Manufacture of motor vehicles"
        },
        {
          "id": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers",
          "label": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers"
        },
        {
          "id": "Manufacture of parts and accessories for motor vehicles",
          "label": "Manufacture of parts and accessories for motor vehicles"
        },
        {
          "id": "Building of ships and boats",
          "label": "Building of ships and boats"
        },
        {
          "id": "Manufacture of railway locomotives and rolling stock",
          "label": "Manufacture of railway locomotives and rolling stock"
        },
        {
          "id": "Manufacture of air and spacecraft and related machinery",
          "label": "Manufacture of air and spacecraft and related machinery"
        },
        {
          "id": "Manufacture of military fighting vehicles",
          "label": "Manufacture of military fighting vehicles"
        },
        {
          "id": "Manufacture of transport equipment n.e.c.",
          "label": "Manufacture of transport equipment n.e.c."
        },
        {
          "id": "Manufacture of furniture",
          "label": "Manufacture of furniture"
        },
        {
          "id": "Manufacture of jewellery, bijouterie and related articles",
          "label": "Manufacture of jewellery, bijouterie and related articles"
        },
        {
          "id": "Manufacture of musical instruments",
          "label": "Manufacture of musical instruments"
        },
        {
          "id": "Manufacture of musical instruments",
          "label": "Manufacture of musical instruments"
        },
        {
          "id": "Manufacture of sports goods",
          "label": "Manufacture of sports goods"
        },
        {
          "id": "Manufacture of games and toys",
          "label": "Manufacture of games and toys"
        },
        {
          "id": "Manufacture of medical and dental instruments and supplies",
          "label": "Manufacture of medical and dental instruments and supplies"
        },
        {
          "id": "Other manufacturing n.e.c.",
          "label": "Other manufacturing n.e.c."
        },
        {
          "id": "Repair of fabricated metal products, machinery and equipment",
          "label": "Repair of fabricated metal products, machinery and equipment"
        },
        {
          "id": "Electric power generation, transmission and distribution",
          "label": "Electric power generation, transmission and distribution"
        },
        {
          "id": "Steam and air conditioning supply",
          "label": "Steam and air conditioning supply"
        },
        {
          "id": "Water collection, treatment and supply",
          "label": "Water collection, treatment and supply"
        },
        {
          "id": "Waste treatment and disposal",
          "label": "Waste treatment and disposal"
        },
        {
          "id": "Materials recovery",
          "label": "Materials recovery"
        },
        {
          "id": "Wholesale on a fee or contract basis",
          "label": "Wholesale on a fee or contract basis"
        },
        {
          "id": "Other specialized wholesale",
          "label": "Other specialized wholesale"
        },
        {
          "id": "Retail sale of other household equipment in specialized stores",
          "label": "Retail sale of other household equipment in specialized stores"
        },
        {
          "id": "Research and experimental development on natural sciences and engineering",
          "label": "Research and experimental development on natural sciences and engineering"
        },
        {
          "id": "Plant propagation",
          "label": "Plant propagation"
        }
      ],
      "classes": [
        {
          "id": "All",
          "label": "All"
        },
        {
          "id": "Support activities for petroleum and natural gas extraction",
          "label": "Support activities for petroleum and natural gas extraction"
        },
        {
          "id": "Processing and preserving of meat",
          "label": "Processing and preserving of meat"
        },
        {
          "id": "Processing and preserving of fish, crustaceans and molluscs",
          "label": "Processing and preserving of fish, crustaceans and molluscs"
        },
        {
          "id": "Processing and preserving of fruit and vegetables",
          "label": "Processing and preserving of fruit and vegetables"
        },
        {
          "id": "Manufacture of vegetable and animal oils and fats",
          "label": "Manufacture of vegetable and animal oils and fats"
        },
        {
          "id": "Manufacture of dairy products",
          "label": "Manufacture of dairy products"
        },
        {
          "id": "Manufacture of grain mill products",
          "label": "Manufacture of grain mill products"
        },
        {
          "id": "Manufacture of starches and starch products",
          "label": "Manufacture of starches and starch products"
        },
        {
          "id": "Manufacture of bakery products",
          "label": "Manufacture of bakery products"
        },
        {
          "id": "Manufacture of sugar",
          "label": "Manufacture of sugar"
        },
        {
          "id": "Manufacture of cocoa, chocolate and sugar confectionery",
          "label": "Manufacture of cocoa, chocolate and sugar confectionery"
        },
        {
          "id": "Manufacture of macaroni, noodles, couscous and similar farinaceous products",
          "label": "Manufacture of macaroni, noodles, couscous and similar farinaceous products"
        },
        {
          "id": "Manufacture of prepared meals and dishes",
          "label": "Manufacture of prepared meals and dishes"
        },
        {
          "id": "Manufacture of other food products n.e.c.",
          "label": "Manufacture of other food products n.e.c."
        },
        {
          "id": "Manufacture of prepared animal feeds",
          "label": "Manufacture of prepared animal feeds"
        },
        {
          "id": "Manufacture of wines",
          "label": "Manufacture of wines"
        },
        {
          "id": "Manufacture of malt liquors and malt",
          "label": "Manufacture of malt liquors and malt"
        },
        {
          "id": "Manufacture of soft drinks; production of mineral waters and other bottled waters",
          "label": "Manufacture of soft drinks; production of mineral waters and other bottled waters"
        },
        {
          "id": "Manufacture of tobacco products",
          "label": "Manufacture of tobacco products"
        },
        {
          "id": "Preparation and spinning of textile fibres",
          "label": "Preparation and spinning of textile fibres"
        },
        {
          "id": "Weaving of textiles",
          "label": "Weaving of textiles"
        },
        {
          "id": "Manufacture of knitted and crocheted fabrics",
          "label": "Manufacture of knitted and crocheted fabrics"
        },
        {
          "id": "Manufacture of made-up textile articles, except apparel",
          "label": "Manufacture of made-up textile articles, except apparel"
        },
        {
          "id": "Manufacture of carpets and rugs",
          "label": "Manufacture of carpets and rugs"
        },
        {
          "id": "Manufacture of cordage, rope, twine and netting",
          "label": "Manufacture of cordage, rope, twine and netting"
        },
        {
          "id": "Manufacture of other textiles n.e.c.",
          "label": "Manufacture of other textiles n.e.c."
        },
        {
          "id": "Manufacture of wearing apparel, except fur apparel",
          "label": "Manufacture of wearing apparel, except fur apparel"
        },
        {
          "id": "Manufacture of articles of fur",
          "label": "Manufacture of articles of fur"
        },
        {
          "id": "Manufacture of knitted and crocheted apparel",
          "label": "Manufacture of knitted and crocheted apparel"
        },
        {
          "id": "Tanning and dressing of leather; dressing and dyeing of fur",
          "label": "Tanning and dressing of leather; dressing and dyeing of fur"
        },
        {
          "id": "Manufacture of luggage, handbags and the like, saddlery and harness",
          "label": "Manufacture of luggage, handbags and the like, saddlery and harness"
        },
        {
          "id": "Manufacture of footwear",
          "label": "Manufacture of footwear"
        },
        {
          "id": "Sawmilling and planing of wood",
          "label": "Sawmilling and planing of wood"
        },
        {
          "id": "Manufacture of veneer sheets and wood-based panels",
          "label": "Manufacture of veneer sheets and wood-based panels"
        },
        {
          "id": "Manufacture of builders' carpentry and joinery",
          "label": "Manufacture of builders' carpentry and joinery"
        },
        {
          "id": "Manufacture of wooden containers",
          "label": "Manufacture of wooden containers"
        },
        {
          "id": "Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials",
          "label": "Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials"
        },
        {
          "id": "Manufacture of pulp, paper and paperboard",
          "label": "Manufacture of pulp, paper and paperboard"
        },
        {
          "id": "Manufacture of corrugated paper and paperboard and of containers of paper and paperboard",
          "label": "Manufacture of corrugated paper and paperboard and of containers of paper and paperboard"
        },
        {
          "id": "Manufacture of other articles of paper and paperboard",
          "label": "Manufacture of other articles of paper and paperboard"
        },
        {
          "id": "Printing",
          "label": "Printing"
        },
        {
          "id": "Service activities related to printing",
          "label": "Service activities related to printing"
        },
        {
          "id": "Reproduction of recorded media",
          "label": "Reproduction of recorded media"
        },
        {
          "id": "Manufacture of coke oven products",
          "label": "Manufacture of coke oven products"
        },
        {
          "id": "Manufacture of refined petroleum products",
          "label": "Manufacture of refined petroleum products"
        },
        {
          "id": "Manufacture of basic chemicals",
          "label": "Manufacture of basic chemicals"
        },
        {
          "id": "Manufacture of fertilizers and nitrogen compounds",
          "label": "Manufacture of fertilizers and nitrogen compounds"
        },
        {
          "id": "Manufacture of plastics and synthetic rubber in primary forms",
          "label": "Manufacture of plastics and synthetic rubber in primary forms"
        },
        {
          "id": "Manufacture of pesticides and other agrochemical products",
          "label": "Manufacture of pesticides and other agrochemical products"
        },
        {
          "id": "Manufacture of paints, varnishes and similar coatings, printing ink and mastics",
          "label": "Manufacture of paints, varnishes and similar coatings, printing ink and mastics"
        },
        {
          "id": "Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations",
          "label": "Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations"
        },
        {
          "id": "Manufacture of other chemical products n.e.c.",
          "label": "Manufacture of other chemical products n.e.c."
        },
        {
          "id": "Manufacture of man-made fibres",
          "label": "Manufacture of man-made fibres"
        },
        {
          "id": "Manufacture of pharmaceuticals, medicinal chemical and botanical products",
          "label": "Manufacture of pharmaceuticals, medicinal chemical and botanical products"
        },
        {
          "id": "Manufacture of rubber tyres and tubes; retreading and rebuilding of rubber tyres",
          "label": "Manufacture of rubber tyres and tubes; retreading and rebuilding of rubber tyres"
        },
        {
          "id": "Manufacture of other rubber products",
          "label": "Manufacture of other rubber products"
        },
        {
          "id": "Manufacture of plastics products",
          "label": "Manufacture of plastics products"
        },
        {
          "id": "Manufacture of glass and glass products",
          "label": "Manufacture of glass and glass products"
        },
        {
          "id": "Manufacture of refractory products",
          "label": "Manufacture of refractory products"
        },
        {
          "id": "Manufacture of clay building materials",
          "label": "Manufacture of clay building materials"
        },
        {
          "id": "Manufacture of other porcelain and ceramic products",
          "label": "Manufacture of other porcelain and ceramic products"
        },
        {
          "id": "Manufacture of cement, lime and plaster",
          "label": "Manufacture of cement, lime and plaster"
        },
        {
          "id": "Manufacture of articles of concrete, cement and plaster",
          "label": "Manufacture of articles of concrete, cement and plaster"
        },
        {
          "id": "Cutting, shaping and finishing of stone",
          "label": "Cutting, shaping and finishing of stone"
        },
        {
          "id": "Manufacture of other non-metallic mineral products n.e.c.",
          "label": "Manufacture of other non-metallic mineral products n.e.c."
        },
        {
          "id": "Manufacture of basic iron and steel",
          "label": "Manufacture of basic iron and steel"
        },
        {
          "id": "Manufacture of basic precious and other non-ferrous metals",
          "label": "Manufacture of basic precious and other non-ferrous metals"
        },
        {
          "id": "Casting of iron and steel",
          "label": "Casting of iron and steel"
        },
        {
          "id": "Casting of non-ferrous metals",
          "label": "Casting of non-ferrous metals"
        },
        {
          "id": "Manufacture of structural metal products",
          "label": "Manufacture of structural metal products"
        },
        {
          "id": "Manufacture of tanks, reservoirs and containers of metal",
          "label": "Manufacture of tanks, reservoirs and containers of metal"
        },
        {
          "id": "Manufacture of steam generators, except central heating hot water boilers",
          "label": "Manufacture of steam generators, except central heating hot water boilers"
        },
        {
          "id": "Manufacture of weapons and ammunition",
          "label": "Manufacture of weapons and ammunition"
        },
        {
          "id": "Forging, pressing, stamping and roll-forming of metal; powder metallurgy",
          "label": "Forging, pressing, stamping and roll-forming of metal; powder metallurgy"
        },
        {
          "id": "Treatment and coating of metals; machining",
          "label": "Treatment and coating of metals; machining"
        },
        {
          "id": "Manufacture of cutlery, hand tools and general hardware",
          "label": "Manufacture of cutlery, hand tools and general hardware"
        },
        {
          "id": "Manufacture of other fabricated metal products n.e.c.",
          "label": "Manufacture of other fabricated metal products n.e.c."
        },
        {
          "id": "Manufacture of electronic components and boards",
          "label": "Manufacture of electronic components and boards"
        },
        {
          "id": "Manufacture of computers and peripheral equipment",
          "label": "Manufacture of computers and peripheral equipment"
        },
        {
          "id": "Manufacture of communication equipment",
          "label": "Manufacture of communication equipment"
        },
        {
          "id": "Manufacture of consumer electronics",
          "label": "Manufacture of consumer electronics"
        },
        {
          "id": "Manufacture of measuring, testing, navigating and control equipment",
          "label": "Manufacture of measuring, testing, navigating and control equipment"
        },
        {
          "id": "Manufacture of watches and clocks",
          "label": "Manufacture of watches and clocks"
        },
        {
          "id": "Manufacture of irradiation, electromedical and electrotherapeutic equipment",
          "label": "Manufacture of irradiation, electromedical and electrotherapeutic equipment"
        },
        {
          "id": "Manufacture of optical instruments and photographic equipment",
          "label": "Manufacture of optical instruments and photographic equipment"
        },
        {
          "id": "Manufacture of magnetic and optical media",
          "label": "Manufacture of magnetic and optical media"
        },
        {
          "id": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus",
          "label": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus"
        },
        {
          "id": "Manufacture of batteries and accumulators",
          "label": "Manufacture of batteries and accumulators"
        },
        {
          "id": "Manufacture of fibre optic cables",
          "label": "Manufacture of fibre optic cables"
        },
        {
          "id": "Manufacture of other electronic and electric wires and cables",
          "label": "Manufacture of other electronic and electric wires and cables"
        },
        {
          "id": "Manufacture of wiring devices",
          "label": "Manufacture of wiring devices"
        },
        {
          "id": "Manufacture of electric lighting equipment",
          "label": "Manufacture of electric lighting equipment"
        },
        {
          "id": "Manufacture of domestic appliances",
          "label": "Manufacture of domestic appliances"
        },
        {
          "id": "Manufacture of other electrical equipment",
          "label": "Manufacture of other electrical equipment"
        },
        {
          "id": "Manufacture of engines and turbines, except aircraft, vehicle and cycle engines",
          "label": "Manufacture of engines and turbines, except aircraft, vehicle and cycle engines"
        },
        {
          "id": "Manufacture of fluid power equipment",
          "label": "Manufacture of fluid power equipment"
        },
        {
          "id": "Plant propagation",
          "label": "Plant propagation"
        }
      ],
      "branches": [
        {
          "id": "All",
          "label": "All"
        },
        {
          "id": "Branch of a Foreign Company",
          "label": "Branch of a Foreign Company"
        },
        {
          "id": "Branch of a GCC",
          "label": "Branch of a GCC"
        },
        {
          "id": "Branch of a Local Company",
          "label": "Branch of a Local Company"
        },
        {
          "id": "Branch of a Local Establishment",
          "label": "Branch of a Local Establishment"
        },
        {
          "id": "Company from Another Emirate",
          "label": "Company from Another Emirate"
        },
        {
          "id": "Establishment from Another Emirate",
          "label": "Establishment from Another Emirate"
        },
        {
          "id": "Branch of Free Zone",
          "label": "Branch of Free Zone"
        }
      ],
      "categoryValue": "All",
      "divisionValue": "All",
      "groupValue": "All",
      "classValue": "All",
      "branchValue": "All",
      "divisionDisabled": true,
      "groupDisabled": true,
      "classDisabled": true,
      "branchDisabled": true,
      "tableColumns": [],
      "tableActivities": [],
      "currentStepIndex": 0,
      "currentSubStepIndex": 0,
      "steps": [
        {
          "id": "step_fillApplication",
          "label": "Fill application",
          "link": "",
          "status": ""
        },
        {
          "id": "step_getEconomicLicence",
          "label": "Get economic licence",
          "link": "",
          "status": ""
        }
      ],
      "expandedStepIndexes": [],
      "showSidebar": true,
      "individualIssuedTags": [
        {
          "label": "i18n('referenceNo')",
          "value": ""
        },
        {
          "label": "i18n('submittedOn')",
          "value": ""
        }
      ],
      "referenceNo": "IN-12345678",
      "paymentSummaryColoum": [
        {
          "id": "description",
          "title": "i18n('individual_description_title')",
          "align": "start"
        },
        {
          "id": "price",
          "title": "i18n('price')",
          "align": "end"
        }
      ],
      "paymentSummaryRows": [],
      "paymentTotal": 0,
      "listOfLegalForm": [
        {
          "id": "",
          "label": "",
          "disabled": false
        }
      ],
      "selectedLegalFrom": "",
      "industrialList": [
        {
          "id": "Chemical Industries",
          "label": "i18n('chemical-industries')",
          "disabled": false
        },
        {
          "id": "Construction and Glass Industries",
          "label": "i18n('construction-and-glass-industries')",
          "disabled": false
        },
        {
          "id": "Electronic and Electrical Industries",
          "label": "i18n('electronic-and-electrical-industries')",
          "disabled": false
        },
        {
          "id": "Energy and Sustainability Industries",
          "label": "i18n('energy-and-sustainability-industries')",
          "disabled": false
        },
        {
          "id": "Food Industries",
          "label": "i18n('food-industries')",
          "disabled": false
        },
        {
          "id": "General Industries",
          "label": "i18n('general-industries')",
          "disabled": false
        },
        {
          "id": "Machineries and Equipment's Industries",
          "label": "i18n('machineries-and-equipment-industries')",
          "disabled": false
        },
        {
          "id": "Metal Industries",
          "label": "i18n('metal-industries')",
          "disabled": false
        },
        {
          "id": "Printing and Media Industries",
          "label": "i18n('printing-and-media-industries')",
          "disabled": false
        },
        {
          "id": "Rubber, Plastic, and Fiberglass Industries",
          "label": "i18n('rubber-plastic-and-fiberglass-industries')",
          "disabled": false
        },
        {
          "id": "Textiles, Wearing Apparel, and Leather Industries",
          "label": "i18n('textiles-wearing-apparel-and-leather-industries')",
          "disabled": false
        },
        {
          "id": "Wood and Paper Industries",
          "label": "i18n('wood-and-paper-industries')",
          "disabled": false
        }
      ],
      "selectedIndustrialType": "",
      "ownerDetailsColumns": [
        {
          "id": "name",
          "title": "i18n('individual_owner_label_name')"
        },
        {
          "id": "idNumber",
          "title": "i18n('individual_owner_label_id_number')"
        },
        {
          "id": "nationality",
          "title": "i18n('individual_owner_label_nationality')"
        },
        {
          "id": "share",
          "title": "i18n('individual_owner_label_share')"
        }
      ],
      "ownerDetailsRow": [
        {
          "_id": "1",
          "exampleField": "Example Value"
        }
      ],
      "tableAllActivities": [],
      "tableSearch": "",
      "tableTotalRecords": 0,
      "tableCurrPage": 1,
      "tablePageSize": 10,
      "tablePageResizeOptions": [],
      "basket": [],
      "totalCapitalvalue": "",
      "totalInvestmentValue": "",
      "companySubmitStatusDisabled": false,
      "comanyTotalDisabled": false,
      "getActivitiesReqFilter": [],
      "transactionNumber": "",
      "englishPreferedName": "",
      "arabicPreferedName": "",
      "englishPreferedNameValidStatus": "null",
      "arabicPreferedNameValidStatus": "null",
      "englishPreferedNameHelpMsg": "",
      "arabicPreferedNameHelpMsg": "",
      "economicNameDisabled": true,
      "economicNameCheckLoader": false,
      "checkAvailabilityBtnDisabled": false,
      "showNameSuggestions": false,
      "tableEconomicNameColumns": [
        {
          "id": "nameEn",
          "title": "English economic name"
        },
        {
          "id": "nameAr",
          "title": "Arabic economic name"
        }
      ],
      "tableEconomicNameItems": [],
      "validateStatus_ totalCapitalvalue": "",
      "validateStatusTotalCapitalValue": "",
      "validateStatusTotalInvestmentValue": "",
      "helpValidateStatusTotalCapitalValue": "",
      "helpValidateStatusTotalInvestmentValue": "",
      "companyDetailsCheckLoader": false,
      "chooseActivitiesCheckLoader": false,
      "applicationApprovedCheckLoader": false,
      "downloadCertificateCheckLoader": false,
      "economicNameSubmitCheckLoader": false,
      "tags_bffdfccfdc": [
        {
          "label": "",
          "value": ""
        }
      ],
      "currency": "AED",
      "chooseActivitiesBtnDisabled": true,
      "autogenerateChecked": false,
      "economicNameEngDisabled": false,
      "economicNameArbDisabled": false,
      "isModalOpen": false,
      "companyDetailsExistingBranchType": [
        {
          "id": "Yes",
          "label": "i18n('existingBranchType_key1')",
          "disabled": false
        },
        {
          "id": "No",
          "label": "i18n('existingBranchType_key2')",
          "disabled": false
        }
      ],
      "companyDetailsExistingBranchTypeVal": "",
      "companyDetailsBranchType": [
        {
          "id": "i18n('companyDetailsBranchType_key1')",
          "label": "i18n('companyDetailsBranchType_key1')",
          "disabled": false
        },
        {
          "id": "i18n('companyDetailsBranchType_key2')",
          "label": "i18n('companyDetailsBranchType_key2')",
          "disabled": false
        },
        {
          "id": "i18n('companyDetailsBranchType_key3')",
          "label": "i18n('companyDetailsBranchType_key3')",
          "disabled": false
        },
        {
          "id": "i18n('companyDetailsBranchType_key4')",
          "label": "i18n('companyDetailsBranchType_key4')",
          "disabled": false
        },
        {
          "id": "i18n('companyDetailsBranchType_key5')",
          "label": "i18n('companyDetailsBranchType_key5')",
          "disabled": false
        },
        {
          "id": "i18n('companyDetailsBranchType_key6')",
          "label": "i18n('companyDetailsBranchType_key6')",
          "disabled": false
        },
        {
          "id": "i18n('companyDetailsBranchType_key7)",
          "label": "i18n('companyDetailsBranchType_key7')",
          "disabled": false
        }
      ],
      "companyDetailsBranchTypeVal": "",
      "parentCompanylicenceNumberVal": "",
      "validateStatus_existingLicense": "",
      "help_existingLicense": "",
      "existingLicenceVisibility": true,
      "validateStatus_industryType": "",
      "help_industryType": false,
      "validateStatus_branchType": "",
      "help_branchType": false,
      "validateStatus_parentLicenceNumber": "",
      "help_parentLicenceNumber": false,
      "download_dropdown_items": [
        {
          "id": "certificate",
          "label": "i18n('download_dropdown_certificate')",
          "disabled": false
        },
        {
          "id": "Commercial Register",
          "label": "i18n('download_dropdown_licence')",
          "disabled": false
        }
      ],
      "download_value": "",
      "tradeNameTableColumn": [
        {
          "id": "englishName",
          "title": "i18n('englishName')"
        },
        {
          "id": "arabicName",
          "title": "i18n('arabicName')"
        }
      ],
      "tradeNameTableRow": [],
      "uploadDocumentNextBtnDisabled": true,
      "files": [],
      "tnNumber": "",
      "partners": [],
      "tradeNameBtnDisabled": true,
      "tradeNameCheckLoader": false,
      "tradeNameBtnCheckLoader": false,
      "tradeNamePartnersList": [],
      "tradeNameCapId": "",
      "selectedActivities": [],
      "smartPassURL": "",
      "uaePassURL": "",
      "branchType": "",
      "mainLicenseNumber": "",
      "isbranch": "",
      "legalType": "",
      "somethingWentWrongContent": "",
      "applicationsList": [],
      "applicationStatuses": [
        {
          "id": "1",
          "iconName": "",
          "iconColor": "",
          "label": ""
        }
      ],
      "tradeNumberCheckDisabled": true,
      "legalFormSelect": [],
      "legalTypeArb": "",
      "tradeNumberValidateStatus": "",
      "tradeNumberHelpMsg": "",
      "loading": false,
      "responseDescription": "",
      "tableActivitiesStatus": "",
      "tradeNameStatus": "",
      "isProcessStarted": false,
      "adgeName": "DED",
      "serviceCode": "DED_028",
      "productName": "NOP",
      "breadCrumItems": [
        {
          "label": "",
          "link": "",
          "linkTarget": ""
        }
      ],
      "relevant_entities": [],
      "tradeNameLink": "",
      "isCancelModalOpen": false,
      "activitiesCommonSelection": "unchecked"
    },
    "persistStates": [
      "branchType",
      "mainLicenseNumber",
      "isbranch",
      "legalType",
      "legalTypeArb",
      "loading",
      "responseDescription",
      "isProcessStarted"
    ]
  },
  "hero": [
    {
      "type": "symbol",
      "props": {
        "symbol": "u_7BA0xr8Q0oku7QtzxvE"
      },
      "state": {
        "mapState": [
          "breadCrumItems"
        ],
        "mapDispatch": []
      }
    }
  ],
  "sidebar": [
    {
      "type": "symbol",
      "props": {
        "symbol": "pOuCbjftw6l5xN5WTMEPb"
      }
    }
  ]
}

export default config;