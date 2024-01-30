@echo off 

IF NOT EXIST "server.jar" (
   COLOR 4
   echo Server jar not found,
   echo Please restart the CLI !
) ELSE (
   COLOR A
   echo Server jar found,
   echo Starting server...
   java -Xmx4096M -Xms4096M -jar server.jar nogui
)
pause