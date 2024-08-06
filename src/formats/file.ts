import winston from 'winston';

import defaultFormat from './default';

const get = (fileName: string): winston.Logform.Format => winston.format.combine(
	winston.format.timestamp(),
	winston.format.label({ label: fileName }),
	defaultFormat.get()
);

export default {
	get
};
