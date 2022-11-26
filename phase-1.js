/* Write a function called `stretch`. It should:

- return a promise
- fulfill the promise after 1 second
- print `"done stretching"` once the promise is fulfilled */

function stretch() {
  // Your code here
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(console.log("Done Stretching"));
    }, 1000);
});
}


/* Write a function called runOnTreadmill. It should:

    return a promise
    fulfill the promise after 0.5 seconds
    print "done running on treadmill" once the promise is fulfilled
 */

function runOnTreadmill() {
  return new Promise((resolve, err) => {
    setTimeout(() => {
      resolve(console.log("Done running on treadmill."));
    }, 500)
  })
}


/* Write a function called liftWeights. It should:

    return a promise
    fulfill the promise after 2 seconds
    print "done lifting weights" once the promise is fulfilled
 */

function liftWeights() {
  // Your code here
  return new Promise((resolve, err) => {
    setTimeout(() => {
      resolve(console.log("Done lifting weights."));
    }, 2000)
  })
}


/* Write a function called workout that runs the above functions in a way that 
ensures you begin running on the treadmill after you've finished stretching. 
Begin lifting weights after running on the treadmill. Print "done working out" 
after you've finished lifting weights. */

// Stretch --> Weights -- Treadmill

function workout() {
  // Your code here
  stretch()
  .then(() => liftWeights())
  .then(() => runOnTreadmill())
  .then(() => console.log("Done working out."))
  .catch("Something went wrong..")
}

let promiseArray = [
  stretch(),
  liftWeights(),
  runOnTreadmill()
]

function intensiveWorkOut() {
  Promise.all(promiseArray)
    .then(() => console.log("Done working out"));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out