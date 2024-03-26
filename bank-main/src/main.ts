import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * Función principal que inicializa la aplicación Nest.js.
 * Se encarga de crear una instancia de la aplicación, configurar tuberías globales de validación,
 * habilitar CORS, iniciar el servidor y mostrar el mensaje de inicio en la consola.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de tuberías globales de validación para manejar la validación de las solicitudes automáticamente.
  app.useGlobalPipes(new ValidationPipe());

  // Habilita CORS para permitir solicitudes desde diferentes dominios.
  app.enableCors();

  // Inicia el servidor en el puerto especificado en el archivo de entorno o en el puerto 3000 por defecto.
  await app.listen(process.env.PORT || 3000);

  // Muestra un mensaje en la consola indicando la URL donde se ejecuta la aplicación.
  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}

// Inicia la aplicación llamando a la función bootstrap().
bootstrap();
