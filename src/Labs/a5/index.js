import EncodingParametersInURLs from './EncodingParametersInURLs';
import WorkingWithArrays from './WorkingWithArrays';
import WorkingWithObjects from './WorkingWithObjects';

const API_BASE = process.env.REACT_APP_API_BASE;
const URL = API_BASE?.substring(0, API_BASE.length - 3) + 'a5';
const Assignment5 = () => {
  return (
    <div className="container">
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${URL}/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <h1>SimpleAPIExamples </h1>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
};
export default Assignment5;
