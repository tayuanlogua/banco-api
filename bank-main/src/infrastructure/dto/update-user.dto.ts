import { IsString, IsUrl, MinLength } from 'class-validator';

/**
 * DTO para actualizar los datos de un usuario.
 *
 * @export
 * @class UpdateUserDto
 * @typedef {UpdateUserDto}
 */
export class UpdateUserDto {
  /**
   * Nombre del usuario.
   *
   * @type {string}
   * @memberof UpdateUserDto
   */
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MinLength(1, { message: 'El nombre debe tener al menos 1 carácter' })
  name: string;

  /**
   * URL de la foto del usuario.
   *
   * @type {string}
   * @memberof UpdateUserDto
   */
  @IsUrl(
    { require_tld: false },
    { message: 'La URL de la foto debe ser válida' },
  )
  photoUrl: string;
}
