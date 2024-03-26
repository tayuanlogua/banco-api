import { Observable, switchMap } from 'rxjs';
import { UserDomainModel } from '../../../domain/models';
import { IUserService } from '../../../domain/services';
import { IAuthService } from '../../../domain/services/auth.service';
import { IUseCase } from 'src/application/interface';

/**
 * Clase que representa un caso de uso para crear un nuevo usuario.
 * Implementa la interfaz IUseCase.
 */
export class CreateUserUseCase implements IUseCase {
  /**
   * Constructor de la clase CreateUserUseCase.
   * @param {IUserService} userService El servicio de usuario.
   * @param {IAuthService} authService El servicio de autenticación.
   */
  constructor(
    private readonly userService: IUserService,
    private authService: IAuthService,
  ) {}

  /**
   * Ejecuta el caso de uso para crear un nuevo usuario.
   * @param {UserDomainModel} userEntity La entidad de usuario que se va a crear.
   * @returns {Observable<{ data: UserDomainModel; token: string }>} Un observable que emite un objeto con los datos del usuario creado y el token generado.
   */
  execute(
    userEntity: UserDomainModel,
  ): Observable<{ data: UserDomainModel; token: string }> {
    return this.userService
      .create(userEntity)
      .pipe(switchMap((user) => this.authService.generateToken(user)));
  }
}
