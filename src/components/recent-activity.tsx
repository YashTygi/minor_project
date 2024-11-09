import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    action: "Purchased Premium Plan",
    date: "2 hours ago",
    avatar: "/avatars/01.png",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    action: "Viewed Product Recommendations",
    date: "4 hours ago",
    avatar: "/avatars/02.png",
  },
  {
    name: "Carol Williams",
    email: "carol@example.com",
    action: "Opened Marketing Email",
    date: "6 hours ago",
    avatar: "/avatars/03.png",
  },
  {
    name: "David Brown",
    email: "david@example.com",
    action: "Updated Profile Information",
    date: "8 hours ago",
    avatar: "/avatars/04.png",
  },
  {
    name: "Eva Davis",
    email: "eva@example.com",
    action: "Left Product Review",
    date: "10 hours ago",
    avatar: "/avatars/05.png",
  },
]

export function RecentActivity({ className }: React.ComponentProps<typeof Card>) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest customer interactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.avatar} alt={activity.name} />
                <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.name}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}