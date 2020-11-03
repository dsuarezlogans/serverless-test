"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizer = void 0;
const authorizer = async (event) => {
    if (!event.authorizationToken) {
        throw 'Unauthorized';
    }
    return buildIAMPolicy('dsuarez', 'Allow', event.methodArn, { user: 'context' });
};
exports.authorizer = authorizer;
const buildIAMPolicy = (userId, effect, resource, context) => {
    const policy = {
        principalId: userId,
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
                {
                    Action: 'execute-api:Invoke',
                    Effect: effect,
                    Resource: resource,
                },
            ],
        },
        context,
    };
    return policy;
};
