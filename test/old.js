"use strict";

const assert = require("assert");
const test = require("eatest");

class AudioContext {
  createGain() {}
}

class OfflineAudioContext extends AudioContext {}

global.AudioContext = AudioContext;
global.OfflineAudioContext = OfflineAudioContext;

const BaseAudioContext = require("../");

test("BaseAudioContext is AudioContext", () => {
  assert(BaseAudioContext === AudioContext);
});

test("BaseAudioContext.prototype.hasOwnProperty", () => {
  assert(BaseAudioContext.prototype.hasOwnProperty("createGain"));
});
