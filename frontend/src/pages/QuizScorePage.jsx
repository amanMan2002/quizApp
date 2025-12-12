import React, { useState, useEffect } from 'react';

export default function QuizScorePage({ onRestart, finalScore = null, selectedAnswers = [], correctAnswers = [] }) {
  const [score, setScore] = useState(0);

  // Load Manrope font for the Keep Learning heading
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  // determine the final value to display (from prop or by computing from answers)
  const displayFinal = React.useMemo(() => {
    let df = finalScore;
    if ((df === null || df === 0) && Array.isArray(selectedAnswers) && selectedAnswers.length && Array.isArray(correctAnswers) && correctAnswers.length) {
      const correctCount = selectedAnswers.reduce((acc, sel, idx) => acc + (sel === correctAnswers[idx] ? 1 : 0), 0);
      df = correctCount * 25;
      console.log('QuizScorePage computed final from props:', { selectedAnswers, correctAnswers, correctCount, df });
    }
    return typeof df === 'number' ? df : 62;
  }, [finalScore, JSON.stringify(selectedAnswers), JSON.stringify(correctAnswers)]);

  useEffect(() => {
    setScore(0);
    const duration = 5000; // 5 seconds
    const steps = 100;
    const increment = displayFinal / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setScore(Math.floor(increment * currentStep));
      } else {
        setScore(displayFinal);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [displayFinal]);

  // debug: show what final value is being used for the animation
  React.useEffect(() => {
    console.log('QuizScorePage displayFinal:', displayFinal, 'initial score state:', score);
  }, [displayFinal]);

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#E8F4F8' }}>
      <div className="text-center">
        {/* Keep Learning text inside white rounded box */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '239px',
          height: '45px',
          background: '#FFFFFF',
          borderRadius: '8px',
          paddingTop: '10px',
          paddingRight: '31px',
          paddingBottom: '10px',
          paddingLeft: '31px',
          gap: '10px',
          boxSizing: 'border-box',
          margin: '0 auto 60px auto'
        }}>
          <h2
            style={{
              fontFamily: 'Manrope, Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 500,
              fontStyle: 'normal',
              lineHeight: '24px',
              letterSpacing: '-0.31px',
              color: '#000',
              margin: 0,
              textAlign: 'center'
            }}
          >
            Keep Learning!
          </h2>
        </div>

        {/* Your Final score is */}
        <h1 
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: '60px',
            fontWeight: '400',
            fontStyle: 'italic',
            background: 'linear-gradient(to right, #15313D, #3CABDA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '40px',
            lineHeight: '72px',
            letterSpacing: '-4px',
            textAlign: 'center',
            padding: '10px 0'
          }}
        >
          Your Final score is
        </h1>

        {/* Score with rolling animation */}
        <div style={{ 
          marginBottom: '80px',
          height: '200px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            transform: `translateY(${-score * 200}px)`,
            transition: 'transform 0.15s cubic-bezier(0.4, 0.0, 0.2, 1)',
          }}>
            {[...Array(displayFinal + 1)].map((_, i) => (
              <div
                key={i}
                style={{
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: i === score ? 1 : 0.3
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: '180px',
                    fontWeight: '400',
                    color: '#2B6B7F',
                    lineHeight: '1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {i}
                </span>
                <span
                  style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: '72px',
                    fontWeight: '400',
                    color: '#2B6B7F',
                    verticalAlign: 'super',
                    marginLeft: '8px'
                  }}
                >
                  %
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Start Again button */}
        <button
          style={{
            width: '246px',
            height: '66px',
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
          onClick={() => {
            if (typeof onRestart === 'function') {
              onRestart();
            }
          }}
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
