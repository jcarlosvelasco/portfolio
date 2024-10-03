/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly EDGE_CONFIG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}