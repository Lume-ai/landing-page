"use client"

import { LayoutDashboard, Workflow, Package, TrendingUp, BarChart3, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Workflow, label: "Workflows", active: false },
  { icon: Package, label: "Inventory", active: false },
  { icon: TrendingUp, label: "Analytics", active: false },
  { icon: BarChart3, label: "Reports", active: false },
]

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-border/50 bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-border/50 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Package className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold text-foreground">LogisticsAI</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "secondary" : "ghost"}
            className={`w-full justify-start gap-3 ${item.active ? "bg-primary/10 text-primary hover:bg-primary/20" : "text-muted-foreground hover:text-foreground"}`}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="space-y-1 border-t border-border/50 p-4">
        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
          <Settings className="h-5 w-5" />
          Settings
        </Button>
        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-secondary/50">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/abstract-profile.png" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@logistics.ai</p>
          </div>
        </div>
      </div>
    </div>
  )
}
