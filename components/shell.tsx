"use client"
import {
    Bell,
    Calendar,
    CircleUser,
    Home,
    Menu,
    NotebookPen,
    Package2,
    PanelRightClose,
    PanelRightOpen,
    Settings,
    SquareCheckBig
} from "lucide-react"
import { useState } from "react"

import { Tabs } from "@/app/page"
import { IconLink, MobileIconLink } from "@/components/icon-link"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "sonner"

interface ShellProps {
    children: React.ReactNode;
    activeTab: Tabs;
    setActiveTabOnClick: (tab: Tabs) => void;
}

export function Shell({ children, activeTab, setActiveTabOnClick }: ShellProps) {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

    return (
        <div className={`grid min-h-screen w-full transition-all duration-200 ease-in-out ${isSidePanelOpen ? 'md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]' : 'md:grid-cols-[60px,1fr] lg:grid-cols-[60px,1fr] gap-4'}`}>
            <div className={`hidden border-r bg-muted/40 md:block transition-all duration-200 ease-in-out ${isSidePanelOpen ? '' : 'w-20'}`}>
                <div className="flex h-full max-h-screen flex-col gap-4">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className="w-full mb-2" onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}>
                                        {isSidePanelOpen ? (
                                            <div className="flex items-center justify-end">
                                                <PanelRightOpen className="h-5 w-5" />
                                            </div>
                                        ) :
                                            <div>
                                                <PanelRightClose className="h-5 w-5" />
                                            </div>
                                        }
                                    </div>
                                </TooltipTrigger>
                                {<TooltipContent side="right">{isSidePanelOpen ? "Collapse" : "Expand"}</TooltipContent>}
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <IconLink
                                icon={<Home className="h-5 w-5" />}
                                tooltipContent="Dashboard"
                                expanded={isSidePanelOpen}
                                isSelected={activeTab === "Dashboard"}
                                onClick={() => {
                                    toast("Active tab changed to Dashboard");
                                    setActiveTabOnClick("Dashboard");
                                }
                                }
                            />
                            <IconLink
                                icon={<Bell className="h-5 w-5" />}
                                tooltipContent="Notifications"
                                expanded={isSidePanelOpen}
                                isSelected={activeTab === "Notifications"}
                                onClick={() => {
                                    toast("Active tab changed to Notifications");
                                    setActiveTabOnClick("Notifications");
                                }
                                }
                            />
                            <IconLink
                                icon={<SquareCheckBig className="h-5 w-5" />}
                                tooltipContent="Tasks"
                                expanded={isSidePanelOpen}
                                isSelected={activeTab === "Tasks"}
                                onClick={() => {
                                    toast("Active tab changed to Tasks");
                                    setActiveTabOnClick("Tasks");
                                }
                                }
                            />
                            <IconLink
                                icon={<NotebookPen className="h-5 w-5" />}
                                tooltipContent="Notes"
                                expanded={isSidePanelOpen}
                                isSelected={activeTab === "Notes"}
                                onClick={() => {
                                    toast("Active tab changed to Notes");
                                    setActiveTabOnClick("Notes");
                                }
                                }
                            />
                            <IconLink
                                icon={<Calendar className="h-5 w-5" />}
                                tooltipContent="Calendar"
                                expanded={isSidePanelOpen}
                                isSelected={activeTab === "Calendar"}
                                onClick={() => {
                                    toast("Active tab changed to Calendar");
                                    setActiveTabOnClick("Calendar");
                                }
                                }
                            />
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Separator className="mb-2" />
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" className="w-full">
                                        <div className="flex items-center justify-center">
                                            {isSidePanelOpen && <span className="mr-2">Settings</span>}
                                            <Settings className="h-5 w-5" />
                                        </div>
                                    </Button>
                                </TooltipTrigger>
                                {!isSidePanelOpen && <TooltipContent side="right">Settings</TooltipContent>}
                            </Tooltip>
                        </TooltipProvider>

                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <MobileIconLink
                                name="Acme Inc"
                                icon={<Package2 className="h-6 w-6" />}
                                isSelected={false}
                                />

                                <MobileIconLink
                                name="Dashboard"
                                icon={<Home className="h-5 w-5" />}
                                isSelected={activeTab === "Dashboard"}
                                onClick={() => {
                                    setActiveTabOnClick("Dashboard");
                                }}
                                />
                                
                                <MobileIconLink
                                name="Notifications"
                                icon={<Bell className="h-5 w-5" />}
                                isSelected={activeTab === "Notifications"}
                                onClick={() => {
                                    setActiveTabOnClick("Notifications");
                                }}
                                />
                                
                                <MobileIconLink
                                name="Tasks"
                                icon={<SquareCheckBig className="h-5 w-5" />}
                                isSelected={activeTab === "Tasks"}
                                onClick={() => {
                                    setActiveTabOnClick("Tasks");
                                }}
                                />
                                
                                <MobileIconLink
                                name="Notes"
                                icon={<NotebookPen className="h-5 w-5" />}
                                isSelected={activeTab === "Notes"}
                                onClick={() => {
                                    setActiveTabOnClick("Notes");
                                }}
                                />

                                <MobileIconLink
                                name="Calendar"
                                icon={<Calendar className="h-5 w-5" />}
                                isSelected={activeTab === "Calendar"}
                                onClick={() => {
                                    setActiveTabOnClick("Calendar");
                                }}
                                />
                            </nav>
                            <div className="mt-auto p-4">
                                <Separator className="mb-2" />
                                <Button variant="outline" className="w-full">
                                    Settings
                                    <Settings className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <IconLink
                            icon={<Package2 className="h-6 w-6" />}
                            tooltipContent="Acme Inc"
                            expanded={true}
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">

                    {children}
                </main>
            </div>
        </div>
    )
}
