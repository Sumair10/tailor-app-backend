import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Org } from './organization.schema';

@Injectable()
export class OrgService {
  constructor(@InjectModel('Organization') private readonly orgModel: Model<Org>) {}

  /*************************************** add new organization ****************************************************/
  async addOrg(org) {
    console.log('org', org);
    let { name } = org;
    console.log('name', name);
    try {
      const nameExist = await this.orgModel.findOne({ name });
      console.log('nameExist', nameExist);
      if (!nameExist) {
        const newOrg = new this.orgModel({ name });
        const org = await this.orgModel.create(newOrg);
        return { org, status: 'success' };
      } else {
        return { status: 'fail', message: 'Organization name already exist' };
      }
    } catch (error) {
      console.log(error);
      throw [404, error.message];
    }
  }
  async getAllOrganizations() {
    let organizations = []
    try {
      const totalOrganizations = await this.orgModel.find();
      console.log('nameExist', totalOrganizations);
      // if (!totalOrganizations) {
      //   const newOrg = new this.orgModel({ name });
      //   const org = await this.orgModel.create(newOrg);
      //   return { org, status: 'success' };
      // } else {
      //   return { status: 'fail', message: 'Organization name already exist' };
      // }
      return totalOrganizations
    } catch (error) {
      console.log(error);
      throw [404, error.message];
    }
  }
}
