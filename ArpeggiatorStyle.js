"use strict";

function Up(list) {
  return toArray(list).sort(asc);
}

function Down(list) {
  return toArray(list).sort(desc);
}

function UpDown(list) {
  list = toArray(list).sort(asc);
  return list.concat(list.slice(1, -1).reverse());
}

function DownUp(list) {
  list = toArray(list).sort(desc);
  return list.concat(list.slice(1, -1).reverse());
}

function UpAndDown(list) {
  list = toArray(list).sort(asc);
  return list.concat(list.slice().reverse());
}

function DownAndUp(list) {
  list = toArray(list).sort(desc);
  return list.concat(list.slice().reverse());
}

function Converge(list) {
  var result = [];
  list = toArray(list).sort(asc);
  while (list.length) {
    result.push(list.shift());
    if (list.length) {
      result.push(list.pop());
    }
  }
  return result;
}

function Diverge(list) {
  return Converge(list).reverse();
}

function ConAndDiverge(list) {
  list = Converge(list);
  return list.concat(list.slice(1, -1).reverse());
}

function PinkyUp(list) {
  list = toArray(list).sort(asc);
  var x = list.pop();
  return list.reduce(laceYX(x), []);
}

function PinkyUpDown(list) {
  list = toArray(list).sort(asc);
  var x = list.pop();
  list = list.concat(list.slice(1, -1).reverse());
  return list.reduce(laceYX(x), []);
}

function ThumbUp(list) {
  list = toArray(list).sort(asc);
  var x = list.shift();
  return list.reduce(laceXY(x), []);
}

function ThumbUpDown(list) {
  list = toArray(list).sort(asc);
  var x = list.shift();
  list = list.concat(list.slice(1, -1).reverse());
  return list.reduce(laceXY(x), []);
}

function toArray(list) {
  return Array.prototype.slice.call(list);
}

function asc(a, b) {
  return a - b;
}

function desc(a, b) {
  return b - a;
}

function laceXY(x) {
  return function(list, y) {
    return list.concat(x, y);
  };
}

function laceYX(x) {
  return function(list, y) {
    return list.concat(y, x);
  };
}

module.exports = {
  Up: Up,
  Down: Down,
  UpDown: UpDown,
  DownUp: DownUp,
  UpAndDown: UpAndDown,
  DownAndUp: DownAndUp,
  Converge: Converge,
  Diverge: Diverge,
  ConAndDiverge: ConAndDiverge,
  PinkyUp: PinkyUp,
  PinkyUpDown: PinkyUpDown,
  ThumbUp: ThumbUp,
  ThumbUpDown: ThumbUpDown,
};
