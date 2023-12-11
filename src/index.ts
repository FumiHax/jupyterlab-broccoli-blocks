import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IBlocklyRegistry, BlocklyRegistry } from 'jupyterlab-broccoli';
import { ITranslator, nullTranslator } from '@jupyterlab/translation';

import { TOOLBOX } from './blocks';
import { getPythonFunctions }  from './python/func';
import { getJsFunctions} from './javascript/func.js';
import { getLuaFunctions } from './lua/func.js';
import { getDartFunctions } from './dart/func.js';
import { getPHPFunctions } from './php/func.js';

/**
 * Initialization data for the jupyterlab-broccoli-blocks extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-broccoli-blocks:plugin',
  autoStart: true,
  requires: [IBlocklyRegistry, ITranslator],
  activate: (app: JupyterFrontEnd, register: IBlocklyRegistry, translator: ITranslator) => {
    console.log(
      'JupyterLab extension jupyterlab-broccoli-blocks is activated!'
    );

    const bregister = (register as BlocklyRegistry);

    // Localization 
    const language = bregister.language;
    import(`./msg/${language}.js`)
    .catch(() => {
      if (language !== 'En') {
        import(`./msg/En.js`)
        .catch(() => {});
      }
    });
    const trans = (translator || nullTranslator).load('jupyterlab');

    bregister.registerToolbox(trans.__('Junk Box'), TOOLBOX);

    var fpython = getPythonFunctions(bregister.generators.get('python'));
    var fjavascript = getJsFunctions(bregister.generators.get('javascript'));
    var fphp = getPHPFunctions(bregister.generators.get('php'));
    var flua = getLuaFunctions(bregister.generators.get('lua'));
    var fdart = getDartFunctions(bregister.generators.get('dart'));

    // @ts-ignore
    bregister.registerCodes('python', fpython);
    // @ts-ignore
    bregister.registerCodes('javascript', fjavascript);
    // @ts-ignore
    bregister.registerCodes('php', fphp);
    // @ts-ignore
    bregister.registerCodes('lua', flua);
    // @ts-ignore
    bregister.registerCodes('dart', fdart);
  }
};

export default plugin;

