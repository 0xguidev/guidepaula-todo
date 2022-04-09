- table of content
    - instalation
        - intalação no Linux
            - Criar diretório de desenvolvimento
            - Instalar Flutter 1.22.6:
            - Instalar android-studio
- description
    Guia de instalação do setup de desenvolvimento do projeto Image Recognition camera. Flutter-1.22.6, 
# instalation
- ## intalação no Linux

    - ### Criar diretório de desenvolvimento

        - ```mkdir $HOME/Development```

        - ```cd $HOME/Development```

    - ### Instalação Flutter 1.22.6:
    
        - dowload usando o wget

            - ``` wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_1.22.6-stable.tar.xz```

        - extrair o diretório do flutter

            - ``` tar xf ./flutter_linux_1.22.6-stable.tar.xz```

        - adicionando o flutter na variavel path. Escolha a opção de acordo com seu SHEL:

            - bash:

                - ```echo 'export PATH="$PATH:$HOME/Development/flutter/bin"' >> $HOME/.bashrc```

            - zsh:

                - ```echo 'export PATH="$PATH:$HOME/Development/flutter/bin"' >> $HOME/.zshrc```

        - Atualizando as configurações rode apenas o comando referente ao seu shell

            - atualizando as configurações no bash

                - ```source $HOME/.bashrc```

            - atualizando as configurações no zsh

                - ```source $HOME/.zshrc```
        
    - ### Instalção google-chrome
        - Entre no diretório de desenvolvimento

            - ```cd $HOME/Development```

        - Clonando o repositório do google chorme aur:
            - ```git clone https://aur.archlinux.org/google-chrome.git```
        - entre no diretótio e compile os pacotes:
            - ```cd $HOME/Development/google-chrome;makepkg -si```

    - ### Instalção android-studio e android-sdk
        
        - Entre no diretório de desenvolvimento

            - ```cd $HOME/Development```

        - clonando o repositorio do android-studio

            - ```git clone https://aur.archlinux.org/android-studio.git```
        
        - clonando o repositorio do android-sdk

            - ```git clone https://aur.archlinux.org/android-sdk.git```
        
    
        - entre no diretótio e compile os pacotes:

            - ```cd $HOME/Development/android-studio;makepkg -si```

            - ```cd $HOME/Development/android-sdk;makepkg -si```

        - Abre o android studio e faça a instalação normal

        - Acesse Plugins e instale o plugin do Flutter e do Dart

        - Acesse MoreTools > Appearance & Behavior > System Settigns > Android SDK > SDK Tools e instale Android SDK Command-line Tools (latest)

        - Rode o comando flutter doctor para ele fazer a configuração do flutter no sistema:
        
        - ```flutter doctor```

        - Ele vai pedir para instalar as licensas do android:

        - ```flutter doctor --android-licenses```

        - Rode o flutter doctor para ver se ocorreu tudo bem. Caso apareca uma menssagem dizendo que os plugins do flutter e do dart nao estão instalados, sabemos que é mentira e você não precisa se preocupar.