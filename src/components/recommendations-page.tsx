"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const recommendationData = [
  { id: 1, product: "Premium Headphones", segment: "Tech Enthusiasts", engagement: 0.85 },
  { id: 2, product: "Fitness Tracker", segment: "Health Conscious", engagement: 0.78 },
  { id: 3, product: "Gourmet Coffee Maker", segment: "Coffee Lovers", engagement: 0.92 },
  { id: 4, product: "Smart Home Security System", segment: "Homeowners", engagement: 0.76 },
  { id: 5, product: "Professional Camera", segment: "Photography Enthusiasts", engagement: 0.89 },
]

const scatterData = Array.from({ length: 100 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  z: Math.random() * 1000,
}))

export default function RecommendationsPage() {
  const [ageFilter, setAgeFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [frequencyFilter, setFrequencyFilter] = useState("all")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Product Recommendations</CardTitle>
          <CardDescription>Filter and view product recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <Select onValueChange={setAgeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Age Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="18-24">18-24</SelectItem>
                <SelectItem value="25-34">25-34</SelectItem>
                <SelectItem value="35-44">35-44</SelectItem>
                <SelectItem value="45+">45+</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={setLocationFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="urban">Urban</SelectItem>
                <SelectItem value="suburban">Suburban</SelectItem>
                <SelectItem value="rural">Rural</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={setFrequencyFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Purchase Frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Frequencies</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Target Segment</TableHead>
                <TableHead>Predicted Engagement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recommendationData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.segment}</TableCell>
                  <TableCell>{(item.engagement * 100).toFixed(2)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer Segmentation Visualization</CardTitle>
          <CardDescription>Interactive scatter plot of customer segments</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="Age" unit=" years" />
              <YAxis type="number" dataKey="y" name="Purchase Frequency" unit="/year" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="Customers" data={scatterData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Export as CSV</Button>
        <Button variant="outline">Export as PDF</Button>
      </div>
    </div>
  )
}