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
import { OrgService } from './organization.service';

@Controller('org')
export class OrgController {
  constructor(private readonly orgService: OrgService) {}

  @Post()
  async addOrg(@Body('name') name: string) {
    const result = await this.orgService.addOrg(name);
    return result;
  }
  @Get('/getAllOrganizations')
  async getAllOrganizations() {
    const result = await this.orgService.getAllOrganizations();
    return result;
  }
}
