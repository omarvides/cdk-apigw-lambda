function handler(event, context, callback) {
  const responseBody = {
    salute: 'Hi'
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
    headers: {},
    isBase64Encoded: false,
  }

  return callback(null, response);
}

module.exports = { handler }