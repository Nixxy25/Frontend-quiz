// ... other imports

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuizs } from '../reducers/dataSlice';

const JavascriptPage = () => {
  const quiz = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuizs());
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {quiz.loading ? (
        <p>Loading quizzes...</p>
      ) : quiz.quizs.length ? (
        <ul>
          {quiz.quizs.map((quiz) => (
            <li key={quiz.id}>{quiz.title}</li>
          ))}
        </ul>
      ) : (
        <p>No quizzes found.</p>
      )}
    </div>
  );
};

export default JavascriptPage;
