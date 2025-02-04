const { defineConfig, presetUno } = require('unocss');

module.exports = defineConfig({
    presets: [
        presetUno(),
        {
            name: 'unocss-primeui',
            theme: require('./theme'),
            rules: [
                require('./utils/backface'),
                require('./utils/delay'),
                require('./utils/direction'),
                require('./utils/duration'),
                require('./utils/fillMode'),
                require('./utils/iterationCount'),
                require('./utils/playState'),
                require('./utils/timingFunction'),
                require('./utils/preset'),
                require('./utils/enterleave')
            ]
        }
    ]
});
