
import { isEmpty } from 'lodash'

import { Repository } from './Repository';

export class Interactor<T> {
    repository: Repository<T>
    constructor(repository: Repository<T>){
        this.repository = repository
    }
    async findAll(params: any){
        const data = await this.repository.getAll(params)

        return data
    }

    async findOne(id: string, params: any){
        const data = await this.repository.getOne(id, params)

        if (isEmpty(data)) throw new Error('Resource not found')

        return data
    }

    async create(data: T){
        try {
            return await this.repository.save({ ...data })
        } catch (error) {
            throw new Error('Error creating or bad request')
        }
    }

    async update(id: string, data: T){
        try {
            return await this.repository.update(id, data)
        } catch (error) {
            throw new Error('Error updating or bad request')
        }
    }

    async remove(id: string){
        try {
            return await this.repository.remove(id)
        } catch (error) {
            throw new Error('Error deleting or bad request')
        }
    }
}
