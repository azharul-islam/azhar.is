export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BIqU_glH.js",app:"_app/immutable/entry/app.D_asAVzs.js",imports:["_app/immutable/entry/start.BIqU_glH.js","_app/immutable/chunks/0A3EN4Up.js","_app/immutable/chunks/Cqv5oa7h.js","_app/immutable/chunks/BaZ9SfP_.js","_app/immutable/chunks/Akokx1nm.js","_app/immutable/entry/app.D_asAVzs.js","_app/immutable/chunks/BaZ9SfP_.js","_app/immutable/chunks/Akokx1nm.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Cqv5oa7h.js","_app/immutable/chunks/CrWHtQv4.js","_app/immutable/chunks/CmkAA9gE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
