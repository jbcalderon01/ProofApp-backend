import { ClientEntity } from '@core/clients/clients.entity';
import { ClientRepository } from '@core/clients/clients.repository';
import { ClientsModel } from '@data/clients/models';

class ClientDS implements ClientRepository {
    async getAll(params?: any): Promise<ClientEntity[]> {
        const data = await ClientsModel.findAll(params)

        return data as any
    }
    async getOne(id: string): Promise<ClientEntity> {
        const data = await ClientsModel.findByPk(id)

        return data as any
    }
    async remove(id: string): Promise<boolean> {
        const res = await ClientsModel.destroy({
            where: { id }
        })

        return !!res
    }
    async save(data: ClientEntity): Promise<ClientEntity> {
        const res = await ClientsModel.create(data as any)

        return res as any
    }
    async update(id: string, data: ClientEntity): Promise<ClientEntity> {
        await ClientsModel.update(data, {
            where: { id }
        })

        return data
    }
}

export default ClientDS
