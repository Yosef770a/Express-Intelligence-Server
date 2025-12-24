import { loadData } from './utils/readWriteJson.js';

export default async (req, res, next) => {
    const token = req.headers['x-token'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const userPass = token.split(":")
    const users = await loadData('./data/users.json');
    const verifi = users.find(
        user => user.username === userPass[0] && user.password === userPass[1]
    );

    if (!verifi) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
};