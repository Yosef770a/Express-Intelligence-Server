import {getAllAgents, addAgent, updateAgent, deleteAgent, getAgent} from '../services/agent.services.js'



const getAll = async (req, res) => {
  try {
    res.json(await getAllAgents());
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};



const getById = async (req, res) => {
  try {
    res.json(await getAgent(req.params.id));
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};


const create = async (req, res) => {
  try {
    res.status(201).json(await addAgent(
      req.body.name,
      req.body.nickname,
      req.body.password
    ));
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};


const update = async (req, res) => {
  try {
    res.json(await updateAgent(
      req.params.id,
      req.body.name,
      req.body.nickname,
      req.body.password
    ));;
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};


const remove = async (req, res) => {
  try {
    await deleteAgent(req.params.id);
    res.sendStatus(204);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};


export default {getAll, getById, create, update, remove}