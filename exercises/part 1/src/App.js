const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  return (
    <div>
      {props.info.map((inf, i) => {
        return <Part inf={inf} index={i} />;
      })}
    </div>
  );
};
const Part = ({ inf, index }) => {
  return (
    <div key={index}>
      <h1>{inf.part}</h1>
      <h3>{inf.exercises}</h3>
    </div>
  );
};
const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const information = [
    {
      part: "Fundamentals of React",
      exercises: 10,
    },
    {
      part: "Using props to pass data",
      exercises: 7,
    },
    {
      part: "State of a component",
      exercises: 14,
    },
  ];
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content info={information} />
      <Total totla={total} />
    </div>
  );
};

export default App;
