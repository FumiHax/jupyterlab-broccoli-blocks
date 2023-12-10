# jupyterlab-broccoli-blocks
Extension template for **jupyterlab-broccoli**

#### for JpuyterLab 4.0.x
* 0.4.x
#### for JpuyterLab 3.6.x
* 0.3.0

## Install
```
pip install jupyterlab-broccoli
https://github.com/fiseki/jupyterlab-broccoli-blocks.git
```
or
```
pip install jupyterlab-broccoli
pip install jupyterlab-broccoli-blocks
```
## Development
* see also jupyterlab-blockly
  * https://github.com/QuantStack/jupyterlab-blockly
 
### Compile
```
git clone https://github.com/fiseki/jupyterlab-broccoli-blocks.git
cd jupyterlab-broccoli-blocks
pip install -e ".[dev]"
jupyter labextension develop . --overwrite
jlpm build
```
