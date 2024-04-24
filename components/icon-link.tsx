import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

interface IconLinkProps {
    icon: React.ReactNode;
    tooltipContent: string;
    isSidePanelOpen: boolean;
    isSelected?: boolean;
    onClick?: () => void;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, tooltipContent, isSidePanelOpen, isSelected = false, onClick }) => {
    return (
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <div 
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${isSelected ? "text-primary bg-muted" : "text-muted-foreground"} transition-all hover:text-primary`}
                onClick={onClick}
                >
                    {icon}
                    {isSidePanelOpen && (
                        <span>{tooltipContent}</span>
                    )}
                </div>
            </TooltipTrigger>
            {!isSidePanelOpen && <TooltipContent side="right">{tooltipContent}</TooltipContent>}
        </Tooltip>
        </TooltipProvider>
    )
}

export default IconLink;