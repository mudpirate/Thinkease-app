"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SignInButtonProps {
  className?: string;
}

export function SignInButton({ className }: SignInButtonProps) {
  return (
    <Button asChild className={className}>
      <Link href="/login" className="hover:bg-gray-800">
        Login
      </Link>
    </Button>
  );
}
