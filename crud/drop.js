const mariadb = require("mariadb");

async function main() {
    let conn;
    try {
        // Create a connection object using the MariaDB settings and credentials
        conn = await mariadb.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "RootPassword123!"
        });
        
        // Execute query to create a new database
        await conn.query("DROP DATABASE demo");
        console.log("Demo database dropped.");
    } catch (err) {
        // Print errors
        console.log(err);
    } finally {
        // Close the connection
        if (conn) conn.close();
    }
}

main();