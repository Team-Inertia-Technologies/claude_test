const FIGMA_API_BASE = "https://api.figma.com/v1";
export class FigmaClient {
    token;
    constructor(token) {
        this.token = token;
    }
    async request(path, options = {}) {
        const url = `${FIGMA_API_BASE}${path}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                "X-Figma-Token": this.token,
                "Content-Type": "application/json",
                ...options.headers,
            },
        });
        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Figma API error ${response.status}: ${error}`);
        }
        return response.json();
    }
    getFile(fileKey, params) {
        const query = new URLSearchParams();
        if (params?.version)
            query.set("version", params.version);
        if (params?.depth !== undefined)
            query.set("depth", String(params.depth));
        if (params?.geometry)
            query.set("geometry", params.geometry);
        if (params?.plugin_data)
            query.set("plugin_data", params.plugin_data);
        const qs = query.toString();
        return this.request(`/files/${fileKey}${qs ? `?${qs}` : ""}`);
    }
    getFileNodes(fileKey, ids, params) {
        const query = new URLSearchParams({ ids: ids.join(",") });
        if (params?.version)
            query.set("version", params.version);
        if (params?.depth !== undefined)
            query.set("depth", String(params.depth));
        if (params?.geometry)
            query.set("geometry", params.geometry);
        return this.request(`/files/${fileKey}/nodes?${query.toString()}`);
    }
    getFileComponents(fileKey) {
        return this.request(`/files/${fileKey}/components`);
    }
    getFileStyles(fileKey) {
        return this.request(`/files/${fileKey}/styles`);
    }
    getImages(fileKey, ids, params) {
        const query = new URLSearchParams({ ids: ids.join(",") });
        if (params?.scale !== undefined)
            query.set("scale", String(params.scale));
        if (params?.format)
            query.set("format", params.format);
        if (params?.svg_include_id !== undefined)
            query.set("svg_include_id", String(params.svg_include_id));
        if (params?.svg_simplify_stroke !== undefined)
            query.set("svg_simplify_stroke", String(params.svg_simplify_stroke));
        if (params?.use_absolute_bounds !== undefined)
            query.set("use_absolute_bounds", String(params.use_absolute_bounds));
        if (params?.version)
            query.set("version", params.version);
        return this.request(`/images/${fileKey}?${query.toString()}`);
    }
    getImageFills(fileKey) {
        return this.request(`/files/${fileKey}/images`);
    }
    getComments(fileKey) {
        return this.request(`/files/${fileKey}/comments`);
    }
    postComment(fileKey, message, client_meta) {
        return this.request(`/files/${fileKey}/comments`, {
            method: "POST",
            body: JSON.stringify({ message, client_meta }),
        });
    }
    deleteComment(fileKey, commentId) {
        return this.request(`/files/${fileKey}/comments/${commentId}`, { method: "DELETE" });
    }
    getTeamProjects(teamId) {
        return this.request(`/teams/${teamId}/projects`);
    }
    getProjectFiles(projectId) {
        return this.request(`/projects/${projectId}/files`);
    }
    getTeamComponents(teamId, params) {
        const query = new URLSearchParams();
        if (params?.page_size !== undefined)
            query.set("page_size", String(params.page_size));
        if (params?.after !== undefined)
            query.set("after", String(params.after));
        if (params?.before !== undefined)
            query.set("before", String(params.before));
        const qs = query.toString();
        return this.request(`/teams/${teamId}/components${qs ? `?${qs}` : ""}`);
    }
    getTeamStyles(teamId, params) {
        const query = new URLSearchParams();
        if (params?.page_size !== undefined)
            query.set("page_size", String(params.page_size));
        if (params?.after !== undefined)
            query.set("after", String(params.after));
        if (params?.before !== undefined)
            query.set("before", String(params.before));
        const qs = query.toString();
        return this.request(`/teams/${teamId}/styles${qs ? `?${qs}` : ""}`);
    }
}
//# sourceMappingURL=figma-client.js.map