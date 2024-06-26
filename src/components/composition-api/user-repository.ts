import { ref, onMounted, watch } from "vue";
import UserService from "@/services/UserService";

export const userRepository = () => {
    const numberOfUsers = ref(0);
    const users = <any>ref([]);
    const userService = new UserService();

    const getUsers = async () => {
        users.value = await userService.list();
    };

    const updateNumberOfUsers = (newUsersValue: any) => {
        numberOfUsers.value = newUsersValue.length;
    };

    onMounted(getUsers);

    watch(users, updateNumberOfUsers);

    return { users, numberOfUsers };
};
