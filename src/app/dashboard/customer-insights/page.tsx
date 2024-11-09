'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  CalendarDays, 
  DollarSign, 
  Heart, 
  Search, 
  ShoppingBag, 
  Star, 
  ThumbsUp, 
  User 
} from 'lucide-react'

interface Customer {
  id: number
  name: string
  email: string
  totalPurchases: number
  engagementScore: number
  preferences: string[]
  lastInteraction: string
  recentPurchaseDate: string
}

interface CustomerData {
  customers: Customer[]
}

export default function CustomerInsightsPage() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/api/customers')
        if (!response.ok) {
          throw new Error('Failed to fetch customers')
        }
        const data: CustomerData = await response.json()
        setCustomers(data.customers)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCustomers()
  }, [])

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getEngagementLevel = (score: number) => {
    if (score >= 80) return 'High engagement rate'
    if (score >= 50) return 'Moderate engagement rate'
    return 'Low engagement rate'
  }

  const getDaysSinceDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-48">
        <p className="text-red-500">Error: {error}</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <p>Loading customers...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Customer Insights</h1>
      <div className="flex space-x-4">
        <Input
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map(customer => (
          <Card key={customer.id}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-6 w-6" />
                <span>{customer.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="info">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="info">Info</TabsTrigger>
                  <TabsTrigger value="purchases">Purchases</TabsTrigger>
                  <TabsTrigger value="engagement">Engagement</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                </TabsList>
                <TabsContent value="info" className="space-y-2">
                  <p className="text-sm">{customer.email}</p>
                  <p className="text-sm flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    Last interaction: {new Date(customer.lastInteraction).toLocaleDateString()}
                  </p>
                </TabsContent>
                <TabsContent value="purchases" className="space-y-2">
                  <p className="text-sm flex items-center">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Total purchases: ${customer.totalPurchases.toLocaleString()}
                  </p>
                  <p className="text-sm flex items-center">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Recent purchase: {getDaysSinceDate(customer.recentPurchaseDate)} days ago
                  </p>
                </TabsContent>
                <TabsContent value="engagement" className="space-y-2">
                  <p className="text-sm flex items-center">
                    <Star className="mr-2 h-4 w-4" />
                    Engagement score: {customer.engagementScore}
                  </p>
                  <p className="text-sm flex items-center">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    {getEngagementLevel(customer.engagementScore)}
                  </p>
                </TabsContent>
                <TabsContent value="preferences" className="space-y-2">
                  <p className="text-sm flex items-center">
                    <Heart className="mr-2 h-4 w-4" />
                    Preferred categories:
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    {customer.preferences.map(pref => (
                      <li key={pref}>{pref}</li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}