@echo off
echo Descargando paquetes necesarios...
call npm install

echo Construyendo la aplicación...
call npm run dev

echo Proceso completado!
pause
