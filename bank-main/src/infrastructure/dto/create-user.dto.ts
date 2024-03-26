import { IsNotEmpty, IsString, IsEmail, IsUrl } from 'class-validator';

/**
 * DTO para crear un nuevo usuario.
 *
 * @export
 * @class CreateUserDto
 * @typedef {CreateUserDto}
 */
export class CreateUserDto {
  /**
   * Nombre del usuario.
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name: string;

  /**
   * Correo electrónico del usuario.
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  email: string;

  /**
   * URL de la foto del usuario.
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @IsNotEmpty({ message: 'La URL de la foto es obligatoria' })
  @IsString({ message: 'La URL de la foto debe ser una cadena de texto' })
  @IsUrl({}, { message: 'La URL de la foto debe ser válida' })
  photoUrl: string;

  /**
   * ID de Google del usuario.
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @IsNotEmpty({ message: 'El ID de Google es obligatorio' })
  @IsString({ message: 'El ID de Google debe ser una cadena de texto' })
  googleId: string;
}
