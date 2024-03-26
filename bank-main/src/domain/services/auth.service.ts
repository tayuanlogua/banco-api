import { Observable } from 'rxjs';
import { IUserDomainModel } from '../models/interfaces';

/**
 * Interfaz que define las operaciones que un servicio de autenticación debe implementar.
 */
export interface IAuthService {
  /**
   * Genera un token de autenticación para el usuario dado.
   * @param id El usuario para el cual se generará el token de autenticación.
   * @returns Un observable que emite un objeto con los datos del usuario y el token generado.
   */
  generateToken(
    id: IUserDomainModel,
  ): Observable<{ data: IUserDomainModel; token: string }>;
}
