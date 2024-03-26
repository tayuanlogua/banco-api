import { IUpdateUserDto } from 'src/domain/dto/update-user.dto';
import { IUseCase } from '../../../application/interface';
import { UserDomainModel } from '../../../domain/models';
import { IUserService } from '../../../domain/services';
import { Observable, switchMap } from 'rxjs';

/**
 * Clase que representa un caso de uso para actualizar un usuario.
 * Implementa la interfaz IUseCase.
 */
export class UpdateUserUseCase implements IUseCase {
  /**
   * Constructor de la clase UpdateUserUseCase.
   * @param {IUserService} service El servicio de usuario.
   */
  constructor(private readonly service: IUserService) {}

  /**
   * Ejecuta el caso de uso para actualizar un usuario.
   * @param {string} _id El ID del usuario que se va a actualizar.
   * @param {IUpdateUserDto} user El DTO que contiene los datos actualizados del usuario.
   * @returns {Observable<UserDomainModel>} Un observable que emite la entidad de usuario actualizada.
   */
  execute(
    _id: string,
    user: IUpdateUserDto, // Usamos el DTO para los datos actualizados
  ): Observable<UserDomainModel> {
    return this.service.findById(_id).pipe(
      switchMap((entity: UserDomainModel) => {
        const update = new UserDomainModel();
        update.name = user.name || entity.name;
        update.photoUrl = user.photoUrl || entity.photoUrl;
        return this.service.update(_id, update);
      }),
    );
  }
}
