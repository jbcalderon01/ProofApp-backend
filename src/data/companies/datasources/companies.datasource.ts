/* eslint-disable @typescript-eslint/no-explicit-any */
import { CompanyEntity } from '@core/companies/companies.entity';
import { CompaniesRepository } from '@core/companies/companies.repository';
import { CompaniesModel } from '@data/companies/models';

class CompaniesDS implements CompaniesRepository {
    async getAll(params?: any): Promise<CompanyEntity[]> {
        const data = await CompaniesModel.findAll(params)

        return data as any
    }
    async getOne(id: string): Promise<CompanyEntity> {
        const data = await CompaniesModel.findByPk(id)

        return data as any
    }
    async remove(id: string): Promise<boolean> {
        const res = await CompaniesModel.destroy({
            where: { id }
        })

        return !!res
    }
    async save(data: CompanyEntity): Promise<CompanyEntity> {
        const res = await CompaniesModel.create(data as any)

        return res as any
    }
    async update(id: string, data: CompanyEntity): Promise<CompanyEntity> {
        await CompaniesModel.update(data, {
            where: { id }
        })

        return data
    }
}

export default CompaniesDS
