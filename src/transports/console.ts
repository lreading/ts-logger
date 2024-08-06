import winston from 'winston';

import { getConfig } from '../config';
import defaultFormat from '../formats/default';

const { combine, colorize, timestamp, label } = winston.format;

const get = (fileName: string): winston.transport => {
	return new winston.transports.Console({
		level: getConfig().logLevel,
		silent: getConfig().silent,
		format: combine(
			colorize(),
			timestamp(),
			label({ label: fileName }),
			defaultFormat.get()
		)
	});
};

export default {
	get
};
