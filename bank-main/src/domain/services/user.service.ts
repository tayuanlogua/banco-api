import { UserDomainModel } from '../../domain/models/user.domain-model';
import { Observable } from 'rxjs';

/**
 * Interfaz que define las operaciones que un servicio de usuario debe implementar.
 * @template Entity Tipo de entidad de usuario.
 */
export interface IUserService<
  Entity extends UserDomainModel = UserDomainModel,
> {
  /**
   * Crea un nuevo usuario.
   * @param entity La entidad de usuario que se va a crear.
   * @returns Un observable que emite la entidad de usuario creada.
   */
  create(entity: Entity): Observable<Entity>;

  /**
   * Busca un usuario por su ID.
   * @param id El ID del usuario a buscar.
   * @returns Un observable que emite la entidad de usuario encontrada, o null si no se encuentra ningún usuario con el ID proporcionado.
   */
  findById(id: string): Observable<Entity>;

  /**
   * Elimina un usuario por su ID.
   * @param id El ID del usuario a eliminar.
   * @returns Un observable que emite la entidad de usuario eliminada.
   */
  delete(id: string): Observable<Entity>;

  /**
   * Actualiza un usuario por su ID.
   * @param id El ID del usuario a actualizar.
   * @param updates Los campos actualizados del usuario.
   * @returns Un observable que emite la entidad de usuario actualizada.
   */
  update(id: string, updates: Partial<Entity>): Observable<Entity>;

  /**
   * Obtiene todos los usuarios.
   * @returns Un observable que emite un array de todas las entidades de usuario.
   */
  findAll(): Observable<Entity[]>;
}
