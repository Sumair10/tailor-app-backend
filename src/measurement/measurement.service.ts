import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Measurement } from './measurement.schema';
import { ShopService } from 'src/shop/shop.service';
import { CustomerService } from 'src/customer/customer.service';
import { Shop } from 'src/shop/shop.schema';

@Injectable()
export class MeasurementService {
  constructor(
    @InjectModel('Measurement') private readonly measurementModel: Model<Measurement>,
    private readonly ShopService: ShopService,
    private readonly CustomerService: CustomerService,
  ) {}
  /*************************** create a folder ***************************/
  async createMeasurement(req): Promise<any> {

  
  
      const newMeasurement = new this.measurementModel(req);
      console.log('new model : ', newMeasurement);
      return await newMeasurement.save();
  }

   /*************************** delete a measurement ***************************/
   async deleteMeasurement(measurementId: string): Promise<any> {
    let measurement;

    try {
      measurement = await this.measurementModel.findById(measurementId).exec();
    } catch (error) {
      throw new NotFoundException('File not found');
    }
    if (measurement) {
      await this.measurementModel.findByIdAndDelete(measurementId);
      return 'Measurement deleted successfully';
    }
  }
  /*************************** get all projects ***************************/
  // async getAllProjects(id, isAdmin, parent_folder) {
  //   console.log('id', id);
  //   let projects;
  //   //to see if id is a valid ObjectId or not (if not then throw error)
  //   if (isAdmin) {
  //     if (id.match(/^[0-9a-fA-F]{24}$/)) {
  //       projects = await this.folderModel
  //         .find({
  //           organization: id,
  //           project: true,
  //           parent_folder: parent_folder,
  //         })
  //         .populate('created_by');
  //     } else {
  //       throw new BadRequestException('Invalid organization id');
  //     }
  //   } else if (!isAdmin) {
  //     if (id.match(/^[0-9a-fA-F]{24}$/)) {
  //       projects = await this.folderModel
  //         .find({
  //           created_by: id,
  //           project: true,
  //           parent_folder: parent_folder,
  //         })
  //         .populate('created_by');
  //     } else {
  //       throw new BadRequestException('Invalid user id');
  //     }
  //   }
  //   if (projects.length === 0) {
  //     throw new NotFoundException('No projects found');
  //   }
  //   console.log('projects', projects);
  //   return projects;
  // }

  // /*************************** get all folders of a particular folder ***************************/
  // async getFoldersOfFolder(folderId) {
  //   console.log('folderId', folderId);
  //   let folders;
  //   //to see if id is a valid ObjectId or not (if not then throw error)
  //   if (folderId.match(/^[0-9a-fA-F]{24}$/)) {
  //     folders = await this.folderModel
  //       .find({
  //         parent_folder: folderId,
  //         project: false,
  //       })
  //       .populate('created_by');
  //   } else {
  //     throw new BadRequestException('Invalid folder id');
  //   }
  //   if (folders.length === 0) {
  //     throw new NotFoundException('No folders found');
  //   }
  //   console.log('folders', folders);
  //   return folders;
  // }

  // async getAllFoldersOfApp() {
  //   let folders = []
  //   try {
  //     const totalFolders = await this.folderModel.find();
  //     console.log('nameExist', totalFolders);
  //     // if (!totalOrganizations) {
  //     //   const newOrg = new this.orgModel({ name });
  //     //   const org = await this.orgModel.create(newOrg);
  //     //   return { org, status: 'success' };
  //     // } else {
  //     //   return { status: 'fail', message: 'Organization name already exist' };
  //     // }
  //     return totalFolders
  //   } catch (error) {
  //     console.log(error);
  //     throw [404, error.message];
  //   }
  // }
}
