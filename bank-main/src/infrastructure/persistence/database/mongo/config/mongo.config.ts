import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

/**
 * Servicio de configuración para Mongoose.
 *
 * @export
 * @class MongooseConfigService
 * @implements {MongooseOptionsFactory}
 */
@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  /**
   * Crea una instancia de MongooseConfigService.
   *
   * @constructor
   * @param {ConfigService} configService - Servicio de configuración para acceder a las variables de entorno.
   */
  constructor(private readonly configService: ConfigService) {}

  /**
   * URL de la base de datos MongoDB.
   *
   * @type {string}
   */
  private readonly url = this.configService.get<string>('MONGO_URL');

  /**
   * Crea las opciones de configuración para Mongoose.
   *
   * @returns {MongooseModuleOptions} - Opciones de configuración para Mongoose.
   */
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.url,
      dbName: 'Ali-bank',
    };
  }
}
