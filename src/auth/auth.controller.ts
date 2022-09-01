import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { Auth } from './auth.schema';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  // @Get('/getAllUsersOfApp')
  // async getAllUsersOfApp() {
  //   console.log("inside")
  //   const result = await this.authService.getAllUsersOfApp();
  //   return result;
  // }

  
  
  // @Get('all/:id')
  // async getAllUsersByOrgId(@Param ('id') orgId: string) {
  //   const users = await this.authService.getAllUsersByOrgId(orgId);
  //   return users;
  // }

  @Post()
  async signup(@Req() request: Request) {
    console.log('request', request.body);
    try {
      const result = await this.authService.signup(request.body);
      return result;
    } catch (error) {
      return error;
    }
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const res = await this.authService.signin(email, password);
    return res;
  }

  @Patch('updateUserData')
  async editProfile(@Body("id") userId: String, @Body("userData") userData) {
    const result = await this.authService.editProfile(userId, userData);
    return result;
  }

  // @Post('forgetPassword')
  // async forgetPassword(@Body('email') email: string) {
  //   const result = await this.authService.forgetPassword(email.toLowerCase());
  //   return result;
  // }

  // @Post('updatePassword')
  // async updatePassword(
  //   @Body('email') email: string,
  //   @Body('password') password: string,
  //   @Body('newPassword') newPassword: string,
  // ) {
  //   const result = await this.authService.updatePassword(
  //     email.toLowerCase(),
  //     password,
  //     newPassword,
  //   );
  //   return result;
  // }

  // @Post('updateUserData')
  // async updateUserData(@Req() request: Request) {
  //   const result = await this.authService.updateUserData(request.body);
  //   return result;
  // }

  // @Post('addUserViaEmail')
  // async addUserViaEmail(
  //   @Body('email') email: string,
  //   @Body('organizationId') organizationId: string,
  // ) {
  //   try {
  //     const result = await this.authService.addUserViaEmail(
  //       email.toLowerCase(),
  //       organizationId,
  //     );
  //     return result;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  // @Post('resetPassword')
  // async resetPassword(
  //   @Body('email') email: string,
  //   @Body('newPassword') password: string,
  // ) {
  //   const result = await this.authService.resetPassword(
  //     email.toLowerCase(),
  //     password,
  //   );
  //   return result;
  // }

  // @Patch('updateUserData')
  // async editProfile(@Body("id") userId: String, @Body("userData") userData) {
  //   const result = await this.authService.editProfile(userId, userData);
  //   return result;
  // }


  // @Get('/:id')
  // async getSingleUser(@Param('id') userId: string) {
  //   console.log('hello', userId);
  //   const user = await this.authService.getSingleUser(userId);
  //   return user;
  
  
  // }
 

}
