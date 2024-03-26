import { UserModel } from '../../../../models/user.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

/**
 * Esquema de Mongoose para la colección de usuarios en MongoDB.
 * Extiende el modelo UserModel.
 */
@Schema({
  collection: 'users',
  versionKey: false,
  strict: false,
})
export class UserMongo extends UserModel {
  /**
   * ID único del usuario.
   */
  @Prop({
    type: SchemaTypes.ObjectId,
    auto: true,
  })
  _id?: string;

  /**
   * Nombre del usuario.
   */
  @Prop({ type: String, required: true })
  name: string;

  /**
   * Correo electrónico del usuario.
   * Debe ser único y en minúsculas.
   */
  @Prop({ type: String, required: true, unique: true, lowercase: true })
  email: string;

  /**
   * URL de la foto del usuario.
   */
  @Prop({ type: String, required: true })
  photoUrl: string;

  /**
   * ID de Google del usuario.
   * Debe ser único.
   */
  @Prop({ type: String, required: true, unique: true })
  googleId: string;
}

// Crea el esquema a partir de la clase UserMongo.
export const UserSchema = SchemaFactory.createForClass(UserMongo);

// Define el tipo de documento para el esquema de usuario.
export type UserDocument = HydratedDocument<UserMongo>;
