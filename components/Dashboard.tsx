"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useRouter } from "next/navigation";
import {
  Brain,
  Calendar,
  Activity,
  Sun,
  Moon,
  Heart,
  Trophy,
  Bell,
  AlertCircle,
  PhoneCall,
  Sparkles,
  MessageSquare,
  BrainCircuit,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MoodForm } from "@/components/mood/mood-form";
import { AnxietyGames } from "@/components/games/anxiety-games";
import { ActivityLogger } from "@/components/activities/activity-logger";

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMoodModal, setShowMoodModal] = useState(false);
  const [isSavingMood, setIsSavingMood] = useState(false);
  const router = useRouter();
  const [showActivityLogger, setShowActivityLogger] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const wellnessStats = [
    {
      title: "Emotional Balance",
      value: "No data",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      description: "Average mood rating",
    },
    {
      title: "Progress Rate",
      value: "100%",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: "Your current consistency",
    },
    {
      title: "Sessions Done",
      value: 0,
      icon: Heart,
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
      description: "Total completed",
    },
    {
      title: "Activities Logged",
      value: 0,
      icon: Activity,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      description: "Planned for today",
    },
  ];

  const handleMoodSubmit = async (data: { moodScore: number }) => {
    setIsSavingMood(true);
    try {
      setShowMoodModal(false);
    } catch (error) {
      console.error("Error saving mood:", error);
    } finally {
      setIsSavingMood(false);
    }
  };

  const handleAICheckIn = () => {
    setShowActivityLogger(true);
  };

  const handleStartTherapy = () => {
    router.push("/therapy/new");
  };

  return (
    <div className="min-h-screen dark:bg-black py-8 w-full max-w-7xl ">
      <Container className="pt-20 pb-8 space-y-6">
        {/* Header Section */}
        <div className="flex bg-white px-5 py-5 rounded-xl dark:bg-black border-2 dark:border-white justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2 "
          >
            <h1 className="text-3xl font-bold dark:text-white text-black">
              Good to see you, Pirate
            </h1>
            <p className="text-gray-800 dark:text-white">
              {currentTime.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>
          <div className="flex items-center gap-4">
            <Button className="dark:border-white border-2" size="icon">
              <Bell className="h-5  w-5" />
            </Button>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="space-y-6">
          {/* Top Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Wellness Hub Card */}
            <Card className="relative dark:bg-black border-2 dark:border-white overflow-hidden group">
              <div className="absolute inset-0 bg-white dark:bg-black  " />
              <CardContent className="p-6 relative">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white  border flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white text-lg">
                        Wellness Hub
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Choose how you'd like to begin
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <Button
                      variant="default"
                      className={cn(
                        "w-full justify-between items-center p-6 h-auto group/button",
                        "bg-blue-500 hover:bg-blue-700",
                        "transition-all duration-200 group-hover:translate-y-[-2px]"
                      )}
                      onClick={handleStartTherapy}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-white">
                            Begin Therapy
                          </div>
                          <div className="text-xs text-white/80">
                            Open a new session
                          </div>
                        </div>
                      </div>
                      <div className="opacity-90 group-hover/button:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </Button>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        className={cn(
                          "flex flex-col h-[120px] px-4 py-3 group/mood hover:border-primary/50",
                          "justify-center items-center text-center",
                          "transition-all duration-200 group-hover:translate-y-[-2px] dark:border-1 dark:border-white"
                        )}
                        onClick={() => setShowMoodModal(true)}
                      >
                        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center mb-2">
                          <Heart className="w-5 h-5 text-rose-500" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">Log Mood</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            Record your feelings
                          </div>
                        </div>
                      </Button>

                      <Button
                        variant="outline"
                        className={cn(
                          "flex flex-col h-[120px] px-4 py-3 group/ai hover:border-primary/50",
                          "justify-center items-center text-center",
                          "transition-all duration-200 group-hover:translate-y-[-2px] dark:border-1 dark:border-white"
                        )}
                        onClick={handleAICheckIn}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                          <BrainCircuit className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">AI Check-In</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            Get a quick reflection
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Snapshot Card */}
            <Card className="dark:border-2 dark:border-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Daily Snapshot</CardTitle>
                    <CardDescription>
                      Here's how you're doing today —{" "}
                      {format(new Date(), "MMMM d, yyyy")}
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Loader2 className={cn("h-4 w-4", "animate-spin")} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {wellnessStats.map((stat) => (
                    <div
                      key={stat.title}
                      className={cn(
                        "p-4 rounded-lg transition-all duration-200 hover:scale-[1.02]",
                        stat.bgColor
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <stat.icon className={cn("w-5 h-5", stat.color)} />
                        <p className="text-sm font-medium">{stat.title}</p>
                      </div>
                      <p className="text-2xl font-bold mt-2">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Wellness Insights Card */}
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                  Wellness Insights
                </CardTitle>
                <CardDescription>
                  Suggestions based on your habits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4"></div>
              </CardContent>
              <div className="text-center text-muted-foreground py-8">
                <Activity className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p>Log more sessions to unlock tailored insights</p>
              </div>
            </Card>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3 space-y-6">
              <AnxietyGames />
            </div>
          </div>
        </div>
      </Container>

      <Dialog open={showMoodModal} onOpenChange={setShowMoodModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Track Your Mood</DialogTitle>
            <DialogDescription>
              Slide to record how you feel right now
            </DialogDescription>
          </DialogHeader>
          <MoodForm onSuccess={() => setShowMoodModal(false)} />
        </DialogContent>
      </Dialog>

      <ActivityLogger
        open={showActivityLogger}
        onOpenChange={setShowActivityLogger}
      />
    </div>
  );
}
