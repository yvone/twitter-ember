import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
	model () {
		return [
			{ id: 1, user_name: "Yvone", description: "hola, hola holaaa", created_at: "2019-04-01" },
			{ id: 2, user_name: "Yvone", description: "segundo", created_at: "2019-04-01" },
			{ id: 3, user_name: "Yvone", description: "tercero", created_at: "2019-04-01" }
		];
	}
}
