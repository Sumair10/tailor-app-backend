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
import { MeasurementService } from './measurement.service';

@Controller('measurement')
export class MeasurementController {
  constructor(private readonly measurementService: MeasurementService) {}

  @Post()
  async createMeasurement(@Req() req: Request) {
    console.log('req.body', req.body);
    return await this.measurementService.createMeasurement(req.body);
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
