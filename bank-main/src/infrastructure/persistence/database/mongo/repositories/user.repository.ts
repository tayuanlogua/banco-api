import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { UserDocument, UserMongo } from '../schemas/user.schema';
import { IBaseRepository } from './Interface';

/**
 * Repositorio para interactuar con la colección de usuarios en MongoDB.
 * Implementa la interfaz IBaseRepository<UserMongo>.
 */
@Injectable()
export class UserRepository implements IBaseRepository<UserMongo> {
  /**
   * Constructor del repositorio UserRepository.
   * @param {Model<UserDocument>} repository Modelo Mongoose para la colección de usuarios.
   */
  constructor(
    @InjectModel(UserMongo.name)
    private readonly repository: Model<UserDocument>,
  ) {}

  /**
   * Crea un nuevo usuario en la base de datos.
   * @param {UserMongo} entity El usuario a crear.
   * @returns {Observable<UserMongo>} Un observable que emite el usuario creado.
   */
  create(entity: UserMongo): Observable<UserMongo> {
    return from(this.repository.create(entity));
  }

  /**
   * Encuentra un usuario por su ID de Google en la base de datos.
   * @param {string} id El ID de Google del usuario a buscar.
   * @returns {Observable<UserMongo>} Un observable que emite el usuario encontrado.
   */
  findById(id: string): Observable<UserMongo> {
    return from(this.repository.findOne({ googleId: id }));
  }

  /**
   * Elimina un usuario de la base de datos por su ID.
   * @param {string} _id El ID del usuario a eliminar.
   * @returns {Observable<UserMongo>} Un observable que emite el usuario eliminado.
   */
  delete(_id: string): Observable<UserMongo> {
    return from(this.repository.findByIdAndDelete(_id));
  }

  /**
   * Obtiene todos los usuarios de la base de datos.
   * @returns {Observable<UserMongo[]>} Un observable que emite un array de usuarios.
   */
  findAll(): Observable<UserMongo[]> {
    return from(this.repository.find().exec());
  }

  /**
   * Actualiza un usuario en la base de datos.
   * @param {string} _id El ID del usuario a actualizar.
   * @param {UserMongo} entity Los datos actualizados del usuario.
   * @returns {Observable<UserMongo>} Un observable que emite el usuario actualizado.
   */
  update(_id: string, entity: UserMongo): Observable<UserMongo> {
    return from(this.repository.findByIdAndUpdate(_id, entity, { new: true }));
  }
}
