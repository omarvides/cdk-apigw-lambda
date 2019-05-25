#!/usr/bin/env node

// @ts-ignore: Cannot find declaration file
require('source-map-support/register');
const cdk = require('@aws-cdk/cdk');
const { LambdaApigwStack } = require('../lib/lambda-apigw-stack');

const app = new cdk.App();
new LambdaApigwStack(app, 'LambdaApigwStack');
