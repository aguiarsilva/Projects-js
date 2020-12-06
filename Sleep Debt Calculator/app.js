//how many hours of sleep user got each night of the week
const getSleepHours = day => {
    switch (day){
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 7;
      break;
      case 'wednesday':
      return 5;
      break;
      case 'thursday':
      return 8;
      break;
      case 'friday':
      return 4;
      break;
      case 'saturday':
      return 8;
      break;
      case 'sunday':
      return 7;
      break;
    }
   };
   
   const getActualSleepHours = () => 
   getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
   
   const getIdealSleepHours = () => {
     const idealHours = 7;
     return idealHours * 7;
   };
   
   const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
     if (actualSleepHours === idealSleepHours) {
       console.log('You had the perfect amount of sleep!');
     } else if (actualSleepHours > idealSleepHours){
       console.log('You had more sleep than needed!');
     } else { 
       console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than your needed this week. Get some rest!');
     };
   };
   
   calculateSleepDebt();