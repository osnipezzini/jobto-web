import { Employee } from './Employee';

export class User {
  public id: number;
  public username: string;
  public password: string;
  public employeeId: number;
  public employee: Employee;
  public role: string;
  public token: string;
  constructor()
  {
  }
}
