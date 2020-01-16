const car = {
    carColor: "red",
    carYear: 2015,
    carMake: "Ford",
    carModel: "Mustang"
};

const shelter = [
    "Kippers",
    "Jack",
    "Gypsy",
    "Angus",
    "Seymour Bouts",
    "Sharky"
];

const cody = {
    name: "Cody",
    age: 33,
};

const dustin = {
    name: "Dustin",
    age: 35
};

const mom = {
    name: "Dorothy",
    age: 68
};

const dad = {
    name: "Coleman",
    age: 69
};

const family = [cody, dustin, mom, dad];

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents);
console.log(wardrobe.depth);
console.log(wardrobe.width);

wardrobe.material = "Cedar";

console.log(wardrobe);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);

const key1 = "address";
const key2 = "constructionDate";
const key3 = "cost";
const key4 = "owner";
const key5 = "architect";

console.log(empireStateBuilding[key1]);
console.log(empireStateBuilding[key2]);
console.log(empireStateBuilding[key3]);
console.log(empireStateBuilding[key4]);
console.log(empireStateBuilding[key5]);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool.instructors.partTime);
console.log(nashvilleSoftwareSchool.instructors.fullTime);

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);