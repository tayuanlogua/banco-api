import { NotFoundException } from '@nestjs/common';
import { IUseCase } from '../../../application/interface';
import { UserDomainModel } from '../../../domain/models';
import { IUserService } from '../../../domain/services';
import { IAuthService } from '../../../domain/services/auth.service';
import { Observable, switchMap, throwError } from 'rxjs';

/**
 * Clase que representa un caso de uso para obtener un usuario y generar un token de autenticación.
 * Implementa la interfaz IUseCase.
 */
export class GetUserUseCase implements IUseCase {
  /**
   * Constructor de la clase GetUserUseCase.
   * @param {IUserService} service El servicio de usuario.
   * @param {IAuthService} authService El servicio de autenticación.
   */
  constructor(
    private readonly service: IUserService,
    private readonly authService: IAuthService,
  ) {}

  /**
   * Ejecuta el caso de uso para obtener un usuario y generar un token de autenticación.
   * @param {string} _id El ID del usuario que se va a obtener.
   * @returns {Observable<{ data: UserDomainModel; token: string }>} Un observable que emite un objeto con los datos del usuario obtenido y el token generado.
   */
  execute(_id: string): Observable<{ data: UserDomainModel; token: string }> {
    return this.service.findById(_id).pipe(
      switchMap((user) => {
        return user
          ? this.authService.generateToken(user)
          : throwError(() => new NotFoundException('User not found'));
      }),
    );
  }
}
