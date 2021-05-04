## ABM para películas y usuarios

Herramientas utilizadas -> NodeJS, Express, Passport y Bcrypt, Multer, Mongo Atlas. Incluye:

-Base de datos en Mongo Atlas con listado de películas y usuarios registrados <br />
-Distinción de accesos a los registros, según si el usuario esta registrado o no, y si posee permiso de administrador<br />
-Alta, baja y modificación tanto de películas como de usuarios, asi como posibilidad de subir imágenes.<br />
-Contraseñas encriptadas <br /> <br />

Rutas: <br />

-GET /movies ->Requiere autenticación de usuario <br />
-GET /movies/:id -> Requiere autenticaación de usuario <br />
-POST /movies -> Requiere administrador <br />
-PUT /movies/edit/:id -> Requiere administrador <br />
-DELETE /movies/delete/:id -> Requiere administrador <br /> <br />
-GET /users -> No requiere autenticación <br />
-GET /users/:id -> No requiere autenticación <br />
-POST /users -> No requiere autenticación <br />
-PUT /users/edit/:id -> Requiere administrador <br />
-DELETE /users/delete/:id -> Requiere administrador <br /> <br />
-POST /login <br />
-GET /verify <br /> <br />

test administrador: Martin <br />
test pass: martin123 <br /> <br />
*Para poder testear la API se recomienda hacerlo de forma local utilizando Postman, ya que por restricciones de las plataformas no se pueden setear cookies para las versiones gratuitas.*

![image](https://user-images.githubusercontent.com/48074105/117022989-15ddd780-accf-11eb-9bd9-ec1af21d647a.png)
