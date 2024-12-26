// Progression 1:
// We've got some basic info about Karen's home
// Debug the type of data provided
// Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbours) {
    // Concatenate the types of the provided data
    return [typeof address, typeof distanceFromTown, typeof hasNeighbours].join('');
}

// Progression 2:
// Check if the data given is of the right type
// parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    // Check if each parameter is of the expected type
    return [typeof parents, typeof noOfSiblings, typeof isNuclearFamily].every((type, index) => {
        const types = ['string', 'number', 'boolean'];
        return type === types[index];
    });
}

// Progression 3:
// Lily is suspicious about Karen's new friend
// Karen tells her friend's age and even writes it down
// Check which one of those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber) {
    // Return the first value that is NaN
    return [ageInText, ageInNumber].find(value => isNaN(value));
}

// Progression 4:
// Lily gave Karen x sweets
// Karen ate y sweets herself
// On her way to the river, she ate another z sweets every n meters travelled
// Her friend divided the remaining sweets into 2 parts for each
// How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInMeters, metersToTravel) {
    // Check if all inputs are numbers
    if ([totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInMeters, metersToTravel].some(arg => typeof arg !== "number")) {
        return "No sweets for Karen's friend";
    }
    // Calculate remaining sweets
    const remaining = totalNoOfSweets - sweetsConsumedByKaren - (sweetsConsumedInMeters * metersToTravel);
    // Return half of the remaining sweets or 0 if none left
    return remaining > 0 ? remaining / 2 : 0;
}

// Progression 5:
// As Lily moves closer, it gets colder. She checks the temperature on her mobile
// It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit) {
    // Check if the input is a number
    return typeof fahrenheit === "number" ? (fahrenheit - 32) * (5 / 9) : "Technical Error!";
}

// Progression 6:
// Lily can now do multiple things to deal with this
// 1. Take her daughter to a doctor
// 2. Talk to her husband about it
// 3. Counsel her daughter herself
// 4. Lock her daughter in her room
// Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice) {
    // Map choices to actions
    const actions = {
        1: "Take her daughter to a doctor",
        2: "Talk to her husband about it",
        3: "Counsel her daughter herself",
        4: "Lock her daughter in her room"
    };
    // Return the action based on the choice
    return actions[choice] || undefined;
}

// Progression 7:
// Lily realized that she'd hurt her daughter
// All she wants now is for her to stop crying
// She refuses to talk to her but Lily doesn't stop trying
// She tries out multiple things hoping for the best
// Take all of Lily's strategies and concatenate them to a single var
// Separate the strategies by a single space
// Return the length of the complete strategy
function consoleKaren(strategies) {
    // Join strategies with a space and return the length
    return strategies.join(" ").length;
}