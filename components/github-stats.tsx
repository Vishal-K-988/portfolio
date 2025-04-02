"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GitCommit, GitFork, GitPullRequest, Star } from "lucide-react"

interface GitHubStats {
  totalContributions?: number
  repositories?: number
  stars?: number
  forks?: number
  pullRequests?: number
  isLoading: boolean
  error?: string
}

export default function GitHubStats({ username }: { username: string }) {
  const [stats, setStats] = useState<GitHubStats>({
    isLoading: true,
  })
  const [contributionMonths, setContributionMonths] = useState<string[]>([])

  useEffect(() => {
    // In a real implementation, you would fetch this data from GitHub API
    // For demo purposes, we're using placeholder data
    const fetchStats = async () => {
      try {
        // Simulating API fetch delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Generate months for the contribution graph
        const months = []
        const currentDate = new Date()
        for (let i = 0; i < 12; i++) {
          const date = new Date(currentDate)
          date.setMonth(currentDate.getMonth() - 11 + i)
          months.push(date.toLocaleString("default", { month: "short" }))
        }
        setContributionMonths(months)

        // Placeholder data - in a real app, fetch from GitHub API
        setStats({
          totalContributions: 427,
          repositories: 15,
          stars: 23,
          forks: 8,
          pullRequests: 12,
          isLoading: false,
        })
      } catch (error) {
        setStats({
          isLoading: false,
          error: "Failed to load GitHub stats",
        })
      }
    }

    fetchStats()
  }, [username])

  if (stats.isLoading) {
    return (
      <div className="mt-8 p-6 border rounded-lg bg-black/40 backdrop-blur-sm animate-pulse">
        <div className="h-6 bg-white/10 rounded w-1/3 mb-4"></div>
        <div className="grid grid-cols-1 gap-4">
          <div className="h-32 bg-white/10 rounded"></div>
          <div className="h-64 bg-white/10 rounded"></div>
        </div>
      </div>
    )
  }

  if (stats.error) {
    return (
      <div className="mt-8 p-6 border border-[#2d333b] rounded-lg bg-black/40 backdrop-blur-sm">
        <p className="text-red-400">{stats.error}</p>
        <p className="text-sm text-[#8b949e] mt-2">Please check the GitHub username or try again later.</p>
      </div>
    )
  }

  // Generate contribution levels (0-4) for the heatmap
  const generateContributionData = () => {
    const data = []
    for (let week = 0; week < 53; week++) {
      const weekData = []
      for (let day = 0; day < 7; day++) {
        // Random contribution level (0-4)
        // In a real app, this would come from the GitHub API
        const level = Math.floor(Math.random() * 5)
        weekData.push(level)
      }
      data.push(weekData)
    }
    return data
  }

  const contributionData = generateContributionData()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 font-sans"
    >
      {/* GitHub Profile Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={`https://github.com/${username}.png`}
            alt={`${username}'s avatar`}
            onError={(e) => {
              // If image fails to load, show first letter of username
              const target = e.target as HTMLImageElement
              target.style.display = "none"
              target.parentElement!.innerHTML = username.charAt(0).toUpperCase()
              target.parentElement!.style.display = "flex"
              target.parentElement!.style.alignItems = "center"
              target.parentElement!.style.justifyContent = "center"
              target.parentElement!.style.fontSize = "20px"
              target.parentElement!.style.fontWeight = "bold"
            }}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{username}</h3>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#58a6ff] hover:underline"
          >
            @{username}
          </a>
        </div>
      </div>

      {/* GitHub Stats Overview - Now with BLACK THEME and TRANSPARENCY */}
      <div className="border border-[#2d333b] rounded-md mb-6 bg-black/60 backdrop-blur-sm">
        <div className="border-b border-[#2d333b] bg-[#161b22]/80 px-4 py-3">
          <h4 className="font-semibold text-[#e6edf3]">Overview</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <div className="flex items-center gap-2">
            <GitCommit className="h-5 w-5 text-[#8b949e]" />
            <div>
              <span className="font-semibold text-[#e6edf3]">{stats.totalContributions}</span>
              <span className="text-[#8b949e] text-sm ml-1">contributions</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="i-octicon-repo h-5 w-5 text-[#8b949e]"></div>
            <div>
              <span className="font-semibold text-[#e6edf3]">{stats.repositories}</span>
              <span className="text-[#8b949e] text-sm ml-1">repositories</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-[#8b949e]" />
            <div>
              <span className="font-semibold text-[#e6edf3]">{stats.stars}</span>
              <span className="text-[#8b949e] text-sm ml-1">stars</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GitFork className="h-5 w-5 text-[#8b949e]" />
            <div>
              <span className="font-semibold text-[#e6edf3]">{stats.forks}</span>
              <span className="text-[#8b949e] text-sm ml-1">forks</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GitPullRequest className="h-5 w-5 text-[#8b949e]" />
            <div>
              <span className="font-semibold text-[#e6edf3]">{stats.pullRequests}</span>
              <span className="text-[#8b949e] text-sm ml-1">pull requests</span>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Contribution Graph - BLACK BACKGROUND with TRANSPARENCY */}
      <div className="border border-[#2d333b] rounded-md mb-6 bg-black/60 backdrop-blur-sm">
        <div className="border-b border-[#2d333b] bg-[#161b22]/80 px-4 py-3 flex justify-between items-center">
          <h4 className="font-semibold text-[#e6edf3]">{stats.totalContributions} contributions in the last year</h4>
          <div className="text-xs text-[#8b949e]">Contribution activity</div>
        </div>
        <div className="p-4">
          {/* Month labels */}
          <div className="flex justify-between text-xs text-[#8b949e] mb-2 px-6">
            {contributionMonths.map((month, i) => (
              <div key={i} className="text-center">
                {month}
              </div>
            ))}
          </div>

          {/* Contribution heatmap - GREEN on BLACK */}
          <div className="flex flex-wrap gap-[3px] mb-4">
            {contributionData.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {week.map((day, dayIndex) => {
                  // GitHub green contribution colors on black background
                  const colors = [
                    "rgba(22, 27, 34, 0.3)", // 0 contributions - transparent dark background
                    "#0e4429", // 1-3 contributions - darkest green
                    "#006d32", // 4-9 contributions - dark green
                    "#26a641", // 10-19 contributions - medium green
                    "#39d353", // 20+ contributions - bright green
                  ]
                  return (
                    <div
                      key={dayIndex}
                      className="w-[10px] h-[10px] rounded-sm"
                      style={{ backgroundColor: colors[day] }}
                      title={`${day * 5} contributions`}
                    ></div>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Contribution legend - GREEN on BLACK */}
          <div className="flex items-center justify-end gap-2 text-xs text-[#8b949e]">
            <span>Less</span>
            <div className="w-[10px] h-[10px] bg-[#161b22]/30 rounded-sm border border-[#2d333b]"></div>
            <div className="w-[10px] h-[10px] bg-[#0e4429] rounded-sm"></div>
            <div className="w-[10px] h-[10px] bg-[#006d32] rounded-sm"></div>
            <div className="w-[10px] h-[10px] bg-[#26a641] rounded-sm"></div>
            <div className="w-[10px] h-[10px] bg-[#39d353] rounded-sm"></div>
            <span>More</span>
          </div>
        </div>
        <div className="border-t border-[#2d333b] bg-[#161b22]/80 px-4 py-3 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#58a6ff] hover:underline"
          >
            View all activity on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

