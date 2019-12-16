// Test away!
// test the toggle funtions

import React from "react";
import * as rtl from "@testing-library/react";
import { fireEvent, render } from "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

test("renders Controls", () => {
  const wrapper = rtl.render(<Controls />);

  expect(wrapper.asFragment()).toMatchSnapshot();
});

test("lock and open render", () => {
  const wrapper = rtl.render(<Controls />);
  const locked = wrapper.getByText(/lock gate/i);
  const opened = wrapper.getByText(/close gate/i);

  expect(locked).toBeDefined();
  expect(opened).toBeDefined();
});

test("open/close state changes X1 times", () => {
  const toggleClosed = jest.fn();
  const wrapper = rtl.render(<Controls toggleClosed={toggleClosed} />);

  const button = wrapper.getByText(/close gate/i);
  rtl.act(() => {
    rtl.fireEvent.click(button);
  });
  expect(toggleClosed).toHaveBeenCalledTimes(1);
});

test("mock lock button rendered X0 times", () => {
  const mock = jest.fn();
  const wrapper = rtl.render(<Controls toggleLocked={mock} />);

  const button = wrapper.getByText(/lock gate/i);
  rtl.act(() => {
    rtl.fireEvent.click(button);
  });
  expect(mock).toHaveBeenCalledTimes(0);
});