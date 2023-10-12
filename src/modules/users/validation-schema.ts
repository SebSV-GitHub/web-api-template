import Joi from "joi";

const schema = Joi.object({
	name: Joi.string().required(),
	username: Joi.string().required(),
	password: Joi.string().required(),
}).required();

export default schema;
