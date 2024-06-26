// var $root = $('html, body');
// $('a[href^="#"]').click(function(event) {
// 	var href = $.attr(this, 'href');
// 	// Sjekk om lenken er bare "#" 
// 	if (href === "#") {
// 		// Gjeldende logikk for smooth scrolling
// 		$root.animate({
// 			scrollTop: $("#navbar").offset().top
// 	}, 500, function () {
// 			window.location.hash = "#";
// 			history.replaceState('', document.title, window.location.pathname + window.location.search);
// 	});
// 	} else {
// 			// Gjeldende logikk for smooth scrolling
// 			$root.animate({
// 					scrollTop: $(href).offset().top
// 			}, 500, function () {
// 					window.location.hash = href;
// 			});
// 	}
// 	event.preventDefault();
// });

var eksperimentell_profil_e = "Calculate from scratch";
var eksperimentell_profil_n = "Kalkuler fra bunnen";

var overskrift_forside_finnes = document.getElementById('overskrift_forside');
var overskrift_landskoeffisient_finnes = document.getElementById('overskrift_landskoeffisient');
var overskrift_klubbkoeffisient_finnes = document.getElementById('overskrift_klubbkoeffisient');
var overskrift_fire_års_finnes = document.getElementById('overskrift_fire_års');
var overskrift_ti_års_finnes = document.getElementById('overskrift_ti_års');
var overskrift_finnes = document.getElementById('overskrift_premiepenger');
var overskrift_koeff_finnes = document.getElementById('overskrift_koeffisient');
var overskrift_koeff_deff_finnes = document.getElementById('overskrift_koeffisient_dokumentasjon');

if (overskrift_koeff_finnes) {
  var din_klubbs_premi_koef_e = "your club's prize money";
  var din_klubbs_premi_koef_n = "din klubbs premiepenger";
}
else if (overskrift_finnes) {
  var din_klubbs_premi_koef_e = "your club's coefficient points";
  var din_klubbs_premi_koef_n = "din klubbs koeffisientpoeng";
}


function language(clicked_id) {
  language_koeffisient(clicked_id);
  language_standard(clicked_id);
  aarstall = parseInt(localStorage.getItem('sessong')) || nåværende_sesong_forside[0] - 21;
  if (parseInt(localStorage.getItem('sessong')) == 0) {
    aarstall = 0;
  }
  if (aarstall > 7) {aarstall = 1}
  if (overskrift_koeff_deff_finnes || overskrift_landskoeffisient_finnes) {}
  else {
    try {
      oppdater_sessong(aarstall)
    } catch {null}
  }
}

function language_standard(clicked_id) {
  var kolonne_lengde = sprak_id.length;
  var flint = "";
  if (clicked_id == "norsk") {
    if (document.getElementById('CL-PO')) {
      document.getElementById('CL-PO').innerText = 'Spilt'
    }
    endre_link_landskoeff()
    for (x=0;x<kolonne_lengde;x++) {
      try {
        document.getElementById(sprak_id[x]).innerHTML = norsk[x];
      }
      catch {
        null;
      }
    }
    if (document.getElementById('uefa_distribution_link') && !overskrift_koeff_finnes) {
      if (aarstall == 0) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/0269-125fde34ba54-30a4c9aeea13-1000/20210520_circular_2021_35_en.pdf');
      }
      if (aarstall == 1) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/0277-158b0bea495a-ba6c18158cd3-1000/20220704_circular_2022_47_en.pdf');
      }
      if (aarstall == 2) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/0283-1874e21d8957-30a439a30e08-1000/20230707_circular_2023_35_en.pdf');
      }
			if (aarstall >= 3) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/028b-1a7880138a24-7a993e2e33d1-1000/20240322_circular_2024_13_en.pdf');
      }
    }
    ja_språk = ja_nei[0][0];
    nei_språk = ja_nei[0][1];
    seier_språk = ja_nei[0][2];
    uavgjort_språk = ja_nei[0][3];
    tap_språk = ja_nei[0][4];
    eliminert_språk = ja_nei[0][5];
    spilt_språk = ja_nei[0][6];
    for (x=0;x<68;x++) {
      try {
        var klasse = (document.getElementById("b" + (x + 1)).className);
        var id = document.getElementById("b" + (x + 1));
        if (klasse == "btn btn-danger r0" || klasse == "btn btn-danger de0_UCL ele" || klasse == "btn btn-danger de0_UEL ele" || klasse == "btn btn-danger de0_UECL ele" || klasse == "btn btn-danger de0_UCL del" || klasse == "btn btn-danger de0_UEL del" || klasse == "btn btn-danger de0_UECL del") {
          id.innerText = '';
        }
        if (klasse == "btn btn-danger r1") {
          id.innerText = 'Seier';
        }
        if (klasse == "btn btn-danger r2") {
          id.innerText = 'Uavgjort';
        }
        if (klasse == "btn btn-danger r3") {
          id.innerText = 'Tap';
        }
        if (klasse == "btn btn-danger de1_UCL ele" || klasse == "btn btn-danger de1_UEL ele" || klasse == "btn btn-danger de1_UECL ele") {
          id.innerText = 'Eliminert';
        }
        if (klasse == "btn btn-danger de1_UCL del" || klasse == "btn btn-danger de1_UEL del" || klasse == "btn btn-danger de1_UECL del") {
          id.innerText = 'Spilt';
        }
      }
      catch {
        null;
      }
    }
    try {
      if (overskrift_koeff_finnes) {
        for (x=0;x<6;x++) {
          document.getElementsByName(x + 1)[0].placeholder = 'Antall';
        }
        for (x=0;x<3;x++) {
          document.getElementsByName(x + 7)[0].placeholder = 'Plassering';
        }
      }
      else if (overskrift_finnes) {
        for (x=0;x<3;x++) {
          document.getElementsByName(x + 1)[0].placeholder = 'Rangering';
        }
        for (x=0;x<6;x++) {
          document.getElementsByName(x + 4)[0].placeholder = 'Antall';
        }
        for (x=0;x<3;x++) {
          document.getElementsByName(x + 13)[0].placeholder = 'Plassering';
        }
				if (aarstall>=3) {
					for (x=0;x<6;x++) {
						document.getElementsByName(x + 16)[0].placeholder = 'Rangering';
					}
					for (x=0;x<3;x++) {
						document.getElementsByName(x + 24)[0].placeholder = 'Rangering';
					}
				}
      }
    }
    finally {
      flint = "norsk";
      localStorage.setItem("someVarKey", flint);
      let Klubbnavn = localStorage.getItem("Klubbnavn");
      if (Klubbnavn == "Calculate from scratch") {
        Klubbnavn = "Kalkuler fra bunnen";
        localStorage.setItem("Klubbnavn", Klubbnavn);
      }
      else if (Klubbnavn == null || Klubbnavn == "null" || Klubbnavn == "Choose club") {
        Klubbnavn = "Velg klubb";
        localStorage.setItem("Klubbnavn", Klubbnavn);
      }
      if (Klubbnavn == "Velg klubb" && overskrift_finnes) {
        document.getElementById("klubb_link").innerHTML = "din klubbs";
      }
      if (overskrift_forside_finnes || overskrift_koeff_deff_finnes || overskrift_landskoeffisient_finnes || overskrift_klubbkoeffisient_finnes || overskrift_ti_års_finnes || overskrift_fire_års_finnes) {}
      else {
        if (Klubbnavn == "Calculate from scratch" || Klubbnavn == "Kalkuler fra bunnen") {
          document.getElementById("dropDownMeny").innerHTML = Klubbnavn + "<div class='opp_ned_pil'>&#10094</div>";
        }
        else if (Klubbnavn == "Velg klubb") {
          document.getElementById("dropDownMeny").innerHTML = ((document.getElementById("dropDownMeny").innerHTML).slice(0, 964)) + Klubbnavn + "<div class='opp_ned_pil'>&#10094</div>";
        }
      }
      if (Klubbnavn.slice(-1) == "s" && overskrift_finnes) {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + " koeffisientpoeng";
      }
      else if (overskrift_finnes) {
          document.getElementById("klubb_link").innerHTML = Klubbnavn + "s koeffisientpoeng";
      }
      else if (Klubbnavn.slice(-1) == "s" && overskrift_koeff_finnes) {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + " premiepenger";
      }
      else if (overskrift_koeff_finnes) {
          document.getElementById("klubb_link").innerHTML = Klubbnavn + "s premiepenger";
      }
    }
  }
  else {
    if (document.getElementById('CL-PO')) {
      document.getElementById('CL-PO').innerText = 'Played'
    }
    endre_link_landskoeff()
    for (x=0;x<kolonne_lengde;x++) {
      try {
        document.getElementById(sprak_id[x]).innerHTML = english[x];
      }
      catch {
        null;
      }
    }
    if (document.getElementById('uefa_distribution_link') && !overskrift_koeff_finnes) {
      if (aarstall == 0) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/0269-125fde34ba54-30a4c9aeea13-1000/20210520_circular_2021_35_en.pdf');
      }
      if (aarstall == 1) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/0277-158b0bea495a-ba6c18158cd3-1000/20220704_circular_2022_47_en.pdf');
      }
      if (aarstall == 2) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/0283-1874e21d8957-30a439a30e08-1000/20230707_circular_2023_35_en.pdf');
      }
			if (aarstall >= 3) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/028b-1a7880138a24-7a993e2e33d1-1000/20240322_circular_2024_13_en.pdf');
      }
    }
    ja_språk = ja_nei[1][0];
    nei_språk = ja_nei[1][1];
    seier_språk = ja_nei[1][2];
    uavgjort_språk = ja_nei[1][3];
    tap_språk = ja_nei[1][4];
    eliminert_språk = ja_nei[1][5];
    spilt_språk = ja_nei[1][6];
    for (x=0;x<68;x++) {
      try {
        let klasse = (document.getElementById("b" + (x + 1)).className);
        let id = document.getElementById("b" + (x + 1));
        if (klasse == "btn btn-danger r0" || klasse == "btn btn-danger de0_UECL ele" || klasse == "btn btn-danger de0_UECL del") {
          id.innerText = '';
        }
        if (klasse == "btn btn-danger r1") {
          id.innerText = 'Victory';
        }
        if (klasse == "btn btn-danger r2") {
          id.innerText = 'Draw';
        }
        if (klasse == "btn btn-danger r3") {
          id.innerText = 'Loss';
        }
        if (klasse == "btn btn-danger de1_UCL ele" || klasse == "btn btn-danger de1_UEL ele" || klasse == "btn btn-danger de1_UECL ele") {
          id.innerText = 'Eliminated';
        }
        if (klasse == "btn btn-danger de1_UCL del" || klasse == "btn btn-danger de1_UEL del" || klasse == "btn btn-danger de1_UECL del") {
          id.innerText = 'Played';
        }
      }
      catch {
        null;
      }
    }
    try {
      if (overskrift_koeff_finnes) {
        for (x=0;x<6;x++) {
          document.getElementsByName(x + 1)[0].placeholder = 'Amount';
        }
        for (x=0;x<3;x++) {
          document.getElementsByName(x + 7)[0].placeholder = 'Placement';
        }
      }
      else if (overskrift_finnes) {
        for (x=0;x<3;x++) {
          document.getElementsByName(x + 1)[0].placeholder = 'Rank';
        }
        for (x=0;x<6;x++) {
          document.getElementsByName(x + 4)[0].placeholder = 'Amount';
        }
        for (x=0;x<3;x++) {
          document.getElementsByName(x + 13)[0].placeholder = 'Placement';
        }
				if (aarstall>=3) {
					for (x=0;x<6;x++) {
						document.getElementsByName(x + 16)[0].placeholder = 'Rank';
					}
					for (x=0;x<3;x++) {
						document.getElementsByName(x + 24)[0].placeholder = 'Rank';
					}
				}
      }
    }
    finally {
      flint = "english";
      localStorage.setItem("someVarKey", flint);
      let Klubbnavn = localStorage.getItem("Klubbnavn");
      if (Klubbnavn == "Kalkuler fra bunnen") {
        Klubbnavn = "Calculate from scratch";
        localStorage.setItem("Klubbnavn", Klubbnavn);
      }
      else if (Klubbnavn == null || Klubbnavn == "null" || Klubbnavn == "Velg klubb") {
        Klubbnavn = "Choose club";
        localStorage.setItem("Klubbnavn", Klubbnavn);
      }
      if (Klubbnavn == "Choose club" && overskrift_finnes) {
        document.getElementById("klubb_link").innerHTML = "your club's";
      }
      if (overskrift_forside_finnes || overskrift_koeff_deff_finnes || overskrift_landskoeffisient_finnes || overskrift_klubbkoeffisient_finnes || overskrift_ti_års_finnes || overskrift_fire_års_finnes) {}
      else {
        if (Klubbnavn == "Calculate from scratch" || Klubbnavn == "Kalkuler fra bunnen") {
          document.getElementById("dropDownMeny").innerHTML = Klubbnavn + "<div class='opp_ned_pil'>&#10094</div>";
        }
        else if (Klubbnavn == "Choose club") {
          document.getElementById("dropDownMeny").innerHTML = ((document.getElementById("dropDownMeny").innerHTML).slice(0, 964)) + Klubbnavn + "<div class='opp_ned_pil'>&#10094</div>";
        }
      }
      if (Klubbnavn.slice(-1) == "s" && overskrift_finnes) {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "' coefficient points";
      }
      else if (overskrift_finnes) {
          document.getElementById("klubb_link").innerHTML = Klubbnavn + "'s coefficient points";
      }
      else if (Klubbnavn.slice(-1) == "s" && overskrift_koeff_finnes) {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "' prize money";
      }
      else if (overskrift_koeff_finnes) {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "'s prize money";
      }
    }
  }
  
  if (overskrift_koeff_deff_finnes || overskrift_forside_finnes) {}
  else {
    Klubbnavn = localStorage.getItem("Klubbnavn")
    if (Klubbnavn == "Choose club" || Klubbnavn == eksperimentell_profil_e) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_e;
    }
    else if (Klubbnavn == "Velg klubb" || Klubbnavn == eksperimentell_profil_n) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_n;
    }
  
    if (overskrift_finnes) {
      for (x=0;x<39;x++) {
        var knapp_id_nei = document.getElementById('b' + (x + 1));
        var knapp_id_ja = document.getElementById('b' + (-(x + 1)));
        try {
          if (knapp_id_nei) {
            knapp_id_nei.innerText = "" /*nei_språk*/;
          }
          else {
            y = (x + 1);
            if (y == 2 || y == 3 || y == 4 || y == 6 || y == 7 || y == 9 || y == 10 || y == 11 || y == 13 || y == 14 || y == 15 || y == 36 || (y >= 21 && y <= 32)) {
              knapp_id_ja.innerText = spilt_språk;
            }
            else if (y == 5 || y == 8 || y == 12 || y == 17) {
              knapp_id_ja.innerText = eliminert_språk;
            }
            else {
              knapp_id_ja.innerText = ja_språk;
            }
          }        
        }
        catch {
          null;
        }
      }
    }
  }
}

const sprak_id = [
  'hjem',
  'landskoeff_rangering',
  'klubbkoeff_rangering',
  'ti_års_rangering',
  'fire_års_rangering',
  'women_access_list',
  'premiepenger_kalkulator',
  'koeffisient_kalkulator',
  'eksperimentell_profil_meny_element',
  'søk',
  'tilbakestill',
  'laget_av_Johannes',
  'kontakt_meg',
  'ENG_oversett',
  'ESP_oversett',
  'ITA_oversett',
  'GER_oversett',
  'FRA_oversett',
  'POR_oversett',
  'NED_oversett',
  'AUT_oversett',
  'SCO_oversett',
  'RUS_oversett',
  'SRB_oversett',
  'UKR_oversett',
  'BEL_oversett',
  'SUI_oversett',
  'GRE_oversett',
  'CZE_oversett',
  'NOR_oversett',
  'DEN_oversett',
  'CRO_oversett',
  'TUR_oversett',
  'CYP_oversett',
  'ISR_oversett',
  'SWE_oversett',
  'BUL_oversett',
  'ROU_oversett',
  'AZE_oversett',
  'HUN_oversett',
  'POL_oversett',
  'KAZ_oversett',
  'SVK_oversett',
  'SVN_oversett',
  'BLR_oversett',
  'MDA_oversett',
  'LTU_oversett',
  'BIH_oversett',
  'FIN_oversett',
  'LUX_oversett',
  'LVA_oversett',
  'KVX_oversett',
  'IRL_oversett',
  'ARM_oversett',
  'NIR_oversett',
  'ALB_oversett',
  'FRO_oversett',
  'EST_oversett',
  'MLT_oversett',
  'GEO_oversett',
  'MKD_oversett',
  'LIE_oversett',
  'WAL_oversett',
  'GIB_oversett',
  'ISL_oversett',
  'MNE_oversett',
  'AND_oversett',
  'SMR_oversett'
];

const sprak_id_forside = [
	'anchorForsideKlubber',
	'anchorForsideLand',
  'title',
  'overskrift_forside',
  'beskrivelse_forside',
  'klubb_navn',
  'premiepenger_navn',
  'ass_koeff_navn',
  'bidrag_navn',
  'klubb_koeff_navn',
  'premiepenger_bidrag_beskrivelse',
  'per_country',
  'premiepenger_land_navn',
  'ass_koeff_land_navn',
  'bidrag_land_navn',
  'klubb_koeff_land_navn',
  'forklaring',
  'forklaring_2',
  'knappetekst',
  'b1', 'b2', 'b3', 'b5', 'b6', 'b8', 'b9', 'b12', 'CLPO', 'b16', 'b18', 'i13', 'b21', 'b24', 'b27', 'b30', 'b33', 'b36', 'b37',
  'reset',
];

const sprak_id_landskoeffisient = [
	'anchorCountryRangering',
	'anchorCountryKlubber',
  'title',
  'overskrift_landskoeffisient',
  'beskrivelse_landskoeffisient',
  'clubs',
  'accesslist_tekst',
  'legend',
  'premiepenger_reklame',
  'oversikt_reklame',
];

const sprak_id_klubbkoeffisient = [
  'title_klubbkoeffisient',
  'overskrift_klubbkoeffisient',
  'beskrivelse_klubbkoeffisient',
  'decisive_oversett',
  'legend',
  'POENG_vs_NA',
  'premiepenger_reklame',
  'oversikt_reklame',
];

const sprak_id_fire_års = [
  'title_fire_års',
  'overskrift_fire_års',
  'beskrivelse_fire_års',
  'decisive_oversett',
  'legend_grønne_tall',
  'legend2',
  // 'POENG_vs_NA',
  'premiepenger_reklame',
  'oversikt_reklame',
];

const sprak_id_ti_års = [
  'title_ti_års',
  'overskrift_ti_års',
  'beskrivelse_ti_års',
	'beskrivelse_ti_års_post',
  'decisive_oversett',
	'decisive_oversett_post',
  'legend',
  'POENG_vs_NA',
  'Histiriske_poeng_legend',
  'premiepenger_reklame',
  'oversikt_reklame'
];

const sprak_id_kalkulator = [
  'title_premiepenger',
  'overskrift_premiepenger',
  'beskrivelse_premiepenger',
	'beskrivelse_premiepenger_post',
  'progresjon',
  'hjemlig_seriemester', 
  'spilt_preliminary', 
  'spilt_q1',
  'spilt_q1_post_24',
  'røk_ut_q1',
  'spilt_q2',
  'røk_ut_q2',
  'spilt_q3',
  'røk_ut_q3',
  'spilt_q3_lp',
  'spilt_playoff',
  'røk_ut_playoff',
	'ufordelteKvalik',
  'gruppespill',
  'ti_års_koeff',
	'market_pool_post',
  'seiere',
  'uavgjort',
  'uavgjort_hele',
  'ufordelte_ressurser',
	'ufordelte_ressurser_post24',
  'tabellplassering',
  'spilt_utslagsrunde_playoff',
  'spilt_åttendelsfinale',
  'spilt_kvartfinale',
  'spilt_semifinale',
  'spilt_finale',
  'vunnet_finale',
  'spilt_scup',
  'vunnet_scup',
  'inntjening_turnering',
	'finalBalance',
	'finalBalance_post24',
  'inntjening',
  'marketPool_id2',
  'koeff_reklame',
  'oversikt_reklame',
  'ligaspill',
	'andel',
  'tabellplassering_liga',
  'ti_års_koeff_ligaspill',
	'fem_års_koeff_ligaspill',
	'europeanPartRank',
	'pointsSpraak',
  'uavgjort_hele_liga',
  'seiere_liga',
  'uavgjort_liga'
];
const sprak_id_koeffisient = [
  'title_koeffisient',
  'overskrift_koeffisient',
  'beskrivelse_koeffisient',
  'progresjon',
  'prelim_semifinale',
  'prelim_finale',
  'q1_kamp1',
  'q1_kamp2',
  'q1_elim',
  'q2_kamp1',
  'q2_kamp2',
  'q2_elim',
  'q3_kamp1',
  'q3_kamp2',
  'q3_elim',
  'po_kamp1',
  'po_kamp2',
  'po_elim',
  'gruppespill_del',
  'ligaspill_del',
  'seiere_antall',
  'uavgjort_antall',
  'seiere_antall_liga',
  'uavgjort_antall_liga',
  'gruppeplassering',
  'ligaplassering',
  'knock_po_kamp1',
  'knock_po_kamp2',
  'åtten',
  'åtten_kamp1',
  'åtten_kamp2',
  'kvart',
  'kvart_kamp1',
  'kvart_kamp2',
  'semi',
  'semi_kamp1',
  'semi_kamp2',
  'finale',
  'finale_kamp1',
  'koeffisienter_turnering',
  'koeffisienter',
  'assosiasjons_poeng_link',
  'klubb_poeng',
  'bidratte_poeng',
  'ranking_spraak',
  'koeff_bidrag_beskrivelse',
	'etter120_beskrivelse',
  'kilde_koeff_id',
	'kilde_koeff_id_post_24',
  'koeff_reklame',
  'oversikt_reklame',
  'landskoeff_reklame'
];

const sprak_id_koeffisient_dokumentasjon = [
  'title_koeffisient_dokumentasjon',
  'overskrift_koeffisient_dokumentasjon',
  'beskrivelse_koeffisient_dokumentasjon',
  'what_is_coeff',
  'what_are_coeff_beskrivelse_1',
  'association',
  'what_are_association_coeff_beskrivelse_1',
  'what_are_association_coeff_kopi',
  'what_are_association_tabell_1',
  'what_are_association_coeff_beskrivelse_2',
  'what_are_association_coeff_beskrivelse_3',
  'what_are_association_tabell_2',
  'what_are_association_coeff_beskrivelse_4',
  'what_are_association_tabell_3',
  'what_are_association_coeff_beskrivelse_5',
  'what_are_association_coeff_beskrivelse_6',
  'what_are_association_tabell_4',
  'club',
  'what_are_club_coeff_beskrivelse_1',
  'what_are_club_coeff_tabell_1',
  'what_are_club_coeff_beskrivelse_2',
  'what_are_club_coeff_beskrivelse_3',
  'what_are_club_coeff_beskrivelse_4',
  'what_are_club_coeff_tabell_2',
  'what_are_club_coeff_beskrivelse_5',
  'what_are_club_coeff_tabell_3',
  'what_are_club_coeff_beskrivelse_6',
  'what_are_club_coeff_beskrivelse_7',
  'what_are_club_coeff_beskrivelse_8'
];

function language_koeffisient(clicked_id) {
  if (overskrift_koeff_finnes) {
    var koeffisient_antall_oversett = sprak_id_koeffisient.length;
    if (clicked_id == "norsk") {
      for (x=0;x<koeffisient_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_koeffisient[x]).innerHTML = norsk_koeffisient[x];
        }
        catch {
          null;
        }
      }
    }
    else {
      for (x=0;x<koeffisient_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_koeffisient[x]).innerHTML = english_koeffisient[x];
        }
        catch {
          null;
        }
      }
    }
  }
  else if (document.getElementById('overskrift_koeffisient_dokumentasjon')) {
    var koeffisient_dokumentasjon_antall_oversett = sprak_id_koeffisient_dokumentasjon.length;
    if (clicked_id == "norsk") {
      for (x=0;x<koeffisient_dokumentasjon_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_koeffisient_dokumentasjon[x]).innerHTML = norsk_koeffisient_dokumentasjon[x];
        }
        catch {
          null;
        }
      }
    }
    else {
      for (x=0;x<koeffisient_dokumentasjon_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_koeffisient_dokumentasjon[x]).innerHTML = english_koeffisient_dokumentasjon[x];
        }
        catch {
          null;
        }
      }
    }
  }
  else if (document.getElementById('overskrift_premiepenger')) {
    var kalkulator_antall_oversett = sprak_id_kalkulator.length;
    if (clicked_id == "norsk") {
      for (x=0;x<kalkulator_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_kalkulator[x]).innerHTML = norsk_kalkulator[x];
        }
        catch {
          null;
        }
      }
    }
    else {
      for (x=0;x<kalkulator_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_kalkulator[x]).innerHTML = english_kalkulator[x];
        }
        catch {
          null;
        }
      }
    }
  }
  else if (overskrift_forside_finnes) {
    var forside_antall_oversett = sprak_id_forside.length;
    if (clicked_id == "norsk") {
      document.getElementById("dropdown_elementer_turnering").innerHTML = '';
      const knapplabel_turneringer = ['<img src=media/UEFA/UCL.svg class=turnering_ikon>', '<img src=media/UEFA/UEL.svg class=turnering_ikon>', '<img src=media/UEFA/UECL.svg class=turnering_ikon>']
      for (i = 0; i < knapplabel_turneringer.length; i++) {
        let btn = "<abbr data_title='Alle stadier'><button onClick='adva_filtrer(this.id)' class='btn btn-danger " + knapp_filter_turneringer[i] + "' id=" + knapp_filter_turneringer[i] + ">" + knapplabel_turneringer[i] + "</button></abbr>"
        document.getElementById("dropdown_elementer_turnering").innerHTML += btn;
      }
      fargelegg_etter_reset()
      for (x=0;x<forside_antall_oversett;x++) {
        try {
					if (aarstall <= 2) {
						if (norsk_forside[x] == "Ligaspill") {
							norsk_forside[x] = "Gruppespill";
						}
					} else if (aarstall >= 3) {
						if (norsk_forside[x] == "Gruppespill") {
							norsk_forside[x] = "Ligaspill";
						}
					}
          document.getElementById(sprak_id_forside[x]).innerHTML = norsk_forside[x];
        }
        catch {
          null;
        }
      }
      if (document.getElementById('filter_på').innerText != '') {
        document.getElementById('filter_på').innerText = '(på)'
      }
    }
    else {
      document.getElementById("dropdown_elementer_turnering").innerHTML = '';
      const knapplabel_turneringer = ['<img src=media/UEFA/UCL.svg class=turnering_ikon>', '<img src=media/UEFA/UEL.svg class=turnering_ikon>', '<img src=media/UEFA/UECL.svg class=turnering_ikon>']
      for (i = 0; i < knapplabel_turneringer.length; i++) {
        let btn = "<abbr data_title='All stages'><button onClick='adva_filtrer(this.id)' class='btn btn-danger " + knapp_filter_turneringer[i] + "' id=" + knapp_filter_turneringer[i] + ">" + knapplabel_turneringer[i] + "</button></abbr>"
        document.getElementById("dropdown_elementer_turnering").innerHTML += btn;
      }
      fargelegg_etter_reset()
      for (x=0;x<forside_antall_oversett;x++) {
        try {
					if (aarstall <= 2) {
						if (english_forside[x] == "League phase") {
							english_forside[x] = "Group stage";
						}
					} else if (aarstall >= 3) {
						if (english_forside[x] == "Group stage") {
							english_forside[x] = "League phase";
						}
					}
          document.getElementById(sprak_id_forside[x]).innerHTML = english_forside[x];
        }
        catch {
          null;
        }
      }
      if (document.getElementById('filter_på').innerText != '') {
        document.getElementById('filter_på').innerText = '(on)'
      }
    }
  }
  else if (overskrift_landskoeffisient_finnes) {
    var landskoeffisient_antall_oversett = sprak_id_landskoeffisient.length;
    if (clicked_id == "norsk") {
      for (x=0;x<landskoeffisient_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_landskoeffisient[x]).innerHTML = norsk_landskoeffisient[x];
        }
        catch {
          null;
        }
      }
    }
    else {
      for (x=0;x<landskoeffisient_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_landskoeffisient[x]).innerHTML = english_landskoeffisient[x];
        }
        catch {
          null;
        }
      }
    }
    access_list(clicked_id);
  }
  else if (overskrift_klubbkoeffisient_finnes) {
    var klubbkoeffisient_antall_oversett = sprak_id_klubbkoeffisient.length;
    if (clicked_id == "norsk") {
      for (x=0;x<klubbkoeffisient_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_klubbkoeffisient[x]).innerHTML = norsk_klubbkoeffisient[x];
        }
        catch {
          null;
        }
      }
    }
    else {
      for (x=0;x<klubbkoeffisient_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_klubbkoeffisient[x]).innerHTML = english_klubbkoeffisient[x];
        }
        catch {
          null;
        }
      }
    }
  }
  else if (overskrift_fire_års_finnes) {
    let fire_års_antall_oversett = sprak_id_fire_års.length;
    if (clicked_id == "norsk") {
      for (x=0;x<fire_års_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_fire_års[x]).innerHTML = norsk_fire_års[x];
        }
        catch {
          null;
        }
      }
    }
    else {
      for (x=0;x<fire_års_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_fire_års[x]).innerHTML = english_fire_års[x];
        }
        catch {
          null;
        }
      }
    }
  }
  else {
    var ti_års_antall_oversett = sprak_id_ti_års.length;
    if (clicked_id == "norsk") {
      for (x=0;x<ti_års_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_ti_års[x]).innerHTML = norsk_ti_års[x];
        }
        catch {
          null;
        }
      }
    }
    else {
      for (x=0;x<ti_års_antall_oversett;x++) {
        try {
          document.getElementById(sprak_id_ti_års[x]).innerHTML = english_ti_års[x];
        }
        catch {
          null;
        }
      }
    }
  }
}

var flint_2 = localStorage.getItem("someVarKey");
language_koeffisient(flint_2);
language_standard(flint_2);

if (overskrift_koeff_finnes) {
  oppdater_ved_refresh_koeff_1();
}

if (overskrift_forside_finnes) {
  const menyvalg_lengde = JSON.parse(sessionStorage.getItem('menyvalg_edit')).length || 0;
  var menyvalg_edit_2 = JSON.parse(sessionStorage.getItem('menyvalg_edit')) || "";
  var schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": []
  }
  for (let i = 0; i < menyvalg_lengde; i++) {
    menyvalg_edit_2[i][0] = (menyvalg_edit_2[i][0]).slice(0,-3)
    var Lag_premiepenger = {
        "@type": "Question",
        "name": "How much UEFA prize money has " + menyvalg_edit_2[i][0] + " earned so far?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "€ " + menyvalg_edit_2[i][6].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
        }
    }
    var poeng1 = "points"
    var poeng2 = "points"
    if (menyvalg_edit_2[i][7] == 1) {
      poeng1 = "point"
    }
    if (menyvalg_edit_2[i][8] == 1) {
      poeng2 = "point"
    }
    var Lag_koeff = {
      "@type": "Question",
      "name": "How many UEFA coefficient points has " + menyvalg_edit_2[i][0] + " earned in 2023/24?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": menyvalg_edit_2[i][7] + " association coefficient " + poeng1 + " and " + menyvalg_edit_2[i][8] + " club coefficient " + poeng2,
      }
  }
    schema.mainEntity.push(Lag_premiepenger)
    schema.mainEntity.push(Lag_koeff)
  }
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

endre_link_landskoeff()
function endre_link_landskoeff() {
  if (overskrift_landskoeffisient_finnes) {
    let siste_ord_linktekst = document.getElementById('overskrift_landskoeffisient').innerText;
    if (siste_ord_linktekst == "Country coefficient ranking") {
        siste_ord_linktekst = "prize money"
    }
    else {
      siste_ord_linktekst = "premiepenger"
    }
    var Klubbnavn = localStorage.getItem('Klubbnavn') || 'Choose club';
    if (Klubbnavn.slice(-1) == "s") {
      document.getElementById("klubb_link").innerHTML = Klubbnavn + "' " + siste_ord_linktekst;
    }
    else {
      if (siste_ord_linktekst == "premiepenger") {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "s " + siste_ord_linktekst;
      }
      else {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "'s " + siste_ord_linktekst;
      }
    }
    if (Klubbnavn == "Choose club" || Klubbnavn == eksperimentell_profil_e) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_e;
    }
    else if (Klubbnavn == "Velg klubb" || Klubbnavn == eksperimentell_profil_n) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_n;
    }
  }
  else if (overskrift_klubbkoeffisient_finnes) {
    let siste_ord_linktekst = document.getElementById('overskrift_klubbkoeffisient').innerText;
    if (siste_ord_linktekst == "Club coefficient ranking") {
        siste_ord_linktekst = "prize money"
    }
    else {
      siste_ord_linktekst = "premiepenger"
    }
    var Klubbnavn = localStorage.getItem('Klubbnavn') || 'Choose club';
    if (Klubbnavn.slice(-1) == "s") {
      document.getElementById("klubb_link").innerHTML = Klubbnavn + "' " + siste_ord_linktekst;
    }
    else {
      if (siste_ord_linktekst == "premiepenger") {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "s " + siste_ord_linktekst;
      }
      else {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "'s " + siste_ord_linktekst;
      }
    }
    if (Klubbnavn == "Choose club" || Klubbnavn == eksperimentell_profil_e) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_e;
    }
    else if (Klubbnavn == "Velg klubb" || Klubbnavn == eksperimentell_profil_n) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_n;
    }
  }
  else if (overskrift_ti_års_finnes) {
    let siste_ord_linktekst = document.getElementById('overskrift_ti_års').innerText;
    if (siste_ord_linktekst == "10-year coefficient ranking") {
        siste_ord_linktekst = "prize money"
    }
    else {
      siste_ord_linktekst = "premiepenger"
    }
    var Klubbnavn = localStorage.getItem('Klubbnavn') || 'Choose club';
    if (Klubbnavn.slice(-1) == "s") {
      document.getElementById("klubb_link").innerHTML = Klubbnavn + "' " + siste_ord_linktekst;
    }
    else {
      if (siste_ord_linktekst == "premiepenger") {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "s " + siste_ord_linktekst;
      }
      else {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "'s " + siste_ord_linktekst;
      }
    }
    if (Klubbnavn == "Choose club" || Klubbnavn == eksperimentell_profil_e) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_e;
    }
    else if (Klubbnavn == "Velg klubb" || Klubbnavn == eksperimentell_profil_n) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_n;
    }
  }
  else if (overskrift_fire_års_finnes) {
    let siste_ord_linktekst = document.getElementById('overskrift_fire_års').innerText;
    if (siste_ord_linktekst == "Club coefficient ranking") {
        siste_ord_linktekst = "prize money"
    }
    else {
      siste_ord_linktekst = "premiepenger"
    }
    var Klubbnavn = localStorage.getItem('Klubbnavn') || 'Choose club';
    if (Klubbnavn.slice(-1) == "s") {
      document.getElementById("klubb_link").innerHTML = Klubbnavn + "' " + siste_ord_linktekst;
    }
    else {
      if (siste_ord_linktekst == "premiepenger") {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "s " + siste_ord_linktekst;
      }
      else {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "'s " + siste_ord_linktekst;
      }
    }
    if (Klubbnavn == "Choose club" || Klubbnavn == eksperimentell_profil_e) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_e;
    }
    else if (Klubbnavn == "Velg klubb" || Klubbnavn == eksperimentell_profil_n) {
      document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_n;
    }
  }
}

// Koeffisient deffinisjon.
// Når Landskoeffisient-rangerings lenken trykkes:

function trykker_lands_rank_deffinisjon() {
  sessionStorage.setItem('kolonne_landskoeffisient', 'poeng')
  sessionStorage.setItem('rekkefølge_landskoeffisient', 'asc')
  sessionStorage.setItem('kolonne_landskoeffisient2', 'id_nr_klubb')
  sessionStorage.setItem('rekkefølge_landskoeffisient2', 'asc')
}

// Når forside-lenken trykkes:
function trykker_forside_deffinisjon() {
  sessionStorage.setItem('kolonne', 'prize_money')
  sessionStorage.setItem('rekkefølge', 'desc')
  sessionStorage.setItem('kolonne2', 'prize_money_total')
  sessionStorage.setItem('rekkefølge2', 'desc')
  localStorage.setItem('filter_land', JSON.stringify([]))
  sessionStorage.setItem('trykte_knapper', JSON.stringify([]))
  sessionStorage.setItem('trykte_knapper_exclude', JSON.stringify([]))
  sessionStorage.setItem('spoiler', 'synlig')
}

const bokstaver = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','-','/','0','1','2','3','4','5','6','7','8','9','.',"'",'(',')','&'];
function convertString(filter)
{
    //Convert Characters
    filter = filter.replace(/Á/g, 'A');
    filter = filter.replace(/Å/g, 'A');
    filter = filter.replace(/Ä/g, 'A');
    filter = filter.replace(/Â/g, 'A');
    filter = filter.replace(/Ă/g, 'A');
    filter = filter.replace(/Ā/g, 'A');
    filter = filter.replace(/Ą/g, 'A');
    filter = filter.replace(/À/g, 'A');
    filter = filter.replace(/Ə/g, 'A');
    filter = filter.replace(/Æ/g, 'AE');
    filter = filter.replace(/Ç/g, 'C');
    filter = filter.replace(/Ć/g, 'C');
    filter = filter.replace(/Č/g, 'C');
    filter = filter.replace(/Ð/g, 'D');
    filter = filter.replace(/È/g, 'E');
    filter = filter.replace(/Ė/g, 'E');
    filter = filter.replace(/Ë/g, 'E');
    filter = filter.replace(/Ę/g, 'E');
    filter = filter.replace(/É/g, 'E');
    filter = filter.replace(/Ğ/g, 'G');
    filter = filter.replace(/Ħ/g, 'H');
    filter = filter.replace(/Í/g, 'I');
    filter = filter.replace(/Ī/g, 'I');
    filter = filter.replace(/İ/g, 'I');
    filter = filter.replace(/Î/g, 'I');
    filter = filter.replace(/Ł/g, 'L');
    filter = filter.replace(/Ń/g, 'N');
    filter = filter.replace(/Ň/g, 'N');
    filter = filter.replace(/Ó/g, 'O');
    filter = filter.replace(/Ø/g, 'O');
    filter = filter.replace(/Ö/g, 'O');
    filter = filter.replace(/Š/g, 'S');
    filter = filter.replace(/Ş/g, 'S');
    filter = filter.replace(/Ș/g, 'S');
    filter = filter.replace(/Ś/g, 'S');
    filter = filter.replace(/Ț/g, 'T');
    filter = filter.replace(/Ü/g, 'U');
    filter = filter.replace(/Ū/g, 'U');
    filter = filter.replace(/Ú/g, 'U');
    filter = filter.replace(/Ž/g, 'Z');
    filter = filter.replace(/Ż/g, 'Z');
    return filter
}

let input_tekst = "";

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  if (filter != input_tekst) {
    input_tekst = filter
    filter = convertString(filter);
    div = document.getElementById("dropdown_elementer");
    a = div.getElementsByTagName("button");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].innerText || a[i].innerText;
      txtValue = convertString(txtValue.toUpperCase());
      // Skriver ut klubber med ugyldige bokstaver. Klubber som skrives ut må få alle sine bokstaver gyldige i "convertString()"
      // for (r = 0; r < txtValue.length; r++) {
      //     if (!bokstaver.includes(txtValue[r])) {
      //         break
      //     }
      // }
      if (txtValue.indexOf(filter) > -1) {
          a[i].style.display = "";
      }
      else {
          a[i].style.display = "none";
      }
    }
  }
}

// let pixelRatio = window.devicePixelRatio;

// $(window).resize(function() {
//   if (window.devicePixelRatio > pixelRatio) {
//     document.getElementById("ad_venstre").innerHTML = "";
//     document.getElementById("ad_hoyre").innerHTML = "";
//   }
// });

if (overskrift_koeff_deff_finnes) {
  let vinduBredde = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  $(window).resize(function() {
    if (vinduBredde > 1507) {
      if (((window.innerWidth > 0) ? window.innerWidth : screen.width) <= 1507) {
        for (let i = 0; i < document.getElementsByClassName("reaklame_sidene").length; i++) {
          document.getElementsByClassName("reaklame_sidene")[i].style.display = "none";
        }
      }
      else {
        for (let i = 0; i < document.getElementsByClassName("reaklame_sidene").length; i++) {
          document.getElementsByClassName("reaklame_sidene")[i].style.display = "block";
        }
      }
    }
  }) 
}
if (overskrift_landskoeffisient_finnes || overskrift_klubbkoeffisient_finnes || overskrift_fire_års_finnes || overskrift_ti_års_finnes) {
	if (window.devicePixelRatio < 0.85) {
		document.getElementById("myDropdown_2").classList.add("utzoom_landDrop");
	}
	$(window).resize(function() {
		if (window.devicePixelRatio < 0.85) {
			document.getElementById("myDropdown_2").classList.add("utzoom_landDrop");
		}
		else {
			document.getElementById("myDropdown_2").classList.remove("utzoom_landDrop");
		}
	});
}
else if (overskrift_forside_finnes) {
	if (window.devicePixelRatio < 0.85) {
		document.getElementById("myDropdown").classList.add("utzoom_landDrop");
	}
	$(window).resize(function() {
		if (window.devicePixelRatio < 0.85) {
			document.getElementById("myDropdown").classList.add("utzoom_landDrop");
		}
		else {
			document.getElementById("myDropdown").classList.remove("utzoom_landDrop");
		}
	});
}