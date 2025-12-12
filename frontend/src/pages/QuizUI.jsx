import React, { useState } from 'react';
import SubmitButton from '../components/SubmitButton.jsx';
import QuizScorePage from './QuizScorePage.jsx';
import OptionBox from '../components/OptionBox.jsx';
import NavigationButtons from '../components/NavigationButtons.jsx';

export default function QuizUI() {
  const questions = [
    { question: '1. What sound does a cat make?', options: ['Bhau-Bhau', 'Meow-Meow', 'Oink-Oink'] },
    { question: '2. What would you probably find in your fridge?', options: ['Shoes', 'Ice Cream', 'Books'] },
    { question: '3. Which color is the sky on a clear day?', options: ['Green', 'Blue', 'Purple'] },
    { question: '4. Choose the primary breakfast item:', options: ['Cereal', 'Shoes', 'Keyboard'] }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(() => Array(questions.length).fill(null));
  const selectedAnswer = selectedAnswers[currentIndex];

  const [segmentFill, setSegmentFill] = useState(() => Array(questions.length).fill('0%'));
  const [showScore, setShowScore] = useState(false);
  const [computedFinalScore, setComputedFinalScore] = useState(0);

  // correct answer indexes for each question
  const correctAnswers = [1, 1, 1, 0];
  
  function handleSubmit() {
    console.log('Submitted answers:', selectedAnswers);
    const correctCount = selectedAnswers.reduce((acc, sel, idx) => {
      if (sel === null) return acc;
      return acc + (sel === correctAnswers[idx] ? 1 : 0);
    }, 0);
    const score = correctCount * 25;
    console.log('Computed score:', score, 'correctCount:', correctCount);
    setComputedFinalScore(score);
    // ensure computedFinalScore state settles before rendering the score page
    setTimeout(() => setShowScore(true), 0);
  }

  function handleRestart() {
    setShowScore(false);
    setCurrentIndex(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setSegmentFill(Array(questions.length).fill('0%'));
    setComputedFinalScore(0);
  }

  React.useEffect(() => {
    const next = questions.map((_, i) => {
      if (i < currentIndex) return '100%';
      if (i === currentIndex) return '80%';
      return '0%';
    });
    const t = setTimeout(() => setSegmentFill(next), 20);
    return () => clearTimeout(t);
  }, [currentIndex, questions.length]);

  function handleSelectAnswer(index) {
    const next = [...selectedAnswers];
    next[currentIndex] = index;
    setSelectedAnswers(next);
  }

  // Load DM Serif Display font
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    // show score page after submit
    showScore ? <QuizScorePage onRestart={handleRestart} finalScore={computedFinalScore} selectedAnswers={selectedAnswers} correctAnswers={correctAnswers} /> : (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300 via-blue-300 to-blue-400">
      {/* Main Card */}
      <div className="relative w-full max-w-[1200px] mx-auto">

        {/* External translucent card (bigger, sits behind the quiz card) */}
        <div style={{
          position: 'absolute',
          top: '-30px',
          left: '-30px',
          right: '-30px',
          bottom: '-30px',
          borderRadius: '24px',
          background: 'rgba(255,255,255,0.25)',
          boxShadow: '0 30px 80px rgba(3,18,30,0.14)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        {/* Quiz Card */}
        <div className="relative shadow-2xl" style={{
          backgroundColor: '#F4FDFF',
          borderRadius: '24px',
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingLeft: '120px',
          paddingRight: '120px',
          zIndex: 10,
          position: 'relative'
        }}>
          {/* PNG and GIF shown only on first question */}
          {currentIndex === 0 && (
            <>
              <img
                src="/src/assets/Group (1).png"
                alt="icon"
                style={{
                  position: 'absolute',
                  bottom: '110px',
                  left: '1px',
                  width: '140px',
                  height: '140px',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.0)',
                  pointerEvents: 'none',
                  zIndex: 20
                }}
              />
              <img
                src="/src/assets/Anim.gif"
                alt="card animation"
                style={{
                  position: 'absolute',
                  bottom: '1px',
                  left: '60px',
                  width: '140px',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0)',
                  pointerEvents: 'none'
                }}
              />
            </>
          )}
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="mb-2" style={{
              fontFamily: 'DM Serif Display, serif',
              fontWeight: 500,
              fontStyle: 'italic',
              fontSize: '48px',
              lineHeight: '60px',
              letterSpacing: '-2px',
              textAlign: 'center',
              background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Test Your Knowledge
            </h1>
            <p className="text-gray-500 text-xs">Answer all questions to see your results</p>
          </div>

          {/* Progress Bar: segmented tracks with animated fill (left → right) */}
          <div className="mb-6 flex justify-center w-full max-w-[640px] mx-auto">
            <div className="flex w-full gap-2" style={{ maxWidth: 640 }}>
              {questions.map((_, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <div style={{ position: 'relative', width: '100%', height: 8 }}>
                    {/* baseline unfilled line */}
                    <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 2, transform: 'translateY(-50%)', backgroundColor: '#DCEFF6' }} />
                    {/* animated fill overlay (rounded ends) */}
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: segmentFill[i], backgroundColor: '#15313D', transition: 'width 480ms ease', borderRadius: 999 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Question */}
          <div className="rounded-lg p-6 mb-6 w-full max-w-[640px] mx-auto" style={{
            background: 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)',
            border: '1px solid #96E5FF'
          }}>
            <p className="text-gray-900 text-center" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '22px',
              lineHeight: '24px',
              letterSpacing: '-0.31px'
            }}>
              {questions[currentIndex].question}
            </p>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-6">
            {questions[currentIndex].options.map((answer, index) => (
              <OptionBox key={index} answer={answer} index={index} selected={selectedAnswer === index} onSelect={handleSelectAnswer} />
            ))}
          </div>

          {/* Navigation Buttons (or Submit on last page) */}
          <div className="flex justify-end gap-3">
            {currentIndex === questions.length - 1 ? (
                <SubmitButton onClick={handleSubmit} />
            ) : (
              <NavigationButtons currentIndex={currentIndex} lastIndex={questions.length - 1} onPrev={() => setCurrentIndex((i) => Math.max(0, i - 1))} onNext={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))} />
            )}
          </div>
        </div>
      </div>
    </div>
    )
  );
}
