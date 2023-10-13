import Joi from "joi";

const schema = Joi.object({
	title: Joi.string().required(),
	content: Joi.string().required(),
}).required();

export default schema;
