const styled = require("../index").default;

describe("styled-logs", () => {
  const Log = styled.log`
    color: green;
  `;
  it("correctly applies the property values", () => {
    expect(typeof Log).toBe("function");
    expect(Log.style).toContain(`color: green;`);
  });

  it("correctly inherits styles", () => {
    const Log2 = styled(Log)`
      background: yellow;
    `;
    expect(typeof Log2).toBe("function");
    expect(Log2.style).toContain(`color: green;`);
    expect(Log2.style).toContain(`background: yellow;`);

    const Log3 = styled(Log2)`
      margin: 10px;
    `;

    expect(typeof Log3).toBe("function");
    expect(Log3.style).toContain(`color: green;`);
    expect(Log3.style).toContain(`background: yellow;`);
    expect(Log3.style).toContain(`margin: 10px;`);
  });

  it("doesn't inherit the wrong styles", () => {
    const Log4 = styled(Log)`
      background: blue;
    `;
    expect(typeof Log4).toBe("function");
    expect(Log4.style).toContain(`color: green;`);
    expect(Log4.style).toContain(`background: blue;`);
    expect(Log4.style).not.toContain(`margin: 10px;`);
  });
});
