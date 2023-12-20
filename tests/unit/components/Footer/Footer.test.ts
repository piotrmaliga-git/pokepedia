/**
 * @vitest-environment happy-dom
 */

import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Footer from '../../../../src/components/Footer/Footer.vue';

describe('Footer component tests', () => {
  it('should contain the proper HTML tags', () => {
    const wrapper = mount(Footer);

    const imgTag = wrapper.find('img');
    const hrTag = wrapper.find('hr');

    expect(imgTag.exists()).toBeTruthy();
    expect(hrTag.exists()).toBeTruthy();
  });
});
