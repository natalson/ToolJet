function cov_2cs3cnlwt() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\organization.service.js";
  var hash = "3a9de1131997975b16c1015e6bde4b916d688c93";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_services\\organization.service.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 35
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 25
        },
        end: {
          line: 9,
          column: 65
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 92
        }
      }
    },
    fnMap: {
      "0": {
        name: "getUsers",
        decl: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 17
          }
        },
        loc: {
          start: {
            line: 8,
            column: 20
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 8
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
    hash: "3a9de1131997975b16c1015e6bde4b916d688c93"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2cs3cnlwt = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2cs3cnlwt();
import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';
export const organizationService = (cov_2cs3cnlwt().s[0]++, {
  getUsers
});

function getUsers() {
  cov_2cs3cnlwt().f[0]++;
  const requestOptions = (cov_2cs3cnlwt().s[1]++, {
    method: 'GET',
    headers: authHeader()
  });
  cov_2cs3cnlwt().s[2]++;
  return fetch(`${config.apiUrl}/organizations/users`, requestOptions).then(handleResponse);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZ2FuaXphdGlvbi5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImF1dGhIZWFkZXIiLCJoYW5kbGVSZXNwb25zZSIsIm9yZ2FuaXphdGlvblNlcnZpY2UiLCJnZXRVc2VycyIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwiYXBpVXJsIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixRQUFuQjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLGNBQXJCLFFBQTJDLFlBQTNDO0FBRUEsT0FBTyxNQUFNQyxtQkFBbUIsNEJBQUc7QUFDakNDLEVBQUFBO0FBRGlDLENBQUgsQ0FBekI7O0FBSVAsU0FBU0EsUUFBVCxHQUFvQjtBQUFBO0FBQ2xCLFFBQU1DLGNBQWMsNEJBQUc7QUFBRUMsSUFBQUEsTUFBTSxFQUFFLEtBQVY7QUFBaUJDLElBQUFBLE9BQU8sRUFBRU4sVUFBVTtBQUFwQyxHQUFILENBQXBCO0FBRGtCO0FBRWxCLFNBQU9PLEtBQUssQ0FBRSxHQUFFUixNQUFNLENBQUNTLE1BQU8sc0JBQWxCLEVBQXlDSixjQUF6QyxDQUFMLENBQThESyxJQUE5RCxDQUFtRVIsY0FBbkUsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnO1xuaW1wb3J0IHsgYXV0aEhlYWRlciwgaGFuZGxlUmVzcG9uc2UgfSBmcm9tICdAL19oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IG9yZ2FuaXphdGlvblNlcnZpY2UgPSB7XG4gIGdldFVzZXJzLFxufTtcblxuZnVuY3Rpb24gZ2V0VXNlcnMoKSB7XG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfTtcbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5hcGlVcmx9L29yZ2FuaXphdGlvbnMvdXNlcnNgLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XG59XG4iXX0=