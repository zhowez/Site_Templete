import "./App.css";
import file from "./Data/Data";
import Section from "./Components/Section";

const App = () => {
  let isLeft = true;
  return (
    <div className="App">
      <h1> Hello</h1>
      {file.data.map((d) => {
        return (
          <Section key={d.section.id} isRow={true}>
            {isLeft ? (
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
              />
            ) : (
              <></>
            )}
            <Section isLeft={isLeft}>
              <h2 key={d.section.id + d.section.Title}>{d.section.Title}</h2>
              <h3 key={d.section.id + d.section.SubTitle}>
                {d.section.SubTitle}
              </h3>
              <p key={d.section.id + d.section.Info}>{d.section.Info}</p>
            </Section>
            {isLeft ? (
              <></>
            ) : (
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
              />
            )}
            {(isLeft = !isLeft)}
          </Section>
        );
      })}
      <br />
    </div>
  );
};

export default App;
