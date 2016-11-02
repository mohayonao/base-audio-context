"use strict";

const assert = require("assert");
const test = require("eatest");

const BaseAudioContext = require("../");

test("BaseAudioContext is undefined", () => {
  assert(typeof BaseAudioContext === "undefined");
});
