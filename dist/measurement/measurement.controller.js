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
exports.MeasurementController = void 0;
const common_1 = require("@nestjs/common");
const measurement_service_1 = require("./measurement.service");
let MeasurementController = class MeasurementController {
    constructor(measurementService) {
        this.measurementService = measurementService;
    }
    async createMeasurement(req) {
        console.log('req.body', req.body);
        return await this.measurementService.createMeasurement(req.body);
    }
    async getMeasurement(measurementId) {
        const result = await this.measurementService.getMeasurement(measurementId);
        return result;
    }
    async updateMeasurement(measurementId, measurementData) {
        const result = await this.measurementService.updateMeasurement(measurementId, measurementData);
        return result;
    }
    async deleteMeasurement(measurementId) {
        return await this.measurementService.deleteMeasurement(measurementId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeasurementController.prototype, "createMeasurement", null);
__decorate([
    (0, common_1.Get)('/getMeasurement/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeasurementController.prototype, "getMeasurement", null);
__decorate([
    (0, common_1.Patch)('updateMeasurement'),
    __param(0, (0, common_1.Body)("id")),
    __param(1, (0, common_1.Body)("measurementData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MeasurementController.prototype, "updateMeasurement", null);
__decorate([
    (0, common_1.Delete)('/deleteMeasurement/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeasurementController.prototype, "deleteMeasurement", null);
MeasurementController = __decorate([
    (0, common_1.Controller)('measurement'),
    __metadata("design:paramtypes", [measurement_service_1.MeasurementService])
], MeasurementController);
exports.MeasurementController = MeasurementController;
//# sourceMappingURL=measurement.controller.js.map