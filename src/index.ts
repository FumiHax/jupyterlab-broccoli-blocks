import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IBlocklyRegistry, BlocklyRegistry } from 'jupyterlab-blockly';

import BlocklyBlocks from './blocks';

import * as func_python from './python/func.js';
import * as func_js from './javascript/func.js';
import * as func_lua from './lua/func.js';
import * as func_dart from './dart/func.js';
import * as func_php from './php/func.js';

/**
 * Initialization data for the jupyterlab-blockly-blocks extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-blockly-blocks:plugin',
  autoStart: true,
  requires: [IBlocklyRegistry],
  activate: (app: JupyterFrontEnd, registor: IBlocklyRegistry) => {
    console.log(
      'JupyterLab extension jupyterlab-blockly-blocks is activated!'
    );
    const blockly = (registor as BlocklyRegistry);

    // Localization 
    let language = blockly.language;
    import(`./msg/${language}.js`)
    .catch(() => {
      if (language !== 'En') {
        import(`./msg/En.js`)
        .catch(() => {});
      }
    });

    blockly.registerToolbox('blocks', BlocklyBlocks.Toolbox);
    blockly.registerCode('python', func_python);
    blockly.registerCode('javascript', func_js);
    blockly.registerCode('lua', func_lua);
    blockly.registerCode('dart', func_dart);
    blockly.registerCode('php', func_php);
  }
};

export default plugin;

