/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-dotenv'],
	routes: [
		// TODO: If you don't use routing in your project, comment out all the lines inside routes: []
		{ match: 'routes', src: '/my/path/.*', dest: '/my/path/index.html' },
		/** Ensures that routes will go here such as proxy routes. They have to be inserted after the exact match, and before the catch-all route. */
		{ match: 'routes', src: '.*', dest: '/index.html' },
	],
	optimize: {
		/* bundle for your final build: */
		bundle: true,
		minify: true,
		target: 'es2019',
		splitting: true,
		treeshake: true,
	},
	packageOptions: {},
	devOptions: {},
	buildOptions: {
		// If you don't use routing in your project comment or remove the line below
		baseUrl: '/my/path',
		clean: true,
		out: 'build',
		sourcemap: true,
	},
}
