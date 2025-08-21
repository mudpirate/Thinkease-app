"use client";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge";

const glowAnimation = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const SUGGESTED_QUESTIONS = [
  { text: "How can I manage my anxiety better?" },
  { text: "I've been feeling overwhelmed lately" },
  { text: "Can we talk about improving sleep?" },
  { text: "I need help with work-life balance" },
];

export default function TherapyPage() {
  const params = useParams();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    if (!isTyping) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen mt-20 border rounded-lg dark:bg-background">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-semibold">AI Therapist</h2>
            <p className="text-sm text-black">{messages.length} messages</p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto px-4">
        {messages.length === 0 ? (
          // Welcome state
          <div className="h-full flex items-center justify-center">
            <div className="max-w-xl w-full space-y-6 text-center">
              <div className="relative inline-flex flex-col items-center">
                <motion.div
                  className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"
                  initial="initial"
                  animate="animate"
                  variants={glowAnimation}
                />
                <div className="relative flex items-center gap-2 text-2xl font-semibold">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span className="bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                    AI Therapist
                  </span>
                </div>
                <p className="text-black mt-2">How can I assist you today?</p>
              </div>

              <div className="grid gap-3">
                {SUGGESTED_QUESTIONS.map((q, index) => (
                  <motion.div
                    key={q.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full h-auto py-3 px-6 text-left justify-start"
                    >
                      {q.text}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Messages
          <div className="max-w-3xl mx-auto py-6 space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.timestamp.toISOString()}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "p-4 rounded-lg",
                    msg.role === "assistant" ? "bg-muted/30" : "bg-background"
                  )}
                >
                  <div className="flex gap-3">
                    <div className="w-8 h-8 shrink-0">
                      {msg.role === "assistant" ? (
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          <Bot className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                          <User className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">
                          {msg.role === "assistant" ? "AI Therapist" : "You"}
                        </p>
                        {msg.metadata?.technique && (
                          <Badge variant="secondary" className="text-xs">
                            {msg.metadata.technique}
                          </Badge>
                        )}
                      </div>
                      <div className="prose prose-sm dark:prose-invert">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <div className="flex gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
                <p className="text-sm text-muted-foreground">Typing...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <form className="max-w-3xl mx-auto flex gap-3 items-end">
          <div className="flex-1 relative group">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..."
              className={cn(
                "w-full resize-none rounded-xl border bg-background p-3 pr-12 min-h-[48px] max-h-[200px]",
                "focus:outline-none focus:ring-2 focus:ring-primary/50",
                "placeholder:text-muted-foreground/70"
              )}
              rows={1}
            />
            <Button
              type="submit"
              size="icon"
              className={cn(
                "absolute right-2 bottom-2 h-9 w-9 rounded-xl bg-primary hover:bg-primary/90 shadow-sm shadow-primary/20"
              )}
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
        <p className="mt-2 text-xs text-center text-black">
          Press <kbd className="px-2 py-0.5 rounded bg-muted">Enter ↵</kbd> to
          send,{" "}
          <kbd className="px-2 py-0.5 rounded bg-muted ml-1">Shift + Enter</kbd>{" "}
          for a new line
        </p>
      </div>
    </div>
  );
}
