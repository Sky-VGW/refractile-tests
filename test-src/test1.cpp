#include <emscripten/bind.h>

using namespace emscripten; 

void setValue(val input, int to) { 
    input.Set("value", to);
}

EMSCRIPTEN_BINDINGS(my_module) { 
    function("setValue", &setValue);
}