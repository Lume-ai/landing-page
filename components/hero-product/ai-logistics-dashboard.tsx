"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { OperationalHealthChart } from "./operational-health-chart"
import { ActiveAgents } from "./active-agents"
import { MetricCard } from "./metric-card"
import { Sidebar } from "./sidebar"
import { Activity, Clock, DollarSign, CheckCircle2 } from "lucide-react"

export function AILogisticsDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-[1600px] space-y-4">
          {/* Live Indicator */}
          <div className="flex items-center justify-end gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-sm font-medium text-green-500">Live</span>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Workflows Automated" value="1,247" change="+12.5%" icon={Activity} trend="up" />
            <MetricCard title="Manual Hours Saved" value="3,842" change="+8.2%" icon={Clock} trend="up" />
            <MetricCard title="Cost Savings" value="$284K" change="+15.3%" icon={DollarSign} trend="up" />
            <MetricCard title="Exception Resolution" value="94.7%" change="+2.1%" icon={CheckCircle2} trend="up" />
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Operational Health Chart */}
            <Card className="overflow-hidden lg:col-span-1">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <span>Operational Health</span>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden pb-4">
                <OperationalHealthChart />
              </CardContent>
            </Card>

            {/* Active AI Agents */}
            <Card className="lg:col-span-1">
              <CardHeader className="pb-3">
                <CardTitle>Active AI Agents</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <ActiveAgents />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
