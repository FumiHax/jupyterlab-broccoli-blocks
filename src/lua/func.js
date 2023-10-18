//
import { luaGenerator as Lua } from 'blockly/lua';

//
export function getLuaFunctions(generator) {
  var funcs = {};

//
funcs['text_nocrlf_print'] = function(block) {
  const msg = generator.Gene.valueToCode(block, 'TEXT', Lua.ORDER_NONE) || "''";
  return 'io.write' + msg +'\n';
};

  //
  return funcs;
}
