function cov_9xxcznwu() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_hooks\\use-mouse-position.jsx";
  var hash = "6735768545bc9fb521e95c642468f28b17ce2e46";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_hooks\\use-mouse-position.jsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 44
        },
        end: {
          line: 4,
          column: 74
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 16,
          column: 9
        }
      },
      "2": {
        start: {
          line: 7,
          column: 29
        },
        end: {
          line: 10,
          column: 5
        }
      },
      "3": {
        start: {
          line: 8,
          column: 35
        },
        end: {
          line: 8,
          column: 40
        }
      },
      "4": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 51
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 61
        }
      },
      "6": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 6
        }
      },
      "7": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 66
        }
      },
      "8": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "useMousePosition",
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 40
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
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
            line: 6,
            column: 12
          },
          end: {
            line: 6,
            column: 13
          }
        },
        loc: {
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 30
          }
        },
        loc: {
          start: {
            line: 7,
            column: 40
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 7
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 13,
            column: 11
          },
          end: {
            line: 13,
            column: 12
          }
        },
        loc: {
          start: {
            line: 13,
            column: 17
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 13
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
    hash: "6735768545bc9fb521e95c642468f28b17ce2e46"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9xxcznwu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_9xxcznwu();
import { useEffect, useState } from 'react';
export default function useMousePosition() {
  cov_9xxcznwu().f[0]++;
  const [mousePosition, setMousePosition] = (cov_9xxcznwu().s[0]++, useState({
    x: null,
    y: null
  }));
  cov_9xxcznwu().s[1]++;
  useEffect(() => {
    cov_9xxcznwu().f[1]++;
    cov_9xxcznwu().s[2]++;

    const mouseMoveHandler = event => {
      cov_9xxcznwu().f[2]++;
      const {
        clientX,
        clientY
      } = (cov_9xxcznwu().s[3]++, event);
      cov_9xxcznwu().s[4]++;
      setMousePosition({
        x: clientX,
        y: clientY
      });
    };

    cov_9xxcznwu().s[5]++;
    document.addEventListener('mousemove', mouseMoveHandler);
    cov_9xxcznwu().s[6]++;
    return () => {
      cov_9xxcznwu().f[3]++;
      cov_9xxcznwu().s[7]++;
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
  cov_9xxcznwu().s[8]++;
  return mousePosition;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZS1tb3VzZS1wb3NpdGlvbi5qc3giXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNb3VzZVBvc2l0aW9uIiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJ4IiwieSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsU0FBVCxFQUFvQkMsUUFBcEIsUUFBb0MsT0FBcEM7QUFFQSxlQUFlLFNBQVNDLGdCQUFULEdBQTRCO0FBQUE7QUFDekMsUUFBTSxDQUFDQyxhQUFELEVBQWdCQyxnQkFBaEIsNEJBQW9DSCxRQUFRLENBQUM7QUFBRUksSUFBQUEsQ0FBQyxFQUFFLElBQUw7QUFBV0MsSUFBQUEsQ0FBQyxFQUFFO0FBQWQsR0FBRCxDQUE1QyxDQUFOO0FBRHlDO0FBR3pDTixFQUFBQSxTQUFTLENBQUMsTUFBTTtBQUFBO0FBQUE7O0FBQ2QsVUFBTU8sZ0JBQWdCLEdBQUlDLEtBQUQsSUFBVztBQUFBO0FBQ2xDLFlBQU07QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLGtDQUF1QkYsS0FBdkIsQ0FBTjtBQURrQztBQUVsQ0osTUFBQUEsZ0JBQWdCLENBQUM7QUFBRUMsUUFBQUEsQ0FBQyxFQUFFSSxPQUFMO0FBQWNILFFBQUFBLENBQUMsRUFBRUk7QUFBakIsT0FBRCxDQUFoQjtBQUNELEtBSEQ7O0FBRGM7QUFLZEMsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0wsZ0JBQXZDO0FBTGM7QUFPZCxXQUFPLE1BQU07QUFBQTtBQUFBO0FBQ1hJLE1BQUFBLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENOLGdCQUExQztBQUNELEtBRkQ7QUFHRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBSHlDO0FBZXpDLFNBQU9KLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1vdXNlUG9zaXRpb24oKSB7XG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogbnVsbCwgeTogbnVsbCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgICBzZXRNb3VzZVBvc2l0aW9uKHsgeDogY2xpZW50WCwgeTogY2xpZW50WSB9KTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbW91c2VQb3NpdGlvbjtcbn1cbiJdfQ==