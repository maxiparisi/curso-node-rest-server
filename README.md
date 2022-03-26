# WebServer + RestServer

## Instalación
```sh
npm install (para reconstruir los modulos de node)
```


## Características

- servidor express, con configuracion basica de cors 
- endpoints de ejemplo (post, put, get, patch, delete)
- rutas manejadas desde un archivo para no mezclarla con otro codigo
- logica de respuestas a cada endpoints se modulariza en controller
- logica del server y su configuracion encapsulada en una clase (Server.js)
- el Server incluye middlewares (para cors, public y procesar json en los body request)


## Paquetes utilizados


| Paquete | URL |
| ------ | ------ |
| express | [http://expressjs.com][express] |
| cors | [https://github.com/expressjs/cors#readme][cors] |
| dotenv | [https://github.com/motdotla/dotenv#readme][dotenv] |



   [express]: <http://expressjs.com>
   [cors]: <https://github.com/expressjs/cors#readme>
   [dotenv]: <https://github.com/motdotla/dotenv#readme>

