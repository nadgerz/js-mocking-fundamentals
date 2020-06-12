/* eslint-disable no-console */
const log = console.log;

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  const originalGetWinner = utils.getWinner;

  utils.getWinner = jest.fn((player1, player2) => player1);

  const winner = thumbWar("Stephen A. Ingram", "Kerstin Dengl");

  expect(winner).toBe("Stephen A. Ingram");
  expect(utils.getWinner).toHaveBeenCalledTimes(2)

  // cleanup

  utils.getWinner = originalGetWinner;
});
