import { 
    getAllReports, addReport, updateReport, deleteReport, getReport } from '../services/report.services.js'



const getAll = async (req, res) => {
    try {
        res.json(await getAllReports());
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};



const getById = async (req, res) => {
    try {
        res.json(await getReport(req.params.id));
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


const create = async (req, res) => {
    try {
        res.status(201).json(
            await addReport(
                req.body.date,
                req.body.content,
                req.body.agentId
            ));
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


const update = async (req, res) => {
    try {
        res.json(await updateReport(
            req.params.id,
            req.body.date,
            req.body.content,
        ));
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


const remove = async (req, res) => {
    try {
        await deleteReport(req.params.id);
        res.sendStatus(204);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


export default { getAll, getById, create, update, remove }