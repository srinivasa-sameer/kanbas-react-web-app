const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

const ImpliedReturn = () => {
  return (
    <div>
      <h3>Implied Return</h3>
      fourTimesFive = {fourTimesFive}
      <br />
      multiply(4,5) = {multiply(4, 5)}
    </div>
  );
};

export default ImpliedReturn;
