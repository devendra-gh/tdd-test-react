import index from "./index";

describe("pages/economicLicencePendingICApayment/index", () => {
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
      submitDate: "submit-date",
      tnNumber: "TN-NUMBER"
    };
    expect(index[0].props.buttons[0].onClick(props)).toBeInstanceOf(Object);
  });
});
