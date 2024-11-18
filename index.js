// expecting time to be a string in the format like '8:15' or '12:30'

const numberDictionary = {
  1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
  6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
  11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "quarter",
  16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
  21: "twenty-one", 22: "twenty-two", 23: "twenty-three", 24: "twenty-four", 25: "twenty-five",
  26: "twenty-six", 27: "twenty-seven", 28: "twenty-eight", 29: "twenty-nine", 30: "half"
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if(time === '12:00') {
    return 'midday';
  }


  var timeArray = time.split(":");
  var minutes = parseInt(timeArray[1]);
  var hours = parseInt(timeArray[0]);
  var middleWord = "";
  var minutesToShow = "";
  var finalString = "";

  if(hours > 12){
    hours = hours - 12;
  }

  if(minutes === 0){
    finalString = numberDictionary[hours] + " o'clock";
  }

  else{
    if(minutes > 30){
      middleWord = 'to';
      var minutesLeft = 60 - minutes;
      minutesToShow = numberDictionary[minutesLeft];
      var hoursWhenTo = hours + 1;
      finalString = minutesToShow + " " + middleWord + " " + numberDictionary[hoursWhenTo];
    }

  
    else{
      middleWord = 'past';
      minutesToShow = numberDictionary[minutes];
      finalString = minutesToShow + " " + middleWord + " " + numberDictionary[hours];
    }
  }

    

  return finalString;
}

module.exports = { convertTimeToWords };