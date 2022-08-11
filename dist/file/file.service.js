"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FileService = class FileService {
    constructor(fileModel) {
        this.fileModel = fileModel;
    }
    async findOneAndUpdateFile(id, data) {
        const video = await this.fileModel.findById(id);
        if (!video) {
            throw new common_1.NotFoundException('could not find video.');
        }
        return video;
    }
    async getNanonetsData(data) {
        var _a, _b, _c;
        let rule_success = true;
        (_b = (_a = data === null || data === void 0 ? void 0 : data.result) === null || _a === void 0 ? void 0 : _a.predictions) === null || _b === void 0 ? void 0 : _b.forEach((prediction) => {
            if ((prediction === null || prediction === void 0 ? void 0 : prediction.validation_status) === 'failed') {
                rule_success = false;
            }
        });
        const newFile = {
            processed_data: data,
            rule_success,
            in_process: true,
        };
        const res = await this.fileModel.findOneAndUpdate({ request_file_id: (_c = data === null || data === void 0 ? void 0 : data.result) === null || _c === void 0 ? void 0 : _c.id }, newFile, {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
        });
    }
    async addFile(file) {
        const newFile = new this.fileModel(file);
        return await newFile.save();
    }
    async getAllFiles(parent_folder_id) {
        let files;
        if (parent_folder_id.match(/^[0-9a-fA-F]{24}$/)) {
            files = await this.fileModel
                .find({ parent_folder: parent_folder_id })
                .populate('uploaded_by');
        }
        else {
            throw new common_1.BadRequestException('Invalid folder id');
        }
        if (files.length === 0) {
            throw new common_1.NotFoundException('No files found');
        }
        return files;
    }
    async getAllFilesOfOrganization(organization) {
        let files;
        if (organization.match(/^[0-9a-fA-F]{24}$/)) {
            files = await this.fileModel
                .find({ organization: organization })
                .populate('uploaded_by');
        }
        else {
            throw new common_1.BadRequestException('Invalid organization id');
        }
        if (files.length === 0) {
            throw new common_1.NotFoundException('No files found');
        }
        return files;
    }
    async deleteFile(fileId) {
        let file;
        try {
            file = await this.fileModel.findById(fileId).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('File not found');
        }
        if (file) {
            await this.fileModel.findByIdAndDelete(fileId);
            return 'File deleted successfully';
        }
    }
    async nanoNetApi(idss) {
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
        }
        else {
            folderName = userHomeDir + '/kafka';
            if (!fs.existsSync(folderName)) {
                fs.mkdirSync(folderName);
            }
        }
        const localPath = userHomeDir;
        try {
            await Promise.all(ids.map(async (fileId) => {
                let file = await this.fileModel.findById(fileId);
                const date = new Date().getTime();
                if ((file === null || file === void 0 ? void 0 : file.model_id_name) === 'Signature Detection' ||
                    (file === null || file === void 0 ? void 0 : file.model_id_name) === 'Contracts') {
                    const MODEL_ID = file === null || file === void 0 ? void 0 : file.model_id_type;
                    const API_KEY = 'zBJdKfGxi7CFxFlRKPV4dApdaR2AjHtP';
                    const fileName = file === null || file === void 0 ? void 0 : file.name.substring(0, file === null || file === void 0 ? void 0 : file.name.indexOf('.'));
                    console.log('1. *** ', fileName);
                    const extension = (file === null || file === void 0 ? void 0 : file.file_url) &&
                        (file === null || file === void 0 ? void 0 : file.file_url.substring((file === null || file === void 0 ? void 0 : file.file_url.lastIndexOf('.')) + 1));
                    const file_path = `${folderName}/${fileName}.${extension}`;
                    const redirect = window.top.location.href;
                    const callback = window.top.location.href;
                    const expires = '19:14:11Z';
                    const s3File = file === null || file === void 0 ? void 0 : file.file_url;
                    const apiCall = async () => {
                        console.log('3. this is api call', fileName);
                        return new Promise((resolve, reject) => {
                            const request = require('request');
                            const form_data = {
                                modelId: MODEL_ID,
                                file: fs.createReadStream(file_path),
                            };
                            const options = {
                                url: `https://app.nanonets.com/api/v2/OCR/Model/${MODEL_ID}/LabelFile/?async=true`,
                                formData: form_data,
                                headers: {
                                    Authorization: 'Basic ' + Buffer.from(API_KEY + ':').toString('base64'),
                                },
                            };
                            request.post(options, async function (err, httpResponse, body) {
                                var _a;
                                let json = await JSON.parse(body);
                                console.log('4. response 1', fileName);
                                const rfi = (_a = json === null || json === void 0 ? void 0 : json.result[0]) === null || _a === void 0 ? void 0 : _a.request_file_id;
                                const url = 'https://preview.nanonets.com/Inferences/Model/' +
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
                                        Authorization: 'Basic ' +
                                            Buffer.from(API_KEY + ':').toString('base64'),
                                    },
                                };
                                request.post(options2, function (err, httpResponse, boddy) {
                                    let embedurl = boddy;
                                    console.log('5. response 2', fileName);
                                    let nanoNet_url = embedurl;
                                    const newFile = {
                                        file,
                                        nanoNet_url,
                                        request_file_id: rfi,
                                        in_process: false,
                                    };
                                    resolve(newFile);
                                });
                                if (err) {
                                    reject(err);
                                }
                            });
                        });
                    };
                    try {
                        console.log("2. this is start", fileName);
                        const requestToDownloadPdf = require('request-promise-native');
                        async function downloadPDF(pdfURL, outputFilename) {
                            let pdfBuffer = await requestToDownloadPdf.get({
                                uri: pdfURL,
                                encoding: null,
                            });
                            fs.writeFileSync(outputFilename, pdfBuffer);
                        }
                        await downloadPDF(s3File, file_path);
                        try {
                            const rfiRes = await apiCall();
                            try {
                                console.log('6. this is end', fileName);
                                response = await this.fileModel.findByIdAndUpdate({ _id: fileId }, rfiRes, {
                                    new: true,
                                    upsert: true,
                                    setDefaultsOnInsert: true,
                                });
                            }
                            catch (err) {
                                throw new common_1.NotFoundException('ERROR');
                            }
                        }
                        catch (error) {
                        }
                    }
                    catch (error) {
                        throw [404, error.message];
                    }
                    r.push(response);
                }
                else {
                    const MODEL_ID = file === null || file === void 0 ? void 0 : file.model_id_type;
                    const API_KEY = 'zBJdKfGxi7CFxFlRKPV4dApdaR2AjHtP';
                    const fileName = file === null || file === void 0 ? void 0 : file.name.substring(0, file === null || file === void 0 ? void 0 : file.name.indexOf('.'));
                    const extension = file.file_url &&
                        file.file_url.substring(file.file_url.lastIndexOf('.') + 1);
                    const file_path = `${folderName}/${fileName}.${extension}`;
                    const redirect = 'https://alisia.ai/';
                    const callback = 'https://alisia.ai/';
                    const expires = '19:14:11Z';
                    const s3File = file === null || file === void 0 ? void 0 : file.file_url;
                    const apiCall = async () => {
                        return new Promise((resolve, reject) => {
                            const request = require('request');
                            const form_data = {
                                modelId: MODEL_ID,
                                file: fs.createReadStream(file_path),
                            };
                            const options = {
                                url: `https://app.nanonets.com/api/v2/OCR/Model/${MODEL_ID}/LabelFile/?async=false`,
                                formData: form_data,
                                headers: {
                                    Authorization: 'Basic ' + Buffer.from(API_KEY + ':').toString('base64'),
                                },
                            };
                            request.post(options, async function (err, httpResponse, body) {
                                var _a;
                                let json = await JSON.parse(body);
                                const rfi = (_a = json === null || json === void 0 ? void 0 : json.result[0]) === null || _a === void 0 ? void 0 : _a.request_file_id;
                                const url = 'https://preview.nanonets.com/Inferences/Model/' +
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
                                        Authorization: 'Basic ' +
                                            Buffer.from(API_KEY + ':').toString('base64'),
                                    },
                                };
                                request.post(options2, function (err, httpResponse, boddy) {
                                    var _a;
                                    let embedurl = boddy;
                                    let processed_data = json;
                                    let nanoNet_url = embedurl;
                                    let rule_success = true;
                                    (_a = processed_data === null || processed_data === void 0 ? void 0 : processed_data.result) === null || _a === void 0 ? void 0 : _a.map((result) => {
                                        const predictions = result === null || result === void 0 ? void 0 : result.prediction;
                                        predictions === null || predictions === void 0 ? void 0 : predictions.forEach((prediction) => {
                                            if ((prediction === null || prediction === void 0 ? void 0 : prediction.validation_status) === 'failed') {
                                                rule_success = false;
                                            }
                                        });
                                    });
                                    const newFile = {
                                        file,
                                        nanoNet_url,
                                        processed_data,
                                        rule_success,
                                        in_process: true
                                    };
                                    resolve(newFile);
                                });
                                if (err) {
                                    reject(err);
                                }
                            });
                        });
                    };
                    try {
                        const requestToDownloadPdf = require('request-promise-native');
                        async function downloadPDF(pdfURL, outputFilename) {
                            let pdfBuffer = await requestToDownloadPdf.get({
                                uri: pdfURL,
                                encoding: null,
                            });
                            fs.writeFileSync(outputFilename, pdfBuffer);
                        }
                        await downloadPDF(s3File, file_path);
                        const request = require('request');
                        const form_data = {
                            modelId: MODEL_ID,
                            file: fs.createReadStream(file_path),
                        };
                        try {
                            const rfiRes = await apiCall();
                            try {
                                response = await this.fileModel.findByIdAndUpdate({ _id: fileId }, rfiRes, {
                                    new: true,
                                    upsert: true,
                                    setDefaultsOnInsert: true,
                                });
                                fileLength = fileLength - 1;
                                if (fileLength === 0) {
                                }
                            }
                            catch (err) {
                                throw new common_1.NotFoundException('User not Found');
                            }
                        }
                        catch (error) {
                        }
                    }
                    catch (error) {
                        throw [404, error.message];
                    }
                    r.push(response);
                }
            }));
            return r;
        }
        catch (error) {
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
                    files: response.filter((res) => res.parent_folder == parent_folder_id),
                });
            });
            return response_array;
        }
        catch (error) {
            throw [404, error.message];
        }
    }
    async getAllFilesOfApp() {
        let files = [];
        try {
            const totalFiles = await this.fileModel.find();
            console.log('nameExist', totalFiles);
            return totalFiles;
        }
        catch (error) {
            console.log(error);
            throw [404, error.message];
        }
    }
};
FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('File')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map