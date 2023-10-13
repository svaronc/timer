// take the arguments from position 2, map to transform strings to numbers then map again to add the miliseconds and then sort (-) to (+);
const args = process.argv
  .slice(2)
  .map(Number)
  .map((time) => time * 1000)
  .sort((a, b) => a - b);

const timer = function (args) {
  if (args.length > 0) {
    // check the array has values
    for (let time of args) {
      //loop each value
      if (time > 0 && !isNaN(time)) {
        //check for negative numbers and NaN
        setTimeout(() => {
          //set time out to write beep each value in the array
          process.stdout.write("Beep  ");
        }, time);
      }
    }
  }
};
// calling the function;
timer(args);
