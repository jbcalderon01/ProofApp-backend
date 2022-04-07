
export interface Repository<T> {
    getAll(params?: any): Promise<T[]>
    getOne(id:string, params?: any): Promise<T>
    save(data: T): Promise<T>
    update(id: string, data: T): Promise<T>
    remove(id: string): Promise<boolean>
}
