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
      className="flex flex-col font-sans bg-[#0c0c0c]/60 border border-border rounded-2xl shadow-lg p-6 md:p-8 mt-10"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <IconBrandGithub size={28} className="text-white" />
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          GitHub Activity
        </h3>
      </div>

      {/* Content */}
      {loading ? (
        <div className="w-full min-h-20 flex justify-center items-center">
          <IconLoader2 className="animate-spin text-gray-400" size={28} />
          <span className="ml-3 text-gray-400 text-sm">Loading contributions...</span>
        </div>
      ) : !data || data.length === 0 ? (
        <p className="my-8 text-muted-foreground text-center text-sm">
          No GitHub contribution data available.
        </p>
      ) : (
        <div
          className="overflow-x-auto rounded-lg p-3 bg-[#111]/70 border border-gray-800"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          <ActivityCalendar
  data={data}
  blockSize={14}
  blockMargin={4}
  fontSize={12}
  theme={{
    dark: [
      "#161B22", // level 0
      "#0ea5e9", // level 1
      "#0284c7", // level 2
      "#0369a1", // level 3
      "#075985"  // level 4
    ],
    light: [
      "#ebedf0",
      "#9be9a8",
      "#40c463",
      "#30a14e",
      "#216e39"
    ],
  }}
  colorScheme="dark"
/>
        </div>
      )}
    </motion.div>
  );
};

export default GithubGraph;
