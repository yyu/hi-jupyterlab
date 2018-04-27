import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_hello extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_hello',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab_hello is activated!');
  }
};

export default extension;
