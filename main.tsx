
import { serve } from "https://deno.land/std@0.127.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.127.0/http/file_server.ts";


console.log("Listening on http://localhost:8000");
serve((req) => {
    const url = new URL(req.url);
    const pathname = url.pathname;

    console.log("Request:", req.method, pathname);

    if(pathname.startsWith("/api/")) {
        switch (pathname) {
            case "/api/time":
                return apiTime(req);
        }
    }

    // pathname に対応する static フォルダのファイルを返す（いわゆるファイルサーバ機能）
    // / → static/index.html
    // /hoge → static/hoge/index.html
    // /fuga.html → static/fuga.html
    // /img/piyo.jpg → static/img/piyo.jpg
    return serveDir(req, {
        fsRoot: "static",
        urlRoot: "",
        showDirListing: true,
        enableCors: true
    });
});
let kiroku = [];
let days = [];
let kosu = 0;

const apiTime = (req: Request) => {
    const params = parseSearchParams(new URL(req.url));
    const x = params.x;
    const y = params.y;
    kiroku[kosu] = x;
    days[kosu] = y;
    kosu++;
    return createJsonResponse({kiroku,days});
}


const parseSearchParams = (url: URL) => {
    const params: Record<string, string | number | boolean> = {};
    for (const p of url.searchParams) {
        const n = p[0], v = p[1];
        if (v === "")
            params[n] = true;
        else if (v === "true")
            params[n] = true;
        else if (v === "false")
            params[n] = false;
        else if (!isNaN(Number(v)))
            params[n] = +v;
        else
            params[n] = v;
    }
    return params;
};

const createJsonResponse = (obj: any) => new Response(JSON.stringify(obj), {
    headers: {
        "content-type": "application/json; charset=utf-8"
    }
});
