import ContentBox from "./ContentBox";
import style from "./Section.module.css";

const Section = (props) => {
  return (
    <ContentBox
      className={`${props.isLeft ? style.boxLeft : style.boxRight} ${
        props.isRow ? style.row : ""
      }`}>
      {" "}
      {props.children}{" "}
    </ContentBox>
  );
};

export default Section;
