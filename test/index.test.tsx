import useLoad from '../src/index';
import { act, renderHook } from '@testing-library/react-hooks';
import expect from 'expect';

describe('initial state', () => {
  it('get initial state which must be false', () => {
    const { result } = renderHook(useLoad);

    act(() => {
      result.current.isLoading('test');
    });

    expect(result.current.isLoading('test')).toBe(false);
  });
});

describe('initial custom state', () => {
  it('get initial custom state which must be true', () => {
    const { result } = renderHook(useLoad);

    act(() => {
      result.current.isLoading('test', true);
    });

    expect(result.current.isLoading('test')).toBe(true);
  });
});

describe('start load', () => {
  it('start load must return true', () => {
    const { result } = renderHook(useLoad);

    act(() => {
      result.current.isLoading('test');
    });

    act(() => {
      result.current.startLoad('test');
    });

    expect(result.current.isLoading('test')).toBe(true);
  });
});

describe('stop load', () => {
  it('stop load must return false', () => {
    const { result } = renderHook(useLoad);

    act(() => {
      result.current.isLoading('test', true);
    });

    act(() => {
      result.current.stopLoad('test');
    });

    expect(result.current.isLoading('test')).toBe(false);
  });
});

describe('multiple events', () => {
  it('start then stop load so it must return false', () => {
    const { result } = renderHook(useLoad);

    act(() => {
      result.current.isLoading('test');
    });

    act(() => {
      result.current.startLoad('test');
    });

    act(() => {
      result.current.stopLoad('test');
    });

    expect(result.current.isLoading('test')).toBe(false);
  });
});
