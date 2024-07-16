import { RefreshTokenDto, SignInDto, SignUpDto } from '@app/iam';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authenticationService: AuthService,
    ) {}

    @Post('sign-up')
    signUp(@Body() signUpDto: SignUpDto) {
        return this.authenticationService.signUp(signUpDto);
    }

    @Post('sign-in')
    signIn(@Body() signInDto: SignInDto) {
        return this.authenticationService.signIn(signInDto);
    }

    @Post('refreshTokens')
    refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
        return this.authenticationService.refreshTokens(refreshTokenDto);
    }
}
