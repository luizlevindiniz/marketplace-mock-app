import type { Config } from "jest"

const config: Config = {
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    moduleNameMapper: {
        "components/(.*)$": `<rootDir>/src/components/$1`,
        "styles/(.*)$": `<rootDir>/src/styles/$1`,
        "types/(.*)$": `<rootDir>/src/types/$1`,
        "utils/(.*)$": `<rootDir>/src/utils/$1`,
        "pages/(.*)$": `<rootDir>/src/pages/$1`,
        "services/(.*)$": `<rootDir>/src/services/$1`,
        "reducers/(.*)$": `<rootDir>/src/reducers/$1`,
        "auth/(.*)$": `<rootDir>/src/auth/$1`,
    },
}

export default config
