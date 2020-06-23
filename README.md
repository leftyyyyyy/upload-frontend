# upload-frontend


# Getting Started

After you clone the repo, follow these simple steps

# Backend:

1. export the following environment variables S3_BUCKET_NAME S3_ACCESS_KEY S3_SECRET_ACCESS_KEY
2. install the requirements with pip
3. install redis-server and redis-client locally
4. run python3 __init__.py

# Frontend:

1. yarn
2. yarn serve

# Functional Specs:

- Upload CSV files
- Keep a list of the files
- Download any of the uploaded files
- Preview a custom statistic (the number of people with the same year)

# Technical Specs:

- Each user has a unique session and file history can be displayed as long as the user is still in his/her session
- Users can't access each other files even if they managed to get a hold of the file identifier
- Uses Redis for sotring user data and relationship
- Uses S3 for storing files
- Uses Modin for processing large files to calculate statistics
- Allow maximum of 100 mb size per file
- Retrieves and uploads in chunks to improve performance
- Allow only CSV files
- Every entity is presented in a UUID form with insurance of generating unique ones everytime

# Architecure diagram


# User relationships diagram


# Things to add:

- SSL cert for secure connection
- User managment (login)
- Redis max upload and download variables to control maximum activity to avoid performance issues
- Replicas of the redis instance
- A loadbalancer
- Separate the client and server in different instances
- Add a queue for processing the statistics to allow the user to quickly upload the file first
- Add link sharing to allow users to share the files between each other
- Add a check if the file is rmpty
- Consider name duplicates
- Replace the uuid with a different random generation mechanism
- Use miltiprocessing for uploading files
- Progress bar for the upload/download process 
