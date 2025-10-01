"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"

const initialData = [
  { time: "00:00", efficiency: 85, throughput: 72, errors: 8 },
  { time: "04:00", efficiency: 88, throughput: 75, errors: 6 },
  { time: "08:00", efficiency: 92, throughput: 85, errors: 4 },
  { time: "12:00", efficiency: 95, throughput: 90, errors: 3 },
  { time: "16:00", efficiency: 93, throughput: 88, errors: 5 },
  { time: "20:00", efficiency: 90, throughput: 82, errors: 7 },
  { time: "Now", efficiency: 94, throughput: 89, errors: 4 },
]

export function OperationalHealthChart() {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData]
        // Shift data and add new point
        newData.shift()
        const lastPoint = newData[newData.length - 1]
        newData.push({
          time: "Now",
          efficiency: Math.min(100, Math.max(80, lastPoint.efficiency + (Math.random() - 0.5) * 4)),
          throughput: Math.min(100, Math.max(70, lastPoint.throughput + (Math.random() - 0.5) * 5)),
          errors: Math.max(0, Math.min(15, lastPoint.errors + (Math.random() - 0.5) * 2)),
        })
        return newData
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <ChartContainer
        config={{
          efficiency: {
            label: "Efficiency",
            color: "hsl(var(--chart-1))",
          },
          throughput: {
            label: "Throughput",
            color: "hsl(var(--chart-2))",
          },
          errors: {
            label: "Errors",
            color: "hsl(var(--destructive))",
          },
        }}
        className="h-[300px] w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorThroughput" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis
              dataKey="time"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="efficiency"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorEfficiency)"
            />
            <Area
              type="monotone"
              dataKey="throughput"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorThroughput)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
