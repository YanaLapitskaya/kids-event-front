export default class Client {
    id: number;
    name: string;
    phone: number;
    socials: Array<string>;
    notes: string;

    constructor(id: number, name: string, phone: number, socials: Array<string>, notes: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.socials = socials;
        this.notes = notes;
    }
}