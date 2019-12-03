// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 900);
// // ... fill in the rest yourself ...

// //use the stop process from lecture to loop out once set time is done

let argv =  process.argv.slice(2);
argv = argv.sort((a, b) => a -b);
let timer = 0;
for (const time of argv) {
  timer =  time * 1000;
  if ( argv === []) {
    return console.log(`No alarm!`);
  } else if (time < 0 || time == NaN) {
    timer++
  } else {
  setTimeout(() => {
  process.stdout.write ('\x07')
  }, timer);
}
};