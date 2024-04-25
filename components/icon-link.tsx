import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

interface IconLinkProps {
    icon: React.ReactNode;
    tooltipContent: string;
    expanded: boolean;
    isSelected?: boolean;
    onClick?: () => void;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, tooltipContent, expanded, isSelected=false, onClick }) => {
    return (
        <TooltipProvider>   
        <Tooltip>
            <TooltipTrigger asChild>
                <div 
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${isSelected ? "text-primary bg-muted" : "text-muted-foreground"} transition-all hover:text-primary`}
                onClick={onClick}
                >
                    {icon}
                    {expanded && (
                        <span>{tooltipContent}</span>
                    )}
                </div>
            </TooltipTrigger>
            {!expanded && <TooltipContent side="right">{tooltipContent}</TooltipContent>}
        </Tooltip>
        </TooltipProvider>
    )
}

interface MobileIconLinkProps {
    name: string;
    icon: React.ReactNode;
    isSelected?: boolean;
    onClick?: () => void;
}

const MobileIconLink: React.FC<MobileIconLinkProps> = ({ name, icon, isSelected=false, onClick}) => {
    return (
            <div
                onClick={onClick}
                className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${isSelected ? "text-muted-foreground" : "text-foreground"} hover:text-foreground`}
            >
                {icon}
                {name}
            </div>
         
    )
}

export { IconLink, MobileIconLink }