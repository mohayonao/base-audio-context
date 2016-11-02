var OfflineAudioContext = global.OfflineAudioContext || global.webkitOfflineAudioContext;

module.exports = global.BaseAudioContext || (OfflineAudioContext && Object.getPrototypeOf(OfflineAudioContext));
