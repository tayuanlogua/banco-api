import { IUseCase } from '../../../application/interface';
import { UserDomainModel } from '../../../domain/models';
import { IUserService } from '../../../domain/services';
import { Observable } from 'rxjs';

/**
 * Clase que representa un caso de uso para eliminar un usuario.
 * Implementa la interfaz IUseCase.
 */
export class DeleteUserUseCase implements IUseCase {
  /**
   * Constructor de la clase DeleteUserUseCase.
   * @param {IUserService} service El servicio de usuario.
   */
  constructor(private readonly service: IUserService) {}

  /**
   * Ejecuta el caso de uso para eliminar un usuario.
   * @param {string} _id El ID del usuario que se va a eliminar.
   * @returns {Observable<UserDomainModel>} Un observable que emite la entidad de usuario eliminada.
   */
  execute(_id: string): Observable<UserDomainModel> {
    return this.service.delete(_id);
  }
}
