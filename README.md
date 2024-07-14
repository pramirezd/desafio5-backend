# Desafío 5 de Backend con Node y Express

## Instrucciones:
- Se debe utilizar la base de datos "joyas". Si no está creada, las instrucciones son las siguientes:

    - Crear base de datos 'joyas' con el siguiente comando: \
`CREATE DATABASE joyas;`

    - Crear la tabla 'inventario' con el siguiente comando: \
`CREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);`

    - Crear la tabla 'inventario' con el siguiente comando: \
`INSERT INTO inventario values 
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2),
(DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5),
(DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4),
(DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4),
(DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2);`


- Instrucciones generales para cargar el proyecto:

    - Ejecutar comando `npm install` en el directorio **/backend** para instalar las dependencias.

    - Renombrar el archivo '**.env.template**' (que está solo con los nombres de las variables y sin datos) a '**.env**' en el directorio **/backend** y completar la información para configurar las variables de entorno, que son las siguientes:
        - PORT= Corresponde al puerto del backend
        - PGHOST= Corresponde al host de la DB
        - PGUSER= Corresponde al user de la DB
        - PGPASSWORD= Corresponde a la contraseña del user de la DB
        - PGDATABASE= Corresponde a la DB a la que nos conectaremos
        - PGPORT= Corresponde al puerto habilitado para conectarse a la DB

    - Finalmente para ejecutar el proyecto completo, se debe usar el comando `npm run dev` en el directorio **/backend** y luego ingresar en la URL del servidor de frontend.

- Considerar que se utilizó el formato para usar el paquete `pg-format` en base a la documentación del sitio: https://www.npmjs.com/package/pg-format

- Se generará un archivo `report.log` donde quedará un reporte de los eventos/consultas generadas en el backend.

### Pablo Ramírez &copy;