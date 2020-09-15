#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GraphStack } from '../lib/graph-stack';

const app = new cdk.App();
new GraphStack(app, 'GraphStack');
