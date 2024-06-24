import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vercelPreset } from "@vercel/remix/vite"
import { remixDevTools } from "remix-development-tools"

export default defineConfig({
  server : {
    port: 3000,
    open: true,
  },
  plugins: [
    remixDevTools(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes( (define) => {
          define("/", "routes/_index.tsx");
        });
      },
      presets: [vercelPreset()]
    }),
    tsconfigPaths(),
  ],
});
