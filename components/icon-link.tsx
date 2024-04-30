'use client';
import clsx from "clsx";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IconLinkProps {
    icon: React.ReactNode;
    name: string;
    href: string;
    expanded: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, name, href, expanded }) => {
    const pathname = usePathname();

    const linkClasses = clsx(
        'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
        {
            'text-primary bg-muted': pathname === href && name != "Acme Inc",
            'text-muted-foreground': pathname !== href || name === "Acme Inc"
        }
    );

    return (
        <Link
        key={name}
        href={href}
        >
        <TooltipProvider>   
        <Tooltip>
            <TooltipTrigger asChild>
                <div className={linkClasses}
                >
                    {icon}
                    {expanded && (
                        <span>{name}</span>
                    )}
                </div>
            </TooltipTrigger>
            {!expanded && <TooltipContent side="right">{name}</TooltipContent>}
        </Tooltip>
        </TooltipProvider>
        </Link>
    )
}

interface MobileIconLinkProps {
    name: string;
    icon: React.ReactNode;
    href: string;
}

const MobileIconLink: React.FC<MobileIconLinkProps> = ({ name, icon, href }) => {
    const pathname = usePathname();

    const linkClasses = clsx(
        'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground',
        {
            'text-foreground': pathname === href || name === "Acme Inc",
            'text-muted-foreground': pathname !== href && name !== "Acme Inc"
        }
    );

    return (
            <Link
            key={name}
            href={href}
            className={linkClasses}
            >
                {icon}
                {name}
            </Link>
         
    )
}

export { IconLink, MobileIconLink }