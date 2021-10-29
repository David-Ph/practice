const amqp = require("amqplib");

connect();
const message = { number: process.argv[2] };
async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");

    // consume the queue and do somethign with it
    channel.consume("jobs", (message) => {
      console.log(message.content.toString());

      //   acknowledge that it's done and remove the item from queue
      channel.ack(message);
    });

    console.log(`Waiting for messages...`);
  } catch (error) {
    console.log(error);
  }
}
