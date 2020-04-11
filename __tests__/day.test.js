import { Day } from './../src/day.js';

describe('Day', () => {
  const validDate = new Day(2, 6, 1990); //day is always valid
  
  test('should correctly create a new day with day, month, and year', () => {
    expect(validDate.day).toEqual(2);
    expect(validDate.month).toEqual(6);
    expect(validDate.year).toEqual(1990);
  });
  
  test('should correctly determine whether values create a valid date', () => {
    let newDay1 = new Day(0, 7, 2008); //below range
    let newDay2 = new Day(76, 12, 2010); //above range
    let newDay3 = new Day(24.76, 9, 2001); //day is decimal
    expect(newDay1.checkIsValidDay()).toEqual('not a valid day of the month');
    expect(newDay2.checkIsValidDay()).toEqual('not a valid day of the month');
    expect(newDay3.checkIsValidDay()).toEqual('days must be 1 or 2 digits');
    expect(validDate.checkIsValidDay()).toEqual('day is valid 2');
  })
  
  test('should correctly determine whether values create a valid month', () => {
    let newDay1 = new Day(20, 0, 4658); //below range
    let newDay2 = new Day(11, 21, 1001); //above range
    let newDay3 = new Day(17, 4.3, 1999); //month is decimal
    expect(newDay1.checkIsValidMonth()).toEqual('not a valid month of the year');
    expect(newDay2.checkIsValidMonth()).toEqual('not a valid month of the year');
    expect(validDate.checkIsValidMonth()).toEqual('month is valid');
  })
  
  test('should correctly determine whether a year has 4 digits', () => {
    let newDay1 = new Day(11, 10, 100); //invalid year
    let newDay2 = new Day(1, 12, 10000); //invalid year
    let newDay3 = new Day(1, 2, 9948.2); //year is decimal
    expect(newDay1.checkIsValidYear()).toEqual('please enter a year with 4 digits');
    expect(newDay2.checkIsValidYear()).toEqual('please enter a year with 4 digits');
    expect(newDay3.checkIsValidYear()).toEqual('years must be exactly 4 digits, no decimals');
    expect(validDate.checkIsValidYear()).toEqual('year is valid');
  })
  
  test('should correctly determine correct dates for February', () => {
    let newDay = new Day(30, 2, 1989); // invalid day February
    let newDay2 = new Day(29, 2, 1999); //invalid day, not leap year
    let newDay3 = new Day(29, 2, 2004); //valid day, is leap year
    let newDay4 = new Day(20, 2, 2007); //valid day all years
    expect(newDay.checkDateForFebruary()).toEqual('not a valid day for February');
    expect(newDay2.checkDateForFebruary()).toEqual('February 29th only exists during a leap year');
    expect(newDay3.checkDateForFebruary()).toEqual('day is valid');
    expect(newDay4.checkDateForFebruary()).toEqual('day is valid');
    expect(validDate.checkDateForFebruary()).toEqual('day is valid')
  })
  
  test('should prevent April, June, September, and November from having a day greater than 30', () => {
    let newDay = new Day(31, 4, 2001); //no April 31st
    let newDay2 = new Day(31, 6, 2002); //no June 31st
    let newDay3 = new Day(31, 9, 2003); //no Sept 31st
    let newDay4 = new Day(31, 11, 2004); //no Nov 31st
    expect(newDay.checkDateForShortMonths()).toEqual('April only has 30 days');
    expect(newDay2.checkDateForShortMonths()).toEqual('June only has 30 days');
    expect(newDay3.checkDateForShortMonths()).toEqual('September only has 30 days');
    expect(newDay4.checkDateForShortMonths()).toEqual('November only has 30 days');
    expect(validDate.checkDateForShortMonths()).toEqual('day is valid');
  })
})