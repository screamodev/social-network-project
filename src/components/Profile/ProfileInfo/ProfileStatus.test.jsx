import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Димыч красава" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Димыч красава");
  });

  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Димыч красава" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).toBe(1);
  });
  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="Димыч красава" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.innerText).toBe(1);
  });
});
