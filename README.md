# GitHub Candidate Search App

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

## Description
The GitHub Candidate Search App is a web application that allows users to search for potential candidates from GitHub, view their profiles, and save or reject them based on their details. Built with React and TypeScript, this project utilizes the GitHub API to fetch candidate profiles.

## Features
- View candidate information, including name, username, location, email, profile link, and company.
- Save or reject candidates and view a list of saved candidates.
- Clear the saved candidates list and sort or filter candidates.
- Mobile-responsive design for ease of use on various devices.

## Technologies Used
- **React** with TypeScript for building the frontend.
- **Vite** for fast development and optimized build.
- **GitHub API** to fetch candidate profile data.
- **Bootstrap** (or your chosen CSS framework) for styling.

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/your-username/github-candidate-search-app.git
   cd github-candidate-search-app
```

2. Install dependencies
```bash
    npm install
```

3. Set up environment variables by creating a .env file in the root directory (refer to the Environment Variables section for details).

## Usage 

1. Start development server:
```bash
    npm run dev
```

2. Open http://localhost:5173 in your browser to access the app.

3. Use the app to search, view, and save candidates.

## Environment Variables
Create a .env file in the environment folder of the project with the following variable
```bash
VITE_GITHUB_TOKEN=your_personal_github_token
```
  Replace your_personal_github_token with a valid GitHub Personal Access Token. The token should have minimal permissions (default permissions are usually sufficient).

## Deployment
I've done a bit of research and apparently if you want to deploy this project. Platforms like Render or Vercel are needed. Make sure to set up environment variables on the deployment platform, similar to your local .env file.

## License

MIT License

Copyright (c) 2024 Henry Agustin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




