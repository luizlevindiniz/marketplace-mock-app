import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    preview: {
        port: 3000,
    },
    define: {
        "process.env": process.env,
        global: "window",
    },
    resolve: {
        alias: {
            components: `${__dirname}/src/components/`,
            styles: `${__dirname}/src/styles/`,
            types: `${__dirname}/src/types/`,
            utils: `${__dirname}/src/utils/`,
            pages: `${__dirname}/src/pages/`,
            services: `${__dirname}/src/services/`,
            reducers: `${__dirname}/src/reducers/`,
            auth: `${__dirname}/src/auth/`,
        },
    },
})
