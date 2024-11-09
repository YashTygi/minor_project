import {
    Loader2,
    Moon,
    SunMedium,
    User,
    type Icon as LucideIcon,
  } from "lucide-react"
  
  export type Icon = typeof LucideIcon
  
  export const Icons = {
    sun: SunMedium,
    moon: Moon,
    user: User,
    spinner: Loader2,
  }