# Aurora

<p align="center">
  <img height="200" src="https://user-images.githubusercontent.com/87664281/147689618-ac497e39-be08-43c7-8475-3ef946f7bb90.png" />
  <img height="200" src="https://user-images.githubusercontent.com/87664281/148437793-ad389554-c69d-4d08-8972-9b9b4f37703d.png"/>
  <img height="200" src="https://user-images.githubusercontent.com/87664281/147689952-024dd1b9-a29d-4bb3-9ebb-1bcc6ef676d3.png" />
</p>

# Individual Project - Drinks App


## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node, Express, Sequelize.
- Hacer uso de buenas prácticas.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver distintos cocktails junto con información relevante de las mismos utilizando la api externa [thecocktaildb](https://www.thecocktaildb.com/api.php) y a partir de ella poder, entre otras cosas:

  - Buscar variedad de tragos
  - Ver detalle de preparación


#### Tecnologías utilizadas:
- [ ] Javascript
- [ ] React
- [ ] Redux
- [ ] Node
- [ ] Express
- [ ] Sequelize 
- [ ] PostgreSQL
- [ ] CSS


#### Frontend

Aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Pagina inicial__: una landing page con
- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)


<p align="center">
  <img height="200" src="https://user-images.githubusercontent.com/87664281/156478842-c8465a90-3faa-429c-a666-922bc88f0d5e.png
" />
</p>


__Ruta principal__: contiene
- [ ] Input de búsqueda para encontrar drinks por nombre
- [ ] Área donde se vé el listado de drinks con su:
  - Imagen
  - Nombre
- [ ] Botón para ir a la ruta de detalle


<p align="center">
  <img height="200" src="https://user-images.githubusercontent.com/87664281/156478947-ad4ec610-d6e4-4fb8-880a-9c14984ec8eb.png
" />
  <img height="200" src="https://user-images.githubusercontent.com/87664281/156479784-61b2cef2-96e3-4930-bd37-6a3ecef4c572.png
" />
   <img height="200" src="https://user-images.githubusercontent.com/87664281/156479844-fad3d9a8-18d6-447d-b059-48649a1b11f2.png
" />
</p>



__Ruta de detalle del cocktail__: contiene
- [ ] Los campos mostrados en la ruta principal para cada drink (imagen, nombre)
- [ ] How to (como preparar el trago)
- [ ] Botón para volver al Home


<p align="center">
  <img height="200" src="https://user-images.githubusercontent.com/87664281/156479910-d9ecf234-df51-4c0d-bc52-c7f2e1661e0b.png
" />
  <img height="200" src="https://user-images.githubusercontent.com/87664281/156479944-457ca416-3913-4212-8884-6813994799c4.png
" />
  <img height="200" src="![Detail3](https://user-images.githubusercontent.com/87664281/156480294-4e27bdc3-69e4-4a86-9093-5b44b935f4b8.png)
" />
</p>



#### Backend

Servidor en Node/Express con las siguientes rutas:

- [ ] __GET /drinks?name="..."__:
  - Obtener un listado de los tragos que contengan la palabra ingresada como query parameter
 
- [ ] __GET /drinks/{idDrink}__:
  - Obtener el detalle de un trago en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de cocktail


