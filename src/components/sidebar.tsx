'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, Upload, BarChart, Bell, Users, Settings } from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard/home" },
  { name: "Data Upload", icon: Upload, href: "/dashboard/upload" },
  { name: "Recommendations", icon: BarChart, href: "/dashboard/recommendations" },
  { name: "Notifications", icon: Bell, href: "/dashboard/notifications" },
  { name: "Customer Insights", icon: Users, href: "/dashboard/customer-insights" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col border-r">
      <div className="p-6">
        <h2 className="text-2xl font-semibold tracking-tight">Analytics Pro</h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="grid gap-2 p-4">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn("justify-start", pathname === item.href && "bg-muted")}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}