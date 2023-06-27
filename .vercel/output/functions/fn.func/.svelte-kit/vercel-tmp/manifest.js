export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.045c2a53.js","app":"_app/immutable/entry/app.796907cc.js","imports":["_app/immutable/entry/start.045c2a53.js","_app/immutable/chunks/index.8d34ad46.js","_app/immutable/chunks/singletons.39615b97.js","_app/immutable/chunks/index.27ddc1d0.js","_app/immutable/chunks/paths.77c33b29.js","_app/immutable/entry/app.796907cc.js","_app/immutable/chunks/index.8d34ad46.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/translate/[target_lang]/[text]",
				pattern: /^\/api\/translate\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"target_lang","optional":false,"rest":false,"chained":false},{"name":"text","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/translate/_target_lang_/_text_/_server.ts.js')
			},
			{
				id: "/game",
				pattern: /^\/game\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
