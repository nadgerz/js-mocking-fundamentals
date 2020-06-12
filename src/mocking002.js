/* eslint-disable no-console */
const log = console.log;

const assert = require("assert");
const thumbWar = require("./thumb-war");
const utils = require("./utils");

function fn(impl) {
  const mockFn = (...args) => {
    // log(args);
    mockFn.mock.calls.push(args);
    return impl(...args);
  };

  mockFn.mock = { calls: [] };
  return mockFn;
}

const originalGetWinner = utils.getWinner;

utils.getWinner = fn((player1, player2) => player1);

const winner = thumbWar("Stephen A. Ingram", "Kerstin Dengl");

assert.strictEqual(winner, "Stephen A. Ingram");
// log(utils.getWinner.mock.calls);
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Stephen A. Ingram", "Kerstin Dengl"],
  ["Stephen A. Ingram", "Kerstin Dengl"],
]);

/*
AssertionError [ERR_ASSERTION]: Values have same structure but are not reference-equal:

assert.strictEqual(utils.getWinner.mock.calls, [
  ["Stephen A. Ingram", "Kerstin Dengl"],
  ["Stephen A. Ingram", "Kerstin Dengl"],
]);
 */

// cleanup
utils.getWinner = originalGetWinner;
