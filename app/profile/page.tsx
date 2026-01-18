import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import ProfilePageClient from "@/components/profile-page-client"

export default async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/")
  }

  return <ProfilePageClient user={user} />
}
