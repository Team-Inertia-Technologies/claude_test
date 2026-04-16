const FIGMA_API_BASE = "https://api.figma.com/v1";

export class FigmaClient {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
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

    return response.json() as Promise<T>;
  }

  getFile(fileKey: string, params?: { version?: string; depth?: number; geometry?: string; plugin_data?: string }) {
    const query = new URLSearchParams();
    if (params?.version) query.set("version", params.version);
    if (params?.depth !== undefined) query.set("depth", String(params.depth));
    if (params?.geometry) query.set("geometry", params.geometry);
    if (params?.plugin_data) query.set("plugin_data", params.plugin_data);
    const qs = query.toString();
    return this.request<FigmaFile>(`/files/${fileKey}${qs ? `?${qs}` : ""}`);
  }

  getFileNodes(fileKey: string, ids: string[], params?: { version?: string; depth?: number; geometry?: string }) {
    const query = new URLSearchParams({ ids: ids.join(",") });
    if (params?.version) query.set("version", params.version);
    if (params?.depth !== undefined) query.set("depth", String(params.depth));
    if (params?.geometry) query.set("geometry", params.geometry);
    return this.request<FigmaFileNodes>(`/files/${fileKey}/nodes?${query.toString()}`);
  }

  getFileComponents(fileKey: string) {
    return this.request<FigmaComponentsResponse>(`/files/${fileKey}/components`);
  }

  getFileStyles(fileKey: string) {
    return this.request<FigmaStylesResponse>(`/files/${fileKey}/styles`);
  }

  getImages(fileKey: string, ids: string[], params?: { scale?: number; format?: "jpg" | "png" | "svg" | "pdf"; svg_include_id?: boolean; svg_simplify_stroke?: boolean; use_absolute_bounds?: boolean; version?: string }) {
    const query = new URLSearchParams({ ids: ids.join(",") });
    if (params?.scale !== undefined) query.set("scale", String(params.scale));
    if (params?.format) query.set("format", params.format);
    if (params?.svg_include_id !== undefined) query.set("svg_include_id", String(params.svg_include_id));
    if (params?.svg_simplify_stroke !== undefined) query.set("svg_simplify_stroke", String(params.svg_simplify_stroke));
    if (params?.use_absolute_bounds !== undefined) query.set("use_absolute_bounds", String(params.use_absolute_bounds));
    if (params?.version) query.set("version", params.version);
    return this.request<FigmaImagesResponse>(`/images/${fileKey}?${query.toString()}`);
  }

  getImageFills(fileKey: string) {
    return this.request<FigmaImageFillsResponse>(`/files/${fileKey}/images`);
  }

  getComments(fileKey: string) {
    return this.request<FigmaCommentsResponse>(`/files/${fileKey}/comments`);
  }

  postComment(fileKey: string, message: string, client_meta?: { x: number; y: number } | { node_id: string; node_offset: { x: number; y: number } }) {
    return this.request<FigmaComment>(`/files/${fileKey}/comments`, {
      method: "POST",
      body: JSON.stringify({ message, client_meta }),
    });
  }

  deleteComment(fileKey: string, commentId: string) {
    return this.request<void>(`/files/${fileKey}/comments/${commentId}`, { method: "DELETE" });
  }

  getTeamProjects(teamId: string) {
    return this.request<FigmaTeamProjectsResponse>(`/teams/${teamId}/projects`);
  }

  getProjectFiles(projectId: string) {
    return this.request<FigmaProjectFilesResponse>(`/projects/${projectId}/files`);
  }

  getTeamComponents(teamId: string, params?: { page_size?: number; after?: number; before?: number }) {
    const query = new URLSearchParams();
    if (params?.page_size !== undefined) query.set("page_size", String(params.page_size));
    if (params?.after !== undefined) query.set("after", String(params.after));
    if (params?.before !== undefined) query.set("before", String(params.before));
    const qs = query.toString();
    return this.request<FigmaTeamComponentsResponse>(`/teams/${teamId}/components${qs ? `?${qs}` : ""}`);
  }

  getTeamStyles(teamId: string, params?: { page_size?: number; after?: number; before?: number }) {
    const query = new URLSearchParams();
    if (params?.page_size !== undefined) query.set("page_size", String(params.page_size));
    if (params?.after !== undefined) query.set("after", String(params.after));
    if (params?.before !== undefined) query.set("before", String(params.before));
    const qs = query.toString();
    return this.request<FigmaTeamStylesResponse>(`/teams/${teamId}/styles${qs ? `?${qs}` : ""}`);
  }
}

// Minimal type stubs — Figma API returns rich objects; these capture the top-level shape.
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
  nodes: Record<string, { document: Record<string, unknown>; components: Record<string, unknown>; schemaVersion: number; styles: Record<string, unknown> }>;
}

export interface FigmaComponentsResponse {
  error: boolean;
  status: number;
  meta: { components: FigmaComponent[] };
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
  user: { id: string; handle: string; img_url: string };
  containing_frame: { name: string; node_id: string; page_id: string; page_name: string; background_color: string; page_background_color: string };
}

export interface FigmaStylesResponse {
  error: boolean;
  status: number;
  meta: { styles: FigmaStyle[] };
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
  user: { id: string; handle: string; img_url: string };
  sort_position: string;
}

export interface FigmaImagesResponse {
  err: string | null;
  images: Record<string, string | null>;
}

export interface FigmaImageFillsResponse {
  error: boolean;
  status: number;
  meta: { images: Record<string, string> };
}

export interface FigmaCommentsResponse {
  comments: FigmaComment[];
}

export interface FigmaComment {
  id: string;
  file_key: string;
  parent_id: string;
  user: { id: string; handle: string; img_url: string };
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
  meta: { components: FigmaComponent[]; cursor: Record<string, number> };
}

export interface FigmaTeamStylesResponse {
  error: boolean;
  status: number;
  meta: { styles: FigmaStyle[]; cursor: Record<string, number> };
}
