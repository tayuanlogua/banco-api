import { Observable } from 'rxjs';

/**
 * Interfaz para el repositorio de búsqueda de todas las entidades.
 *
 * @export
 * @interface IFindAll
 * @template Entity - Tipo de la entidad que se busca.
 */
export interface IFindAll<Entity> {
  /**
   * Encuentra todas las entidades en la base de datos.
   *
   * @returns {Observable<Entity[]>} - Un observable que emite un array de entidades encontradas.
   *
   * @remarks Este método recupera todas las entidades del repositorio y las devuelve como un array.
   * El resultado puede estar sujeto a paginación u otros filtros, dependiendo de la implementación del repositorio.
   */
  findAll(): Observable<Entity[]>;
}
