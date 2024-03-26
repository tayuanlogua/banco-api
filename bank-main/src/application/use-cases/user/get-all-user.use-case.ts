import { IUseCase } from '../../../application/interface';
import { UserDomainModel } from '../../../domain/models';
import { IUserService } from '../../../domain/services';
import { Observable } from 'rxjs';

/**
 * Clase que representa un caso de uso para obtener todos los usuarios.
 * Implementa la interfaz IUseCase.
 */
export class GetAllUsersUseCase implements IUseCase {
  /**
   * Constructor de la clase GetAllUsersUseCase.
   * @param {IUserService} service El servicio de usuario.
   */
  constructor(private readonly service: IUserService) {}

  /**
   * Ejecuta el caso de uso para obtener todos los usuarios.
   * @returns {Observable<UserDomainModel[]>} Un observable que emite un array con todas las entidades de usuario.
   */
  execute(): Observable<UserDomainModel[]> {
    return this.service.findAll();
  }
}
