# Bhargavi Patel - Portfolio

A modern, responsive full stack developer portfolio built with React, TypeScript, and Tailwind CSS.

## About This Portfolio

This is my personal portfolio showcasing my projects, skills, experience, and expertise as a Full Stack Developer.

## How can I edit this code?

There are several ways of editing this portfolio.

**Use your preferred IDE**

Clone this repository and edit locally using your favorite code editor.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy this portfolio to services like Vercel, Netlify, or GitHub Pages. Simply push your changes to GitHub and configure your deployment platform accordingly.

For Vercel:
1. Connect your GitHub repository
2. Configure build settings
3. Deploy and get a live URL

## Contact form

The form validates in the browser. Without extra configuration it opens the visitor’s email app with a draft to `patelbhargavi1624@gmail.com`. It does not pretend the message was delivered.

To send the form to a hosted inbox instead, set this environment variable in Vercel (or a local `.env` file, which should not be committed):

```sh
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

The endpoint must accept a JSON `POST` with `name`, `email`, `subject`, and `message`, and return a successful HTTP status. Do not put API keys in frontend code. If the service needs a secret, keep it on a server or in the provider’s form settings.

There is no resume file in this repository. The resume actions open an email request. Add a file such as `public/resume.pdf` later if you want a direct download.
