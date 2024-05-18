

const {formatArrayStrings} = require('./arrayManipulation');


function createUserProfiles(names, modifiedNames) {
    const userProfiles = [];
    for (let i = 0; i < names.length; i++) {
        userProfiles.push({
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: i + 1
        });
    }

    return userProfiles;
};

const studentsName = ["Adizatu", "Kofi", "Remi", "Abdulrauf", "Jabril", "Kelvin"];
const numbers = [1, 2, 3, 4, 5, 6];
const modifiedNames = formatArrayStrings(studentsName, numbers);

const userProfiles = createUserProfiles(studentsName, modifiedNames);
console.log(userProfiles);
