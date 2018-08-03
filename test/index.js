const chalk = require('chalk');

console.log(chalk.bgRed.white(' 10:20:30PM '), chalk.red('Error: This is an error message'));
console.log(chalk.bgBlue.white(' 10:20:30PM '), chalk.blue('Info: This is an info message'));
console.log(chalk.bgGreen.white(' 10:20:30PM '), chalk.green('Success: This is a success message'));
console.log(chalk.bgWhite.black(' 10:20:30PM '), chalk.white('Success: This is a success message'));
console.log('\r\r\n\n');


console.log(chalk.bgHex('#f00').hex('#f1f1f1')(' 10:20:30PM '), chalk.white('Success: This is a success message\r\n'));

// log.error('This is an error');
// log.warn('This is a warning');
// log('This is a default log');
// log.success('This is a success');
// log.info('This is an info');
