import SurveyItem from './components/SurveyItem';
import { surveyList } from './api/surveyList.js';

function App() {
  const allSurveys = surveyList.map((survey, i) => {
    return (
      <SurveyItem
        key={i}
        name={survey.name}
        image={survey.image}
        completesLeft={survey.completesLeft}
        completionTime={survey.completionTime}
        qualificationsForSurvey={survey.qualificationsForSurvey}
        virtualCurrency={survey.virtualCurrency}
      />
    );
  });

  return <div className='flex flex-wrap justify-center my-8'>{allSurveys}</div>;
}

export default App;
