"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const templates = [
  { id: 1, name: "Welcome Email", type: "Email", performance: "45% Open Rate" },
  { id: 2, name: "Abandoned Cart", type: "SMS", performance: "15% Conversion Rate" },
  { id: 3, name: "Product Restock", type: "Push", performance: "30% Click-through Rate" },
  { id: 4, name: "Feedback Request", type: "Email", performance: "20% Response Rate" },
  { id: 5, name: "Birthday Offer", type: "Email", performance: "55% Open Rate" },
]

interface Template {
  id: number;
  name: string;
  type: string;
  performance: string;
}

export default function NotificationsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);


  return (
    <div className="space-y-6"> 
      <Card>
        <CardHeader>
          <CardTitle>Notification Templates</CardTitle>
          <CardDescription>Manage and create notification templates</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="library" className="space-y-4">
            <TabsList>
              <TabsTrigger value="library">Template Library</TabsTrigger>
              <TabsTrigger value="create">Create New</TabsTrigger>
            </TabsList>
            <TabsContent value="library" className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Template Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell>{template.name}</TableCell>
                      <TableCell>{template.type}</TableCell>
                      <TableCell>{template.performance}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" onClick={() => setSelectedTemplate(template)}>
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="create" className="space-y-4">
              <div className="grid w-full gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="template-name">Template Name</Label>
                  <Input id="template-name" placeholder="Enter template name" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message here" className="min-h-[100px]" />
                </div>
                <div className="flex items-center space-x-2">
                  <Button>Insert Dynamic Field</Button>
                  <Button variant="outline">Preview</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Scheduling</CardTitle>
          <CardDescription>Set up notification delivery schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="schedule-date">Date</Label>
              <Input id="schedule-date" type="date" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="schedule-time">Time</Label>
              <Input id="schedule-time" type="time" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="schedule-timezone">Timezone</Label>
              <Input id="schedule-timezone" placeholder="Select timezone" />
            </div>
            <Button>Schedule Notification</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notification Analytics</CardTitle>
          <CardDescription>Performance metrics for sent notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Notification</TableHead>
                <TableHead>Sent</TableHead>
                <TableHead>Delivered</TableHead>
                <TableHead>Opened</TableHead>
                <TableHead>Clicked</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Welcome Email</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>980</TableCell>
                <TableCell>450</TableCell>
                <TableCell>200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Abandoned Cart Reminder</TableCell>
                <TableCell>500</TableCell>
                <TableCell>495</TableCell>
                <TableCell>300</TableCell>
                <TableCell>75</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product Restock Alert</TableCell>
                <TableCell>750</TableCell>
                <TableCell>740</TableCell>
                <TableCell>500</TableCell>
                <TableCell>350</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}