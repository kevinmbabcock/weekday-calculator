import { Day } from './../src/day.js';
import $ from 'jquery';

$(document).ready(function() {
  $("form#new-date").submit(function(event) {
    event.preventDefault();
    let daySubmitted = $("input#new-day").val();
    let monthSubmitted = $("input#new-month").val();
    let yearSubmitted = $("input#new-year").val();
    
    $("input#new-day").val("");
    $("input#new-month").val("");
    $("input#new-year").val("");
    
    let day = new Day(daySubmitted, monthSubmitted, yearSubmitted);
    day.validateDay();
    $("#answer").append(day.day + '/' + day.month + '/' + day.year + ' was a: ');
    $("#dayOfWeek").append(day.findDayOfTheWeek());
  });
});