(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();

let sortering_land = [];

// const penger = [
//   [260000,                        260000],
//   [100000,                        100000],
//   [5000000,                       5000000],
//   [150000,                        150000],
//   [350000,                        350000],
//   [550000,                        550000],
//   [750000,                        750000],
//   [[15640000, 3630000, 2940000], [18600000, 3630000, 2940000]],
//   [[2800000, 630000, 500000],    [2100000, 630000, 500000]],
//   [[930000, 210000, 166000],     [700000, 210000, 166000]],
//   [[1137000, 132000, 44500],     [278000, 132000, 44500]],
//   [[[,,500000], [1100000, 1050000, 300000], [650000, 625000]], [[1000000,1000000],[650000,500000],[550000,300000]]],
//   [9600000,   11000000],
//   [1200000,   1200000],
//   [600000,    600000],
//   [10600000,  12500000],
//   [1800000,   1800000],
//   [1000000,   1000000],
//   [12500000,  15000000],
//   [2800000,   2800000],
//   [2000000,   2000000],
//   [15500000,  18500000],
//   [4600000,   4600000],
//   [3000000,   3000000],
//   [4500000,   6500000],
//   [4000000,   4000000],
//   [2000000,   2000000],
//   [3500000,   4000000],
//   [1000000,   1000000],
// 	[[],                           [1112000, 312000, 212000]],
// ]

let antall_MV_elem = 6;
let filter_land = []
let filter_land_før = JSON.parse(localStorage.getItem('filter_land')) || [];
if (filter_land_før == '') {
  localStorage.setItem('filter_land', JSON.stringify([]))
  filter_land_før = [];
}

let innerHTML = ''
let trykte_knapper = JSON.parse(sessionStorage.getItem('trykte_knapper')) || [];
let trykte_knapper_exclude = JSON.parse(sessionStorage.getItem('trykte_knapper_exclude')) || [];
const knapp_filter_turneringer = ['ucl_knapp', 'uel_knapp', 'uecl_knapp']


var aarstall = parseInt(((localStorage.getItem('sessong'))) || nåværende_sesong_forside[0] - 21);
if (aarstall == 'NaN' || (!aarstall && aarstall != 0)) {
  aarstall = nåværende_sesong_forside[0] - 21;
}
localStorage.setItem('sessong', aarstall);

function endre_sessong(clicked_id) {
  let filter_land_før = JSON.parse(localStorage.getItem('filter_land')) || [];
  if (clicked_id == 'sessong_kontroller_1') {
    aarstall -= 1;
  }
  else {
    aarstall += 1;
  }
  if (aarstall == 0) {
    document.getElementById('sessong_kontroller_1').disabled = true;
    document.getElementById('sessong_kontroller_2').disabled = false;
  }
  else if (aarstall == 4) {
    document.getElementById('sessong_kontroller_1').disabled = false;
    document.getElementById('sessong_kontroller_2').disabled = true;
  }
  else {
    document.getElementById('sessong_kontroller_1').disabled = false;
    document.getElementById('sessong_kontroller_2').disabled = false;
  }
  localStorage.setItem('sessong', aarstall);
  oppdater_sessong(aarstall)
  sorter_etter_sesong()
  generer_lands_knapper()
	if (aarstall >= 3) {
		if (document.getElementById("b18").innerText == "Group stage") {
			document.getElementById("b18").innerText = "League phase";
		}
		else if (document.getElementById("b18").innerText == "Gruppespill") {
			document.getElementById("b18").innerText = "Ligaspill";
		}
	} else if (aarstall <= 2) {
		if (document.getElementById("b18").innerText == "League phase") {
			document.getElementById("b18").innerText = "Group stage";
		}
		else if (document.getElementById("b18").innerText == "Ligaspill") {
			document.getElementById("b18").innerText = "Gruppespill";
		}
	}
  for (i = 0; i < filter_land_før.length; i++) {
    document.getElementById(filter_land_før[i]).style.backgroundColor = 'rgb(196, 217, 255)';
    document.getElementById(filter_land_før[i]).style.border = '1px solid rgb(164, 164, 164)';
  }
  localStorage.setItem('filter_land', JSON.stringify(filter_land_før))
  if (sessionStorage.getItem('spoiler') == 'skjult') {
    $('#tabell_overordnet td').hide()
  }
};


if (aarstall == 0) {
  document.getElementById('sessong_kontroller_1').disabled = true;
  document.getElementById('sessong_kontroller_2').disabled = false;
}
else if (aarstall == 4) {
  document.getElementById('sessong_kontroller_1').disabled = false;
  document.getElementById('sessong_kontroller_2').disabled = true;
}
else {
  document.getElementById('sessong_kontroller_1').disabled = false;
  document.getElementById('sessong_kontroller_2').disabled = false;
}
oppdater_sessong(aarstall)
function oppdater_sessong(aarstall) {
  document.getElementById("sessong_id").innerText = (2000+aarstall + 21) + '/' + (aarstall + 22);
}


let opp_ned_pil = '<span class="høyrestill"><img src="media/opp_ned_pil.svg" alt="Sorting arrows"></span>'
let opp_ned_pil_klubb = '<img src="media/opp_ned_pil.svg" alt="Sorting arrows">'

$('th').on('click', function(){
	if (!$(event.target).hasClass('tooltip-content') && !$(event.target).hasClass('linkContribution')) {
		var column = $(this).data('column')
		var order = $(this).data('order')
		if (order == sessionStorage.getItem('rekkefølge') && order == 'desc') {
			order = 'asc'
		}
		if (order == sessionStorage.getItem('rekkefølge') && order == 'asc') {
			order = 'desc'
		}
		if (column == 'club') {
			var tekst = '<span id="klubb_navn">' + document.getElementById(column).innerText + '</span>'
		}
		if (column == 'prize_money') {
			var tekst = '<span id="premiepenger_navn">' + document.getElementById(column).innerText + '</span>'
		}
		if (column == 'ass_coeff') {
			var tekst = '<span id="ass_koeff_navn">' + document.getElementById(column).innerText + '</span>'
		}
		if (column == 'bidrag') {
			if (document.getElementById(column).innerText[0] == "C") {
				var tekst = '<span id="bidrag_navn">' + '<div class="tooltip-container"><u>Contribution</u><span class="tooltip-content tolltipContribution">More data <a class="linkContribution" href="/country-coefficients#clubs">here</a></span></div>' + '</span>'
			} else {
				var tekst = '<span id="bidrag_navn">' + '<div class="tooltip-container"><u>Bidrag</u><span class="tooltip-content tolltipContributionNorsk">Mer data <a class="linkContribution" href="/country-coefficients#clubs">her</a></span></div>' + '</span>'
			}
		}
		if (column == 'club_coeff') {
			if (document.getElementById(column).innerText[0] == "C") {
				var tekst = '<span id="klubb_koeff_navn">' + '<div class="tooltip-container"><u>Club points</u><span class="tooltip-content tolltipClubPoints">More data<br><a class="linkContribution" href="/club-coefficients">here</a></span></div>' + '</span>'
			} else {
				var tekst = '<span id="klubb_koeff_navn">' + '<div class="tooltip-container"><u>Klubbpoeng</u><span class="tooltip-content tolltipClubPointsNorsk">Mer data<br><a class="linkContribution" href="/club-coefficients">her</a></span></div>' + '</span>'
			}
		}
		if (column == 'prize_money_total') {
			var tekst = '<span id="premiepenger_land_navn">' + document.getElementById(column).innerText + '</span>'
		}
		if (column == 'ass_coeff_total') {
			var tekst = '<span id="ass_koeff_land_navn">' + document.getElementById(column).innerText + '</span>'
		}
		if (column == 'ass_coeff_ø') {
			if (document.getElementById(column).innerText[0] == "C") {
				var tekst = '<span id="bidrag_land_navn">' + '<div class="tooltip-container"><u>Contribution</u><span class="tooltip-content tolltipContribution">More data <a class="linkContribution" href="/country-coefficients">here</a></span></div>' + '</span>'
			} else {
				var tekst = '<span id="bidrag_land_navn">' + '<div class="tooltip-container"><u>Bidrag</u><span class="tooltip-content tolltipContributionNorsk">Mer data <a class="linkContribution" href="/country-coefficients">her</a></span></div>' + '</span>'
			}
		}
		if (column == 'club_coeff_total') {
			var tekst = '<span id="klubb_koeff_land_navn">' + document.getElementById(column).innerText + '</span>'
		}
		if(order == 'desc') {
			$(this).data('order', "asc")
		}
		else {
			$(this).data('order', "desc")
		}
		let menyvalg_edit = JSON.parse(sessionStorage.getItem('menyvalg_edit'))
		if (column == 'club' || column == 'prize_money' || column == 'ass_coeff' || column == 'bidrag' || column == 'club_coeff') {
			sorter(column, order, tekst, menyvalg_edit)
			if (column == 'prize_money') {
				column = 'prize_money_total'
				tekst = '<span id="premiepenger_land_navn">' + document.getElementById(column).innerText + '</span>'
				sorter_land_total(column, order, tekst, menyvalg_edit)
			}
			if (column == 'ass_coeff') {
				column = 'ass_coeff_total'
				tekst = '<span id="ass_koeff_land_navn">' + document.getElementById(column).innerText + '</span>'
				sorter_land_total(column, order, tekst, menyvalg_edit)
			}
			if (column == 'bidrag') {
				column = 'ass_coeff_ø'
				if (document.getElementById(column).innerText[0] == "C") {
					tekst = '<span id="bidrag_land_navn">' + '<div class="tooltip-container"><u>Contribution</u><span class="tooltip-content tolltipContribution">More data <a class="linkContribution" href="/country-coefficients">here</a></span></div>' + '</span>'
				} else {
					tekst = '<span id="bidrag_land_navn">' + '<div class="tooltip-container"><u>Bidrag</u><span class="tooltip-content tolltipContributionNorsk">Mer data <a class="linkContribution" href="/country-coefficients">her</a></span></div>' + '</span>'
				}
				sorter_land_total(column, order, tekst, menyvalg_edit)
			}
			if (column == 'club_coeff') {
				column = 'club_coeff_total'
				if (document.getElementById(column).innerText[0] == "C") {
					tekst = '<span id="klubb_koeff_land_navn">' + '<div class="tooltip-container"><u>Club points</u><span class="tooltip-content tolltipClubPoints">More data<br><a class="linkContribution" href="/club-coefficients">here</a></span></div>' + '</span>'
				} else {
					tekst = '<span id="klubb_koeff_land_navn">' + '<div class="tooltip-container"><u>Klubbpoeng</u><span class="tooltip-content tolltipClubPointsNorsk">Mer data<br><a class="linkContribution" href="/club-coefficients">her</a></span></div>' + '</span>'
				}
				sorter_land_total(column, order, tekst, menyvalg_edit)
			}
		}
		else {
			sorter_land_total(column, order, tekst, menyvalg_edit)
			if (column == 'prize_money_total') {
				column = 'prize_money'
				tekst = '<span id="premiepenger_navn">' + document.getElementById(column).innerText + '</span>'
				sorter(column, order, tekst, menyvalg_edit)
			}
			if (column == 'ass_coeff_total') {
				column = 'ass_coeff'
				tekst = '<span id="ass_koeff_navn">' + document.getElementById(column).innerText + '</span>'
				sorter(column, order, tekst, menyvalg_edit)
			}
			if (column == 'ass_coeff_ø') {
				column = 'bidrag'
				if (document.getElementById(column).innerText[0] == "C") {
					tekst = '<span id="bidrag_navn">' + '<div class="tooltip-container"><u>Contribution</u><span class="tooltip-content tolltipContribution">More data <a class="linkContribution" href="/country-coefficients#clubs">here</a></span></div>' + '</span>'
				} else {
					tekst = '<span id="bidrag_navn">' + '<div class="tooltip-container"><u>Bidrag</u><span class="tooltip-content tolltipContributionNorsk">Mer data <a class="linkContribution" href="/country-coefficients#clubs">her</a></span></div>' + '</span>'
				}
				sorter(column, order, tekst, menyvalg_edit)
			}
			if (column == 'club_coeff_total') {
				column = 'club_coeff'
				var tekst = '<span id="klubb_koeff_navn">' + document.getElementById(column).innerText + '</span>'
				sorter(column, order, tekst, menyvalg_edit)
			}
		}
		if (sessionStorage.getItem('spoiler') == 'skjult') {
			$('#tabell_overordnet td').hide()
			document.getElementById('spoiler').classList.add('rod_knapp')
			document.getElementById('spoiler').innerHTML = '<div class="spoiler_pil">&#10094</div>'
		}
		// document.getElementById('spoiler').innerHTML = '<img class="jordklode" src="media/red-circle.svg" alt="Country">'
	}
})


function sorter_etter_sesong() {
  menyvalg_edit = menyvalg.slice(0);
  const ucl_knapper = ['b2', 'b3', 'b6', 'b9', 'b13', 'CLPO', 'b16', 'b18'];
  const uel_knapper = ['uelQ1', 'uelQ2', 'b10', 'b14', 'b19'];
  const uecl_knapper = ['b4', 'b7', 'b11', 'b15', 'b20'];
  const scup_knapper = ['b36'];
  for (var i = 0; i < menyvalg_edit.length; i++) {
    let containsAll = false;
    if (menyvalg_edit[i][2 + (aarstall*antall_MV_elem)] == null) {
    }
    else {
      let klubb_knapp = [""];
      if (menyvalg_edit[i][2 + (aarstall*antall_MV_elem)]) {
        klubb_knapp = menyvalg_edit[i][2 + (aarstall*antall_MV_elem)].split(',');
      }
      let gruppeplassering = [""];
      if (menyvalg_edit[i][5 + (aarstall*antall_MV_elem)]) {
        gruppeplassering = menyvalg_edit[i][5 + (aarstall*antall_MV_elem)].split(',');
      }
      if (trykte_knapper.includes(knapp_filter_turneringer[0]) || trykte_knapper.includes(knapp_filter_turneringer[1]) || trykte_knapper.includes(knapp_filter_turneringer[2])) {
        if (trykte_knapper.includes(knapp_filter_turneringer[0])) {
          for (u = 0; u < ucl_knapper.length; u++) {
            if (klubb_knapp.includes(ucl_knapper[u])){
              containsAll = true;
              break
            }
          }
        }
        if (trykte_knapper.includes(knapp_filter_turneringer[1])) {
          for (u = 0; u < uel_knapper.length; u++) {
            if (klubb_knapp.includes(uel_knapper[u])){
              containsAll = true;
              break
            }
          }
          if (gruppeplassering[0] == 3 || gruppeplassering[1] == 2) {
            containsAll = true;
          }
        }
        if (trykte_knapper.includes(knapp_filter_turneringer[2])) {
          for (u = 0; u < uecl_knapper.length; u++) {
            if (klubb_knapp.includes(uecl_knapper[u])){
              containsAll = true;
              break
            }
          }
          if (gruppeplassering[1] == 3 || gruppeplassering[2] == 2) {
            containsAll = true;
          }
        }
      }
      else {
        containsAll = true;
      }
      /* --------------------------------------------------------- */
      const ucl_knapper_riktig = ['b2', 'b3', 'b6', 'b9', 'b13', 'CLPO', 'b16', 'b18', 'b21', 'b24', 'b27', 'b30', 'b33'];
      const uel_knapper_riktig = ['', 'uelQ1', 'uelQ2', 'b10', '', 'b14', 'b16', 'b19', 'b22', 'b25', 'b28', 'b31', 'b34'];
      const uecl_knapper_riktig = ['','b4', 'b7', 'b11', '', 'b15', 'b17', 'b20', 'b23', 'b26', 'b29', 'b32', 'b35'];
      if (containsAll) {
        // if (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2])) {
        // }
        // else {
          if (trykte_knapper.includes(knapp_filter_turneringer[0]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2]))) {
            for (j = 0; j < ucl_knapper_riktig.length; j++) {
              if (containsAll) {
                if (klubb_knapp.includes('b13') && trykte_knapper.includes('b9') && ((ucl_knapper_riktig[j] == 'b9') || (ucl_knapper_riktig[j] == 'b13'))) {
                }
                else if (trykte_knapper.includes(ucl_knapper_riktig[j])) {
                  if (klubb_knapp.includes(ucl_knapper_riktig[j])) {
                  }
                  else {
                    containsAll = false;
                  }
                }
                if (trykte_knapper.includes('i13')) {
                  if (gruppeplassering[0] <= 24 && gruppeplassering[0] >= 9 && aarstall >= 3) {}
                  else {
                    containsAll = false;
                  }
                }
              }
            }
          }
          else {
            containsAll = false
          }
          if (!containsAll && (trykte_knapper.includes(knapp_filter_turneringer[1]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2])))) {
            containsAll = true
            if (trykte_knapper.includes(knapp_filter_turneringer[1]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2]))) {
              for (j = 0; j < ucl_knapper_riktig.length; j++) {
                if (containsAll) {
                  if (trykte_knapper.includes(ucl_knapper_riktig[j])) {
                    if (ucl_knapper_riktig[j] == 'b16') {
                      if (klubb_knapp.includes('b14') && klubb_knapp.includes('b20')) {
                      }
                      else {
                        containsAll = false;
                      }
                    }
                    else if (klubb_knapp.includes(uel_knapper_riktig[j]) && uel_knapper_riktig[j]) {
                    }
                    else {
                      containsAll = false;
                    }
                  }
                  if (trykte_knapper.includes('i13')) {
                    if (((gruppeplassering[0] == 3 || gruppeplassering[1] == 2) && aarstall <= 2) || (gruppeplassering[1] <= 24 && gruppeplassering[1] >= 9 && aarstall >= 3)) {}
                    else {
                      containsAll = false;
                    }
                  }
                }
              }
            }
          }
          if (!containsAll && (trykte_knapper.includes(knapp_filter_turneringer[2]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2])))) {
            containsAll = true
            if (trykte_knapper.includes(knapp_filter_turneringer[2]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2]))) {
              for (j = 0; j < ucl_knapper_riktig.length; j++) {
                if (containsAll) {
                  if (trykte_knapper.includes(ucl_knapper_riktig[j])) {
                    if (klubb_knapp.includes(uecl_knapper_riktig[j]) && uecl_knapper_riktig[j]) {
                    }
                    else {
                      containsAll = false;
                    }
                  }
                  if (trykte_knapper.includes('i13')) {
                    if (((gruppeplassering[1] == 3 || gruppeplassering[2] == 2) && aarstall <= 2) || (gruppeplassering[2] <= 24 && gruppeplassering[2] >= 9 && aarstall >= 3)) {}
                    else {
                      containsAll = false;
                    }
                  }
                }
              }
            }
          }
          const knapper_generelle = ['b1', 'b5', 'b8', 'b12', 'b36', 'b37'];
          for (j = 0; j < knapper_generelle.length; j++) {
            if (trykte_knapper.includes(knapper_generelle[j])) {
              if (klubb_knapp.includes(knapper_generelle[j])) {}
              else {
                containsAll = false;
              }
            }
          }
          if (containsAll && (trykte_knapper.includes(knapp_filter_turneringer[0]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2])))) {
            containsAll = true
            if (trykte_knapper.includes(knapp_filter_turneringer[0]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2]))) {
              for (j = 0; j < ucl_knapper_riktig.length; j++) {
                if (containsAll) {
                  if (trykte_knapper_exclude.includes(ucl_knapper_riktig[j])) {
                    if (klubb_knapp.includes(ucl_knapper_riktig[j])) {
                      containsAll = false;
                    }
                  }
                  if (klubb_knapp.includes('b13') && trykte_knapper_exclude.includes('b9')) {
                    containsAll = false;
                  }
                  if (trykte_knapper_exclude.includes('i13')) {
                    if (gruppeplassering[0] <= 24 && gruppeplassering[0] >= 9 && aarstall >= 3) {
                      containsAll = false;
                    }
                  }
                }
              }
            }
          }
          if (containsAll && (trykte_knapper.includes(knapp_filter_turneringer[1]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2])))) {
            containsAll = true
            const uel_knapper_riktig = ['', '', '', 'b10', '', 'b14', 'b16', 'b19', 'b22', 'b25', 'b28', 'b31', 'b34'];
            if (trykte_knapper.includes(knapp_filter_turneringer[1]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2]))) {
              for (j = 0; j < ucl_knapper_riktig.length; j++) {
                if (containsAll) {
                  if (trykte_knapper_exclude.includes(ucl_knapper_riktig[j])) {
                    if (ucl_knapper_riktig[j] == 'b16') {
                      if (trykte_knapper_exclude.includes('b14') && klubb_knapp.includes('b20')) {
                        containsAll = false;
                      }
                    }
                    else if (klubb_knapp.includes(uel_knapper_riktig[j]) && uel_knapper_riktig[j]) {
                      containsAll = false;
                    }
                  }
                  if (trykte_knapper_exclude.includes('i13')) {
                    if (((gruppeplassering[0] == 3 || gruppeplassering[1] == 2) && aarstall <= 2) || (gruppeplassering[1] <= 24 && gruppeplassering[1] >= 9 && aarstall >= 3)) {
                      containsAll = false;
                    }
                  }
                }
              }
            }
          }
          if (containsAll && (trykte_knapper.includes(knapp_filter_turneringer[2]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2])))) {
            containsAll = true
            const uecl_knapper_riktig = ['','b4', 'b7', 'b11', '', 'b15', 'b17', 'b20', 'b23', 'b26', 'b29', 'b32', 'b35'];
            if (trykte_knapper.includes(knapp_filter_turneringer[2]) || (!trykte_knapper.includes(knapp_filter_turneringer[0]) && (!trykte_knapper.includes(knapp_filter_turneringer[1])) && !trykte_knapper.includes(knapp_filter_turneringer[2]))) {
              for (j = 0; j < ucl_knapper_riktig.length; j++) {
                if (containsAll) {
                  if (trykte_knapper_exclude.includes(ucl_knapper_riktig[j])) {
                    if (klubb_knapp.includes(uecl_knapper_riktig[j])) {
                      containsAll = false;
                    }
                  }
                  if (trykte_knapper_exclude.includes('i13')) {
                    if (((gruppeplassering[1] == 3 || gruppeplassering[2] == 2) && aarstall <= 2) || (gruppeplassering[2] <= 24 && gruppeplassering[2] >= 9 && aarstall >= 3)) {
                      containsAll = false;
                    }
                  }
                }
              }
            }
          }
          for (j = 0; j < knapper_generelle.length; j++) {
            if (trykte_knapper_exclude.includes(knapper_generelle[j])) {
              if (klubb_knapp.includes(knapper_generelle[j])) {
                containsAll = false;
              }
            }
          }
        // }
      }
    }
    let filter_land = JSON.parse(localStorage.getItem('filter_land')) || [];
    if ((filter_land.includes(menyvalg_edit[i][1]) || filter_land == '') && containsAll) {
      var Ny = Object.assign([], menyvalg_edit[i]);
      menyvalg_edit[i] = [];
      let Ny1 = Ny.slice(0,1)
      let Ny2 = Ny.slice(2 + (aarstall*antall_MV_elem),3 + (aarstall*antall_MV_elem))
      let Ny3 = Ny.slice(3 + (aarstall*antall_MV_elem),4 + (aarstall*antall_MV_elem))
      let Ny4 = Ny.slice(4 + (aarstall*antall_MV_elem),5 + (aarstall*antall_MV_elem))
      let Ny5 = Ny.slice(5 + (aarstall*antall_MV_elem),6 + (aarstall*antall_MV_elem))
      let Ny6 = Ny.slice(6 + (aarstall*antall_MV_elem),7 + (aarstall*antall_MV_elem))
      let Ny7 = [regnUtPremiepenger([Ny2[0], Ny3[0], Ny4[0], Ny5[0], Ny6[0]], aarstall, Ny1[0])].concat(Ny[7 + (aarstall*antall_MV_elem)].slice(0,6));
      Ny7 = (Ny7[0] || 0) + (Ny7[1] || 0) + (Ny7[2] || 0) + (Ny7[3] || 0) + (Ny7[4] || 0) + (Ny7[5] || 0) + (Ny7[6] || 0);
			let Ny8 = regnUtAssosKoeff([Ny2[0], Ny3[0], Ny4[0], Ny5[0], Ny6[0]], aarstall)
      let Ny9 = regnUtKlubbKoeff([Ny2[0], Ny3[0], Ny4[0], Ny5[0], Ny6[0]], aarstall)
      let Ny10 = Ny.slice(1,2)
      let Ny11 = ''
      Ny1.push(Ny2, Ny3, Ny4, Ny5, Ny6, Ny7, Ny8, Ny9, Ny10, Ny11)
      menyvalg_edit[i] = Ny1;
      let antall_klubber_fra_land = 0
      if (aarstall >= 2) {
        for (p = 0; p < totalt_antall_klubber.length; p++) {
          if (menyvalg_edit[i][9] == landskoeffisienter[p][0]) {
            antall_klubber_fra_land = totalt_antall_klubber[p][aarstall-2];
          }
        }
      }
      else {
        for (let p = 0; p < menyvalg.length; p++) {
          if (menyvalg[p][1] == menyvalg_edit[i][9] && menyvalg[p][(antall_MV_elem * ((aarstall+1)))-4] !== undefined) {
            antall_klubber_fra_land += 1
          }
        }
      }
      menyvalg_edit[i][10] = (menyvalg_edit[i][7]/antall_klubber_fra_land) || 0;

      let live_aarstall = nåværende_sesong_periode_valg[0] - 21
      if (aarstall == live_aarstall) {
        for (p = 0; p < menyvalg.length; p++) {
          if (menyvalg[p][0] == menyvalg_edit[i][0]) {
            let gruppespillsplassering = menyvalg[p][(antall_MV_elem * (aarstall+1))+(5-antall_MV_elem)]
            if (!gruppespillsplassering) {gruppespillsplassering = ","}
            if (((gruppespillsplassering == '4,,' || gruppespillsplassering == ',4,' || gruppespillsplassering == ',,3' || gruppespillsplassering == ',,4') && aarstall <= 2)/* || (gruppespillsplassering.replaceAll(',','') > 24 && aarstall >= 3)*/) {
              menyvalg_edit[i][0] = menyvalg_edit[i][0] + '0/0'
              break
            }
            else {
              antall_knapper = (menyvalg[p][(antall_MV_elem * (aarstall+1))+(2-antall_MV_elem)]).split(',')
              for (s = 0; s < antall_knapper.length; s++) {
                if (antall_knapper[s] == 'b5' || antall_knapper[s] == 'b8' || antall_knapper[s] == 'b12' || antall_knapper[s] == 'b17' || antall_knapper[s] == 'KO') {
                  menyvalg_edit[i][0] = menyvalg_edit[i][0] + '0/0'
                  break
                }
              }
            }
            if (!menyvalg_edit[i][0].includes('0/0')) {
              menyvalg_edit[i][0] = menyvalg_edit[i][0] + '1/1'
            }
          }
        }
      }
    }
    else {
      menyvalg_edit.splice(i, 1)
      i = i - 1
    }
  }
  sessionStorage.setItem('menyvalg_edit', JSON.stringify(menyvalg_edit))
  let column = sessionStorage.getItem('kolonne') || 'prize_money'
  let order = sessionStorage.getItem('rekkefølge') || 'desc'
  if(order == 'desc') {
    document.getElementById(column).dataset.order = 'asc';
  }
  else {
    document.getElementById(column).dataset.order = 'desc';
  }
  if (column == 'club') {
    var tekst = '<span id="klubb_navn">' + document.getElementById(column).innerText + '</span>'
  }
  if (column == 'prize_money') {
    var tekst = '<span id="premiepenger_navn">' + document.getElementById(column).innerText + '</span>'
  }
  if (column == 'ass_coeff') {
    var tekst = '<span id="ass_koeff_navn">' + document.getElementById(column).innerText + '</span>'
  }
  if (column == 'bidrag') {
		if (document.getElementById(column).innerText[0] == "C") {
			var tekst = '<span id="bidrag_navn">' + '<div class="tooltip-container"><u>Contribution</u><span class="tooltip-content tolltipContribution">More data <a class="linkContribution" href="/country-coefficients#clubs">here</a></span></div>' + '</span>'
		} else {
			var tekst = '<span id="bidrag_navn">' + '<div class="tooltip-container"><u>Bidrag</u><span class="tooltip-content tolltipContributionNorsk">Mer data <a class="linkContribution" href="/country-coefficients#clubs">her</a></span></div>' + '</span>'
		}
  }
  if (column == 'club_coeff') {
		if (document.getElementById(column).innerText[0] == "C") {
			var tekst = '<span id="klubb_koeff_navn">' + '<div class="tooltip-container"><u>Club points</u><span class="tooltip-content tolltipClubPoints">More data<br><a class="linkContribution" href="/club-coefficients">here</a></span></div>' + '</span>'
		} else {
			var tekst = '<span id="klubb_koeff_navn">' + '<div class="tooltip-container"><u>Klubbpoeng</u><span class="tooltip-content tolltipClubPointsNorsk">Mer data<br><a class="linkContribution" href="/club-coefficients">her</a></span></div>' + '</span>'
		}
  }
  sorter(column, order, tekst, menyvalg_edit)
  column = sessionStorage.getItem('kolonne2') || 'prize_money_total'
  order = sessionStorage.getItem('rekkefølge2') || 'desc'
  if (column == 'prize_money_total') {
    var tekst = '<span id="premiepenger_land_navn">' + document.getElementById(column).innerText + '</span>'
  }
  if (column == 'ass_coeff_total') {
    var tekst = '<span id="ass_koeff_land_navn">' + document.getElementById(column).innerText + '</span>'
  }
  if (column == 'ass_coeff_ø') {
		if (document.getElementById(column).innerText[0] == "C") {
			var tekst = '<span id="bidrag_land_navn">' + '<div class="tooltip-container"><u>Contribution</u><span class="tooltip-content tolltipContribution">More data <a class="linkContribution" href="/country-coefficients">here</a></span></div>' + '</span>'
		} else {
			var tekst = '<span id="bidrag_land_navn">' + '<div class="tooltip-container"><u>Bidrag</u><span class="tooltip-content tolltipContributionNorsk">Mer data <a class="linkContribution" href="/country-coefficients">her</a></span></div>' + '</span>'
		}
  }
  if (column == 'club_coeff_total') {
    var tekst = '<span id="klubb_koeff_land_navn">' + document.getElementById(column).innerText + '</span>'
  }
  sorter_land_total(column, order, tekst, menyvalg_edit)
}

function sorter(column, order, tekst, menyvalg_edit) {
  if (column == 'club') {
    i = 0
    endre_kolonne_overskrift('prize_money', opp_ned_pil)
    endre_kolonne_overskrift('ass_coeff', opp_ned_pil)
    endre_kolonne_overskrift('bidrag', opp_ned_pil)
    endre_kolonne_overskrift('club_coeff', opp_ned_pil)
  }
  else if (column == 'prize_money') {
    i = 6
    endre_kolonne_overskrift('club', opp_ned_pil_klubb)
    endre_kolonne_overskrift('ass_coeff', opp_ned_pil)
    endre_kolonne_overskrift('bidrag', opp_ned_pil)
    endre_kolonne_overskrift('club_coeff', opp_ned_pil)
  }
  else if (column == 'ass_coeff') {
    i = 7
    endre_kolonne_overskrift('prize_money', opp_ned_pil)
    endre_kolonne_overskrift('club', opp_ned_pil_klubb)
    endre_kolonne_overskrift('bidrag', opp_ned_pil)
    endre_kolonne_overskrift('club_coeff', opp_ned_pil)
  }
  else if (column == 'bidrag') {
    i = 10
    endre_kolonne_overskrift('prize_money', opp_ned_pil)
    endre_kolonne_overskrift('club', opp_ned_pil_klubb)
    endre_kolonne_overskrift('ass_coeff', opp_ned_pil)
    endre_kolonne_overskrift('club_coeff', opp_ned_pil)
  }
  else if (column == 'club_coeff') {
    i = 8
    endre_kolonne_overskrift('prize_money', opp_ned_pil)
    endre_kolonne_overskrift('club', opp_ned_pil_klubb)
    endre_kolonne_overskrift('ass_coeff', opp_ned_pil)
    endre_kolonne_overskrift('bidrag', opp_ned_pil)
  }
  menyvalg_edit.sort(sortFunction_1_klubb);
  if(order == 'desc') {
    if (column == 'club') {
      menyvalg_edit.sort(sortFunction_1);
      tekst += '<img src="media/opp_NEDpil.svg" alt="Sorting arrows">'
    }
    else {
      menyvalg_edit.sort(sortFunction_1_tall);
      tekst += '<span class="høyrestill"><img src="media/opp_NEDpil.svg" alt="Sorting arrows"></span>'
    }
  }
  else {
    if (column == 'club') {
      menyvalg_edit.sort(sortFunction_2);
      tekst += '<img src="media/OPPned_pil.svg" alt="Sorting arrows">'
    }
    else {
      menyvalg_edit.sort(sortFunction_2_tall);
      tekst += '<span class="høyrestill"><img src="media/OPPned_pil.svg" alt="Sorting arrows"></span>'
    }
  }
  sessionStorage.setItem('kolonne', column)
  sessionStorage.setItem('rekkefølge', order)
  document.getElementById(column).innerHTML = tekst;

  if (order == 'desc' || (column != 'bidrag' && column != 'ass_coeff' && column != 'club_coeff')) {
    for (p = 0; p < menyvalg_edit.length; p++) {
      if (menyvalg_edit[p][11]) {
        menyvalg_edit[p][11] = p+1;
      } else {
        menyvalg_edit[p].push(p+1);
      }
    }
  }
  else {
    for (p = 0; p < menyvalg_edit.length; p++) {
      if (menyvalg_edit[p][11]) {
        menyvalg_edit[p][11] = menyvalg_edit.length-p;
      } else {
        menyvalg_edit[p].push(menyvalg_edit.length-p);
      }
    }
  }
  if (column == 'bidrag' || column == 'ass_coeff' || column == 'club_coeff') {
    if (order == 'desc') {
      for (p = 0; p < menyvalg_edit.length; p++) {
        if (p > 0) {
          if (menyvalg_edit[p-1][i] == menyvalg_edit[p][i]) {
            menyvalg_edit[p].splice(11,1,menyvalg_edit[p-1][11])
          }
        }
      }
    }
    else {
      for (p = menyvalg_edit.length - 1; p >= 0; p--) {
        if (p < menyvalg_edit.length - 1) {
          if (menyvalg_edit[p+1][i] == menyvalg_edit[p][i]) {
            menyvalg_edit[p].splice(11,1,menyvalg_edit[p+1][11])
          }
        }
      }
    }
  }

  byggTabell_test(menyvalg_edit)  
}

function byggTabell_test(data) {
  var table = document.getElementById('myTable')
  table.innerHTML = '';
  var helTabellHTML = '';
  for (var i = 0; i < data.length; i++) {
    let klubbnavn = data[i][0]
    if (data[i][0].slice(-3) == '0/0' || data[i][0].slice(-3) == '1/1') {
      klubbnavn = data[i][0].slice(0, -3)
    }
    let klubbnavn_url = klubbnavn.replace(/\s/g, '')
    if (klubbnavn_url.includes('/')) {
      klubbnavn_url = klubbnavn_url.replace('/','')
    }
    // '<img loading="lazy" data-sizes="auto" src="https://img.uefa.com/imgml/TP/teams/logos/clublogo_fallback.svg" data-srcset="media/klubb_logo/real madrid.png 18w, media/klubb_logo/real madrid.png 32w, media/klubb_logo/real madrid.png 36w, media/klubb_logo/real madrid.png 50w, media/klubb_logo/real madrid.png 64w, media/klubb_logo/real madrid.png 70w, media/klubb_logo/real madrid.png 100w, media/klubb_logo/real madrid.png 140w" data-fallback="https://img.uefa.com/imgml/TP/teams/logos/clublogo_fallback.svg" title="FC Bayern München" sizes="32px" srcset="media/klubb_logo/real madrid.png 18w, media/klubb_logo/real madrid.png 32w, media/klubb_logo/real madrid.png 36w, media/klubb_logo/real madrid.png 50w, media/klubb_logo/real madrid.png 64w, media/klubb_logo/real madrid.png 70w, media/klubb_logo/real madrid.png 100w, media/klubb_logo/real madrid.png 140w">'
    if (data[i][0].slice(-3) == '0/0') {
      data[i][0] = '<img class="x_symbol" src="media/x-symbol.svg">'
    }
    else if (data[i][0].slice(-3) == '1/1') {
      data[i][0] = '<img class="check" src="media/check.svg">'
    }
    else {
      data[i][0] = ''
    }
    data[i][0] += '<img class="klubb_logo" loading="lazy" data-sizes="auto" src="media/klubblogo/' + data[i][9] + "/" + klubbnavn_url + '2.png"' + 
      `data-srcset="
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `1.png 18w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `2.png 32w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `3.png 36w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `4.png 50w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `5.png 64w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `6.png 70w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `7.png 100w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `8.png 140w"
      data-fallback="media/klubblogo/fallback.png" sizes="20px" srcset="
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `1.png 13w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `2.png 32w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `3.png 36w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `4.png 50w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `5.png 64w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `6.png 70w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `7.png 100w,
      media/klubblogo/` + data[i][9] + "/" + klubbnavn_url + `8.png 140w">` + klubbnavn
    let premiepenger = "€ " + data[i][6].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    let ass_koeff = (parseFloat(data[i][7]));
		if (ass_koeff % 1 === 0) {
			ass_koeff = ass_koeff.toFixed(1);
		}

    data[i][10] = data[i][10].toFixed(3) || 0;
    if (data[i][10] == '0.000') {data[i][10] = `-` + `&nbsp`}

    let klubb_koeff = (parseFloat(data[i][8]));
		if (klubb_koeff % 1 === 0) {
			klubb_koeff = klubb_koeff.toFixed(1);
		}
    if ((data[i][1] + '').includes("b18")) {
      if ((data[i][4] + '').includes("3") && aarstall <=2) {
        nummer = '<td class="ucl_gs_uel id_nr">' + data[i][11] + '</td>'
      }
      else {
        nummer = '<td class="ucl_gs id_nr">' + data[i][11] + '</td>'
      }
    }
    else if ((data[i][1] + '').includes("b19")) {
      if ((data[i][4] + '').includes("3") && aarstall <= 2) {
        nummer = '<td class="uel_gs_uecl id_nr">' + data[i][11] + '</td>'
      }
      else {
        nummer = '<td class="uel_gs id_nr">' + data[i][11] + '</td>'
      }
    }
    else if ((data[i][1] + '').includes("b20")) {
      nummer = '<td class="uecl_gs id_nr">' + data[i][11] + '</td>'
    }
    else {
      nummer = '<td class="id_nr" >' + data[i][11] + '</td>'
    }
    var rad = `<tr>
                  ${nummer}
                  <td translate="no" class="klubbene"><nobr class="marign_venstre">${data[i][0]}</nobr></td>
                  <td id="tom_kolonne">${klubbnavn}</td>
                  <td class='premie_koeff penger'><span class="premiepenger_span"><a class="tabell_link" href="../prize-money-calculator" onclick="endre_klubbnavn(${i})"><nobr>${premiepenger}</nobr></a></span></td>
                  <td class='premie_koeff'><span class="ass_coeff_span"><a class="tabell_link" href="../coefficient-calculator" onclick="endre_klubbnavn(${i})">${ass_koeff}</a></span></td>
                  <td class='premie_koeff'><span class="club_coeff_span"><a class="tabell_link" href="../coefficient-calculator" onclick="endre_klubbnavn(${i})">${data[i][10]}</a></span></td>
                  <td class='premie_koeff'><span class="club_coeff_span"><a class="tabell_link" href="../coefficient-calculator" onclick="endre_klubbnavn(${i})">${klubb_koeff}</a></span></td>
              </tr>`
    helTabellHTML += rad;
  }
  table.innerHTML = helTabellHTML;
}


function endre_klubbnavn(i) {
  var rows = document.getElementsByTagName("table")[0].rows;
  var last = rows[i + 1];
  var cell = last.cells[1];
  var value = cell.innerText;
  localStorage.setItem('Klubbnavn', value)
}


// Endre meta-beskrivelsene
// var descval = document.getElementById('tabell_hoved').innerText;
// var link = document.createElement('meta');  link.setAttribute('name', 'description');  link.content = descval; document.getElementsByTagName('head')[0].appendChild(link);
// var link = document.createElement('meta');  link.setAttribute('property', 'og:description');  link.content = descval; document.getElementsByTagName('head')[0].appendChild(link);

// var paras = document.getElementsByTagName('meta');
// for (i = 0; i < paras.length; i++) {
//   var test = paras[i].getAttribute('name');
  // var test_2 = paras[i].getAttribute('property');
  // if(test == "description" || test_2 == "og:description") {
  //   paras[i].content = descval;
  // }
// }

function endre_kolonne_overskrift(kolonne, opp_ned_pil) {
  if (document.getElementById(kolonne).innerHTML.replace(document.getElementById(kolonne).innerText, '') != opp_ned_pil) {
    if (kolonne == 'prize_money_total') {
      document.getElementById(kolonne).innerHTML = '<span id="premiepenger_land_navn">' + document.getElementById(kolonne).innerText + '</span>' + opp_ned_pil
    }
    if (kolonne == 'ass_coeff_total') {
      document.getElementById(kolonne).innerHTML = '<span id="ass_koeff_land_navn">' + document.getElementById(kolonne).innerText + '</span>' + opp_ned_pil
    }
    if (kolonne == 'ass_coeff_ø') {
			if (document.getElementById(kolonne).innerText[0] == "C") {
				document.getElementById(kolonne).innerHTML = '<span id="bidrag_land_navn">' + '<div class="tooltip-container"><u>Contribution</u><span class="tooltip-content tolltipContribution">More data <a class="linkContribution" href="/country-coefficients">here</a></span></div>' + '</span>' + opp_ned_pil
			} else {
				document.getElementById(kolonne).innerHTML = '<span id="bidrag_land_navn">' + '<div class="tooltip-container"><u>Bidrag</u><span class="tooltip-content tolltipContributionNorsk">Mer data <a class="linkContribution" href="/country-coefficients">her</a></span></div>' + '</span>' + opp_ned_pil
			}
    }
    if (kolonne == 'club_coeff_total') {
      document.getElementById(kolonne).innerHTML = '<span id="klubb_koeff_land_navn">' + document.getElementById(kolonne).innerText + '</span>' + opp_ned_pil
    }
    if (kolonne == 'prize_money') {
      document.getElementById(kolonne).innerHTML = '<span id="premiepenger_navn">' + document.getElementById(kolonne).innerText + '</span>' + opp_ned_pil
    }
    if (kolonne == 'ass_coeff') {
      document.getElementById(kolonne).innerHTML = '<span id="ass_koeff_navn">' + document.getElementById(kolonne).innerText + '</span>' + opp_ned_pil
    }
    if (kolonne == 'bidrag') {
			if (document.getElementById(kolonne).innerText[0] == "C") {
				document.getElementById(kolonne).innerHTML = '<span id="bidrag_navn">' + '<div class="tooltip-container"><u>Contribution</u><span class="tooltip-content tolltipContribution">More data <a class="linkContribution" href="/country-coefficients#clubs">here</a></span></div>' + '</span>' + opp_ned_pil
			} else {
				document.getElementById(kolonne).innerHTML = '<span id="bidrag_navn">' + '<div class="tooltip-container"><u>Bidrag</u><span class="tooltip-content tolltipContributionNorsk">Mer data <a class="linkContribution" href="/country-coefficients#clubs">her</a></span></div>' + '</span>' + opp_ned_pil
			}
    }
    if (kolonne == 'club_coeff') {
			if (document.getElementById(kolonne).innerText[0] == "C") {
				document.getElementById(kolonne).innerHTML = '<span id="klubb_koeff_navn">' + '<div class="tooltip-container"><u>Club points</u><span class="tooltip-content tolltipClubPoints">More data<br><a class="linkContribution" href="/club-coefficients">here</a></span></div>' + '</span>' + opp_ned_pil
			} else {
				document.getElementById(kolonne).innerHTML = '<span id="klubb_koeff_navn">' + '<div class="tooltip-container"><u>Klubbpoeng</u><span class="tooltip-content tolltipClubPointsNorsk">Mer data<br><a class="linkContribution" href="/club-coefficients">her</a></span></div>' + '</span>' + opp_ned_pil
			}
    }
  }
  if (document.getElementById(kolonne).innerHTML.replace(document.getElementById(kolonne).innerText, '') != opp_ned_pil_klubb) {
    if (kolonne == 'club') {
      document.getElementById(kolonne).innerHTML = '<span id="klubb_navn">' + document.getElementById(kolonne).innerText + '</span>' + opp_ned_pil_klubb
    }
  }
}

function sortFunction_1(a, b) {
  if (a[i].toLowerCase() === b[i].toLowerCase()) {
    return 0;
  }
  else {
    return (a[i].toLowerCase() > b[i].toLowerCase()) ? -1 : 1;
  }
}
function sortFunction_2(a, b) {
  if (a[i].toLowerCase() === b[i].toLowerCase()) {
    return 0;
  }
  else {
    return (a[i].toLowerCase() < b[i].toLowerCase()) ? -1 : 1;
  }
}
function sortFunction_1_tall(a, b) {
  if (a[i] === b[i]) {
    return 0;
  }
  else {
    return (a[i] > b[i]) ? -1 : 1;
  }
}
function sortFunction_2_tall(a, b) {
  if (a[i] === b[i]) {
    return 0;
  }
  else {
    return (a[i] < b[i]) ? -1 : 1;
  }
}


function sortFunction_1_klubb(a, b) {
  if (a[0].toLowerCase() === b[0].toLowerCase()) {
    return 0;
  }
  else {
    return (a[0].toLowerCase() < b[0].toLowerCase()) ? -1 : 1;
  }
}





/*Dropdown meny start*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleMeny() {
  if (document.getElementById("myDropdown").classList.contains("show")) {
    document.getElementById("myDropdown").classList.remove("show")
    nedoverpil()
  }
  else {
    if (document.getElementById("myDropdown").classList.contains("show")) {}
    else {
      document.getElementById("myDropdown").classList.add("show")
      oppoverpil()
    }
  }
}

function nedoverpil() {
  document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML.replace('❯','❮');
}

function oppoverpil() {
  document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML.replace('❮','❯');
}



/* Lukker menyen om musepeker klikker utenfor boksen */
const $menu = $('.dropdown_land');

$(document).mouseup(e => {
  if (!$menu.is(e.target) // if the target of the click isn't the container...
  && $menu.has(e.target).length === 0) // ... nor a descendant of the container
  {
    if(document.getElementById("myDropdown").classList.contains('show')) {
      document.getElementById("myDropdown").classList.remove("show")
      nedoverpil()
    }
  }
});


generer_lands_knapper()
function generer_lands_knapper() {
  var klubbers_assosiasjon = []
  let ranking_array = []
  for (i = 0; i < menyvalg.length; i++) {
    klubbers_assosiasjon.push(menyvalg[i][1])
  }
  let assos_ranking_array = []
  for (i = 0; i < landskoeffisienter.length; i++) {
    let indeks = 0
    let indeks_klubb = []
    assos_ranking_array = []
    do {
      indeks_klubb.push(klubbers_assosiasjon.indexOf(landskoeffisienter[i][0], indeks))
      indeks = klubbers_assosiasjon.indexOf(landskoeffisienter[i][0], indeks) + 1
    }
    while (klubbers_assosiasjon.indexOf(landskoeffisienter[i][0], indeks) != -1)
  
  
    let enkelt_sesong1 = 0
    var koeff_sesong2 = 0;
    var koeff_sesong3 = 0;
    var koeff_sesong4 = 0;
    var koeff_sesong5 = 0;
    let antall_klubber1 = indeks_klubb.length;
    let antall_klubber2 = indeks_klubb.length;
    let antall_klubber3 = indeks_klubb.length;
    let antall_klubber4 = indeks_klubb.length;
    let antall_klubber5 = indeks_klubb.length;
    for (p = 0; p < indeks_klubb.length; p++) {
      if (menyvalg[(indeks_klubb[p])][(antall_MV_elem * ((aarstall + 1)))+2-antall_MV_elem] == undefined) {
        antall_klubber1 -= 1
      } else {
        enkelt_sesong1 += regnUtAssosKoeff(menyvalg[(indeks_klubb[p])].slice(+2-antall_MV_elem + ((aarstall + 1) * antall_MV_elem), 7-antall_MV_elem + ((aarstall + 1) * antall_MV_elem)) , aarstall) || 0;
      }
    }
    enkelt_sesong1 = Math.floor(enkelt_sesong1/antall_klubber1 * 1000) / 1000 || 0
    if (aarstall <= 0) {
      koeff_sesong2 = parseFloat(landskoeffisienter[i][10 + aarstall])
    }else {
      for (p = 0; p < indeks_klubb.length; p++) {
        if (menyvalg[(indeks_klubb[p])][(antall_MV_elem * ((aarstall)))+2-antall_MV_elem] == undefined) {
          antall_klubber2 -= 1
        } else {
          koeff_sesong2 += regnUtAssosKoeff(menyvalg[(indeks_klubb[p])].slice(+2-antall_MV_elem + ((aarstall) * antall_MV_elem), 7-antall_MV_elem + ((aarstall) * antall_MV_elem)) , aarstall - 1) || 0;
        }
      }
      koeff_sesong2 = Math.floor(koeff_sesong2 * 1000/antall_klubber2) / 1000 || 0}
    if (aarstall <= 1) {
      koeff_sesong3 = parseFloat(landskoeffisienter[i][9 + aarstall])
    }else {
      for (p = 0; p < indeks_klubb.length; p++) {
        if (menyvalg[(indeks_klubb[p])][(antall_MV_elem * ((aarstall - 1)))+2-antall_MV_elem] == undefined) {
          antall_klubber3 -= 1
        } else {
          koeff_sesong3 += regnUtAssosKoeff(menyvalg[(indeks_klubb[p])].slice(+2-antall_MV_elem + ((aarstall - 1) * antall_MV_elem), 7-antall_MV_elem + ((aarstall - 1) * antall_MV_elem)) , aarstall - 2) || 0;
        }
      }
      koeff_sesong3 = Math.floor(koeff_sesong3 * 1000/antall_klubber3) / 1000 || 0}
    if (aarstall <= 2) {
      koeff_sesong4 = parseFloat(landskoeffisienter[i][8 + aarstall])
    }else {
      for (p = 0; p < indeks_klubb.length; p++) {
        if (menyvalg[(indeks_klubb[p])][(antall_MV_elem * ((aarstall - 2)))+2-antall_MV_elem] == undefined) {
          antall_klubber4 -= 1
        } else {
          koeff_sesong4 += regnUtAssosKoeff(menyvalg[(indeks_klubb[p])].slice(+2-antall_MV_elem + ((aarstall - 2) * antall_MV_elem), 7-antall_MV_elem + ((aarstall - 2) * antall_MV_elem)) , aarstall - 3) || 0;
        }
      }
      koeff_sesong4 = Math.floor(koeff_sesong4 * 1000/antall_klubber4) / 1000 || 0}
    if (aarstall <= 3) {
      koeff_sesong5 = parseFloat(landskoeffisienter[i][7 + aarstall])
    }else {
      for (p = 0; p < indeks_klubb.length; p++) {
        if (menyvalg[(indeks_klubb[p])][(antall_MV_elem * ((aarstall - 3)))+2-antall_MV_elem] == undefined) {
          antall_klubber5 -= 1
        } else {
          koeff_sesong5 += regnUtAssosKoeff(menyvalg[(indeks_klubb[p])].slice(+2-antall_MV_elem + ((aarstall - 3) * antall_MV_elem), 7-antall_MV_elem + ((aarstall - 3) * antall_MV_elem)) , aarstall - 4) || 0;
        }
      }
      koeff_sesong5 = Math.floor(koeff_sesong5 * 1000/antall_klubber5) / 1000 || 0}
    if (landskoeffisienter[i][0] == 'RUS') {
      if ([1,2].includes(aarstall)) {
        enkelt_sesong1 = 4.333
      }
      if ([2,3].includes(aarstall)) {
        koeff_sesong2 = 4.333
      }
      if ([3,4].includes(aarstall)) {
        koeff_sesong3 = 4.333
      }
      if ([4,5].includes(aarstall)) {
        koeff_sesong4 = 4.333
      }
      if ([5,6].includes(aarstall)) {
        koeff_sesong5 = 4.333
      }
    }
    //Brukes dersom land har internt oppgjør og er garantert koeffisientpoeng.
		// if (['ENG'].includes(landskoeffisienter[i][0])) {
    //   if (aarstall == 2) {enkelt_sesong1 += 0.625}
    //   else if (aarstall == 3) {koeff_sesong2 += 0.625}
    //   else if (aarstall == 4) {koeff_sesong3 += 0.625}
    //   else if (aarstall == 5) {koeff_sesong4 += 0.625}
    //   else if (aarstall == 6) {koeff_sesong5 += 0.625}}
		// if (['ITA'].includes(landskoeffisienter[i][0])) {
		// 	if (aarstall == 2) {enkelt_sesong1 += 0.429}
		// 	else if (aarstall == 3) {koeff_sesong2 += 0.429}
		// 	else if (aarstall == 4) {koeff_sesong3 += 0.429}
		// 	else if (aarstall == 5) {koeff_sesong4 += 0.429}
		// 	else if (aarstall == 6) {koeff_sesong5 += 0.429}}
		// else if (['GRE'].includes(landskoeffisienter[i][0])) {
		// 	if (aarstall == 2) {enkelt_sesong1 += 1.000}
		// 	else if (aarstall == 3) {koeff_sesong2 += 1.000}
		// 	else if (aarstall == 4) {koeff_sesong3 += 1.000}
		// 	else if (aarstall == 5) {koeff_sesong4 += 1.000}
		// 	else if (aarstall == 6) {koeff_sesong5 += 1.000}}
		// Brukes når vi vet antallet UCL-klubber fra land, men hvilke klubber det er snakk om er ukjent.
    if (['AUT','SCO','BEL','POR'].includes(landskoeffisienter[i][0])) {
      if (aarstall == 3) {enkelt_sesong1 = 1.200}
      else if (aarstall == 4) {koeff_sesong2 = 1.200}
      else if (aarstall == 5) {koeff_sesong3 = 1.200}
      else if (aarstall == 6) {koeff_sesong4 = 1.200}
      else if (aarstall == 7) {koeff_sesong5 = 1.200}}
    else if (['NED'].includes(landskoeffisienter[i][0])) {
      if (aarstall == 3) {enkelt_sesong1 = 2.000}
      else if (aarstall == 4) {koeff_sesong2 = 2.000}
      else if (aarstall == 5) {koeff_sesong3 = 2.000}
      else if (aarstall == 6) {koeff_sesong4 = 2.000}
      else if (aarstall == 7) {koeff_sesong5 = 2.000}}
    else if (['FRA'].includes(landskoeffisienter[i][0])) {
      if (aarstall == 3) {enkelt_sesong1 = 2.571}
      else if (aarstall == 4) {koeff_sesong2 = 2.571}
      else if (aarstall == 5) {koeff_sesong3 = 2.571}
      else if (aarstall == 6) {koeff_sesong4 = 2.571}
      else if (aarstall == 7) {koeff_sesong5 = 2.571}}
    else if (['ESP','ENG'].includes(landskoeffisienter[i][0])) {
      if (aarstall == 3) {enkelt_sesong1 = 3.428}
      else if (aarstall == 4) {koeff_sesong2 = 3.428}
      else if (aarstall == 5) {koeff_sesong3 = 3.428}
      else if (aarstall == 6) {koeff_sesong4 = 3.428}
      else if (aarstall == 7) {koeff_sesong5 = 3.428}}
		else if (['ITA','GER'].includes(landskoeffisienter[i][0])) {
			if (aarstall == 3) {enkelt_sesong1 = 3.750}
			else if (aarstall == 4) {koeff_sesong2 = 3.750}
			else if (aarstall == 5) {koeff_sesong3 = 3.750}
			else if (aarstall == 6) {koeff_sesong4 = 3.750}
			else if (aarstall == 7) {koeff_sesong5 = 3.750}}
		// Sesongen etter.
	  if (['CZE','TUR','BEL','POR'].includes(landskoeffisienter[i][0])) {
      if (aarstall == 4) {enkelt_sesong1 = 1.200}
      else if (aarstall == 5) {koeff_sesong2 = 1.200}
      else if (aarstall == 6) {koeff_sesong3 = 1.200}
      else if (aarstall == 7) {koeff_sesong4 = 1.200}
      else if (aarstall == 8) {koeff_sesong5 = 1.200}}
    else if (['NED'].includes(landskoeffisienter[i][0])) {
      if (aarstall == 4) {enkelt_sesong1 = 2.000}
      else if (aarstall == 5) {koeff_sesong2 = 2.000}
      else if (aarstall == 6) {koeff_sesong3 = 2.000}
      else if (aarstall == 7) {koeff_sesong4 = 2.000}
      else if (aarstall == 8) {koeff_sesong5 = 2.000}}
    else if (['FRA'].includes(landskoeffisienter[i][0])) {
      if (aarstall == 4) {enkelt_sesong1 = 2.571}
      else if (aarstall == 5) {koeff_sesong2 = 2.571}
      else if (aarstall == 6) {koeff_sesong3 = 2.571}
      else if (aarstall == 7) {koeff_sesong4 = 2.571}
      else if (aarstall == 8) {koeff_sesong5 = 2.571}}
    else if (['GER','ITA','ESP','ENG'].includes(landskoeffisienter[i][0])) {
      if (aarstall == 4) {enkelt_sesong1 = 3.428}
      else if (aarstall == 5) {koeff_sesong2 = 3.428}
      else if (aarstall == 6) {koeff_sesong3 = 3.428}
      else if (aarstall == 7) {koeff_sesong4 = 3.428}
      else if (aarstall == 8) {koeff_sesong5 = 3.428}}
    assos_ranking_array.push(landskoeffisienter[i][0])
    assos_ranking_array.push((koeff_sesong5 + koeff_sesong4 + koeff_sesong3 + koeff_sesong2 + enkelt_sesong1).toFixed(3))
    assos_ranking_array.push(enkelt_sesong1.toFixed(3))
    assos_ranking_array.push(koeff_sesong2.toFixed(3))
    assos_ranking_array.push(koeff_sesong3.toFixed(3))
    assos_ranking_array.push(koeff_sesong4.toFixed(3))
    assos_ranking_array.push(koeff_sesong5.toFixed(3))
    ranking_array.push(assos_ranking_array)
  }
  for (p = 6; p > 1; p--) {
    ranking_array.sort(sortFunction_tall_1_flere_desimal_nyligste);
  }
  ranking_array.sort(sortFunction_tall_1_flere_desimal);

  sortering_land = [];
  for (i = 0; i < ranking_array.length; i++) {
    sortering_land.push(ranking_array[i][0])
  }
  
  var landskode = []
  for (i = 0; i < ranking_array.length; i++) {
    landskode.push(ranking_array[i][0])
  }
  var flagg_ikon = '';
  /* Lager knappene i menyen */
  document.getElementById("dropdown_elementer").innerHTML = "";
  for (i = 0; i < landskode.length; i++) {
    let btn = document.createElement("button");
    if (landskode[i] == 'NIR') {
      flagg_ikon = '<div class="flagg_div"><img class="flagg" id="NIR_" src="media/UEFA/NIR.svg" alt="NIR"></div>'
    }
    else {
      flagg_ikon = '<div class="flagg_div"><img class="flagg" src="media/UEFA/' + landskode[i] + '.svg" alt="' + landskode[i] + '"></div>'
    }
    btn.id = landskode[i]
    btn.innerHTML = flagg_ikon;
    btn.className = "meny_element"
    btn.setAttribute("onClick", "endreMenyTittel(innerHTML)");
    document.getElementById("dropdown_elementer").appendChild(btn);
  }
  btn = document.createElement("button");
  btn.innerHTML = '<img class="roter" src="media/UEFA/GLOBE2_element.svg" alt="Globe">';
  btn.className = "meny_element ekstra_meny_element"
  btn.setAttribute("onClick", "resett()")
  document.getElementById("dropdown_elementer").appendChild(btn);
}


function sortFunction_tall_1_flere_desimal(a, b) {
  if (parseFloat(a[1]) === parseFloat(b[1])) {
    return 0;
  }
  else {
    return (parseFloat(a[1]) > parseFloat(b[1])) ? -1 : 1;
  }
}
function sortFunction_tall_1_flere_desimal_nyligste(a, b) {
  if (parseFloat(a[p]) === parseFloat(b[p])) {
    return 0;
  }
  else {
    return (parseFloat(a[p]) > parseFloat(b[p])) ? -1 : 1;
  }
}





function endreMenyTittel(innerHTML) {
  let filter_land = JSON.parse(localStorage.getItem('filter_land')) || [];
  if (document.getElementById("dropDownMeny").innerHTML.includes('<img class="jordklode" src="media/UEFA/GLOBE2.svg" alt="Globe">')) {
    document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML.replace('<img class="jordklode" src="media/UEFA/GLOBE2.svg" alt="Globe">','')
  }
  var id = innerHTML.slice(68, 71)
  if (id == 'NIR') {}
  else {id = innerHTML.slice(72, 75)}
  if (filter_land.includes(id)) {
    const index = filter_land.indexOf(id);
    if (index > -1) {
      filter_land.splice(index, 1); // 2nd parameter means remove one item only
    }
    document.getElementById(id).style.backgroundColor = '';
    document.getElementById(id).style.border = '';
    if (filter_land.length == 7) {document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML.replace('...(1)','')}
    if (document.getElementById("dropDownMeny").innerHTML.includes(innerHTML)) {
      if (filter_land.length > 6) {
        if (filter_land[6] == 'NIR') {document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML + '<div class="flagg_div"><img class="flagg" id="NIR_" src="media/UEFA/NIR.svg" alt="NIR"></div>'}
          else {document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML + '<div class="flagg_div"><img class="flagg" src="media/UEFA/' + filter_land[6] + '.svg" alt="' + filter_land[6] + '"></div>'}
      }
      document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML.replace(innerHTML,'')
    }
    if (filter_land.length > 7) {
      document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML.replace(filter_land.length - 6,filter_land.length - 7)
    }
  }
  else {
    filter_land.push(id)
    document.getElementById(id).style.backgroundColor = 'rgb(196, 217, 255)';
    document.getElementById(id).style.border = '1px solid rgb(164, 164, 164)';
    if (filter_land.length == 8) {
      document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML + '<span class="grå_knappetekst">...(1)</span>'}
    else if (filter_land.length > 8) {document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML.replace(filter_land.length - 8, filter_land.length - 7)}
    else {
      document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML + innerHTML
    }
  }
  if (filter_land.length == 0) {
    document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML + '<img class="jordklode" src="media/UEFA/GLOBE2.svg" alt="Globe">'
  }
  localStorage.setItem('filter_land', JSON.stringify(filter_land))
  sorter_etter_sesong()
  if (sessionStorage.getItem('spoiler') == 'skjult') {
    $('#tabell_overordnet td').hide()
  }
}
/* Dropdown meny slutt */

function resett() {
  document.getElementById('dropDownMeny').innerHTML = '<img class="jordklode" src="media/UEFA/GLOBE2.svg" alt="Globe"><div class="opp_ned_pil">&#10095</div>'
  let filter_land = JSON.parse(localStorage.getItem('filter_land')) || [];
  for (p = 0; p < filter_land.length; p++) {
    document.getElementById(filter_land[p]).style.backgroundColor = '';
    document.getElementById(filter_land[p]).style.border = '';
  }
  filter_land = []
  localStorage.setItem('filter_land', JSON.stringify(filter_land))
  sorter_etter_sesong()
  if (sessionStorage.getItem('spoiler') == 'skjult') {
    $('#tabell_overordnet td').hide()
  }
}




/*Dropdown avansert meny start*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleMeny_adva() {
  if (document.getElementById("myDropdown_adva").classList.contains("show")) {
    document.getElementById("myDropdown_adva").classList.remove("show")
    nedoverpil_adva()
  }
  else {
    if (document.getElementById("myDropdown_adva").classList.contains("show")) {}
    else {
      document.getElementById("myDropdown_adva").classList.add("show")
      oppoverpil_adva()
    }
  }
}

function nedoverpil_adva() {
  document.getElementById("dropDownMeny_adva").innerHTML = document.getElementById("dropDownMeny_adva").innerHTML.replace('❯','❮');
}

function oppoverpil_adva() {
  document.getElementById("dropDownMeny_adva").innerHTML = document.getElementById("dropDownMeny_adva").innerHTML.replace('❮','❯');
}



/* Lukker menyen om musepeker klikker utenfor boksen */
const $menu_adva = $('.dropdown_adva');

$(document).mouseup(e => {
  if (!$menu_adva.is(e.target) // if the target of the click isn't the container...
  && $menu_adva.has(e.target).length === 0) // ... nor a descendant of the container
  {
    if(document.getElementById("myDropdown_adva").classList.contains('show')) {
      document.getElementById("myDropdown_adva").classList.remove("show")
      nedoverpil_adva()
    }
  }
});


const knapplabel_turneringer = ['<img src=media/UEFA/UCL.svg class=turnering_ikon>', '<img src=media/UEFA/UEL.svg class=turnering_ikon>', '<img src=media/UEFA/UECL.svg class=turnering_ikon>']
for (i = 0; i < knapplabel_turneringer.length; i++) {
  let btn = "<abbr data_title='All stages'><button onClick='adva_filtrer(this.id)' class='btn btn-danger " + knapp_filter_turneringer[i] + "' id=" + knapp_filter_turneringer[i] + ">" + knapplabel_turneringer[i] + "</button></abbr>"
  document.getElementById("dropdown_elementer_turnering").innerHTML += btn;
}


const knapp_filter_id_dc = ['b1']
const knapplabel_dc = ['Domestic champion']
for (i = 0; i < knapplabel_dc.length; i++) {
  let btn = document.createElement("button");
  btn.id = knapp_filter_id_dc[i]
  btn.innerHTML = knapplabel_dc[i];
  btn.className = "btn btn-danger gullfarge_aktiver"
  btn.setAttribute("onClick", "adva_filtrer(this.id)");
  document.getElementById("dropdown_elementer_DC").appendChild(btn);
}

const knapp_filter_id_ucl = ['b2', 'b3', 'b6', 'b9', 'CLPO', 'b16', 'b18', 'i13', 'b21', 'b24', 'b27', 'b30', 'b33']
const knapplabel_ucl = ['Preliminary round', 'Q1', 'Q2', 'Q3', 'Play-off', 'Eliminated in play-off', 'Group stage', 'Knockout round play-off', 'Round of 16' , 'Quarter-final', 'Semi-final', 'Final', 'Champion']
for (i = 0; i < knapplabel_ucl.length; i++) {
  let btn = document.createElement("button");
  btn.id = knapp_filter_id_ucl[i]
  btn.innerHTML = knapplabel_ucl[i]
  btn.className = "btn btn-danger gullfarge_aktiver"
  btn.setAttribute("onClick", "adva_filtrer(this.id)");
  document.getElementById("dropdown_elementer_vanlige").appendChild(btn);
}



const knapp_filter_id_ucel = ['b5', 'b8', 'b12']
const knapplabel_uecl = ['Eliminated in Q1', 'Eliminated in Q2', 'Eliminated in Q3']
for (i = 0; i < knapplabel_uecl.length; i++) {
  let btn = document.createElement("button");
  btn.id = knapp_filter_id_ucel[i]
  btn.innerHTML = knapplabel_uecl[i]
  btn.className = "btn btn-danger CON"
  btn.setAttribute("onClick", "adva_filtrer(this.id)");
  document.getElementById("dropdown_elementer_UECL").appendChild(btn);
}


const knapp_filter_id_scup = ['b36','b37']
const knapplabel_scup = ['SCUP','Champion']
for (i = 0; i < knapplabel_scup.length; i++) {
  let btn = document.createElement("button");
  btn.id = knapp_filter_id_scup[i]
  btn.innerHTML = knapplabel_scup[i]
  btn.className = "btn btn-danger SCUP"
  btn.setAttribute("onClick", "adva_filtrer(this.id)");
  document.getElementById("dropdown_elementer_SCUP").appendChild(btn);
}


btn = document.createElement("button");
btn.id = 'reset'
btn.innerHTML = 'Reset'
btn.className = "btn btn-danger reset"
btn.setAttribute("onClick", "reset(this.id)");
document.getElementById("dropdown_elementer_reset").appendChild(btn);


const filter_id = ['b1', 'b2', 'b3','b5', 'b6', 'b8', 'b9', 'b12', 'CLPO', 'b16', 'b18', 'i13', 'b21', 'b24', 'b27', 'b30', 'b33', 'b36', 'b37'];


for (p = 0; p < filter_land_før.length; p++) {
  filter_land.push(filter_land_før[p]);
  innerHTML = document.getElementById(filter_land[p]).innerHTML;

  if (document.getElementById("dropDownMeny").innerHTML.includes('<img class="jordklode" src="media/UEFA/GLOBE2.svg" alt="Globe">')) {
    document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML.replace('<img class="jordklode" src="media/UEFA/GLOBE2.svg" alt="Globe">','')
  }
  var id = innerHTML.slice(68, 71)
  if (id == 'NIR') {}
  else {id = innerHTML.slice(72, 75)}
  document.getElementById(id).style.backgroundColor = 'rgb(196, 217, 255)';
  document.getElementById(id).style.border = '1px solid rgb(164, 164, 164)';
  if (filter_land.length == 8) {document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML + '<span class="grå_knappetekst">...(1)</span>'}
  else if (filter_land.length > 8) {document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML.replace(filter_land.length - 8, filter_land.length - 7)}
  else {
    document.getElementById("dropDownMeny").innerHTML = document.getElementById("dropDownMeny").innerHTML + innerHTML
  }
}

fargelegg_etter_reset()
function fargelegg_etter_reset() {
  for (p = 0; p < trykte_knapper.length; p++) {
    fargelegg_knapp(trykte_knapper[p])
  }
}
for (p = 0; p < trykte_knapper_exclude.length; p++) {
    fargelegg_knapp(trykte_knapper_exclude[p])
    farge_ramme_knapp(trykte_knapper_exclude[p])
}
if (trykte_knapper[0]) {
  if (document.getElementById('knappetekst').innerText.startsWith('Advanced') == true) {
    document.getElementById('filter_på').innerText = '(on)';
  }
  else {
    document.getElementById('filter_på').innerText = '(på)';
  }
}
if (document.getElementById('b1').classList.contains('no_hover') || trykte_knapper[0]) {}
else {
  for (p = 0; p < filter_id.length; p++) {
    document.getElementById(filter_id[p]).classList.add('no_hover')
  }
}
sorter_etter_sesong()


function reset(clicked_id) {
  for (p = 0; p < trykte_knapper.length; p++) {
    fjern_farge_knapp(trykte_knapper[p])
  }
  for (p = 0; p < trykte_knapper_exclude.length; p++) {
    fjern_farge_knapp(trykte_knapper_exclude[p])
  }
  document.getElementById('filter_på').innerText = '';
  trykte_knapper = []
  trykte_knapper_exclude = []
  sessionStorage.setItem('trykte_knapper', JSON.stringify(trykte_knapper))
  sessionStorage.setItem('trykte_knapper_exclude', JSON.stringify(trykte_knapper_exclude))
  sorter_etter_sesong()
  for (p = 0; p < filter_id.length; p++) {
    document.getElementById(filter_id[p]).classList.add('no_hover')
  }
  if (sessionStorage.getItem('spoiler') == 'skjult') {
    $('#tabell_overordnet td').hide()
  }
}

function adva_filtrer(clicked_id) {
  if (trykte_knapper[0] || knapp_filter_turneringer.includes(clicked_id)) {
    if (document.getElementById('b1').classList.contains('no_hover')) {
      for (p = 0; p < filter_id.length; p++) {
        document.getElementById(filter_id[p]).classList.remove('no_hover')
      }
    }
    if (knapp_filter_turneringer.includes(clicked_id)) {
      let index = trykte_knapper.indexOf(knapp_filter_turneringer[0]);
      if (index > -1) {trykte_knapper.splice(index, 1);}
      index = trykte_knapper_exclude.indexOf(knapp_filter_turneringer[0]);
      if (index > -1) {trykte_knapper_exclude.splice(index, 1);}
      index = trykte_knapper.indexOf(knapp_filter_turneringer[1]);
      if (index > -1) {trykte_knapper.splice(index, 1);}
      index = trykte_knapper_exclude.indexOf(knapp_filter_turneringer[1]);
      if (index > -1) {trykte_knapper_exclude.splice(index, 1);}

      index = trykte_knapper.indexOf(knapp_filter_turneringer[2]);
      if (index > -1) {trykte_knapper.splice(index, 1);}
      index = trykte_knapper_exclude.indexOf(knapp_filter_turneringer[2]);
      if (index > -1) {trykte_knapper_exclude.splice(index, 1);}

      fjern_farge_knapp(knapp_filter_turneringer[0])
      fjern_farge_knapp(knapp_filter_turneringer[1])
      fjern_farge_knapp(knapp_filter_turneringer[2])
    }
    if (trykte_knapper.includes(clicked_id)) {
      index = (trykte_knapper.indexOf(clicked_id));
      trykte_knapper.splice(index, 1)
      trykte_knapper_exclude.push(clicked_id)
      farge_ramme_knapp(clicked_id)
    }
    else if (trykte_knapper_exclude.includes(clicked_id)) {
      index = (trykte_knapper_exclude.indexOf(clicked_id));
      trykte_knapper_exclude.splice(index, 1)
      fjern_farge_knapp(clicked_id)
    }
    else {
      trykte_knapper.push(clicked_id)
      fargelegg_knapp(clicked_id)
    }
    if (trykte_knapper[0] || trykte_knapper_exclude[0]) {
      if (document.getElementById('knappetekst').innerText.startsWith('Advanced') == true) {
        document.getElementById('filter_på').innerText = '(on)';
      }
      else {
        document.getElementById('filter_på').innerText = '(på)';
      }
    }
    else {
      document.getElementById('filter_på').innerText = '';
    }
    sessionStorage.setItem('trykte_knapper', JSON.stringify(trykte_knapper))
    sessionStorage.setItem('trykte_knapper_exclude', JSON.stringify(trykte_knapper_exclude))
    sorter_etter_sesong()
  }
  else {
    if (document.getElementById(clicked_id).innerText != 'Choose competition' && document.getElementById(clicked_id).innerText != 'Velg turnering') {
      var gammel_tekst = document.getElementById(clicked_id).innerText;
      document.getElementById(clicked_id).style.color = 'rgba(255,0,0,0.6)'
      document.getElementById(clicked_id).style.transition = "all 0.5s";
      if (document.getElementById('knappetekst').innerText.startsWith('Advanced') == true) {
        document.getElementById(clicked_id).innerText = 'Choose competition'
      }
      else {
        document.getElementById(clicked_id).innerText = 'Velg turnering'
      }
      setTimeout(() => {
        document.getElementById(clicked_id).style.color = ''
        document.getElementById(clicked_id).style.transition = "all 0.1s";
        document.getElementById(clicked_id).innerText = gammel_tekst
      }, 1500)
    }
  }
  if (sessionStorage.getItem('spoiler') == 'skjult') {
    $('#tabell_overordnet td').hide()
  }
}

function fargelegg_knapp(clicked_id) {
  if(document.getElementById(clicked_id).classList.contains('CHA') || document.getElementById(clicked_id).classList.contains('ucl_knapp')) {
    document.getElementById(clicked_id).classList.add("ucl")
  }
  else if (document.getElementById(clicked_id).classList.contains('EUR') || document.getElementById(clicked_id).classList.contains('uel_knapp')) {
    document.getElementById(clicked_id).classList.add("uel")
  }
  else if (document.getElementById(clicked_id).classList.contains('CON') || document.getElementById(clicked_id).classList.contains('uecl_knapp')) {
    document.getElementById(clicked_id).classList.add("uecl")
  }
  else if (document.getElementById(clicked_id).classList.contains('gullfarge_aktiver')) {
    document.getElementById(clicked_id).classList.add("gullfarge")
  }
  else {
    document.getElementById(clicked_id).classList.add("scup")
  }
}

function farge_ramme_knapp(clicked_id) {
  document.getElementById(clicked_id).classList.add("exclude")
}

function fjern_farge_knapp(clicked_id) {
  document.getElementById(clicked_id).classList.remove("exclude")
  if(document.getElementById(clicked_id).classList.contains('CHA') || document.getElementById(clicked_id).classList.contains('ucl_knapp')) {
    document.getElementById(clicked_id).classList.remove("ucl")
  }
  else if (document.getElementById(clicked_id).classList.contains('EUR') || document.getElementById(clicked_id).classList.contains('uel_knapp')) {
    document.getElementById(clicked_id).classList.remove("uel")
  }
  else if (document.getElementById(clicked_id).classList.contains('CON') || document.getElementById(clicked_id).classList.contains('uecl_knapp')) {
    document.getElementById(clicked_id).classList.remove("uecl")
  }
  else if (document.getElementById(clicked_id).classList.contains('gullfarge_aktiver')) {
    document.getElementById(clicked_id).classList.remove("gullfarge")
  }
  else {
    document.getElementById(clicked_id).classList.remove("scup")
  }
}

function sorter_land_total(column, order, tekst, menyvalg_edit) {
  if (column == 'prize_money_total') {
    i = 1
    endre_kolonne_overskrift('ass_coeff_total', opp_ned_pil)
    endre_kolonne_overskrift('ass_coeff_ø', opp_ned_pil)
    endre_kolonne_overskrift('club_coeff_total', opp_ned_pil)
  }
  else if (column == 'ass_coeff_total') {
    i = 2
    endre_kolonne_overskrift('prize_money_total', opp_ned_pil_klubb)
    endre_kolonne_overskrift('ass_coeff_ø', opp_ned_pil)
    endre_kolonne_overskrift('club_coeff_total', opp_ned_pil)
  }
  else if (column == 'ass_coeff_ø') {
    i = 4
    endre_kolonne_overskrift('prize_money_total', opp_ned_pil)
    endre_kolonne_overskrift('ass_coeff_total', opp_ned_pil_klubb)
    endre_kolonne_overskrift('club_coeff_total', opp_ned_pil)
  }
  else if (column == 'club_coeff_total') {
    i = 3
    endre_kolonne_overskrift('prize_money_total', opp_ned_pil)
    endre_kolonne_overskrift('ass_coeff_total', opp_ned_pil_klubb)
    endre_kolonne_overskrift('ass_coeff_ø', opp_ned_pil)
  }
  totalt_land(column, order, tekst, menyvalg_edit.length)
}

function totalt_land(column, order, tekst, antall_klubber) {
  for (r = 0; r < landskoeffisienter.length; r++) {
    landskoeffisienter[r][1] = 0;
    landskoeffisienter[r][2] = 0;
    landskoeffisienter[r][4] = 0;
    landskoeffisienter[r][3] = 0;
  }
  var rows = document.getElementsByTagName("table")[0].rows;
  for (p = 1; p <= antall_klubber; p++) {
    for (q = 0; q < menyvalg.length; q++) {
      if (rows[p].cells[1].innerText == menyvalg[q][0]) {
        for (r = 0; r < landskoeffisienter.length; r++) {
          if (landskoeffisienter[r][0] == menyvalg[q][1]) {
            landskoeffisienter[r][1] += parseInt((rows[p].cells[3].innerText).replace(/\D/g,''))
            landskoeffisienter[r][2] += parseFloat(rows[p].cells[4].innerText)
            landskoeffisienter[r][3] += parseFloat(rows[p].cells[6].innerText)
            landskoeffisienter[r][4] += 1
          }
        }
        break
      }
    }
  }
	let filter_land_før = JSON.parse(localStorage.getItem('filter_land')) || [];
	// Brukes dersom land har internt oppgjør og er garantert koeffisientpoeng.
  // if (aarstall == 2) {
  //   for (r = 0; r < landskoeffisienter.length; r++) {
	// 		if (['ITA'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] += 3;}
  //   }
  // }
	// Brukes når vi vet antallet UCL-klubber fra land, men hvilke klubber det er snakk om er ukjent.
  if (aarstall == 3) {
    for (r = 0; r < landskoeffisienter.length; r++) {
      if (['AUT','SCO','BEL','POR'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] = 6; if (filter_land_før.includes(landskoeffisienter[r][0]) || filter_land_før == "") {landskoeffisienter[r][4] = 5;}}
      else if (['NED'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] = 12; if (filter_land_før.includes(landskoeffisienter[r][0]) || filter_land_før == "") {landskoeffisienter[r][4] = 6;}}
      else if (['FRA'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] = 18; if (filter_land_før.includes(landskoeffisienter[r][0]) || filter_land_før == "") {landskoeffisienter[r][4] = 7;}}
      else if (['ESP','ENG'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] = 24; if (filter_land_før.includes(landskoeffisienter[r][0]) || filter_land_før == "") {landskoeffisienter[r][4] = 7;}}
			else if (['ITA','GER'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] = 30; if (filter_land_før.includes(landskoeffisienter[r][0]) || filter_land_før == "") {landskoeffisienter[r][4] = 8;}}
    }
  }
	// Sesongen etter.
	else if (aarstall == 4) {
    for (r = 0; r < landskoeffisienter.length; r++) {
      if (['CZE','TUR','BEL','POR'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] = 6; if (filter_land_før.includes(landskoeffisienter[r][0]) || filter_land_før == "") {landskoeffisienter[r][4] = 5;}}
      else if (['NED'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] = 12; if (filter_land_før.includes(landskoeffisienter[r][0]) || filter_land_før == "") {landskoeffisienter[r][4] = 6;}}
      else if (['FRA'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] = 18; if (filter_land_før.includes(landskoeffisienter[r][0]) || filter_land_før == "") {landskoeffisienter[r][4] = 7;}}
      else if (['GER','ITA','ESP','ENG'].includes(landskoeffisienter[r][0])) {landskoeffisienter[r][2] = 24; if (filter_land_før.includes(landskoeffisienter[r][0]) || filter_land_før == "") {landskoeffisienter[r][4] = 7;}}
    }
  }
  let land_array = []
  let trykte_knapper = JSON.parse(sessionStorage.getItem('trykte_knapper')) || [];
  let trykte_knapper_exclude = JSON.parse(sessionStorage.getItem('trykte_knapper_exclude')) || [];
  for (r = 0; r < landskoeffisienter.length; r++) {
    if (landskoeffisienter[r][4] != 0 || (landskoeffisienter[r][2] != 0 && ((trykte_knapper == [] || trykte_knapper == '') && (filter_land_før == '' || filter_land_før == [] || filter_land_før.includes(landskoeffisienter[r][0]))))) {
      landskoeffisienter[r][4] = Math.floor((landskoeffisienter[r][2]) * 1000/landskoeffisienter[r][4]) / 1000
      land_array.push(landskoeffisienter[r])
    }
  }
  if (trykte_knapper.length == 0 && trykte_knapper_exclude.length == 0 && [1,2].includes(aarstall) && (filter_land_før.length == 0 || filter_land_før.includes('RUS'))) {
    land_array.push(['RUS', 0, '', '', 4.333, 0, 0, 0.166, 0.5, 0, 0.5, 'Russia'])
  }
  for (r = 0; r < land_array.length; r++) {
    for (p = 0; p < sortering_land.length; p++) {
      if (land_array[r][0] == sortering_land[p]) {
        land_array[r].push(p)
      }
    }
  }
  let k = i;
  i = 13;
  land_array.sort(sortFunction_2_tall);
  i = k;
  if(order == 'desc') {
    land_array.sort(sortFunction_1_tall);
    tekst += '<span class="høyrestill"><img src="media/opp_NEDpil.svg" alt="Sorting arrows"></span>'
  }
  else {
    land_array.sort(sortFunction_2_tall);
    tekst += '<span class="høyrestill"><img src="media/OPPned_pil.svg" alt="Sorting arrows"></span>'
  }
  sessionStorage.setItem('kolonne2', column)
  sessionStorage.setItem('rekkefølge2', order)
  document.getElementById(column).innerHTML = tekst;
  if (order == 'desc' || (column != 'ass_coeff_ø' && column != 'ass_coeff_total' && column != 'club_coeff_total')) {
    for (p = 0; p < land_array.length; p++) {
      if (land_array[p][14]) {
        land_array[p][14] = p+1;
      } else {
        land_array[p].push(p+1);
        if (!land_array[p][14]) {
          land_array[p].push(p+1);
        }
      }
    }
  }
  else {
    for (p = 0; p < land_array.length; p++) {
      if (land_array[p][14]) {
        land_array[p][14] = land_array.length-p;
      } else {
        land_array[p].push(land_array.length-p);
        if (!land_array[p][14]) {
          land_array[p].push(land_array.length-p);
        }
      }
    }
  }
  if (column == 'ass_coeff_ø' || column == 'ass_coeff_total' || column == 'club_coeff_total') {
    if (order == 'desc') {
      for (p = 0; p < land_array.length; p++) {
        if (p > 0) {
          if (land_array[p-1][i] == land_array[p][i]) {
            land_array[p].splice(14,1,land_array[p-1][14])
          }
        }
      }
    }
    else {
      for (p = land_array.length - 1; p >= 0; p--) {
        if (p < land_array.length - 1) {
          if (land_array[p+1][i] == land_array[p][i]) {
            land_array[p].splice(14,1,land_array[p+1][14])
          }
        }
      }
    }
  }
  bygg_tabell_2(land_array)
}


function bygg_tabell_2(land_array) {
  let trykte_knapper = JSON.parse(sessionStorage.getItem('trykte_knapper')) || [];
  let trykte_knapper_exclude = JSON.parse(sessionStorage.getItem('trykte_knapper_exclude')) || [];
  let filter_land_før = JSON.parse(localStorage.getItem('filter_land')) || [];
  table = document.getElementById('myTable_2')
  table.innerHTML = '';
  var helTabellHTML = '';
  if (trykte_knapper.length > 0 || trykte_knapper_exclude.length > 0) {
    for (r = 0; r < land_array.length; r++) {
      land_array[r][4] = "-&nbsp"
    }
  }
  for (r = 0; r < land_array.length; r++) {
    if (land_array[r][2] == 0) {
      land_array[r][2] = "-&nbsp";
    }
    else {
      land_array[r][2] = land_array[r][2].toFixed(1)
    }
    if (land_array[r][3] == 0) {
      land_array[r][3] = "-&nbsp";
    }
    else {
      land_array[r][3] = land_array[r][3].toFixed(1)
    }
    if (land_array[r][4] == 0 || (land_array[r][2] == 0 && (filter_land_før.includes('RUS') == false && filter_land_før.length != 0 && aarstall == 1))) {
      land_array[r][4] = "-&nbsp";
    }
    else if (land_array[r][4] != "-&nbsp") {
      land_array[r][4] = land_array[r][4].toFixed(3);
    }
    let spraak = localStorage.getItem("someVarKey");
    if (land_array[r][0] == 'NIR') {
      if (spraak == 'english') {
        flagg_ikon = '<div class="flagg_div" id="' + land_array[r][0] + '_oversett"><abbr data_title="' + land_array[r][11] + '"><img class="flagg" id="NIR" src="media/UEFA/' + land_array[r][0] + '.svg"></abbr></div>'
      } else {
        flagg_ikon = '<div class="flagg_div" id="' + land_array[r][0] + '_oversett"><abbr data_title="' + land_array[r][12] + '"><img class="flagg" id="NIR" src="media/UEFA/' + land_array[r][0] + '.svg"></abbr></div>'
      }
    }
    else {
      if (spraak == 'english') {
        flagg_ikon = '<div class="flagg_div" id="' + land_array[r][0] + '_oversett"><abbr data_title="' + land_array[r][11] + '"><img class="flagg" src="media/UEFA/' + land_array[r][0] + '.svg"></abbr></div>'
      } else {
        flagg_ikon = '<div class="flagg_div" id="' + land_array[r][0] + '_oversett"><abbr data_title="' + land_array[r][12] + '"><img class="flagg" src="media/UEFA/' + land_array[r][0] + '.svg"></abbr></div>'
      }
    }
    let premiepenger = "€ " + land_array[r][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    var rad = `<tr>
                <td class="id_nr">${land_array[r][14]}</td>
                <td id="flagg_tabell2"><nobr class="marign_venstre">${flagg_ikon}</nobr></td>
                <td class='premie_koeff'><span class="premiepenger_span"><a class="tabell_link" href="../#" onclick="endre_lands_filter_prize(${land_array[r][0]})"><nobr>${premiepenger}</nobr></a></span></td>
                <td class='premie_koeff'><span class="ass_coeff_span"><a class="tabell_link" href="../#" onclick="endre_lands_filter_ass(${land_array[r][0]})">${land_array[r][2]}</a></span></td>
                <td class='premie_koeff'><span class="ass_coeff_span"><a class="tabell_link" href="../country-coefficients" onclick="landsranking_endre_periode(${land_array[r][0]})">${land_array[r][4]}</a></span></td>
                <td class='premie_koeff'><span class="club_coeff_span"><a class="tabell_link" href="../#" onclick="endre_lands_filter_club(${land_array[r][0]})">${land_array[r][3]}</a></span></td>
              </tr>`
    helTabellHTML += rad;
  }
  table.innerHTML = helTabellHTML;
}

function endre_lands_filter_bidrag(land) {
  sessionStorage.setItem('kolonne', 'bidrag')
  sessionStorage.setItem('rekkefølge', 'desc')
  sessionStorage.setItem('kolonne2', 'ass_coeff_ø')
  sessionStorage.setItem('rekkefølge2', 'desc')
  endre_lands_filter(land)
}
function endre_lands_filter_prize(land) {
  sessionStorage.setItem('kolonne', 'prize_money')
  sessionStorage.setItem('rekkefølge', 'desc')
  sessionStorage.setItem('kolonne2', 'prize_money_total')
  sessionStorage.setItem('rekkefølge2', 'desc')
  endre_lands_filter(land)
}
function endre_lands_filter_ass(land) {
  sessionStorage.setItem('kolonne', 'ass_coeff')
  sessionStorage.setItem('rekkefølge', 'desc')
  sessionStorage.setItem('kolonne2', 'ass_coeff_total')
  sessionStorage.setItem('rekkefølge2', 'desc')
  endre_lands_filter(land)
}
function endre_lands_filter_club(land) {
  sessionStorage.setItem('kolonne', 'club_coeff')
  sessionStorage.setItem('rekkefølge', 'desc')
  sessionStorage.setItem('kolonne2', 'club_coeff_total')
  sessionStorage.setItem('rekkefølge2', 'desc')
  endre_lands_filter(land)
}

function endre_lands_filter(land) {
  reset()
  if ((!land.innerHTML || land.innerHTML == undefined)) {
    land = 'NIR'
  } else {
    land = (land.innerHTML.slice(58,61))
  }
  let filter_land = [land]
  localStorage.setItem('filter_land', JSON.stringify(filter_land))
  for (r = 0; r < landskoeffisienter.length; r++) {
    document.getElementById(landskoeffisienter[r][0]).style.backgroundColor = '';
    document.getElementById(landskoeffisienter[r][0]).style.border = '';
  }
  document.getElementById(land).style.backgroundColor = 'rgb(196, 217, 255)';
  document.getElementById(land).style.border = '1px solid rgb(164, 164, 164)';
  if (land == 'NIR') {
    document.getElementById('dropDownMeny').innerHTML = '<div class="opp_ned_pil">❮</div><div class="flagg_div"><img class="flagg" id="NIR_" src="media/UEFA/NIR.svg" alt="NIR"></div>'
  } else {
    document.getElementById('dropDownMeny').innerHTML = '<div class="opp_ned_pil">❮</div><div class="flagg_div"><img class="flagg" src="media/UEFA/' + land + '.svg" alt="' + land + '"></div>'
  }
  sorter_etter_sesong()
  sessionStorage.setItem('spoiler', 'synlig')
  document.getElementById('spoiler').classList.remove('rod_knapp')
  document.getElementById('spoiler').innerHTML = '<div class="spoiler_pil">&#10095</div>'
}

function landsranking_endre_periode(klubb) {
  klubb = klubb.innerHTML;
  if (klubb) {
    if (klubb.length > 20) {
      let id = 'NIR'
      try {
        if (klubb.slice(72, 75)) {id = klubb.slice(72, 75)}
      } catch {}
      localStorage.setItem('filter_land', JSON.stringify([id]))
    }
  } else {localStorage.setItem('filter_land', JSON.stringify(['NIR']))}
  sessionStorage.setItem('kolonne_landskoeffisient', 'poeng')
  sessionStorage.setItem('rekkefølge_landskoeffisient', 'asc')
  sessionStorage.setItem('kolonne_landskoeffisient2', 'id_nr_klubb')
  sessionStorage.setItem('rekkefølge_landskoeffisient2', 'asc')
  try {if (sessionStorage.getItem('dropdownmeny_valg_landskoeffisient').length > 10) {
    sessionStorage.setItem('dropdownmeny_valg_landskoeffisient', 2000+nåværende_sesong_periode_valg[0] + '/' + nåværende_sesong_periode_valg[2]);
  }}
  catch {null;}
  let perioden_valgt = parseInt((sessionStorage.getItem('dropdownmeny_valg_landskoeffisient') || (2000+nåværende_sesong_periode_valg[0] + '/' + nåværende_sesong_periode_valg[2])).slice(2, 4)) - 4;
  let aarstall_her = parseInt(21 + aarstall)
  let differanse = perioden_valgt - aarstall_her
  if (perioden_valgt <= aarstall_her && perioden_valgt + 4 >= aarstall_her) {
  }
  else if (differanse > 0) {
    sessionStorage.setItem('dropdownmeny_valg_landskoeffisient', (2000+perioden_valgt + 4 - differanse) + '/' + (perioden_valgt + 5 - differanse))
  }
  else {
    sessionStorage.setItem('dropdownmeny_valg_landskoeffisient', (2000+21 + aarstall) + '/' + (22 + aarstall))
  }
  // sessionStorage.setItem('dropdownmeny_valg_klubbkoeffisient', (2000+nåværende_sesong_periode_valg[0] - 5 + aarstall) + '/' + (nåværende_sesong_periode_valg[2] - 5 + aarstall) + ' - ' + (nåværende_sesong_periode_valg[0] - 1 + aarstall) + '/' + (nåværende_sesong_periode_valg[2] - 1 + aarstall))
}


$('#spoiler').click(function(){
  if ($('#tabell_overordnet td').is(':visible')) {
    $('#tabell_overordnet td').hide()
    sessionStorage.setItem('spoiler', 'skjult')
    document.getElementById('spoiler').classList.add('rod_knapp')
    document.getElementById('spoiler').innerHTML = '<div class="spoiler_pil">&#10094</div>'
  } else {
    $('#tabell_overordnet td').show()
    sessionStorage.setItem('spoiler', 'synlig')
    document.getElementById('spoiler').classList.remove('rod_knapp')
    document.getElementById('spoiler').innerHTML = '<div class="spoiler_pil">&#10095</div>'
  }
})

if (sessionStorage.getItem('spoiler') == 'skjult') {
  $('#tabell_overordnet td').hide()
  document.getElementById('spoiler').classList.add('rod_knapp')
  document.getElementById('spoiler').innerHTML = '<div class="spoiler_pil">&#10094</div>'
}
if (sessionStorage.getItem('spoiler') == 'synlig' || sessionStorage.getItem('spoiler') == undefined) {
  $('#tabell_overordnet td').show()
  document.getElementById('spoiler').classList.remove('rod_knapp')
  document.getElementById('spoiler').innerHTML = '<div class="spoiler_pil">&#10095</div>'
}


// window.onscroll = function() {myFunction()};
// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("ad_venstre").style.top = -1.5*scrolled + "px";
//   document.getElementById("ad_hoyre").style.top = -1.5*scrolled + "px";
// }

// function endre_klubbnavn(i, kolonne) {
//   var rows = document.getElementsByTagName("table")[0].rows;
//   var last = rows[i + 1];
//   var cell = last.cells[2];
//   let aarstall = (rows[0].cells[kolonne+1].innerText[0] + rows[0].cells[kolonne+1].innerText[1] - 21)
//   localStorage.setItem('sessong', aarstall)
//   var value = cell.innerText;
//   localStorage.setItem('Klubbnavn', value)
// }


function regnUtPremiepenger(data, sesong, klubbnavn) {
  let sum = 0;
  let knapper = "";
  knapper = data[0].split(",");
  let cycle = 0;
  if (sesong >= 3) {
    cycle = 1;
  }
  // Seriemester-penger
  if (knapper.includes("b1")) {
    let seriemesterPenger = true;
    for (i = 0; i < knapper.length; i++) {
      if (["b9","b13","b14","CLPO","b18","b19","b20"].includes(knapper[i])) {
        seriemesterPenger = false;
        break;
      }
    }
    if (seriemesterPenger) {
      sum += penger[0][cycle];
    }
  }
  // Deltagelse i kvalikrunder
  if (!knapper.includes("CLPO") && !knapper.includes("b18")) {
    for (i = 0; i < knapper.length; i++) {
      if (["b2","b3","uelQ1","b4","b6","uelQ2","b7","b9","b10","b11","b15"].includes(knapper[i])) {
        sum += penger[1][cycle];
      }
    }
    if (knapper.includes("b14") && !knapper.includes("b19")) {
      sum += penger[1][cycle];
    }
  }
  if (knapper.includes('b16')) {
    sum += penger[2][cycle];
  }
	// Ufordelte kvalik
	let residal = regnUtResidal(aarstall, "");
	let okning = tilgjengeligIKvalik[aarstall]/residal;
	let residalKlubb = regnUtResidal(sesong,klubbnavn);
	sum += okning*residalKlubb-residalKlubb;

  if (knapper.includes("b5")) {
    return Math.round(sum + penger[3][cycle]);
  }
  else if (knapper.includes("b8")) {
    return Math.round(sum + penger[4][cycle]);
  }
  else if (knapper.includes("b12")) {
    return Math.round(sum + penger[5][cycle]);
  }
  else if (knapper.includes("b17")) {
    return Math.round(sum + penger[6][cycle]);
  }
  for (i = 18; i <= 20; i++) {
    if (knapper.includes("b" + i)) {
      // Gruppespillsdeltagelse
      sum += penger[7][cycle][i-18];

			// Seire/uavgjort i gruppespill
			let seiere;
			if (data[2]) {
				seiere = data[2].replace(",", "").replace(",", "");
				let uavgjort = seiere.substring(seiere.indexOf(",") + 1).replaceAll(",", "");
				seiere = seiere.split(",")[0];
				sum += seiere * penger[8][cycle][i-18];
				sum += uavgjort * penger[9][cycle][i-18];
			}
			// 10-års koeffisientbonus, medieverdi, fem-års
      if (aarstall >= 3) {
        if (data[1] && data[1] != ",,,,,,,,") {
					// 10-års og...
					// TV-penger & fem-års
					if (data[1].split(",")[i-15] || data[1].split(",")[i-12]) {
						if (i == 18) {
							sum += ((37-(data[1].split(",")[i-18]||37))/666)*((100-andel_europeisk[sesong-3][0])/100)*penger[10][cycle][i-18];
							sum += ((37-(parseInt(data[1].split(",")[i-9]||37)))/666)*(andel_europeisk[sesong-3][0]/100)*penger[10][cycle][i-18];
						} else {
							sum += ((37-(data[1].split(",")[i-18]||37))/666)*((100-andel_europeisk[sesong-3][1])/100)*penger[10][cycle][i-18];
							sum += ((37-(parseInt(data[1].split(",")[i-9]||37)))/666)*(andel_europeisk[sesong-3][1]/100)*penger[10][cycle][i-18];
						}
					}
        }
      }
			// 10-års koeffisientbonus og ufordelte ressurser
      else {
        sum += seiere * (finnTotaltUavgjort(aarstall,i-18,false) * penger[9][cycle][i-18]) / (96-finnTotaltUavgjort(aarstall,i-18,false))
        sum += (33-parseFloat(data[1].replaceAll(',',''))) * penger[10][cycle][i-18];
      }

      // Plassering og utslagsrunde-playoff
      if (data[3] && data[3] != ",," && sesong < 3) {
				sum += penger[11][cycle][i-18][data[3].replaceAll(',','')-1] || 0;
      }
      else if (data[3] && data[3] != ",,") {
        sum += penger[11][cycle][i-18][2]*(37-(data[3].replaceAll(',','')||37))
        if (data[3].replaceAll(',','') > 16 && data[3].replaceAll(',','') <= 24) {
          sum += penger[11][cycle][i-18][1]
        }
				else if (data[3].replaceAll(',','') <= 16) {
          sum += penger[11][cycle][i-18][0]
        }

				if (i == 20) {
          sum += ((37-(data[3].replaceAll(',','')||37))/666)*(finnTotaltUavgjort(aarstall,i-18,false) * penger[9][cycle][i-18]);
        }
        else {
					sum += ((37-(data[3].replaceAll(',','')||37))/666)*(finnTotaltUavgjort(aarstall,i-18,false) * penger[9][cycle][i-18]);
        }
      }
      break;
    }
  }
  // 16-dels osv
  for (i = 0; i < knapper.length; i++) {
    if (knapper[i].substring(1) >= 21 && knapper[i].substring(1) <= 37) {
			if (parseInt(knapper[i].substring(1)) == 36 && sesong == 2) {
				sum += penger[12-21+parseInt(knapper[i].substring(1))][1];
			} else {
				sum += penger[12-21+parseInt(knapper[i].substring(1))][cycle];
			}
    }
  }
  return Math.round(sum);
}

// let pixelRatio = window.devicePixelRatio;

// $(window).resize(function() {
//   if (window.devicePixelRatio > pixelRatio) {
//     document.getElementById("ad_venstre").innerHTML = "";
//     document.getElementById("ad_hoyre").innerHTML = "";
//   }
// });

let vinduBredde = (window.innerWidth > 0) ? window.innerWidth : screen.width;
$(window).resize(function() {
  if (vinduBredde > 1465) {
    if (((window.innerWidth > 0) ? window.innerWidth : screen.width) <= 1465) {
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