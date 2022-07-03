import sleep from "utils/sleep";

describe("sleep", () => {
  it("should sleep 1000 ms", async () => {
    jest.useFakeTimers();

    const act = async (callback: () => void) => {
      await sleep(1000);
      callback();
    };

    const mockCallback = jest.fn();

    const promise = act(mockCallback);

    expect(mockCallback).not.toBeCalled();

    jest.runAllTimers();

    await promise

    expect(mockCallback).toBeCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})