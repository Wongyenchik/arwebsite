import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "vite";

export default defineConfig({
    // assetsInclude: ["**/*.gltf"],
    base: "/arnavigation/",
    // publicDir: "static/",
    // server: {
    //     host: true,
    // },
    plugins: [basicSsl()],
});
