import functions from "./functions";

describe("pages/finalRegistration", () => {
  it("should return an object", () => {
    expect(functions.getMoeRequirements()).toBeInstanceOf(Array);
  });
});
