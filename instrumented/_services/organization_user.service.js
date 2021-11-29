function cov_1kt0lmiya0() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\organization_user.service.js";
  var hash = "e0a945d1d73e8353f3e9b869f846b18b704ad27a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\organization_user.service.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 39
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 15
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "2": {
        start: {
          line: 17,
          column: 25
        },
        end: {
          line: 17,
          column: 94
        }
      },
      "3": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 91
        }
      },
      "4": {
        start: {
          line: 23,
          column: 15
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "5": {
        start: {
          line: 27,
          column: 25
        },
        end: {
          line: 27,
          column: 94
        }
      },
      "6": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 109
        }
      },
      "7": {
        start: {
          line: 32,
          column: 25
        },
        end: {
          line: 32,
          column: 66
        }
      },
      "8": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 105
        }
      }
    },
    fnMap: {
      "0": {
        name: "create",
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
            column: 46
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "changeRole",
        decl: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 19
          }
        },
        loc: {
          start: {
            line: 22,
            column: 30
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 22
      },
      "2": {
        name: "archive",
        decl: {
          start: {
            line: 31,
            column: 9
          },
          end: {
            line: 31,
            column: 16
          }
        },
        loc: {
          start: {
            line: 31,
            column: 21
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 31
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
    hash: "e0a945d1d73e8353f3e9b869f846b18b704ad27a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1kt0lmiya0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1kt0lmiya0();
import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';
export const organizationUserService = (cov_1kt0lmiya0().s[0]++, {
  archive,
  create,
  changeRole
});

function create(first_name, last_name, email) {
  cov_1kt0lmiya0().f[0]++;
  const body = (cov_1kt0lmiya0().s[1]++, {
    first_name,
    last_name,
    email
  });
  const requestOptions = (cov_1kt0lmiya0().s[2]++, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(body)
  });
  cov_1kt0lmiya0().s[3]++;
  return fetch(`${config.apiUrl}/organization_users`, requestOptions).then(handleResponse);
} // Deprecated


function changeRole(id, role) {
  cov_1kt0lmiya0().f[1]++;
  const body = (cov_1kt0lmiya0().s[4]++, {
    role
  });
  const requestOptions = (cov_1kt0lmiya0().s[5]++, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(body)
  });
  cov_1kt0lmiya0().s[6]++;
  return fetch(`${config.apiUrl}/organization_users/${id}/change_role`, requestOptions).then(handleResponse);
}

function archive(id) {
  cov_1kt0lmiya0().f[2]++;
  const requestOptions = (cov_1kt0lmiya0().s[7]++, {
    method: 'POST',
    headers: authHeader()
  });
  cov_1kt0lmiya0().s[8]++;
  return fetch(`${config.apiUrl}/organization_users/${id}/archive`, requestOptions).then(handleResponse);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZ2FuaXphdGlvbl91c2VyLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiYXV0aEhlYWRlciIsImhhbmRsZVJlc3BvbnNlIiwib3JnYW5pemF0aW9uVXNlclNlcnZpY2UiLCJhcmNoaXZlIiwiY3JlYXRlIiwiY2hhbmdlUm9sZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsImJvZHkiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJhcGlVcmwiLCJ0aGVuIiwiaWQiLCJyb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxTQUFTQyxVQUFULEVBQXFCQyxjQUFyQixRQUEyQyxZQUEzQztBQUVBLE9BQU8sTUFBTUMsdUJBQXVCLDZCQUFHO0FBQ3JDQyxFQUFBQSxPQURxQztBQUVyQ0MsRUFBQUEsTUFGcUM7QUFHckNDLEVBQUFBO0FBSHFDLENBQUgsQ0FBN0I7O0FBTVAsU0FBU0QsTUFBVCxDQUFnQkUsVUFBaEIsRUFBNEJDLFNBQTVCLEVBQXVDQyxLQUF2QyxFQUE4QztBQUFBO0FBQzVDLFFBQU1DLElBQUksNkJBQUc7QUFDWEgsSUFBQUEsVUFEVztBQUVYQyxJQUFBQSxTQUZXO0FBR1hDLElBQUFBO0FBSFcsR0FBSCxDQUFWO0FBTUEsUUFBTUUsY0FBYyw2QkFBRztBQUFFQyxJQUFBQSxNQUFNLEVBQUUsTUFBVjtBQUFrQkMsSUFBQUEsT0FBTyxFQUFFWixVQUFVLEVBQXJDO0FBQXlDUyxJQUFBQSxJQUFJLEVBQUVJLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxJQUFmO0FBQS9DLEdBQUgsQ0FBcEI7QUFQNEM7QUFRNUMsU0FBT00sS0FBSyxDQUFFLEdBQUVoQixNQUFNLENBQUNpQixNQUFPLHFCQUFsQixFQUF3Q04sY0FBeEMsQ0FBTCxDQUE2RE8sSUFBN0QsQ0FBa0VoQixjQUFsRSxDQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTSSxVQUFULENBQW9CYSxFQUFwQixFQUF3QkMsSUFBeEIsRUFBOEI7QUFBQTtBQUM1QixRQUFNVixJQUFJLDZCQUFHO0FBQ1hVLElBQUFBO0FBRFcsR0FBSCxDQUFWO0FBSUEsUUFBTVQsY0FBYyw2QkFBRztBQUFFQyxJQUFBQSxNQUFNLEVBQUUsTUFBVjtBQUFrQkMsSUFBQUEsT0FBTyxFQUFFWixVQUFVLEVBQXJDO0FBQXlDUyxJQUFBQSxJQUFJLEVBQUVJLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxJQUFmO0FBQS9DLEdBQUgsQ0FBcEI7QUFMNEI7QUFNNUIsU0FBT00sS0FBSyxDQUFFLEdBQUVoQixNQUFNLENBQUNpQixNQUFPLHVCQUFzQkUsRUFBRyxjQUEzQyxFQUEwRFIsY0FBMUQsQ0FBTCxDQUErRU8sSUFBL0UsQ0FBb0ZoQixjQUFwRixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsT0FBVCxDQUFpQmUsRUFBakIsRUFBcUI7QUFBQTtBQUNuQixRQUFNUixjQUFjLDZCQUFHO0FBQUVDLElBQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCQyxJQUFBQSxPQUFPLEVBQUVaLFVBQVU7QUFBckMsR0FBSCxDQUFwQjtBQURtQjtBQUVuQixTQUFPZSxLQUFLLENBQUUsR0FBRWhCLE1BQU0sQ0FBQ2lCLE1BQU8sdUJBQXNCRSxFQUFHLFVBQTNDLEVBQXNEUixjQUF0RCxDQUFMLENBQTJFTyxJQUEzRSxDQUFnRmhCLGNBQWhGLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCB7IGF1dGhIZWFkZXIsIGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnQC9faGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBvcmdhbml6YXRpb25Vc2VyU2VydmljZSA9IHtcbiAgYXJjaGl2ZSxcbiAgY3JlYXRlLFxuICBjaGFuZ2VSb2xlLFxufTtcblxuZnVuY3Rpb24gY3JlYXRlKGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZW1haWwpIHtcbiAgY29uc3QgYm9keSA9IHtcbiAgICBmaXJzdF9uYW1lLFxuICAgIGxhc3RfbmFtZSxcbiAgICBlbWFpbCxcbiAgfTtcblxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSwgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfTtcbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L29yZ2FuaXphdGlvbl91c2Vyc2AsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn1cblxuLy8gRGVwcmVjYXRlZFxuZnVuY3Rpb24gY2hhbmdlUm9sZShpZCwgcm9sZSkge1xuICBjb25zdCBib2R5ID0ge1xuICAgIHJvbGUsXG4gIH07XG5cbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiBhdXRoSGVhZGVyKCksIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG4gIHJldHVybiBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9vcmdhbml6YXRpb25fdXNlcnMvJHtpZH0vY2hhbmdlX3JvbGVgLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XG59XG5cbmZ1bmN0aW9uIGFyY2hpdmUoaWQpIHtcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfTtcbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L29yZ2FuaXphdGlvbl91c2Vycy8ke2lkfS9hcmNoaXZlYCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xufVxuIl19