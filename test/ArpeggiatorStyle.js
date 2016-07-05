"use strict";

const assert = require("power-assert");
const ArpeggiatorStyle = require("../ArpeggiatorStyle");

const chord = [ 0, 5, 4, 2, 1, 3 ];

assert.deepEqual(ArpeggiatorStyle["Up"](chord), [ 0, 1, 2, 3, 4, 5 ]);
assert.deepEqual(ArpeggiatorStyle["Down"](chord), [ 5, 4, 3, 2, 1, 0 ]);
assert.deepEqual(ArpeggiatorStyle["UpDown"](chord), [ 0, 1, 2, 3, 4, 5, 4, 3, 2, 1 ]);
assert.deepEqual(ArpeggiatorStyle["DownUp"](chord), [ 5, 4, 3, 2, 1, 0, 1, 2, 3, 4 ]);
assert.deepEqual(ArpeggiatorStyle["UpAndDown"](chord), [ 0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0 ]);
assert.deepEqual(ArpeggiatorStyle["DownAndUp"](chord), [ 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5 ]);
assert.deepEqual(ArpeggiatorStyle["Converge"](chord), [ 0, 5, 1, 4, 2, 3 ]);
assert.deepEqual(ArpeggiatorStyle["Diverge"](chord), [ 3, 2, 4, 1, 5, 0 ]);
assert.deepEqual(ArpeggiatorStyle["ConAndDiverge"](chord), [ 0, 5, 1, 4, 2, 3, 2, 4, 1, 5 ]);
assert.deepEqual(ArpeggiatorStyle["PinkyUp"](chord), [ 0, 5, 1, 5, 2, 5, 3, 5, 4, 5 ]);
assert.deepEqual(ArpeggiatorStyle["PinkyUpDown"](chord), [ 0, 5, 1, 5, 2, 5, 3, 5, 4, 5, 3, 5, 2, 5, 1, 5 ]);
assert.deepEqual(ArpeggiatorStyle["ThumbUp"](chord), [ 0, 1, 0, 2, 0, 3, 0, 4, 0, 5 ]);
assert.deepEqual(ArpeggiatorStyle["ThumbUpDown"](chord), [ 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 4, 0, 3, 0, 2 ]);
