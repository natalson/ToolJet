function cov_1wsfytz5di() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\Editor\\ActionTypes.js";
  var hash = "cec34c0117507dc3ad089133ba22f4c03668c50b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\Editor\\ActionTypes.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 27
        },
        end: {
          line: 57,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cec34c0117507dc3ad089133ba22f4c03668c50b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1wsfytz5di = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1wsfytz5di();
export const ActionTypes = (cov_1wsfytz5di().s[0]++, [{
  name: 'Show Alert',
  id: 'show-alert',
  options: [{
    name: 'message',
    type: 'text',
    default: 'Message !'
  }]
}, {
  name: 'Run Query',
  id: 'run-query',
  options: [{
    queryId: ''
  }]
}, {
  name: 'Open Webpage',
  id: 'open-webpage',
  options: [{
    name: 'url',
    type: 'text',
    default: 'https://example.com'
  }]
}, {
  name: 'Go to app',
  id: 'go-to-app',
  options: [{
    name: 'app',
    type: 'text',
    default: ''
  }, {
    name: 'queryParams',
    type: 'code',
    default: '[]'
  }]
}, {
  name: 'Show Modal',
  id: 'show-modal',
  options: [{
    name: 'modal',
    type: 'text',
    default: ''
  }]
}, {
  name: 'Close Modal',
  id: 'close-modal',
  options: [{
    name: 'modal',
    type: 'text',
    default: ''
  }]
}, {
  name: 'Copy to clipboard',
  id: 'copy-to-clipboard',
  options: [{
    name: 'copy-to-clipboard',
    type: 'text',
    default: ''
  }]
}, {
  name: 'Set local storage',
  id: 'set-localstorage-value',
  options: [{
    name: 'key',
    type: 'code',
    default: ''
  }, {
    name: 'value',
    type: 'code',
    default: ''
  }]
}, {
  name: 'Generate file',
  id: 'generate-file',
  options: [{
    name: 'fileType',
    type: 'text',
    default: ''
  }, {
    name: 'fileName',
    type: 'text',
    default: ''
  }, {
    name: 'data',
    type: 'code',
    default: '{{[]}}'
  }]
}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjdGlvblR5cGVzLmpzIl0sIm5hbWVzIjpbIkFjdGlvblR5cGVzIiwibmFtZSIsImlkIiwib3B0aW9ucyIsInR5cGUiLCJkZWZhdWx0IiwicXVlcnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPLE1BQU1BLFdBQVcsNkJBQUcsQ0FDekI7QUFDRUMsRUFBQUEsSUFBSSxFQUFFLFlBRFI7QUFFRUMsRUFBQUEsRUFBRSxFQUFFLFlBRk47QUFHRUMsRUFBQUEsT0FBTyxFQUFFLENBQUM7QUFBRUYsSUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJHLElBQUFBLElBQUksRUFBRSxNQUF6QjtBQUFpQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQTFDLEdBQUQ7QUFIWCxDQUR5QixFQU16QjtBQUNFSixFQUFBQSxJQUFJLEVBQUUsV0FEUjtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsV0FGTjtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUFFRyxJQUFBQSxPQUFPLEVBQUU7QUFBWCxHQUFEO0FBSFgsQ0FOeUIsRUFXekI7QUFDRUwsRUFBQUEsSUFBSSxFQUFFLGNBRFI7QUFFRUMsRUFBQUEsRUFBRSxFQUFFLGNBRk47QUFHRUMsRUFBQUEsT0FBTyxFQUFFLENBQUM7QUFBRUYsSUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUcsSUFBQUEsSUFBSSxFQUFFLE1BQXJCO0FBQTZCQyxJQUFBQSxPQUFPLEVBQUU7QUFBdEMsR0FBRDtBQUhYLENBWHlCLEVBZ0J6QjtBQUNFSixFQUFBQSxJQUFJLEVBQUUsV0FEUjtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsV0FGTjtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUFFRixJQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlRyxJQUFBQSxJQUFJLEVBQUUsTUFBckI7QUFBNkJDLElBQUFBLE9BQU8sRUFBRTtBQUF0QyxHQURPLEVBRVA7QUFBRUosSUFBQUEsSUFBSSxFQUFFLGFBQVI7QUFBdUJHLElBQUFBLElBQUksRUFBRSxNQUE3QjtBQUFxQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQTlDLEdBRk87QUFIWCxDQWhCeUIsRUF3QnpCO0FBQ0VKLEVBQUFBLElBQUksRUFBRSxZQURSO0FBRUVDLEVBQUFBLEVBQUUsRUFBRSxZQUZOO0FBR0VDLEVBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQUVGLElBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCRyxJQUFBQSxJQUFJLEVBQUUsTUFBdkI7QUFBK0JDLElBQUFBLE9BQU8sRUFBRTtBQUF4QyxHQUFEO0FBSFgsQ0F4QnlCLEVBNkJ6QjtBQUNFSixFQUFBQSxJQUFJLEVBQUUsYUFEUjtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsYUFGTjtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUFFRixJQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkcsSUFBQUEsSUFBSSxFQUFFLE1BQXZCO0FBQStCQyxJQUFBQSxPQUFPLEVBQUU7QUFBeEMsR0FBRDtBQUhYLENBN0J5QixFQWtDekI7QUFDRUosRUFBQUEsSUFBSSxFQUFFLG1CQURSO0FBRUVDLEVBQUFBLEVBQUUsRUFBRSxtQkFGTjtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUFFRixJQUFBQSxJQUFJLEVBQUUsbUJBQVI7QUFBNkJHLElBQUFBLElBQUksRUFBRSxNQUFuQztBQUEyQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQXBELEdBQUQ7QUFIWCxDQWxDeUIsRUF1Q3pCO0FBQ0VKLEVBQUFBLElBQUksRUFBRSxtQkFEUjtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsd0JBRk47QUFHRUMsRUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFBRUYsSUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUcsSUFBQUEsSUFBSSxFQUFFLE1BQXJCO0FBQTZCQyxJQUFBQSxPQUFPLEVBQUU7QUFBdEMsR0FETyxFQUVQO0FBQUVKLElBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCRyxJQUFBQSxJQUFJLEVBQUUsTUFBdkI7QUFBK0JDLElBQUFBLE9BQU8sRUFBRTtBQUF4QyxHQUZPO0FBSFgsQ0F2Q3lCLEVBK0N6QjtBQUNFSixFQUFBQSxJQUFJLEVBQUUsZUFEUjtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsZUFGTjtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUFFRixJQUFBQSxJQUFJLEVBQUUsVUFBUjtBQUFvQkcsSUFBQUEsSUFBSSxFQUFFLE1BQTFCO0FBQWtDQyxJQUFBQSxPQUFPLEVBQUU7QUFBM0MsR0FETyxFQUVQO0FBQUVKLElBQUFBLElBQUksRUFBRSxVQUFSO0FBQW9CRyxJQUFBQSxJQUFJLEVBQUUsTUFBMUI7QUFBa0NDLElBQUFBLE9BQU8sRUFBRTtBQUEzQyxHQUZPLEVBR1A7QUFBRUosSUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JHLElBQUFBLElBQUksRUFBRSxNQUF0QjtBQUE4QkMsSUFBQUEsT0FBTyxFQUFFO0FBQXZDLEdBSE87QUFIWCxDQS9DeUIsQ0FBSCxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBY3Rpb25UeXBlcyA9IFtcbiAge1xuICAgIG5hbWU6ICdTaG93IEFsZXJ0JyxcbiAgICBpZDogJ3Nob3ctYWxlcnQnLFxuICAgIG9wdGlvbnM6IFt7IG5hbWU6ICdtZXNzYWdlJywgdHlwZTogJ3RleHQnLCBkZWZhdWx0OiAnTWVzc2FnZSAhJyB9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSdW4gUXVlcnknLFxuICAgIGlkOiAncnVuLXF1ZXJ5JyxcbiAgICBvcHRpb25zOiBbeyBxdWVyeUlkOiAnJyB9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPcGVuIFdlYnBhZ2UnLFxuICAgIGlkOiAnb3Blbi13ZWJwYWdlJyxcbiAgICBvcHRpb25zOiBbeyBuYW1lOiAndXJsJywgdHlwZTogJ3RleHQnLCBkZWZhdWx0OiAnaHR0cHM6Ly9leGFtcGxlLmNvbScgfV0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR28gdG8gYXBwJyxcbiAgICBpZDogJ2dvLXRvLWFwcCcsXG4gICAgb3B0aW9uczogW1xuICAgICAgeyBuYW1lOiAnYXBwJywgdHlwZTogJ3RleHQnLCBkZWZhdWx0OiAnJyB9LFxuICAgICAgeyBuYW1lOiAncXVlcnlQYXJhbXMnLCB0eXBlOiAnY29kZScsIGRlZmF1bHQ6ICdbXScgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1Nob3cgTW9kYWwnLFxuICAgIGlkOiAnc2hvdy1tb2RhbCcsXG4gICAgb3B0aW9uczogW3sgbmFtZTogJ21vZGFsJywgdHlwZTogJ3RleHQnLCBkZWZhdWx0OiAnJyB9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDbG9zZSBNb2RhbCcsXG4gICAgaWQ6ICdjbG9zZS1tb2RhbCcsXG4gICAgb3B0aW9uczogW3sgbmFtZTogJ21vZGFsJywgdHlwZTogJ3RleHQnLCBkZWZhdWx0OiAnJyB9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDb3B5IHRvIGNsaXBib2FyZCcsXG4gICAgaWQ6ICdjb3B5LXRvLWNsaXBib2FyZCcsXG4gICAgb3B0aW9uczogW3sgbmFtZTogJ2NvcHktdG8tY2xpcGJvYXJkJywgdHlwZTogJ3RleHQnLCBkZWZhdWx0OiAnJyB9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTZXQgbG9jYWwgc3RvcmFnZScsXG4gICAgaWQ6ICdzZXQtbG9jYWxzdG9yYWdlLXZhbHVlJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICB7IG5hbWU6ICdrZXknLCB0eXBlOiAnY29kZScsIGRlZmF1bHQ6ICcnIH0sXG4gICAgICB7IG5hbWU6ICd2YWx1ZScsIHR5cGU6ICdjb2RlJywgZGVmYXVsdDogJycgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0dlbmVyYXRlIGZpbGUnLFxuICAgIGlkOiAnZ2VuZXJhdGUtZmlsZScsXG4gICAgb3B0aW9uczogW1xuICAgICAgeyBuYW1lOiAnZmlsZVR5cGUnLCB0eXBlOiAndGV4dCcsIGRlZmF1bHQ6ICcnIH0sXG4gICAgICB7IG5hbWU6ICdmaWxlTmFtZScsIHR5cGU6ICd0ZXh0JywgZGVmYXVsdDogJycgfSxcbiAgICAgIHsgbmFtZTogJ2RhdGEnLCB0eXBlOiAnY29kZScsIGRlZmF1bHQ6ICd7e1tdfX0nIH0sXG4gICAgXSxcbiAgfSxcbl07XG4iXX0=