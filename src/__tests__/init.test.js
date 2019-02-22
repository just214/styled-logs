const { init } = require("../index");

describe("init util function", () => {
  const newInit = init("log", "color: purple;");
  it("binds the correct property names to the function", () => {
    expect(newInit).toHaveProperty("style");
    expect(newInit.style).toBe("color: purple;");
    expect(newInit).toHaveProperty("methodName");
    expect(newInit.methodName).toBe("log");
  });
  it("returns a function", () => {
    expect(typeof newInit).toBe("function");
  });
});
