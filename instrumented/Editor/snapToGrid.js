function cov_2a2wr7disk() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\Editor\\snapToGrid.js";
  var hash = "e49d71d029d0a107e9737fe6e9cd1b87916df879";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\Editor\\snapToGrid.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 16
        },
        end: {
          line: 2,
          column: 32
        }
      },
      "1": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 48
        }
      },
      "2": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 5,
          column: 42
        }
      },
      "3": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "snapToGrid",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1,
            column: 46
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e49d71d029d0a107e9737fe6e9cd1b87916df879"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2a2wr7disk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2a2wr7disk();
export function snapToGrid(canvasWidth, x, y) {
  cov_2a2wr7disk().f[0]++;
  const gridX = (cov_2a2wr7disk().s[0]++, canvasWidth / 43);
  const snappedX = (cov_2a2wr7disk().s[1]++, Math.round(x / gridX) * gridX);
  const snappedY = (cov_2a2wr7disk().s[2]++, Math.round(y / 10) * 10);
  cov_2a2wr7disk().s[3]++;
  return [snappedX, snappedY];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYXBUb0dyaWQuanMiXSwibmFtZXMiOlsic25hcFRvR3JpZCIsImNhbnZhc1dpZHRoIiwieCIsInkiLCJncmlkWCIsInNuYXBwZWRYIiwiTWF0aCIsInJvdW5kIiwic25hcHBlZFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBTyxTQUFTQSxVQUFULENBQW9CQyxXQUFwQixFQUFpQ0MsQ0FBakMsRUFBb0NDLENBQXBDLEVBQXVDO0FBQUE7QUFDNUMsUUFBTUMsS0FBSyw2QkFBR0gsV0FBVyxHQUFHLEVBQWpCLENBQVg7QUFFQSxRQUFNSSxRQUFRLDZCQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsQ0FBQyxHQUFHRSxLQUFmLElBQXdCQSxLQUEzQixDQUFkO0FBQ0EsUUFBTUksUUFBUSw2QkFBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdKLENBQUMsR0FBRyxFQUFmLElBQXFCLEVBQXhCLENBQWQ7QUFKNEM7QUFLNUMsU0FBTyxDQUFDRSxRQUFELEVBQVdHLFFBQVgsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNuYXBUb0dyaWQoY2FudmFzV2lkdGgsIHgsIHkpIHtcbiAgY29uc3QgZ3JpZFggPSBjYW52YXNXaWR0aCAvIDQzO1xuXG4gIGNvbnN0IHNuYXBwZWRYID0gTWF0aC5yb3VuZCh4IC8gZ3JpZFgpICogZ3JpZFg7XG4gIGNvbnN0IHNuYXBwZWRZID0gTWF0aC5yb3VuZCh5IC8gMTApICogMTA7XG4gIHJldHVybiBbc25hcHBlZFgsIHNuYXBwZWRZXTtcbn1cbiJdfQ==