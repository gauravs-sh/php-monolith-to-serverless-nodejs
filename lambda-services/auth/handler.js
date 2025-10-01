exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  if (body.username === "admin" && body.password === "password") {
    return { statusCode: 200, body: JSON.stringify({ token: "fake-jwt-token" }) };
  }
  return { statusCode: 401, body: JSON.stringify({ message: "Unauthorized" }) };
};
