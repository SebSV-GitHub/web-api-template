import Joi from "joi";

const postInput = Joi.object({
	title: Joi.string().required(),
	content: Joi.string().required(),
}).required();

const postParameters = Joi.object({
	id: Joi.number().positive().required(),
});

export { postInput, postParameters };
