import Identicon from 'identicon.js';
import sha1 from 'js-sha1';

import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class UserModel extends Model {
	@attr('string') name;
	@attr('string') username;
	@attr('string') bio;
	@hasMany('tweet') tweets;

	get avatar(){
		let hash = sha1(this.username);
		let data = new Identicon(hash).toString();
		return `data:image/png;base64,${data}`;
	};
}