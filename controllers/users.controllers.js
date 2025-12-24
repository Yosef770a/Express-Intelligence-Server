import {
    getAllUsers, addUser, updateUser, deleteUser
} from '../services/users.services.js'



const getAll = async (req, res) => {
    try {
        res.json(await getAllUsers());
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};




const create = async (req, res) => {
    try {
        res.status(201).json(
            await addUser(
                req.body.username,
                req.body.password,
            ));
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


const update = async (req, res) => {
    try {
        res.json(await updateUser(
            req.body.username,
            req.body.password,
        ));
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


const remove = async (req, res) => {
    try {
        await deleteUser(req.params.id);
        res.sendStatus(204);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


export default { getAll, create, update, remove }