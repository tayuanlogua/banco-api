/**
 * Interfaz que define el modelo de dominio de un usuario.
 * @export
 * @interface IUserDomainModel
 * @typedef {IUserDomainModel}
 */
export interface IUserDomainModel {
  /**
   * ID del usuario.
   * @type {?string} _id - ID del usuario.
   */
  _id?: string;

  /**
   * Nombre del usuario.
   * @type {string} name - Nombre del usuario.
   */
  name: string;

  /**
   * Correo electrónico del usuario.
   * @type {string} email - Correo electrónico del usuario.
   */
  email: string;

  /**
   * URL de la foto del usuario.
   * @type {string} photoUrl - URL de la foto del usuario.
   */
  photoUrl: string;

  /**
   * ID de Google del usuario.
   * @type {string} googleId - ID de Google del usuario.
   */
  googleId: string;
}
