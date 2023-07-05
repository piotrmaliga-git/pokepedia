/**
 * @vitest-environment happy-dom
 */

import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import About from '../../../../src/components/About/About.vue';

describe('About component tests', () => {
  it('should contain the proper HTML tags', () => {
    const wrapper = mount(About);

    const h2Tags = wrapper.findAll('h2');
    const imgTags = wrapper.findAll('img');

    expect(h2Tags.length).toBe(2);
    expect(imgTags.length).toBe(4);
  });
});
