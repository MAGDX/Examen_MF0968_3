# Proyecto AngularJS & TypeScript


## Introducción

En este proyecto utilizaremos **AngularJS** con la libreria de **UI-Routing**. A su vez aplicaremos nociones basicas de **TypeScript** recibidas con la intencion de entender este lenguaje a la par que se simplifica la programacion en **JavaScript** gracias a ello.

La siguiente lista enlaza con los ejercicios realizados a lo largos de estos ultimos dias,como por ejemplo los ejercicios de **Programación Funcional**, **CRUD**s, **Formularios**, **Peticiones HHTP** a un **Servicio REST**, etc...


## Prerequisitos

### Git

- Necesitaremos _git_ para poder gestionar las versiones de nuestro proyecto y crearnos un repositorio. Un buen lugar donde documentarnos para ello es [aqui][git-home].
- Para aprender sobre cómo configurar y descargar git lo puedes hacer [aqui][git-setup].

### NPM y Node.js

- Instalacion de [Node.js][node].
- Ejecutar el comando `npm i --save-dev json-server` para instalar las dependencias correspondientes al _json-server_.
- Ejecutar el comando `npm i --save-dev concurrently` para instalar las dependencias correspondientes a la libreria _concurrently_.
- Ejecutar en consola para instalar los modulos y se nos cree la carpeta node_modules: `npm install`.
- Arrancar el servidor con el comando `npm start`.

## Home

En la pagina inicial nos encontraremos una introducción al proyecto explicandonos la tecnologia asi como un resumen de los ejercicios realizamos.

- **Home**
- **Contratos**
- **Ejercicio Contratos**
- **Libros**
- **About**

## Contratos

Aqui nos encontraremos un ejercicio el cual esta pensado para aplicar los conocimientos acerca de **Programación Funcional** (map, filter, reduce... entre otros).

En estas dos tablas imprimimos tanto todos los contratos como los contratos mapeados según nuestros intereses. A su vez, también es posible la **ordenación** de los registros pulsando en las cabeceras de las tablas, o pulsando en el botón _Filtros_ podemos **filtrar** por nombre en la caja de texto que se nos despliega.

Por último, el botón **Ejercicios** situado a la derecha nos dirige a otra pagina en la cual hay varios enunciados de ejercicios con sus respectivos resultados y soluciones. Este botón nos dirige al mismo sitio que el enlace llamado **Ejercicios Contratos** situado en la pagina **Home**.

## Libros

En esta página nos encontramos con un **CRUD** completo de libros el cual cargamos de un fichero _db.json_ que contiene datos de libros representados como objetos en formato _JSON_. Como todo **CRUD**, podemos listar los libros, consultar su detalle, asi como modificar sus datos y eliminar/crear libros.

Cada vez que realicemos alguna acción se nos notificara si ha sido correcta o incorrectamente ejecutada.

## About

Por último, nos encontramos en la página donde se documenta este proyecto asi como se presenta una breve descripción del autor.

## Documentación

Para más información de AngularJS: https://angularjs.org/.

Para más información de TypeScript: https://www.typescriptlang.org/.

Repositorio del proyecto en GitHub: https://github.com/MAGDX/YoutubeAngularJS/.

[git-home]: https://git-scm.com/
[git-setup]: https://help.github.com/articles/set-up-git
[node]: https://nodejs.org/
