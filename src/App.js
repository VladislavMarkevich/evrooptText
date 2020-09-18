//@flow
import * as React from "react";

import OrderForm from "pages/OrderForm";
import MainMessage from "components/MainMessage";

function App(): any {
  return (
    <React.Fragment>
      <div className="app">
        <div className="app__logo">
          <img className="app__logoImage" src="assets/images/evrooptImage.PNG" />
        </div>
        <OrderForm />
      </div>
      <MainMessage />
    </React.Fragment>
  );
}

export default App;
