import { configure, getConfig, TsLoggerOptions } from '../src/config';

describe('config.js', () => {
	describe('defaults', () => {
		it('sets the log level to info', () => {
			expect(getConfig().logLevel).toEqual('info');
		});

		it('sets the max log file size to 5MB', () => {
			expect(getConfig().maxFileSize).toEqual(5000000);
		});

		it('sets silent to false', () => {
			expect(getConfig().silent).toEqual(false);
		});

    it('can configure using the defaults without any args', () => {
      expect(configure).not.toThrow();
    });
	});

	describe('custom configuration', () => {
		const custom: TsLoggerOptions = {
			logLevel: 'silly',
			maxFileSize: 1000000,
			silent: true
		};

		beforeEach(() => {
			configure(custom);
		});

		it('sets the log level', () => {
			expect(getConfig().logLevel).toEqual(custom.logLevel);
		});

		it('sets the maxFileSize', () => {
			expect(getConfig().maxFileSize).toEqual(custom.maxFileSize);
		});

		it('sets silent', () => {
			expect(getConfig().silent).toEqual(custom.silent);
		});
	});
});
