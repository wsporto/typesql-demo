import { createConnection } from "mysql2/promise";

async function main() {
	const conn = await createConnection({
		host: 'localhost',
		database: 'classicmodels',
		user: 'root',
		password: 'password'
	});

	// use the generated functions
	// ...

	conn.end();

}

main().then();
