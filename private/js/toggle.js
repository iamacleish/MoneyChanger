var exchangeToggled = false;
var hide = 'hideConversionButton';
var show = 'showConversionButton';


function toggleExchange(){
  if(exchangeToggled === false){
    exchangeToggled = true;
    document.getElementById('usdToEur').className = hide;
    document.getElementById('eurToUsd').className = show;
  }else if(exchangeToggled === true){
    exchangeToggled = false;
    document.getElementById('usdToEur').className = show;
    document.getElementById('eurToUsd').className = hide;
  }
    console.log($.getJSON("http://api.fixer.io/latest", demo));
};
