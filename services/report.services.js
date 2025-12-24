import { saveData, loadData } from "../utils/readWriteJson.js";
import { nanoid } from 'nanoid';
import { getAgent, updateAgent } from './agent.services.js'

const pathAReportsJson = './data/reports.json'

async function getAllReports() {
    const data = await loadData(pathAReportsJson);
    return data;
}




async function addReport(date, content, agentId) {
    const reports = await loadData(pathAReportsJson);
    if (!getAgent(agentId)) {
        throw new Error('agentId not found');
    }
    const report = {
        id: nanoid(),
        date,
        content,
        agentId,
    };
    reports.push(report)
    await saveData(pathAReportsJson, reports);

    const agent = getAgent(agentId)
    agent.reportsCount = agent.reportsCount + 1
    await updateAgent(agentId, agent)

    return report;
}



async function updateReport(id, date, content) {
    const reports = await loadData(pathAReportsJson);

    const index = reports.findIndex(report => report.id === id);

    if (index === -1) {
        throw new Error('Report not found');
    }
    const newReport = {
        id,
        date,
        content,
        agentId: reports[index].agentId

    }
    reports[index] = newReport;
    await saveData(pathAReportsJson, reports);
    return reports[index];
}



async function deleteReport(id) {
    const reports = await loadData(pathAReportsJson);

    const index = reports.findIndex(reports => reports.id === id);

    if (index === -1) {
        throw new Error('report not found');
    }

    reports.splice(index, 1);
    await saveData(pathAReportsJson, reports);
    return true;
}


async function getReport(id) {
    const reports = await loadData(pathAReportsJson);
    const index = reports.findIndex(reports => reports.id === id);
    return reports[index] || null;
}

export { getAllReports, addReport, updateReport, deleteReport, getReport };