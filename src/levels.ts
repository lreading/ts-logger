import winston from 'winston';

const levels: winston.config.AbstractConfigSetLevels = {
	audit: 0,
	fatal: 1,
	error: 2,
	warn: 3,
	info: 4,
	debug: 5,
	silly: 6
};

export default levels;
