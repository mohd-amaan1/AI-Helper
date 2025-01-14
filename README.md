

# AI Helper

AI Helper is a Next.js web application built with TypeScript, Prisma, and TailwindCSS. It offers user authentication (signup and signin), integration with the Gemini API for AI chat functionality, and dynamic user data management.  

## Features

- **User Authentication**: Secure signup and signin functionality using Prisma and server actions.
- **AI Chat**: Integrated with the Gemini API for an enhanced chat experience.
- **Responsive Design**: Styled with TailwindCSS for a user-friendly and adaptive UI.
- **Dynamic User Management**: Displays user data in real time using server-side actions.

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
DATABASE_URL=your_database_url
GEMINI_API_KEY=your_gemini_api_key
```

## License

This project is licensed under the [MIT License](LICENSE).
