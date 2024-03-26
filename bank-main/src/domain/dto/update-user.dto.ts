/**
 * Interfaz que define los campos que pueden ser actualizados para un usuario.
 * @export
 * @interface IUpdateUserDto
 */
export interface IUpdateUserDto {
  /**
   * Nombre del usuario (opcional).
   * @type {string}
   */
  name?: string;

  /**
   * URL de la foto del usuario (opcional).
   * @type {string}
   */
  photoUrl?: string;
}
