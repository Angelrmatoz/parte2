const Course = (props) => {
  const Header = ({ courseName }) => <h1>{courseName}</h1>;

  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    );
  };

  const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );

  const Total = ({ parts }) => (
    <b>
      total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
    </b>
  );

  return (
    <div>
      <Header courseName={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  );
};

export default Course;
