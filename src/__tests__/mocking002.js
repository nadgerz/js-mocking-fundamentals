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

  // console.log(utils.getWinner);
  // console.log(utils.getWinner.toString());
  // console.log(utils.getWinner.mock)

  expect(utils.getWinner.mock.calls).toEqual([
        [ 'Stephen A. Ingram', 'Kerstin Dengl' ],
        [ 'Stephen A. Ingram', 'Kerstin Dengl' ]
      ])

  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith(
    "Stephen A. Ingram",
    "Kerstin Dengl"
  );

  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    "Stephen A. Ingram",
    "Kerstin Dengl"
  );

  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    "Stephen A. Ingram",
    "Kerstin Dengl"
  );

  // cleanup
  utils.getWinner = originalGetWinner;
});
