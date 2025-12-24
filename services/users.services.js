import { saveData, loadData } from "../utils/readWriteJson.js";

const pathUsersJson = './data/users.json'



async function getAllUsers() {
    const data = await loadData(pathUsersJson);
    return data;
}


async function addUser(username, password) {
    const users = await loadData(pathUsersJson);
    const index = users.findIndex(user => user.username === username);

    if (!(index === -1)) {
        throw new Error('Username already exists');
    }
    const newUser = {
        username,
        password
    }
    users.push(newUser)
    await saveData(pathUsersJson, users);
    return newUser;
}


async function updateUser(username, newPassword) {
    const users = await loadData(pathUsersJson);
    const index = users.findIndex(user => user.username === username);

    if (index === -1) {
        throw new Error('User not found');
    }

    users[index].password = newPassword;
    await saveData(pathUsersJson, users);
    return users[index];
}


async function deleteUser(username) {
    const users = await loadData(pathUsersJson);
    const index = users.findIndex(user => user.username === username);


    if (index === -1) {
        throw new Error('User not found');
    }

    users.splice(index, 1);
    await saveData(pathUsersJson, users);
    return true;
}



export { getAllUsers, addUser, updateUser, deleteUser };
