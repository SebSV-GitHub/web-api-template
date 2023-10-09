import greet from "../src/modules/example.js";

it("should work", () => {
	const name = "test";
	const string_ = greet(name);
	expect(string_).toBe("Hello test");
});
