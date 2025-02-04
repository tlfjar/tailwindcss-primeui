import { definePreset, Preset } from 'unocss';
import theme from './theme';
import backface from './utils/backface';
import delay from './utils/delay';
import direction from './utils/direction';
import duration from './utils/duration';
import fillMode from './utils/fillMode';
import iterationCount from './utils/iterationCount';
import playState from './utils/playState';
import timingFunction from './utils/timingFunction';
import preset from './utils/preset';
import enterleave from './utils/enterleave';

export default definePreset({
    name: 'unocss-primeui',
    theme: theme,
    rules: [
        backface,
        delay,
        direction,
        duration,
        fillMode,
        iterationCount,
        playState,
        timingFunction,
        preset,
        enterleave
    ]
});
