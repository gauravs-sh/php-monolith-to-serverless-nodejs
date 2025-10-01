const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const orderId = Date.now().toString();

  await dynamo.put({
    TableName: process.env.ORDERS_TABLE,
    Item: { orderId, ...body }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Order created', orderId })
  };
};
