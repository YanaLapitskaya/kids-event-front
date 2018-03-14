export default class Employee {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    phone: number;
    email: string;
    position: string;
    photo: string;

    constructor(id: number, firstName: string, lastName: string, description: string,
                phone: number, email: string, position: string, photo: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.phone = phone;
        this.email = email;
        this.position = position;
        this.photo = photo;
    }
}