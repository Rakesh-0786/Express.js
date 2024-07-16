/* What are environmental variables and why do we use environment variables?

Environment variables are variables availabel to 
your program/application dynamically during runtime.
the value of these variables can come from a range of sources- text files, third-party secret
 managers, calling scripts, etc.
 
 
 Environment variables are used to store sensitive data such as
 passwords. API credentials and  other information that should not be written directly in code.
 Environment variables must be used to configure any variables or configuration
 details that may differ between environments.


//  Good Practices to follow while defining environment variables in .env file.
  
.Use descriptive names: Use clear and meaningful names for your environment variables.

.Use uppercase letters:it's common convention to use all uppercase letters for enviroment variables.

.Separate words with underscores: To make your environment variables more readable,
seprate words with underscores. For example, use "DATABASE_URL" instead of "databaseUrl".

.Don't commit .env file to version control: Make sure your file is not committed to version controls, as this could expose
sensitive information to unauthorized user.

.Keep the file consisten:Use a consistent format for your .env file .for example
use the format "VARIABLE_NAME=value" for each variable.


// Set up and read a .env file in node.js

.create a new file in the root directory of your project called .env.
This file should not have a file extension and should be in the same directory as 
your main code file.

.Add your environment variables to the .env file using the following format:
KEY=VALUE.

.save the .env file.

.Now Install dotenv npm package . "npm install dotenv"

.In your main code file , import the package that you just installed and load the environment
variable from the .env file: "require(dotenv.config();"

.You can now access the environment variables in your code using the proccess.env object.

You can now access the environment variables in your code using the process.env object.

const dbConfig={
host:process.env.DB_HOST,
user:Process.env.DB_USER,
password:process.env.DB_PASSWORD,
};


 */