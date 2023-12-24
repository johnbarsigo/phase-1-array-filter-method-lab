const driversArray = ["Bobby", "Sammy", "Sally"];

//NO.1

function findMatching(drivers, match) {
    return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase());
  }
const matchFind = findMatching(driversArray, "sammy");
//console.log(matchFind);

  //NO.2

function fuzzyMatch(drivers, match) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(match.toLowerCase()));
}
const matchingDrivers = fuzzyMatch(driversArray, "B");
//console.log(matchingDrivers);

//NO.3

function matchName(drivers, match) {
    return drivers.filter(driver => driver.name.toLowerCase() === match.toLowerCase());
  }