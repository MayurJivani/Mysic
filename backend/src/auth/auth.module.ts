import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { SpotifyStrategy } from './spotify.strategy';
import configuration from '../config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] }), PassportModule],
  controllers: [AuthController],
  providers: [SpotifyStrategy],
})
export class AuthModule {}
