//from https://nodejs.org/api/readline.html#readline_event_line

// command line events
// homework: CLI Calculqtor + or - -> number1 (or C) -> number2 (or C) -> result

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'CAS-FEE HW CLI> '
});

rl.on('line', (line) => {
    switch(line.trim()) {
        case 'hello':
            console.log('world!');
            break;
        default:
            console.log(`Say what? I might have heard '${line.trim()}'`);
            break;
    }
    rl.prompt();
});
rl.on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});

rl.prompt();

