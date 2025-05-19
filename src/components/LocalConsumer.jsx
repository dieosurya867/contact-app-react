import React from "react";
import Blog from "./Blog";
import LocaleContext from "./LocaleContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: "id",
    };
  }

  render() {
    return (
      <LocaleContext.Provider
        value={{
          locale: this.state.locale,
          toggleLocale: () => {
            this.setState((prevState) => ({
              locale: prevState.locale === "id" ? "en" : "id",
            }));
          },
        }}
      >
        <Blog />
      </LocaleContext.Provider>
    );
  }
}

export default App;
