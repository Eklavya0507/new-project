import { useState } from "react";
import { Bot, Mic, Paperclip, Send } from "lucide-react";
import PageTitle from "../components/PageTitle";

const starterQuestions = [
  "Explain transformers simply",
  "Quiz me on prompt engineering",
  "Review my Python code",
  "Give me a project idea",
];

export default function Tutor() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi Alex! I’m your AI tutor. What are you learning today? I can explain concepts, quiz you, or help you debug a project.",
    },
  ]);

  const sendMessage = () => {
    const question = input.trim();

    if (!question) {
      return;
    }

    setInput("");
    setMessages((current) => [
      ...current,
      { role: "user", text: question },
      {
        role: "ai",
        text: `Great question. Let’s break “${question}” into a simple mental model first, then apply it with a small example.`,
      },
    ]);
  };

  return (
    <div>
      <PageTitle
        eyebrow="Personal AI tutor"
        title="Learn with a conversation"
        description="Ask anything. Get explanations, examples, quizzes, and project guidance tailored to your level."
      />

      <div className="grid gap-5 xl:grid-cols-[1fr_300px]">
        <div className="glass flex min-h-[620px] flex-col overflow-hidden rounded-2xl">
          <div className="flex items-center gap-3 border-b border-white/10 p-4">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400">
              <Bot size={19} />
            </div>
            <div>
              <div className="text-sm font-bold">Neura Tutor</div>
              <div className="text-xs text-emerald-300">● Online • Context aware</div>
            </div>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto p-5">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : ""}`}
              >
                <div
                  className={`max-w-[78%] rounded-2xl border px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "border-violet-400/10 bg-violet-500/20"
                      : "border-white/5 bg-white/5"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
              <button className="p-2 text-slate-500 hover:text-white" aria-label="Attach">
                <Paperclip size={18} />
              </button>
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                rows="1"
                placeholder="Ask your tutor anything..."
                className="flex-1 resize-none bg-transparent py-2 text-sm outline-none"
              />
              <button className="p-2 text-slate-500 hover:text-white" aria-label="Voice input">
                <Mic size={18} />
              </button>
              <button
                onClick={sendMessage}
                className="rounded-lg bg-white p-2.5 text-slate-950"
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </div>
            <div className="mt-2 text-center text-[10px] text-slate-600">
              AI can make mistakes. Verify important information.
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="glass rounded-2xl p-5">
            <h3 className="font-black">Try asking</h3>
            <div className="mt-3 space-y-2">
              {starterQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => setInput(question)}
                  className="w-full rounded-xl bg-white/5 p-3 text-left text-xs text-slate-300 hover:bg-white/10"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <h3 className="font-black">Tutor mode</h3>
            <div className="mt-3 space-y-2">
              <button className="w-full rounded-xl border border-violet-400/10 bg-violet-500/10 p-3 text-left text-xs font-bold">
                Socratic coaching
                <span className="mt-1 block font-normal text-slate-500">
                  Ask questions instead of giving answers.
                </span>
              </button>
              <button className="w-full rounded-xl bg-white/5 p-3 text-left text-xs font-bold">
                Fast explanations
                <span className="mt-1 block font-normal text-slate-500">
                  Concise answers with examples.
                </span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
