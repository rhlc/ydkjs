// convention to use UPPER_CASE and UNDERSCORE for constants
const TAX = 11.18;

var acBalance = 100000;
var phoneCost = 10000;
var accessoryCost = 5000;
var billedAmount = 0;

while (acBalance > 0) {
  // threshold - don't spend 2x the money of phone cost + accessories
  if (acBalance < (phoneCost + accessoryCost) * 2) {
    console.log('out of funds - are you a peasant, bro?');
    break;
  }
  acBalance = acBalance - (phoneCost + accessoryCost);
  billedAmount = phoneCost + accessoryCost;
  updatedBilledAmount = calculateTax(TAX, billedAmount);
  updatedBilledAmount = parseFloat(updatedBilledAmount).toFixed(2);
  console.log('₹ ' + updatedBilledAmount);
}

// adds tax to billedAmount
function calculateTax(TAX, billedAmount) {
  billedAmount = billedAmount * TAX + billedAmount;
  return billedAmount;
}
