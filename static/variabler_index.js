
const norsk = [
    'Hjem',
    'Landskoeffisient-rangering',
    '5 års rangering',
    '10 års rangering',
    'Premiepenge-kalkulator',
    'Koeffisient-kalkulator',
    'Kalkuler fra bunnen',
    '<input autocomplete="off" type="text" placeholder="Søk..." id="myInput" onkeyup="filterFunction()" spellcheck="false">',
    'Tilbakestill',
    'Utviklet av Johannes Kaste',
    'Funnet et forbedringspotensiale eller en feil med nettsiden?<br><br>Kontakt meg gjerne på <a id="mailto" href="mailto:johanneskaste@gmail.com?subject=Premiepenger kalkulator">johanneskaste@gmail.com</a>  '
];

const norsk_forside = [
    'Din klubbs premipenger & UEFA Koeffisientpoeng',
    'UEFA premiepenge- og koeffisient-oversikt',
    'UEFAs inntekstfordeling til alle klubbene.<br>Finn hver klubbs premiepenger og koeffisientpoeng i alle klubbturneringer.<br><br><span class="reklame_landskoeff">Sjekk også ut <a class="link_utydelig" href="/country-coefficients">landskoeffisient-rangeringen</a>.</span>',
    'Klubb',
    'Premiepenger',
    'Assosiasjons-koeffisientpoeng',
    'Klubb-koeffisientpoeng',
    'Farget knapp = inkluder',
    'Rød ramme = ekskluder',
    'Avansert filtrering ',
    'Hjemlig seriemester', 'Preliminary runde', 'Q1', 'Eliminert i Q1', 'Q2', 'Eliminert i Q2', 'Q3', 'Eliminert i Q3', 'Playoff', 'Eliminert i Playoff', 'Gruppespill', 'Utslagsrunde-playoff', 'Åttendelsfinale', 'Kvartfinale', 'Semifinale', 'Finale', 'Vunnet finale', 'SCUP', 'Vunnet SCUP',
    'Tilbakestill'
];

const norsk_landskoeffisient = [
    'UEFA Landskoeffisient-rangering',
    'Landskoeffisient-rangering',
    'Rangeringen av et land bestemmer hvor mange<br>europaplasser dem vil få og når i turneringene deres klubber vil starte sin deltagelse.<br><br><span class="gjennomsiktighet"><a class="link_utydelig" href="coefficient-definition#association">Landskoeffisienter</a> er også kjent som "Assosiasjons-klubbkoeffisient".</span>',
    'Avgjørende for klubbutplassering i ',
    'Sjekk ut',
    '<span class="marketPool" id="oversikt_reklame"><b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Sammenlign klubbers koeffisientpoeng</a>.</b></span>'
];

const norsk_klubbkoeffisient = [
    'UEFA klubb-koeffisient-rangering',
    'Klubbkoeffisient-rangering',
    '5-års rangeringen til en klubb bestemmer seeding og pot-fordeling i europakvalikk<br>og gruppespill. En høyere ranking hjelper klubben med å møte<br>lettere motstand i de fasene av en europasesong.<br><br><span class="gjennomsiktighet">Rangeringen baseres på <a class="link_utydelig" href="coefficient-definition#club">klubb-koeffisientpoeng</a>.<br>Se også <a class="link_utydelig" href="10-year-ranking">10 års koeffiesient rangeringen</a>.</span><br>',
    'Avgjørende for klubbutplassering i ',
    'Sjekk ut',
    '<span class="marketPool" id="oversikt_reklame"><b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Sammenlign klubbers koeffisientpoeng</a>.</b></span>'
];

const norsk_ti_års = [
    'UEFA 10 års Coefficient rangering',
    '10 års koeffisient-rangering',
    'Denne rangeringen benyttes kun til å finne 10 års koeffisient-bonusen (€)<br>til klubbene som deltar i europeisk gruppespill.<br><br><span class="gjennomsiktighet">Rangeringen baseres på <a class="link_utydelig" href="coefficient-definition#club">klubb-koeffisientpoeng</a>.<br>Se også <a class="link_utydelig" href="club-coefficients">5 års koeffiesient rangeringen</a>.</span>',
    'Avgjørende for gruppespills-bonus (€) i ',
    'Sjekk ut',
    '<span class="marketPool" id="oversikt_reklame"><b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Sammenlign klubbers koeffisientpoeng</a>.</b></span>'
]

const norsk_kalkulator = [
    'UEFA Premiepenge-Kalkulator UCL, UEL, UECL',
    'UEFA Premiepenge-kalkulator',
    'Kalkuler din klubbs inntekter i UEFA turneringer. <br>Kalkulasjonene innkluderer alle kalkulerbare premiepenger og ufordelte ressurser.',
    '<br> Klubbens<br>progresjon? <br> <img src="media/reshot-icon-arrow-down-QUF8YZRG63.svg" alt="arrow pointing downwards">',
    'Hjemlig seriemester:',
    '<abbr data_title="Kvalifiseringskamper til selve kvalifiseringen">Preliminary runde</abbr>:',
    '<abbr data_title="Første kvalifiseringsrunde">Q1</abbr>:',
    'Røk ut i Q1:',
    '<abbr data_title="Andre kvalifiseringsrunde">Q2</abbr>:',
    'Røk ut i Q2:',
    '<abbr data_title="Tredje kvalifiseringsrunde (ignorer om ditt lag befinner seg i League Path)">Q3</abbr>:',
    'Røk ut i <abbr data_title="Tredje kvalifiseringsrunde (ignorer om ditt lag befinner seg i League Path)">Q3</abbr>:',
    '<abbr data_title="Tredje kvalifiseringsrunde, League Path">Q3 League Path</abbr>:',
    'Playoff:',
    'Røk ut i playoff:',
    'Gruppespill:',
    '<div class="tekst_margin_hoyre"><abbr data_title="Ti års koeffisient-rangering internt i gruppespillet (1-32). Følg lenke 1 for å finne ut.">Ti års koeff</abbr>: </div> <a class="graa_hover_link" href="10-year-ranking" target="_blank"><abbr data_title="Ti års koeffisient-rangering">1</abbr></a>',
    '<abbr data_title="Antall seiere i gruppespillet">Seiere</abbr>:',
    '<abbr data_title="Antall uavgjort i gruppespillet">Uavgjort</abbr>:',
    '<abbr data_title="Totalt antall uavgjorte kamper i det aktuelle gruppespillet (0-96)">Uavgjort totalt</abbr>:',
    '<abbr data_title="Omfordelte penger som er til overs fra uavgjorte kamper">Ufordelte ressurser</abbr>:',
    'Gruppeplassering:',
    '<abbr data_title="Kvalifiserings-playoff til utslagsrundene">Utslagsrunde-playoff</abbr>:',
    'Åttendelsfinale:',
    'Kvartfinale:',
    'Semifinale:',
    'Finale:',
    'Vunnet finale:',
    '<abbr data_title="Kamp mellom vinneren av Champions League og Europa League">Super Cup</abbr>:',
    'Vunnet Super Cup:',
    'Inntjening per turnering:',
    'Total inntjening:',
    '<p><p>*Kalkulasjonene inkluderer ikke TV-pengene, grunnet disse uvisse faktorene:<br><br>1. den faktiske endelige størrelsen på TV-pengene:<br>2. sammensetningen av deltakende klubber;<br>3. antallet klubber fra hver av de konkurrerende assosiasjonene;<br>4. den endelige plasseringen til hver konkurrerende klubb i hjemlige liga, forrige sesong;<br>5. prestasjonen til hver klubb i europa.<br><i>Kilde: UEFA</i></p>Det er derfor umulig å kalkulere.<br><br>**Kalkulasjonene tar ikke de mindre covid-fradragene i betraktning. Å finne denne summen krever ukjente tall fra TV-pengene.<br><br><br>Kalkulatoren er basert på <a class="graa_hover_link" id="uefa_distribution_link" href="https://editorial.uefa.com/resources/0269-125fde34ba54-30a4c9aeea13-1000/20210520_circular_2021_35_en.pdf" target="_blank">UEFA’s distribusjonsplan</a>.</p>',
    'Sjekk ut <a class="graa_hover_link" id="klubb_link" href="coefficient-calculator">din klubbs koeffisientpoeng</a>.',
    '<b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Sammenlign premiepenger med andre klubber</a>.</b>'
];

const norsk_koeffisient = [
    'UEFA Koeffisient-Kalkulator',
    'UEFA Koeffisient-kalkulator',
    'Kalkuler klubb- og assosiasjons-<a class="graa_hover_link_koeff_deffi" href="coefficient-definition">koeffisientpoeng</a> for din klubb.',
    '<br> Klubbens<br>progresjon? <br> <img src="media/reshot-icon-arrow-down-QUF8YZRG63.svg" alt="arrow pointing downwards">',
    '<abbr data_title="Første kvalifiseringskamp til selve kvalifiseringen">Preliminary runde | semifinale</abbr>:',
    '<abbr data_title="Andre kvalifiseringskamp til selve kvalifiseringen">Preliminary runde | finale</abbr>:',
    '<abbr data_title="Første kvalifiseringsrunde">Q1</abbr> | kamp 1',
    'Q1 | kamp 2',
    'Q1 | eliminert',
    '<abbr data_title="Andre kvalifiseringsrunde">Q2</abbr> | kamp 1',
    'Q2 | kamp 2',
    'Q2 | eliminert',
    '<abbr data_title="Tredje kvalifiseringsrunde">Q3</abbr> | kamp 1',
    'Q3 | kamp 2',
    'Q3 | eliminert',
    'Playoff | kamp 1',
    'Playoff | kamp 2',
    'Playoff | eliminert',
    'Gruppespill',
    '<abbr data_title="Antall seiere i gruppespillet">Seiere</abbr>:',
    '<abbr data_title="Antall uavgjort i gruppespillet">Uavgjort</abbr>:',
    'Gruppeplassering:',
    '<abbr data_title="Kvalifiserings-playoff til utslagsrundene">Utslagsrunde-playoff</abbr> | kamp 1',
    '<abbr data_title="Kvalifiserings-playoff til utslagsrundene">Utslagsrunde-playoff</abbr> | kamp 2',
    'Åttendelsfinale',
    'Åttendelsfinale | kamp 1',
    'Åttendelsfinale | kamp 2',
    'Kvartfinale',
    'Kvartfinale | kamp 1',
    'Kvartfinale | kamp 2',
    'Semifinale',
    'Semifinale | kamp 1',
    'Semifinale | kamp 2',
    'Finale',
    'Finale | kamp 1',
    'Koeffisientpoeng per turnering',
    'Totale koeffisientpoeng',
    'Assosiasjons-poeng',
    'Klubb-poeng',
    '<p>*Kalkulatoren er basert på <a class="graa_hover_link" id="uefa_distribution_link" href="https://documents.uefa.com/r/Regulations-of-the-UEFA-Champions-League-2021/22/Annex-D-Coefficient-Ranking-System-Online" target="_blank">UEFA’s koeffisient-rangeringssystem</a>.</p>',
    'Sjekk ut <a class="graa_hover_link" id="klubb_link" href="prize-money-calculator">din klubb’s premiepenger</a>.',
    '<b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Sammenlign koeffisientpoeng med andre klubber</a>.</b>',
    '<b>Ta en titt på <a class="graa_hover_link" id="klubb_link" href="/country-coefficients">landskoeffisient-rangeringen</a>.</b>'
];

const norsk_koeffisient_dokumentasjon = [
    'UEFA Koeffisientpoeng, Forklaring',
    'Definisjon på Koeffisientpoeng',
    'Sjekk også ut din klubbs <a class="link_utydelig" href="https://www.fotcalc.com/">premiepenger og koeffisientpoeng</a>.',
    'Hva er koeffisientpoeng?',
    '<span class="bold">Koeffisientpoeng</span> er poeng som alle deltakende klubber i Europa er med på å samle inn hver sesong. Jo bedre en klubb gjør det i europa, jo flere koeffisientpoeng vil klubben tjene. Disse poengene har flere fordeler, både for klubben og assosiasjonen. Blant annet kan en høyere koeffisientpoengsum sørge for at veien til et gruppespill blir lettere for den aktuelle klubben og for andre klubber fra deres assosiasjonen. <br><br> Det finnes to typer koeffisientpoeng, assosiasjons-koeffisientpoeng og klubb-koeffisientpoeng.',
    'Assosiasjons-koeffisientpoeng',
    '<span class="bold">Assosiasjons-koeffisientpoeng</span> er en koeffisientpoengsum som klubber i europa hver sesong tjener inn til sin assosiasjon, eksempelvis:<br>',
    'Assosiasjons-koeffisientpoeng',
    '<tr><th scope="row"><span class="italic">Bodø/Glimt</span></th><td class="lengre_tall"><span class="italic">23,5</span></td></tr><tr><th scope="row"><span class="italic">Rosenborg</span></th><td class="kortere_tall"><span class="italic">4</span></td></tr><tr><th scope="row"><span class="italic">Molde</span></th><td class="kortere_tall"><span class="italic">2</span></td></tr><tr><th scope="row"><span class="italic">Vålerenga</span></th><td class="kortere_tall"><span class="italic">1</span></td></tr>',
    '(Verdiene refererer til asosiasjons-poeng som regnes ut med kalkulatoren)',
    'Gjennomsnittet av assosiasjons-koeffisientpoengene som hver klubb fra samme assosiasjon tjener inn på en sesong er den <span class="bold">"årlige landskoeffisienten"</span> til assosiasjonen:<br>',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic">Årlig landskoeffisient (21/22)</span></th></tr></thead><tbody><tr><th scope="row"><span class="italic">Norge</span></th><td class="sentrert_tall"><span class="italic">7,625</span></td></tr></tbody>',
    'Man har derimot også noe som heter <span class="bold">"landskoeffisient"</span>. Det er den årlige landskoeffisienten til assosiasjonen basert på de fem foregående sesongene til sammen.<br>',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic">Landskoeffisient (17/18 - 21/22)</span></th></tr></thead><tbody><tr><th scope="row"><span class="italic">Norge</span></th><td class="sentrert_tall"><span class="italic">27,250</span></td></tr></tbody>',
    '(Lands-koeffisientpoeng fra 17/18 - 21/22)',
    'Landskoeffisienten er med på å danne en <span class="bold">rangering av assosiasjoner</span>. Denne rangeringen bestemmer hvor mange europaplasser hver assosiasjon får og hvor enkelt det er å komme inn i gruppespill for klubbene derfra, eksempelvis:',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic"><a class="graa_hover_link_tabell_header" href="country-coefficients">Landskoeffisient-rangering</a> (17/18 - 21/22)</span></th><th scope="col"><span class="italic">Europaplasser to sesonger senere</span></th></tr></thead><tbody><tr><th scope="row" class="sentrert_vertikalt_tall"><span class="italic">Norge</span></th><td class="sentrert_tall sentrert_vertikalt_tall"><span class="italic">17</span></td><td><span class="italic">UCL kvalikk: 1 klubb<br> UECL kvalikk: 3 klubber</span></td></tr></tbody>',
    'Klubb-koeffisientpoeng',
    '<span class="bold">Klubb-koeffisientpoeng</span> er poeng deltakende klubber i europa samler inn til egen klubb. Disse poengene har innvirkning på blant klubbens seeding i kvalikken og ekstra premiepenger i gruppespill. En klubbs klubb-koeffisientpoeng kan for eksempel være slik:',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic">Klubb-koeffisientpoeng</span></th></tr></thead><tbody><tr><th scope="row"><span class="italic">Bodø/Glimt</span></th><td class="sentrert_tall"><span class="italic">15</span></td></tr></tbody>',
    '(Verdien refererer til klubb-koeffisientpoeng som regnes ut med kalkulatoren)',
    'Klubb-koeffisientpoeng fra en enkelt sesong brukes ikke direkte til noe. På den andre siden benyttes <span class="bold">klubbens klubb-koeffisientpoeng over de siste fem sesongene</span> til flere ting. For eksempel benyttes dette til å bestemme seeding i kvalikken til gruppespillene og fordelingen av lag på de ulike gruppene i gruppespillet.',
    'Eksempel på en klubbs klubb-koeffisientpoeng over de fem siste sesongene:',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic">"Fem-års-klubb-koeffisientpoeng"</span></th></tr></thead><tbody><tr><th scope="row"><span class="italic">Bodø/Glimt</span></th><td class="sentrert_tall"><span class="italic">17</span></td></tr></tbody>',
    'Denne "fem-års-klubb-koeffisientpoengsummen" blir eksempelvis benyttet til å bestemme seeding i kvalikken til gruppespill:',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"><span class="italic">Seedet</span></th><th scope="col"><span class="italic">Koeffpoeng</span></th><th scope="col"><span class="italic">Useedet</span></th><th scope="col"><span class="italic">Koeffpoeng</span></th></tr></thead><tbody class="litt_padding"><tr><td scope="row"><span class="italic">Slovan Bratislava</span></th><td class="sentrert_tall"><span class="italic">7.500</span></td><td scope="row"><span class="italic">Connah’s Quay</span></td><td class="sentrert_tall"><span class="italic">4.750</span></td></tr><tr class="litt_padding"><td scope="row"><span class="italic">Dinamo Tbilisi</span></td><td class="sentrert_tall"><span class="italic">6.500</span></td><td scope="row"><span class="italic">Valur Reykjavik</span></td><td class="sentrert_tall"><span class="italic">4.250</span></td></tr><tr><td scope="row"><span class="italic">Zalgiris Vilnius</span></td><td class="sentrert_tall"><span class="italic">6.500</span></td><td scope="row"><span class="italic">Bodø/Glimt</span></td><td class="sentrert_tall"><span class="italic">4.200</span></td></tr></tbody>',
    '(Utsnitt fra første kvalikkrunde i Champions League 21/22)',
    'Ovenfor blir altså den halvparten av klubber med den høyeste "fem-års-klubb-koeffisientpoengsummen" seedet, mens resten blir useedet. Det vil si at en seedet klubb altid vil møte en useedet klubb i den spesifikke kvalikkrunden.',
    'Alle kvalikkrundene til gruppespillene fungerer på denne måten med seeding. Samme prinsippet tas også i bruk i ulik grad når det kommer til fordeling av klubber på de ulike gruppene i gruppespillene.'
];
  

const english = [
    'Home',
    'Country coefficient ranking',
    '5-year ranking',
    '10-year ranking',
    'Prize money calculator',
    'Coefficient calculator',
    'Calculate from scratch',
    '<input autocomplete="off" type="text" placeholder="Search..." id="myInput" onkeyup="filterFunction()" spellcheck="false">',
    'Reset',
    'Developed by Johannes Kaste',
    'Found potential for improvement, a bug or something wrong with the website?<br><br>You are welcome to contact me on <a id="mailto" href="mailto:johanneskaste@gmail.com?subject=Prize money calculator">johanneskaste@gmail.com</a>'
];

const english_forside = [
    'Your club’s Prize money & UEFA Coefficient points',
    'UEFA income and coefficient overview',
    'UEFA Revenue distribution to all clubs.<br>Find every clubs prize money and coefficient points across all competitions.<br><br><span class="reklame_landskoeff">Check out the <a class="link_utydelig" href="/country-coefficients">country coefficient ranking</a> too.</span>',
    'Club',
    'Prize money',
    'Association coefficient points',
    'Club coefficient points',
    'Colored button = include',
    'Red border = exclude',
    'Advanced filtering ',
    'Domestic Champion', 'Preliminary round', 'Q1', 'Eliminated in Q1', 'Q2', 'Eliminated in Q2', 'Q3', 'Eliminated in Q3', 'Play-off', 'Eliminated in Play-off', 'Group stage', 'Knockout round play-off', 'Round of 16', 'Quarter-final', 'Semi-final', 'Final', 'Champion', 'SCUP', 'Champion',
    'Reset'
];

const english_landskoeffisient = [
    'UEFA Country Coefficient ranking',
    'Country coefficient ranking',
    'The ranking of a country decides how many european places they are going to get<br>and how far in the competitions their clubs will enter.<br><br><span class="gjennomsiktighet"><a class="link_utydelig" href="coefficient-definition#association">Country coefficient</a> is also known as "association club coefficient".</span>',
    'Decisive for club deployment in ',
    'Check out',
    '<span class="marketPool" id="oversikt_reklame"><b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Compare clubs’ coefficient points</a>.</b></span>'
];

const english_klubbkoeffisient = [
    'UEFA 5-year Club Coefficient ranking',
    '5-year coefficient ranking',
    'The 5-year coefficient ranking decides seeding and pot-distribution in qualifying rounds<br>and the group stage. A higher ranking gives the club weaker opponents<br>in the mentioned phases.<br><br><span class="gjennomsiktighet">The ranking is based on <a class="link_utydelig" href="coefficient-definition#club">club coefficient points</a>.<br>See also the <a class="link_utydelig" href="10-year-ranking">10-year coefficient ranking</a>.</span>',
    'Decisive for club deployment in ',
    'Check out',
    '<span class="marketPool" id="oversikt_reklame"><b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Compare clubs’ coefficient points</a>.</b></span>'
];

const english_ti_års = [
    'UEFA 5-year Club Coefficient ranking',
    '10-year coefficient ranking',
    'This ranking is used solely to find the club’s 10-year coefficient bonus (€)<br>for participating in European group stages.<br><br><span class="gjennomsiktighet">The ranking is based on <a class="link_utydelig" href="coefficient-definition#club">club coefficient points</a>.<br>See also the <a class="link_utydelig" href="club-coefficients">5-year coefficient ranking</a>.</span>',
    'Decisive for group stage bonus (€) for ',
    'Check out',
    '<span class="marketPool" id="oversikt_reklame"><b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Compare clubs’ coefficient points</a>.</b></span>'
]

const english_kalkulator = [
    'UEFA Prize money Calculator UCL, UEL, UECL',
    'UEFA Prize money Calculator',
    'Calculate your clubs income and revenue distribution in UEFA competitions.<br>Calculations include all exact prize money sums and<br>undistributed amounts.',
    '<br> Clubs<br>progression? <br> <img src="media/reshot-icon-arrow-down-QUF8YZRG63.svg" alt="arrow pointing downwards">',
    'Domestic champion:',
    '<abbr data_title="Qualification matches for the qualification itself">Preliminary round</abbr>:',
    '<abbr data_title="First qualifying round">Q1</abbr>:',
    'Eliminated in Q1:',
    '<abbr data_title="Second qualifying round">Q2</abbr>:',
    'Eliminated in Q2:',
    '<abbr data_title="Third qualifying round (ignore if your club plays in League Path)">Q3</abbr>:',
    'Eliminated in <abbr data_title="Third qualifying round (ignore if your club plays in League Path)">Q3</abbr>:',
    '<abbr data_title="Third qualifying round, League Path">Q3 League Path</abbr>:',
    'Play-off:',
    'Eliminated in playoff:',
    'Group stage:',
    '<div class="tekst_margin_hoyre"><abbr data_title="Ten-year coefficient ranking internally in the group stage (1-32). Follow link 1 to figure out.">Ten-year coeff</abbr>: </div> <a class="graa_hover_link" href="10-year-ranking" onclick="endre_ti_års_periode()" target="_blank"><abbr data_title="Ten year coefficient ranking">1</abbr></a>',
    '<abbr data_title="Amount of wins in the group stage">Wins</abbr>:',
    '<abbr data_title="Amount of draws in the group stage">Draws</abbr>:',
    '<abbr data_title="Total number of drawn games in the relevant group stage (0-96)">Total draws</abbr>:',
    '<abbr data_title="Redistributed amounts remaining from the mathes ending with a draw">Undistributed amounts</abbr>:',
    'Group-placement:',
    '<abbr data_title="Qualification play-off for the knockout rounds">Knockout round play-off</abbr>:',
    'Round of 16:',
    'Quarter-final:',
    'Semi-final:',
    'Final:',
    'Won final:',
    '<abbr data_title="Match between the Champions League champion and the Europa League champion">Super Cup</abbr>:',
    'Won Super Cup',
    'Income per competition:',
    'Total income:',
    '<p><p>*The calculations do not include resources from the market pool because those depends on these factors:<br><br>1. the actual final amount in the market pool:<br>2. the composition of the field of clubs participating;<br>3. the number of clubs from any given association competing;<br>4. the final position of each competing club in their previous season’s domestic championship;<br>5. the performance of each club in Europe.<br><i>Source: UEFA</i></p>It is therefore imposible to calculate.<br><br>**Calculations do not take the small covid deduction into consederation. Finding a club’s deduction sum requires unknown values from the marketpool.<br><br><br>The calculator is based on <a class="graa_hover_link" id="uefa_distribution_link" href="https://editorial.uefa.com/resources/0269-125fde34ba54-30a4c9aeea13-1000/20210520_circular_2021_35_en.pdf" target="_blank">UEFA’s distribution plan</a>.</p>',
    'Check out <a class="graa_hover_link" id="klubb_link" href="coefficient-calculator">your club’s coefficient points</a>.',
    '<b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Compare prize money with other clubs</a>.</b>'
];

const english_koeffisient = [
    'UEFA Coefficient points Calculator',
    'UEFA Coefficient points Calculator',
    'Calculate club- and association <a class="graa_hover_link_koeff_deffi" href="coefficient-definition">coefficient points</a> for your club.',
    '<br> Clubs<br>progression? <br> <img src="media/reshot-icon-arrow-down-QUF8YZRG63.svg" alt="arrow pointing downwards">',
    '<abbr data_title="First qualifying match for the qualification itself">Preliminary round | semi-final</abbr>:',
    '<abbr data_title="Second qualifying match for the qualification itself">Preliminary round | final</abbr>:',
    '<abbr data_title="First qualifying round">Q1</abbr> | match 1:',
    'Q1 | match 2',
    'Q1 | eliminated',
    '<abbr data_title="Second qualifying round">Q2</abbr> | match 1:',
    'Q2 | match 2',
    'Q2 | eliminated',
    '<abbr data_title="Third qualifying round">Q3</abbr> | match 1:',
    'Q3 | match 2',
    'Q3 | eliminated',
    'Play-off | match 1',
    'Play-off | match 2',
    'Play-off | eliminated',
    'Group stage',
    '<abbr data_title="Amount of wins in the group stage">Wins</abbr>:',
    '<abbr data_title="Amount of draws in the group stage">Draws</abbr>:',
    'Group placement',
    '<abbr data_title="Qualification play-off for the knockout rounds">Knockout round play-off</abbr> | match 1:',
    'Knockout round play-off | match 2',
    'Round of 16',
    'Round of 16 | match 1',
    'Round of 16 | match 2',
    'Quarter-final',
    'Quarter-final | match 1',
    'Quarter-final | match 2',
    'Semi-final',
    'Semi-final | match 1',
    'Semi-final | match 2',
    'Final',
    'Final | match 1',
    'Coefficient points per competition',
    'Total coefficient points',
    'Association points',
    'Club points',
    '<p>*The calculator is based on <a class="graa_hover_link" id="uefa_distribution_link" href="https://documents.uefa.com/r/Regulations-of-the-UEFA-Champions-League-2021/22/Annex-D-Coefficient-Ranking-System-Online" target="_blank">UEFA’s coefficient ranking system</a>.</p>',
    'Check out <a class="graa_hover_link" id="klubb_link" href="prize-money-calculator">your club’s prize money</a>.',
    '<b><a class="graa_hover_link" id="klubb_link" href="https://www.fotcalc.com/" onclick="endre_sort_kolonne()">Compare coefficient points with other clubs</a>.</b>',
    '<b>Take a look at the <a class="graa_hover_link" id="klubb_link" href="/country-coefficients">country coefficient ranking</a>.</b>'
];

const english_koeffisient_dokumentasjon = [
    'UEFA Coefficient points, Explanation',
    'Explanation on Coefficient Points',
    'Check out your clubs’s <a class="link_utydelig" href="https://www.fotcalc.com/">prize money and coefficient points</a> too.',
    'What are coefficient points?',
    '<span class="bold">Coefficient points</span> are points that all participating clubs in Europe earns each season. The better a club does in Europe, the more coefficient points the club will earn. These points carries multible advantages, both for the club og and the association. A higher coefficient point sum can among others make the road into the groupstages easier for the desired club and for other clubs from their association. <br><br> There are two kinds of coefficient points, association coefficient points og club coefficient points.',
    'Association coefficient points',
    '<span class="bold">Association coefficient points</span> are coefficient points that all clubs in Europe every season earns for their association, for example:<br>',
    'Association coefficient points',
    '<tr><th scope="row"><span class="italic">Rangers</span></th><td class="lengre_tall_english"><span class="italic">19.5</span></td></tr><tr><th scope="row"><span class="italic">Celtic</span></th><td class="lengre_tall_english"><span class="italic">9.5</span></td></tr><tr><th scope="row"><span class="italic">Aberdeen</span></th><td class="kortere_tall"><span class="italic">3</span></td></tr><tr><th scope="row"><span class="italic">Hibernian</span></th><td class="lengre_tall_english"><span class="italic">2.5</span></td></tr><th scope="row"><span class="italic">St. Johnstone</span></th><td class="kortere_tall"><span class="italic">1</span></td></tr>',
    '(The values refer to association points that are calculated with the calculator)',
    'The average association coefficient points as every club from the same association earns in one season is the <span class="bold">"yearly country coefficient"</span> for that association:<br>',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic">Yearly country coefficient (21/22)</span></th></tr></thead><tbody><tr><th scope="row"><span class="italic">Scotland</span></th><td class="sentrert_tall"><span class="italic">7.100</span></td></tr></tbody>',
    'However, there is also something called <span class="bold">"country coefficient"</span>. That is the yearly country coefficient for a association based on the five previous seasons combined.<br>',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic">Country coefficient (17/18 - 21/22)</span></th></tr></thead><tbody><tr><th scope="row"><span class="italic">Scotland</span></th><td class="sentrert_tall"><span class="italic">36.100</span></td></tr></tbody>',
    '(Country coefficient points from 17/18 - 21/22)',
    'There is a <span class="bold">ranking of associations</span> based on the country coefficient. This ranking decides how many "european-spots" each association gets og how easy it is for their clubs to qualify into the group stages, for example:',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic"><a class="graa_hover_link_tabell_header" href="country-coefficients">Country coefficient ranking</a> (17/18 - 21/22)</span></th><th scope="col"><span class="italic">"Europe-spots" two seasons later</span></th></tr></thead><tbody><tr><th scope="row" class="sentrert_vertikalt_tall"><span class="italic">Scotland</span></th><td class="sentrert_tall sentrert_vertikalt_tall"><span class="italic">9</span></td><td><span class="italic">UCL qualifying: 2 clubs<br> UEL qualifying: 1 club<br> UECL qualifying: 2 clubs</span></td></tr></tbody>',
    'Club coefficient points',
    '<span class="bold">Club coefficient points</span> are points participating clubs in Europe earn for their own club. These points have an impact on among others the clubs seeding in the qualifying rounds and additional prize money in the group stage. A clubs club coefficient points can for example be like this:',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic">Club coefficient points</span></th></tr></thead><tbody><tr><th scope="row"><span class="italic">Rangers</span></th><td class="sentrert_tall"><span class="italic">15</span></td></tr></tbody>',
    '(The value refer to club coefficient points as is calculated with the calculator)',
    'Club coefficient points from a single season are not used for anything directly. On the other hand <span class="bold">the clubs’ club coefficient points over the last five seasons</span> are used for multible things. For example are those points used to decide seeding in the qualifying rounds for the group stages and the distribution of clubs on groups in the group stage.',
    'Example on a clubs club coefficient points over the last five seasons:',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"></th><th scope="col"><span class="italic">"Five year club coefficient points"</span></th></tr></thead><tbody><tr><th scope="row"><span class="italic">Rangers</span></th><td class="sentrert_tall"><span class="italic">49.250</span></td></tr></tbody>',
    'This "Five year club coefficient point sum" is for example used to decide seeding in the qualifying rounds for the group stages:',
    '<thead class="thead-light"><tr class="head_tr"><th scope="col"><span class="italic">Seeded</span></th><th scope="col"><span class="italic">Coeff. points</span></th><th scope="col"><span class="italic">Unseeded</span></th><th scope="col"><span class="italic">Coeff. points</span></th></tr></thead><tbody class="litt_padding"><tr><td scope="row"><span class="italic">Young Boys</span></th><td class="sentrert_tall"><span class="italic">35.000</span></td><td scope="row"><span class="italic">Legia Warszawa</span></td><td class="sentrert_tall"><span class="italic">16.500</span></td></tr><tr class="litt_padding"><td scope="row"><span class="italic">Crvena Zvezda</span></td><td class="sentrert_tall"><span class="italic">32.500</span></td><td scope="row"><span class="italic">Sheriff Tiraspol</span></td><td class="sentrert_tall"><span class="italic">14.500</span></td></tr><tr><td scope="row"><span class="italic">Rangers</span></td><td class="sentrert_tall"><span class="italic">31.250</span></td><td scope="row"><span class="italic">Ferencváros</span></td><td class="sentrert_tall"><span class="italic">13.500</span></td></tr></tbody>',
    '(Section from the third qualifying round for the Champions League 21/22)',
    'Above, the clubs with the highest "five year club coefficient point sum" are seeded, while the rest are unseeded. That means that a seeded club always will face an unseeded club in the specific qualifying round.',
    'All the qualifying rounds for for the group stages works in this way with seeding. The same principle is also used in different degrees when it comes to the distribution of clubs on the different groups in the group stages.'
];

const ja_nei = [
    [
    'Ja',
    'Nei',
    'Seier',
    'Uavgjort',
    'Tap',
    'Eliminert',
    'Spilt'
    ],
    [
    'Yes',
    'No',
    "Victory",
    "Draw",
    "Loss",
    'Eliminated',
    'Played'
    ]
];