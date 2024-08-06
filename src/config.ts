export type TsLoggerOptions = {
    logLevel: string;
    maxFileSize: number;
    silent: boolean
};

const defaultConfig: TsLoggerOptions = {
	logLevel: 'info',
	maxFileSize: 5000000,
	silent: false
};

let customConfig: TsLoggerOptions = null;

export const configure = (options?: TsLoggerOptions): void => {
	if (options) {
        customConfig = options;
    }
};

export const getConfig = (): TsLoggerOptions => customConfig || defaultConfig;
