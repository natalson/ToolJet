function cov_1eb9qnypj7() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_lib\\generate-file.js";
  var hash = "67c3e13dbd4f1a7d66bc01e1a719695227028371";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_lib\\generate-file.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 15
        },
        end: {
          line: 2,
          column: 53
        }
      },
      "1": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "2": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 48
        }
      },
      "3": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 6,
          column: 51
        }
      },
      "4": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 49
        }
      },
      "5": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 29
        }
      },
      "6": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 36
        }
      },
      "7": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 17
        }
      },
      "8": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 36
        }
      },
      "9": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "generateFile",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 36
          }
        },
        loc: {
          start: {
            line: 1,
            column: 53
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        }, {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        }],
        line: 3
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
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "67c3e13dbd4f1a7d66bc01e1a719695227028371"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1eb9qnypj7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1eb9qnypj7();
export default function generateFile(filename, data) {
  cov_1eb9qnypj7().f[0]++;
  const blob = (cov_1eb9qnypj7().s[0]++, new Blob([data], {
    type: 'text/csv'
  }));
  cov_1eb9qnypj7().s[1]++;

  if (window.navigator.msSaveOrOpenBlob) {
    cov_1eb9qnypj7().b[0][0]++;
    cov_1eb9qnypj7().s[2]++;
    window.navigator.msSaveBlob(blob, filename);
  } else {
    cov_1eb9qnypj7().b[0][1]++;
    const elem = (cov_1eb9qnypj7().s[3]++, window.document.createElement('a'));
    cov_1eb9qnypj7().s[4]++;
    elem.href = window.URL.createObjectURL(blob);
    cov_1eb9qnypj7().s[5]++;
    elem.download = filename;
    cov_1eb9qnypj7().s[6]++;
    document.body.appendChild(elem);
    cov_1eb9qnypj7().s[7]++;
    elem.click();
    cov_1eb9qnypj7().s[8]++;
    document.body.removeChild(elem);
    cov_1eb9qnypj7().s[9]++;
    window.URL.revokeObjectURL(elem.href);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLWZpbGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVGaWxlIiwiZmlsZW5hbWUiLCJkYXRhIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwid2luZG93IiwibmF2aWdhdG9yIiwibXNTYXZlT3JPcGVuQmxvYiIsIm1zU2F2ZUJsb2IiLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInJldm9rZU9iamVjdFVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixlQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLFFBQXRCLEVBQWdDQyxJQUFoQyxFQUFzQztBQUFBO0FBQ25ELFFBQU1DLElBQUksNkJBQUcsSUFBSUMsSUFBSixDQUFTLENBQUNGLElBQUQsQ0FBVCxFQUFpQjtBQUFFRyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFqQixDQUFILENBQVY7QUFEbUQ7O0FBRW5ELE1BQUlDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsZ0JBQXJCLEVBQXVDO0FBQUE7QUFBQTtBQUNyQ0YsSUFBQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRSxVQUFqQixDQUE0Qk4sSUFBNUIsRUFBa0NGLFFBQWxDO0FBQ0QsR0FGRCxNQUVPO0FBQUE7QUFDTCxVQUFNUyxJQUFJLDZCQUFHSixNQUFNLENBQUNLLFFBQVAsQ0FBZ0JDLGFBQWhCLENBQThCLEdBQTlCLENBQUgsQ0FBVjtBQURLO0FBRUxGLElBQUFBLElBQUksQ0FBQ0csSUFBTCxHQUFZUCxNQUFNLENBQUNRLEdBQVAsQ0FBV0MsZUFBWCxDQUEyQlosSUFBM0IsQ0FBWjtBQUZLO0FBR0xPLElBQUFBLElBQUksQ0FBQ00sUUFBTCxHQUFnQmYsUUFBaEI7QUFISztBQUlMVSxJQUFBQSxRQUFRLENBQUNNLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlIsSUFBMUI7QUFKSztBQUtMQSxJQUFBQSxJQUFJLENBQUNTLEtBQUw7QUFMSztBQU1MUixJQUFBQSxRQUFRLENBQUNNLElBQVQsQ0FBY0csV0FBZCxDQUEwQlYsSUFBMUI7QUFOSztBQU9MSixJQUFBQSxNQUFNLENBQUNRLEdBQVAsQ0FBV08sZUFBWCxDQUEyQlgsSUFBSSxDQUFDRyxJQUFoQztBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUZpbGUoZmlsZW5hbWUsIGRhdGEpIHtcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlOiAndGV4dC9jc3YnIH0pO1xuICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlbGVtID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBlbGVtLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBlbGVtLmRvd25sb2FkID0gZmlsZW5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICBlbGVtLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChlbGVtLmhyZWYpO1xuICB9XG59XG4iXX0=