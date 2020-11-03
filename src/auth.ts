import { User } from './entity/User';

const authorizer = async (event: any) => {
    if (!event.authorizationToken) {
        throw 'Unauthorized';
    }

    return buildIAMPolicy('dsuarez', 'Allow', event.methodArn, { user: 'context' })
}

const buildIAMPolicy = (userId: string, effect: string, resource: string, context: object) => {
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

export { authorizer };