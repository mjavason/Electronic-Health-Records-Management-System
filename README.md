# Electronic Health Records Management System API

A comprehensive EHR management system empowering healthcare providers with robust patient data storage, secure access, and automated data compression for cloud backup.

## Overview

The Electronic Health Records Management System API empowers healthcare providers with a robust solution to store, access, and manage patient health data securely. It includes automated data compression and scheduled cloud backups for data protection. Currently hosted live at [EHRMS.](https://electronic-health-records.onrender.com)

## Getting Started

To set up and run the Electronic Health Records Management System API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/mjavason/Electronic-Health-Records-Management-System.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Electronic-Health-Records-Management-System
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Set up the environment variables by creating a `.env` file in the root directory. Refer to the "Environment Variables" section below for details.

5. Build the TypeScript code:

   ```shell
   npm run build
   ```

6. Start the server:

   ```shell
   npm start
   ```

The API will be accessible at `http://localhost:5000` by default.

## Features

- **Secure EHR Storage**: Safely store and manage electronic health records, ensuring patient data privacy.

- **Automated Compression**: Implement automated data compression to optimize storage.

- **Scheduled Backups**: Protect patient data with scheduled cloud backups.

## Environment Variables

Before running the API, make sure to set up the following environment variables in your `.env` file:

```env
ACCESS_TOKEN_SECRET=your-access-token-secret
APP_NAME=EHR Management System
JWT_SECRET=your-jwt-secret
MONGODB_URL=your-mongodb-url
MONGO_DB_NAME=your-mongodb-database-name
REFRESH_TOKEN_SECRET=your-refresh-token-secret
MAIL_ADDRESS=your-mail-address@mail.com
MAIL_PASSWORD=your-mail-password
SITE_LINK=https://electronic-health-records.onrender.com
```

## Documentation

For detailed documentation on how to use the Electronic Health Records Management System API and its endpoints, refer to the [API Documentation](https://documenter.getpostman.com/view/29278179/2s9YJf12Fa).

## Contributing

Contributions to the Electronic Health Records Management System API are welcome! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.

Contributions that improve functionality, security, and data management are highly appreciated.

