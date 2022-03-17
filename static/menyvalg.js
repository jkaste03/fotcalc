const menyvalg = [
    ["1.FC Slovácko",             "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,3"],
    ["1. FC Union Berlin",        "b15,b20",                  ",,13",  ",,2,,,1",  ",,3",     ",,,,,,,,,,,,,,,,,,,,,3,,,2"],
    ["Aarhus GF",                 "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,2"],
    ["Aberdeen FC",               "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,3,,1,,,,3,,,3,,,,1,,,1"],
    ["AC Milan",                  "b18",                      "18,,",  "1,,,1,,",  "4,,"],
    ["AC Sparta Praha",           "b6,b13,b19",               ",16,",  ",2,,,1,",  ",3,",     ",,,,,,,1,,3,,,1,,,1,,,,,,,,,,,,,,,1,,1"],
    ["AEK Athens",                "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,3"],
    ["AEL Limassol",              "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,2,,,1"],                        
    ["AFC Ajax",                  "b1,b18,b21",               "15,,",  "6,,,0,,",  "1,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,,1"],
    ["Alashkert FC",              "b1,b3,b6,b10,b14,b20",     ",,30",  ",,0,,,1",  ",,4",     ",,2,,3,,,1,,1,,,,2,,,3,,,,1,,,2"],
    ["Anorthosis Famagusta",      "b10,b15,b20",              ",,24",  ",,1,,,3",  ",,3",     ",,,,,,,,,,,,,1,,,3,,,,,2,,,3"],
    ["Apollon Limassol",          "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,2"],
    ["Aris Thessaloniki",         "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,3"],
    ["AS Monaco",                 "b19,b22",                  ",12,",  ",3,,,3,",  ",1,",     ",,,,,,,,,,,,3,,,3,,,,1,,,2,,,,,,,,,,,,,,1,,,2"],
    ["AS Roma",                   "b15,b20,b23,b26",          ",,3",   ",,4,,,1",  ",,1",     ",,,,,,,,,,,,,,,,,,,,,3,,,3,,,,,,,,,,,,,3,,,2"],
    ["Atalanta BC",               "b18,b22,b25",              "29,,",  "1,,,3,,",  "3,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,3,,,,,3,,,3"],
    ["Atlético Madrid",           "b1,b18,b21,b24",           "5,,",   "2,,,1,,",  "2,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,,3"],
    ["Austria Wien",              "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,2,,1"],
    ["AZ Alkmaar",                "b14,b20,b23",              ",,5",   ",,4,,,2",  ",,1",     ",,,,,,,,,,,,,,,,,,,,1,,,3,,,,,,,,,,,,,,1,,,2"],
    ["Bala Town FC",              "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["Barcelona",                 "b18,b22,b25",              "3,,",   "2,,,1,,",  "3,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,3,,,,,2,,,3"],
    ["Bayer Leverkusen",          "b19,b22",                  ",2,",   ",4,,,1,",  ",1,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,,1"],
    ["Bayern München",            "b1,b18,b21,b24",           "2,,",   "6,,,0,,",  "1,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,,3"],
    ["Beşiktaş JK",               "b1,b18",                   "24,,",  "0,,,0,,",  "4,,"],
    ["Birkirkara FC",             "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,3,,2,,,1,,3"],
    ["BK Häcken",                 "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,3"],
    ["Bodø/Glimt",                "b1,b3,b7,b11,b15,b20,b23,b26", ",,27",  ",,3,,,3",  ",,2", ",,1,,1,,,,3,,3,,,,1,,,3,,,,2,,,3,,,,,,3,,3,,,,,3,,,2"],
    ["Bohemian FC",               "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,2,,3,,,3,,3,,,,3,,,1"],
    ["Borussia Dortmund",         "b18",                      "10,,",  "3,,,0,,",  "3,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,2"],
    ["Breiðablik FC",             "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,3,,3,,,2,,3,,,,1,,,1"],
    ["Brøndby IF",                "b1,b16,b19",               ",32,",  ",0,,,2,",  ",4,",     ",,,,,,,,,,,,,,,,,,,1,,,1"],
    ["BSC Young Boys",            "b1,b6,b9,b18",             "28,,",  "1,,,2,,",  "4,,",     ",,,,,,,2,,3,,,2,,,3,,,,3,,,3"],
    ["FK Podgorica",              "b4,b5",                    ",,",",,,,,",",,",              ",,,3,,1"],
    ["C.D. Santa Clara",          "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,3,,,3,,,,3,,,1"],
    ["Coleraine FC",              "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["Connah's Quay Nomads",      "b1,b3,b7,b8",              ",,",",,,,,",",,",              ",,2,,1,,,,1,,3"],
    ["Celtic FC",                 "b6,b10,b14,b19",           ",7,",   ",3,,,0,",  ",3,",     ",,,,,,,2,,1,,,,3,,,3,,,,3,,,1,,,,,,,1,,1"],
    ["CFR Cluj",                  "b1,b3,b6,b9,b14,b20",      ",,14",  ",,1,,,1",  ",,4",     ",,3,,1,,,3,,3,,,2,,,1,,,,,1,,,1"],
    ["Chelsea FC",                "b18,b21,b24",              "4,,",   "4,,,1,,",  "2,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,,3"],
    ["Club Brugge",               "b1,b18",                   "25,,",  "1,,,1,,",  "4,,"],
    ["Crvena Zvezda",             "b1,b6,b9,b14,b19,b22",     ",19,",  ",3,,,2,",  ",1,",     ",,,,,,,1,,3,,,2,,,1,,,,,3,,,3,,,,,,,,,,,,,1,,,3"],
    ["CS Fola Esch",              "b1,b3,b7,b11,b15,b17",     ",,",",,,,,",",,",              ",,2,,1,,,,3,,3,,,,3,,,3,,,,1,,,1"],
    ["CS Universitatea Craiova",  "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,2"],
    ["Dundalk FC",                "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,3,,3,,,2,,3,,,,2,,,1"],
    ["Eintracht Frankfurt",       "b19,b22",                  ",18,",  ",3,,,3,",  ",1,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3"],
    ["Europa FC",                 "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["F91 Dudelange",             "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,1"],
    ["FC Ararat",                 "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,2,,3,,,1,,2"],
    ["FC Arda Kardzhali",         "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,1"],
    ["FC Ashdod",                 "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,2,,1"],
    ["FC Astana",                 "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,3,,1,,,,2,,,1"],
    ["FC Basel 1893",             "b7,b11,b15,b20,b23",       ",,2",   ",,4,,,2",  ",,1",     ",,,,,,,,3,,3,,,,3,,,3,,,,3,,,1,,,,,,,,,,,,,1,,,1"],
    ["FC BATE Borisov",           "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,3,,1"],
    ["FC DAC 1904 Dunajská Streda","b7,b8",                   ",,",",,,,,",",,",              ",,,,,,,,1,,1"],
    ["FC Dila Gori",              "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,3"],
    ["FC Dinamo Batumi",          "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,3,,3,,,1,,3,,,,1,,,2"],
    ["FC Dinamo Tbilisi",         "b1,b3,b7,b8",              ",,",",,,,,",",,",              ",,1,,1,,,,1,,1"],
    ["FC Drita",                  "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,3,,3,,,2,,1"],
    ["FC Dynamo Brest",           "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,1"],
    ["FC Dynamo Kyiv",            "b1,b18",                   "20,,",  "0,,,1,,",  "4,,"],
    ["FC Flora Tallinn",          "b1,b3,b6,b10,b15,b20",     ",,32",  ",,1,,,2",  ",,4",     ",,3,,3,,,1,,1,,,,1,,,3,,,,,3,,,3"],
    ["FC Gagra",                  "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,2"],
    ["FC Honka Espoo",            "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,2,,3,,,2,,1"],
    ["FCI Levadia Tallinn",       "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,3,,2,,,2,,1"],
    ["FC Inter Turku",            "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["FC Kairat Almaty",          "b1,b3,b6,b10,b15,b20",     ",,28",  ",,0,,,2",  ",,4",     ",,2,,3,,,3,,1,,,,2,,,1,,,,,3,,,3"],
    ["FC København",              "b7,b11,b15,b20,b23",       ",,4",   ",,5,,,0",   ",,1",     ",,,,,,,,3,,3,,,,2,,,3,,,,3,,,3,,,,,,,,,,,,,2,,,1"],
    ["FC Luzern",                 "b11,b12",                  ",,",",,,,,",",,",              ",,,,,,,,,,,,,,1,,,1"],
    ["FC Midtjylland",            "b6,b13,b19",               ",28,",  ",2,,,3,",  ",3,",     ",,,,,,,2,,3,,,1,,,1,,,,,,,,,,,,,,,3,,1"],
    ["FC Milsami Orhei",          "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,2,,3,,,1,,1"],
    ["FC Noah",                   "b4,b5",                    ",,",",,,,,",",,",              ",,,3,,1"],
    ["FC Petrocub Hîncești",      "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,2,,3,,,1,,1"],
    ["FC Porto",                  "b18,b22",                  "12,,",  "1,,,2,,",  "3,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,2,,,,,1,,,2"],
    ["FC Prishtina",              "b1,b2,b3,b7,b11,b12",      ",,",",,,,,",",,",              "3,3,1,,1,,,,3,,1,,,,3,,,1"],
    ["FC Rubin Kazan",            "b11,b12",                  ",,",",,,,,",",,",              ",,,,,,,,,,,,,,2,,,1"],
    ["FC Santa Coloma",           "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,2,,3,,,1,,1"],
    ["FC Sfântul Gheorghe",       "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["FC Shakhter Karagandy",     "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,1,,3,,,,2,,,2,,,,1,,,1"],
    ["FC Shakhtyor Soligorsk",    "b1,b3,b7,b8",              ",,",",,,,,",",,",              ",,1,,1,,,,1,,1"],
    ["FC Sheriff Tiraspol",       "b1,b3,b6,b9,b18",          "32,,",  "2,,,1,,",  "3,,",     ",,3,,3,,,3,,3,,,2,,,3,,,,3,,,2,,,,,,,3,,1"],
    ["FC Shkupi 1927",            "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,3,,2,,,1,,1"],
    ["FC Spartak Trnava",         "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,1,,3,,,2,,2,,,,2,,,1"],
    ["FC Steaua Bucureşti",       "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,3,,1"],
    ["FC Struga",                 "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["FC Torpedo Zhodino",        "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,1"],
    ["FC Swift Hesperange",       "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,2"],
    ["FC Vaduz",                  "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,1"],
    ["FC Viktoria Plzeň",         "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,1,,,3,,,,3,,,1"],
    ["Fenerbahçe SK",             "b14,b19",                  ",14,",  ",1,,,3,",  ",3,",     ",,,,,,,,,,,,,,,,,,,,3,,,3,,,,,,,1,,1"],
    ["Ferencvárosi TC",           "b1,b3,b6,b9,b16,b19",      ",30,",  ",1,,,0,",  ",4,",     ",,3,,3,,,3,,3,,,3,,,1,,,,1,,,1"],
    ["Feyenoord Rotterdam",       "b7,b11,b15,b20,b23,b26",   ",,9",   ",,4,,,2",  ",,1",     ",,,,,,,,2,,3,,,,3,,,3,,,,3,,,1,,,,,,,,,,,,,3,,,3"],
    ["FH Hafnarfjarðar",          "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,3,,3,,,1,,1"],
    ["FK Borac Banja Luka",       "b1,b3,b7,b8",              ",,",",,,,,",",,",              ",,1,,3,,,,1,,2"],
    ["FK Budućnost Podgorica",    "b1,b3,b7,b8",              ",,",",,,,,",",,",              ",,1,,1,,,,1,,1"],
    ["FK Čukarički",              "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,2,,3,,,,3,,,1"],
    ["FK Dečić Tuzi",             "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["FK Jablonec",               "b10,b15,b20",              ",,22",  ",,1,,,3",  ",,3",     ",,,,,,,,,,,,,1,,,1,,,,,3,,,3"],
    ["FK Kauno Žalgiris",         "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,2,,3,,,1,,1"],
    ["FK Liepāja",                "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,2,,3,,,2,,2"],
    ["FK Panevėžys",              "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,1"],
    ["FK Partizan",               "b7,b11,b15,b20,b23",       ",,11",  ",,2,,,2",  ",,2",     ",,,,,,,,3,,3,,,,2,,,2,,,,1,,,3,,,,,,3,,3,,,,,1,,,1"],
    ["FK Partizani",              "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,3,,3,,,1,,1"],
    ["FK Rīgas Futbola Skola",    "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,1,,3,,,3,,3,,,,2,,,1"],
    ["FK Sarajevo",               "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["FK Sileks",                 "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["FK Sūduva",                 "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,3,,2,,,2,,2"],
    ["FK Sutjeska Nikšić",        "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,3,,2,,,2,,1"],
    ["FK Tobol Kostanay",         "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,1,,3,,,,1,,,1"],
    ["FK Velež Mostar",           "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,3,,3,,,3,,1,,,,2,,,1"],
    ["FK Vojvodina",              "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,1,,,1"],
    ["FK Žalgiris Vilnius",       "b1,b3,b6,b10,b15,b17",     ",,",",,,,,",",,",              ",,3,,3,,,1,,1,,,,2,,,1,,,,,2,,,1"],
    ["Galatasaray SK",            "b6,b10,b14,b19,b22",       ",9,",   ",3,,,3,",  ",1,",     ",,,,,,,1,,1,,,,2,,,3,,,,2,,,3,,,,,,,,,,,,,2,,,1"],
    ["Glentoran FC",              "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["GNK Dinamo Zagreb",         "b1,b3,b6,b9,b16,b19",      ",11,",  ",3,,,1,",  ",2,",     ",,3,,3,,,3,,3,,,2,,,3,,,,1,,,2,,,,,,,1,,3"],
    ["Gżira United FC",           "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,2,,2,,,1,,1"],
    ["HB Tórshavn",               "b1,b2,b7,b11,b12",         ",,",",,,,,",",,",              "1,,,,,,,,3,,3,,,,1,,,3"],
    ["Hammarby Fotboll",          "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,1,,,3,,,,1,,,3"],
    ["Hapoel Be'er Sheva",        "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,1,,,3,,,,2,,,1"],
    ["Hibernian FC",              "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,2,,,1"],
    ["Hibernians FC",             "b1,b3,b7,b11,b12",         ",,",",,,,,",",,",              ",,1,,1,,,,3,,3,,,,3,,,1"],
    ["HJK Helsinki",              "b1,b3,b6,b10,b14,b20",     ",,19",  ",,2,,,0",  ",,3",     ",,3,,3,,,1,,2,,,,2,,,3,,,,1,,,1"],
    ["HNK Hajduk Split",          "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,3,,1"],
    ["HNK Rijeka",                "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,2,,,3,,,,2,,,1"],
    ["IF Elfsborg",               "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,2,,,3,,,,1,,,3"],
    ["Inter Club d'Escaldes",     "b1,b2,b7,b8",              ",,",",,,,,",",,",              "3,1,,,,,,,3,,1"],
    ["Internazionale Milano",     "b1,b18,b21",               "19,,",  "3,,,1,,",  "2,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,,3"],
    ["Juventus",                  "b18,b21",                  "6,,",   "5,,,0,,",  "1,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,,1"],
    ["KAA Gent",                  "b7,b11,b15,b20,b23",       ",,7",   ",,4,,,1",  ",,1",     ",,,,,,,,3,,1,,,,2,,,3,,,,1,,,3,,,,,,,,,,,,,1,,,1"],
    ["Keşlə FK",                  "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,1"],
    ["KF Laçi",                   "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,1,,3,,,3,,2,,,,1,,,1"],
    ["KF Llapi",                  "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,2"],
    ["KF Shkëndija",              "b1,b3,b7,b8",              ",,",",,,,,",",,",              ",,1,,1,,,,1,,1"],
    ["KF Teuta",                  "b1,b3,b7,b11,b12",         ",,",",,,,,",",,",              ",,1,,1,,,,1,,3,,,,1,,,1"],
    ["KF Vllaznia Shkodër",       "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,1,,3,,,1,,1"],
    ["KÍ Klaksvík",               "b4,b5",                    ",,",",,,,,",",,",              ",,,3,,1"],
    ["Kolos Kovalivka",           "b11,b12",                  ",,",",,,,,",",,",              ",,,,,,,,,,,,,,2,,,2"],
    ["KRC Genk",                  "b13,b19",                  ",13,",  ",1,,,2,",  ",4,",     ",,,,,,,,,,,,1,,,1"],
    ["Kuopion Palloseura",        "b4,b7,b11,b15,b17",        ",,",",,,,,",",,",              ",,,1,,3,,,2,,3,,,,2,,,3,,,,1,,,2"],
    ["La Fiorita 1967",           "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,2"],
    ["Larne FC",                  "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,3,,3,,,3,,2,,,,1,,,3"],
    ["LASK Linz",                 "b11,b15,b20,b23",          ",,16",  ",,5,,,1",  ",,1",     ",,,,,,,,,,,,,,3,,,3,,,,2,,,3,,,,,,,,,,,,,1,,,3"],
    ["Legia Warszawa",            "b1,b3,b6,b9,b14,b19",      ",22,",  ",2,,,0,",  ",4,",     ",,3,,3,,,3,,3,,,2,,,1,,,,,2,,,3"],
    ["Leicester City",            "b19,b23,b26",              ",24,",  ",2,,,2,",  ",3,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,3,,,,,3,,,1"],
    ["Lincoln Red Imps FC",       "b1,b3,b6,b10,b15,b20",     ",,29",  ",,0,,,0",  ",,4",     ",,2,,3,,,1,,1,,,,1,,,2,,,,,2,,,3"],
    ["Linfield FC",               "b1,b3,b7,b11,b12",         ",,",",,,,,",",,",              ",,1,,1,,,,3,,2,,,,1,,,1"],
    ["Liverpool FC",              "b18,b21,b24",              "13,,",  "6,,,0,,",  "1,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,,1"],
    ["Lokomotiv Moscow",          "b19",                      ",15,",  ",0,,,2,",  ",4,"],
    ["LOSC Lille",                "b1,b18,b21",               "31,,",  "3,,,2,,",  "1,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,,1"],
    ["Maccabi Haifa",             "b1,b3,b7,b11,b15,b20",     ",,21",  ",,1,,,1",  ",,4",     ",,2,,1,,,,3,,3,,,,3,,,1,,,,2,,,3"],
    ["Maccabi Tel Aviv",          "b7,b11,b15,b20",           ",,10",  ",,3,,,2",  ",,2",     ",,,,,,,,2,,3,,,,2,,,3,,,,3,,,3,,,,,,1,,2"],
    ["Malmö FF",                  "b1,b3,b6,b9,b18",          "30,,",  "0,,,1,,",  "4,,",     ",,3,,2,,,3,,2,,,3,,,3,,,,3,,,1"],
    ["Manchester City",           "b1,b18,b21,b24",           "8,,",   "4,,,0,,",  "1,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,,2"],
    ["Manchester United",         "b18,b21",                  "9,,",   "3,,,2,,",  "1,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,,1"],
    ["Molde FK",                  "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,3,,1,,,,2,,,2"],
    ["MOL Fehérvár FC",           "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["Mons Calpe S.C.",           "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["Mosta F.C.",                "b4,b5",                    ",,",",,,,,",",,",              ",,,3,,1"],
    ["MŠK Žilina",                "b4,b7,b11,b15,b17",        ",,",",,,,,",",,",              ",,,3,,1,,,3,,2,,,,3,,,3,,,,1,,,1"],
    ["Neftçi Baku PFK",           "b1,b3,b6,b10,b15,b17",     ",,",",,,,,",",,",              ",,3,,3,,,1,,1,,,,2,,,1,,,,,2,,,1"],
    ["Newtown AFC",               "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["NK Domžale",                "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,3,,2,,,2,,3,,,,1,,,1"],
    ["NK Maribor",                "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,3,,3,,,1,,1"],
    ["NK Olimpija Ljubljana",     "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,3,,1,,,,1,,,1"],
    ["NK Osijek",                 "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,2,,3,,,,1,,,2"],
    ["NK Široki Brijeg",          "b4,b5",                    ",,",",,,,,",",,",              ",,,3,,1"],
    ["NSÍ Runavík",               "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["NŠ Mura",                   "b1,b3,b6,b10,b14,b20",     ",,31",  ",,1,,,0",  ",,4",     ",,3,,3,,,2,,1,,,,2,,,3,,,,1,,,1"],
    ["Olympiacos FC",             "b1,b6,b9,b14,b19",         ",4,",   ",3,,,0,",  ",2,",     ",,,,,,,3,,3,,,2,,,2,,,,,3,,,2,,,,,,1,,1"],
    ["Olympique de Marseille",    "b19,b23,b26",              ",8,",   ",1,,,4,",  ",3,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,3,,,,,3,,,3"],
    ["Olympique Lyonnais",        "b19,b22,b25",              ",3,",   ",5,,,1,",  ",1,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,,2"],
    ["Omonia Nicosia",            "b1,b6,b10,b14,b20",        ",,25",  ",,0,,,4",  ",,3",     ",,,,,,,1,,1,,,,3,,,1,,,,3,,,1"],
    ["Paços de Ferreira",         "b11,b15,b17",              ",,",",,,,,",",,",              ",,,,,,,,,,,,,,3,,,1,,,,3,,,1"],
    ["Paide Linnameeskond",       "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["PAOK FC",                   "b11,b15,b20,b23,b26",      ",,6",   ",,3,,,2",  ",,2",     ",,,,,,,,,,,,,,1,,,3,,,,2,,,3,,,,,,1,,3,,,,,3,,,3"],
    ["Paris Saint-Germain",       "b18,b21",                  "7,,",   "3,,,2,,",  "2,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,,1"],
    ["PFC CSKA Sofia",            "b7,b11,b15,b20",           ",,23",  ",,0,,,1",  ",,4",     ",,,,,,,,2,,2,,,,3,,,2,,,,1,,,3"],
    ["PFC Lokomotiv Plovdiv",     "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,3,,1,,,,2,,,1"],
    ["PFC Ludogorets Razgrad",    "b1,b3,b6,b9,b16,b19",      ",17,",  ",0,,,2,",  ",4,",     ",,3,,3,,,2,,3,,,2,,,2,,,,1,,,3"],
    ["PFC Sochi",                 "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,2,,,2"],
    ["Pogoń Szczecin",            "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,2,,1"],
    ["PSV Eindhoven",             "b6,b13,b16,b19,b23,b26",   ",6,",   ",2,,,2,",  ",3,",     ",,,,,,,3,,3,,,3,,,3,,,,1,,,2,,,,,,,,3,,2,,,,,2,,,3"],
    ["Puskás Akadémia FC",        "b4,b7,b8",                 ",,",",,,,,",",,",              ",,,2,,3,,,1,,1"],
    ["Qarabağ FK",                "b7,b11,b15,b20",           ",,12",  ",,3,,,2",  ",,2",     ",,,,,,,,2,,3,,,,2,,,3,,,,3,,,3,,,,,,1,,1"],
    ["Racing FC Union Lëtzebuerg","b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["Randers FC",                "b14,b20",                  ",,26",  ",,1,,,4",  ",,2",     ",,,,,,,,,,,,,,,,,,,,2,,,1,,,,,,,1,,1"],
    ["Rangers FC",                "b1,b9,b14,b19,b22,b25",    ",26,",  ",2,,,2,",  ",2,",     ",,,,,,,,,,,,1,,,1,,,,,3,,,2,,,,,,3,,2,,,,,3,,,1"],
    ["Rapid Wien",                "b6,b10,b14,b19",           ",23,",  ",2,,,0,",  ",3,",     ",,,,,,,3,,1,,,,3,,,1,,,,3,,,3,,,,,,,3,,1"],
    ["RB Leipzig",                "b18,b22,b25",              "26,,",  "2,,,1,,",  "3,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,3,,,,,3,,,3"],
    ["Real Betis",                "b19,b22",                  ",20,",  ",3,,,1,",  ",2,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,2,,,,,1"],
    ["Real Madrid",               "b18,b21,b24",              "1,,",   "5,,,0,,",  "1,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,,3"],
    ["Real Sociedad",             "b19",                      ",21,",  ",2,,,3,",  ",2,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,1"],
    ["Red Bull Salzburg",         "b1,b18,b21",               "22,,",  "3,,,1,,",  "2,,",     ",,,,,,,,,,,,,,,,,,,3,,,3,,,,,,,,,,,,,2,,,1"],
    ["Riga FC",                   "b1,b3,b7,b11,b15,b17",     ",,",",,,,,",",,",              ",,1,,2,,,,3,,3,,,,1,,,3,,,,2,,,1"],
    ["RKS Raków Częstochowa",     "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,2,,2,,,,2,,,3,,,,3,,,1"],
    ["Rosenborg",                 "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,3,,,3,,,,1,,,1"],
    ["Royal Antwerp FC",          "b14,b19",                  ",29,",  ",1,,,2,",  ",4,",     ",,,,,,,,,,,,,,,,,,,,1,,,3"],
    ["RSC Anderlecht",            "b11,b15,b17",              ",,",",,,,,",",,",              ",,,,,,,,,,,,,,3,,,3,,,,2,,,1"],
    ["SC Braga",                  "b19,b22,b25",              ",10,",  ",3,,,1,",  ",2,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,3,,,,,3,,,2"],
    ["Sepsi OSK Sfântu Gheorghe", "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,2,,2"],
    ["Servette FC",               "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,3"],
    ["Sevilla",                   "b18,b22",                  "11,,",  "1,,,3,,",  "3,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,1,,,,,3"],
    ["Shakhtar Donetsk",          "b13,b18",                  "16,,",  "0,,,2,,",  "4,,",     ",,,,,,,,,,,,3,,,3,,,,3,,,2"],
    ["Shamrock Rovers FC",        "b1,b3,b11,b15,b17",        ",,",",,,,,",",,",              ",,1,,3,,,,,,,,,,3,,,3,,,,1,,,1"],
    ["Sivasspor",                 "b7,b11,b15,b17",           ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,3,,,2,,,,1,,,1"],
    ["SK Slavia Praha",           "b1,b9,b14,b20,b23,b26",    ",,8",   ",,2,,,2",  ",,2",     ",,,,,,,,,,,,1,,,3,,,,,2,,,1,,,,,,,3,,3,,,,,3,,,1"],
    ["ŠK Slovan Bratislava",      "b1,b3,b6,b10,b14,b20",     ",,18",  ",,2,,,2",  ",,3",     ",,3,,1,,,2,,1,,,,3,,,2,,,,1,,,2"],
    ["SL Benfica",                "b13,b18,b21,b24",          "14,,",  "2,,,2,,",  "2,,",     ",,,,,,,,,,,,3,,,3,,,,3,,,2,,,,,,,,,,,,,2,,,3"],
    ["Sligo Rovers FC",           "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["Spartak Moscow",            "b9,b14,b19",               ",27,",  ",3,,,1,",  ",1,",     ",,,,,,,,,,,,1,,,1"],
    ["Sporting CP",               "b1,b18,b21",               "23,,",  "3,,,0,,",  "2,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,,2"],
    ["SP Tre Penne",              "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["SSC Napoli",                "b19",                      ",1,",   ",3,,,1,",  ",2,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,1"],
    ["SS Folgore Calcio",         "b1,b2,b7,b8",              ",,",",,,,,",",,",              "1,,,,,,,,1,,1"],
    ["SS Lazio",                  "b19",                      ",5,",   ",2,,,3,",  ",2,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,2"],
    ["St. Johnstone",             "b10,b15,b17",              ",,",",,,,,",",,",              ",,,,,,,,,,,,,2,,,1,,,,,2,,,1"],
    ["Stjarnan FC",               "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,1"],
    ["St Joseph's FC",            "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,2"],
    ["Stade Rennais",             "b15,b20,b23",              ",,15",  ",,4,,,2",  ",,1",     ",,,,,,,,,,,,,,,,,,,,,3,,,3,,,,,,,,,,,,,1,,,3"],
    ["Sturm Graz",                "b14,b19",                  ",31,",  ",0,,,2,",  ",4,",     ",,,,,,,,,,,,,,,,,,,,3,,,3"],
    ["Sumqayıt FK",               "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,2,,1"],
    ["The New Saints FC",         "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,2,,3,,,3,,3,,,,3,,,1"],
    ["Tottenham Hotspur",         "b15,b20",                  ",,1",   ",,2,,,1",  ",,3",     ",,,,,,,,,,,,,,,,,,,,,1,,,3"],
    ["Trabzonspor",               "b11,b15,b17",              ",,",",,,,,",",,",              ",,,,,,,,,,,,,,2,,,2,,,,1,,,1"],
    ["UE Sant Julià",             "b4,b5",                    ",,",",,,,,",",,",              ",,,2,,2"],
    ["Újpest FC",                 "b7,b11,b12",               ",,",",,,,,",",,",              ",,,,,,,,3,,3,,,,1,,,1"],
    ["Urartu FC",                 "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,1"],
    ["Valmiera FC",               "b4,b5",                    ",,",",,,,,",",,",              ",,,1,,2"],
    ["Valur Reykjavík",           "b1,b3,b7,b8",              ",,",",,,,,",",,",              ",,1,,1,,,,1,,1"],
    ["Villarreal",                "b18,b21,b24",              "21,,",  "3,,,1,,",  "2,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,,3"],
    ["Vitesse Arnhem",            "b11,b15,b20,b23",          ",,20",  ",,3,,,1",  ",,2",     ",,,,,,,,,,,,,,2,,,3,,,,2,,,3,,,,,,1,,3,,,,,1,,,2"],
    ["Vorskla Poltava",           "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,2,,1"],
    ["Vålerenga",                 "b7,b8",                    ",,",",,,,,",",,",              ",,,,,,,,1,,3"],
    ["West Ham United",           "b19,b22",                  ",25,",  ",4,,,1,",  ",1,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1"],
    ["WKS Śląsk Wrocław",         "b4,b7,b11,b12",            ",,",",,,,,",",,",              ",,,3,,3,,,3,,2,,,,3,,,1"],
    ["VfL Wolfsburg",             "b18",                      "27,,",  "1,,,2,,",  "4,,"],
    ["Zenit St. Petersburg",      "b1,b18",                   "17,,",  "1,,,2,,",  "3,,",     ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,2"],
    ["Zorya Luhansk",             "b14,b20",                  ",,17",  ",,2,,,1",  ",,3",     ",,,,,,,,,,,,,,,,,,,,1,,,1"],
];

const totale_uavgjorte_kamper = [
    ["18,,",",26,",",,26"],
    [ "0,,", ",0,", ",,0"],
];

