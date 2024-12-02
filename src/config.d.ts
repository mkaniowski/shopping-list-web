export declare const BASE_URL = "http://localhost:5173";
export declare const API_URL = "http://localhost:8080";
export declare const AUTH_URL = "http://localhost:8090";
export declare const KEYCLOAK_REALM_NAME = "shopping-realm";
export declare const KEYCLOAK_URL = "http://localhost:8090";
export declare const KEYCLOAK_CLIENT_ID = "shopping-list-web";
export declare const IMG_OPTIMIZE_OPTIONS: {
    test: RegExp;
    exclude: undefined;
    include: undefined;
    includePublic: boolean;
    logStats: boolean;
    ansiColors: boolean;
    svg: {
        multipass: boolean;
        plugins: (string | {
            name: string;
            params: {
                overrides: {
                    cleanupNumericValues: boolean;
                    removeViewBox: boolean;
                };
                cleanupIDs: {
                    minify: boolean;
                    remove: boolean;
                };
                convertPathData: boolean;
                attributes?: undefined;
            };
        } | {
            name: string;
            params: {
                attributes: {
                    xmlns: string;
                }[];
                overrides?: undefined;
                cleanupIDs?: undefined;
                convertPathData?: undefined;
            };
        })[];
    };
    png: {
        quality: number;
    };
    jpeg: {
        quality: number;
    };
    jpg: {
        quality: number;
    };
    tiff: {
        quality: number;
    };
    gif: {};
    webp: {
        lossless: boolean;
    };
    avif: {
        lossless: boolean;
    };
    cache: boolean;
    cacheLocation: undefined;
};
