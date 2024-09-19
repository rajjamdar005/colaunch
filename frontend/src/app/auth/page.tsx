'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  const handleSocialLogin = (provider: string) => {
    signIn(provider)  // Trigger NextAuth signIn for a provider
  }

  return (
    <div className='bg-white'>
    <div className="container mx-auto m-10 bg-white text-black p-6 max-w-sm">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <div className="text-sm">
              <a href="#" className="text-primary hover:underline">Forgot Password?</a>
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </TabsContent>
        <TabsContent value="register">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" placeholder="Enter company name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userName">User Name</Label>
              <Input id="userName" placeholder="Enter user name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registerEmail">Email</Label>
              <Input id="registerEmail" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registerPassword">Password</Label>
              <Input id="registerPassword" type="password" placeholder="Enter your password" required />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the terms and conditions
              </label>
            </div>
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full" onClick={() => handleSocialLogin('google')}>
            Google
          </Button>
          <Button variant="outline" className="w-full" onClick={() => handleSocialLogin('linkedin')}>
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
    </div>
  )
}
