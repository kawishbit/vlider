import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import minimist from "minimist";
import scss from "rollup-plugin-scss";
import sass from "node-sass";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

const argv = minimist(process.argv.slice(2));

const config = {
	input: "src/index.js",
	output: [
		{
			name: "Vlider",
			file: "dist/vlider.umd.js",
			format: "umd",
			sourcemap: true,
			exports: "named",
		},
		{
			name: "Vlider",
			file: "dist/vlider.esm.js",
			format: "es",
			sourcemap: true,
			exports: "named",
		},
		{
			name: "Vlider",
			file: "dist/vlider.min.js",
			format: "iife",
			sourcemap: true,
			exports: "named",
		},
	],
	plugins: [
		scss({
			output: "dist/vlider.css",
			sass: sass,
			watch: "src/sass/",
		}),
		replace({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		commonjs(),
		vue({
			css: true,
			compileTemplate: true,
			template: {
				isProduction: true,
			},
		}),
		buble(),
	],
};

export default config;
