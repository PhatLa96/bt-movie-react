import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { TOKEN } from "../../util/Settings/config";

const createRoute = (condition) => {
  return class extends Component {
    render() {
      const {
        path,
        exact,
        component: RouteComponent,
        redirectPath,
      } = this.props;
      return (
        <Route
          path={path}
          exact
          // do chuyển qua dạng truyền component nên route sẽ k tự nhiên có props :history,match,location mà chúng ta phải tự truyền vào
          render={(routeProps) => {
            console.log(routeProps);

            // hàm condition là hàm check đk trả về true false
            if (condition()) {
              return (
                <RouteComponent
                  {...routeProps}

                  //   history={routeProps.history}
                  //   match={routeProps.match}
                />
              );
            }

            return <Redirect to={redirectPath} />;
          }}
        />
      );
    }
  };
};

export const AuthRoute = createRoute(() => !localStorage.getItem(TOKEN));

export const PrivateRoute = createRoute(() => localStorage.getItem(TOKEN));
