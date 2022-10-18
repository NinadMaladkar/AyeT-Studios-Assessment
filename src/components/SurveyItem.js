import React from 'react';

const SurveyItem = ({
  name,
  image,
  completesLeft,
  completionTime,
  qualificationsForSurvey,
  virtualCurrency,
}) => {
  const surveysLeftColor =
    completesLeft === 'NEW' ? 'bg-button-purple' : 'bg-dark-gray-background';
  return (
    <div className='w-1/3 mx-3 my-3 p-4 hover:shadow-xl cursor-pointer'>
      <div className=' overflow-hidden flex items-start'>
        <img src={image} alt='Automobiles' className='w-32 h-32 mr-4'></img>
        <div className=''>
          <div className='font-bold text-2xl mb-3'>{name}</div>
          <ul>
            <li className='text-sm'>
              <span className={'text-white px-2 py-0.5 ' + surveysLeftColor}>
                {completesLeft}
              </span>
            </li>
            <li className='text-md'>
              <div className='flex mt-3'>
                <img
                  src='/img/clock.png'
                  alt='Automobiles'
                  className='w-5 h-5 mr-2'></img>
                <span className='tracking-wide'>{completionTime} Minutes</span>
              </div>
            </li>
            <li className='text-md'>
              <div className='flex mt-1'>
                <img
                  src='/img/Questionmark.png'
                  alt='Automobiles'
                  className='w-5 h-5 mr-2'></img>
                <span className='tracking-wide'>
                  {qualificationsForSurvey} qualifications
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='text-center bg-button-purple text-white w-full h-12 mt-4 rounded-lg flex items-center justify-center '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='gray'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 inline-block '>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span className='ml-1 text-lg'>{virtualCurrency}</span>
        </div>
      </div>
    </div>
  );
};

export default SurveyItem;
