import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@action
	onSubmit (description) {
		this.store.createRecord('tweet', {
			userName: "Yvone",
			description: description,
			createdAt: "2019-04-01"
		});
	}
}
