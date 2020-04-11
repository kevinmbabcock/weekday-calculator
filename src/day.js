export class Day {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  
  checkIsValidDay() {
    if (this.day < 1 || this.day > 31) {
      return "not a valid day of the month";
    } else if (this.day.toString().length > 2) {
      return "days must be 1 or 2 digits";
    } else {
      return 'day is valid ' + this.day;
    }
  };

  checkIsValidMonth() {
    if (this.month < 1 || this.month > 12) {
      return "not a valid month of the year";
    } else if (this.month.toString().length > 2) {
      return "months must be 1 or 2 digits";
    } else {
      return "month is valid";
    }
  };
        
  checkIsValidYear() {
    if (this.year < 1000 || this.year > 9999) {
      return "please enter a year with 4 digits";
    } else if (this.year.toString().length != 4) {
      return "years must be exactly 4 digits, no decimals";
    } else {
      return "year is valid";
    }
  }
  
  checkDateForFebruary() {
    if (this.month === 2 && this.day > 29) {
      return "not a valid day for February";
    } else if (this.year % 4 != 0 && this.day === 29) {
      return "February 29th only exists during a leap year";
    } else {
      return "day is valid";
    }
  }
  
  checkDateForShortMonths() {
    if (this.month === 4 && this.day === 31) {
      return "April only has 30 days";
    } else if (this.month === 6 && this.day === 31) {
      return "June only has 30 days";
    } if (this.month === 9 && this.day === 31) {
      return "September only has 30 days";
    } if (this.month === 11 && this.day === 31) {
      return "November only has 30 days";
    } else {
      return "day is valid";
    }
  }
};

