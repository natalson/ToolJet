function cov_8n5m8hv48() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_hooks\\usePinnedPopover.jsx";
  var hash = "1c93c9ae79de4e0a076366ef41660f50df830ff8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\_hooks\\usePinnedPopover.jsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 25
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 44
        },
        end: {
          line: 5,
          column: 69
        }
      },
      "2": {
        start: {
          line: 6,
          column: 44
        },
        end: {
          line: 6,
          column: 73
        }
      },
      "3": {
        start: {
          line: 8,
          column: 35
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 38
        }
      },
      "5": {
        start: {
          line: 9,
          column: 31
        },
        end: {
          line: 9,
          column: 36
        }
      },
      "6": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 17,
          column: 22
        }
      },
      "7": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "8": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 20
        }
      },
      "9": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 75
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 25
          },
          end: {
            line: 4,
            column: 26
          }
        },
        loc: {
          start: {
            line: 4,
            column: 52
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 35
          },
          end: {
            line: 8,
            column: 36
          }
        },
        loc: {
          start: {
            line: 8,
            column: 41
          },
          end: {
            line: 10,
            column: 3
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 21
          },
          end: {
            line: 9,
            column: 22
          }
        },
        loc: {
          start: {
            line: 9,
            column: 31
          },
          end: {
            line: 9,
            column: 36
          }
        },
        line: 9
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 12,
            column: 18
          },
          end: {
            line: 12,
            column: 19
          }
        },
        loc: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 26
          },
          end: {
            line: 4,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 4,
            column: 42
          },
          end: {
            line: 4,
            column: 47
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 13,
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
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
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
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1c93c9ae79de4e0a076366ef41660f50df830ff8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_8n5m8hv48 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_8n5m8hv48();
import React from 'react';
import usePopover from './use-popover';
cov_8n5m8hv48().s[0]++;

const usePinnedPopover = (defaultOption = (cov_8n5m8hv48().b[0][0]++, false)) => {
  cov_8n5m8hv48().f[0]++;
  const [open, trigger, content, setOpen] = (cov_8n5m8hv48().s[1]++, usePopover(defaultOption));
  const [popoverPinned, setPopoverPinned] = (cov_8n5m8hv48().s[2]++, React.useState(defaultOption));
  cov_8n5m8hv48().s[3]++;

  const updatePopoverPinnedState = () => {
    cov_8n5m8hv48().f[1]++;
    cov_8n5m8hv48().s[4]++;
    setPopoverPinned(prev => {
      cov_8n5m8hv48().f[2]++;
      cov_8n5m8hv48().s[5]++;
      return !prev;
    });
  };

  cov_8n5m8hv48().s[6]++;
  React.useEffect(() => {
    cov_8n5m8hv48().f[3]++;
    cov_8n5m8hv48().s[7]++;

    if (popoverPinned) {
      cov_8n5m8hv48().b[1][0]++;
      cov_8n5m8hv48().s[8]++;
      setOpen(true);
    } else {
      cov_8n5m8hv48().b[1][1]++;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [popoverPinned]);
  cov_8n5m8hv48().s[9]++;
  return [open, trigger, content, popoverPinned, updatePopoverPinnedState];
};

export default usePinnedPopover;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZVBpbm5lZFBvcG92ZXIuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUG9wb3ZlciIsInVzZVBpbm5lZFBvcG92ZXIiLCJkZWZhdWx0T3B0aW9uIiwib3BlbiIsInRyaWdnZXIiLCJjb250ZW50Iiwic2V0T3BlbiIsInBvcG92ZXJQaW5uZWQiLCJzZXRQb3BvdmVyUGlubmVkIiwidXNlU3RhdGUiLCJ1cGRhdGVQb3BvdmVyUGlubmVkU3RhdGUiLCJwcmV2IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixlQUF2Qjs7O0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ0MsYUFBYSwrQkFBRyxLQUFILENBQWQsS0FBMkI7QUFBQTtBQUNsRCxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsT0FBaEIsRUFBeUJDLE9BQXpCLDZCQUFvQ04sVUFBVSxDQUFDRSxhQUFELENBQTlDLENBQU47QUFDQSxRQUFNLENBQUNLLGFBQUQsRUFBZ0JDLGdCQUFoQiw2QkFBb0NULEtBQUssQ0FBQ1UsUUFBTixDQUFlUCxhQUFmLENBQXBDLENBQU47QUFGa0Q7O0FBSWxELFFBQU1RLHdCQUF3QixHQUFHLE1BQU07QUFBQTtBQUFBO0FBQ3JDRixJQUFBQSxnQkFBZ0IsQ0FBRUcsSUFBRCxJQUFVO0FBQUE7QUFBQTtBQUFBLGNBQUNBLElBQUQ7QUFBSyxLQUFoQixDQUFoQjtBQUNELEdBRkQ7O0FBSmtEO0FBUWxEWixFQUFBQSxLQUFLLENBQUNhLFNBQU4sQ0FBZ0IsTUFBTTtBQUFBO0FBQUE7O0FBQ3BCLFFBQUlMLGFBQUosRUFBbUI7QUFBQTtBQUFBO0FBQ2pCRCxNQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsS0FGRDtBQUFBO0FBQUEsS0FEb0IsQ0FJcEI7O0FBQ0QsR0FMRCxFQUtHLENBQUNDLGFBQUQsQ0FMSDtBQVJrRDtBQWVsRCxTQUFPLENBQUNKLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsT0FBaEIsRUFBeUJFLGFBQXpCLEVBQXdDRyx3QkFBeEMsQ0FBUDtBQUNELENBaEJEOztBQWtCQSxlQUFlVCxnQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlUG9wb3ZlciBmcm9tICcuL3VzZS1wb3BvdmVyJztcblxuY29uc3QgdXNlUGlubmVkUG9wb3ZlciA9IChkZWZhdWx0T3B0aW9uID0gZmFsc2UpID0+IHtcbiAgY29uc3QgW29wZW4sIHRyaWdnZXIsIGNvbnRlbnQsIHNldE9wZW5dID0gdXNlUG9wb3ZlcihkZWZhdWx0T3B0aW9uKTtcbiAgY29uc3QgW3BvcG92ZXJQaW5uZWQsIHNldFBvcG92ZXJQaW5uZWRdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE9wdGlvbik7XG5cbiAgY29uc3QgdXBkYXRlUG9wb3ZlclBpbm5lZFN0YXRlID0gKCkgPT4ge1xuICAgIHNldFBvcG92ZXJQaW5uZWQoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwb3BvdmVyUGlubmVkKSB7XG4gICAgICBzZXRPcGVuKHRydWUpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtwb3BvdmVyUGlubmVkXSk7XG5cbiAgcmV0dXJuIFtvcGVuLCB0cmlnZ2VyLCBjb250ZW50LCBwb3BvdmVyUGlubmVkLCB1cGRhdGVQb3BvdmVyUGlubmVkU3RhdGVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUGlubmVkUG9wb3ZlcjtcbiJdfQ==