import colors from '../src/colors';

describe('colors.js', () => {
	it('defines the fatal color', () => {
		expect(colors.fatal).toEqual('bold underline red');
	});

	it('defines the error color', () => {
		expect(colors.error).toEqual('red');
	});

	it('defines the warn color', () => {
		expect(colors.warn).toEqual('yellow');
	});

	it('defines the audit color', () => {
		expect(colors.audit).toEqual('bold cyan');
	});

	it('defines the info color', () => {
		expect(colors.info).toEqual('blue');
	});

	it('defines the debug color', () => {
		expect(colors.debug).toEqual('green');
	});

	it('defines the silly color', () => {
		expect(colors.silly).toEqual('magenta');
	});
});
