// Requirement 1 & 2: Import MongoClient and define Connection Settings
const { MongoClient } = require('mongodb');

// Local MongoDB Connection URL & Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'CollegeDB';

async function readStudents() {
    const client = new MongoClient(url);

    try {
        // Requirement 2: Connect to the local MongoDB server
        await client.connect();
        console.log("Connected successfully to MongoDB server");

        // Select Database and Collection
        const db = client.db(dbName);
        const collection = db.collection('students');

        // Requirement 3: Fetch all documents from the 'students' collection
        const students = await collection.find({}).toArray();

        // Requirement 4: Print the fetched data to the terminal console
        console.log("\n--- Student Records ---");
        console.log(students);

    } catch (error) {
        console.error("An error occurred while fetching student data:", error);
    } finally {
        // Close the connection safely
        await client.close();
    }
}

// Execute the function
readStudents();