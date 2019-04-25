import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppProfileRoute extends Route {
	model(params) {
		return hash({
			tweets: this.store.query('tweet', { user_id: params.user_id }),
			user: this.store.findRecord('user', params.user_id) 
		})
	}
}