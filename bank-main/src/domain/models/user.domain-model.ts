import { IUserDomainModel } from './interfaces/user.domain-model.interface';

/**
 * Clase que representa el modelo de dominio de un usuario.
 * @implements {IUserDomainModel}
 */
export class UserDomainModel implements IUserDomainModel {
  /**
   * ID del usuario.
   * @type {?string}
   */
  _id?: string;

  /**
   * Nombre del usuario.
   * @type {string}
   */
  name: string;

  /**
   * Correo electrónico del usuario.
   * @type {string}
   */
  email: string;

  /**
   * URL de la foto del usuario.
   * @type {string}
   */
  photoUrl: string;

  /**
   * ID de Google del usuario.
   * @type {string}
   */
  googleId: string;
}
