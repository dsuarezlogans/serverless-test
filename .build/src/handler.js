"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bye = exports.hello = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const hello = async (event, context) => {
    await typeorm_1.createConnection();
    const conn = typeorm_1.getConnection();
    console.log(conn.options);
    const user = new User_1.User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    user.email = 'hola@gmail.com';
    user.phone = '099090998';
    await user.save();
    // conn.close();
    const myMessage = testTyping({
        name: 'Danny',
        age: 31,
        message: 'This is really cool'
    });
    return {
        myMessage,
        message: "Go Serverless v1.0! Your function executed successfully!",
        event,
    };
};
exports.hello = hello;
const bye = async () => {
    return { message: 'Bye Bye brother!!' };
};
exports.bye = bye;
function testTyping(test) {
    return `Hello ${test.name}, your age is ${test.age} - Message: ${test.message} `;
}
