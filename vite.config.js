import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
    // assetsInclude: ["**/*.gltf"],
    base: "/arnavigation/",
    // publicDir: "static/",
    // server: {
    //     host: true,
    // },
    plugins: [vue()],
});
