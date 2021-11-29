function cov_1awr4qz0g2() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\tooljet.service.js";
  var hash = "ed03845dd836895deb9e4356daf5e9e58faa711c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\tooljet.service.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 30
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 25
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "2": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 81
        }
      },
      "3": {
        start: {
          line: 21,
          column: 25
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "4": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 94
        }
      },
      "5": {
        start: {
          line: 30,
          column: 25
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "6": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 97
        }
      },
      "7": {
        start: {
          line: 39,
          column: 25
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "8": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 101
        }
      }
    },
    fnMap: {
      "0": {
        name: "fetchMetaData",
        decl: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 22
          }
        },
        loc: {
          start: {
            line: 11,
            column: 25
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "skipVersion",
        decl: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 20
          }
        },
        loc: {
          start: {
            line: 20,
            column: 23
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 20
      },
      "2": {
        name: "skipOnboarding",
        decl: {
          start: {
            line: 29,
            column: 9
          },
          end: {
            line: 29,
            column: 23
          }
        },
        loc: {
          start: {
            line: 29,
            column: 26
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 29
      },
      "3": {
        name: "finishOnboarding",
        decl: {
          start: {
            line: 38,
            column: 9
          },
          end: {
            line: 38,
            column: 25
          }
        },
        loc: {
          start: {
            line: 38,
            column: 35
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 38
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
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ed03845dd836895deb9e4356daf5e9e58faa711c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1awr4qz0g2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1awr4qz0g2();
import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';
export const tooljetService = (cov_1awr4qz0g2().s[0]++, {
  fetchMetaData,
  skipVersion,
  skipOnboarding,
  finishOnboarding
});

function fetchMetaData() {
  cov_1awr4qz0g2().f[0]++;
  const requestOptions = (cov_1awr4qz0g2().s[1]++, {
    method: 'GET',
    headers: authHeader()
  });
  cov_1awr4qz0g2().s[2]++;
  return fetch(`${config.apiUrl}/metadata`, requestOptions).then(handleResponse);
}

function skipVersion() {
  cov_1awr4qz0g2().f[1]++;
  const requestOptions = (cov_1awr4qz0g2().s[3]++, {
    method: 'POST',
    headers: authHeader()
  });
  cov_1awr4qz0g2().s[4]++;
  return fetch(`${config.apiUrl}/metadata/skip_version`, requestOptions).then(handleResponse);
}

function skipOnboarding() {
  cov_1awr4qz0g2().f[2]++;
  const requestOptions = (cov_1awr4qz0g2().s[5]++, {
    method: 'POST',
    headers: authHeader()
  });
  cov_1awr4qz0g2().s[6]++;
  return fetch(`${config.apiUrl}/metadata/skip_onboarding`, requestOptions).then(handleResponse);
}

function finishOnboarding(options) {
  cov_1awr4qz0g2().f[3]++;
  const requestOptions = (cov_1awr4qz0g2().s[7]++, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ ...options
    })
  });
  cov_1awr4qz0g2().s[8]++;
  return fetch(`${config.apiUrl}/metadata/finish_installation`, requestOptions).then(handleResponse);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xqZXQuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhdXRoSGVhZGVyIiwiaGFuZGxlUmVzcG9uc2UiLCJ0b29samV0U2VydmljZSIsImZldGNoTWV0YURhdGEiLCJza2lwVmVyc2lvbiIsInNraXBPbmJvYXJkaW5nIiwiZmluaXNoT25ib2FyZGluZyIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwiYXBpVXJsIiwidGhlbiIsIm9wdGlvbnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixRQUFuQjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLGNBQXJCLFFBQTJDLFlBQTNDO0FBRUEsT0FBTyxNQUFNQyxjQUFjLDZCQUFHO0FBQzVCQyxFQUFBQSxhQUQ0QjtBQUU1QkMsRUFBQUEsV0FGNEI7QUFHNUJDLEVBQUFBLGNBSDRCO0FBSTVCQyxFQUFBQTtBQUo0QixDQUFILENBQXBCOztBQU9QLFNBQVNILGFBQVQsR0FBeUI7QUFBQTtBQUN2QixRQUFNSSxjQUFjLDZCQUFHO0FBQ3JCQyxJQUFBQSxNQUFNLEVBQUUsS0FEYTtBQUVyQkMsSUFBQUEsT0FBTyxFQUFFVCxVQUFVO0FBRkUsR0FBSCxDQUFwQjtBQUR1QjtBQU12QixTQUFPVSxLQUFLLENBQUUsR0FBRVgsTUFBTSxDQUFDWSxNQUFPLFdBQWxCLEVBQThCSixjQUE5QixDQUFMLENBQW1ESyxJQUFuRCxDQUF3RFgsY0FBeEQsQ0FBUDtBQUNEOztBQUVELFNBQVNHLFdBQVQsR0FBdUI7QUFBQTtBQUNyQixRQUFNRyxjQUFjLDZCQUFHO0FBQ3JCQyxJQUFBQSxNQUFNLEVBQUUsTUFEYTtBQUVyQkMsSUFBQUEsT0FBTyxFQUFFVCxVQUFVO0FBRkUsR0FBSCxDQUFwQjtBQURxQjtBQU1yQixTQUFPVSxLQUFLLENBQUUsR0FBRVgsTUFBTSxDQUFDWSxNQUFPLHdCQUFsQixFQUEyQ0osY0FBM0MsQ0FBTCxDQUFnRUssSUFBaEUsQ0FBcUVYLGNBQXJFLENBQVA7QUFDRDs7QUFFRCxTQUFTSSxjQUFULEdBQTBCO0FBQUE7QUFDeEIsUUFBTUUsY0FBYyw2QkFBRztBQUNyQkMsSUFBQUEsTUFBTSxFQUFFLE1BRGE7QUFFckJDLElBQUFBLE9BQU8sRUFBRVQsVUFBVTtBQUZFLEdBQUgsQ0FBcEI7QUFEd0I7QUFNeEIsU0FBT1UsS0FBSyxDQUFFLEdBQUVYLE1BQU0sQ0FBQ1ksTUFBTywyQkFBbEIsRUFBOENKLGNBQTlDLENBQUwsQ0FBbUVLLElBQW5FLENBQXdFWCxjQUF4RSxDQUFQO0FBQ0Q7O0FBRUQsU0FBU0ssZ0JBQVQsQ0FBMEJPLE9BQTFCLEVBQW1DO0FBQUE7QUFDakMsUUFBTU4sY0FBYyw2QkFBRztBQUNyQkMsSUFBQUEsTUFBTSxFQUFFLE1BRGE7QUFFckJDLElBQUFBLE9BQU8sRUFBRVQsVUFBVSxFQUZFO0FBR3JCYyxJQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEVBQ25CLEdBQUdIO0FBRGdCLEtBQWY7QUFIZSxHQUFILENBQXBCO0FBRGlDO0FBU2pDLFNBQU9ILEtBQUssQ0FBRSxHQUFFWCxNQUFNLENBQUNZLE1BQU8sK0JBQWxCLEVBQWtESixjQUFsRCxDQUFMLENBQXVFSyxJQUF2RSxDQUE0RVgsY0FBNUUsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnO1xuaW1wb3J0IHsgYXV0aEhlYWRlciwgaGFuZGxlUmVzcG9uc2UgfSBmcm9tICdAL19oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IHRvb2xqZXRTZXJ2aWNlID0ge1xuICBmZXRjaE1ldGFEYXRhLFxuICBza2lwVmVyc2lvbixcbiAgc2tpcE9uYm9hcmRpbmcsXG4gIGZpbmlzaE9uYm9hcmRpbmcsXG59O1xuXG5mdW5jdGlvbiBmZXRjaE1ldGFEYXRhKCkge1xuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSxcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vbWV0YWRhdGFgLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XG59XG5cbmZ1bmN0aW9uIHNraXBWZXJzaW9uKCkge1xuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBhdXRoSGVhZGVyKCksXG4gIH07XG5cbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L21ldGFkYXRhL3NraXBfdmVyc2lvbmAsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn1cblxuZnVuY3Rpb24gc2tpcE9uYm9hcmRpbmcoKSB7XG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSxcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmFwaVVybH0vbWV0YWRhdGEvc2tpcF9vbmJvYXJkaW5nYCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xufVxuXG5mdW5jdGlvbiBmaW5pc2hPbmJvYXJkaW5nKG9wdGlvbnMpIHtcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogYXV0aEhlYWRlcigpLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSksXG4gIH07XG5cbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L21ldGFkYXRhL2ZpbmlzaF9pbnN0YWxsYXRpb25gLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XG59XG4iXX0=