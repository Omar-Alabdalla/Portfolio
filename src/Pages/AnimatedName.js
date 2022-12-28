import "./AnimatedName.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        // eslint-disable-next-line no-template-curly-in-string
        <span key={char + i} className={"animatedChars"}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
