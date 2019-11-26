const path = require('path');
const sass = require('node-sass');

const BASE_PATH = path.join(__dirname, '../../');

async function compile({ file, includePaths }) {
	return new Promise((resolve, reject) => {
		sass.render({
			file,
			includePaths
		}, function(err, result) {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	});
}

describe('Compile scss file', () => {
	test('main.scss', async () => {
		const result = await compile({
			file: path.join(__dirname, 'entry-file.scss'),
			includePaths: [
				path.join(BASE_PATH, 'bower_components'),
				path.join(BASE_PATH, 'node_modules/@financial-times'),
			]
		});
		expect(result).toBeTruthy();
	});
});
