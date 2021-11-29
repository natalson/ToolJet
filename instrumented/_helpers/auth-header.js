function cov_48fv07n9() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_helpers\\auth-header.js";
  var hash = "b86ecda00b0449bfc813b3d36ab233a9f2278dec";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_helpers\\auth-header.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 22
        },
        end: {
          line: 5,
          column: 60
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "2": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 10,
          column: 6
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "authHeader",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 26
          }
        },
        loc: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        }, {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        }],
        line: 6
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 6
          },
          end: {
            line: 6,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 6,
            column: 6
          },
          end: {
            line: 6,
            column: 17
          }
        }, {
          start: {
            line: 6,
            column: 21
          },
          end: {
            line: 6,
            column: 43
          }
        }],
        line: 6
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b86ecda00b0449bfc813b3d36ab233a9f2278dec"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_48fv07n9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_48fv07n9();
import { authenticationService } from '@/_services';
export function authHeader() {
  cov_48fv07n9().f[0]++;
  // return authorization header with jwt token
  const currentUser = (cov_48fv07n9().s[0]++, authenticationService.currentUserValue);
  cov_48fv07n9().s[1]++;

  if ((cov_48fv07n9().b[1][0]++, currentUser) && (cov_48fv07n9().b[1][1]++, currentUser.auth_token)) {
    cov_48fv07n9().b[0][0]++;
    cov_48fv07n9().s[2]++;
    return {
      Authorization: `Bearer ${currentUser.auth_token}`,
      'Content-Type': 'application/json'
    };
  } else {
    cov_48fv07n9().b[0][1]++;
  }

  cov_48fv07n9().s[3]++;
  return {
    'Content-Type': 'application/json'
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtaGVhZGVyLmpzIl0sIm5hbWVzIjpbImF1dGhlbnRpY2F0aW9uU2VydmljZSIsImF1dGhIZWFkZXIiLCJjdXJyZW50VXNlciIsImN1cnJlbnRVc2VyVmFsdWUiLCJhdXRoX3Rva2VuIiwiQXV0aG9yaXphdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EscUJBQVQsUUFBc0MsYUFBdEM7QUFFQSxPQUFPLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTtBQUMzQjtBQUNBLFFBQU1DLFdBQVcsMkJBQUdGLHFCQUFxQixDQUFDRyxnQkFBekIsQ0FBakI7QUFGMkI7O0FBRzNCLE1BQUksMkJBQUFELFdBQVcsZ0NBQUlBLFdBQVcsQ0FBQ0UsVUFBaEIsQ0FBZixFQUEyQztBQUFBO0FBQUE7QUFDekMsV0FBTztBQUNMQyxNQUFBQSxhQUFhLEVBQUcsVUFBU0gsV0FBVyxDQUFDRSxVQUFXLEVBRDNDO0FBRUwsc0JBQWdCO0FBRlgsS0FBUDtBQUlELEdBTEQ7QUFBQTtBQUFBOztBQUgyQjtBQVMzQixTQUFPO0FBQ0wsb0JBQWdCO0FBRFgsR0FBUDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnQC9fc2VydmljZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXV0aEhlYWRlcigpIHtcbiAgLy8gcmV0dXJuIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gIGlmIChjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci5hdXRoX3Rva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjdXJyZW50VXNlci5hdXRoX3Rva2VufWAsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9O1xufVxuIl19