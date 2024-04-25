"use client"
import { Shell } from "@/components/shell";
import Tasks from "@/components/tabs/tasks";
import  Dashboard from "@/components/tabs/dashboard";
import Notifications from "@/components/tabs/notifications";
import Notes from "@/components/tabs/notes";
import Calendar from "@/components/tabs/calendar";
import { useState } from "react";

export type Tabs = "Dashboard" | "Notifications" | "Tasks" | "Notes" | "Calendar";

export default function Home() {
  type Tabs = "Dashboard" | "Notifications" | "Tasks" | "Notes" | "Calendar";
  const [activeTab, setActiveTab] = useState<Tabs>("Dashboard");

  const tabs: Record<Tabs, JSX.Element> = {
    Dashboard: <Dashboard />,
    Notifications: <Notifications />,
    Tasks: <Tasks />,
    Notes: <Notes />,
    Calendar: <Calendar />,
  };

  let activeTabContent = tabs[activeTab];
  
  return (
  <main>
    <Shell activeTab={activeTab} setActiveTabOnClick={setActiveTab}>
      {activeTabContent}
    </Shell>
  </main>
);
}
