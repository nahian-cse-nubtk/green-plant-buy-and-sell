🌿 Green World – Green Plant Buy & Sell

A modern plant marketplace built with Next.js, Tailwind CSS, and Firebase.
Users can browse plants, view details, buy/sell items, and manage listings with a clean and responsive UI.

🚀 Features

Browse all plants with images, price & details

User authentication (Firebase)

Add, update & manage plant listings

Beautiful UI with Tailwind CSS

Fully responsive

Secure backend with Node.js + MongoDB (if used)

📦 Tech Stack

Frontend: Next.js (App Router), Tailwind CSS
Auth: Firebase Authentication
Backend (optional): Node.js, Express, MongoDB
Deployment: Vercel / Netlify / Firebase

🛠️ Setup & Installation
1. Clone the repository
https://github.com/nahian-cse-nubtk/green-plant-buy-and-sell.git


2. Install dependencies
npm install

3. Create environment variables

Create a .env.local file in the project root and add:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

NEXT_PUBLIC_BASE_URL=http://localhost:4000


Replace with your Firebase credentials.

▶️ Run the Project Locally
npm run dev


Now open:
👉 http://localhost:3000



📜 Scripts

Run the development server:

npm run dev


Build for production:

npm run build


Run production build:

npm start


Lint the project:

npm run lint

🤝 Contributing

Pull requests are welcome!
For major changes, open an issue first to discuss what you’d like to change.
