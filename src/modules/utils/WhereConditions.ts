import { type FindOptionsWhere } from 'typeorm'

export class WhereConditions<T extends object> {
  createWhereConditions(conditions: T): FindOptionsWhere<T> {
    const where: FindOptionsWhere<T> = {}
    for (const [k, value] of Object.entries(conditions)) {
      if (value !== null || value !== undefined) {
        const key = k as keyof FindOptionsWhere<T>
        where[key] = value
      }
    }
    return where
  }
}
