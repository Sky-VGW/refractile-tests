#include <emscripten/bind.h>

using namespace emscripten; 

int test1(int x, int y) { 
    return x + y;
}

EMSCRIPTEN_BINDINGS(test1) { 
    function("test1", test1);
}