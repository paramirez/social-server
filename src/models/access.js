const commonProtection = '-_id -__v ';
const commonPublic = '-_id -__v ';

function open(access = false) {
	return access ? this.public : this.protected;
}

export const user = {
	protected: commonProtection + '',
	public: commonPublic + '',
	open
};

export const permission = {
	protected: commonProtection + '-deleted -disabled',
	public: commonPublic + '',
	open
};

export default { user };
