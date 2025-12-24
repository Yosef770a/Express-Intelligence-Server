import express from 'express'
import usersRouts from './routes/users.routes.js'
import { loadData } from './utils/readWriteJson.js';


function loadfiles(){
    loadData('./data/agents.json')
    loadData('./data/reports.json')
    loadData('./data/users.json')
}

const app = express();

const PORT = 3700

app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/users', usersRouts);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  loadfiles()
});


