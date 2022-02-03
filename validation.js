"use strict";
/* HTML Dosyasına ekleyin
<script src="./validation.js"></script>
*/

/////////////TC Kimlik No Kontrol scripti///////////////////

/* HTML Kullanımı 
 <input type="number"  minlength="11" maxlength="11" id="TCNO" name="TCNO" onblur="TCNOKontrol(this)" /> 
*/

function TCNOKontrol(TC) {
  const yanlis = () => {
    alert("TC Kimlik No hatalı");
    TC.value = "";
  };
  let TCNO = TC.value;
  if (TCNO !== "") {
    var tek = 0,
      cift = 0,
      sonuc = 0,
      TCToplam = 0,
      i = 0,
      hatali = [
        11111111110,
        22222222220,
        33333333330,
        44444444440,
        55555555550,
        66666666660,
        7777777770,
        88888888880,
        99999999990
      ];

    if (TCNO.length != 11) return yanlis();
    if (isNaN(TCNO)) return yanlis();
    if (TCNO[0] == 0) return yanlis();

    tek =
      parseInt(TCNO[0]) +
      parseInt(TCNO[2]) +
      parseInt(TCNO[4]) +
      parseInt(TCNO[6]) +
      parseInt(TCNO[8]);
    cift =
      parseInt(TCNO[1]) +
      parseInt(TCNO[3]) +
      parseInt(TCNO[5]) +
      parseInt(TCNO[7]);

    tek = tek * 7;
    sonuc = Math.abs(tek - cift);
    if (sonuc % 10 != TCNO[9]) return yanlis();

    for (var i = 0; i < 10; i++) {
      TCToplam += parseInt(TCNO[i]);
    }

    if (TCToplam % 10 != TCNO[10]) return yanlis();

    if (hatali.toString().indexOf(TCNO) != -1) return yanlis();
    console.log("TC Kimlik No geçerli");
    return true;
  }
}

/////////////TC Kimlik No Kontrol scripti///////////////////

/*
*
*
*/

/////////////Email adresi kontrol scripti///////////////////

/* HTML Kullanımı 
 <input type="email" id="email" onblur="emailCheck(this)" /> 
*/

function emailCheck(e) {
  var validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (e.value.match(validRegex)) {
    console.log("Email adresi geçerli");
  } else if (e.value !== "") {
    alert("Email adresi geçersiz");
    e.value = "";
  }
}

/////////////Email adresi kontrol scripti///////////////////

/*
*
*
*/

/////////////GSM input maskelemek scripti///////////////////

/* HTML Kullanımı
    <input type="tel" min id="gsm" placeholder="(532) 532 32 32" onkeyup="gsmCheck(this)" />
    <input type="number" name="gsm" style="display: none;" >
    <script src="https://unpkg.com/imask"></script>
*/

function gsmCheck(e) {
  IMask(e, {
    mask: `(000) 000 00 00`
  });
  let gsmNo = e.value.match(/\d+/g).join("");
  document.querySelector('input[name="gsm"]').value = gsmNo;
  console.log(gsmNo);
}

/////////////GSM input maskelemek scripti///////////////////
