"use client"

import { FaRobot } from "react-icons/fa"; // For the AI logo

export default function authLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8">
            {/* Header with AI Logo and App Name */}
            <div className="flex flex-col items-center -mb-12">
                {/* AI Logo */}
                <FaRobot size={60} className="text-blue-600 mb-2" />
                <h1 className="text-3xl font-extrabold text-blue-600 mb-2">AI Helper</h1>
                <p className="text-lg text-gray-500">Your AI text response assistant</p>
            </div>

            {/* Page content (children, e.g., SignIn/SignUp form) */}
            <div className="flex justify-center items-center w-full">
                <div className="w-full max-w-md">{children}</div>
            </div>
        </div>
    );
}

authLayout.displayName = "authLayout";