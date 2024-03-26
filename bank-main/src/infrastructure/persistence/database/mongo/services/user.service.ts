import { IUserService } from '../../../../../domain/services/user.service';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories';
import { UserMongo } from '../schemas/user.schema';

/**
 * Servicio que proporciona métodos para interactuar con la colección de usuarios en MongoDB.
 * Implementa la interfaz IUserService.
 */
@Injectable()
export class UserMongoService implements IUserService {
  /**
   * Constructor del servicio UserMongoService.
   * @param {UserRepository} userRepository Repositorio de usuarios para realizar operaciones de base de datos.
   */
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Crea un nuevo usuario en la base de datos.
   * @param {UserMongo} entity El usuario a crear.
   * @returns {Observable<UserMongo>} Un observable que emite el usuario creado.
   */
  create(entity: UserMongo): Observable<UserMongo> {
    return this.userRepository.create(entity);
  }

  /**
   * Busca un usuario por su ID en la base de datos.
   * @param {string} id El ID del usuario a buscar.
   * @returns {Observable<UserMongo>} Un observable que emite el usuario encontrado.
   */
  findById(id: string): Observable<UserMongo> {
    return this.userRepository.findById(id);
  }

  /**
   * Elimina un usuario de la base de datos por su ID.
   * @param {string} id El ID del usuario a eliminar.
   * @returns {Observable<UserMongo>} Un observable que emite el usuario eliminado.
   */
  delete(id: string): Observable<UserMongo> {
    return this.userRepository.delete(id);
  }

  /**
   * Actualiza un usuario en la base de datos.
   * @param {string} id El ID del usuario a actualizar.
   * @param {UserMongo} entity Los datos actualizados del usuario.
   * @returns {Observable<UserMongo>} Un observable que emite el usuario actualizado.
   */
  update(id: string, entity: UserMongo): Observable<UserMongo> {
    return this.userRepository.update(id, entity);
  }

  /**
   * Obtiene todos los usuarios de la base de datos.
   * @returns {Observable<UserMongo[]>} Un observable que emite un array de usuarios.
   */
  findAll(): Observable<UserMongo[]> {
    return this.userRepository.findAll();
  }
}
