import { test, expect } from "vitest";
import { add } from "../pkg/index";

test("add", () => {
	expect(add(1, 2)).toBe(3);
});
