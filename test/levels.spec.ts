import levels from '../src/levels';

describe('levels.ts', () => {
	it('defines the audit level', () => {
		expect(levels.audit).toEqual(0);
	});

	it('defines the fatal level', () => {
		expect(levels.fatal).toEqual(1);
	});

	it('defines the error level', () => {
		expect(levels.error).toEqual(2);
	});

	it('defines the warn level', () => {
		expect(levels.warn).toEqual(3);
	});

	it('defines the info level', () => {
		expect(levels.info).toEqual(4);
	});

	it('defines the debug level', () => {
		expect(levels.debug).toEqual(5);
	});

	it('defines the silly level', () => {
		expect(levels.silly).toEqual(6);
	});
});
