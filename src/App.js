import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import TopFrame from './components/TopFrame';
import ChildFrame from './components/ChildFrame';

const App = () => {
  ////// states
  // userState for userSubscription
  const [userState, setUserState] = useState(false);
  // error state for browser compatibility
  const [isInitError, setIsInitError] = useState(false);

  // CleverPush init
  const CleverPush = window.CleverPush || [];
  console.log(CleverPush);

  ////// Effects

  ////// check for compatibility and subscription
  useEffect(() => {
    //// check if browser compatible
    if (!window.CleverPush || !window.CleverPush.initialized) {
      window.cleverPushInitCallback = function (err) {
        if (err) {
          console.error('Init callback error:', err);
          setIsInitError(true);
        } else {
          console.log('init possible');
          setIsInitError(false);
        }
      };
    } else {
      console.log('init possible');
      setIsInitError(false);
    }

    //// check if user already subscribed
    CleverPush.push([
      'isSubscribed',
      function (result) {
        console.log('CleverPush isSubscribed result', result); // true or false
        setUserState(result);
        console.log(userState);
      },
    ]);

    //// check onMount and on subscription changes
  }, [userState]);

  ////// handlers

  // subscribe / unsubscribe onClick
  const handleSubscription = () => {
    // if not subscribed
    if (!userState) {
      // triggerOptIn
      CleverPush.push([
        'triggerOptIn',
        function (err, subscriptionId) {
          if (err) {
            console.error(err);
          } else {
            console.log('successfully subscribed with id', subscriptionId);
            setUserState(true);
          }
        },
      ]);

      // update userState based on isSubscribed
      CleverPush.push([
        'isSubscribed',
        function (result) {
          setUserState(result);
        },
      ]);
    }

    // if subscribed
    if (userState) {
      CleverPush.push(['unsubscribe']);

      // update userState based on isSubscribed
      setUserState(!userState);

      // clear localStorage for cookies and other files
      localStorage.clear();
    }
  };

  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route
            path="/"
            element={
              <TopFrame
                userState={userState}
                setUserState={setUserState}
                isInitError={isInitError}
                setIsInitError={setIsInitError}
                handleSubscription={handleSubscription}
              />
            }
          />
          <Route
            path="/childFrame"
            element={
              <ChildFrame
                userState={userState}
                setUserState={setUserState}
                isInitError={isInitError}
                setIsInitError={setIsInitError}
                //handleSubscription={handleSubscription}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
