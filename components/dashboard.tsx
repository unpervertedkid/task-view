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
    Search,
    Settings,
    SquareCheckBig
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import IconLink from "@/components/icon-link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { toast } from "sonner"
import { Tabs } from "@/app/page"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

interface DashboardProps {
    children: React.ReactNode;
    setActiveTabOnClick: (tab: Tabs) => void;
}

export function Dashboard({ children, setActiveTabOnClick }: DashboardProps) {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

    return (
        <div className={`grid min-h-screen w-full transition-all duration-200 ease-in-out ${isSidePanelOpen ? 'md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]' : 'md:grid-cols-[60px,1fr] lg:grid-cols-[60px,1fr] gap-4'}`}>
            <div className={`hidden border-r bg-muted/40 md:block transition-all duration-200 ease-in-out ${isSidePanelOpen ? '' : 'w-20'}`}>
                <div className="flex h-full max-h-screen flex-col gap-4">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <IconLink
                            icon={<Package2 className="h-6 w-6" />}
                            tooltipContent="Acme Inc"
                            isSidePanelOpen={isSidePanelOpen}
                        />
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <IconLink
                                icon={<Home className="h-5 w-5" />}
                                tooltipContent="Dashboard"
                                isSidePanelOpen={isSidePanelOpen}
                                onClick={() => {
                                    toast("Active tab changed to Dashboard");
                                    setActiveTabOnClick("Dashboard");
                                }
                                }
                            />
                            <IconLink
                                icon={<Bell className="h-5 w-5" />}
                                tooltipContent="Notifications"
                                isSidePanelOpen={isSidePanelOpen}
                                onClick={() => {
                                    toast("Active tab changed to Notifications")
                                    setActiveTabOnClick("Notifications");
                                }
                                }
                            />
                            <IconLink
                                icon={<SquareCheckBig className="h-5 w-5" />}
                                tooltipContent="Tasks"
                                isSidePanelOpen={isSidePanelOpen}
                                isSelected={true}
                                onClick={() => {
                                    toast("Active tab changed to Tasks");
                                    setActiveTabOnClick("Tasks");
                                }
                                }
                            />
                            <IconLink
                                icon={<NotebookPen className="h-5 w-5" />}
                                tooltipContent="Notes"
                                isSidePanelOpen={isSidePanelOpen}
                                onClick={() => {
                                    toast("Active tab changed to Notes");
                                    setActiveTabOnClick("Notes");
                                }
                                }
                            />
                            <IconLink
                                icon={<Calendar className="h-5 w-5" />}
                                tooltipContent="Calendar"
                                isSidePanelOpen={isSidePanelOpen}
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
                                    <Button variant="outline" className="w-full mb-2" onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}>
                                        {isSidePanelOpen ? (
                                            <div className="flex items-center justify-between">
                                                <span className="mr-2">Collapse</span>
                                                <PanelRightOpen className="h-5 w-5" />
                                            </div>
                                        ) :
                                            <div>
                                                <PanelRightClose className="h-5 w-5" />
                                            </div>
                                        }
                                    </Button>
                                </TooltipTrigger>
                                {!isSidePanelOpen && <TooltipContent side="right">Expand</TooltipContent>}
                            </Tooltip>
                        </TooltipProvider>
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
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Bell className="h-5 w-5" />
                                    Notifications
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        6
                                    </Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                                >
                                    <SquareCheckBig className="h-5 w-5" />
                                    Tasks
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <NotebookPen className="h-5 w-5" />
                                    Notes
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Calendar className="h-5 w-5" />
                                    Calendar
                                </Link>
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
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search tasks..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
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
