function cov_1a144y6mr3() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_lib\\generate-csv.js";
  var hash = "7df151be771d859df6b6d5e0944ab6a84af14dea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_lib\\generate-csv.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "generateCSV",
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 35
          }
        },
        loc: {
          start: {
            line: 3,
            column: 45
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7df151be771d859df6b6d5e0944ab6a84af14dea"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1a144y6mr3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1a144y6mr3();
import Papa from 'papaparse';
export default function generateCSV(records) {
  cov_1a144y6mr3().f[0]++;
  cov_1a144y6mr3().s[0]++;
  return Papa.unparse(records);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLWNzdi5qcyJdLCJuYW1lcyI6WyJQYXBhIiwiZ2VuZXJhdGVDU1YiLCJyZWNvcmRzIiwidW5wYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxJQUFQLE1BQWlCLFdBQWpCO0FBRUEsZUFBZSxTQUFTQyxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUFBO0FBQUE7QUFDM0MsU0FBT0YsSUFBSSxDQUFDRyxPQUFMLENBQWFELE9BQWIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVDU1YocmVjb3Jkcykge1xuICByZXR1cm4gUGFwYS51bnBhcnNlKHJlY29yZHMpO1xufVxuIl19