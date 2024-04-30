"use client"
import { Shell } from "@/components/shell";
import  Dashboard from "@/components/tabs/dashboard";

export type Tabs = "Dashboard" | "Notifications" | "Tasks" | "Notes" | "Calendar";

export default function Home() {
  
  return (
  <main>
    <Shell>
      <Dashboard />
    </Shell>
  </main>
);
}
