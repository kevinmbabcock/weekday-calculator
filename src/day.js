export class Day {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  
  checkIsValidDay() {
    if (this.day < 1 || this.day > 31) {
      alert("not a valid day of the month");
      return "not a valid day of the month";
    } else if (this.day.toString().length > 2) {
      alert("days must be 1 or 2 digits");
      return "days must be 1 or 2 digits";
    } else {
      return 'day is valid';
    }
  }

  checkIsValidMonth() {
    if (this.month < 1 || this.month > 12) {
      alert("not a valid month of the year");
      return "not a valid month of the year";
    } else if (this.month.toString().length > 2) {
      alert("months must be 1 or 2 digits");
      return "months must be 1 or 2 digits";
    } else {
      return "month is valid";
    }
  }
        
  checkIsValidYear() {
    if (this.year < 1000 || this.year > 9999) {
      alert("please enter a year with 4 digits");
      return "please enter a year with 4 digits";
    } else if (this.year.toString().length != 4) {
      alert("years must be exactly 4 digits, no decimals");
      return "years must be exactly 4 digits, no decimals";
    } else {
      return "year is valid";
    }
  }
  
  checkDateForFebruary() {
    if (this.month ===2 ) {
      if (this.day > 29) {
        alert("not a valid day for February");
        return "not a valid day for February";
      } else if (this.year % 4 != 0 && this.day === 29) {
        alert("February 29th only exists during a leap year");
        return "February 29th only exists during a leap year";
      } else {
        return "day is valid";
      }
    } else {
      return "day is not in February";
    }
  }
  
  checkDateForShortMonths() {
    if (this.month === 4 && this.day === 31) {
      alert("April only has 30 days");
      return "April only has 30 days";
    } else if (this.month === 6 && this.day === 31) {
      alert("June only has 30 days");
      return "June only has 30 days";
    } if (this.month === 9 && this.day === 31) {
      alert("September only has 30 days");
      return "September only has 30 days";
    } if (this.month === 11 && this.day === 31) {
      alert("November only has 30 days");
      return "November only has 30 days";
    } else {
      return "day is valid";
    }
  }
  
  validateDay() {
    this.checkIsValidDay();
    this.checkIsValidMonth();
    this.checkIsValidYear();
    this.checkDateForFebruary();
    this.checkDateForShortMonths();
  }
  
  findDayOfTheWeek() {
    let date = new Date(`${this.month} ${this.day}, ${this.year}`);
    let numericalDay = date.getDay();
    return this.convertToDayName(numericalDay);
  }
  
  convertToDayName(numericalDay) {
    if (numericalDay === 0) {
      return 'Sunday';
    } else if (numericalDay === 1) {
      return 'Monday';
    } else if (numericalDay === 2) {
      return 'Tuesday';
    } else if (numericalDay === 3) {
      return 'Wednesday';
    } else if (numericalDay === 4) {
      return 'Thursday';
    } else if (numericalDay === 5) {
      return 'Friday';
    } else if (numericalDay === 6) {
      return 'Saturday';
    } else {
      return 'Uhhhh.... let\'s try that again...';
    }
  }
}

