// Test away!
// test lockedClass and closedClass functions

import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'

test("Display: Renders", async () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper).toBeDefined();
  });
  
  test("Display: red-led class when locked", async () => {
    const wrapper = rtl.render(<Display locked={true} />);
  
    const lockedDisplay = wrapper.getByText(/locked/i);
    expect(lockedDisplay).toHaveClass("red-led");
    expect(lockedDisplay).toHaveTextContent(/locked/i);
  });
  
  test("Display: green-led class when unlocked", async () => {
    const wrapper = rtl.render(<Display locked={false} />);
  
    const unlockedDisplay = wrapper.getByText(/unlocked/i);
    expect(unlockedDisplay).toHaveClass("green-led");
    expect(unlockedDisplay).toHaveTextContent(/unlocked/i);
  });
  
  test("Display: red-led when closed", async () => {
    const wrapper = rtl.render(<Display closed={true} />);
  
    const closedDisplay = wrapper.getByText(/closed/i);
    expect(closedDisplay).toHaveClass("red-led");
    expect(closedDisplay).toHaveTextContent(/closed/i);
  });
  
  test("Display: green-led when open", async () => {
    const wrapper = rtl.render(<Display closed={false} />);
  
    const openDisplay = wrapper.getByText(/open/i);
    expect(openDisplay).toHaveClass("green-led");
    expect(openDisplay).toHaveTextContent(/open/i);
  });