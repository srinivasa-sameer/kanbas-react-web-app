const squares = [1, 4, 16, 25, 36];

const JsonStringify = () => {
  return (
    <>
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
    </>
  );
};

export default JsonStringify;
