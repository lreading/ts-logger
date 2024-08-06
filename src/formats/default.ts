import winston from 'winston';

const get = (): winston.Logform.Format => winston.format.printf((info): string => {
    const { label, level, stack, timestamp } = info;
	let { code, message } = info;
	code = code ? `${code} ` : '';
	message = stack || message;

	// Attempt to log objects as well
	if (typeof message !== 'string') {
		try {
			message = JSON.stringify(message);
		} catch (ignore) {
			message = '[Object object]';
		}
	}

	return `${timestamp} [${label}] ${level}: ${code}${message}`;
});

export default {
	get
};
