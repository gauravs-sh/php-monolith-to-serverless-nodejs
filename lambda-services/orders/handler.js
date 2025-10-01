exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Order received for user ${body.userId}`, order: body }),
  };
};
