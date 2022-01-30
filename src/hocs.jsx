import { useLocation, useParams, useNavigate } from "react-router-dom";

export function withLocation(Component) {
  return (props) => <Component {...props} location={useLocation()} />;
}

export function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export function withNavigate(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

export function withRouter(Component) {
  return (props) => (
    <Component
      {...props}
      location={useLocation()}
      navigate={useNavigate()}
      params={useParams()}
    />
  );
}
