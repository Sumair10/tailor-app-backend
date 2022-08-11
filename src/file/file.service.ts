import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { json } from 'express';
import { Model } from 'mongoose';
import { File } from './file.schema';
@Injectable()
export class FileService {
  constructor(@InjectModel('File') private readonly fileModel: Model<File>) {}
  async findOneAndUpdateFile(id: string, data: any): Promise<any> {
    const video = await this.fileModel.findById(id);
    ////console.log('video' , video);
    if (!video) {
      throw new NotFoundException('could not find video.');
    }
    return video;
  }
  /*************************** get nanonets data ***************************/
  async getNanonetsData(data: any): Promise<any> {
    //console.log('data', data);
    let rule_success = true;
    data?.result?.predictions?.forEach((prediction) => {
      if (prediction?.validation_status === 'failed') {
        rule_success = false;
      }
    });
    const newFile = {
      processed_data: data,
      rule_success,
      in_process : true,

    };
    //console.log('newFile', newFile);
    const res = await this.fileModel.findOneAndUpdate(
      { request_file_id: data?.result?.id },
      newFile,
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      },
    );
  }
  /*************************** add file inside a particular folder ***************************/
  async addFile(file: File): Promise<File> {
    // const fileExist = await this.fileModel.findOne({ name: file.name });
    // if (fileExist) {
    //   throw new HttpException(
    //     'File name already exist',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // } else {
    //   const newFile = new this.fileModel(file);
    //   return await newFile.save();
    // }
    const newFile = new this.fileModel(file);
    return await newFile.save();
  }
  /*************************** get all files of a particular folder ***************************/
  async getAllFiles(parent_folder_id: string): Promise<File[]> {
    ////console.log('parent_folder_id', parent_folder_id);
    let files;
    //to see if id is a valid ObjectId or not (if not then throw error)
    if (parent_folder_id.match(/^[0-9a-fA-F]{24}$/)) {
      files = await this.fileModel
        .find({ parent_folder: parent_folder_id })
        .populate('uploaded_by');
    } else {
      throw new BadRequestException('Invalid folder id');
    }
    if (files.length === 0) {
      throw new NotFoundException('No files found');
    }
    ////console.log('files', files);
    return files;
  }

  /*************************** get all files of a organization ***************************/

  async getAllFilesOfOrganization(organization: string): Promise<File[]> {
    ////console.log('parent_folder_id', parent_folder_id);
    let files;
    //to see if id is a valid ObjectId or not (if not then throw error)
    if (organization.match(/^[0-9a-fA-F]{24}$/)) {
      files = await this.fileModel
        .find({ organization: organization  })
        .populate('uploaded_by');
    } else {
      throw new BadRequestException('Invalid organization id');
    }
    if (files.length === 0) {
      throw new NotFoundException('No files found');
    }
    ////console.log('files', files);
    return files;
  }

  /*************************** delete a file ***************************/
  async deleteFile(fileId: string): Promise<any> {
    let file;

    try {
      file = await this.fileModel.findById(fileId).exec();
    } catch (error) {
      throw new NotFoundException('File not found');
    }
    if (file) {
      await this.fileModel.findByIdAndDelete(fileId);
      return 'File deleted successfully';
    }
  }
  async nanoNetApi(idss): Promise<any> {
    
    console.log('iddsss -->', idss);
    var ids = idss.filter(function (el) {
      return el != null;
    });
    console.log('iddsss -->', ids);

    const fs = require('fs');
    let updatedFile;
    let response;
    let fileLength = ids.length;
    let r = [];
    var path = require('path');
    const os = require('os');
    const userHomeDir = os.homedir();
    const osType = os.type();
    let folderName;
    if (osType === 'win32') {
      folderName = userHomeDir + 'kafka';
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
    } else {
      folderName = userHomeDir + '/kafka';
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
    }
    const localPath = userHomeDir;
    // //console.log('home' , userHomeDir + folderName);
    // //console.log( 'os', os.type());
    // let file;
    // file = await this.fileModel.findById(ids[0])
    // ////console.log(file);
    try {
      await Promise.all(
        ids.map(async (fileId) => {
          let file = await this.fileModel.findById(fileId);
          const date = new Date().getTime();

          if (
            file?.model_id_name === 'Signature Detection' ||
            file?.model_id_name === 'Contracts'
          ) {
            
            ////console.log('datteee', date);
            //console.log('fileId', file);
            const MODEL_ID = file?.model_id_type;
            ////console.log( '--------------------------------',MODEL_ID)
            const API_KEY = 'zBJdKfGxi7CFxFlRKPV4dApdaR2AjHtP';
            const fileName = file?.name.substring(0, file?.name.indexOf('.')); // fileName = jis filename se file download krni hai
            console.log('1. *** ' , fileName);
            const extension =
              file?.file_url &&
              file?.file_url.substring(file?.file_url.lastIndexOf('.') + 1); // file ka jo bhi extension
            const file_path = `${folderName}/${fileName}.${extension}`; // filepath = local system mai jahan file save krwani hai wo path
            // const redirect = 'https://alisia.ai/';
            const redirect =window.top.location.href ;
            // const callback = 'https://alisia.ai/';
            const callback = window.top.location.href ;
            const expires = '19:14:11Z'; // expires ki jaga hardcoded nh balkay calculated time from now to 7 days (dynamic)
            const s3File = file?.file_url; //file url jo s3 se read hogi wo url
            const apiCall = async () => {
              console.log('3. this is api call', fileName);
              return new Promise((resolve, reject) => {
                //do api call if resolve then pass the data to resolve
                const request = require('request');
                const form_data = {
                  modelId: MODEL_ID,
                  file: fs.createReadStream(file_path),
                };
                //console.log('form_data', form_data);
                const options = {
                  url: `https://app.nanonets.com/api/v2/OCR/Model/${MODEL_ID}/LabelFile/?async=true`,
                  formData: form_data,
                  headers: {
                    Authorization:
                      'Basic ' + Buffer.from(API_KEY + ':').toString('base64'),
                  },
                };
                //console.log('options', options);
                request.post(options, async function (err, httpResponse, body) {
                  let json = await JSON.parse(body);
                  console.log('4. response 1' , fileName);
                  //console.log('json', json.result);
                  const rfi = json?.result[0]?.request_file_id;
                  //console.log('rfi', rfi);
                  const url =
                    'https://preview.nanonets.com/Inferences/Model/' +
                    MODEL_ID +
                    '/ValidationUrl/' +
                    rfi +
                    '?redirect=' +
                    redirect +
                    '&expires=' +
                    expires +
                    '&callback=' +
                    callback;
                  const options2 = {
                    url: url,
                    headers: {
                      Authorization:
                        'Basic ' +
                        Buffer.from(API_KEY + ':').toString('base64'),
                    },
                  };
                  request.post(options2, function (err, httpResponse, boddy) {
                    let embedurl = boddy;
                  console.log('5. response 2' ,fileName);
                  ////console.log('final nanonet url', embedurl);
                    //console.log('nanoNet json ', boddy);
                    // let processed_data = json;
                    let nanoNet_url = embedurl;
                    //console.log('main file : ====>', file);

                    const newFile = {
                      file,
                      nanoNet_url,
                      request_file_id: rfi,
                      in_process : false,
                    };
                    resolve(newFile);
                  });
                  if (err) {
                    reject(err);
                  }
                });
              });
            };
            // const getUser = await read.getUserLogin(req)
            try {
              console.log("2. this is start" , fileName);
              const requestToDownloadPdf = require('request-promise-native');
              async function downloadPDF(pdfURL, outputFilename) {
                let pdfBuffer = await requestToDownloadPdf.get({
                  uri: pdfURL,
                  encoding: null,
                });
                fs.writeFileSync(outputFilename, pdfBuffer);
              }
              await downloadPDF(s3File, file_path); // function call horha hai pdf krne kelye
              ////console.log('file downloading');
              //yahan se nanonets ki first APi hit hoi hai
            
              try {
                ////console.log('try');
                const rfiRes = await apiCall();
                //console.log('new file : ', rfiRes);
                try {
                  console.log('6. this is end' , fileName);
                  response = await this.fileModel.findByIdAndUpdate(
                    { _id: fileId },
                    rfiRes,
                    {
                      new: true,
                      upsert: true,
                      setDefaultsOnInsert: true,
                    },
                  );
        
                
                } catch (err) {
                  throw new NotFoundException('ERROR');
                }
              } catch (error) {
                //console.log(error);
              }
            } catch (error) {
              throw [404, error.message];
            }
            //console.log('ressspooonsseeee ------------', response);
            r.push(response);



          } else {
            //console.log(' *** this is async false *** ');

            //console.log('fileId', file);

            const MODEL_ID = file?.model_id_type;

            ////console.log( '--------------------------------',MODEL_ID)
            const API_KEY = 'zBJdKfGxi7CFxFlRKPV4dApdaR2AjHtP';
            const fileName = file?.name.substring(0, file?.name.indexOf('.')); // fileName = jis filename se file download krni hai
            const extension =
              file.file_url &&
              file.file_url.substring(file.file_url.lastIndexOf('.') + 1); // file ka jo bhi extension
            const file_path = `${folderName}/${fileName}.${extension}`; // filepath = local system mai jahan file save krwani hai wo path
            const redirect = 'https://alisia.ai/';
            const callback = 'https://alisia.ai/';
            const expires = '19:14:11Z'; // expires ki jaga hardcoded nh balkay calculated time from now to 7 days (dynamic)
            const s3File = file?.file_url; //file url jo s3 se read hogi wo url

            const apiCall = async () => {
              //console.log('apiCall function');
              return new Promise((resolve, reject) => {
                //do api call if resolve then pass the data to resolve
                const request = require('request');
                const form_data = {
                  modelId: MODEL_ID,
                  file: fs.createReadStream(file_path),
                };
                const options = {
                  url: `https://app.nanonets.com/api/v2/OCR/Model/${MODEL_ID}/LabelFile/?async=false`,
                  formData: form_data,
                  headers: {
                    Authorization:
                      'Basic ' + Buffer.from(API_KEY + ':').toString('base64'),
                  },
                };

                request.post(options, async function (err, httpResponse, body) {
                  let json = await JSON.parse(body);
                  //console.log('json data of first api', json);
                  // //console.log('json',json.result.prediction)
                  const rfi = json?.result[0]?.request_file_id;
                  ////console.log('rfi', rfi);
                  const url =
                    'https://preview.nanonets.com/Inferences/Model/' +
                    MODEL_ID +
                    '/ValidationUrl/' +
                    rfi +
                    '?redirect=' +
                    redirect +
                    '&expires=' +
                    expires +
                    '&callback=' +
                    callback;
                  const options2 = {
                    url: url,
                    headers: {
                      Authorization:
                        'Basic ' +
                        Buffer.from(API_KEY + ':').toString('base64'),
                    },
                  };

                  request.post(options2, function (err, httpResponse, boddy) {
                    let embedurl = boddy;
                    ////console.log('final nanonet url', embedurl);
                    // //console.log('nanoNet json ', boddy);
                    let processed_data = json;
                    let nanoNet_url = embedurl;
                    // //console.log('main file : ====>' ,file )

                    let rule_success = true;
                    processed_data?.result?.map((result) => {
                      const predictions = result?.prediction;
                      predictions?.forEach((prediction) => {
                        if (prediction?.validation_status === 'failed') {
                          rule_success = false;
                        }
                      });
                    });

                    const newFile = {
                      file,
                      nanoNet_url,
                      processed_data,
                      rule_success,
                      in_process : true
                    };

                    resolve(newFile);
                  });
                  if (err) {
                    reject(err);
                  }
                });
              });
            };

            // const getUser = await read.getUserLogin(req)
            try {
              const requestToDownloadPdf = require('request-promise-native');
              async function downloadPDF(pdfURL, outputFilename) {
                let pdfBuffer = await requestToDownloadPdf.get({
                  uri: pdfURL,
                  encoding: null,
                });
                ////console.log("Writing downloaded PDF file to " + outputFilename + "...");
                fs.writeFileSync(outputFilename, pdfBuffer);
              }

              await downloadPDF(s3File, file_path); // function call horha hai pdf krne kelye
              ////console.log('file downloading');
              //yahan se nanonets ki first APi hit hoi hai
              const request = require('request');
              const form_data = {
                modelId: MODEL_ID,
                file: fs.createReadStream(file_path),
              };

              try {
                ////console.log('try');
                const rfiRes = await apiCall();

                // //console.log('new file : ', rfiRes);

                try {
                  ////console.log('id ' , fileId);
                  response = await this.fileModel.findByIdAndUpdate(
                    { _id: fileId },
                    rfiRes,
                    {
                      new: true,
                      upsert: true,
                      setDefaultsOnInsert: true,
                    },
                  );
                  // return response
                  // //console.log('response ', response);
                  // return response
                  fileLength = fileLength - 1;
                  // //console.log('filelength', fileLength);

                  if (fileLength === 0) {
                    //console.log('no files');
                  }
                } catch (err) {
                  throw new NotFoundException('User not Found');
                }
              } catch (error) {
                //console.log(error);
              }
            } catch (error) {
              throw [404, error.message];
            }
            //console.log('ressspooonsseeee ------------', response);
            r.push(response);
          }
        }),
      );
      //console.log('rrrrrrrrrrrrrrr', r);
      return r;
    } catch (error) {
      ////console.log(error)
      throw [404, error.message];
    }


    
  }

  async getAllFilesOfMultipleFolderIds(parent_folder_ids_array) {
    let response_array = [];
    try {
      let response = await this.fileModel.find({
        parent_folder: { $in: parent_folder_ids_array },
      });
      parent_folder_ids_array.forEach(async (parent_folder_id) => {
        response_array.push({
          parent_folder_id: parent_folder_id,
          files: response.filter(
            (res) => res.parent_folder == parent_folder_id,
          ),
        });
      });
      return response_array;
    } catch (error) {
      //console.log(error);
      throw [404, error.message];
    }
  }

  async getAllFilesOfApp() {
    let files = []
    try {
      const totalFiles = await this.fileModel.find()
      console.log('nameExist', totalFiles);
      return totalFiles
    } catch (error) {
      console.log(error);
      throw [404, error.message];
    }
  }

}
