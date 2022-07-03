import { render, screen } from "@testing-library/react";
import AuthButton from "components/AuthButton";
import React from "react";

describe("AuthButton", () => {
  it("should render", () => {
    render(<AuthButton>登录</AuthButton>)

    expect(screen.getByText('登录')).toBeInTheDocument();
  })
})