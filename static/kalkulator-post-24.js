var antall_MV_elem = 8;

/*Variabler som skal brukes i utregninger under*/
/*21/22 variabler til utregning av noen summer*/

var UCL_total_mengde_2122 = 2002000000;
var UEL_total_mengde_2122 = 465000000; 
var UECL_total_mengde_2122 = 235000000;
var UCL_utslåtte_lagene_PO_2122 = 30000000;
var UCL_deltagelsespenger_2122 = UCL_total_mengde_2122 * 0.25;
var UEL_deltagelsespenger_2122 = UEL_total_mengde_2122 * 0.25;
var UECL_deltagelsespenger_2122 = UECL_total_mengde_2122 * 0.40;
var UCL_antall_deltagere_2122 = 36;
var UEL_antall_deltagere_2122 = 36;
var UECL_antall_deltagere_2122 = 36;
var Spilt_SCUP_total_2122 = 7000000;
/*Premiepenger ved ulike situasjoner uavhengig av turnering*/
/*21/22 knapper*/

var Hjemlig_seriemester_2122 = 260000;
var Spilt_Pre_Q_eller_PO_2122 = 100000;
var UECL_Slått_ut_Q1_2122 = 150000;
var UECL_Slått_ut_Q2_2122 = 350000;
var UECL_Slått_ut_Q3_2122 = 550000;
var Spilt_Q3_league_path_2122 = "";
var UCL_utslått_lag_PO_2122 = UCL_utslåtte_lagene_PO_2122 / 7;
var UECL_Slått_ut_PO_2122 = 750000;
var UCL_deltaker_gruppespillet_2122 = UCL_deltagelsespenger_2122 / UCL_antall_deltagere_2122;
var UEL_deltaker_gruppespillet_2122 = UEL_deltagelsespenger_2122 / UEL_antall_deltagere_2122;
var UECL_deltaker_gruppespillet_2122 = UECL_deltagelsespenger_2122 / UECL_antall_deltagere_2122;
var UCL_spilt_åttendedelsfinale_2122 = 9600000;
var UEL_spilt_åttendedelsfinale_2122 = 1200000;
var UECL_spilt_åttendedelsfinale_2122 = 600000;
var UCL_spilt_kvartfinale_2122 = 10600000;
var UEL_spilt_kvartfinale_2122 = 1800000;
var UECL_spilt_kvartfinale_2122 = 1000000;
var UCL_spilt_semifinale_2122 = 12500000;
var UEL_spilt_semifinale_2122 = 2800000;
var UECL_spilt_semifinale_2122 = 2000000;
var UCL_spilt_finale_2122 = 15500000;
var UEL_spilt_finale_2122 = 4600000;
var UECL_spilt_finale_2122 = 3000000;
var UCL_vinner_2122 = 4500000;
var UEL_vinner_2122 = 4000000;
var UECL_vinner_2122 = 2000000;
var Spilt_SCUP_2122 = Spilt_SCUP_total_2122 / 2;
var Vunnet_SCUP_2122 = 1000000;


/*21/22 input felt*/
var UCL_ti_års_kr_2122 = 1137000;
var UEL_ti_års_kr_2122 = 132000;
var UECL_ti_års_kr_2122 = 44500;
var UCL_seier_2122 = 2800000;
var UEL_seier_2122 = 630000;
var UECL_seier_2122 = 500000;
var UCL_uavgjort_2122 = 930000;
var UEL_uavgjort_2122 = 210000;
var UECL_uavgjort_2122 = 166000;
var påfyll_ingen_funksjon_2122 = 0;
var UEL_førsteplass_2122 = 1100000;
var UECL_førsteplass_2122 = 650000;
var UEL_andreplass_2122 = 550000; 
var UECL_andreplass_2122 = 325000;
var UEL_spilt_utslagsrunde_PO_2122 = 500000;
var UECL_spilt_utslagsrunde_PO_2122 = 300000;



const knapp_summer = [
    [Hjemlig_seriemester_2122],
    [],
    [Spilt_Pre_Q_eller_PO_2122],
    [Spilt_Pre_Q_eller_PO_2122],
    [UECL_Slått_ut_Q1_2122],
    [Spilt_Pre_Q_eller_PO_2122],
    [Spilt_Pre_Q_eller_PO_2122],
    [UECL_Slått_ut_Q2_2122],
    [Spilt_Pre_Q_eller_PO_2122],
    [Spilt_Pre_Q_eller_PO_2122],
    [Spilt_Pre_Q_eller_PO_2122],
    [UECL_Slått_ut_Q3_2122],
    [Spilt_Q3_league_path_2122],
    [Spilt_Pre_Q_eller_PO_2122],
    [Spilt_Pre_Q_eller_PO_2122],
    [UCL_utslått_lag_PO_2122],
    [UECL_Slått_ut_PO_2122],
    [UCL_deltaker_gruppespillet_2122],
    [UEL_deltaker_gruppespillet_2122],
    [UECL_deltaker_gruppespillet_2122],
    [UCL_spilt_åttendedelsfinale_2122],
    [UEL_spilt_åttendedelsfinale_2122],
    [UECL_spilt_åttendedelsfinale_2122],
    [UCL_spilt_kvartfinale_2122],
    [UEL_spilt_kvartfinale_2122],
    [UECL_spilt_kvartfinale_2122],
    [UCL_spilt_semifinale_2122],
    [UEL_spilt_semifinale_2122],
    [UECL_spilt_semifinale_2122],
    [UCL_spilt_finale_2122],
    [UEL_spilt_finale_2122],
    [UECL_spilt_finale_2122],
    [UCL_vinner_2122],
    [UEL_vinner_2122],
    [UECL_vinner_2122],
    [Spilt_SCUP_2122],
    [Vunnet_SCUP_2122]
];

const input_summer = [
    [UCL_ti_års_kr_2122],
    [UEL_ti_års_kr_2122],
    [UECL_ti_års_kr_2122],
    [UCL_seier_2122],
    [UEL_seier_2122],
    [UECL_seier_2122],
    [UCL_uavgjort_2122],
    [UEL_uavgjort_2122],
    [UECL_uavgjort_2122],
    [UCL_uavgjort_2122],
    [UEL_uavgjort_2122],
    [UECL_uavgjort_2122],
    [påfyll_ingen_funksjon_2122],
    [UEL_førsteplass_2122],
    [UECL_førsteplass_2122],
    [UEL_andreplass_2122],
    [UECL_andreplass_2122],
    [UEL_spilt_utslagsrunde_PO_2122],
    [UECL_spilt_utslagsrunde_PO_2122]
];
var eksperimentell_profil_e = "Calculate from scratch";
var eksperimentell_profil_n = "Kalkuler fra bunnen";
var din_klubbs_premi_koef_e = "your club’s coefficient points";
var din_klubbs_premi_koef_n = "din klubb’s koeffisientpoeng";

const UCL_inntjening_celler = ["b3_", "b6_", "b9_", "b13_", "b16_", "b21_", "b24_", "b27_", "b30_", "b33_", "i4_", "i7_"]; /*Ikke i1, i2, i3, i10, i11 og i12 fordi de verdiene hentes fra de "ikke avrundede" listene*/
const UEL_inntjening_celler = ["uelQ1_", "uelQ2_", "b10_", "b14_", "b22_", "b25_", "b28_", "b31_", "b34_", "i5_", "i8_", "i14_", "i14__"];
const UECL_inntjening_celler = ["b4_", "b5_", "b7_", "b8_", "b11_", "b12_", "b15_", "b17_", "b23_", "b26_", "b29_", "b32_", "b35_", "i6_", "i9_", "i15_", "i15__"];
const seriemester_inntjening_celler = ["b1_", "b36_", "b36_hoyre", "b37_", "b37_hoyre"];

const UECL_fjerning_av_summer_ved_deltagelse = ["b1_", "b5_", "b8_", "b12_", "b17_"];
var UCL_ikke_avrundet = [0,0,0]
var UEL_ikke_avrundet = [0,0,0]
var UECL_ikke_avrundet = [0,0,0]

var ja_språk = "Ja";
var nei_språk = "Nei";
var spilt_språk = "Spilt"


for (let p = 1; p < 16; p++) {
    document.getElementById("i" + p).style.borderColor = "#ced4da";
};

var aarstall = 0;
if (localStorage.getItem('sessong') == null) {
    aarstall = 1
    localStorage.setItem('sessong', aarstall)
}
else {
    aarstall = parseInt(localStorage.getItem('sessong'));
}

oppdater_ved_refresh_1()
function paa_av(clicked_id){
    if (clicked_id == 'uelQ1' || clicked_id == 'uelQ2') {
        if ((document.getElementById('overskrift_premiepenger').innerText).includes('Prize')) {
            document.getElementById(clicked_id).innerText = 'Played';
        } else {document.getElementById(clicked_id).innerText = 'Spilt';}
        // Midlertidig
        // document.getElementById(clicked_id + "_").innerText = "€ " + knapp_summer[2][aarstall-3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        // document.getElementById(clicked_id).id = clicked_id.slice(0, 3) + '-' + clicked_id.slice(3, 5)
        // summer();
        if (document.getElementById('b19')) {
            document.getElementById(clicked_id + "_").innerText = "€ " + knapp_summer[2][aarstall-3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            document.getElementById(clicked_id).id = clicked_id.slice(0, 3) + '-' + clicked_id.slice(3, 5)
            summer();
        } else {document.getElementById(clicked_id).id = clicked_id.slice(0, 3) + '-' + clicked_id.slice(3, 5)}
        flytt_SCUP_sum_hoyre(clicked_id)
    }
    else if (clicked_id == 'uel-Q1' || clicked_id == 'uel-Q2') {
        document.getElementById(clicked_id).innerText = '';
        document.getElementById(clicked_id.slice(0, 3) + clicked_id.slice(4, 6) + '_').innerText = '';
        document.getElementById(clicked_id).id = clicked_id.slice(0, 3) + clicked_id.slice(4, 6);
        summer();
        flytt_SCUP_sum_venstre(clicked_id)
    }
    else if (clicked_id == 'CLPO') {
        document.getElementById("b1_").innerText = "";
        document.getElementById("b3_").innerText = "";
        document.getElementById("b6_").innerText = "";
        document.getElementById("b9_").innerText = "";
        if ((document.getElementById('overskrift_premiepenger').innerText).includes('Prize')) {
            document.getElementById(clicked_id).innerText = 'Played';
        } else {document.getElementById(clicked_id).innerText = 'Spilt';}
        document.getElementById(clicked_id).id = 'CL-PO'
        // lagre_trykking()
        summer();
    }
    else if (clicked_id == 'CL-PO') {
        document.getElementById(clicked_id).innerText = "";
        document.getElementById(clicked_id).id = 'CLPO'
        // Midlertidig
        // if (!document.getElementById("b-18")) {
        //     oppdater_b2_b3_b6_b9();
        // }
        // if (!document.getElementById("b-9") && !document.getElementById("b-13") && !document.getElementById("b-14") && !document.getElementById("b-18") && !document.getElementById("b-19") && !document.getElementById("b-20")) {
        //     oppdater_b1();
        // }
        if (!document.getElementById("b-13") && !document.getElementById("b-18") && !document.getElementById("b-19") && !document.getElementById("b-20")) {
            oppdater_b2_b3_b6_b9();
        }
        if (!document.getElementById("b-9") && !document.getElementById("b-13") && !document.getElementById("b-14") && !document.getElementById("b-18") && !document.getElementById("b-19") && !document.getElementById("b-20")) {
            oppdater_b1();
        }
        // lagre_trykking()
        summer();
    }
    else {
        var nummer = parseInt(clicked_id.substr(1, clicked_id.length));
        const tall = -nummer;
        if (nummer > 0)  {
            if (nummer == 2 || nummer == 3 || nummer == 4 || nummer == 6 || nummer == 7 || nummer == 9 || nummer == 10 || nummer == 11 || nummer == 13 || nummer == 14 || nummer == 15 || nummer == 36 || (nummer >= 21 && nummer <= 32)) {
                document.getElementById(clicked_id).innerText = (spilt_språk || "");
            }
            else {
                document.getElementById(clicked_id).innerText = (ja_språk || "");
            }
            document.getElementById(clicked_id).id = "b" + tall;
            var aktuell_sum = (knapp_summer[nummer - 1][aarstall-3]);
            if (clicked_id == "b1") {
                if ((document.getElementById("b9")) && (document.getElementById("b13")) && (document.getElementById("b14")) && (document.getElementById("b18")) && (document.getElementById("b19")) && (document.getElementById("b20")) && (!document.getElementById("CL-PO"))) {
                    document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    summer();
                    rund_av_enkeltcelle(aktuell_sum, clicked_id);
                }
                else if ((document.getElementById("b-9")) || (document.getElementById("b-13")) || (document.getElementById("b-14")) || (document.getElementById("b-18")) || (document.getElementById("b-19")) || (document.getElementById("b-20"))) {
                    summer();
                }
            }
            else if (clicked_id == "b3" || clicked_id == "b6" || clicked_id == "b9" || clicked_id == "b10" ||  clicked_id == "b14") {
                if (clicked_id == "b9" || clicked_id == "b14") {
                    document.getElementById("b1_").innerText = "";
                }
                // Midlertidig
                // if ((clicked_id == 'b3' || clicked_id == 'b6' || clicked_id == 'b9') && (document.getElementById("CLPO")) && (document.getElementById("b18"))) {
                //     document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                //     summer();
                //     rund_av_enkeltcelle(aktuell_sum, clicked_id);
                // }
                if ((document.getElementById("b13")) && (document.getElementById("b16")) && (document.getElementById("b18")) && (document.getElementById("b19")) && (!document.getElementById("CL-PO"))) {
                    document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    summer();
                    rund_av_enkeltcelle(aktuell_sum, clicked_id);
                }
                else if (clicked_id == 'b10' && (document.getElementById("b-18") || document.getElementById("CL-PO"))) {
                    document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    summer();
                    rund_av_enkeltcelle(aktuell_sum, clicked_id);
                }
                else if (clicked_id == "b14" && (document.getElementById("b19"))) {
                    document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    summer();
                    rund_av_enkeltcelle(aktuell_sum, clicked_id);
                }
                else if ((document.getElementById("b-13")) || (document.getElementById("b-16")) || (document.getElementById("b-18")) || (document.getElementById("b-19"))) {
                    summer();
                }
            }
            else {
                if (clicked_id == "b13" || clicked_id == "b16" || clicked_id == "b18" || clicked_id == "b19") {
                    document.getElementById("b3_").innerText = "";
                    document.getElementById("b6_").innerText = "";
                    document.getElementById("b9_").innerText = "";
                    // Midlertidig
                    // if (clicked_id != 'b13' && clicked_id != 'b19') {
                    // document.getElementById("b3_").innerText = "";
                    // document.getElementById("b6_").innerText = "";
                    // document.getElementById("b9_").innerText = "";
                    // }
                    if (clicked_id == "b19") {
                        document.getElementById("uelQ1_").innerText = "";
                        document.getElementById("uelQ2_").innerText = "";
                        document.getElementById("b14_").innerText = "";
                        document.getElementById("b10_").innerText = "";
                    }
                }
                if (clicked_id == "b13" || clicked_id == "b18" || clicked_id == "b19" || clicked_id == "b20") {
                    if (nummer == 18) {
                        UCL_ikke_avrundet[0] = aktuell_sum;
                    }
                    if (nummer == 19) {
                        UEL_ikke_avrundet[0] = aktuell_sum;
                    }
                    if (nummer == 20) {
                        UECL_ikke_avrundet[0] = aktuell_sum;
                    }
                    document.getElementById("b1_").innerText = "";
                }
                if (clicked_id == "b13") {
                    summer();
                }
                else {
                    document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    summer();
                    rund_av_enkeltcelle(aktuell_sum, clicked_id);
                }
            }
            flytt_SCUP_sum_hoyre(clicked_id)
        }
        else {
            if ((clicked_id == "b-9" && document.getElementById("b13") && document.getElementById("b14") && document.getElementById("b18") && document.getElementById("b19") && document.getElementById("b20") && document.getElementById("CLPO"))
             || (clicked_id == "b-13" && document.getElementById("b9") && document.getElementById("b14") && document.getElementById("b18") && document.getElementById("b19") && document.getElementById("b20") && document.getElementById("CLPO"))
             || (clicked_id == "b-14" && document.getElementById("b9") && document.getElementById("b13") && document.getElementById("b18") && document.getElementById("b19") && document.getElementById("b20") && document.getElementById("CLPO"))
             || (clicked_id == "b-18" && document.getElementById("b9") && document.getElementById("b13") && document.getElementById("b14") && document.getElementById("b19") && document.getElementById("b20") && document.getElementById("CLPO"))
             || (clicked_id == "b-19" && document.getElementById("b9") && document.getElementById("b13") && document.getElementById("b14") && document.getElementById("b18") && document.getElementById("b20") && document.getElementById("CLPO"))
             || (clicked_id == "b-20" && document.getElementById("b9") && document.getElementById("b13") && document.getElementById("b14") && document.getElementById("b18") && document.getElementById("b19") && document.getElementById("CLPO"))) {
                oppdater_b1();
            }
            if ((clicked_id == "b-13" && document.getElementById("b16") && document.getElementById("b18") && document.getElementById("b19") && document.getElementById("CLPO")) || (clicked_id == "b-16" && document.getElementById("b13") && document.getElementById("b18") && document.getElementById("b19") && document.getElementById("CLPO")) || (clicked_id == "b-18" && document.getElementById("b13") && document.getElementById("b16") && document.getElementById("b19") && document.getElementById("CLPO")) || (clicked_id == "b-19" && document.getElementById("b18") && document.getElementById("b13") && document.getElementById("b16") && document.getElementById("CLPO"))) {
                oppdater_b2_b3_b6_b9();
            }
            if ((clicked_id == "b-19")) {
                oppdater_b10_b14();
            }
            if (nummer == -18) {
                UCL_ikke_avrundet[0] = 0;
            }
            if (nummer == -19) {
                UEL_ikke_avrundet[0] = 0;
            }
            if (nummer == -20) {
                UECL_ikke_avrundet[0] = 0;
            }
            if (clicked_id == 'b-36') {
                document.getElementById('b36_').innerText = '';
                document.getElementById('b36_hoyre').innerText = '';
            }
            if (clicked_id == 'b-37') {
                document.getElementById('b37_').innerText = '';
                document.getElementById('b37_hoyre').innerText = '';
            }
            document.getElementById(clicked_id).innerText = "" /*nei_språk*/;
            document.getElementById(clicked_id).id = "b" + tall;
            document.getElementById("b" + tall + "_").innerText = "";
            flytt_SCUP_sum_venstre(clicked_id, tall)
            summer();
        }
    }
};
function flytt_SCUP_sum_hoyre(clicked_id) {
    let UEL_celle_00 = (document.getElementById(UEL_inntjening_celler[0]).innerText)
    let UEL_celle_0 = (document.getElementById(UEL_inntjening_celler[1]).innerText)
    let UEL_celle_1 = (document.getElementById(UEL_inntjening_celler[2]).innerText)
    let UEL_celle_2 = (document.getElementById(UEL_inntjening_celler[3]).innerText)
    let UEL_celle_21 = (document.getElementById('b19_').innerText)
    let UEL_celle_22 = (document.getElementById('i2_').innerText)
    let UEL_celle_23 = (document.getElementById('i11_').innerText)
    let UEL_celle_3 = (document.getElementById(UEL_inntjening_celler[4]).innerText)
    let UEL_celle_4 = (document.getElementById(UEL_inntjening_celler[5]).innerText)
    let UEL_celle_5 = (document.getElementById(UEL_inntjening_celler[6]).innerText)
    let UEL_celle_6 = (document.getElementById(UEL_inntjening_celler[7]).innerText)
    let UEL_celle_7 = (document.getElementById(UEL_inntjening_celler[8]).innerText)
    let UEL_celle_8 = (document.getElementById(UEL_inntjening_celler[9]).innerText)
    let UEL_celle_9 = (document.getElementById(UEL_inntjening_celler[10]).innerText)
    let UEL_celle_10 = (document.getElementById(UEL_inntjening_celler[11]).innerText)
    let UEL_celle_11 = (document.getElementById(UEL_inntjening_celler[12]).innerText)
    if (UEL_celle_00 != '' || UEL_celle_0 != '' || UEL_celle_1 != '' || UEL_celle_2 != '' || UEL_celle_3 != '' || UEL_celle_4 != '' || UEL_celle_5 != '' || UEL_celle_6 != '' || UEL_celle_7 != '' || UEL_celle_8 != '' || UEL_celle_9 != '' || UEL_celle_10 != '' || UEL_celle_11 != '' || UEL_celle_21 != '' || UEL_celle_22 != '' || UEL_celle_23 != '' || document.getElementById('i14').value == 3 || document.getElementById('i14').value == 4) {
        if (UEL_inntjening_celler.includes(clicked_id + '_') || clicked_id == 'b36' || clicked_id == 'b37' ||  UEL_celle_21 != '' ||  UEL_celle_22 != '' || UEL_celle_23 != '') {
            if (document.getElementById('b36_').innerText != '') {
                document.getElementById('b36_hoyre').innerText = document.getElementById('b36_').innerText
            }
            if (document.getElementById('b37_').innerText != '') {
                document.getElementById('b37_hoyre').innerText = document.getElementById('b37_').innerText
            }
            document.getElementById('b36_').innerText = '';
            document.getElementById('b37_').innerText = '';
        }
    }
}
function flytt_SCUP_sum_venstre(clicked_id) {
    let UEL_celle_1 = (document.getElementById(UEL_inntjening_celler[0]).innerText)
    let UEL_celle_2 = (document.getElementById(UEL_inntjening_celler[1]).innerText)
    let UEL_celle_21 = (document.getElementById('b19_').innerText)
    let UEL_celle_22 = (document.getElementById('i2_').innerText)
    let UEL_celle_23 = (document.getElementById('i11_').innerText)
    let UEL_celle_3 = (document.getElementById(UEL_inntjening_celler[2]).innerText)
    let UEL_celle_4 = (document.getElementById(UEL_inntjening_celler[3]).innerText)
    let UEL_celle_5 = (document.getElementById(UEL_inntjening_celler[4]).innerText)
    let UEL_celle_6 = (document.getElementById(UEL_inntjening_celler[5]).innerText)
    let UEL_celle_7 = (document.getElementById(UEL_inntjening_celler[6]).innerText)
    let UEL_celle_8 = (document.getElementById(UEL_inntjening_celler[7]).innerText)
    let UEL_celle_9 = (document.getElementById(UEL_inntjening_celler[8]).innerText)
    let UEL_celle_10 = (document.getElementById(UEL_inntjening_celler[9]).innerText)
    let UEL_celle_11 = (document.getElementById(UEL_inntjening_celler[10]).innerText)
    if (UEL_celle_1 == '' && UEL_celle_2 == '' && UEL_celle_3 == '' && UEL_celle_4 == '' && UEL_celle_5 == '' && UEL_celle_6 == '' && UEL_celle_7 == '' && UEL_celle_8 == '' && UEL_celle_9 == '' && UEL_celle_10 == '' && UEL_celle_11 == '' && UEL_celle_21 == '' && UEL_celle_22 == '' && UEL_celle_23 == '' && document.getElementById('i14').value != 3 && document.getElementById('i14').value != 4) {
        if (document.getElementById('b36_hoyre').innerText != '') {
            document.getElementById('b36_').innerText = document.getElementById('b36_hoyre').innerText
        }
        if (document.getElementById('b37_hoyre').innerText != '') {
            document.getElementById('b37_').innerText = document.getElementById('b37_hoyre').innerText
        }
        document.getElementById('b36_hoyre').innerText = '';
        document.getElementById('b37_hoyre').innerText = '';
    }
}
function oppdater_b1() {
    if (document.getElementById("b-1")) {
        var aktuell_sum = (knapp_summer[0][aarstall-3]);
        document.getElementById("b1_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
};
function oppdater_b2_b3_b6_b9() {
    if (document.getElementById("b-3")) {
        var aktuell_sum = (knapp_summer[2][aarstall-3]);
        document.getElementById("b3_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    if (document.getElementById("b-6")) {
        var aktuell_sum = (knapp_summer[5][aarstall-3]);
        document.getElementById("b6_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    if (document.getElementById("b-9")) {
        var aktuell_sum = (knapp_summer[8][aarstall-3]);
        document.getElementById("b9_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
};
function oppdater_b10_b14() {
    if (document.getElementById("uel-Q1")) {
        let aktuell_sum = (knapp_summer[2][aarstall-3]);
        document.getElementById("uelQ1_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    if (document.getElementById("uel-Q2")) {
        let aktuell_sum = (knapp_summer[2][aarstall-3]);
        document.getElementById("uelQ2_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    if (document.getElementById("b-10")) {
        var aktuell_sum = (knapp_summer[9][aarstall-3]);
        document.getElementById("b10_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    if (document.getElementById("b-14")) {
        var aktuell_sum = (knapp_summer[13][aarstall-3]);
        document.getElementById("b14_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
};
function forlat_input_felt_1(clicked_id, lagre_endring) {
    const antall_deltagere = [
        UCL_antall_deltagere_2122,
        UEL_antall_deltagere_2122,
        UECL_antall_deltagere_2122
    ];
    var nummer_2 = parseInt(clicked_id.substr(1, clicked_id.length));
    var input_felt_verdi = document.getElementById(clicked_id).value;
    document.getElementById(clicked_id + "_").innerText = "";
    document.getElementById(clicked_id).style.borderColor = "";
    document.getElementById(clicked_id).style.backgroundColor = "";
    document.getElementById(clicked_id).style.color = "";
    document.getElementById(clicked_id).className = "form-control ikke_placeholder";
    if (document.getElementById(clicked_id).value != "") {
        if (input_felt_verdi >= 1 && input_felt_verdi <= antall_deltagere[nummer_2 - 1] && input_felt_verdi % 1 == 0) {
            var deltakere_i_turnering = antall_deltagere[nummer_2 - 1];
            var aktuell_sum = ((deltakere_i_turnering + 1 - input_felt_verdi) * input_summer[nummer_2 - 1][aarstall-3]);
            document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            if (nummer_2 == 1) {
                UCL_ikke_avrundet[1] = aktuell_sum;
            }
            if (nummer_2 == 2) {
                UEL_ikke_avrundet[1] = aktuell_sum;
            }
            if (nummer_2 == 3) {
                UECL_ikke_avrundet[1] = aktuell_sum;
            }
            summer();
            rund_av_enkeltcelle(aktuell_sum, clicked_id);
            flytt_SCUP_sum_hoyre(clicked_id)
        }
        else {
            if (nummer_2 == 1) {UCL_ikke_avrundet[1] = 0;}
            if (nummer_2 == 2) {UEL_ikke_avrundet[1] = 0;}
            if (nummer_2 == 3) {UECL_ikke_avrundet[1] = 0;}
            utenfor_gyldig_input(clicked_id);
            summer();
            flytt_SCUP_sum_venstre(clicked_id)
        }
    }
    else {
        if (nummer_2 == 1) {UCL_ikke_avrundet[1] = 0;}
        if (nummer_2 == 2) {UEL_ikke_avrundet[1] = 0;}
        if (nummer_2 == 3) {UECL_ikke_avrundet[1] = 0;}
        document.getElementById(clicked_id).style.borderColor = "#ced4da";
        summer();
        flytt_SCUP_sum_venstre(clicked_id)
    }
    if ((localStorage.getItem('Klubbnavn') == eksperimentell_profil_e || localStorage.getItem('Klubbnavn') == eksperimentell_profil_n || localStorage.getItem('Klubbnavn') == null || localStorage.getItem('Klubbnavn') == "Choose club" || localStorage.getItem('Klubbnavn') == "Velg klubb") && lagre_endring != "nei") {
        lagre_trykking_input_1()
    }
};
function forlat_input_felt_2(clicked_id, lagre_endring) {
    var nummer = parseInt(clicked_id.substr(1, clicked_id.length));
    var nummer_2 = parseInt(clicked_id.substr(1, clicked_id.length));
    var input_felt_verdi = document.getElementById(clicked_id).value;
    var innenfor_1_8 = (input_felt_verdi >= 0) && (input_felt_verdi <= 8);
    if (clicked_id == 'i6' || clicked_id == 'i9') {
        innenfor_1_8 = (input_felt_verdi >= 0) && (input_felt_verdi <= 6);
    }
    document.getElementById(clicked_id + "_").innerText = "";
    document.getElementById(clicked_id).style.borderColor = "";
    document.getElementById(clicked_id).style.backgroundColor = "";
    document.getElementById(clicked_id).style.color = "";
    document.getElementById(clicked_id).className = "form-control ikke_placeholder";
    if (nummer >= 4 && nummer <= 6 && document.getElementById(clicked_id).value != "") {
        let hjelp = (parseInt(document.getElementById("i" + (nummer_2 + 3)).value)) || 0;
        let hjelp_ikke_avrundet = (document.getElementById("i" + (nummer_2 + 3)).value) || 0;
        let sammen_innenfor_1_8 = (parseInt(input_felt_verdi) + hjelp >= 0 && ((parseInt(input_felt_verdi)) + hjelp <= 8));
        if (nummer == 6) {
            sammen_innenfor_1_8 = (parseInt(input_felt_verdi) + hjelp >= 0 && ((parseInt(input_felt_verdi)) + hjelp <= 6));
        }
        if (hjelp < 0) {
            hjelp = 0
        }
        else if (hjelp > 8 && nummer != 6) {
            hjelp = 8
        }
        else if (hjelp > 6 && nummer == 6) {
            hjelp = 6
        }
        if (((sammen_innenfor_1_8 || hjelp_ikke_avrundet < 0) && innenfor_1_8 && input_felt_verdi % 1 == 0) || (hjelp_ikke_avrundet % 1 != 0 && innenfor_1_8 && input_felt_verdi % 1 == 0)) {
            var aktuell_sum = (input_felt_verdi * input_summer[nummer_2 - 1][aarstall-3]);
            document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            summer();
            rund_av_enkeltcelle(aktuell_sum, clicked_id);
            flytt_SCUP_sum_hoyre(clicked_id)
        }
        else if ((input_felt_verdi > 6 || input_felt_verdi < 0 || input_felt_verdi % 1 != 0) && nummer == 6) {
            utenfor_gyldig_input(clicked_id);
            summer();
            flytt_SCUP_sum_venstre(clicked_id)
        }
        else if ((input_felt_verdi > 8 || input_felt_verdi < 0 || input_felt_verdi % 1 != 0) && nummer != 6) {
            utenfor_gyldig_input(clicked_id);
            summer();
            flytt_SCUP_sum_venstre(clicked_id)
        }
        else {
            utenfor_gyldig_input(clicked_id);
            utenfor_gyldig_input("i" + (nummer_2 + 3));
            summer();
            flytt_SCUP_sum_venstre(clicked_id)
        }
    }
    else if (nummer >= 7 && nummer <= 9 && document.getElementById(clicked_id).value != ""){
        let hjelp = (parseInt(document.getElementById("i" + (nummer_2 - 3)).value)) || 0;
        let hjelp_ikke_avrundet = (document.getElementById("i" + (nummer_2 - 3)).value) || 0;
        let sammen_innenfor_1_8 = (parseInt(input_felt_verdi) + hjelp >= 0 && ((parseInt(input_felt_verdi)) + hjelp <= 8));
        if (nummer == 9) {
            sammen_innenfor_1_8 = (parseInt(input_felt_verdi) + hjelp >= 0 && ((parseInt(input_felt_verdi)) + hjelp <= 6));
        }
        if (hjelp < 0) {
            hjelp = 0
        }
        else if (hjelp > 8 && nummer != 9) {
            hjelp = 8
        }
        else if (hjelp > 6 && nummer == 9) {
            hjelp = 6
        }
        if (((sammen_innenfor_1_8 || hjelp_ikke_avrundet < 0) && innenfor_1_8 && input_felt_verdi % 1 == 0) || (hjelp_ikke_avrundet % 1 != 0 && innenfor_1_8 && input_felt_verdi % 1 == 0)) {
            var aktuell_sum = (input_felt_verdi * input_summer[nummer_2 - 1][aarstall-3]);
            document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            summer();
            rund_av_enkeltcelle(aktuell_sum, clicked_id); 
            flytt_SCUP_sum_hoyre(clicked_id)
        }
        else if ((input_felt_verdi > 6 || input_felt_verdi < 0 || input_felt_verdi % 1 != 0) && nummer == 9) {
            utenfor_gyldig_input(clicked_id);
            summer();
            flytt_SCUP_sum_venstre(clicked_id)
        }
        else if ((input_felt_verdi > 8 || input_felt_verdi < 0 || input_felt_verdi % 1 != 0) && nummer != 9) {
            utenfor_gyldig_input(clicked_id);
            summer();
            flytt_SCUP_sum_venstre(clicked_id)
        }
        else {
            utenfor_gyldig_input(clicked_id);
            utenfor_gyldig_input("i" + (nummer_2 - 3));
            summer();
            flytt_SCUP_sum_venstre(clicked_id)
        }
    }
    else {
        document.getElementById(clicked_id).style.borderColor = "#ced4da";
        summer();
        flytt_SCUP_sum_venstre(clicked_id)
    }
    if ((localStorage.getItem('Klubbnavn') == eksperimentell_profil_e || localStorage.getItem('Klubbnavn') == eksperimentell_profil_n || localStorage.getItem('Klubbnavn') == null || localStorage.getItem('Klubbnavn') == "Choose club" || localStorage.getItem('Klubbnavn') == "Velg klubb") && lagre_endring != "nei") {
        lagre_trykking_input_2()
    }
};
function forlat_input_felt_3(clicked_id, lagre_endring) {
    var nummer_2 = parseInt(clicked_id.substr(1, clicked_id.length));
    document.getElementById(clicked_id + "_").innerText = "";
    document.getElementById(clicked_id).style.borderColor = "";
    document.getElementById(clicked_id).style.backgroundColor = "";
    document.getElementById(clicked_id).style.color = "";
    document.getElementById(clicked_id).className = "form-control ikke_placeholder";
    var totalt_antall_uavgjorte_kamper = document.getElementById(clicked_id).value;
    if (document.getElementById(clicked_id).value != "") {
        var antall_uavgjorte_kamper = (parseInt(document.getElementById("i" + (nummer_2 - 3)).value) || 0);
        if ((totalt_antall_uavgjorte_kamper >= (antall_uavgjorte_kamper)) && ((nummer_2 != 12 && ((totalt_antall_uavgjorte_kamper <= (144 - (8 - (antall_uavgjorte_kamper)) || 144)))) || (nummer_2 == 12 && ((totalt_antall_uavgjorte_kamper <= (108 - (6 - (antall_uavgjorte_kamper)) || 108))))) && totalt_antall_uavgjorte_kamper % 1 == 0) {
            var totale_ufordelte_ressurser = (totalt_antall_uavgjorte_kamper * input_summer[nummer_2 - 4][aarstall-3]);
            var totalt_antall_kamper_med_vinner = (144 - document.getElementById(clicked_id).value);
            if (nummer_2 == 12) {
                totalt_antall_kamper_med_vinner = (108 - document.getElementById(clicked_id).value);
            }
            var antall_seiere = (document.getElementById("i" + (nummer_2 - 6)).value) || 0;
            var aktuell_sum = ((antall_seiere/totalt_antall_kamper_med_vinner)*totale_ufordelte_ressurser);
            let antall_seiere_er_desimal = (document.getElementById("i" + (nummer_2 - 6)).value % 1 == 0) || 0;
            if (antall_seiere_er_desimal && aktuell_sum >= 0) {
                document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                if (nummer_2 == 10) {UCL_ikke_avrundet[2] = aktuell_sum;}
                if (nummer_2 == 11) {UEL_ikke_avrundet[2] = aktuell_sum;}
                if (nummer_2 == 12) {UECL_ikke_avrundet[2] = aktuell_sum;}
                summer();
                rund_av_enkeltcelle(aktuell_sum, clicked_id);
                flytt_SCUP_sum_hoyre(clicked_id)
            }
        }
        else {
            if (nummer_2 == 10) {UCL_ikke_avrundet[2] = 0;}
            if (nummer_2 == 11) {UEL_ikke_avrundet[2] = 0;}
            if (nummer_2 == 12) {UECL_ikke_avrundet[2] = 0;}
            utenfor_gyldig_input(clicked_id);
            summer();
            flytt_SCUP_sum_venstre(clicked_id)
        }
    }
    else {
        if (nummer_2 == 10) {UCL_ikke_avrundet[2] = 0;}
        if (nummer_2 == 11) {UEL_ikke_avrundet[2] = 0;}
        if (nummer_2 == 12) {UECL_ikke_avrundet[2] = 0;}
        document.getElementById(clicked_id).style.borderColor = "#ced4da";
        summer();
        flytt_SCUP_sum_venstre(clicked_id)
    }
    if ((localStorage.getItem('Klubbnavn') == eksperimentell_profil_e || localStorage.getItem('Klubbnavn') == eksperimentell_profil_n || localStorage.getItem('Klubbnavn') == null || localStorage.getItem('Klubbnavn') == "Choose club" || localStorage.getItem('Klubbnavn') == "Velg klubb") && lagre_endring != "nei") {
        lagre_trykking_input_3()
    }
};
function forlat_input_felt_4(clicked_id, lagre_endring) {
    var nummer_2 = parseInt(clicked_id.substr(1, clicked_id.length));
    var tabellplassering = (document.getElementById(clicked_id).value);
    try {
        document.getElementById(clicked_id + "_").innerText = "";
    }
    catch {
        null;
    }
    document.getElementById(clicked_id).style.borderColor = "";
    document.getElementById(clicked_id).style.backgroundColor = "";
    document.getElementById(clicked_id).style.color = "";
    document.getElementById(clicked_id).className = "form-control ikke_placeholder";
    if (document.getElementById(clicked_id).value != "") {
        if ((tabellplassering >= 1) && (tabellplassering <= 4) && tabellplassering % 1 == 0) {
            if (tabellplassering == 1) {
                var aktuell_sum = input_summer[nummer_2 - 1][aarstall-3];
                if ((clicked_id == 'i14') || (clicked_id == 'i15')) {
                    document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                }
                if ((document.getElementById('i14').value != 3) && (document.getElementById('i15').value != 2)) {
                    document.getElementById('i15__').innerText = "";
                }
                if ((document.getElementById('i14').value != 2) && (document.getElementById('i13').value != 3)) {
                    document.getElementById('i14__').innerText = "";
                }
                if ((clicked_id == 'i14') || (clicked_id == 'i15')) {
                    summer();
                    rund_av_enkeltcelle(aktuell_sum, clicked_id);
                    flytt_SCUP_sum_hoyre(clicked_id)
                }
            }
            else if (tabellplassering == 2) {
                aktuell_sum = input_summer[nummer_2 + 1][aarstall-3];
                if ((document.getElementById('i14').value != 3) && (document.getElementById('i15').value != 2)) {
                    document.getElementById('i15__').innerText = "";
                }
                if ((document.getElementById('i14').value != 2) && (document.getElementById('i13').value != 3)) {
                    document.getElementById('i14__').innerText = "";
                }
                if ((clicked_id == 'i14') || (clicked_id == 'i15')) {
                    document.getElementById(clicked_id + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    spilt_uslagsrunde_PO = input_summer[nummer_2 + 3][aarstall-3];
                    document.getElementById(clicked_id + "__").innerText = "€ " + spilt_uslagsrunde_PO.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                }
                if ((clicked_id == 'i14') || (clicked_id == 'i15')) {
                    summer();
                    rund_av_enkeltcelle(aktuell_sum, clicked_id);
                    clicked_id = ("i" + (nummer_2) + "_");
                    rund_av_enkeltcelle_2(spilt_uslagsrunde_PO, clicked_id);
                    flytt_SCUP_sum_hoyre(clicked_id)
                }
            }
            else if (tabellplassering == 3) {
                if (clicked_id != 'i15') {
                    spilt_uslagsrunde_PO = input_summer[nummer_2 + 4][aarstall-3];
                }
                if ((clicked_id == 'i14') || (clicked_id == 'i15')) {
                    document.getElementById((clicked_id) + "_").innerText = "";
                }
                // if ((clicked_id == 'i14') && (document.getElementById('i13').value != 3))  {
                //     document.getElementById('i14__').innerText = "";
                // }
                // if ((document.getElementById('i14').value != 3) && (document.getElementById('i15').value != 2)) {
                //     document.getElementById('i15__').innerText = "";
                // }
                // if ((clicked_id == 'i13') || (clicked_id == 'i14')) {
                //     document.getElementById('i' + (nummer_2 + 1) + "__").innerText = "€ " + spilt_uslagsrunde_PO.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                // }
                summer();
                if ((clicked_id == 'i13') || (clicked_id == 'i14')) {
                    // rund_av_enkeltcelle_3(spilt_uslagsrunde_PO, nummer_2);
                    flytt_SCUP_sum_hoyre(clicked_id)
                }
            }
            else {
                if ((document.getElementById('i14').value != 3) && (document.getElementById('i15').value != 2)) {
                    document.getElementById('i15__').innerText = "";
                }
                if ((document.getElementById('i14').value != 2) && (document.getElementById('i13').value != 3)) {
                    document.getElementById('i14__').innerText = "";
                }
                summer();
                flytt_SCUP_sum_hoyre(clicked_id)
            }
        }
        else {
            if ((document.getElementById('i14').value != 2) && (document.getElementById('i13').value != 3)) {
                document.getElementById('i14__').innerText = "";
            }
            if ((document.getElementById('i14').value != 3) && (document.getElementById('i15').value != 2)) {
                document.getElementById('i15__').innerText = "";
            }
            utenfor_gyldig_input(clicked_id);
            summer();
            flytt_SCUP_sum_venstre(clicked_id)
        }
    }
    else {
        if ((document.getElementById('i14').value != 2) && (document.getElementById('i13').value != 3)) {
            document.getElementById('i14__').innerText = "";
        }
        if ((document.getElementById('i14').value != 3) && (document.getElementById('i15').value != 2)) {
            document.getElementById('i15__').innerText = "";
        }
        document.getElementById(clicked_id).style.borderColor = "#ced4da";
        summer();
        flytt_SCUP_sum_venstre(clicked_id)
    }
    if ((localStorage.getItem('Klubbnavn') == eksperimentell_profil_e || localStorage.getItem('Klubbnavn') == eksperimentell_profil_n || localStorage.getItem('Klubbnavn') == null || localStorage.getItem('Klubbnavn') == "Choose club" || localStorage.getItem('Klubbnavn') == "Velg klubb") && lagre_endring != "nei") {
        lagre_trykking_input_4()
    }
};
function utenfor_gyldig_input(clicked_id) {
    document.getElementById(clicked_id).style.backgroundColor = 'red';
    document.getElementById(clicked_id).style.borderColor = 'red';
    document.getElementById(clicked_id).style.color = 'white';
    document.getElementById(clicked_id).className = "form-control placeholder";
    if ((clicked_id == 'i14') || (clicked_id == 'i15')) {
        document.getElementById(clicked_id + "_").innerText = "";
    }
};


function gjennomfør_1_gang_per_knapp(clicked_id) {
    forlat_input_felt_2(clicked_id);
    var id_nummer = parseInt(clicked_id.substr(1, clicked_id.length));
    if (id_nummer <= 6) {
        forlat_input_felt_2("i" + (id_nummer + 3));
        forlat_input_felt_3("i" + (id_nummer + 6));
    }
    if (id_nummer >= 7) {
        forlat_input_felt_2("i" + (id_nummer - 3));
        forlat_input_felt_3("i" + (id_nummer + 3));
    }
}

function summer() {
    var UCL_antall_summer = parseInt(UCL_inntjening_celler.length);
    var UEL_antall_summer = parseInt(UEL_inntjening_celler.length);
    var UECL_antall_summer = parseInt(UECL_inntjening_celler.length);
    var seriemester_antall_summer = parseInt(seriemester_inntjening_celler.length);
    var UCL_total_sum = 0;
    var UEL_total_sum = 0;
    var UECL_total_sum = 0;
    var seriemester_total_sum = 0;
    for (x=0;x<UCL_antall_summer;x++) {
        var UCL_enkeltsum = ((document.getElementById(UCL_inntjening_celler[x]).innerText).substr(2, (document.getElementById(UCL_inntjening_celler[x]).innerText).length));
        UCL_total_sum += parseFloat(UCL_enkeltsum.split(' ').join('')) || 0;
    }
    for (x=0;x<UEL_antall_summer;x++) {
        var UEL_enkeltsum = ((document.getElementById(UEL_inntjening_celler[x]).innerText).substr(2, (document.getElementById(UEL_inntjening_celler[x]).innerText).length));
        UEL_total_sum += parseFloat(UEL_enkeltsum.split(' ').join('')) || 0;
    }
    for (x=0;x<UECL_antall_summer;x++) {
        var UECL_enkeltsum = ((document.getElementById(UECL_inntjening_celler[x]).innerText).substr(2, (document.getElementById(UECL_inntjening_celler[x]).innerText).length));
        UECL_total_sum += parseFloat(UECL_enkeltsum.split(' ').join('')) || 0;
    }
    for (x=0;x<seriemester_antall_summer;x++) {
        var UECL_enkeltsum = ((document.getElementById(seriemester_inntjening_celler[x]).innerText).substr(2, (document.getElementById(seriemester_inntjening_celler[x]).innerText).length));
        seriemester_total_sum += parseFloat(UECL_enkeltsum.split(' ').join('')) || 0;
    }

    var UCL_faktisk_total_sum = parseFloat(UCL_total_sum) + UCL_ikke_avrundet[0] + UCL_ikke_avrundet[1] + UCL_ikke_avrundet[2];
    var UEL_faktisk_total_sum = parseFloat(UEL_total_sum) + UEL_ikke_avrundet[0] + UEL_ikke_avrundet[1] + UEL_ikke_avrundet[2];
    var UECL_faktisk_total_sum = parseFloat(UECL_total_sum) + UECL_ikke_avrundet[0] + UECL_ikke_avrundet[1] + UECL_ikke_avrundet[2];
    var total_sum = (UCL_faktisk_total_sum + UEL_faktisk_total_sum + UECL_faktisk_total_sum + seriemester_total_sum);

    var avrundet_UCL_total = Number((UCL_faktisk_total_sum).toFixed(0));
    document.getElementById("UCL_inntjening").innerText = "€ " + (avrundet_UCL_total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    var avrundet_UEL_total = Number((UEL_faktisk_total_sum).toFixed(0));
    document.getElementById("UEL_inntjening").innerText = "€ " + (avrundet_UEL_total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    var avrundet_UECL_total = Number((UECL_faktisk_total_sum).toFixed(0));
    document.getElementById("UECL_inntjening").innerText = "€ " + (avrundet_UECL_total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    var avrundet_total = Number((total_sum).toFixed(0));
    document.getElementById("total_inntjening").innerText = "€ " + (avrundet_total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

function rund_av_enkeltcelle(aktuell_sum, clicked_id) {
    var avrundet = Number((aktuell_sum).toFixed(0));
    document.getElementById(clicked_id + "_").innerText = "€ " + avrundet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

function rund_av_enkeltcelle_2(spilt_uslagsrunde_PO, clicked_id) {
    var avrundet_2 = Number((spilt_uslagsrunde_PO).toFixed(0));
    document.getElementById(clicked_id + "_").innerText = "€ " + avrundet_2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
function rund_av_enkeltcelle_3(spilt_uslagsrunde_PO, nummer_2) {
    var avrundet_2 = Number((spilt_uslagsrunde_PO || 0).toFixed(0));
    document.getElementById('i' + (nummer_2 + 1) + "__").innerText = "€ " + avrundet_2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};


function videre_fordeling(clicked_id) {
    paa_av(clicked_id);
    if(localStorage.getItem('Klubbnavn')){
    }else{
        lagre_trykking();
    }
    if ((localStorage.getItem('Klubbnavn') == eksperimentell_profil_e) || (localStorage.getItem('Klubbnavn') == eksperimentell_profil_n) || (localStorage.getItem('Klubbnavn') == "") || localStorage.getItem('Klubbnavn') == "Choose club" || localStorage.getItem('Klubbnavn') == "Velg klubb") {
        lagre_trykking();
    }
}

function lagre_trykking() {
    var lagrede_verdier = [];
    if (document.getElementById('CL-PO')) {
        lagrede_verdier.push('CLPO');
    }
    if (document.getElementById('uel-Q1')) {
        lagrede_verdier.push('uelQ1');
    }
    if (document.getElementById('uel-Q2')) {
        lagrede_verdier.push('uelQ2');
    }
    for (var l=0;l<37;l++) {
        if (document.getElementById('b-' + (l + 1))) {
            lagrede_verdier.push('b' + (l + 1));
        }
    }
    let Klubbnavn = (localStorage.getItem('Klubbnavn'))
    if (Klubbnavn == "Calculate from scratch" || Klubbnavn == "Kalkuler fra bunnen" || Klubbnavn == "Velg klubb" || Klubbnavn == "Choose club") {
        if (((document.getElementById('dropDownMeny').innerHTML).includes('Calculate from scratch')) || ((document.getElementById('dropDownMeny').innerHTML).includes('Kalkuler fra bunnen')) || ((document.getElementById('dropDownMeny').innerHTML).includes('Velg klubb')) || ((document.getElementById('dropDownMeny').innerHTML).includes('Choose club'))) {
            localStorage.setItem('Hallo_post_24', lagrede_verdier);
        }
    }
};
function lagre_trykking_input_1() {
    var lagrede_verdier_input_id_1 = [];
    var lagrede_verdier_input_1 = [];
    for (var f=0;f<3;f++) {
        lagrede_verdier_input_id_1.push('i' + (f + 1));
        var verdi = document.getElementById('i' + (f + 1)).value;
        lagrede_verdier_input_1.push(verdi);
    }
    localStorage.setItem('Hallo_input_id_1_post_24', lagrede_verdier_input_id_1);
    localStorage.setItem('Hallo_input_verdi_1_post_24', lagrede_verdier_input_1);
};
function lagre_trykking_input_2() {
    var lagrede_verdier_input_id_2 = [];
    var lagrede_verdier_input_2 = [];
    for (var f=3;f<9;f++) {
        lagrede_verdier_input_id_2.push('i' + (f + 1));
        var verdi = document.getElementById('i' + (f + 1)).value;
        lagrede_verdier_input_2.push(verdi);
    }
    localStorage.setItem('Hallo_input_id_2_post_24', lagrede_verdier_input_id_2);
    localStorage.setItem('Hallo_input_verdi_2_post_24', lagrede_verdier_input_2);
};
function lagre_trykking_input_3() {
    var lagrede_verdier_input_id_3 = [];
    var lagrede_verdier_input_3 = [];
    for (var y=9;y<12;y++) {
        lagrede_verdier_input_id_3.push('i' + (y + 1));
        var verdi = document.getElementById('i' + (y + 1)).value;
        lagrede_verdier_input_3.push(verdi);
    }
    localStorage.setItem('Hallo_input_id_3_post_24', lagrede_verdier_input_id_3);
    localStorage.setItem('Hallo_input_verdi_3_post_24', lagrede_verdier_input_3);
};
function lagre_trykking_input_4() {
    var lagrede_verdier_input_id_4 = [];
    var lagrede_verdier_input_4 = [];
    for (var z=12;z<15;z++) {
        lagrede_verdier_input_id_4.push('i' + (z + 1));
        var verdi = document.getElementById('i' + (z + 1)).value;
        lagrede_verdier_input_4.push(verdi);
    }
    localStorage.setItem('Hallo_input_id_4_post_24', lagrede_verdier_input_id_4);
    localStorage.setItem('Hallo_input_verdi_4_post_24', lagrede_verdier_input_4);
};

function slett(slett_lagring) {
    for (var c=0;c<37;c++) {
        if (document.getElementById('b-' + (c + 1))) {
            paa_av('b-' + (c + 1));
        }
    }
    const fjerne_knapper = ['CL-PO', 'uel-Q1', 'uel-Q2'];
    for (let i=0;i<fjerne_knapper.length;i++) {
        if (document.getElementById(fjerne_knapper[i])) {
            paa_av(fjerne_knapper[i]);
        }
    }
    for (var ce=0;ce<3;ce++) {
        document.getElementById('i' + (ce + 1)).value = "";
        forlat_input_felt_1('i' + (ce + 1), slett_lagring);
    }
    for (var ce=3;ce<9;ce++) {
        document.getElementById('i' + (ce + 1)).value = "";
        forlat_input_felt_2('i' + (ce + 1), slett_lagring);
    }
    for (var ce=9;ce<12;ce++) {
        document.getElementById('i' + (ce + 1)).value = "";
        forlat_input_felt_3('i' + (ce + 1), slett_lagring);
    }
    for (var ce=12;ce<15;ce++) {
        document.getElementById('i' + (ce + 1)).value = "";
        forlat_input_felt_4('i' + (ce + 1), slett_lagring);
    }
    if (slett_lagring != "nei" && (localStorage.getItem('Klubbnavn') == eksperimentell_profil_e || localStorage.getItem('Klubbnavn') == eksperimentell_profil_n || localStorage.getItem('Klubbnavn') == "Choose club" || localStorage.getItem('Klubbnavn') == "Velg klubb")) {
        localStorage.setItem('Hallo_post_24', null);
        localStorage.setItem('Hallo_input_id_1_post_24', "");
        localStorage.setItem('Hallo_input_verdi_1_post_24', "");
        localStorage.setItem('Hallo_input_id_2_post_24', "");
        localStorage.setItem('Hallo_input_verdi_2_post_24', "");
        localStorage.setItem('Hallo_input_id_3_post_24', "");
        localStorage.setItem('Hallo_input_verdi_3_post_24', "");
        localStorage.setItem('Hallo_input_id_4_post_24', "");
        localStorage.setItem('Hallo_input_verdi_4_post_24', "");
    }
};

function oppdater_ved_refresh_1() {
    let siste_ord_linktekst = JSON.stringify(document.getElementById("klubb_link").innerHTML.split(" ").splice(-1)).replace(',','').replace('[','').replace(']','').replace('"','').replace('"','').replace('"',' ');
    if (siste_ord_linktekst == "points") {
        siste_ord_linktekst = "coefficient points"
    }
    var Klubbnavn = localStorage.getItem('Klubbnavn') || "Choose club";
    if (Klubbnavn.slice(-1) == "s" || Klubbnavn.slice(-1) == "z" || Klubbnavn.slice(-1) == "x") {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "’ " + siste_ord_linktekst;
    }
    else {
        document.getElementById("klubb_link").innerHTML = Klubbnavn + "’s " + siste_ord_linktekst;
    }
    if (Klubbnavn == "Choose club" || Klubbnavn == eksperimentell_profil_e) {
        document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_e;
    }
    else if (Klubbnavn == "Velg klubb" || Klubbnavn == eksperimentell_profil_n) {
        document.getElementById("klubb_link").innerHTML = din_klubbs_premi_koef_n;
    }
    let land = ""
    let klubbnavn_url = Klubbnavn.replace(/\s/g, '')
    if (Klubbnavn == "Velg klubb" || Klubbnavn == "Choose club") {
        klubbnavn_url = "logo"
        land = "standard"
    } else {
        for (i = 0; i < menyvalg.length; i++) {
            if (menyvalg[i][0] == Klubbnavn) {
                land = menyvalg[i][1]
                break
            }
        }
        if (klubbnavn_url.includes('/')) {
            klubbnavn_url = klubbnavn_url.replace('/','')
        }
    }
    if (Klubbnavn != "Calculate from scratch" && Klubbnavn != "Kalkuler fra bunnen") {
        document.getElementById("dropDownMeny").innerHTML = '<img class="klubb_logo_kalkulatorer_knapp" loading="lazy" data-sizes="auto" src="media/klubblogo/fallback.png"' + 
        `data-srcset="
        media/klubblogo/` + land + "/" + klubbnavn_url + `1.png 18w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `2.png 32w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `3.png 36w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `4.png 50w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `5.png 64w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `6.png 70w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `7.png 100w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `8.png 140w"
        data-fallback="media/klubblogo/fallback.png" sizes="19px" srcset="
        media/klubblogo/` + land + "/" + klubbnavn_url + `1.png 18w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `2.png 32w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `3.png 36w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `4.png 50w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `5.png 64w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `6.png 70w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `7.png 100w,
        media/klubblogo/` + land + "/" + klubbnavn_url + `8.png 140w">` + Klubbnavn + "<div class='opp_ned_pil'>&#10094</div>";
    }
    else {
        document.getElementById("dropDownMeny").innerHTML = Klubbnavn + "<div class='opp_ned_pil'>&#10094</div>";
    }
    if (Klubbnavn == eksperimentell_profil_e || Klubbnavn == eksperimentell_profil_n || Klubbnavn == null || Klubbnavn == "Choose club" || Klubbnavn == "Velg klubb") {
        const motak = localStorage.getItem('Hallo_post_24');
        const motak_2 = localStorage.getItem('Hallo_input_id_1_post_24');
        const motak_3 = localStorage.getItem('Hallo_input_verdi_1_post_24');
        const motak_4 = localStorage.getItem('Hallo_input_id_2_post_24');
        const motak_5 = localStorage.getItem('Hallo_input_verdi_2_post_24');
        const motak_6 = localStorage.getItem('Hallo_input_id_3_post_24');
        const motak_7 = localStorage.getItem('Hallo_input_verdi_3_post_24');
        const motak_8 = localStorage.getItem('Hallo_input_id_4_post_24');
        const motak_9 = localStorage.getItem('Hallo_input_verdi_4_post_24');
        // let profildata = '["FOTBALLKLUBB",            "' + motak + '",  "' + motak_3 + '",  "' + motak_5 + '",  "' + motak_9 + '"],';
        // alert(profildata)
        oppdater_ved_refresh_2(motak,motak_2,motak_3,motak_4,motak_5,motak_6,motak_7,motak_8,motak_9);
    }
    else {
        for(var i=0;i<menyvalg.length;i++){
            if(menyvalg[i][0] == Klubbnavn){
                let p = 1 *antall_MV_elem*(localStorage.getItem('sessong')) + 2;
                const motak = menyvalg[i][p];
                if (motak) {
                    if (!motak.includes('CLPO') && document.getElementById("CL-PO")) {
                        paa_av('CL-PO')
                    }
                }
                let turnering = 'ingen';
                if (motak) {
                    if (motak.includes("b18")) {turnering = 0;}
                    else if (motak.includes("b19")) {turnering = 1;}
                    else if (motak.includes("b20")) {turnering = 2;}
                }
                const motak_2 = "i1,i2,i3";
                const motak_3 = menyvalg[i][p+1];
                const motak_4 = "i4,i5,i6,i7,i8,i9";
                const motak_5 = menyvalg[i][p+2];
                const motak_6 = "i10,i11,i12";
                let motak_7 = ",,";
                try {
                    if (turnering != 'ingen') {
                        motak_7 = (totale_uavgjorte_kamper[aarstall][turnering]);
                    }
                } catch {}
                const motak_8 = "i13,i14,i15";
                const motak_9 = menyvalg[i][p+3];
                oppdater_ved_refresh_2(motak,motak_2,motak_3,motak_4,motak_5,motak_6,motak_7,motak_8,motak_9);
            }
        }
    }
    if (document.getElementById('b-19')) {
        document.getElementById('b10_').innerText = '';
    }
};

function oppdater_ved_refresh_2(motak,motak_2,motak_3,motak_4,motak_5,motak_6,motak_7,motak_8,motak_9) {
    try {
        if (parseInt(localStorage.getItem('sessong'))) {
            aarstall = parseInt(localStorage.getItem('sessong'));
        }
        else {
            null;
        }
        if (aarstall < 3) {
            location.href = '/prize-money-calculator.html';
        }
        if (aarstall == 3) {
            document.getElementById('sessong_kontroller_1').disabled = false;
            document.getElementById('sessong_kontroller_2').disabled = true;
        }
        oppdater_sessong(aarstall)
    }
    finally {
        null;
    }
    try {
        try {
            var oppdelt_motak = motak.split(',');
            if (oppdelt_motak != 0) {
                for (var u=0;u<oppdelt_motak.length;u++) {
                    paa_av(oppdelt_motak[u]);
                }
            }
        }
        finally {
            var input_id_1 = motak_2.split(',');
            var input_verdi_1 = motak_3.split(',');
            if (input_id_1 != 0) {
                for (var r=0;r<input_id_1.length;r++) {
                    document.getElementById('i' + (r + 1)).value = input_verdi_1[r];
                    forlat_input_felt_1(input_id_1[r]);
                }
            }
        }
    }
    finally {
        try {
            var input_id_2 = motak_4.split(',');
            var input_verdi_2 = motak_5.split(',');
            for (var ha=0;ha<input_id_2.length;ha++) {
                document.getElementById('i' + (ha + 4)).value = input_verdi_2[ha];
                forlat_input_felt_2('i4');
                forlat_input_felt_2('i5');
                forlat_input_felt_2('i6');
                forlat_input_felt_2(input_id_2[ha]);
            }
        }
        finally {
            try {
                var input_id_3 = motak_6.split(',');
                var input_verdi_3 = motak_7.split(',');
                if (input_id_3 != 0) {
                    for (var he=0;he<input_id_3.length;he++) {
                        document.getElementById('i' + (he + 10)).value = input_verdi_3[he];
                        forlat_input_felt_3(input_id_3[he]);
                    }
                }
            }
            finally {
                try {
                    var input_id_4 = motak_8.split(',');
                    var input_verdi_4 = motak_9.split(',');
                    if (input_id_4 != 0) {
                        for (var ho=0;ho<input_id_4.length;ho++) {
                            document.getElementById('i' + (ho + 13)).value = input_verdi_4[ho];
                            forlat_input_felt_4(input_id_4[ho]);
                        }
                    }
                }
                finally {
                    return;
                }
            }
        }
    }
};

function endre_sessong(clicked_id) {
    if (clicked_id == 'sessong_kontroller_1') {
        aarstall -= 1;
    }
    else {
        aarstall += 1;
    }
    if (aarstall < 3) {
        location.href = '/prize-money-calculator.html';
    }
    localStorage.setItem('sessong', aarstall);
    slett("nei")
    oppdater_ved_refresh_1()
    oppdater_sessong(aarstall)
};

function oppdater_sessong(aarstall) {
    document.getElementById("sessong_id").innerText = (parseInt(aarstall) + 21) + '/' + (parseInt(aarstall) + 22);
    if (aarstall == 0) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/0269-125fde34ba54-30a4c9aeea13-1000/20210520_circular_2021_35_en.pdf');
    }
    if (aarstall >= 1) {
        document.getElementById('uefa_distribution_link').setAttribute('href', 'https://editorial.uefa.com/resources/0277-158b0bea495a-ba6c18158cd3-1000/20220704_circular_2022_47_en.pdf');
    }
    for (var uu=0;uu<37;uu++) {
        if (document.getElementById("b-" + (uu + 1))) {
            var aktuell_sum = (knapp_summer[uu][aarstall-3]);
            document.getElementById("b" + (uu + 1) + "_").innerText = "€ " + aktuell_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
    }
    for (var uy=0;uy<37;uy++) {
        if (uy == 12) {
            null;
        }
        else {
            if (document.getElementById("b-" + (uy + 1))) {
                var aktuell_sum = (knapp_summer[uy][aarstall-3]);
                var avrundet = Number((aktuell_sum).toFixed(0));
                document.getElementById('b' + (uy + 1) + '_').innerText = "€ " + avrundet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }      
        }
    }
    if (document.getElementById('b-10')) {
        paa_av('b-10')
        paa_av('b10')
    }
    if ((document.getElementById("b-13")) || (document.getElementById("b-16")) || (document.getElementById("b-18")) || (document.getElementById("b-19"))) {
        document.getElementById('b3_').innerText = "";
        document.getElementById('b6_').innerText = "";
        document.getElementById('b9_').innerText = "";
        document.getElementById('b13_').innerText = "";
        if (document.getElementById("b-19")) {
            document.getElementById('b14_').innerText = "";
        }
    }
    if ((document.getElementById("b-9")) || (document.getElementById("b-13")) || (document.getElementById("b-14")) || (document.getElementById("b-18")) || (document.getElementById("b-19")) || (document.getElementById("b-20"))) {
        document.getElementById('b1_').innerText = "";
    }
    if (aarstall == null) {
        aarstall = 0;
    }
    document.getElementById('i10').placeholder = totale_uavgjorte_kamper[aarstall][0].replace(/,/g,'');
    document.getElementById('i11').placeholder = totale_uavgjorte_kamper[aarstall][1].replace(/,/g,'');
    document.getElementById('i12').placeholder = totale_uavgjorte_kamper[aarstall][2].replace(/,/g,'');
    for (var rt=0;rt<3;rt++) {
        forlat_input_felt_1('i' + (rt + 1));
    }
    for (var ra=3;ra<9;ra++) {
        gjennomfør_1_gang_per_knapp('i' + (ra + 1));
    }
    for (var re=9;re<12;re++) {
        forlat_input_felt_3('i' + (re + 1));
    }
    for (var ry=12;ry<15;ry++) {
        forlat_input_felt_4('i' + (ry + 1));
    }
    if (document.getElementById('CL-PO')) {
        document.getElementById("b1_").innerText = "";
        document.getElementById("b3_").innerText = "";
        document.getElementById("b6_").innerText = "";
        document.getElementById("b9_").innerText = "";
    }
    summer();
};

/*Dropdown meny start*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleMeny() {
    if (document.getElementById("myDropdown").classList.contains("show")) {
        document.getElementById("myDropdown").classList.remove("show")
        nedoverpil()
    }
    else {
        document.getElementById("myDropdown").classList.add("show")
        document.getElementById("myInput").focus()
        document.getElementById("myInput").select()
        oppoverpil()
    }
}

function nedoverpil() {
    if (document.getElementsByClassName("opp_ned_pil")[0].innerText = '❯') {
        document.getElementsByClassName("opp_ned_pil")[0].innerText = '❮'
    }
}

function oppoverpil() {
    document.getElementsByClassName("opp_ned_pil")[0].innerText = '❯'
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown_elementer");
    a = div.getElementsByTagName("button");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].innerText || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } 
        else {
            a[i].style.display = "none";
        }
    }
}

function fjernSøkeord() {
    document.getElementById("myInput").value = "";
    document.getElementById("myInput").focus()
    filterFunction()
}

/* Lukker menyen om musepeker klikker utenfor boksen */
const $menu = $('.dropdown');

$(document).mouseup(e => {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        document.getElementById("myDropdown").classList.remove("show")
        nedoverpil()
    }
});

/* Lager knappene i menyen */
for (i = 0; i < menyvalg.length; i++) {
    let btn = document.createElement("button");
    let klubbnavn_url = menyvalg[i][0].replace(/\s/g, '')
    if (klubbnavn_url.includes('/')) {
      klubbnavn_url = klubbnavn_url.replace('/','')
    }
    btn.innerHTML = '<img class="klubb_logo_kalkulatorer" loading="lazy" data-sizes="auto" src="media/klubblogo/fallback.png"' + 
    `data-srcset="
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `1.png 18w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `2.png 32w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `3.png 36w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `4.png 50w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `5.png 64w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `6.png 70w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `7.png 100w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `8.png 140w"
    data-fallback="media/klubblogo/fallback.png" sizes="19px" srcset="
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `1.png 18w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `2.png 32w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `3.png 36w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `4.png 50w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `5.png 64w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `6.png 70w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `7.png 100w,
    media/klubblogo/` + menyvalg[i][1] + "/" + klubbnavn_url + `8.png 140w">` + menyvalg[i][0];
    btn.className = "meny_element"
    btn.setAttribute("onClick", "endreMenyTittel(innerText)");
    document.getElementById("dropdown_elementer").appendChild(btn);
}

function endreMenyTittel(Klubbnavn) {
    // document.getElementById("dropDownMeny").innerHTML = Klubbnavn + "<div class='opp_ned_pil'>&#10094</div>";
    toggleMeny();
    localStorage.setItem('Klubbnavn', Klubbnavn);
    slett("nei")
    oppdater_ved_refresh_1()
}
/* Dropdown meny slutt */


function endre_sort_kolonne() {
    localStorage.setItem('kolonne', 'prize_money')
    localStorage.setItem('rekkefølge', 'desc')
    localStorage.setItem('kolonne2', 'prize_money_total')
    localStorage.setItem('rekkefølge2', 'desc')
    localStorage.setItem('filter_land', JSON.stringify([]))
    localStorage.setItem('spoiler', 'synlig')
}


function endre_ti_års_periode() {
    aarstall = parseInt(aarstall)
    const tomt_array = [];
    localStorage.setItem('filter_land', JSON.stringify(tomt_array))
    localStorage.setItem('dropdownmeny_valg_ti_års', (11 + aarstall) + '/' + (12 + aarstall) + ' - ' + (20 + aarstall) + '/' + (21 + aarstall))
}