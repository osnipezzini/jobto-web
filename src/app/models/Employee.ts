import { Client } from './Client';
export class Employee{
  constructor(grid: number, doc: string, code: number, name: string,
              active: boolean, type: string, createdAt: Date, updatedAt: Date, deletedAt: Date) {
      this.grid = grid;
      this.doc = doc;
      this.active = active;
      this.type = type;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.deletedAt = deletedAt;
      this.code = code;
      this.name = name;
    }
    public grid: number;
    public name: string;
    public doc: string;
    public type: string;
    public code: number;
    public createdAt: Date;
    public updatedAt: Date;
    public deletedAt?: Date;
    public active: boolean;
  }
