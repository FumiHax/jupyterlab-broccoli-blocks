
import * as Blockly from 'blockly';

import { ToolboxUtils } from './utils';
import { TOOLBOX_BASIC } from './toolbox_basic';
import { TOOLBOX_SPECIAL } from './toolbox_special';

//
const toolboxUtils = new ToolboxUtils();
const TOOLBOX = toolboxUtils.add(TOOLBOX_BASIC, TOOLBOX_SPECIAL, 1);

const BlocklyBlocks = {
  Blocks: Blockly.Blocks,
  Toolbox: TOOLBOX,
};
export default BlocklyBlocks;

//
Blockly.defineBlocksWithJsonArray(
[{
  "type": "text_nocrlf_print",
  "message0": "%{BKY_TEXT_NOCRLF_PRINT}  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXT",
      "check": "String",
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}]);

