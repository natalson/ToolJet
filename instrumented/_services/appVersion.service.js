function cov_7wpqlflyz() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\appVersion.service.js";
  var hash = "be2b44f0931b1e38d662c66ca5b0f7b18de2480f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\appVersion.service.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 33
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 11,
          column: 65
        }
      },
      "2": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 95
        }
      },
      "3": {
        start: {
          line: 16,
          column: 15
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "4": {
        start: {
          line: 20,
          column: 25
        },
        end: {
          line: 20,
          column: 94
        }
      },
      "5": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 95
        }
      },
      "6": {
        start: {
          line: 25,
          column: 15
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "7": {
        start: {
          line: 29,
          column: 25
        },
        end: {
          line: 29,
          column: 93
        }
      },
      "8": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 108
        }
      }
    },
    fnMap: {
      "0": {
        name: "getAll",
        decl: {
          start: {
            line: 10,
            column: 9
          },
          end: {
            line: 10,
            column: 15
          }
        },
        loc: {
          start: {
            line: 10,
            column: 23
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "create",
        decl: {
          start: {
            line: 15,
            column: 9
          },
          end: {
            line: 15,
            column: 15
          }
        },
        loc: {
          start: {
            line: 15,
            column: 36
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 15
      },
      "2": {
        name: "save",
        decl: {
          start: {
            line: 24,
            column: 9
          },
          end: {
            line: 24,
            column: 13
          }
        },
        loc: {
          start: {
            line: 24,
            column: 44
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 24
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "be2b44f0931b1e38d662c66ca5b0f7b18de2480f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7wpqlflyz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_7wpqlflyz();
import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';
export const appVersionService = (cov_7wpqlflyz().s[0]++, {
  getAll,
  create,
  save
});

function getAll(appId) {
  cov_7wpqlflyz().f[0]++;
  const requestOptions = (cov_7wpqlflyz().s[1]++, {
    method: 'GET',
    headers: authHeader()
  });
  cov_7wpqlflyz().s[2]++;
  return fetch(`${config.apiUrl}/apps/${appId}/versions`, requestOptions).then(handleResponse);
}

function create(appId, versionName) {
  cov_7wpqlflyz().f[1]++;
  const body = (cov_7wpqlflyz().s[3]++, {
    versionName
  });
  const requestOptions = (cov_7wpqlflyz().s[4]++, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(body)
  });
  cov_7wpqlflyz().s[5]++;
  return fetch(`${config.apiUrl}/apps/${appId}/versions`, requestOptions).then(handleResponse);
}

function save(appId, versionId, definition) {
  cov_7wpqlflyz().f[2]++;
  const body = (cov_7wpqlflyz().s[6]++, {
    definition
  });
  const requestOptions = (cov_7wpqlflyz().s[7]++, {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify(body)
  });
  cov_7wpqlflyz().s[8]++;
  return fetch(`${config.apiUrl}/apps/${appId}/versions/${versionId}`, requestOptions).then(handleResponse);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFZlcnNpb24uc2VydmljZS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhdXRoSGVhZGVyIiwiaGFuZGxlUmVzcG9uc2UiLCJhcHBWZXJzaW9uU2VydmljZSIsImdldEFsbCIsImNyZWF0ZSIsInNhdmUiLCJhcHBJZCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwiYXBpVXJsIiwidGhlbiIsInZlcnNpb25OYW1lIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2ZXJzaW9uSWQiLCJkZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxTQUFTQyxVQUFULEVBQXFCQyxjQUFyQixRQUEyQyxZQUEzQztBQUVBLE9BQU8sTUFBTUMsaUJBQWlCLDRCQUFHO0FBQy9CQyxFQUFBQSxNQUQrQjtBQUUvQkMsRUFBQUEsTUFGK0I7QUFHL0JDLEVBQUFBO0FBSCtCLENBQUgsQ0FBdkI7O0FBTVAsU0FBU0YsTUFBVCxDQUFnQkcsS0FBaEIsRUFBdUI7QUFBQTtBQUNyQixRQUFNQyxjQUFjLDRCQUFHO0FBQUVDLElBQUFBLE1BQU0sRUFBRSxLQUFWO0FBQWlCQyxJQUFBQSxPQUFPLEVBQUVULFVBQVU7QUFBcEMsR0FBSCxDQUFwQjtBQURxQjtBQUVyQixTQUFPVSxLQUFLLENBQUUsR0FBRVgsTUFBTSxDQUFDWSxNQUFPLFNBQVFMLEtBQU0sV0FBaEMsRUFBNENDLGNBQTVDLENBQUwsQ0FBaUVLLElBQWpFLENBQXNFWCxjQUF0RSxDQUFQO0FBQ0Q7O0FBRUQsU0FBU0csTUFBVCxDQUFnQkUsS0FBaEIsRUFBdUJPLFdBQXZCLEVBQW9DO0FBQUE7QUFDbEMsUUFBTUMsSUFBSSw0QkFBRztBQUNYRCxJQUFBQTtBQURXLEdBQUgsQ0FBVjtBQUlBLFFBQU1OLGNBQWMsNEJBQUc7QUFBRUMsSUFBQUEsTUFBTSxFQUFFLE1BQVY7QUFBa0JDLElBQUFBLE9BQU8sRUFBRVQsVUFBVSxFQUFyQztBQUF5Q2MsSUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZjtBQUEvQyxHQUFILENBQXBCO0FBTGtDO0FBTWxDLFNBQU9KLEtBQUssQ0FBRSxHQUFFWCxNQUFNLENBQUNZLE1BQU8sU0FBUUwsS0FBTSxXQUFoQyxFQUE0Q0MsY0FBNUMsQ0FBTCxDQUFpRUssSUFBakUsQ0FBc0VYLGNBQXRFLENBQVA7QUFDRDs7QUFFRCxTQUFTSSxJQUFULENBQWNDLEtBQWQsRUFBcUJXLFNBQXJCLEVBQWdDQyxVQUFoQyxFQUE0QztBQUFBO0FBQzFDLFFBQU1KLElBQUksNEJBQUc7QUFDWEksSUFBQUE7QUFEVyxHQUFILENBQVY7QUFJQSxRQUFNWCxjQUFjLDRCQUFHO0FBQUVDLElBQUFBLE1BQU0sRUFBRSxLQUFWO0FBQWlCQyxJQUFBQSxPQUFPLEVBQUVULFVBQVUsRUFBcEM7QUFBd0NjLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWY7QUFBOUMsR0FBSCxDQUFwQjtBQUwwQztBQU0xQyxTQUFPSixLQUFLLENBQUUsR0FBRVgsTUFBTSxDQUFDWSxNQUFPLFNBQVFMLEtBQU0sYUFBWVcsU0FBVSxFQUF0RCxFQUF5RFYsY0FBekQsQ0FBTCxDQUE4RUssSUFBOUUsQ0FBbUZYLGNBQW5GLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCB7IGF1dGhIZWFkZXIsIGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnQC9faGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBhcHBWZXJzaW9uU2VydmljZSA9IHtcbiAgZ2V0QWxsLFxuICBjcmVhdGUsXG4gIHNhdmUsXG59O1xuXG5mdW5jdGlvbiBnZXRBbGwoYXBwSWQpIHtcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9O1xuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vYXBwcy8ke2FwcElkfS92ZXJzaW9uc2AsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKGFwcElkLCB2ZXJzaW9uTmFtZSkge1xuICBjb25zdCBib2R5ID0ge1xuICAgIHZlcnNpb25OYW1lLFxuICB9O1xuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogYXV0aEhlYWRlcigpLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9O1xuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vYXBwcy8ke2FwcElkfS92ZXJzaW9uc2AsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn1cblxuZnVuY3Rpb24gc2F2ZShhcHBJZCwgdmVyc2lvbklkLCBkZWZpbml0aW9uKSB7XG4gIGNvbnN0IGJvZHkgPSB7XG4gICAgZGVmaW5pdGlvbixcbiAgfTtcblxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUFVUJywgaGVhZGVyczogYXV0aEhlYWRlcigpLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9O1xuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vYXBwcy8ke2FwcElkfS92ZXJzaW9ucy8ke3ZlcnNpb25JZH1gLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XG59XG4iXX0=