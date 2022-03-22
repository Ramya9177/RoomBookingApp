export class User {
  static id: number;
  static email: string;
  static password: string;
    constructor(public id: number = 0, public email: string="", public password: string = "") {

    }
}