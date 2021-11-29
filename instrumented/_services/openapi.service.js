function cov_12sbc80ic9() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\openapi.service.js";
  var hash = "f8628588efc4400ae331e221cbf527b2d89cd501";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\openapi.service.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 30
        },
        end: {
          line: 3,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 6,
          column: 42
        }
      },
      "2": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "fetchSpecFromUrl",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 25
          }
        },
        loc: {
          start: {
            line: 5,
            column: 31
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f8628588efc4400ae331e221cbf527b2d89cd501"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12sbc80ic9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_12sbc80ic9();
export const openapiService = (cov_12sbc80ic9().s[0]++, {
  fetchSpecFromUrl
});

function fetchSpecFromUrl(url) {
  cov_12sbc80ic9().f[0]++;
  const requestOptions = (cov_12sbc80ic9().s[1]++, {
    method: 'GET'
  });
  cov_12sbc80ic9().s[2]++;
  return fetch(url, requestOptions);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW5hcGkuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJvcGVuYXBpU2VydmljZSIsImZldGNoU3BlY0Zyb21VcmwiLCJ1cmwiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPLE1BQU1BLGNBQWMsNkJBQUc7QUFDNUJDLEVBQUFBO0FBRDRCLENBQUgsQ0FBcEI7O0FBSVAsU0FBU0EsZ0JBQVQsQ0FBMEJDLEdBQTFCLEVBQStCO0FBQUE7QUFDN0IsUUFBTUMsY0FBYyw2QkFBRztBQUFFQyxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUFILENBQXBCO0FBRDZCO0FBRTdCLFNBQU9DLEtBQUssQ0FBQ0gsR0FBRCxFQUFNQyxjQUFOLENBQVo7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBvcGVuYXBpU2VydmljZSA9IHtcbiAgZmV0Y2hTcGVjRnJvbVVybCxcbn07XG5cbmZ1bmN0aW9uIGZldGNoU3BlY0Zyb21VcmwodXJsKSB7XG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnIH07XG4gIHJldHVybiBmZXRjaCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbn1cbiJdfQ==