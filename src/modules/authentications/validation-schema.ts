import Joi from "joi";

const schema = Joi.object({
	username: Joi.string().required(),
	password: Joi.string().required(),
}).required();

export default schema;
