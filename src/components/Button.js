const Button = ({ userState, isInitError, handleSubscription }) => {
  return (
    ///// conditional rendering based on compatibility and subscription status
    <>
      {isInitError ? (
        <button className="button error">browser not supported</button>
      ) : (
        <button className="button" onClick={handleSubscription}>
          {!userState ? 'subscribe' : 'unsubscribe'}
        </button>
      )}
    </>
  );
};

export default Button;
