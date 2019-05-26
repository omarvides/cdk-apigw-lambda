const cdk = require('@aws-cdk/cdk');
const lambda = require('@aws-cdk/aws-lambda');
const apigw = require('@aws-cdk/aws-apigateway');


class LambdaApigwStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const sampleHandlerFunction = new lambda.Function(this, 'FunctionName', {
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.asset('./handlers'),
      handler: 'index.handler',
    });

    // Definining the base API, called sample and enabling GET for /
    const sampleApi = new apigw.RestApi(this, 'sample-api');

    // Adding the resoure /sample-resource
    const sampleResource = sampleApi.root.addResource('sample-resource');

    // adding GET integration for /sample-resource using sampleHandlerFunction lambda function
    const getSampleResourceIntegration = new apigw.LambdaIntegration(sampleHandlerFunction);
    sampleResource.addMethod('GET', getSampleResourceIntegration);
  }
}

module.exports = { LambdaApigwStack }
