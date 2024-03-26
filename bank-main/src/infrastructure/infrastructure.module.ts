import { Module } from '@nestjs/common';
import { MongoModule } from './persistence/database/mongo/mongo.module';
import { UserService } from './services/user.service';

/**
 * Módulo para la infraestructura de la aplicación.
 * Este módulo proporciona servicios y configuraciones relacionadas con la infraestructura.
 */
@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class InfrastructureModule {}
