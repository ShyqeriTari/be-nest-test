import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RegisterDTO } from 'src/user/register.dto';
import { UserService } from 'src/user/user.service';
import { ClubService } from 'src/club/club.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';
import { CreateDTO } from 'src/club/create.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private clubService: ClubService,
    private authService: AuthService,
  ) {}

  @Post('/register')
  async register(@Body() registerDTO: RegisterDTO) {
    const user = await this.userService.create(registerDTO);
    const payload = {
      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
  @Post('/login')
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.userService.findByLogin(loginDTO);
    const payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
  @Post('/createClub')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createDTO: CreateDTO) {
    const club = await this.clubService.create(createDTO);

    return club;
  }
  @Get('/getClubs')
  @UseGuards(AuthGuard('jwt'))
  async findAllClubs() {
    const clubs = this.clubService.findAll();

    return clubs;
  }
}
