// components
import ButtonIFrame from './ButtonIFrame';

const ChildFrame = () => {
  // handlers
  const handleClick = () => {
    window.parent.postMessage(
      {
        type: 'cleverpush',
        method: 'triggerOptIn',
        arguments: ['err', 'subscriptionId'],
      },
      '*'
    );
  };

  return (
    <>
      <h2>Child iFrame</h2>
      <ButtonIFrame handleClick={handleClick} />
    </>
  );
};

export default ChildFrame;
