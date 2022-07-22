import useReactRouteuseBreadcrumbsrBreadcrumbs from 'use-react-router-breadcrumbs';

function Breadcrumb() {
  const routes = [{ path: '/note/*', breadcrumb: 'Note' }];

  const breadcrumbs = useReactRouteuseBreadcrumbsrBreadcrumbs(routes);

  if (breadcrumbs.length === 3) {
    return (
      <h3>
        <span>Note</span>
      </h3>
    );
  } else if (breadcrumbs.length === 1) {
    return (
      <h3>
        <span>Home</span>
      </h3>
    );
  } else {
    return (
      <h3>
        {breadcrumbs.map(({ match, breadcrumb }, index) => {
          if (index === 0) return;
          return (
            <span
              style={{
                paddingRight: '10px',
              }}
              key={match.pathname}
            >
              {breadcrumb}
            </span>
          );
        })}
      </h3>
    );
  }
}

export default Breadcrumb;
