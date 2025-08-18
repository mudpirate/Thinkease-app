"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Call backend to send reset email
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full flex items-center justify-center "
    >
      <Container className="flex flex-col items-center justify-center w-full">
        <Card className="w-full md:w-5/12 max-w-2xl p-8 md:p-10 rounded-3xl shadow-2xl border bg-white/10   backdrop-blur-lg mt-20">
          <div className="mb-6 text-center">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white bg-clip-text text-transparent mb-1 tracking-tight">
              Forgot Password
            </h1>
            <p className="text-base text-muted-foreground font-medium">
              Enter your email to receive a password reset link.
            </p>
          </div>
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-lg text-primary font-semibold mb-2">
                Check your email!
              </p>
              <p className="text-muted-foreground">
                If an account exists, a reset link has been sent.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-12 py-2 text-base rounded-xl bg-card bg-opacity-80 border border-primary focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-muted-foreground"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button
                className="w-full py-2 text-base rounded-xl font-bold bg-gradient-to-r from-primary to-primary/80 shadow-md hover:from-primary/80 hover:to-primary"
                size="lg"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          )}
          <div className="my-6 border-t border-primary/10" />
          <p className="text-gray-300 text-center ">
            Remembered your password?{" "}
            <Link
              href="/login"
              className="text-white font-semibold  hover:text-primary/80 transition-colors"
            >
              Login
            </Link>
          </p>
        </Card>
      </Container>
    </motion.div>
  );
}
