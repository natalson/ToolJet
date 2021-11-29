function cov_1nlkoaqc99() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_hooks\\use-router.jsx";
  var hash = "c8cc4045c2393154c3cc086aaafc2092404d501a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_hooks\\use-router.jsx",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 6,
          column: 28
        }
      },
      "1": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 32
        }
      },
      "2": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 30
        }
      },
      "3": {
        start: {
          line: 9,
          column: 16
        },
        end: {
          line: 9,
          column: 31
        }
      },
      "4": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 31,
          column: 41
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 30,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "useRouter",
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 33
          }
        },
        loc: {
          start: {
            line: 5,
            column: 36
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 18
          }
        },
        loc: {
          start: {
            line: 12,
            column: 23
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c8cc4045c2393154c3cc086aaafc2092404d501a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1nlkoaqc99 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1nlkoaqc99();
import { useMemo } from 'react';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
export default function useRouter() {
  cov_1nlkoaqc99().f[0]++;
  const params = (cov_1nlkoaqc99().s[0]++, useParams());
  const location = (cov_1nlkoaqc99().s[1]++, useLocation());
  const history = (cov_1nlkoaqc99().s[2]++, useHistory());
  const match = (cov_1nlkoaqc99().s[3]++, useRouteMatch()); // Return our custom router object
  // Memoize so that a new object is only returned if something changes

  cov_1nlkoaqc99().s[4]++;
  return useMemo(() => {
    cov_1nlkoaqc99().f[1]++;
    cov_1nlkoaqc99().s[5]++;
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single 'query' object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: 'react', sort: 'popular' }
      query: { ...queryString.parse(location.search),
        // Convert string to object
        ...params
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history
    };
  }, [params, match, location, history]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZS1yb3V0ZXIuanN4Il0sIm5hbWVzIjpbInVzZU1lbW8iLCJ1c2VQYXJhbXMiLCJ1c2VMb2NhdGlvbiIsInVzZUhpc3RvcnkiLCJ1c2VSb3V0ZU1hdGNoIiwicXVlcnlTdHJpbmciLCJ1c2VSb3V0ZXIiLCJwYXJhbXMiLCJsb2NhdGlvbiIsImhpc3RvcnkiLCJtYXRjaCIsInB1c2giLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJxdWVyeSIsInBhcnNlIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsT0FBVCxRQUF3QixPQUF4QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLFdBQXBCLEVBQWlDQyxVQUFqQyxFQUE2Q0MsYUFBN0MsUUFBa0Usa0JBQWxFO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixjQUF4QjtBQUVBLGVBQWUsU0FBU0MsU0FBVCxHQUFxQjtBQUFBO0FBQ2xDLFFBQU1DLE1BQU0sNkJBQUdOLFNBQVMsRUFBWixDQUFaO0FBQ0EsUUFBTU8sUUFBUSw2QkFBR04sV0FBVyxFQUFkLENBQWQ7QUFDQSxRQUFNTyxPQUFPLDZCQUFHTixVQUFVLEVBQWIsQ0FBYjtBQUNBLFFBQU1PLEtBQUssNkJBQUdOLGFBQWEsRUFBaEIsQ0FBWCxDQUprQyxDQUtsQztBQUNBOztBQU5rQztBQU9sQyxTQUFPSixPQUFPLENBQUMsTUFBTTtBQUFBO0FBQUE7QUFDbkIsV0FBTztBQUNMO0FBQ0FXLE1BQUFBLElBQUksRUFBRUYsT0FBTyxDQUFDRSxJQUZUO0FBR0xDLE1BQUFBLE9BQU8sRUFBRUgsT0FBTyxDQUFDRyxPQUhaO0FBSUxDLE1BQUFBLFFBQVEsRUFBRUwsUUFBUSxDQUFDSyxRQUpkO0FBS0w7QUFDQTtBQUNBO0FBQ0FDLE1BQUFBLEtBQUssRUFBRSxFQUNMLEdBQUdULFdBQVcsQ0FBQ1UsS0FBWixDQUFrQlAsUUFBUSxDQUFDUSxNQUEzQixDQURFO0FBQ2tDO0FBQ3ZDLFdBQUdUO0FBRkUsT0FSRjtBQVlMO0FBQ0E7QUFDQUcsTUFBQUEsS0FkSztBQWVMRixNQUFBQSxRQWZLO0FBZ0JMQyxNQUFBQTtBQWhCSyxLQUFQO0FBa0JELEdBbkJhLEVBbUJYLENBQUNGLE1BQUQsRUFBU0csS0FBVCxFQUFnQkYsUUFBaEIsRUFBMEJDLE9BQTFCLENBbkJXLENBQWQ7QUFvQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSwgdXNlUm91dGVNYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgbWF0Y2ggPSB1c2VSb3V0ZU1hdGNoKCk7XG4gIC8vIFJldHVybiBvdXIgY3VzdG9tIHJvdXRlciBvYmplY3RcbiAgLy8gTWVtb2l6ZSBzbyB0aGF0IGEgbmV3IG9iamVjdCBpcyBvbmx5IHJldHVybmVkIGlmIHNvbWV0aGluZyBjaGFuZ2VzXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gRm9yIGNvbnZlbmllbmNlIGFkZCBwdXNoKCksIHJlcGxhY2UoKSwgcGF0aG5hbWUgYXQgdG9wIGxldmVsXG4gICAgICBwdXNoOiBoaXN0b3J5LnB1c2gsXG4gICAgICByZXBsYWNlOiBoaXN0b3J5LnJlcGxhY2UsXG4gICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAvLyBNZXJnZSBwYXJhbXMgYW5kIHBhcnNlZCBxdWVyeSBzdHJpbmcgaW50byBzaW5nbGUgJ3F1ZXJ5JyBvYmplY3RcbiAgICAgIC8vIHNvIHRoYXQgdGhleSBjYW4gYmUgdXNlZCBpbnRlcmNoYW5nZWFibHkuXG4gICAgICAvLyBFeGFtcGxlOiAvOnRvcGljP3NvcnQ9cG9wdWxhciAtPiB7IHRvcGljOiAncmVhY3QnLCBzb3J0OiAncG9wdWxhcicgfVxuICAgICAgcXVlcnk6IHtcbiAgICAgICAgLi4ucXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoKSwgLy8gQ29udmVydCBzdHJpbmcgdG8gb2JqZWN0XG4gICAgICAgIC4uLnBhcmFtcyxcbiAgICAgIH0sXG4gICAgICAvLyBJbmNsdWRlIG1hdGNoLCBsb2NhdGlvbiwgaGlzdG9yeSBvYmplY3RzIHNvIHdlIGhhdmVcbiAgICAgIC8vIGFjY2VzcyB0byBleHRyYSBSZWFjdCBSb3V0ZXIgZnVuY3Rpb25hbGl0eSBpZiBuZWVkZWQuXG4gICAgICBtYXRjaCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgaGlzdG9yeSxcbiAgICB9O1xuICB9LCBbcGFyYW1zLCBtYXRjaCwgbG9jYXRpb24sIGhpc3RvcnldKTtcbn1cbiJdfQ==