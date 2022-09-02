import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerService } from 'src/customer/customer.service';
import { EmployeeService } from 'src/employee/employee.service';
import { Order } from './order.schema';
import { CustomerModule } from 'src/customer/customer.module';
import { Customer } from 'src/customer/customer.schema';
import { Employee } from 'src/employee/employee.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>
    // private readonly EmployeeService : EmployeeService,
  ) {}
  /*************************** create a folder ***************************/
  async createOrder(req): Promise<any> {
    let customer
    let employee

    console.log('new', req);

      customer = await this.customerModel.findOne({customer_email : req.customer_email})
      console.log('new', customer);
      employee = await this.employeeModel.findOne({email : req.assign_to})
      console.log('new', employee);
    
      const newOrder = new this.orderModel({...req , customer : customer._id , assign_to : employee._id});
      console.log('new model : ', newOrder);
      return await newOrder.save();
    
  }



  async getOrder(orderId: string): Promise<any> {
    let order
     if (orderId.match(/^[0-9a-fA-F]{24}$/)) {
      order = await this.orderModel
         .find({ _id: orderId  })
         .populate('customer')
         .populate('assign_to')
         ;
     } else {
       throw new BadRequestException('Invalid order id');
     }
   
     ////console.log('files', files);
     return order;
   }
 
   async updateOrder(orderId, orderData) {
    let updatedOrder;
    let response;
    try {
      updatedOrder = await this.orderModel.findOne({
        _id: orderId,
      });
    } catch (err) {
      throw new NotFoundException('User does not exist');
    }
    console.log('updatedOrder', updatedOrder);
    const newOrder = {
      ...updatedOrder._doc,
      ...orderData,
    };

    try {
      response = await (
        await this.orderModel.findOneAndUpdate(
          { _id: orderId },
          newOrder,
          {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
          },
        ).populate('customer').populate('assign_to')
      )
    } catch (err) {
      throw new NotFoundException('order not Found');
    }

    console.log('response', response);

    return response;
  }

  async deleteOrder(orderId: string): Promise<any> {
    let order;

    try {
      order = await this.orderModel.findById(orderId).exec();
    } catch (error) {
      throw new NotFoundException('employee not found');
    }
    if (order) {
      await this.orderModel.findByIdAndDelete(orderId);
      return 'order deleted successfully';
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
