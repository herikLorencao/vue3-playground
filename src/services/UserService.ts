export default class UserService {
    users = [
        { id: 1, nome: "Herik" },
        { id: 2, nome: "Ana" },
        { id: 3, nome: "Jorge" },
    ];

    async list() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.users), 3000);
        });
    }
}
