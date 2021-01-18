import functions from "./functions";

describe("pages/EconomicLicenceInitialAprrovalReturned", () => {
  it("should properly call getStep", () => {
    expect(functions.getStep({ withoutNameSteps: "withoutNameSteps" })).toBe(
      "withoutNameSteps"
    );
  });
});
