import { z } from "zod";
export declare const listTasksSchema: z.ZodObject<{
    status: z.ZodEnum<["all", "pending", "in_progress", "completed"]>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "in_progress" | "completed" | "all";
}, {
    status: "pending" | "in_progress" | "completed" | "all";
}>;
export declare function listTasks({ status }: z.infer<typeof listTasksSchema>): Promise<{
    content: {
        type: "text";
        text: string;
    }[];
}>;
