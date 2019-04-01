import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@tracked tweets = [
		{ id: 1, user_name: "Yvone", description: "hola, hola holaaa", created_at: "2019-04-01" },
		{ id: 2, user_name: "Yvone", description: "segundo", created_at: "2019-04-01" },
		{ id: 3, user_name: "Yvone", description: "tercero", created_at: "2019-04-01" }
	];

	@action
	onSubmit (description) {
		let tweets = this.tweets.slice();
		
		this.tweets = tweets.concat({
			id: Math.floor(Math.random() * 100) + 3,
			user_name: "Yvone",
			description: description,
			created_at: "2019-04-01"
		})
	}
}
