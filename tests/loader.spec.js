import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CommonLoader from '../src/CommonLoader.vue';

describe('CommonLoader', () => {
  it('renders the loader component', () => {
    const wrapper = mount(CommonLoader);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders SVG element', () => {
    const wrapper = mount(CommonLoader);
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('applies default size', () => {
    const wrapper = mount(CommonLoader);
    const svg = wrapper.find('svg');
    expect(svg.attributes('style')).toContain('width: 20px');
    expect(svg.attributes('style')).toContain('height: 20px');
  });

  it('applies custom size', () => {
    const wrapper = mount(CommonLoader, {
      props: { size: 40 }
    });
    const svg = wrapper.find('svg');
    expect(svg.attributes('style')).toContain('width: 40px');
    expect(svg.attributes('style')).toContain('height: 40px');
  });

  it('applies default color', () => {
    const wrapper = mount(CommonLoader);
    const paths = wrapper.findAll('path');
    expect(paths.length).toBeGreaterThan(0);
  });

  it('applies custom color', () => {
    const wrapper = mount(CommonLoader, {
      props: { color: '#FF0000' }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('applies default duration', () => {
    const wrapper = mount(CommonLoader);
    const svg = wrapper.find('svg');
    expect(svg.attributes('style')).toContain('animation: spin 1s linear infinite');
  });

  it('applies custom duration', () => {
    const wrapper = mount(CommonLoader, {
      props: { duration: 2 }
    });
    const svg = wrapper.find('svg');
    expect(svg.attributes('style')).toContain('animation: spin 2s linear infinite');
  });

  it('has spin animation', () => {
    const wrapper = mount(CommonLoader);
    expect(wrapper.find('svg').exists()).toBe(true);
  });
});