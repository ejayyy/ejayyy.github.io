---
title: Docker in my WSL
date: 2020-08-18
tags: ["WSL"]
---
### Install [Docker](https://docs.docker.com/engine/install/ubuntu/)
- `sudo apt-get update`
- `sudo apt remove -y gpg`
- `sudo apt install -y gnupg1`
- `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
- `sudo apt-key fingerprint 0EBFCD88`
- `sudo apt-get install software-properties-common -y`
- `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`
- `sudo apt-get install docker-ce docker-ce-cli containerd.io -y`

#### After install [Docker](https://docs.docker.com/engine/install/linux-postinstall/)
- `sudo groupadd docker`
- `sudo usermod -aG docker $USER`
- Logout
- `newgrp docker`

- `sudo systemctl enable docker`

#### If [WSL](https://scotch.io/bar-talk/trying-the-new-wsl-2-its-fast-windows-subsystem-for-linux)
*[WSL1 can use Docker](https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly) but I would rather choose to use WSL2*
- [Update WSL1 to WSL2](https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel)
- If you failed to install kernal, just right click to installer and then uninstall and reinstall again. ([ref](https://github.com/microsoft/WSL/issues/5014))

### Running
- `sudo docker run hello-world`