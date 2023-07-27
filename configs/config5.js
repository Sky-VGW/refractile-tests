module.exports = {
  preload_cmds: ['mkdir -p wasm-modules'],
  modules: {
    test1: {
      bin: './wasm-modules',
      make: 'emcc --bind -std=c++11 -o wasm-modules/test1.js test-src/test1.cpp  -Os -s MODULARIZE',
    },
  },
};
