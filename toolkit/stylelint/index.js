const { Task } = require('@dotcom-tool-kit/types');
let { waitOnExit } = require('@dotcom-tool-kit/logger');
let { fork } = require('child_process');
const stylelintCliPath = require.resolve('stylelint/bin/stylelint');
const defaultOptions = {
	files: '**/*.{scss,css}',
	config: '.stylelintrc'
};
class Stylelint extends Task {
	constructor(args) {
		super(args);
	}

	async run() {
		// const config = path.join(process.cwd(), 'stylelintrc')
		const options = { ...defaultOptions, ...this.options };
		const args = [`--config=${options.config}`, options.files];
		if (options.fix) args.push('--fix');

		const child = fork(stylelintCliPath, args, { silent: false });
		return waitOnExit('stylelint', child);
	}
}
exports.tasks = [Stylelint];
