import { Observable } from 'rxjs';

/**
 * Interfaz que define un caso de uso.
 * @export
 * @interface IUseCase
 * @typedef {IUseCase}
 */
export interface IUseCase {
  /**
   * Ejecuta el caso de uso.
   * @param {...any[]} args Los argumentos necesarios para ejecutar el caso de uso.
   * @returns {Observable<any>} Un observable que emite el resultado del caso de uso.
   */
  execute(...args: any[]): Observable<any>;
}
