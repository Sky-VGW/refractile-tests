module.exports = { 
    modules: { 
        test1: { 
            // What if there is no bin?
            make: 'emcc --bind -std=c++11 -o wasm-modules/test1.js test-src/test1.cpp  -Os -s MODULARIZE'
        }
    }
}
