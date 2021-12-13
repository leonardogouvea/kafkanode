import express from 'express';
import { CompressionTypes } from 'kafkajs';

const routes = new express.Router();

routes.post('/certifications', async (req, res) => {
   const message = {
        user: { id: 1, name: 'Leo Vinicius' },
        course: 'Kafka com Node.js',
        grade: 5,
   }
    await req.producer.send({
        topic: 'issue-certificate',
        compression: CompressionTypes.GZIP,
        messages: [
            { value: JSON.stringify(message) },
        ],
      })

    console.log(req.producer);
    return res.json({ ok: true });
});

export default routes;