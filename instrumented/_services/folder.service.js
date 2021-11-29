function cov_7sj2sr5sg() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\folder.service.js";
  var hash = "f0b117e983342b66f744f65724ffc48196e3913b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\folder.service.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 29
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
          column: 81
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
          column: 80
        }
      },
      "6": {
        start: {
          line: 25,
          column: 15
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "7": {
        start: {
          line: 30,
          column: 25
        },
        end: {
          line: 30,
          column: 94
        }
      },
      "8": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 84
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
            column: 18
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
            column: 22
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 15
      },
      "2": {
        name: "addToFolder",
        decl: {
          start: {
            line: 24,
            column: 9
          },
          end: {
            line: 24,
            column: 20
          }
        },
        loc: {
          start: {
            line: 24,
            column: 38
          },
          end: {
            line: 32,
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
    hash: "f0b117e983342b66f744f65724ffc48196e3913b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7sj2sr5sg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_7sj2sr5sg();
import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';
export const folderService = (cov_7sj2sr5sg().s[0]++, {
  create,
  getAll,
  addToFolder
});

function getAll() {
  cov_7sj2sr5sg().f[0]++;
  const requestOptions = (cov_7sj2sr5sg().s[1]++, {
    method: 'GET',
    headers: authHeader()
  });
  cov_7sj2sr5sg().s[2]++;
  return fetch(`${config.apiUrl}/folders/`, requestOptions).then(handleResponse);
}

function create(name) {
  cov_7sj2sr5sg().f[1]++;
  const body = (cov_7sj2sr5sg().s[3]++, {
    name
  });
  const requestOptions = (cov_7sj2sr5sg().s[4]++, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(body)
  });
  cov_7sj2sr5sg().s[5]++;
  return fetch(`${config.apiUrl}/folders`, requestOptions).then(handleResponse);
}

function addToFolder(appId, folderId) {
  cov_7sj2sr5sg().f[2]++;
  const body = (cov_7sj2sr5sg().s[6]++, {
    app_id: appId,
    folder_id: folderId
  });
  const requestOptions = (cov_7sj2sr5sg().s[7]++, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(body)
  });
  cov_7sj2sr5sg().s[8]++;
  return fetch(`${config.apiUrl}/folder_apps`, requestOptions).then(handleResponse);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImF1dGhIZWFkZXIiLCJoYW5kbGVSZXNwb25zZSIsImZvbGRlclNlcnZpY2UiLCJjcmVhdGUiLCJnZXRBbGwiLCJhZGRUb0ZvbGRlciIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwiYXBpVXJsIiwidGhlbiIsIm5hbWUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFwcElkIiwiZm9sZGVySWQiLCJhcHBfaWQiLCJmb2xkZXJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixRQUFuQjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLGNBQXJCLFFBQTJDLFlBQTNDO0FBRUEsT0FBTyxNQUFNQyxhQUFhLDRCQUFHO0FBQzNCQyxFQUFBQSxNQUQyQjtBQUUzQkMsRUFBQUEsTUFGMkI7QUFHM0JDLEVBQUFBO0FBSDJCLENBQUgsQ0FBbkI7O0FBTVAsU0FBU0QsTUFBVCxHQUFrQjtBQUFBO0FBQ2hCLFFBQU1FLGNBQWMsNEJBQUc7QUFBRUMsSUFBQUEsTUFBTSxFQUFFLEtBQVY7QUFBaUJDLElBQUFBLE9BQU8sRUFBRVIsVUFBVTtBQUFwQyxHQUFILENBQXBCO0FBRGdCO0FBRWhCLFNBQU9TLEtBQUssQ0FBRSxHQUFFVixNQUFNLENBQUNXLE1BQU8sV0FBbEIsRUFBOEJKLGNBQTlCLENBQUwsQ0FBbURLLElBQW5ELENBQXdEVixjQUF4RCxDQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsTUFBVCxDQUFnQlMsSUFBaEIsRUFBc0I7QUFBQTtBQUNwQixRQUFNQyxJQUFJLDRCQUFHO0FBQ1hELElBQUFBO0FBRFcsR0FBSCxDQUFWO0FBSUEsUUFBTU4sY0FBYyw0QkFBRztBQUFFQyxJQUFBQSxNQUFNLEVBQUUsTUFBVjtBQUFrQkMsSUFBQUEsT0FBTyxFQUFFUixVQUFVLEVBQXJDO0FBQXlDYSxJQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmO0FBQS9DLEdBQUgsQ0FBcEI7QUFMb0I7QUFNcEIsU0FBT0osS0FBSyxDQUFFLEdBQUVWLE1BQU0sQ0FBQ1csTUFBTyxVQUFsQixFQUE2QkosY0FBN0IsQ0FBTCxDQUFrREssSUFBbEQsQ0FBdURWLGNBQXZELENBQVA7QUFDRDs7QUFFRCxTQUFTSSxXQUFULENBQXFCVyxLQUFyQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTtBQUNwQyxRQUFNSixJQUFJLDRCQUFHO0FBQ1hLLElBQUFBLE1BQU0sRUFBRUYsS0FERztBQUVYRyxJQUFBQSxTQUFTLEVBQUVGO0FBRkEsR0FBSCxDQUFWO0FBS0EsUUFBTVgsY0FBYyw0QkFBRztBQUFFQyxJQUFBQSxNQUFNLEVBQUUsTUFBVjtBQUFrQkMsSUFBQUEsT0FBTyxFQUFFUixVQUFVLEVBQXJDO0FBQXlDYSxJQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmO0FBQS9DLEdBQUgsQ0FBcEI7QUFOb0M7QUFPcEMsU0FBT0osS0FBSyxDQUFFLEdBQUVWLE1BQU0sQ0FBQ1csTUFBTyxjQUFsQixFQUFpQ0osY0FBakMsQ0FBTCxDQUFzREssSUFBdEQsQ0FBMkRWLGNBQTNELENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCB7IGF1dGhIZWFkZXIsIGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnQC9faGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBmb2xkZXJTZXJ2aWNlID0ge1xuICBjcmVhdGUsXG4gIGdldEFsbCxcbiAgYWRkVG9Gb2xkZXIsXG59O1xuXG5mdW5jdGlvbiBnZXRBbGwoKSB7XG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfTtcbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L2ZvbGRlcnMvYCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUobmFtZSkge1xuICBjb25zdCBib2R5ID0ge1xuICAgIG5hbWUsXG4gIH07XG5cbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiBhdXRoSGVhZGVyKCksIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG4gIHJldHVybiBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9mb2xkZXJzYCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xufVxuXG5mdW5jdGlvbiBhZGRUb0ZvbGRlcihhcHBJZCwgZm9sZGVySWQpIHtcbiAgY29uc3QgYm9keSA9IHtcbiAgICBhcHBfaWQ6IGFwcElkLFxuICAgIGZvbGRlcl9pZDogZm9sZGVySWQsXG4gIH07XG5cbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiBhdXRoSGVhZGVyKCksIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG4gIHJldHVybiBmZXRjaChgJHtjb25maWcuYXBpVXJsfS9mb2xkZXJfYXBwc2AsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn1cbiJdfQ==