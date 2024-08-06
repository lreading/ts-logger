import winston from 'winston';

const colors: winston.config.AbstractConfigSetColors = {
	fatal: 'bold underline red',
	error: 'red',
	warn: 'yellow',
	audit: 'bold cyan',
	info: 'blue',
	debug: 'green',
	silly: 'magenta'
};

export default colors;
