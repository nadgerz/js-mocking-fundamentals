/* eslint-disable no-console */
const log = console.log;

const assert = require("assert");
const thumbWar = require("./thumb-war");
const utils = require("./utils");

test("retuens winner", () => {
  const originalGetWinner = utils.getWinner;

  utils.getWinner = (player1, player2) => player1;

  const winner = thumbWar("Stephen A. Ingram", "Kerstin Dengl");

  expect(winner).toBe("Stephen A. Ingram");

  // cleanup

  utils.getWinner = originalGetWinner;
});
