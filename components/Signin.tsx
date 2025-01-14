"use client"

import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // For navigation to signup page
import { into } from "@/app/actions/in";

export function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");  // State to store error message
    const [successMessage, setSuccessMessage] = useState("");  // State to store success message
    const [isLoading, setIsLoading] = useState(false);  // State to indicate loading
    const router = useRouter();

    const handleSubmit = async () => {
        setIsLoading(true);  // Set loading state before making the request
        try {
            // Attempt to sign in
            const res = await into(username, password);
            // If sign in is successful, show success message and redirect
            if (res.status == 200) {
                setSuccessMessage("Signed in successfully! Redirecting...");
                setErrorMessage(""); // Clear any previous error messages
                setTimeout(() => {
                    router.push("/"); // Redirect to home page
                }, 2000);
            }
            else if (res.status === 404) {
                setErrorMessage("User not found! Please sign up");
                setSuccessMessage("");
            }
            else if (res.status === 401) {
                setErrorMessage("Invalid password!");
                setSuccessMessage("");
            }
            else {
                setErrorMessage("Unexpected error occurred. Please try again.");
                setSuccessMessage("");
            }
        } catch (error: unknown) {
            console.error(error);
            // Handle error and display appropriate message
            setErrorMessage("An error occurred. Please try again later.");
            
            setSuccessMessage(""); // Clear success message
        }
         finally {
            setIsLoading(false);  // Set loading state back to false after request completion
            }
            
    };

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <div>
                        <div className="px-10">
                            <div className="text-3xl font-extrabold">
                                Sign in
                            </div>
                        </div>
                        <div className="pt-2">
                            {/* Username Input */}
                            <LabelledInput 
                                onChange={(e) => setUsername(e.target.value)} 
                                label="Username" 
                                placeholder="user123" 
                            />
                            {/* Password Input */}
                            <LabelledInput 
                                onChange={(e) => setPassword(e.target.value)} 
                                label="Password" 
                                type="password" 
                                placeholder="123456" 
                            />
                            {/* Error Message */}
                            {errorMessage && (
                                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
                            )}
                            {/* Success Message */}
                            {successMessage && (
                                <div className="text-green-500 text-sm mt-2">{successMessage}</div>
                            )}
                            {/* Sign In Button */}
                            <button 
                                onClick={handleSubmit} 
                                type="button" 
                                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                                disabled={isLoading}  // Disable button when loading
                            >
                                {isLoading ? "Signing In..." : "Sign In"}  {/* Button Text Change */}
                            </button>

                            {/* Sign up Link */}
                            <div className="mt-4 text-center">
                                <span className="text-sm text-gray-600">
                                    Don&apos;t have an account? 
                                </span>
                                <Link 
                                    href="/signup" 
                                    className="text-blue-600 hover:underline font-medium"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input 
                onChange={onChange} 
                type={type || "text"} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder={placeholder} 
                required 
            />
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}

Signin.displayName = "Signin";