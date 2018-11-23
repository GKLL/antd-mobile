const routes = [
	{
		path: '/',
		models:() => [import('@/models/example')],
		component: () => import('@/routes/IndexPage'),
	},
	// {
	// 	path: '/login',
	// 	models:() => [import('@/models/login')],
	// 	component: () => import('@/routes/Login'),
	// }
]

export {
    routes
}