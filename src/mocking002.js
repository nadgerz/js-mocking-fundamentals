/* eslint-disable no-console */
const log = console.log;

const assert = require("assert");
const thumbWar = require("./thumb-war");
const utils = require("./utils");

function fn(impl) {
  const mockFn = (...args) => {
    console.log(args);
    return impl(...args);
  };

  return mockfn;
}

const originalGetWinner = utils.getWinner;

utils.getWinner = (player1, player2) => player1;

const winner = thumbWar("Stephen A. Ingram", "Kerstin Dengl");

assert.strictEqual(winner, "Stephen A. Ingram");

// cleanup
utils.getWinner = originalGetWinner;
