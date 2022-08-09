let date;
let month;
let zodiac_sign;
let correctInput = false;

date = parseInt(prompt("Enter the date"));

if (!Number(date) || date > 31) {
  alert("Date is invalid.");
} else {
  month = parseInt(prompt("Enter month"));

  if (!Number(month) || month > 12) {
    alert("Month is invalid.");
  } else if (month == 2 && date > 29) {
    alert("Month is invalid.");
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (date > 30) {
      alert(
        "Please enter valid date, there are only 30 days in April, June, September and November"
      );
    } else if (month == 4) {
      if (date < 20) zodiac_sign = "Aries";
      else zodiac_sign = "Taurus";
    } else if (month == 6) {
      if (date < 21) zodiac_sign = "Gemini";
      else zodiac_sign = "Cancer";
    } else if (month == 9) {
      if (date < 23) zodiac_sign = "Virgo";
      else zodiac_sign = "Libra";
    } else if (month == 11) {
      if (date < 22) zodiac_sign = "Scorpio";
      else zodiac_sign = "Sagittarius";
    }
    correctInput = true;
  } else {
    if (month == 12) {
      if (date < 22) zodiac_sign = "Sagittarius";
      else zodiac_sign = "Capricorn";
    } else if (month == 1) {
      if (date < 20) zodiac_sign = "Capricorn";
      else zodiac_sign = "Aquarius";
    } else if (month == 2) {
      if (date < 19) zodiac_sign = "Aquarius";
      else zodiac_sign = "Pisces";
    } else if (month == 3) {
      if (date < 21) zodiac_sign = "Pisces";
      else zodiac_sign = "Aries";
    } else if (month == 5) {
      if (date < 21) zodiac_sign = "Taurus";
      else zodiac_sign = "Gemini";
    } else if (month == 7) {
      if (date < 23) zodiac_sign = "Cancer";
      else zodiac_sign = "Leo";
    } else if (month == 8) {
      if (date < 23) zodiac_sign = "Leo";
      else zodiac_sign = "Virgo";
    } else if (month == 10) {
      if (date < 23) zodiac_sign = "Libra";
      else zodiac_sign = "Scorpio";
    }
    correctInput = true;
  }
}

if (correctInput == true) {
  alert("Your Zodiac sign is " + zodiac_sign);
  document.location.reload(); // reloads the page in the browser
} else {
  document.location.reload();
}
