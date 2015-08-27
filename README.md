# ABLETON LIVE UTILS
[![Build Status](http://img.shields.io/travis/mohayonao/ableton-live-utils.svg?style=flat-square)](https://travis-ci.org/mohayonao/ableton-live-utils)
[![NPM Version](http://img.shields.io/npm/v/@mohayonao/ableton-live-utils.svg?style=flat-square)](https://www.npmjs.org/package/@mohayonao/ableton-live-utils)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> utility functions

## Installation

Node.js

```sh
npm install @mohayonao/ableton-live-utils
```

## Examples

```js
import convertFineIntoDetune from "@mohayonao/utils/convertFineIntoDetune";

let audioContext = new AudioContext();
let oscillator = audioContext.createOscillator();

oscillator.detune.value = convertFineIntoDetune(7);
```

## API
### Operator

- `convertFineIntoRatio(fine: number): number`
- `convertFineIntoDetune(fine: number): number`

## License
MIT
