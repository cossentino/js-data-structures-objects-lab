// Write your solution in this file!



const driver = {};

function updateDriverWithKeyAndValue(driver, key, val) {
  // return new driver with updated value for the key
  let newObj = Object.assign({}, driver);
  newObj[key] = val;
  return newObj;
}



function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
  // return edited version of original driver with updated value for the key
  driver[key] = val;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  // return new obj with deleted key/value pair by key entered as arg
  let newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromDriverByKey(driver, key) {
  // delete key/value pair by key entered as arg from original obj
  delete driver[key];
  return driver;
}