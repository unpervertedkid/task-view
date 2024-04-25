import { Button } from "@/components/ui/button"

interface TabContentProps {
    name: string;
}
export default function TabContent({name}: TabContentProps) {
    let name_in_singular = name.slice(0, -1);
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl"> {name} </h1>
            </div>
            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
            >
                <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                        You have no {name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        You can start by adding a {name_in_singular.toLocaleLowerCase()}
                    </p>
                    <Button className="mt-4">Add {name_in_singular}</Button>
                </div>
            </div>
        </>
    )
}