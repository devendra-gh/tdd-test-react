import index from "./index";

describe("pages/EconomicNameWaitingApproval/index", () => {
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
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
  it("should properly call init with instanceId", () => {
    const props = {
      history: {
        push: jest.fn()
      },
      instanceId: "instance-Id"
    };
    index[0].init(props);
    expect(props.history.push).not.toBeCalled();
  });

  it("should properly call init without instanceId", () => {
    const props = {
      history: {
        push: jest.fn()
      }
    };
    index[0].init(props);
    expect(props.history.push).toBeCalled();
  });
});
