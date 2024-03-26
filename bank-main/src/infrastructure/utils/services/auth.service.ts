import { IAuthService } from '../../../domain/services/auth.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, of } from 'rxjs';
import { IUserDomainModel } from 'src/domain/models/interfaces';
import { UserModel } from 'src/infrastructure/models/user.model';

/**
 * Clase que proporciona servicios de autenticación.
 * Implementa la interfaz IAuthService.
 */
@Injectable()
export class AuthService implements IAuthService {
  /**
   * Constructor de la clase AuthService.
   * @param {JwtService} jwtService El servicio JWT para la generación de tokens.
   */
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Genera un token de autenticación para el usuario dado.
   * @param {IUserDomainModel} user El modelo de dominio del usuario para el cual se generará el token.
   * @returns {Observable<{
   *  data: UserModel;
   *  token: string;
   *}>} Un observable que emite un objeto con los datos del usuario y el token generado.
   */
  generateToken(user: IUserDomainModel): Observable<{
    data: UserModel;
    token: string;
  }> {
    return of({
      data: user,
      token: this.jwtService.sign({
        email: user.email,
        name: user.name,
      }),
    });
  }
}
