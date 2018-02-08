export class Service {
	constructor(Model) {
		this.model = Model;
		this.processQuery = (query = Promise, result = false) =>
			new Promise((resolve, reject) => {
				query
					.then(data => resolve(data ? (result ? data : true) : data))
					.catch(err => reject(err));
			});
	}

	/**
	 * @author Pablo Ramirez
	 * @description Consulta en la base de datos.
	 */
	find(
		params = {
			args: {},
			visible: '',
			result: false
		}
	) {
		const query = this.model.find(params.args, params.visible);
		return this.processQuery(query, params.result);
	}

	/**
	 * @author Pablo Ramirez
	 * @description Consulta un unico registro
	 */
	findOne(
		params = {
			args: {},
			visible: '',
			result: false
		}
	) {
		const query = this.model.findOne(params.args, params.visible);
		return this.processQuery(query, params.result);
	}

	/**
	 * @author Pablo Ramirez
	 * @description Consulta un unico registro y lo actualiza
	 */
	findOneAndUpdate(
		params = {
			args: {},
			body: {},
			visible: '',
			result: false
		}
	) {
		const query = this.model.findOneAndUpdate(
			params.args,
			params.body,
			params.visible
		);
		return this.processQuery(query, params.result);
	}

	/**
	 * @author Pablo Ramirez
	 * @description Crea un resgitro.
	 */
	create(
		params = {
			body: {},
			result: false
		}
	) {
		const query = new this.model(params.body).save();
		return this.processQuery(query, params.result);
	}
}
