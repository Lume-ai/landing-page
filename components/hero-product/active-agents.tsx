"use client"

import { useEffect, useState } from "react"
import { Progress } from "../ui/progress"
import { Badge } from "../ui/badge"
import { Bot, TrendingUp } from "lucide-react"

interface Agent {
  id: string
  name: string
  status: "active" | "processing" | "idle"
  tasksCompleted: number
  efficiency: number
  currentTask: string
}

const initialAgents: Agent[] = [
  {
    id: "1",
    name: "Route Optimizer",
    status: "active",
    tasksCompleted: 342,
    efficiency: 96,
    currentTask: "Optimizing 47 delivery routes",
  },
  {
    id: "2",
    name: "Inventory Manager",
    status: "processing",
    tasksCompleted: 289,
    efficiency: 94,
    currentTask: "Rebalancing warehouse stock",
  },
  {
    id: "4",
    name: "Demand Forecaster",
    status: "active",
    tasksCompleted: 428,
    efficiency: 98,
    currentTask: "Analyzing demand patterns",
  },
]

const getStatusColor = (status: Agent["status"]) => {
  switch (status) {
    case "active":
      return "bg-green-500/10 text-green-500 border-green-500/20"
    case "processing":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    case "idle":
      return "bg-gray-500/10 text-gray-500 border-gray-500/20"
  }
}

const getStatusDotColor = (status: Agent["status"]) => {
  switch (status) {
    case "active":
      return "bg-green-500"
    case "processing":
      return "bg-blue-500"
    case "idle":
      return "bg-gray-500"
  }
}

export function ActiveAgents() {
  const [agents, setAgents] = useState(initialAgents)

  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prevAgents) =>
        prevAgents.map((agent) => ({
          ...agent,
          efficiency: Math.min(100, Math.max(85, agent.efficiency + (Math.random() - 0.5) * 2)),
          tasksCompleted: agent.tasksCompleted + Math.floor(Math.random() * 3),
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-3">
      {agents.map((agent) => (
        <div
          key={agent.id}
          className="group relative overflow-hidden rounded-lg border border-border/50 bg-secondary/30 p-4 transition-all hover:border-primary/50 hover:bg-secondary/50"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div
                className={`rounded-lg p-2 ${agent.status === "active" ? "bg-green-500/10" : agent.status === "processing" ? "bg-blue-500/10" : "bg-gray-500/10"}`}
              >
                <Bot
                  className={`h-5 w-5 ${agent.status === "active" ? "text-green-500" : agent.status === "processing" ? "text-blue-500" : "text-gray-500"}`}
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-foreground">{agent.name}</h4>
                  <Badge variant="outline" className={`animate-pulse border ${getStatusColor(agent.status)}`}>
                    <div className={`mr-1.5 h-1.5 w-1.5 rounded-full ${getStatusDotColor(agent.status)}`} />
                    {agent.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{agent.currentTask}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-sm font-medium text-green-500">
                <TrendingUp className="h-4 w-4" />
                {agent.tasksCompleted}
              </div>
              <p className="text-xs text-muted-foreground">tasks</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Efficiency</span>
              <span
                className={`font-medium ${agent.efficiency >= 95 ? "text-green-500" : agent.efficiency >= 90 ? "text-blue-500" : "text-yellow-500"}`}
              >
                {agent.efficiency.toFixed(1)}%
              </span>
            </div>
            <div className="relative">
              <Progress value={agent.efficiency} className="h-2" />
              <div
                className="absolute inset-0 h-2 w-1/4 animate-progress-flow rounded-full bg-primary/30 blur-sm"
                style={{ animationDelay: `${agent.id * 0.5}s` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
