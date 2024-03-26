import { AuthService } from './infrastructure/utils/services/auth.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { UserController } from './infrastructure/controllers/User.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWTConstants } from './infrastructure/persistence/database/mongo/services/secret';

/**
 * Módulo principal de la aplicación.
 * Este módulo es el punto de entrada principal de la aplicación Nest.js.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
      ),
    }),
    InfrastructureModule,
    JwtModule.register({
      global: true,
      secret: JWTConstants.secret,
      signOptions: { expiresIn: '2d' },
    }),
  ],
  controllers: [UserController],
  providers: [AuthService],
})
export class AppModule {}
