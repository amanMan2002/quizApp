import React from 'react';

export default function SubmitButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden"
      style={{
        width: '141px',
        height: '50px',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '24px',
        paddingRight: '24px',
        borderRadius: '10px',
        border: '1px solid rgba(150, 229, 255, 0.5)',
        background: 'linear-gradient(to right, #C6E9F7, #E5F8FF)',
        fontSize: '22px',
        fontWeight: '600',
        fontFamily: 'Inter, sans-serif',
        lineHeight: '24px',
        letterSpacing: '-0.31px',
        textAlign: 'center',
        color: '#000',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      Submit
    </button>
  );
}
