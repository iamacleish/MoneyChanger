$(function(){
   $.getJSON("http://api.fixer.io/latest", convertUSDtoEUR);
});

var convertUSDtoEUR = function(data) {
  fx.rates = data.rates;
  var rate = fx(1).from("USD").to(fx.base);
  $("#displayRate").text("$1 = €" + rate.toFixed(4));
  //console.log("$1 = €" + rate.toFixed(4));
};

var convertEURtoUSD = function(data) {
  fx.rates = data.rates;
  var rate = fx(1).from(fx.base).to("USD");
  $("#displayRate").text("€1 = $" + rate.toFixed(4));
  //console.log("€1 = $" + rate.toFixed(4));
};
