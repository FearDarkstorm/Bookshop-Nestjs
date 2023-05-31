import { Injectable } from "@nestjs/common";



@Injectable()
export class UserServices {
    addUser() :string {
        return 'this will add a user'
    }
    editUser(): string {
        return 'this will edit a user'
    }
    getUser(): string {
        return 'this will get a user'
    }
    deleteUser(): string {
        return 'this will delete a user'
    }
}

