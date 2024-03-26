import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongo.config';

import { UserRepository } from './repositories/user.repository';
import { UserMongoService } from './services/user.service';
import { UserMongo, UserSchema } from './schemas';

/**
 * Módulo que gestiona la conexión y la interacción con la base de datos MongoDB.
 * Este módulo proporciona servicios, repositorios y configuraciones necesarios para trabajar con MongoDB.
 */
@Module({
  imports: [
    // Configura la conexión a MongoDB utilizando la configuración proporcionada por MongooseConfigService.
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),

    // Define el esquema y el modelo de usuario para la interacción con la colección de usuarios en MongoDB.
    MongooseModule.forFeature([
      {
        name: UserMongo.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [
    // Registra el servicio de configuración de Mongoose.
    MongooseConfigService,

    // Registra el servicio de usuario de MongoDB y el repositorio de usuario.
    UserMongoService,
    UserRepository,
  ],
  exports: [UserMongoService, UserRepository],
})
export class MongoModule {}
