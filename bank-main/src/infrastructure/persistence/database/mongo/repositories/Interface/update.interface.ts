import { Observable } from 'rxjs';

/**
 * Interfaz para el repositorio de actualización.
 *
 * @export
 * @interface IUpdateRepository
 * @template Entity - Tipo de la entidad a actualizar.
 */
export interface IUpdateRepository<Entity> {
  /**
   * Actualiza una entidad en la base de datos.
   *
   * @param {string} _id - ID de la entidad a actualizar.
   * @param {Entity} entity - La entidad actualizada.
   * @returns {Observable<Entity>} - Un observable que emite la entidad actualizada.
   *
   * @remarks Esta función actualiza la entidad identificada por el ID proporcionado con los datos de la entidad proporcionada.
   * Se espera que la entidad proporcionada contenga todos los campos necesarios para la actualización.
   */
  update(_id: string, entity: Entity): Observable<Entity>;
}
