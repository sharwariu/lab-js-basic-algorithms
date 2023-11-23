let hacker1 = "Kevin Mitnick";
let hacker2 = "David Schrooten";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

let i, cntDriver = 0, cntNavigator = 0;
let lengthNavigator = hacker2.length;
let lengthDriver = hacker1.length;

for (i = 0; i < lengthDriver; i++) {
    cntDriver++;
}

for (i = 0; i < lengthNavigator; i++) {
    cntNavigator++;
}

if (cntDriver < cntNavigator) {
    console.log(`It seems that the navigator has the longest name, it has ${cntNavigator} characters.`);
} else if (cntNavigator < cntDriver) {
    console.log(`The driver has the longest name, it has ${cntDriver} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${cntDriver} characters!.`);
}

for (i = 0; i < lengthDriver; i++) {
    process.stdout.write(hacker1[i].toUpperCase() + " ");
}

console.log();
for (i = lengthNavigator - 1; i >= 0; i--) {
    process.stdout.write(hacker2[i]);
}

console.log();
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

let para1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let cnt = 0;

// Count the number of words in para1
for (i = 0; i < para1.length; i++) {
    // Skip spaces
    while (i < para1.length && para1[i] === ' ') {
        i++;
    }

    // Count words
    if (i < para1.length) {
        cnt++;
        while (i < para1.length && para1[i] !== ' ') {
            i++;
        }
    }
}

console.log(`Number of words in para1: ${cnt}`);

let wordToCount = "et";
cnt = 0;

// Count occurrences of the word "et" with word boundaries
let wordRegex = new RegExp(`\\b${wordToCount}\\b`, 'gi');
cnt = (para1.match(wordRegex) || []).length;

console.log(`Number of occurrences of "${wordToCount}" in para1: ${cnt}`);

let phraseToCheck="taco cat";
i=0;
let ccnt=0;
let j=phraseToCheck.length-1;
while (i < j) {
    // Skip spaces in the forward direction
    while (i < j && phraseToCheck[i] === ' ') {
        i++;
    }

    // Skip spaces in the backward direction
    while (i < j && phraseToCheck[j] === ' ') {
        j--;
    }

    if (phraseToCheck[i] !== phraseToCheck[j]) {
        ccnt++;
    }
    i++;
    j--;
}

if (ccnt === 0) {
    console.log(`${phraseToCheck} is a palindrome`);
} else {
    console.log(`${phraseToCheck} is not a palindrome`);
}