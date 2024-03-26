import { IUserService } from 'src/domain/services';
import { IAuthService } from 'src/domain/services/auth.service';
import { IUseCase } from '../interface';
import {
  CreateUserUseCase,
  DeleteUserUseCase,
  GetAllUsersUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
} from '../use-cases/user/';
import { Observable } from 'rxjs';

/**
 * Clase que actúa como un delegado para ejecutar casos de uso específicos.
 * Implementa la interfaz IUseCase.
 */
export class Delegate implements IUseCase {
  /**
   * Constructor de la clase Delegate.
   * @param {IUserService} userService El servicio de usuario.
   * @param {IAuthService} authService El servicio de autenticación.
   */
  constructor(
    private readonly userService: IUserService,
    private readonly authService: IAuthService,
  ) {}

  private delegate: IUseCase;

  /**
   * Método para ejecutar el caso de uso delegado.
   * @param {...any[]} args Los argumentos necesarios para ejecutar el caso de uso.
   * @returns {Observable<Response>} Un observable que emite la respuesta del caso de uso.
   */
  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  /**
   * Establece el caso de uso delegado para crear un nuevo usuario.
   */
  toCreateUser(): void {
    this.delegate = new CreateUserUseCase(this.userService, this.authService);
  }

  /**
   * Establece el caso de uso delegado para eliminar un usuario.
   */
  toDeleteUser(): void {
    this.delegate = new DeleteUserUseCase(this.userService);
  }

  /**
   * Establece el caso de uso delegado para actualizar un usuario.
   */
  toUpdateUser(): void {
    this.delegate = new UpdateUserUseCase(this.userService);
  }

  /**
   * Establece el caso de uso delegado para obtener un usuario.
   */
  toGetUser(): void {
    this.delegate = new GetUserUseCase(this.userService, this.authService);
  }

  /**
   * Establece el caso de uso delegado para obtener todos los usuarios.
   */
  toGetAllUsers(): void {
    this.delegate = new GetAllUsersUseCase(this.userService);
  }
}
