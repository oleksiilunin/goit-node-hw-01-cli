# Command Line Contacts Management App
This command line application provides a convenient way to manage a list of contacts. You can add, view, update, and delete contacts using command line commands.

## Installation:

1. Clone this repository to your computer:

		git clone https://github.com/your-repository-path.git

2. Navigate to the project directory:

		cd project-folder

3. Install the dependencies:

		npm install

## Usage:

The application provides the following commands for performing contact operations:

-> Add a contact:

		node index.js --action add --name Name --email Email --phone PhoneNumber

-> Get a contact by ID:

		node index.js --action get --id ContactID

-> Update a contact by ID:

		node index.js --action update --id ContactID --name NewName --email NewEmail --phone NewPhoneNumber

-> Remove a contact by ID:

		node index.js --action remove --id ContactID

-> List all contacts:

node index.js --action list

For each operation, provide the necessary parameters such as name, email, phone number, etc. Upon successful completion of the operation, the result will be displayed in the console.

## Examples:
- case "list":		
  - ![case "list":](https://i.ibb.co/Wz8XdsF/list.png)

- case "get":			
  - ![case "get":](https://i.ibb.co/7rr9J7T/get.png)

- case "add":		
  - ![case "add":](https://i.ibb.co/LPrLsZK/add.png)

- case "update":	
  - ![case "update":](https://i.ibb.co/sbqFpQX/update.png)

- case "remove":	
  - ![case "remove":](https://i.ibb.co/m8H4CMX/remove.png)
   
