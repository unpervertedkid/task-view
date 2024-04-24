import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"

interface IconLinkProps {
    href: string;
    icon: React.ReactNode;
    tooltipContent: string;
    expanded: boolean;
    isSelected?: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon, tooltipContent, expanded, isSelected = false }) => {
    return (
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    href={href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${isSelected ? "text-primary bg-muted" : "text-muted-foreground"} transition-all hover:text-primary`}
                >
                    {icon}
                    {expanded && (
                        <span>{tooltipContent}</span>
                    )}
                </Link>
            </TooltipTrigger>
            {!expanded && <TooltipContent side="right">{tooltipContent}</TooltipContent>}
        </Tooltip>
        </TooltipProvider>
    )
}

export default IconLink;