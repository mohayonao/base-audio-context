"use strict";

const assert = require("assert");
const test = require("eatest");

class BaseAudioContext {
  createGain() {}
}

class AudioContext extends BaseAudioContext {}

class OfflineAudioContext extends BaseAudioContext {}

global.AudioContext = AudioContext;
global.OfflineAudioContext = OfflineAudioContext;

const BaseAudioContext2 = require("../");

test("BaseAudioContext is BaseAudioContext", () => {
  assert(BaseAudioContext2 === BaseAudioContext);
});

test("BaseAudioContext.prototype.hasOwnProperty", () => {
  assert(BaseAudioContext2.prototype.hasOwnProperty("createGain"));
});
