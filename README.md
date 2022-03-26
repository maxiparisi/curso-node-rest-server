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

- [npm express]
- [npm cors]
- [npm dotenv] 


## Paquetes utilizados

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Paquete | README |
| ------ | ------ |
| express | [https://www.npmjs.com/package/express][express] |
| cors | [https://www.npmjs.com/package/cors][cors] |
| dotenv | [https://www.npmjs.com/package/dotenv][dotenv] |



   [express]: <http://expressjs.com>
   [cors]: <https://github.com/expressjs/cors#readme>
   [dotenv]: <https://github.com/motdotla/dotenv#readme>

