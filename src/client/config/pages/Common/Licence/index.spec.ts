import index from "./index";

describe("pages/index", () => {
  it("should export dedReturned", () => {
    expect(index).toBeInstanceOf(Object);
  });
});
