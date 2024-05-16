import type { Config } from "jest"

const config: Config = {
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/components",
    },
}

export default config
