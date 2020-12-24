var baseCharges = 0;
var addonCharges = 0;
var addon1 = 0;
var addon2 = 0;
var perk1eff = 0;
var perk2eff = 0;
var perk3eff = 0;
function chooseBM(BMchoice){
    baseCharges = BMchoice;
    // This is most certainly terrible form, but I'm far too tired to figure
    // out something better so. Too bad! YandereDev kinnie ig
    if (baseCharges === 16) {
      document.getElementById("mk16").classList.add('bg-success');
      document.getElementById("mk24").classList.remove('bg-success');
      document.getElementById("mk32").classList.remove('bg-success');
    }
    if (baseCharges === 24) {
      document.getElementById("mk24").classList.add('bg-success');
      document.getElementById("mk16").classList.remove('bg-success');
      document.getElementById("mk32").classList.remove('bg-success');
    }
    if (baseCharges === 32) {
      document.getElementById("mk32").classList.add('bg-success');
      document.getElementById("mk16").classList.remove('bg-success');
      document.getElementById("mk24").classList.remove('bg-success');
    }
}
function chooseAD(ADchoice){
    addon1 = ADchoice;
    // Oh dear god look away
    if (addon1 === 8) {
      document.getElementById("1ad8").classList.add('bg-success');
      document.getElementById("1ad12").classList.remove('bg-success');
      document.getElementById("1ad16").classList.remove('bg-success');
      document.getElementById("1ad-8").classList.remove('bg-success');
    }
    if (addon1 === 12) {
      document.getElementById("1ad12").classList.add('bg-success');
      document.getElementById("1ad8").classList.remove('bg-success');
      document.getElementById("1ad16").classList.remove('bg-success');
      document.getElementById("1ad-8").classList.remove('bg-success');
    }
    if (addon1 === 16) {
      document.getElementById("1ad16").classList.add('bg-success');
      document.getElementById("1ad12").classList.remove('bg-success');
      document.getElementById("1ad8").classList.remove('bg-success');
      document.getElementById("1ad-8").classList.remove('bg-success');
    }
    if (addon1 === -8) {
      document.getElementById("1ad-8").classList.add('bg-success');
      document.getElementById("1ad12").classList.remove('bg-success');
      document.getElementById("1ad8").classList.remove('bg-success');
      document.getElementById("1ad16").classList.remove('bg-success');
    }
}
function chooseAD2(AD2choice){
    addon2 = AD2choice;
    // pain
    if (addon2 === 8) {
      document.getElementById("2ad8").classList.add('bg-success');
      document.getElementById("2ad12").classList.remove('bg-success');
      document.getElementById("2ad16").classList.remove('bg-success');
      document.getElementById("2ad-8").classList.remove('bg-success');
    }
    if (addon2 === 12) {
      document.getElementById("2ad12").classList.add('bg-success');
      document.getElementById("2ad8").classList.remove('bg-success');
      document.getElementById("2ad16").classList.remove('bg-success');
      document.getElementById("2ad-8").classList.remove('bg-success');
    }
    if (addon2 === 16) {
      document.getElementById("2ad16").classList.add('bg-success');
      document.getElementById("2ad12").classList.remove('bg-success');
      document.getElementById("2ad8").classList.remove('bg-success');
      document.getElementById("2ad-8").classList.remove('bg-success');
    }
    if (addon2 === -8) {
      document.getElementById("2ad-8").classList.add('bg-success');
      document.getElementById("2ad12").classList.remove('bg-success');
      document.getElementById("2ad8").classList.remove('bg-success');
      document.getElementById("2ad16").classList.remove('bg-success');
    }
}
function choosePE1(PE1choice){
    perk1eff = PE1choice;
    // I shant be forgiven for these crimes
    if (perk1eff === 0.33) {
      document.getElementById("1pe33").classList.add('bg-success');
      document.getElementById("1pe20").classList.remove('bg-success');
      document.getElementById("1pe25").classList.remove('bg-success');
      document.getElementById("1pe0").classList.remove('bg-success');
    }
    if (perk1eff === 0.20) {
      document.getElementById("1pe20").classList.add('bg-success');
      document.getElementById("1pe33").classList.remove('bg-success');
      document.getElementById("1pe25").classList.remove('bg-success');
      document.getElementById("1pe0").classList.remove('bg-success');
    }
    if (perk1eff === 0.25) {
      document.getElementById("1pe25").classList.add('bg-success');
      document.getElementById("1pe20").classList.remove('bg-success');
      document.getElementById("1pe33").classList.remove('bg-success');
      document.getElementById("1pe0").classList.remove('bg-success');
    }
    if (perk1eff === 0) {
      document.getElementById("1pe0").classList.add('bg-success');
      document.getElementById("1pe20").classList.remove('bg-success');
      document.getElementById("1pe25").classList.remove('bg-success');
      document.getElementById("1pe33").classList.remove('bg-success');
    }
}
function choosePE2(PE2choice){
    perk2eff = PE2choice;
    if (perk2eff === 0.33) {
      document.getElementById("2pe33").classList.add('bg-success');
      document.getElementById("2pe20").classList.remove('bg-success');
      document.getElementById("2pe25").classList.remove('bg-success');
      document.getElementById("2pe0").classList.remove('bg-success');
    }
    if (perk2eff === 0.20) {
      document.getElementById("2pe20").classList.add('bg-success');
      document.getElementById("2pe33").classList.remove('bg-success');
      document.getElementById("2pe25").classList.remove('bg-success');
      document.getElementById("2pe0").classList.remove('bg-success');
    }
    if (perk2eff === 0.25) {
      document.getElementById("2pe25").classList.add('bg-success');
      document.getElementById("2pe20").classList.remove('bg-success');
      document.getElementById("2pe33").classList.remove('bg-success');
      document.getElementById("2pe0").classList.remove('bg-success');
    }
    if (perk2eff === 0) {
      document.getElementById("2pe0").classList.add('bg-success');
      document.getElementById("2pe20").classList.remove('bg-success');
      document.getElementById("2pe25").classList.remove('bg-success');
      document.getElementById("2pe33").classList.remove('bg-success');
    }
}
function choosePE3(PE3choice){
    perk3eff = PE3choice;
    if (perk3eff === 0.33) {
      document.getElementById("3pe33").classList.add('bg-success');
      document.getElementById("3pe20").classList.remove('bg-success');
      document.getElementById("3pe25").classList.remove('bg-success');
      document.getElementById("3pe0").classList.remove('bg-success');
    }
    if (perk3eff === 0.20) {
      document.getElementById("3pe20").classList.add('bg-success');
      document.getElementById("3pe33").classList.remove('bg-success');
      document.getElementById("3pe25").classList.remove('bg-success');
      document.getElementById("3pe0").classList.remove('bg-success');
    }
    if (perk3eff === 0.25) {
      document.getElementById("3pe25").classList.add('bg-success');
      document.getElementById("3pe20").classList.remove('bg-success');
      document.getElementById("3pe33").classList.remove('bg-success');
      document.getElementById("3pe0").classList.remove('bg-success');
    }
    if (perk3eff === 0) {
      document.getElementById("3pe0").classList.add('bg-success');
      document.getElementById("3pe20").classList.remove('bg-success');
      document.getElementById("3pe25").classList.remove('bg-success');
      document.getElementById("3pe33").classList.remove('bg-success');
    }
}
// I'm sorry to every single javascript developer ever
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
