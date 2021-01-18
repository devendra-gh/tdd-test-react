import index from "./index";

describe("pages/EconomicLicenceIcaPayment/index", () => {
  it("should export dedReturned", () => {
    expect(index).toBeInstanceOf(Object);
  });
  it("should properly call onPageInit", () => {
    const props = {
      actions: {
        economicNameCapId: {
          update: jest.fn()
        },
        tnNumber: {
          update: jest.fn()
        }
      },
      capId: "Cap-Id",
      tnNumber: "TN-NUMBER"
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
});
