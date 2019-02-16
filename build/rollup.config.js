import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify-es'
import minimist from 'minimist'
import sass from 'node-sass'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const argv = minimist(process.argv.slice(2));

const config = {
    input: 'src/index.js',
    output: {
        name: 'vlider',
        exports: 'named',
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        postcss({
            preprocessor: (content, id) => new Promise((resolve, reject) => {
                const result = sass.renderSync({ file: id })
                resolve({ code: result.css.toString() })
            }),
            plugins: [
                autoprefixer
            ],
            sourceMap: true,
            extract: true,
            extensions: ['.scss', '.css']
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

if (argv.format === 'iife') {
    config.plugins.push(uglify())
}

export default config