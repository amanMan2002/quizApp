import React from 'react';

export default function NavigationButtons({ currentIndex, lastIndex, onPrev, onNext }) {
  return (
    <>
      <button
        onClick={onPrev}
        className="hover:opacity-80 transition-opacity bg-transparent"
        style={{ background: 'transparent', border: 'none', padding: 0, outline: 'none', boxShadow: 'none', WebkitTapHighlightColor: 'transparent', opacity: currentIndex === 0 ? 0.4 : 1, pointerEvents: currentIndex === 0 ? 'none' : 'auto' }}
        onMouseDown={(e) => e.currentTarget.style.outline = 'none'}
        onFocus={(e) => e.currentTarget.style.outline = 'none'}
      >
        <svg width="53" height="50" viewBox="0 0 53 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <path d="M53 40C53 45.5228 48.5228 50 43 50L10 50C4.47715 50 3.91405e-07 45.5228 8.74228e-07 40L3.49691e-06 10C3.97973e-06 4.47715 4.47716 -4.242e-06 10 -3.75918e-06L43 -8.74228e-07C48.5229 -3.91405e-07 53 4.47715 53 10L53 40Z" fill={currentIndex > 0 ? 'url(#paint1_linear_right)' : 'url(#paint0_linear_left)'} />
            <path d="M43 49.5L10 49.5C4.75329 49.5 0.5 45.2467 0.500001 40L0.500003 10C0.500004 4.75329 4.7533 0.499996 10 0.499996L43 0.499999C48.2467 0.5 52.5 4.7533 52.5 10L52.5 40C52.5 45.2467 48.2467 49.5 43 49.5Z" stroke="#96E5FF" strokeOpacity="0.05"/>
            <mask id="mask0_left" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="14" y="13" width="25" height="24">
              <rect x="38.5" y="37" width="24" height="24" transform="rotate(-180 38.5 37)" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_left)">
              <path d="M22.325 24L34.5 24L34.5 26L22.325 26L27.925 31.6L26.5 33L18.5 25L26.5 17L27.925 18.4L22.325 24Z" fill="#15313D"/>
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_left" x1="53" y1="9.018" x2="-0.16274" y2="9.29101" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C6E9F7"/>
              <stop offset="1" stopColor="#E5F8FF"/>
            </linearGradient>
          </defs>
        </svg>
      </button>

      <button
        onClick={onNext}
        className="hover:opacity-80 transition-opacity bg-transparent"
        style={{ background: 'transparent', border: 'none', padding: 0, outline: 'none', boxShadow: 'none', WebkitTapHighlightColor: 'transparent', opacity: currentIndex === lastIndex ? 0.4 : 1, pointerEvents: currentIndex === lastIndex ? 'none' : 'auto' }}
        onMouseDown={(e) => e.currentTarget.style.outline = 'none'}
        onFocus={(e) => e.currentTarget.style.outline = 'none'}
      >
        <svg width="53" height="50" viewBox="0 0 53 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C0 4.47715 4.47715 0 10 0H43C48.5228 0 53 4.47715 53 10V40C53 45.5228 48.5228 50 43 50H10C4.47715 50 0 45.5228 0 40V10Z" fill="url(#paint1_linear_right)"/>
          <path d="M10 0.5H43C48.2467 0.5 52.5 4.7533 52.5 10V40C52.5 45.2467 48.2467 49.5 43 49.5H10C4.7533 49.5 0.5 45.2467 0.5 40V10C0.5 4.7533 4.7533 0.5 10 0.5Z" stroke="#96E5FF" strokeOpacity="0.05"/>
          <mask id="mask1_right" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="14" y="13" width="25" height="24">
            <rect x="14.5" y="13" width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask1_right)">
            <path d="M30.675 26H18.5V24H30.675L25.075 18.4L26.5 17L34.5 25L26.5 33L25.075 31.6L30.675 26Z" fill="#15313D"/>
          </g>
          <defs>
            <linearGradient id="paint1_linear_right" x1="0" y1="40.982" x2="53.163" y2="40.709" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C6E9F7"/>
              <stop offset="1" stopColor="#E5F8FF"/>
            </linearGradient>
          </defs>
        </svg>
      </button>
    </>
  );
}
