"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";

type MessageRole = "system" | "user" | "assistant";

type ConversationMessage = {
  role: MessageRole;
  content: string;
};

const AIChat = ({ propVar }: { propVar: string }) => {
  const genAI = new GoogleGenerativeAI(propVar);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [userInput, setUserInput] = useState<string>("");
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newConversation: ConversationMessage[] = [
      ...conversation,
      { role: "user", content: userInput },
    ];

    setUserInput("");
    setLoading(true);

    try {
      const prompt = `User: ${userInput}`;
      const result = await model.generateContent(prompt);

      const aiMessage = result.response.text() || "No response received.";
      setConversation([...newConversation, { role: "assistant", content: aiMessage }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setConversation([
        ...newConversation,
        { role: "assistant", content: "There was an error processing your request." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="mt-8 bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600">AI Chat</h2>
      <div className="space-y-4 mb-6">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${msg.role === "user" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}
      </div>
      {loading && <div className="text-blue-600">Generating...</div>}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="p-2 w-full border rounded-lg"
          placeholder="Ask anything..."
        />
        <button onClick={handleSendMessage} className="bg-blue-600 text-white p-2 rounded-lg">
          Send
        </button>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        ↑
      </button>
    </div>
  );
};

export default AIChat;
