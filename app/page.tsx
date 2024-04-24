"use client"
import { Dashboard } from "@/components/dashboard";
import Tasks from "@/components/tasks";
import { useState } from "react";

export type Tabs = "Dashboard" | "Notifications" | "Tasks" | "Notes" | "Calendar";

export default function Home() {
  type Tabs = "Dashboard" | "Notifications" | "Tasks" | "Notes" | "Calendar";
  const [activeTab, setActiveTab] = useState<Tabs>("Tasks");
  
  // TODO: Add the rest of the tabs and change the activeTabContent based on the activeTab
  let activeTabContent = <Tasks />;
  return (
    <main>
      <Dashboard children={activeTabContent} setActiveTabOnClick={setActiveTab} />
    </main>
  );
}
