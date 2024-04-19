# Utilizar una imagen base que contenga Node.js
FROM node:latest

# Definir variables de entorno
ENV FRONTEND_LOCAL_PORT=80
ENV FRONT_ANGULAR_DOCKER_PORT=4200

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al directorio de trabajo
COPY . .

# Instalar las dependencias del proyecto
RUN npm install

# Exponer el puerto 4200 para acceder al servidor de desarrollo de Angular
EXPOSE ${FRONT_ANGULAR_DOCKER_PORT}

# Ejecutar el servidor de desarrollo de Angular cuando se inicie el contenedor
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

# Utilizar una imagen base que contenga Node.js
# FROM node:latest

# Instalar Angular CLI globalmente
# RUN npm install -g @angular/cli

# Establecer el directorio de trabajo dentro del contenedor
# WORKDIR /app

# Copiar los archivos del proyecto al directorio de trabajo
# COPY . .

# Instalar las dependencias del proyecto
# RUN npm install

# Exponer el puerto 4200 para acceder al servidor de desarrollo de Angular
# EXPOSE 4200

# Ejecutar el servidor de desarrollo de Angular cuando se inicie el contenedor
# CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
