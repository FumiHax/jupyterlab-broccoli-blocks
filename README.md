# jupyterlab-broccoli-blocks
Extension template for **jupyterlab-broccoli**

## PyPI Project
* https://pypi.org/project/jupyterlab-broccoli-blocks

## Install
* for devel
```
pip install jupyterlab-broccoli
https://github.com/fiseki/jupyterlab-broccoli-blocks.git
```
or
* for user
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
