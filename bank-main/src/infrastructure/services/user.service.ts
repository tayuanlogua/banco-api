import { Injectable } from '@nestjs/common';
import { UserMongoService } from '../persistence';

/**
 * Servicio que proporciona métodos para interactuar con la colección de usuarios en MongoDB.
 * Este servicio es una extensión de UserMongoService.
 */
@Injectable()
export class UserService extends UserMongoService {}
