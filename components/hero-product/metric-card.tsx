"use client"

import { Card, CardContent } from "../ui/card"
import type { LucideIcon } from "lucide-react"
import { useEffect, useState } from "react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  trend: "up" | "down"
}

export function MetricCard({ title, value, change, icon: Icon, trend }: MetricCardProps) {
  const [animatedValue, setAnimatedValue] = useState(value)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate value updates
      setAnimatedValue(value)
    }, 3000)

    return () => clearInterval(interval)
  }, [value])

  return (
    <Card className="relative overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${trend === "up" ? "from-green-500/5" : "from-red-500/5"} to-transparent`}
      />
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold tracking-tight text-foreground">{animatedValue}</p>
            <p className="text-sm font-medium text-muted-foreground">
              <span className={trend === "up" ? "text-green-500" : "text-red-500"}>{change}</span> from last month
            </p>
          </div>
          <div className={`rounded-lg p-3 ${trend === "up" ? "bg-green-500/10" : "bg-red-500/10"}`}>
            <Icon className={`h-6 w-6 ${trend === "up" ? "text-green-500" : "text-red-500"}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
