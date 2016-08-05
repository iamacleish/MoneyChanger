var exchangeToggled = false;
var hide = 'hideConversionButton';
var show = 'showConversionButton';


//Default USD -> EUR.
function toggleExchange(){
  //Flip exchange to EUR -> USD and display new value.
  if(exchangeToggled === false){
    exchangeToggled = true;
    document.getElementById('usdToEur').className = hide;
    document.getElementById('eurToUsd').className = show;
    $.getJSON("http://api.fixer.io/latest", convertEURtoUSD);


  //Flip exchange back to USD -> EUR and display new value.
  }else if(exchangeToggled === true){
    exchangeToggled = false;
    document.getElementById('usdToEur').className = show;
    document.getElementById('eurToUsd').className = hide;
    $.getJSON("http://api.fixer.io/latest", convertUSDtoEUR);
  }

};
