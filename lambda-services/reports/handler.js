const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.handler = async () => {
  const reportKey = `report-${Date.now()}.json`;
  const reportData = { generatedAt: new Date().toISOString(), status: "OK" };

  await s3.putObject({
    Bucket: process.env.REPORTS_BUCKET,
    Key: reportKey,
    Body: JSON.stringify(reportData),
    ContentType: 'application/json'
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Report generated", file: reportKey })
  };
};
