import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Delegate } from 'src/application/delegate';
import { AuthService } from '../utils/services/auth.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

/**
 * Controlador para manejar las operaciones relacionadas con los usuarios.
 *
 * @export
 * @class UserController
 * @typedef {UserController}
 */
@Controller()
export class UserController {
  private readonly delegate: Delegate;

  /**
   * Crea una instancia de UserController.
   * @constructor
   * @param {UserService} userService - Servicio de usuario.
   * @param {AuthService} authService - Servicio de autenticación.
   */
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
    this.delegate = new Delegate(userService, authService);
  }

  /**
   * Obtiene un usuario por su ID.
   *
   * @param {string} id - ID del usuario.
   * @returns {Observable<UserModel>} - Usuario encontrado.
   */
  @Get('user/:id')
  getUser(@Param('id') id: string): Observable<UserModel> {
    this.delegate.toGetUser();
    return this.delegate.execute(id);
  }

  /**
   * Crea un nuevo usuario.
   *
   * @param {CreateUserDto} user - Datos del usuario a crear.
   * @returns {Observable<UserModel>} - Usuario creado.
   */
  @Post('user')
  createUser(@Body() user: CreateUserDto): Observable<UserModel> {
    this.delegate.toCreateUser();
    return this.delegate.execute(user);
  }

  /**
   * Actualiza un usuario existente.
   *
   * @param {string} id - ID del usuario a actualizar.
   * @param {UpdateUserDto} user - Datos actualizados del usuario.
   * @returns {Observable<UserModel>} - Usuario actualizado.
   */
  @Put('user/update/:id')
  updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Observable<UserModel> {
    this.delegate.toUpdateUser();
    return this.delegate.execute(id, user);
  }

  /**
   * Elimina un usuario por su ID.
   *
   * @param {string} id - ID del usuario a eliminar.
   * @returns {Observable<UserModel>} - Usuario eliminado.
   */
  @Delete('user/:id')
  deleteUser(@Param('id') id: string): Observable<UserModel> {
    this.delegate.toDeleteUser();
    return this.delegate.execute(id);
  }

  /**
   * Obtiene todos los usuarios.
   *
   * @returns {Observable<UserModel>} - Lista de usuarios.
   */
  @Get('users')
  getUsers(): Observable<UserModel> {
    this.delegate.toGetAllUsers();
    return this.delegate.execute();
  }
}
