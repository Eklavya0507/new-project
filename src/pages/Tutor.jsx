import { useState } from "react";
import { Bot, Send, Sparkles, User } from "lucide-react";

const suggestions = [
  "Explain React hooks simply",
  "Give me a JavaScript practice problem",
  "Help me understand machine learning"
];

export default function Tutor() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm your NeuraLearn AI Tutor. What are you learning today?"
    }
  ]);

  function sendMessage(event) {
    event.preventDefault();

    const trimmed = input.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      {
        role: "assistant",
        text: `Great question. Let's break "${trimmed}" into simple steps. Start by identifying the main concept, then we'll work through a small example together.`
      }
    ]);

    setInput("");
  }

  return (
    <section className="container-page py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-white">
            <Bot size={28} />
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
            AI Tutor
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Ask questions, practice concepts, and get explanations tailored to your learning level.
          </p>
        </div>

        <div className="card mt-10 overflow-hidden">
          <div className="min-h-[480px] space-y-5 bg-slate-50 p-5 sm:p-8">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
                    <Bot size={17} />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.text}
                </div>

                {message.role === "user" && (
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-200 text-slate-600">
                    <User size={17} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 bg-white p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Sparkles size={13} />
                  {suggestion}
                </button>
              ))}
            </div>

            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask anything about your course..."
                className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              <button className="btn-primary !px-4" aria-label="Send message">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
