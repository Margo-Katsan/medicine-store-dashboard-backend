import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getUsers() {
    return [{id: 1, name: 'dfaf'}, {id: 2, name: " eefi"}, {id:3, name: "jdf"}]
  }
}