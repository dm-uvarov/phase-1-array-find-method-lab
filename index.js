// code your solution here
//data for testing
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];

function superbowlWin(someArray) {
    let findRecord = someArray.find(someArray => someArray.result === "W");
    if (findRecord === undefined){
        return undefined
    } else {
    return findRecord.year;
    }    
}

// for test
// console.log(superbowlWin(record));
