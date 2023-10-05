function toRomanLazy(num) {
  let output = "";
  let romanNumeralToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  } // obj mapping Roman numerals to Arabic values
  
  let romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"] // specify order to consider

  for (let romanNumeral of romanNumeralPriorityOrder) { // loop thru in descending order
    let arabicValue = romanNumeralToArabic[romanNumeral] // get arabic value of current Roman numeral
    let romanValue = Math.floor(num / arabicValue) // calculate how many times current roman numeral should be added to output

    for (let i = 0; i < romanValue; i++) {
      output += romanNumeral // add roman numeral to output the right amt of times
      num -= arabicValue // subtract arabic value from num to deal with remaining digits
    }
  }
  return output
 }

function toRoman(num) {
  let output = ""
  let romanNumeralToArabic = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }
  
  let romanNumeralPriorityOrder = ["M", "CM", "D", "CD", "C", "L", "XL", "X", "IX", "V", "IV", "I"]
  
  for (let romanNumeral of romanNumeralPriorityOrder) {
    let arabicValue = romanNumeralToArabic[romanNumeral]
    let romanValue = Math.floor(num / arabicValue)
    
    for (let i = 0; i < romanValue; i++) {
      output += romanNumeral
      num -= arabicValue
    }
  }
  return output
}
// same solution as toRomanLazy except add the non-standard Roman numerals (IV, IX, XL, CD, CM) in object and array

module.exports = { toRoman, toRomanLazy };
