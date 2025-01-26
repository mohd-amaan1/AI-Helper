

# AI Helper

AI Helper is a Next.js web application built with TypeScript, Prisma, and TailwindCSS. It offers user authentication (signup and signin) and Google OAuth, integration with the Gemini API for AI chat functionality, and dynamic user data management.  

## Features

- **User Authentication**: Implemented secure sign-up and sign-in functionality using **NextAuth** with **Google OAuth** and credential-based authentication, managed with **Prisma ORM**.
- **AI Chat**: Integrated with the **Gemini API** to provide an enhanced chatbot experience with real-time responses, handling **15 requests per minute (RPM)**.
- **Responsive Design**: Styled the application with **TailwindCSS**, ensuring a user-friendly and adaptive interface across different devices and screen sizes.
- **Dynamic User Management**: Displayed real-time user data and interactions using **Prisma ORM** and **PostgreSQL**, providing seamless user experience.

## Tech Stack

- **Framework**: Next.js (TypeScript)
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: TailwindCSS
- **API**: Gemini API for AI functionality
  
## Project Structure

```
app/
  ├── actions/          # Server actions (sho.ts, up.ts)
  ├── signup/           # Signup page and components
  ├── signin/           # Signin page
  ├── about/            # About page
  ├── globals.css       # Global styles
  ├── page.tsx          # Main page
components/
  ├── AIChat.tsx        # AI chat component
  ├── About.tsx         # About section component
  ├── Navbar.tsx        # Navigation bar
  ├── Signup.tsx        # Signup component
prisma/
  ├── schema.prisma     # Database schema
public/                 # Static assets
.env                    # Environment variables
```



## Environment Variables

Ensure the `.env` file is configured with the following:
```env
DATABASE_URL=
REACT_APP_API_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
```

## License

This project is licensed under the [MIT License](LICENSE).
