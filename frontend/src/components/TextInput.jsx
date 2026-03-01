"use client";

import React, { useState, useRef, useEffect } from "react";
import { chat } from "@/actions/llm";

const TextInput = ({ text, setText, isTyping, handleInput }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayText, setDisplayText] = useState(""); // text shown by typewriter
  const typingInterval = useRef(null); // to clear interval

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() || loading) return;

    // 1. Determine the puzzle stage
    const isPuzzle1Done = localStorage.getItem("completedPuzzle1") === "true";
    const puzzle = isPuzzle1Done ? "puzzle_2" : "puzzle_1";

    // 2. Create the new messages array for the UI and the API call
    const newUserMessage = { role: "user", content: text };
    const updatedMessages = [...messages, newUserMessage];

    // 3. Update state correctly (using spread, NOT push)
    setMessages(updatedMessages);
    setLoading(true);
    setText(""); // Clear the input field

    try {
      // 4. Use 'updatedMessages' here because 'messages' state
      // won't update until the next render!
      const response = await chat(
        JSON.stringify(updatedMessages) + ` | Stage: ${puzzle}`,
        puzzle,
      );

      if (response?.data?.message) {
        const assistantMsg = {
          role: "assistant",
          content: response.data.message,
        };

        // Update state again with the mirror's reply
        setMessages((prev) => [...prev, assistantMsg]);
        setText(response.data.message);
        response.data.message = "";

        // If you have a typewriter function, call it here:
        // typeWriter(response.data.message);
      }
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <textarea
        className="mirror-input x-10"
        value={text} // user input or typewriter output
        onChange={handleInput}
        placeholder={loading ? "Obscura is thinking..." : "Talk to Obscura..."}
        rows={3}
        style={{
          width: "100%",
          background: isTyping
            ? "rgba(100,180,255,0.07)"
            : "rgba(255,255,255,0.04)",
          border: `1px solid ${
            isTyping ? "rgba(140,200,255,0.45)" : "rgba(180,210,255,0.18)"
          }`,
          borderRadius: "14px",
          padding: "16px 20px",
          color: "rgba(230,245,255,0.9)",
          fontSize: "20px",
          lineHeight: "1.7",
          letterSpacing: "0.04em",
          resize: "none",
          backdropFilter: "blur(12px)",
          fontFamily: "'Gill Sans', 'Optima', sans-serif",
          boxShadow: isTyping
            ? "0 0 28px rgba(100,180,255,0.22), inset 0 0 14px rgba(100,180,255,0.07)"
            : "none",
          transition: "all 0.35s ease",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        className="absolute bottom-10 right-10 w-10 aspect-square rounded-full bg-blue-500 hover:bg-blue-600 transition"
      >
        {loading ? "…" : "↵"}
      </button>
    </form>
  );
};

export default TextInput;
