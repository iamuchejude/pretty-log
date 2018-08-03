import chalk from 'chalk';
import time from './util/time';
import formatter from './util/fomatter';
import config from '../config/index';

class PrettyLog {
  constructor(str) {
    let message = '';
    message += chalk.bgHex(config.colors.bg.default).hex('#f1f1f1')(` ${time} `);

    return (
      console.log(message, str)
    );
  }

  static error(str) {
    const consoleStr = formatter(str);
    const consoleTime = chalk.bgHex('#f00').hex('#f1f1f1')(` ${time} `);

    return (
      console.log(consoleTime, consoleStr)
    );
  }

  static warn(str) {
    const consoleStr = formatter(str);
    const consoleTime = chalk.bgHex('#f00').hex('#f1f1f1')(` ${time} `);

    return (
      console.log(consoleTime, consoleStr)
    );
  }

  static success(str) {
    const consoleStr = formatter(str);
    const consoleTime = chalk.bgHex('#f00').hex('#f1f1f1')(` ${time} `);

    return (
      console.log(consoleTime, consoleStr)
    );
  }

  static info(str) {
    const consoleStr = formatter(str);
    const consoleTime = chalk.bgHex('#f00').hex('#f1f1f1')(` ${time} `);

    return (
      console.log(consoleTime, consoleStr)
    );
  }
}

export default PrettyLog;
