import { Context } from 'aws-lambda';
import { createConnection, getConnection } from 'typeorm';
import { User } from './entity/User'

const hello = async (event: any, context: Context) => {
  await createConnection();
  const conn = getConnection();
  console.log(conn.options);

  const user = new User();
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

const bye = async () => {
  return { message: 'Bye Bye brother!!' }
}

type Test = {
  message: string
  name: string
  age: number
}


function testTyping(test: Test) {
  return `Hello ${test.name}, your age is ${test.age} - Message: ${test.message} `
}

export { hello, bye };