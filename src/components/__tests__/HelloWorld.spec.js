import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

describe('HelloWorld', () => {
  it('renders properly with default props', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain('Hello World');
  });

  it('renders properly with custom msg prop', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello Vitest',
      },
    });
    // Assert something that is not true
    expect(wrapper.text()).toContain('Incorrect Message');
  });
});
