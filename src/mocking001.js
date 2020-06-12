/* eslint-disable no-console */
const log = console.log;

const assert = require("assert");
const thumbWar = require("./thumb-war");
const utils = require("./utils");

const winner = thumbWar("Stephen A. Ingram", "Kerstin Dengl");

log(winner);
