/*var array = [1,2,3];

function logArrayElements(element, index, array){
  console.log(`${index}:${element}`);
}

function iterativeLog(array) {
  array.forEach(logArrayElements);
}
*/
//var aasf = [ 1, 2, 3];
//var array = [1,2,3];
function iterativeLog(array) {
  array.forEach(function(element, index){
    console.log(`${index}: ${element}`);
  });
}


function iterate(callback){
  var stuff = [3, 2, 4, 56];
  stuff.forEach(callback);
  return stuff;
}

function doToArray(array, callback){
  array.forEach(callback);
}
/*
function logStuff(element, index, array){
 console.log(`${index}:${element}`);
};

function iterativeLog(array) {
  array.forEach(logStuff);
}*/
