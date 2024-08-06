import winston from 'winston';

import { getConfig } from '../config';
import fileFormat from '../formats/file';

const get = (fileName: string): winston.transport => new winston.transports.File({
	filename: 'app.log',
	level: getConfig().logLevel,
	format: fileFormat.get(fileName),
	silent: getConfig().silent,
	maxsize: getConfig().maxFileSize
});

export default {
	get
};
