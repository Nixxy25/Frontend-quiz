const HtmlPage = ({ quiz }) => {
  const firstData = quiz[0];

  return (
    <div>
      <h2>{firstData.title}</h2>
      {firstData.questions.map((question) => (
        <div key={question.id}>
          <h2>{question.question}</h2>
          <h2 className="mb-8">{question.options}</h2>
        </div>
      ))}
    </div>
  );
};

export default HtmlPage;