import * as styleHelpers from ".";

describe("cssAdjust", () => {
  it("applies provided function over each value", () => {
    const actual = styleHelpers.cssAdjust(x => x / 2, "10px 20em 30%");
    const wanted = "5px 10em 15%";
    expect(actual).toBe(wanted);
  });
});

describe("toCssAttr", () => {
  it("returns function", () => {
    const actual = styleHelpers.toCssAttr("test");
    expect(actual).toBeInstanceOf(Function);
  });
  it("returned function accepts props and returns css string", () => {
    const props = { test: "10px" };
    const actual = styleHelpers.toCssAttr("test")(props);
    expect(actual).toBe("10px");
  });
});

describe("propStyle", () => {
  it("returns function", () => {
    const actual = styleHelpers.propStyle();
    expect(actual).toBeInstanceOf(Function);
  });
  describe("returned function takes props", () => {
    const props = { test: "10px" };
    it("returns css string if prop exists", () => {
      const actual = styleHelpers.propStyle("test")(props);
      expect(actual).toEqual("10px");
    });
    it("returns null if prop does not exist", () => {
      const actual = styleHelpers.propStyle("bad")(props);
      expect(actual).toEqual(null);
    });
  });
  describe("opts", () => {
    const props = { test: "-10.75px" };
    it("handles opts.halve", () => {
      const actual = styleHelpers.propStyle("test", { halve: true })(
        props
      );
      expect(actual).toEqual("-5.375px");
    });
    it("handles opts.negate", () => {
      const actual = styleHelpers.propStyle("test", {
        negate: true
      })(props);
      expect(actual).toEqual("10.75px");
    });
    it("handles opts.halve and opts.negate", () => {
      const actual = styleHelpers.propStyle("test", {
        negate: true,
        halve: true
      })(props);
      expect(actual).toEqual("5.375px");
    });
    it("handles no opts", () => {
      const actual = styleHelpers.propStyle("test")(props);
      expect(actual).toEqual("-10.75px");
    });
  });
});
