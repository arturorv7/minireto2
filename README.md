
Esta API utiliza Node.JS y Express junto con MySQL para realizar operaciones CRUD con los datos de una base de datos de albumes de rock progresivo.

Instrucciones
    
    
    1.Instala Node.js y npm.
    2.Clona el repositorio usando la aplicacion de escritorio de GitHub o el comando git clone https://github.com/arturorv7/minireto2
    3.Instala los paquetes necesarios con el comando npm install.
    4.Utiliza el comando npm start.
    5.Utiliza la aplicacion para interactuar con la base de datos usando los endpoints predeterminados.

Si se desea, se puede configurar la implementacion de la variable "con" para conectarse a una base de datos diferente. Por ejemplo:
```javascript
var con = mysql.createConnection({
  host 	: 'localhost',
  user 	: 'root',
  password : 'YourPassword',
  database : 'YourDB'
});
```
