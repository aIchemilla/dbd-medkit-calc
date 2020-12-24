var campKit = 16;
var firstKit = 24;
var emerKit = 16;
var rangeKit = 32;
var addBandage = 8;
var addGauze = 12;
var addGel = 16;
var addDress = -8;
var baseCharges = 0;
var addonCharges = 0;
var addon1 = 0;
var addon2 = 0;
var perk1eff = 0;
var perk2eff = 0;
var perk3eff = 0;
function chooseBM(BMchoice){
    baseCharges = BMchoice;
}
function chooseAD(ADchoice){
    addon1 = ADchoice;
}
function chooseAD2(AD2choice){
    addon2 = AD2choice;
}
function choosePE1(PE1choice){
    perk1eff = PE1choice;
}
function choosePE2(PE2choice){
    perk2eff = PE2choice;
}
function choosePE3(PE3choice){
    perk3eff = PE3choice;
}
function calc(){
  var total = calcResult();
  var healAmounts = healsCalc();
  function healsCalc(){
    return (total / 16);
  }
  document.getElementById("heals").innerHTML = healAmounts;
  document.getElementById("result").innerHTML = total;
  document.getElementById("resultsDiv").classList.add('d-block');
  document.getElementById("resultsDiv").classList.remove('d-none');
}
function calcResult(){
  var addonCharges = (addon1) + (addon2);
  var modifiedCharges = (baseCharges) + (addonCharges);
  var totalEfficiency = (perk1eff) + (perk2eff) + (perk3eff);
  document.getElementById("totalCharges").innerHTML = modifiedCharges;
  return modifiedCharges + (modifiedCharges * totalEfficiency);
}



  function shAddPerks() {
    if (document.getElementById("additionalPerks").classList.contains('d-none')) {
      document.getElementById("additionalPerks").classList.add('d-block');
      document.getElementById("additionalPerks").classList.remove('d-none');
    } else {
      document.getElementById("additionalPerks").classList.add('d-none');
      document.getElementById("additionalPerks").classList.remove('d-block');
    }
  }
  function shAddMKA() {
    if (document.getElementById("additionalMKA").classList.contains('d-none')) {
      document.getElementById("additionalMKA").classList.add('d-block');
      document.getElementById("additionalMKA").classList.remove('d-none');
    } else {
      document.getElementById("additionalMKA").classList.add('d-none');
      document.getElementById("additionalMKA").classList.remove('d-block');
    }
  }
