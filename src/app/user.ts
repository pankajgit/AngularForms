export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public address: string,
        public city: string,
        public pincode: number,
        public topic: string,
        public batchTime: string,
        public subscribe: boolean
    ) {}
}
