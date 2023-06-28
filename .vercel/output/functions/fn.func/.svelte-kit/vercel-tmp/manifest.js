export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.fc9176b7.js","app":"_app/immutable/entry/app.6f03bc45.js","imports":["_app/immutable/entry/start.fc9176b7.js","_app/immutable/chunks/index.ac08028b.js","_app/immutable/chunks/singletons.cbb364e4.js","_app/immutable/chunks/index.1b64c1a0.js","_app/immutable/chunks/paths.401b2ddd.js","_app/immutable/entry/app.6f03bc45.js","_app/immutable/chunks/index.ac08028b.js"],"stylesheets":[],"fonts":[]},
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
