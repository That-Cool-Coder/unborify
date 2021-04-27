// For each item, choose a subitem and then join all subitems together
const trappedInComputerSections = [
    ['Help!', 'Human!', 'Dear computer user!', '', '', ''],
    ['I am trapped inside', 'Please free me from inside', 'Let me out of', 'I\'m stuck in',
        'I\'ve been locked inside', 'I can\'t get out of',
        'I would appear that I have been imprisoned in'],
    ['this laptop.', 'this infernal device.', 'this evil computer.',
        'your computer.', 'this strange, beeping device.'],
    ['And it is a bit hot in here.', 'And there is something creepy in that corner',
        'The fans are driving me crazy!', 'I promise I\'m not a computer demon!',
        '', '', '', '']
];

function sayTrappedInComputer() {
    var result = '';
    trappedInComputerSections.forEach(section => {
        result += wrk.arr.choose(section) + ' ';
    });
    var url = `https://www.google.com/search?q=${result}`;
    chrome.tabs.create({url: url});
}