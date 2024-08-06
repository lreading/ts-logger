import winston from 'winston';

import auditLogTransport from './transports/audit';
import appLogTransport from './transports/app';
import { getConfig } from './config';
import consoleLogTransport from './transports/console';
import Colors  from './colors';
import levels from './levels';
import { TSLogger } from './TSLogger';


const { createLogger, addColors, format } = winston;
const { errors } = format;

addColors(Colors);

export const getLogger = (fileName: string): TSLogger => {
	return createLogger({
		format: errors({ stack: true }),
		level: getConfig().logLevel,
		levels,
		transports: [
			auditLogTransport.get(fileName),
			appLogTransport.get(fileName),
			consoleLogTransport.get(fileName)
		]
	}) as TSLogger;
};
