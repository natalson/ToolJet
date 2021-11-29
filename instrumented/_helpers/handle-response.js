function cov_kkco420md() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_helpers\\handle-response.js";
  var hash = "81186628207c7d93d922faef5aace496bf9ddc50";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_helpers\\handle-response.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "1": {
        start: {
          line: 5,
          column: 17
        },
        end: {
          line: 5,
          column: 41
        }
      },
      "2": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "3": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 11,
          column: 7
        }
      },
      "4": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 39
        }
      },
      "5": {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 13,
          column: 65
        }
      },
      "6": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 45
        }
      },
      "7": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "handleResponse",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 30
          }
        },
        loc: {
          start: {
            line: 3,
            column: 41
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 4,
            column: 30
          },
          end: {
            line: 4,
            column: 31
          }
        },
        loc: {
          start: {
            line: 4,
            column: 40
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 5,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 5,
            column: 21
          }
        }, {
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 5,
            column: 41
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }, {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }],
        line: 6
      },
      "2": {
        loc: {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 11,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 11,
            column: 7
          }
        }, {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 11,
            column: 7
          }
        }],
        line: 7
      },
      "3": {
        loc: {
          start: {
            line: 13,
            column: 20
          },
          end: {
            line: 13,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 13,
            column: 21
          },
          end: {
            line: 13,
            column: 25
          }
        }, {
          start: {
            line: 13,
            column: 29
          },
          end: {
            line: 13,
            column: 41
          }
        }, {
          start: {
            line: 13,
            column: 46
          },
          end: {
            line: 13,
            column: 65
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "81186628207c7d93d922faef5aace496bf9ddc50"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kkco420md = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_kkco420md();
import { authenticationService } from '@/_services';
export function handleResponse(response) {
  cov_kkco420md().f[0]++;
  cov_kkco420md().s[0]++;
  return response.text().then(text => {
    cov_kkco420md().f[1]++;
    const data = (cov_kkco420md().s[1]++, (cov_kkco420md().b[0][0]++, text) && (cov_kkco420md().b[0][1]++, JSON.parse(text)));
    cov_kkco420md().s[2]++;

    if (!response.ok) {
      cov_kkco420md().b[1][0]++;
      cov_kkco420md().s[3]++;

      if ([401].indexOf(response.status) !== -1) {
        cov_kkco420md().b[2][0]++;
        cov_kkco420md().s[4]++;
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        authenticationService.logout(); // location.reload(true);
      } else {
        cov_kkco420md().b[2][1]++;
      }

      const error = (cov_kkco420md().s[5]++, (cov_kkco420md().b[3][0]++, data) && (cov_kkco420md().b[3][1]++, data.message) || (cov_kkco420md().b[3][2]++, response.statusText));
      cov_kkco420md().s[6]++;
      return Promise.reject({
        error,
        data
      });
    } else {
      cov_kkco420md().b[1][1]++;
    }

    cov_kkco420md().s[7]++;
    return data;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZS1yZXNwb25zZS5qcyJdLCJuYW1lcyI6WyJhdXRoZW50aWNhdGlvblNlcnZpY2UiLCJoYW5kbGVSZXNwb25zZSIsInJlc3BvbnNlIiwidGV4dCIsInRoZW4iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwib2siLCJpbmRleE9mIiwic3RhdHVzIiwibG9nb3V0IiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzVGV4dCIsIlByb21pc2UiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EscUJBQVQsUUFBc0MsYUFBdEM7QUFFQSxPQUFPLFNBQVNDLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQUE7QUFBQTtBQUN2QyxTQUFPQSxRQUFRLENBQUNDLElBQVQsR0FBZ0JDLElBQWhCLENBQXNCRCxJQUFELElBQVU7QUFBQTtBQUNwQyxVQUFNRSxJQUFJLDRCQUFHLDRCQUFBRixJQUFJLGlDQUFJRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osSUFBWCxDQUFKLENBQVAsQ0FBVjtBQURvQzs7QUFFcEMsUUFBSSxDQUFDRCxRQUFRLENBQUNNLEVBQWQsRUFBa0I7QUFBQTtBQUFBOztBQUNoQixVQUFJLENBQUMsR0FBRCxFQUFNQyxPQUFOLENBQWNQLFFBQVEsQ0FBQ1EsTUFBdkIsTUFBbUMsQ0FBQyxDQUF4QyxFQUEyQztBQUFBO0FBQUE7QUFDekM7QUFDQVYsUUFBQUEscUJBQXFCLENBQUNXLE1BQXRCLEdBRnlDLENBR3pDO0FBQ0QsT0FKRDtBQUFBO0FBQUE7O0FBTUEsWUFBTUMsS0FBSyw0QkFBSSw0QkFBQVAsSUFBSSxpQ0FBSUEsSUFBSSxDQUFDUSxPQUFULENBQUwsZ0NBQTBCWCxRQUFRLENBQUNZLFVBQW5DLENBQUgsQ0FBWDtBQVBnQjtBQVFoQixhQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZTtBQUFFSixRQUFBQSxLQUFGO0FBQVNQLFFBQUFBO0FBQVQsT0FBZixDQUFQO0FBQ0QsS0FURDtBQUFBO0FBQUE7O0FBRm9DO0FBYXBDLFdBQU9BLElBQVA7QUFDRCxHQWRNLENBQVA7QUFlRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJ0AvX3NlcnZpY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gIHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbigodGV4dCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB0ZXh0ICYmIEpTT04ucGFyc2UodGV4dCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgaWYgKFs0MDFdLmluZGV4T2YocmVzcG9uc2Uuc3RhdHVzKSAhPT0gLTEpIHtcbiAgICAgICAgLy8gYXV0byBsb2dvdXQgaWYgNDAxIFVuYXV0aG9yaXplZCBvciA0MDMgRm9yYmlkZGVuIHJlc3BvbnNlIHJldHVybmVkIGZyb20gYXBpXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7IGVycm9yLCBkYXRhIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9KTtcbn1cbiJdfQ==