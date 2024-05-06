#!/bin/bash

if [[ ! -f server.jar ]]; then
   echo -e "\e[31mServer jar not found, \nPlease restart the CLI !\e[0m"
else
   echo -e "\e[32mServer jar found, \nStarting server...\e[0m"
   java -Xmx4096M -Xms4096M -jar server.jar nogui
fi

$SHELL
