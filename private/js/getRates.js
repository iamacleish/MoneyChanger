//Gets the latest rate when the page loads.
$(function(){
   $.getJSON("http://api.fixer.io/latest", convertUSDtoEUR);
});

//Gets USD to EUR rate and displays it on the page. fx.base is EUR.
var convertUSDtoEUR = function(data) {
  fx.rates = data.rates;
  var rate = fx(1).from("USD").to(fx.base);
  $("#displayRate").text("$1 = €" + rate.toFixed(4));
};

//Gets EUR to USD rate and displays it on the page. fx.base is EUR.
var convertEURtoUSD = function(data) {
  fx.rates = data.rates;
  var rate = fx(1).from(fx.base).to("USD");
  $("#displayRate").text("€1 = $" + rate.toFixed(4));
};
