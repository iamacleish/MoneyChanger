var demo = function(data) {
  fx.rates = data.rates;
  var rate = fx(1).from("GBP").to("USD");
  alert("£1 = $" + rate.toFixed(4));
};
