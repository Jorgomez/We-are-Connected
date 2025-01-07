# We-are-Connected

We-are-Connected es una aplicación básica de chat donde los usuarios ingresan con su nombre y luego tienen acceso a un chat grupal. Los mensajes enviados en el chat se almacenan en una base de datos; sin embargo, este chat no almacena información de los usuarios en la base de datos. Esto significa que cuando un usuario establece su nombre, no se guarda en la base de datos, por lo que si la aplicación se recarga, la configuración de su nombre no persistirá. Sin embargo, los mensajes permanecerán, por lo que el usuario puede establecer su nombre nuevamente y sus mensajes anteriores seguirán estando allí.

# Importante

Durante el desarrollo de la aplicación We-are-Connected, utilicé varias tecnologías clave para lograr la funcionalidad y el comportamiento deseado. A continuación se detallan las principales tecnologías y cómo se utilizaron:

## Socket.io

Socket.io se utilizó para establecer la conexión entre el cliente y el servidor y para permitir la comunicación en tiempo real.

Implementación: En el servidor, se configuró un endpoint de Socket.io para aceptar conexiones entrantes. En el cliente, se estableció una conexión mediante el uso de la biblioteca socket.io-client.

Funcionalidad: Cada vez que un usuario envía un mensaje, se emite un evento a través de Socket.io que es recibido por el servidor y luego retransmitido a todos los clientes conectados, permitiendo así el chat en tiempo real.

## Redux y Redux Thunk

Uso: Redux se utilizó para manejar el estado global de la aplicación, incluyendo la lista de mensajes del chat. Redux Thunk se utilizó como middleware para manejar acciones asincrónicas.

Implementación: Las acciones de Redux se utilizan para actualizar el estado de la aplicación. Cuando se envía un mensaje, se despacha una acción que utiliza Thunk para realizar una operación asincrónica.

Funcionalidad: Al enviar un mensaje, la acción Thunk se encarga de guardar el mensaje en la base de datos a través de Firebase. También se utiliza Thunk para recuperar los mensajes desde Firebase al iniciar la aplicación.

## Firebase

Uso: Firebase se utilizó para el almacenamiento de los mensajes del chat.

Implementación: Se estableció una conexión con Firebase desde el cliente utilizando la biblioteca de Firebase. Los mensajes se almacenan en una colección dentro de la base de datos de Firestore.

Funcionalidad: Al enviar un mensaje, se guarda en Firebase mediante la acción Thunk mencionada anteriormente. Cuando la aplicación se inicia, se recuperan los mensajes almacenados en Firebase para poblar el estado inicial del chat.

Flujo de Trabajo

Conexión y Comunicación en Tiempo Real: Cuando un usuario se conecta, se establece una conexión de Socket.io entre el cliente y el servidor.
Envío de Mensajes: Al enviar un mensaje, se emite un evento de Socket.io que es manejado por el servidor y retransmitido a todos los usuarios conectados.

Almacenamiento de Mensajes: La acción de envío de mensajes también dispara una acción Thunk que guarda el mensaje en Firebase.
Recuperación de Mensajes: Al iniciar la aplicación, se dispara una acción Thunk que recupera los mensajes almacenados en Firebase y los carga en el estado global de Redux.

## Características

- Funcionalidad de chat grupal
- Los mensajes se almacenan en una base de datos
- Los nombres de usuario no se almacenan en la base de datos

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para fines de desarrollo y prueba.

### Requisitos previos

Asegúrate de tener instalado el siguiente software en tu máquina:

- Node.js
- npm
- Expo CLI
- Nodemon (para reinicios automáticos del servidor durante el desarrollo)

## Instalación

1. **Clona el repositorio:**

   git clone https://github.com/Jorgomez/We-are-Connected.git
   cd We-are-Connected/server

### **Backend (server)**

1. **Navega al directorio del server:**

   cd server

2. **Instala las dependencias:**

   Asegúrate de instalar las dependencias necesarias para que el servidor funcione correctamente.

   npm install

3. **Inicia el servidor:**

   Usa `nodemon` (o `node`) para ejecutar el servidor.

   npm start

   O, si estás usando `nodemon` para reinicios automáticos:

   nodemon index.js

4. **Verifica que el servidor está corriendo:**

   Por defecto, el servidor debería estar disponible en `http://localhost:3000`. Si necesitas cambiar el puerto, edita directamente el archivo de configuración del servidor.

### **Frontend **

1. **Navega al directorio del cliente:**

   cd Front

2. **Instala las dependencias:**

   npm install

3. **Inicia la aplicación con Expo:**

   Asegúrate de tener instalado `Expo CLI` en tu sistema. Luego, ejecuta el siguiente comando para iniciar el cliente:

   npm start

Importante 4. **Prueba la aplicación:**

Una vez que el servidor y el cliente estén ejecutándose, abre la aplicación en tu emulador o dispositivo físico usando la aplicación de Expo. Escanea el código QR generado por Expo o selecciona la opción adecuada según tu plataforma. La aplicación fue desarrollada mayoritariamente en iOS, por lo que se recomienda probarla en un emulador de iOS o Android, ya que no se diseñó pensando en la web.

Para ejecutar en un simulador de iOS:

npm run ios

Para ejecutar en un emulador de Android:

npm run android
