import index from "./index";

describe("login/index", () => {
  it("should properly call smartpassOnClick and uaepassOnClick", () => {
    index[0].props.smartpassOnClick();
    index[0].props.uaepassOnClick();
    expect(index[0].props.smartpassOnClick).toBeInstanceOf(Function);
    expect(index[0].props.uaepassOnClick).toBeInstanceOf(Function);
  });
});
