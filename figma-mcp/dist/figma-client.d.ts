export declare class FigmaClient {
    private token;
    constructor(token: string);
    private request;
    getFile(fileKey: string, params?: {
        version?: string;
        depth?: number;
        geometry?: string;
        plugin_data?: string;
    }): Promise<FigmaFile>;
    getFileNodes(fileKey: string, ids: string[], params?: {
        version?: string;
        depth?: number;
        geometry?: string;
    }): Promise<FigmaFileNodes>;
    getFileComponents(fileKey: string): Promise<FigmaComponentsResponse>;
    getFileStyles(fileKey: string): Promise<FigmaStylesResponse>;
    getImages(fileKey: string, ids: string[], params?: {
        scale?: number;
        format?: "jpg" | "png" | "svg" | "pdf";
        svg_include_id?: boolean;
        svg_simplify_stroke?: boolean;
        use_absolute_bounds?: boolean;
        version?: string;
    }): Promise<FigmaImagesResponse>;
    getImageFills(fileKey: string): Promise<FigmaImageFillsResponse>;
    getComments(fileKey: string): Promise<FigmaCommentsResponse>;
    postComment(fileKey: string, message: string, client_meta?: {
        x: number;
        y: number;
    } | {
        node_id: string;
        node_offset: {
            x: number;
            y: number;
        };
    }): Promise<FigmaComment>;
    deleteComment(fileKey: string, commentId: string): Promise<void>;
    getTeamProjects(teamId: string): Promise<FigmaTeamProjectsResponse>;
    getProjectFiles(projectId: string): Promise<FigmaProjectFilesResponse>;
    getTeamComponents(teamId: string, params?: {
        page_size?: number;
        after?: number;
        before?: number;
    }): Promise<FigmaTeamComponentsResponse>;
    getTeamStyles(teamId: string, params?: {
        page_size?: number;
        after?: number;
        before?: number;
    }): Promise<FigmaTeamStylesResponse>;
}
export interface FigmaFile {
    name: string;
    lastModified: string;
    thumbnailUrl: string;
    version: string;
    document: Record<string, unknown>;
    components: Record<string, unknown>;
    componentSets: Record<string, unknown>;
    schemaVersion: number;
    styles: Record<string, unknown>;
}
export interface FigmaFileNodes {
    name: string;
    lastModified: string;
    thumbnailUrl: string;
    version: string;
    nodes: Record<string, {
        document: Record<string, unknown>;
        components: Record<string, unknown>;
        schemaVersion: number;
        styles: Record<string, unknown>;
    }>;
}
export interface FigmaComponentsResponse {
    error: boolean;
    status: number;
    meta: {
        components: FigmaComponent[];
    };
}
export interface FigmaComponent {
    key: string;
    file_key: string;
    node_id: string;
    thumbnail_url: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    user: {
        id: string;
        handle: string;
        img_url: string;
    };
    containing_frame: {
        name: string;
        node_id: string;
        page_id: string;
        page_name: string;
        background_color: string;
        page_background_color: string;
    };
}
export interface FigmaStylesResponse {
    error: boolean;
    status: number;
    meta: {
        styles: FigmaStyle[];
    };
}
export interface FigmaStyle {
    key: string;
    file_key: string;
    node_id: string;
    style_type: string;
    thumbnail_url: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    user: {
        id: string;
        handle: string;
        img_url: string;
    };
    sort_position: string;
}
export interface FigmaImagesResponse {
    err: string | null;
    images: Record<string, string | null>;
}
export interface FigmaImageFillsResponse {
    error: boolean;
    status: number;
    meta: {
        images: Record<string, string>;
    };
}
export interface FigmaCommentsResponse {
    comments: FigmaComment[];
}
export interface FigmaComment {
    id: string;
    file_key: string;
    parent_id: string;
    user: {
        id: string;
        handle: string;
        img_url: string;
    };
    created_at: string;
    resolved_at: string | null;
    message: string;
    client_meta: Record<string, unknown>;
    order_id: string;
}
export interface FigmaTeamProjectsResponse {
    projects: FigmaProject[];
}
export interface FigmaProject {
    id: string;
    name: string;
}
export interface FigmaProjectFilesResponse {
    files: FigmaProjectFile[];
}
export interface FigmaProjectFile {
    key: string;
    name: string;
    thumbnail_url: string;
    last_modified: string;
}
export interface FigmaTeamComponentsResponse {
    error: boolean;
    status: number;
    meta: {
        components: FigmaComponent[];
        cursor: Record<string, number>;
    };
}
export interface FigmaTeamStylesResponse {
    error: boolean;
    status: number;
    meta: {
        styles: FigmaStyle[];
        cursor: Record<string, number>;
    };
}
//# sourceMappingURL=figma-client.d.ts.map