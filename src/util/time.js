import moment from 'moment';
import config from '../../config/index';

const TIME = moment().format(config.timeFormat);

export default TIME;
