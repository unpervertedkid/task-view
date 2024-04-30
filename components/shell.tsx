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

export function Shell({ children }: { children: React.ReactNode }) {
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
                                name="Dashboard"
                                href="/dashboard"
                                expanded={isSidePanelOpen}
                            />
                            <IconLink
                                icon={<Bell className="h-5 w-5" />}
                                name="Notifications"
                                href="/dashboard/notifications"
                                expanded={isSidePanelOpen}
                            />
                            <IconLink
                                icon={<SquareCheckBig className="h-5 w-5" />}
                                name="Tasks"
                                href="/dashboard/tasks"
                                expanded={isSidePanelOpen}
                            />
                            <IconLink
                                icon={<NotebookPen className="h-5 w-5" />}
                                name="Notes"
                                href="/dashboard/notes"
                                expanded={isSidePanelOpen}
                            />
                            <IconLink
                                icon={<Calendar className="h-5 w-5" />}
                                name="Calendar"
                                href="/dashboard/calendar"
                                expanded={isSidePanelOpen}
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
                                href="/dashboard"
                                />

                                <MobileIconLink
                                name="Dashboard"
                                icon={<Home className="h-5 w-5" />}
                                href="/dashboard"
                                />
                                
                                <MobileIconLink
                                name="Notifications"
                                icon={<Bell className="h-5 w-5" />}
                                href="/dashboard/notifications"
                                />
                                
                                <MobileIconLink
                                name="Tasks"
                                icon={<SquareCheckBig className="h-5 w-5" />}
                                href="/dashboard/tasks"
                                />
                                
                                <MobileIconLink
                                name="Notes"
                                icon={<NotebookPen className="h-5 w-5" />}
                                href="/dashboard/notes"
                                />

                                <MobileIconLink
                                name="Calendar"
                                icon={<Calendar className="h-5 w-5" />}
                                href="/dashboard/calendar"
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
                            name="Acme Inc"
                            href="/dashboard"
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
