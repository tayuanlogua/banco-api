import { Observable } from 'rxjs';

/**
 * Interfaz para el repositorio base.
 *
 * @export
 * @interface IBaseRepository
 * @template Entity - Tipo de la entidad del repositorio.
 */
export interface IBaseRepository<Entity> {
  /**
   * Crea una nueva entidad en el repositorio.
   *
   * @param {Entity} entity - La entidad a crear.
   * @returns {Observable<Entity>} - Un observable que emite la entidad creada.
   */
  create(entity: Entity): Observable<Entity>;

  /**
   * Encuentra una entidad por su ID en el repositorio.
   *
   * @param {string} id - El ID de la entidad a buscar.
   * @returns {Observable<Entity>} - Un observable que emite la entidad encontrada.
   *
   * @remarks Este método devuelve la entidad correspondiente al ID proporcionado.
   * Si no se encuentra ninguna entidad con el ID dado, el observable puede emitir un valor nulo o lanzar un error, dependiendo de la implementación del repositorio.
   */
  findById(id: string): Observable<Entity>;
}
