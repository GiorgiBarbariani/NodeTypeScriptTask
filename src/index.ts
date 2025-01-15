import express from 'express';
import { Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { queue } from './queues/jobQueue';
import { startPubSub } from './pubsub/pubSub';

dotenv.config();
const app: Express = express()

app.use(bodyParser.json());

interface ProcessIdsRequestBody {
  ids: number[];
}

// POST /process-ids
app.post(
  '/process-ids',
  async (req: Request<{}, ProcessIdsRequestBody>, res: Response) => {
    const { ids } = req.body;

    if (!Array.isArray(ids)) {
      return res.status(400).send('Invalid payload. Expected an array of IDs.');
    }

    for (const id of ids) {
      await queue.add({ id });
    }

    res.send({ message: 'Jobs have been added to the queue.' });
  }
);
// Start server and Pub/Sub
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

startPubSub();
