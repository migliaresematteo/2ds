// Definisci un array di oggetti, ognuno rappresenta i dati per un singolo componente
let cars = [
    {
        name: "Toyota Aygo X",
        imageSrc: "../assets/macchine/Toyota_Aygo_X.jpg",
        description: "1.0 VVT-i 72 CV 5 porte Trend",
        price: "380.00",
        pdfLink: "../assets/macchine/pdfMacchine/ToyotaAygoX.pdf",
        id: ""
    },
    {
        name: "FIAT Panda",
        imageSrc: "../assets/macchine/Fiat_Panda.jpg",
        description: "1.0 FireFly 70cv S&S Hybrid",
        price: "361.00",
        pdfLink: "../assets/macchine/pdfMacchine/Fiat_Panda.pdf",
        id: ""
    },
    {
        name: "CITROEN C3",
        imageSrc: "../assets/macchine/Citroen_C3.jpg",
        description: "PureTech 83 S&S You",
        price: "372.00",
        pdfLink: "../assets/macchine/pdfMacchine/Citroen_c3.pdf",
        id: ""
    },
    {
        name: "LANCIA Ypsilon",
        imageSrc: "../assets/macchine/Lancia_Ypsilon.jpg",
        description: "1.0 FireFly 70cv Hybrid Gold",
        price: "395.00",
        pdfLink: "../assets/macchine/pdfMacchine/LANCIA_YPSILON.pdf",
        id: ""
    },
    {
        name: "RENAULT Clio",
        imageSrc: "../assets/macchine/Renault_Clio.jpg",
        description: "TCe 100 CV GPL 5 porte Evolution",
        price: "419.00",
        pdfLink: "../assets/macchine/pdfMacchine/RenaultClio.pdf",
        id: ""
    },
    {
        name: "OPEL Corsa",
        imageSrc: "../assets/macchine/Opel_Corsa.jpg",
        description: "1.2 75cv",
        price: "433.00",
        pdfLink: "../assets/macchine/pdfMacchine/Opel_Corsa.pdf",
        id: ""
    },
    {
        name: "FIAT 500",
        imageSrc: "../assets/macchine/Fiat_500.jpg",
        description: "1.0 70cv Hybrid",
        price: "401.00",
        pdfLink: "../assets/macchine/pdfMacchine/Fiat500.pdf",
        id: ""
    },
    {
        name: "SUZUKI Swift",
        imageSrc: "../assets/macchine/Suzuki_Swift.jpg",
        description: "1.2 Hybrid Top",
        price: "483.00",
        pdfLink: "../assets/macchine/pdfMacchine/SuzukiSwift.pdf",
        id: ""
    },
    {
        name: "DACIA Duster",
        imageSrc: "../assets/macchine/Dacia_Duster.jpg",
        description: "1.0 TCe GPL 4x2 Expression",
        price: "485.00",
        pdfLink: "../assets/macchine/pdfMacchine/DaciaDuster.pdf",
        id: ""
    },
    {
        name: "VOLKSWAGEN Polo",
        imageSrc: "../assets/macchine/Vw_Polo.jpg",
        description: "Polo 1.0 EVO Life",
        price: "483.00",
        pdfLink: "../assets/macchine/pdfMacchine/VPolo.pdf",
        id: ""
    },
    {
        name: "TOYOTA Yaris",
        imageSrc: "../assets/macchine/Toyota_Yaris.jpg",
        description: "1.5 Hybrid 5 porte Trend",
        price: "500.00",
        pdfLink: "../assets/macchine/pdfMacchine/TYaris.pdf",
        id: ""
    },
    {
        name: "FIAT 500x",
        imageSrc: "../assets/macchine/Fiat_500x.jpg",
        description: "1.0 T3 120cv MT6",
        price: "551.00",
        pdfLink: "../assets/macchine/pdfMacchine/500x.pdf",
        id: ""
    },
    {
        name: "FORD Puma",
        imageSrc: "../assets/macchine/Ford_Puma.jpg",
        description: "1.0 EcoBoost Hybrid 125 CV S&S ST-Line",
        price: "511.00",
        pdfLink: "../assets/macchine/pdfMacchine/Fp.pdf",
        id: ""
    },
    {
        name: "RENAULT Capture",
        imageSrc: "../assets/macchine/Renault_Capture.jpg",
        description: "TCe 12V 90 CV Techno?",
        price: "509.00",
        pdfLink: "../assets/macchine/pdfMacchine/RCap.pdf",
        id: ""
    },
    {
        name: "PEUGEOT 208",
        imageSrc: "../assets/macchine/P_208.jpg",
        description: "Allure Pack BlueHDi 100 S/S",
        price: "469.00",
        pdfLink: "../assets/macchine/pdfMacchine/P208.pdf",
        id: ""
    },
    {
        name: "FIAT Fiorino",
        imageSrc: "../assets/macchine/Fiat_Fiorino.jpg",
        description: "1.3 MJT 95CV Cargo",
        price: "505.00",
        pdfLink: "../assets/macchine/pdfMacchine/FFiorino.pdf",
        id: ""
    },
    {
        name: "FIAT Tipo",
        imageSrc: "../assets/macchine/Fiat_Tipo.jpg",
        description: "1.6 Mjt 130 CV S&S",
        price: "496.00",
        pdfLink: "../assets/macchine/pdfMacchine/FT.pdf",
        id: ""
    },
    {
        name: "FORD Focus",
        imageSrc: "../assets/macchine/Ford_Focus.jpg",
        description: "1.0 EcoBoost Hybrid 125 CV 5p. ST-Line Style",
        price: "544.00",
        pdfLink: "../assets/macchine/pdfMacchine/Focus.pdf",
        id: ""
    },
    {
        name: "OPEL Astra",
        imageSrc: "../assets/macchine/Opel_Astra.jpg",
        description: "1.5 Turbo 130cv Edition MT6",
        price: "500.00",
        pdfLink: "../assets/macchine/pdfMacchine/OAstra.pdf",
        id: ""
    },
    {
        name: "JEEP Avenger",
        imageSrc: "../assets/macchine/Jeep_Avenger.jpg",
        description: "1.2 Turbo Altitude",
        price: "561.00",
        pdfLink: "../assets/macchine/pdfMacchine/Avenger.pdf",
        id: ""
    },
    {
        name: "KIA Sportage",
        imageSrc: "../assets/macchine/Kia_Sportage.pg.png",
        description: "1.6 CRDI MHEV BUSINESS 2WD DCT",
        price: "566.00",
        pdfLink: "../assets/macchine/pdfMacchine/kiasport.pdf",
        id: ""
    },
    {
        name: "NISSAN Qashqai",
        imageSrc: "../assets/macchine/Qash.jpg",
        description: "MHEV 140 CV Acenta",
        price: "584.00",
        pdfLink: "../assets/macchine/pdfMacchine/qashpdf.pdf",
        id: ""
    },
    {
        name: "MINI Cooper",
        imageSrc: "../assets/macchine/mini.jpg",
        description: "Classic",
        price: "547.00",
        pdfLink: "../assets/macchine/pdfMacchine/mini.pdf",
        id: ""
    },
    {
        name: "OPEL Mokka",
        imageSrc: "../assets/macchine/mokka.jpg",
        description: "1.2 T Elegance 100cv MT6",
        price: "568.00",
        pdfLink: "../assets/macchine/pdfMacchine/mokka.pdf",
        id: ""
    },
    {
        name: "PEUGEOT 2008",
        imageSrc: "../assets/macchine/2008.jpg",
        description: "PureTech 130 Allure Pack S/S",
        price: "544.00",
        pdfLink: "../assets/macchine/pdfMacchine/2008.pdf",
        id: ""
    },
    {
        name: "CITROEN Berlingo",
        imageSrc: "../assets/macchine/berlingo.png",
        description: "BlueHDi 100 S&S M Club 1000kg",
        price: "547.00",
        pdfLink: "../assets/macchine/pdfMacchine/berlingo.pdf",
        id: ""
    },
    {
        name: "FIAT 500",
        imageSrc: "../assets/macchine/500berlina.jpg",
        description: "Berlina 42 kWh",
        price: "579.00",
        pdfLink: "../assets/macchine/pdfMacchine/berlina.pdf",
        id: ""
    },
    {
        name: "FIAT Doblo",
        imageSrc: "../assets/macchine/doblo.jpg",
        description: "1.5 BlueHdi 130CV PC-TN Van",
        price: "579.00",
        pdfLink: "../assets/macchine/pdfMacchine/doblo.pdf",
        id: ""
    },
    {
        name: "BMW Serie 1",
        imageSrc: "../assets/macchine/bmw1.jpg",
        description: "118i 5p. Business Advantage",
        price: "608.00",
        pdfLink: "../assets/macchine/pdfMacchine/bmw1.pdf",
        id: ""
    },
    {
        name: "PEUGEOT Partner",
        imageSrc: "../assets/macchine/partner.png",
        description: "L2 BlueHDi 100cv Premium",
        price: "564.00",
        pdfLink: "../assets/macchine/pdfMacchine/partner.pdf",
        id: ""
    },
    {
        name: "JEEP Renegade",
        imageSrc: "../assets/macchine/renegade.jpg",
        description: "1.6 MJet 130cv Limited",
        price: "584.00",
        pdfLink: "../assets/macchine/pdfMacchine/renegade.pdf",
        id: ""
    },
    {
        name: "MAZDA CX-30",
        imageSrc: "../assets/macchine/cx30.png",
        description: "2.0L Skyactiv-G 150cv M Hybr. Prime Line Sport",
        price: "608.00",
        pdfLink: "../assets/macchine/pdfMacchine/cx30.pdf",
        id: ""
    },
    {
        name: "RENAULT ZOE",
        imageSrc: "../assets/macchine/zoe.jpg",
        description: "Equilibre R110",
        price: "624.00",
        pdfLink: "../assets/macchine/pdfMacchine/zoe.pdf",
        id: ""
    },
    {
        name: "FORD Tourneo CONNECT",
        imageSrc: "../assets/macchine/connect.jpg",
        description: "2.0 EcoBlue 90kW Titanium",
        price: "639.00",
        pdfLink: "../assets/macchine/pdfMacchine/connect.pdf",
        id: ""
    },
    {
        name: "CUPRA Leon Sportstourer",
        imageSrc: "../assets/macchine/cupra.jpg",
        description: "1.5 TSI 110kW DSG",
        price: "614.00",
        pdfLink: "../assets/macchine/pdfMacchine/cupra.pdf",
        id: ""
    },
    {
        name: "TOYOTA C-HR",
        imageSrc: "../assets/macchine/chr.png",
        description: "C-HR 1.8H (122CV) E-CVT Business",
        price: "623.00",
        pdfLink: "../assets/macchine/pdfMacchine/chr.pdf",
        id: ""
    },
    {
        name: "PEUGEOT 308 SW",
        imageSrc: "../assets/macchine/308.jpg",
        description: "308 SW Allure BlueHDi 130 EAT8 S&S aut.",
        price: "650.00",
        pdfLink: "../assets/macchine/pdfMacchine/308.pdf",
        id: ""
    },
    {
        name: "VOLKSWAGEN Taigo",
        imageSrc: "../assets/macchine/taigo.jpg",
        description: "TAIGO 1.0 TSI 81kW Life DSG",
        price: "617.00",
        pdfLink: "../assets/macchine/pdfMacchine/taigo.pdf",
        id: ""
    },
    {
        name: "OPEL Movano",
        imageSrc: "../assets/macchine/movano.png",
        description: "MOVANO Furgone 28 L1H1 BlueHDi 120 S&S",
        price: "622.00",
        pdfLink: "../assets/macchine/pdfMacchine/movano.pdf",
        id: ""
    },
    {
        name: "FORD Kuga",
        imageSrc: "../assets/macchine/kuga.jpg",
        description: "KUGA 2.0 EcoBlue 120CV 2WD ST-Line Bus. Auto",
        price: "666.00",
        pdfLink: "../assets/macchine/pdfMacchine/kuga.pdf",
        id: ""
    },
    {
        name: "AUDI Q2",
        imageSrc: "../assets/macchine/q2.png",
        description: "Q2 2.0 30 TDI BUSINESS ADVANCED",
        price: "635.00",
        pdfLink: "../assets/macchine/pdfMacchine/q2.pdf",
        id: ""
    },
    {
        name: "JEEP Compass",
        imageSrc: "../assets/macchine/compass.jpg",
        description: "COMPASS 1.5 Turbo MHEV T4 96kW Longitude DDCT",
        price: "633.00",
        pdfLink: "../assets/macchine/pdfMacchine/compass.pdf",
        id: ""
    },
    {
        name: "VOLKSWAGEN Golf 8",
        imageSrc: "../assets/macchine/golf8.jpg",
        description: "GOLF 2.0 TDI SCR 110KW Life DSG",
        price: "658.00",
        pdfLink: "../assets/macchine/pdfMacchine/golf8.pdf",
        id: ""
    },
    {
        name: "DS DS 4",
        imageSrc: "../assets/macchine/ds4.png",
        description: "DS 4 BlueHDi 130 Automatico Bastille Business",
        price: "638.00",
        pdfLink: "../assets/macchine/pdfMacchine/ds4.pdf",
        id: ""
    },
    {
        name: "VOLKSWAGEN T-Roc",
        imageSrc: "../assets/macchine/troc.jpg",
        description: "T-ROC 2.0 TDI SCR Life DSG",
        price: "671.00",
        pdfLink: "../assets/macchine/pdfMacchine/troc.pdf",
        id: ""
    },
    {
        name: "CITROEN Jumpy",
        imageSrc: "../assets/macchine/jumpy.jpg",
        description: "JUMPY 1.5 BlueHDi 120 S&S M",
        price: "672.00",
        pdfLink: "../assets/macchine/pdfMacchine/jumpy.pdf",
        id: ""
    },
    {
        name: "CITROEN C5 Aircross",
        imageSrc: "../assets/macchine/aircross.jpg",
        description: "C5 AIRCROSS Hybrid 136 E Series e-DCS6",
        price: "689.00",
        pdfLink: "../assets/macchine/pdfMacchine/aircross.pdf",
        id: ""
    },
    {
        name: "PEUGEOT 3008",
        imageSrc: "../assets/macchine/3008.jpg",
        description: "3008 BlueHDI 130 EAT8 S&S Allure Pack",
        price: "671.00",
        pdfLink: "../assets/macchine/pdfMacchine/3008.pdf",
        id: ""
    },
    {
        name: "OPEL Grandland",
        imageSrc: "../assets/macchine/grandland.jpg",
        description: "GRANDLAND 1.5 130cv AT8 Business Elegance",
        price: "672.00",
        pdfLink: "../assets/macchine/pdfMacchine/grandland.pdf",
        id: ""
    },
    {
        name: "CITROEN Jumper",
        imageSrc: "../assets/macchine/jumper.jpg",
        description: "JUMPER 2.2 BlueHDi 140 S&S 35 L2H2 EAT8",
        price: "763.00",
        pdfLink: "../assets/macchine/pdfMacchine/jumper.pdf",
        id: ""
    },
    {
        name: "TOYOTA RAV4",
        imageSrc: "../assets/macchine/rav4.jpg",
        description: "RAV4 2.5 HV (222CV) E-CVT Active 4WD",
        price: "734.00",
        pdfLink: "../assets/macchine/pdfMacchine/rav4.pdf",
        id: ""
    },
    {
        name: "PEUGEOT Expert",
        imageSrc: "../assets/macchine/exp.png",
        description: "EXPERT 2.0 BlueHDi 140 Standard aut.",
        price: "727.00",
        pdfLink: "../assets/macchine/pdfMacchine/exp.pdf",
        id: ""
    },
    {
        name: "MERCEDES Classe A",
        imageSrc: "../assets/macchine/mca.jpg",
        description: "A-CLASS A 180 d Progressive Advanced",
        price: "766.00",
        pdfLink: "../assets/macchine/pdfMacchine/mca.pdf",
        id: ""
    },
    {
        name: "SKODA Kodiaq",
        imageSrc: "../assets/macchine/kodi.png",
        description: "KODIAQ 2.0 TDI 110KW STYLE DSG 7p",
        price: "744.00",
        pdfLink: "../assets/macchine/pdfMacchine/kodi.pdf",
        id: ""
    },
    {
        name: "ALFA ROMEO Tonale",
        imageSrc: "../assets/macchine/roto.png",
        description: "TONALE 1.6 Diesel 130cv TCT6 Sprint",
        price: "768.00",
        pdfLink: "../assets/macchine/pdfMacchine/roto.pdf",
        id: ""
    },
    {
        name: "FORD Ranger",
        imageSrc: "../assets/macchine/fra.png",
        description: "RANGER Supercab XL 4WD 2.0 Ecoblue 170CV",
        price: "779.00",
        pdfLink: "../assets/macchine/pdfMacchine/fra.pdf",
        id: ""
    },
    {
        name: "RENAULT Trafic",
        imageSrc: "../assets/macchine/traf.png",
        description: "TRAFIC FG L1 H1 T27 dCi 170 EDC START",
        price: "758.00",
        pdfLink: "../assets/macchine/pdfMacchine/traf.pdf",
        id: ""
    },
    {
        name: "FIAT Scudo",
        imageSrc: "../assets/macchine/scudo.png",
        description: "SCUDO L2H1 2.0 BHDI 145cv MT6 no S&S DC FISSA",
        price: "751.00",
        pdfLink: "../assets/macchine/pdfMacchine/scudo.pdf",
        id: ""
    },
    {
        name: "RENAULT Master",
        imageSrc: "../assets/macchine/master.jpg",
        description: "MASTER FG 6P TA L2 H2 T33 dCi 150 QS start MY23",
        price: "774.00",
        pdfLink: "../assets/macchine/pdfMacchine/master.pdf",
        id: ""
    },
    {
        name: "FIAT Ducato",
        imageSrc: "../assets/macchine/duca.jpg",
        description: "DUCATO 33Q MH2 120CV 2.2 Multijet 3 E6E",
        price: "785.00",
        pdfLink: "../assets/macchine/pdfMacchine/duca.pdf",
        id: ""
    },
    {
        name: "CUPRA Formentor",
        imageSrc: "../assets/macchine/form.jpg",
        description: "FORMENTOR 2.0 TDI 4Drive DSG",
        price: "806.00",
        pdfLink: "../assets/macchine/pdfMacchine/form.pdf",
        id: ""
    },
    {
        name: "FORD Transit Custom",
        imageSrc: "../assets/macchine/transit.png",
        description: "TRANSIT CUSTOM 320L1H1 2.0 Eco 136cv Auto AWD Trend",
        price: "789.00",
        pdfLink: "../assets/macchine/pdfMacchine/transit.pdf",
        id: ""
    },
    {
        name: "DS DS 7",
        imageSrc: "../assets/macchine/ds7.jpg",
        description: "DS 7 E-Tense 4x4 Automatica Business Bastille",
        price: "812.00",
        pdfLink: "../assets/macchine/pdfMacchine/ds7.pdf",
        id: ""
    },
    {
        name: "AUDI Q3",
        imageSrc: "../assets/macchine/q3.png",
        description: "Q3 35 TFSI S tronic S Line Edition",
        price: "841.00",
        pdfLink: "../assets/macchine/pdfMacchine/q3.pdf",
        id: ""
    },
    {
        name: "PEUGEOT 508 SW",
        imageSrc: "../assets/macchine/508.jpg",
        description: "508 Hybrid 225 Allure Pack SW e-EAT8",
        price: "855.00",
        pdfLink: "../assets/macchine/pdfMacchine/508.pdf",
        id: ""
    },
    {
        name: "VOLVO V60",
        imageSrc: "../assets/macchine/v60.png",
        description: "V60 B4 autom. CORE",
        price: "852.00",
        pdfLink: "../assets/macchine/pdfMacchine/v60.pdf",
        id: ""
    },
    {
        name: "MAZDA CX-60",
        imageSrc: "../assets/macchine/cx60.png",
        description: "CX-60 3.3L e-SKYACTIV MHEV Excl. Line AWD Auto",
        price: "851.00",
        pdfLink: "../assets/macchine/pdfMacchine/cx60.pdf",
        id: ""
    },
    {
        name: "BMW X1",
        imageSrc: "../assets/macchine/x1.jpg",
        description: "X1 sDrive 18i MSport DCT",
        price: "934.00",
        pdfLink: "../assets/macchine/pdfMacchine/x1.pdf",
        id: ""
    },
    {
        name: "BMW Serie 3",
        imageSrc: "../assets/macchine/s3.jpg",
        description: "SERIES 3 320d xDrive 48V Touring aut.",
        price: "933.00",
        pdfLink: "../assets/macchine/pdfMacchine/s3.pdf",
        id: ""
    },
    {
        name: "AUDI Q3 Sportback",
        imageSrc: "../assets/macchine/q3sport.png",
        description: "Q3 SPORTBACK 40 TDI quattro S tronic Business Plus",
        price: "944.00",
        pdfLink: "../assets/macchine/pdfMacchine/q3sport.pdf",
        id: ""
    },
    {
        name: "MERCEDES GLA",
        imageSrc: "../assets/macchine/gla.jpg",
        description: "GLA GLA 200 AMG Line Adv Plus",
        price: "960.00",
        pdfLink: "../assets/macchine/pdfMacchine/gla.pdf",
        id: ""
    },
    {
        name: "BMW X3",
        imageSrc: "../assets/macchine/x3.jpg",
        description: "X3 xDrive 20d MH48V",
        price: "980.00",
        pdfLink: "../assets/macchine/pdfMacchine/x3.pdf",
        id: ""
    },
    {
        name: "ALFA ROMEO Giulia",
        imageSrc: "../assets/macchine/giulia.jpg",
        description: "GIULIA 2.2 TD 210cv Veloce AT8 Q4",
        price: "1008.00",
        pdfLink: "../assets/macchine/pdfMacchine/giulia.pdf",
        id: ""
    },
    {
        name: "VOLKSWAGEN ID.4",
        imageSrc: "../assets/macchine/id4.jpg",
        description: "ID.4 Pro 4MOTION",
        price: "1005.00",
        pdfLink: "../assets/macchine/pdfMacchine/id4.pdf",
        id: ""
    },
    {
        name: "VOLVO XC60",
        imageSrc: "../assets/macchine/xc60.png",
        description: "XC60 B5 AWD automatico Core",
        price: "996.00",
        pdfLink: "../assets/macchine/pdfMacchine/xc60.pdf",
        id: ""
    },
    {
        name: "AUDI Q5",
        imageSrc: "../assets/macchine/q5.png",
        description: "Q5 40 TDI Business quattro S tronic",
        price: "1055.00",
        pdfLink: "../assets/macchine/pdfMacchine/q5.pdf",
        id: ""
    },
    {
        name: "AUDI A4 Avant",
        imageSrc: "../assets/macchine/avant.png",
        description: "A4 2.0 40 TDI BUSINESS S TRONIC",
        price: "1076.00",
        pdfLink: "../assets/macchine/pdfMacchine/avant.pdf",
        id: ""
    },
    {
        name: "BMW iX1",
        imageSrc: "../assets/macchine/ix1.jpg",
        description: "IX1 xDrive 30",
        price: "1084.00",
        pdfLink: "../assets/macchine/pdfMacchine/ix1.pdf",
        id: ""
    },
    {
        name: "ALFA ROMEO Stelvio",
        imageSrc: "../assets/macchine/stelvio.png",
        description: "STELVIO 2.2 TD 210 CV Veloce AT8 Q4",
        price: "1118.00",
        pdfLink: "../assets/macchine/pdfMacchine/stelvio.pdf",
        id: ""
    },
    {
        name: "TESLA Model 3",
        imageSrc: "../assets/macchine/tm3.jpg",
        description: "MODEL 3 75 kWh Long Range Dual Motor AWD",
        price: "1074.00",
        pdfLink: "../assets/macchine/pdfMacchine/tm3.pdf",
        id: ""
    },
    {
        name: "BMW i4",
        imageSrc: "../assets/macchine/i4.jpg",
        description: "I4 eDrive 40 M Sport",
        price: "1127.00",
        pdfLink: "../assets/macchine/pdfMacchine/i4.pdf",
        id: ""
    },
    {
        name: "TESLA Model Y",
        imageSrc: "../assets/macchine/y.jpg",
        description: "MODEL Y 75 kWh Dual Motor Long Range 4WD aut.",
        price: "1167.00",
        pdfLink: "../assets/macchine/pdfMacchine/y.pdf",
        id: ""
    },
    {
        name: "BMW X4",
        imageSrc: "../assets/macchine/x4.jpg",
        description: "X4 xDrive 20d MH48V",
        price: "1167.00",
        pdfLink: "../assets/macchine/pdfMacchine/x4.pdf",
        id: ""
    },
    {
        name: "LAND ROVER DISCOVERY Sport",
        imageSrc: "../assets/macchine/discovery.jpg",
        description: "DISCOVERY SPORT 1.5 I3 PHEV 309cv S 4WD aut.",
        price: "1249.00",
        pdfLink: "../assets/macchine/pdfMacchine/discovery.pdf",
        id: ""
    },
    {
        name: "BMW ix3",
        imageSrc: "../assets/macchine/ix3.jpg",
        description: "IX3 Impressive Auto",
        price: "1273.00",
        pdfLink: "../assets/macchine/pdfMacchine/ix3.pdf",
        id: ""
    },
    {
        name: "LAND ROVER Range Rover Evoque",
        imageSrc: "../assets/macchine/evo.jpg",
        description: "RANGE ROVER EVOQUE 2.0D I4 163 MHEV Dynamic SE AWD auto",
        price: "1339.00",
        pdfLink: "../assets/macchine/pdfMacchine/evo.pdf",
        id: ""
    },
    {
        name: "BMW X5",
        imageSrc: "../assets/macchine/x5.jpg",
        description: "X5 xDrive 30d autom.",
        price: "1503.00",
        pdfLink: "../assets/macchine/pdfMacchine/x5.pdf",
        id: ""
    },
    {
        name: "MASERATI Grecale",
        imageSrc: "../assets/macchine/gt.jpg",
        description: "GRECALE 2.0 300cv MHEV GT Q4 auto",
        price: "1656.00",
        pdfLink: "../assets/macchine/pdfMacchine/gt.pdf",
        id: ""
    },
];
cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

function filterCars() {
    let priceRangeInput = document.getElementById("priceRange").value;
    let carNameFilter = document.getElementById("carName").value.toLowerCase();
    let [minPrice, maxPrice] = priceRangeInput.split("-").map(Number);
    if (isNaN(maxPrice) || maxPrice === undefined || priceRangeInput.endsWith("-")) maxPrice = 10000;

    let filteredCars;

    if (priceRangeInput && carNameFilter) {
        filteredCars = cars.filter(car =>
            car.price >= minPrice &&
            car.price <= maxPrice &&
            car.name.toLowerCase().includes(carNameFilter)
        );
    } else if (priceRangeInput) {
        filteredCars = cars.filter(car =>
            car.price >= minPrice &&
            car.price <= maxPrice
        );
    } else if (carNameFilter) {
        filteredCars = cars.filter(car =>
            car.name.toLowerCase().includes(carNameFilter)
        );
    } else {
        filteredCars = cars;
    }

    const sortBy = document.querySelector('input[name="sort"]:checked').value;
    if (sortBy === "ascending") {
        filteredCars.sort((a, b) => a.price - b.price);
    } else if (sortBy === "descending") {
        filteredCars.sort((a, b) => b.price - a.price);
    }

    displayCars(filteredCars);
}

function displayCars(cars) {
    let carListContainer = document.getElementById("carList");
    carListContainer.innerHTML = "";
    let currentId = 1;
    cars.forEach(function(car) {
        if(car.id=="") car.id = currentId++;
        let carHtml = `
            <div id="${car.id}" class="row flex-lg-row-reverse align-items-center">
                <div class="col-lg-7">
                    <div class="lc-block">
                        <img loading="lazy" class="img-fluid" src="${car.imageSrc}" width="900" height="600" alt="CarImage">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="lc-block">
                        <div>
                            <h1><i class="fa-solid fa-car-rear"></i> ${car.name}</h1>
                            <h6>${car.description}</h6>
                            <p class="fs-prices m-0"><span class="badge bg-success">${car.price} € / mese</span></p><sub class="text-dark"> IVA Inclusa</sub>
                            <p class="fst-italic my-3">Dettagli della miglior offerta disponibile:</p>
                            <p class="lead"><span class="badge bg-success"><i class="fa-solid fa-clock"></i> 60 Mesi</span><br><span class="badge bg-success"><i class="fa-solid fa-road"></i> 20.000 chilometri annui</span></p>
                            <div class="d-md-flex">
                            <a href="https://wa.me/message/RI6FQG2DAJJHB1" class="d-inline-block bcolorSecondary px-4 py-2 me-1 colorWhite border-0 rounded-2 bg-success text-light fw-bold w-max"><i class="fa-brands fa-whatsapp me-1"></i>Personalizza</a>
                            <a target="_blank" href="${car.pdfLink}" class="d-inline-block bcolorSecondary px-4 py-2 me-1 ms-0 ms-md-1 mt-2 mt-md-0 colorWhite border-0 rounded-2"><i class="fa-solid fa-file me-1"></i> PDF</a>                            </div>
                            <sub class="text-dark">* I prezzi mostrati nel PDF sopra allegato sono da considerarsi ad IVA esclusa per le aziende</sub>
                        </div>
                    </div>
                </div>
            </div>
        `;
        carListContainer.innerHTML += carHtml;
    });
}

function copyLink(id) {
    let link = window.location.href + '#' + id;
    navigator.clipboard.writeText(link).then(function() {
        console.log('Link copiato negli appunti');
        alert('Link copiato negli appunti');
    }, function(err) {
        console.error('Unable to copy link to clipboard', err);
        alert('Impossibile copiare il link negli appunti');
    });
}

displayCars(cars);

// Add event listeners for radio buttons to trigger sorting
document.querySelectorAll('input[name="sort"]').forEach((elem) => {
    elem.addEventListener("change", filterCars);
});
