import React from 'react';

export default function OptionBox({ answer, index, selected, onSelect }) {
  return (
    <button
      key={index}
      onClick={() => onSelect(index)}
      className="block mx-auto text-center w-full max-w-[640px]"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '-0.31px',
        borderRadius: '10px',
        border: '1px solid rgba(150, 229, 255, 0.5)',
        background: selected
          ? 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)'
          : 'rgb(248, 254, 253)',
        paddingTop: '18px',
        paddingBottom: '18px',
        paddingLeft: '32px',
        paddingRight: '32px',
        color: '#15313D',
        transition: 'background 200ms ease',
        outline: 'none',
        boxShadow: 'none',
        WebkitTapHighlightColor: 'transparent'
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          e.currentTarget.style.transition = 'background 200ms ease';
          e.currentTarget.style.background = '#EAF8FF';
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.transition = 'background 200ms ease';
          e.currentTarget.style.background = 'rgb(248, 254, 253)';
        }
      }}
      onMouseDown={(e) => { e.currentTarget.style.outline = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
      onFocus={(e) => { e.currentTarget.style.outline = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {answer}
    </button>
  );
}
