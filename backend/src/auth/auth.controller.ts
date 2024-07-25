import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('spotify')
  @UseGuards(AuthGuard('spotify'))
  async spotifyLogin() {
    // Initiates the Spotify OAuth2 login flow
  }

  @Get('spotify/callback')
  @UseGuards(AuthGuard('spotify'))
  async spotifyLoginCallback(@Req() req, @Res() res) {
    // Handles the Spotify OAuth2 callback and redirects the user
    const user = req.user;
    res.redirect(
      `/welcome?user=${encodeURIComponent(user.profile.displayName)}`,
    );
  }
}
