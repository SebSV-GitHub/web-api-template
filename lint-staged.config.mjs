const config = {
	"**/*.ts": [
		() => "tsc -p tsconfig.json --noEmit",
		"jest --bail --findRelatedTests --passWithNoTests",
	],
	"*": ["xo", "prettier --check"],
};

export default config;
