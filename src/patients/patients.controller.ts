import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}
  @Get(':id')
  findPatient(@Param('id',ParseIntPipe)id:number){
    return this.patientsService.findPatient(id)
  }
  @Patch(':id')
  removeDocFromPatient(@Param('id',ParseIntPipe)id:number){
    return this.patientsService.removeDoctorFromPatient(id);
  }
  @Post('addDocToPatient/:id')
  addDoc(@Param('id',ParseIntPipe)id:number,@Body()docDto:addDoc){
    return this.patientsService.addDoctor(docDto,id)
  }
}
