const findTheOldest = function (x) {
  x.sort(function (a, b) {
    if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
      return "2025" - b.yearOfBirth - ("2025" - a.yearOfBirth);
    } else {
      return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
    }
  });
  x.map((person) => person.name);
  return x[0];
};

// Do not edit below this line
module.exports = findTheOldest;
