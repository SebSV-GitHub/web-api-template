import loadBodyParser from "./body-parser.js";
import cors from "./cors.js";

const loaders = [loadBodyParser(), cors()];

export default loaders;
