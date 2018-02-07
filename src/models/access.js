const commonProtection = '-_id -__v ';
const commonPublic = '-_id -__v ';

function open(access = false) {
	return access ? this.public : this.protected;
}

const user = {
	protected: commonProtection + '',
	model: '',
	public: commonPublic + '',
	open
};

export { user };
