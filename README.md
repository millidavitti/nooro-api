Here’s a refined version of your instructions with clearer organization and enhanced readability:
Follow this guide to install MySQL on your machine:  
[Setting Up a Local MySQL Database](https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database)

---

# Setting Up the Express App with MySQL

## 1. Install MySQL Locally or Use a Cloud Service

### Option 1: Install MySQL Locally

Follow this guide to install MySQL on your machine:  
[Setting Up a Local MySQL Database](https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database)

### Option 2: Use a Free Cloud MySQL Database

For a seamless experience, use Aiven to set up a free MySQL database:  
[Aiven Free MySQL Database](https://aiven.io/free-mysql-database)

### Option 3: Use the deployed version

For an even more seamless experience, use can use the deployed API:  
[Nooro Task API](https://nooro-api-cxa5e9bacmajc7ay.eastus-01.azurewebsites.net/v1/tasks)

---

## 2. Configure Your Application

1. **Set Up Environment Variables**:  
   Create a `.env` file in your project directory and add the following line:

   ```env
   DATABASE_URL=<Your MySQL Server Instance URI>
   ```

   Replace `<Your MySQL Server Instance URI>` with the connection URI from your MySQL setup (local or cloud).

2. **Install Dependencies**:  
   Run the following command to install dependencies (assuming you're using `pnpm`):

   ```bash
   pnpm install
   ```

3. **Start the Application**:  
   Start the development server with:
   ```bash
   pnpm dev
   ```

---

## 3. Access the API

Once the server is running, visit the following URL in your browser or API client:  
[http://localhost:5000/v1/tasks](http://localhost:5000/v1/tasks)
