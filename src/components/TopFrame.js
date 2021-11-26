import Button from './Button';

const TopFrame = ({
  userState,
  setUserState,
  isInitError,
  setIsInitError,
  handleSubscription,
}) => {
  return (
    <div className="TopFrame">
      <h1>Top Frame</h1>
      <p> To subscribe please click on the button below!!</p>
      <Button
        userState={userState}
        setUserState={setUserState}
        isInitError={isInitError}
        handleSubscription={handleSubscription}
      />
      <iframe
        className="iFrame"
        src="/childFrame"
        title="child iFrame"
      ></iframe>
    </div>
  );
};

export default TopFrame;
