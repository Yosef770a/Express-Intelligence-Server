import { saveData, loadData } from "../utils/readWriteJson.js";
import { nanoid } from 'nanoid';

const pathAgentsJson = './data/agents.json'

async function getAllAgents() {
    const data = await loadData(pathAgentsJson);
    return data;
}

async function addAgent(name, nickname, password) {
    const agents = await loadData(pathAgentsJson);
    const agent= { 
        id: nanoid(),
        name, 
        nickname, 
        password,
        reportsCount: 0
    };
    agents.push(agent)
    await saveData(pathAgentsJson, agents);
    return agent;
}

async function updateAgent(id, name, nickname, password) {
    const agents = await loadData(pathAgentsJson);
    
    const index = agents.findIndex(agent => agent.id === id);
    
    if (index === -1) {
        throw new Error('Agent not found');
    }
    const newObj = {
        id,
        name,
        nickname,
        password

    }
    agents[index] = newObj;
    await saveData(pathAgentsJson, agents);
    return agents[index];
}

async function deleteAgent(id) {
    const agents = await loadData(pathAgentsJson);
    
    const index = agents.findIndex(agent => agent.id === id);

    if (index === -1) {
        throw new Error('Agent not found');
    }
    
    agents.splice(index, 1);
    await saveData(pathAgentsJson, agents);
    return true;
}

async function getAgent(id) {
    const agents = await loadData(pathAgentsJson);
    const index = agents.findIndex(agent => agent.id === id);
    return agents[index] || null;
}

export { getAllAgents, addAgent, updateAgent, deleteAgent, getAgent };