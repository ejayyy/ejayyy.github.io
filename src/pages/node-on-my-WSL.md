---
title: Node on my WSL
date: 2020-08-27
tags: ["WSL"]
---
### [Node js for WSL](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2)
- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
- You can find a [latest command](https://github.com/nvm-sh/nvm)
- ```
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
- `nvm install node`
- `nvm install --lts`