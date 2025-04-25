"use client"

import { useLukso } from "@/components/lukso-provider"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Award, Edit, Share2 } from "lucide-react"

export function ProfileHeader() {
  const { universalProfile } = useLukso()

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={universalProfile?.avatar || "/placeholder.svg"} alt={universalProfile?.name} />
          <AvatarFallback>{universalProfile?.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">{universalProfile?.name}</h1>
            <Badge className="ml-2">
              <Award className="mr-1 h-3 w-3" />
              Top Trader
            </Badge>
          </div>
          <p className="text-muted-foreground">{universalProfile?.address}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share Profile
        </Button>
        <Button size="sm">
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>
    </div>
  )
}
