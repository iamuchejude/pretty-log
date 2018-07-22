import chalk from 'chalk';
import time from './util/time';

class PrettyLog {
  constructor(message) {
    return (
      console.log(chalk.bgWhite(time), message)
    );
  }

  static error(message) {
    return console.log(message);
  }

  static warn(message) {
    return console.log(message);
  }

  static success(message) {
    return console.log(message);
  }

  static info(message) {
    return console.log(message);
  }
}

export default PrettyLog;
