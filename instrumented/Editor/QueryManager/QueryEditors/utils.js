function cov_1u9i69vygw() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\Editor\\QueryManager\\QueryEditors\\utils.js";
  var hash = "a51bef36daf198ab7a12c2b33e11ee135f2ca88c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\Editor\\QueryManager\\QueryEditors\\utils.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 12,
          column: 4
        }
      },
      "1": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "changeOption",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1,
            column: 50
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 10
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a51bef36daf198ab7a12c2b33e11ee135f2ca88c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1u9i69vygw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1u9i69vygw();
export function changeOption(_ref, option, value) {
  cov_1u9i69vygw().f[0]++;
  cov_1u9i69vygw().s[0]++;

  _ref.setState({
    options: { ..._ref.state.options,
      [option]: value
    }
  }, () => {
    cov_1u9i69vygw().f[1]++;
    cov_1u9i69vygw().s[1]++;

    _ref.props.optionsChanged(_ref.state.options);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImNoYW5nZU9wdGlvbiIsIl9yZWYiLCJvcHRpb24iLCJ2YWx1ZSIsInNldFN0YXRlIiwib3B0aW9ucyIsInN0YXRlIiwicHJvcHMiLCJvcHRpb25zQ2hhbmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFBQTtBQUFBOztBQUNoREYsRUFBQUEsSUFBSSxDQUFDRyxRQUFMLENBQ0U7QUFDRUMsSUFBQUEsT0FBTyxFQUFFLEVBQ1AsR0FBR0osSUFBSSxDQUFDSyxLQUFMLENBQVdELE9BRFA7QUFFUCxPQUFDSCxNQUFELEdBQVVDO0FBRkg7QUFEWCxHQURGLEVBT0UsTUFBTTtBQUFBO0FBQUE7O0FBQ0pGLElBQUFBLElBQUksQ0FBQ00sS0FBTCxDQUFXQyxjQUFYLENBQTBCUCxJQUFJLENBQUNLLEtBQUwsQ0FBV0QsT0FBckM7QUFDRCxHQVRIO0FBV0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2hhbmdlT3B0aW9uKF9yZWYsIG9wdGlvbiwgdmFsdWUpIHtcbiAgX3JlZi5zZXRTdGF0ZShcbiAgICB7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIC4uLl9yZWYuc3RhdGUub3B0aW9ucyxcbiAgICAgICAgW29wdGlvbl06IHZhbHVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgICgpID0+IHtcbiAgICAgIF9yZWYucHJvcHMub3B0aW9uc0NoYW5nZWQoX3JlZi5zdGF0ZS5vcHRpb25zKTtcbiAgICB9XG4gICk7XG59XG4iXX0=