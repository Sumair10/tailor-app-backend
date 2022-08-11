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
import { Request } from 'express';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Req() req: Request) {
    console.log('req.body', req.body);
    return await this.employeeService.createEmployee(req.body);
  }


  @Delete('/deleteEmployee/:id')
  async deleteEmployee(@Param('id') employeeId: string) {
    return await this.employeeService.deleteEmployee(employeeId);
  }

  // @Post('getAllProjects')
  // async getAllProjects(@Body('id') id: string, @Body('isAdmin') isAdmin: boolean,@Body('parent_folder') parent_folder: string) {
  //   console.log('id', id);
  //   console.log('isAdmin', isAdmin);
  //   const result = await this.folderService.getAllProjects(id, isAdmin, parent_folder);
  //   return result;
  // }

  // @Get('/getFoldersOfFolder/:id')
  // async getFoldersOfFolder(@Param('id') parentFolderId: string) {
  //   console.log('parentFolderId', parentFolderId);
  //   const result = await this.folderService.getFoldersOfFolder(parentFolderId);
  //   return result;
  // }

  // @Get('/getAllFoldersOfApp')
  // async getAllFoldersOfApp() {
  //   const result = await this.folderService.getAllFoldersOfApp();
  //   return result;
  // }
}
