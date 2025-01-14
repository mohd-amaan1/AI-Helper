import Navbar from "@/components/navbar";
import AIChat from "@/components/AIChat";

import { showUser } from "./actions/sho";

export const dynamic = "force-dynamic";

export default async function Home() {
  const userData = await showUser();
  const envVar = process.env.REACT_APP_API_KEY || "";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Welcome Section with Gradient */}
      <div
        className="flex flex-col items-center justify-start p-6"
        style={{
          background: "linear-gradient(to bottom right, #7FB3FF, #203A8E)", // Subtle gradient
        }}
      >
        <div className="mt-10 bg-white shadow-md p-6 rounded-lg max-w-lg">
          <h1 className="text-xl font-semibold text-blue-700">
            Welcome, {userData?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Happy to have you here! Explore and enjoy your journey.
          </p>
        </div>
      </div>
      {/* AI Chat Section */}
      <div className="mt-6 w-full max-w-3xl mx-auto">
        <AIChat propVar={envVar} /> {/* Pass the API key as propVar */}
      </div>
    </div>
  );
}
