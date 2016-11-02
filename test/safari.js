"use strict";

const assert = require("assert");
const test = require("eatest");

class webkitAudioContext {
  createGain() {}
}

class webkitOfflineAudioContext extends webkitAudioContext {}

global.webkitAudioContext = webkitAudioContext;
global.webkitOfflineAudioContext = webkitOfflineAudioContext;

const BaseAudioContext = require("../");

test("BaseAudioContext is webkitAudioContext", () => {
  assert(BaseAudioContext === webkitAudioContext);
});

test("BaseAudioContext.prototype.hasOwnProperty", () => {
  assert(BaseAudioContext.prototype.hasOwnProperty("createGain"));
});
