// Progression 1 - Create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

// Write your function here
const createManager = (name, age, team, trophies) => [name, age, team, trophies];

// Don't edit the following code
try {
  var manager = createManager(managerName, managerAge, currentTeam, trophiesWon);
} catch (e) {
  // do nothing - expected error
}

// Progression 2 - Create a formation object and return it
var formation = [4, 4, 3];

// Write your function here
const createFormation = (formation) => 
  formation.length === 0 
    ? null 
    : { defender: formation[0], midfield: formation[1], forward: formation[2] };

// Don't edit the following code
try {
  var formationObject = createFormation(formation);
} catch (e) {
  // do nothing
}

// Progression 3 - Filter players that debuted in a specific year
const filterByDebut = (year) => players.filter(({ debut }) => debut === year);

// Progression 4 - Filter players that play at the position
const filterByPosition = (position) => players.filter(({ position: pos }) => pos === position);

// Progression 5 - Filter players that have won a specific award
const filterByAward = (awardName) => 
  players.filter(({ awards }) => awards.some(({ name }) => name === awardName));

// Progression 6 - Filter players that won a specific award a certain number of times
const filterByAwardxTimes = (awardName, noOfTimes) => 
  players.filter(({ awards }) => 
    awards.filter(({ name }) => name === awardName).length === noOfTimes
  );

// Progression 7 - Filter players that won a specific award and belong to a specific country
const filterByAwardxCountry = (awardName, country) => 
  players.filter(({ country: playerCountry, awards }) => 
    playerCountry === country && awards.some(({ name }) => name === awardName)
  );

// Progression 8 - Filter players that meet specific conditions
const filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) => 
  players.filter(({ awards, team: playerTeam, age: playerAge }) => 
    awards.length >= noOfAwards && playerTeam === team && playerAge < age
  );

// Challenge 1 - Sort players by age in descending order
const sortByAge = () => players.slice().sort((a, b) => b.age - a.age);

// Challenge 2 - Sort players by awards count in descending order within a team
const FilterByTeamxSortByNoOfAwards = (team) => 
  !team 
    ? [] 
    : players
        .filter(({ team: playerTeam }) => playerTeam === team)
        .sort((a, b) => b.awards.length - a.awards.length);

// Judgement 1 - Sort players by name for a specific award and country
const SortByNamexAwardxTimes = (awardName, noOfTimes, country) => 
  filterByAwardxTimes(awardName, noOfTimes)
    .filter(({ country: playerCountry }) => playerCountry === country)
    .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB));

// Judgement 2 - Sort players older than a specific age by name
const SortByNamexOlderThan = (age) => 
  !age 
    ? [] 
    : players
        .filter(({ age: playerAge }) => playerAge > age)
        .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
        .map(({ awards, ...rest }) => ({
          ...rest,
          awards: awards.slice().sort((a, b) => b.year - a.year),
        }));