import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Graph from '../lib/graph-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Graph.GraphStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
