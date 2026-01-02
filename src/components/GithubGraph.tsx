"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IconLoader2, IconBrandGithub } from "@tabler/icons-react";
import ActivityCalendar from "react-activity-calendar";
import { childVariant } from "./ui/animation-wrapper";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const GithubGraph = () => {
  const [data, setData] = useState<ContributionDay[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    currentStreak: 0,
    longestStreak: 0,
  });

  const getLevel = (count: number): number => {
    if (count === 0) return 0;
    if (count < 5) return 1;
    if (count < 10) return 2;
    if (count < 20) return 3;
    return 4;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/contributions");
        const json: { date: string; count: number }[] = await res.json();
        
        const formatted: ContributionDay[] = json.map((day) => ({
          date: day.date,
          count: day.count,
          level: getLevel(day.count),
        }));

        // Calculate Stats
        const total = formatted.reduce((acc, curr) => acc + curr.count, 0);
        
        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;

        // Iterate to find longest streak
        for (const day of formatted) {
          if (day.count > 0) {
            tempStreak++;
            longestStreak = Math.max(longestStreak, tempStreak);
          } else {
            tempStreak = 0;
          }
        }

        // Calculate current streak (working backwards from the end)
        // Check if the last day has contributions, if so count backwards
        // Note: activity-calendar usually returns data up to 'today' or 'yesterday'
        for (let i = formatted.length - 1; i >= 0; i--) {
            if (formatted[i].count > 0) {
                currentStreak++;
            } else {
                // If it's the very last day and it's 0, it might just be that I haven't coded *today* yet.
                // But usually strict streak means contiguous days > 0. 
                // We'll break if we hit a 0, unless it is the very last day? 
                // Let's stick to strict definition: 0 break chain.
                // However, if the last item is today and is 0, we might want to check yesterday to see if streak is still valid but pending today?
                // For simplicity: break on first 0.
                break;
            }
        }
        
        setStats({ total, currentStreak, longestStreak });
        setData(formatted);
      } catch (err) {
        console.error("Failed to load contributions:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      variants={childVariant}
      className="flex flex-col font-sans w-full max-w-5xl mx-auto mt-10"
    >
      {/* Glassmorphic Container */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl p-6 md:p-8">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
               <IconBrandGithub size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                GitHub Activity
              </h3>
              <p className="text-muted-foreground text-sm">
                Contributions over the last year
              </p>
            </div>
          </div>
          
          {/* Stats Bar */}
          {!loading && (
             <div className="grid grid-cols-3 gap-4 md:gap-8 bg-white/5 p-4 rounded-2xl border border-white/5">
               <div className="text-center">
                 <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Total</p>
                 <p className="text-2xl font-bold text-white">{stats.total}</p>
               </div>
               <div className="text-center border-l border-white/10 pl-4 md:pl-8">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Current Streak</p>
                  <p className="text-2xl font-bold text-green-400">{stats.currentStreak} <span className="text-sm font-normal text-muted-foreground">days</span></p>
               </div>
               <div className="text-center border-l border-white/10 pl-4 md:pl-8">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Best Streak</p>
                  <p className="text-2xl font-bold text-blue-400">{stats.longestStreak} <span className="text-sm font-normal text-muted-foreground">days</span></p>
               </div>
             </div>
          )}
        </div>

        {/* Graph Content */}
        {loading ? (
          <div className="w-full h-40 flex flex-col justify-center items-center gap-4">
            <IconLoader2 className="animate-spin text-green-500" size={32} />
            <span className="text-muted-foreground text-sm animate-pulse">Syncing with GitHub...</span>
          </div>
        ) : !data || data.length === 0 ? (
          <p className="my-8 text-muted-foreground text-center text-sm bg-white/5 p-4 rounded-xl">
            No GitHub contribution data available.
          </p>
        ) : (
          <div
            className="overflow-x-auto pb-2 relative z-10"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>
              {`
                /* Hide scrollbar for Chrome, Safari and Opera */
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            <ActivityCalendar
              data={data}
              blockSize={13}
              blockRadius={4}
              blockMargin={5}
              fontSize={14}
              theme={{
                dark: [
                  "rgba(255,255,255,0.05)", // level 0 - very subtle
                  "rgba(14, 165, 233, 0.4)", // level 1
                  "rgba(14, 165, 233, 0.6)", // level 2
                  "rgba(14, 165, 233, 0.8)", // level 3
                  "rgba(14, 165, 233, 1)"    // level 4
                ],
                light: [
                  // Fallbacks if light mode is ever used, but mainly optimized for dark
                  "#ebedf0",
                  "#9be9a8",
                  "#40c463",
                  "#30a14e",
                  "#216e39"
                ],
              }}
              colorScheme="dark"
              showWeekdayLabels
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GithubGraph;
