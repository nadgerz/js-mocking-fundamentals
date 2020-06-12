/* eslint-disable no-console */
const log = console.log;

const assert = require("assert");
const thumbWar = require("./thumb-war");
const utils = require("./utils");

utils.getWinner = (player1, player2) => {
  return player1;
};

const winner = thumbWar("Stephen A. Ingram", "Kerstin Dengl");

log(winner);

assert.strictEqual(winner, "Stephen A. Ingram");
