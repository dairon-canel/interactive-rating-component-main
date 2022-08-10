let submit_rate = 0;
const BUTTON_CLASSNAME = "rate__element";
const THANKYOU_CLASSNAME = document.getElementById("thank-you__state").className;
const RATING_CLASSNAME = document.getElementById("rating__state").className;
document.getElementById("thank-you__state").className += " element_not_displayed" ;

function handleRatingSubmit() {
  if (submit_rate === 0) {
    window.alert("Please select a rate") ;
  } else {
    document.getElementById("rating__state").className += " element_not_displayed" ;
    document.getElementById("thank-you__state").className = THANKYOU_CLASSNAME;
    document.getElementById("button_thankyou").innerHTML = `You selected ${submit_rate} out of 5`; 
  }
}
function handleThankyouSubmit() {
  document.getElementById("thank-you__state").className += " element_not_displayed";
  document.getElementById("rating__state").className = RATING_CLASSNAME;
  submit_rate = 0;
  setRateButtonsOff();
}

function setRateButtonsOff() {
  for(let i = 1; i <= 5; i++ ){
  document.getElementById(`button_${i}`).className = BUTTON_CLASSNAME;
  }
}

function handleRate(rate){
  setRateButtonsOff();
  document.getElementById(`button_${rate}`).className += " rate__element-selected";
  submit_rate = rate;
}