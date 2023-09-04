import { StyleRule } from '@vanilla-extract/css';

/**
 * motionSafe
 * css 모션세이프 미디어 쿼리 셋팅
 * 이 미디어 쿼리 사용해서 스타일을 넣으면 동작 줄이기모드가 활성화 되어있지 않을 때에만 에니메이션이 실행된다.
 * https://mong-blog.tistory.com/entry/CSS-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%8F%99%EC%9E%91%EC%9D%84-%EC%BB%A8%ED%8A%B8%EB%A1%A4%ED%95%98%EB%8A%94-prefers-reduced-motion
 */
export const motionSafe = (style: StyleRule) => ({
  '@media': {
    '(prefers-reduced-motion: no-preference)': style,
  },
});
