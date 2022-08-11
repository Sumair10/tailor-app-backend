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
import { FileService } from './file.service';
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
  @Post('/reciveNanonetsData')
  async GetNanonetsData(@Body() data: any) {
    console.log("data",data)
    await this.fileService.getNanonetsData(data);
  }
  @Post()
  async addFile(@Req() req: Request) {
    console.log('req.body', req.body);
    return await this.fileService.addFile(req.body);
  }
  @Get('/getAllFilesOfFolder/:id')
  async getAllFilesOfFolder(@Param('id') parent_folder_id: string) {
    const result = await this.fileService.getAllFiles(parent_folder_id);
    return result;
  }
  @Get('/getAllFilesOfOrganization/:id')
  async getAllFilesOfOrganization(@Param('id') organization: string ) {
    const result = await this.fileService.getAllFilesOfOrganization(organization);
    return result;
  }
  @Delete('/deleteFile/:id')
  async deleteFile(@Param('id') fileId: string) {
    return await this.fileService.deleteFile(fileId);
  }
  @Patch('/nanoNetApi')
  async nanoNetApi(@Body() ids: any): Promise<any> {
    try {
      const num = await this.fileService.nanoNetApi(ids);
      // console.log('num', num);
      return num
    } catch (error) {
      console.log('errorr in controller', error);
      return error
    }
  }
  @Post('/getAllFilesOfFolderIds')
  async getAllFilesOfFolderIds(@Body("ids") ids: Array<string> ) {
    return await this.fileService.getAllFilesOfMultipleFolderIds(ids);
  }

  @Get('/getAllFilesOfApp')
  async getAllFilesOfApp() {
    const result = await this.fileService.getAllFilesOfApp();
    return result;
  }
}