import { Injectable } from '@nestjs/common';
import * as companiesJson from '../helper/company.json';
import { getCompanyById } from '../helper/util.helper';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}
  async findAll(): Promise<Company[]> {
    const companiesDB = await this.companyRepository.find();
    return getCompanyById(companiesDB, companiesJson.EMPRESAS);
  }
}
