'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'

export default function SettingsPage() {
  const [retentionPeriod, setRetentionPeriod] = useState(30)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="model">Model Configuration</TabsTrigger>
          <TabsTrigger value="email">Email Settings</TabsTrigger>
          <TabsTrigger value="data">Data Retention</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button>Save Changes</Button>
        </TabsContent>
        <TabsContent value="model" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="model-type">Model Type</Label>
            <Input id="model-type" placeholder="Enter model type" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="training-frequency">Training Frequency (days)</Label>
            <Input id="training-frequency" type="number" placeholder="Enter training frequency" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="auto-update" />
            <Label htmlFor="auto-update">Auto-update model</Label>
          </div>
          <Button>Save Configuration</Button>
        </TabsContent>
        <TabsContent value="email" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="smtp-server">SMTP Server</Label>
            <Input id="smtp-server" placeholder="Enter SMTP server" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtp-port">SMTP Port</Label>
            <Input id="smtp-port" type="number" placeholder="Enter SMTP port" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtp-username">SMTP Username</Label>
            <Input id="smtp-username" placeholder="Enter SMTP username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtp-password">SMTP Password</Label>
            <Input id="smtp-password" type="password" placeholder="Enter SMTP password" />
          </div>
          <Button>Save Email Settings</Button>
        </TabsContent>
        <TabsContent value="data" className="space-y-4">
          <div className="space-y-2">
            <Label>Data Retention Period (days)</Label>
            <Slider
              value={[retentionPeriod]}
              onValueChange={(value) => setRetentionPeriod(value[0])}
              max={365}
              step={1}
            />
            <p>Current retention period: {retentionPeriod} days</p>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="anonymize-data" />
            <Label htmlFor="anonymize-data">Anonymize inactive user data</Label>
          </div>
          <Button>Save Data Retention Settings</Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}