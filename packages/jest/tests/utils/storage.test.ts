import storage from "utils/storage"

describe("storage", () => {
  it("cached", () => { 
    storage.set("newKey", "hello jest" ) 
    expect(localStorage.getItem("my-app-newKey")).toEqual("hello jest")
  })

  it("set", () => {
    localStorage.setItem("my-app-newKey", "hello")
    expect(storage.get("newKey")).toEqual("hello")
  })
});
