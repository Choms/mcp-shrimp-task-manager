import { z } from "zod";
import { RelatedFileType } from "../../types/index.js";
export declare const updateTaskContentSchema: z.ZodObject<{
    taskId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    dependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    relatedFiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        type: z.ZodNativeEnum<typeof RelatedFileType>;
        description: z.ZodOptional<z.ZodString>;
        lineStart: z.ZodOptional<z.ZodNumber>;
        lineEnd: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        type: RelatedFileType;
        description?: string | undefined;
        lineStart?: number | undefined;
        lineEnd?: number | undefined;
    }, {
        path: string;
        type: RelatedFileType;
        description?: string | undefined;
        lineStart?: number | undefined;
        lineEnd?: number | undefined;
    }>, "many">>;
    implementationGuide: z.ZodOptional<z.ZodString>;
    verificationCriteria: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    taskId: string;
    name?: string | undefined;
    description?: string | undefined;
    relatedFiles?: {
        path: string;
        type: RelatedFileType;
        description?: string | undefined;
        lineStart?: number | undefined;
        lineEnd?: number | undefined;
    }[] | undefined;
    notes?: string | undefined;
    dependencies?: string[] | undefined;
    implementationGuide?: string | undefined;
    verificationCriteria?: string | undefined;
}, {
    taskId: string;
    name?: string | undefined;
    description?: string | undefined;
    relatedFiles?: {
        path: string;
        type: RelatedFileType;
        description?: string | undefined;
        lineStart?: number | undefined;
        lineEnd?: number | undefined;
    }[] | undefined;
    notes?: string | undefined;
    dependencies?: string[] | undefined;
    implementationGuide?: string | undefined;
    verificationCriteria?: string | undefined;
}>;
export declare function updateTaskContent({ taskId, name, description, notes, relatedFiles, dependencies, implementationGuide, verificationCriteria, }: z.infer<typeof updateTaskContentSchema>): Promise<{
    content: {
        type: "text";
        text: string;
    }[];
    isError?: undefined;
} | {
    content: {
        type: "text";
        text: string;
    }[];
    isError: boolean;
}>;
