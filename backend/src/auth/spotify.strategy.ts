import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-spotify';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SpotifyStrategy extends PassportStrategy(Strategy, 'spotify') {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get('spotifyClientId'),
      clientSecret: configService.get('spotifyClientSecret'),
      callbackURL: configService.get('spotifyCallbackURL'),
      scope: ['user-read-private', 'user-read-email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (err: any, user?: any) => void,
  ) {
    const user = { accessToken, refreshToken, profile };
    done(null, user);
  }
}
