function cov_rybzbryv1() {
  var path = "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\Editor\\Components\\components.js";
  var hash = "c3fae9cc3151305596fda035ff2a1ccbfe87635a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\juraj\\naty\\2\\ToolJet-develop-2\\frontend\\src\\Editor\\Components\\components.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 30
        },
        end: {
          line: 1408,
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
    hash: "c3fae9cc3151305596fda035ff2a1ccbfe87635a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_rybzbryv1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_rybzbryv1();
export const componentTypes = (cov_rybzbryv1().s[0]++, [{
  name: 'Table',
  displayName: 'Table',
  description: 'Display paginated tabular data',
  component: 'Table',
  properties: {
    title: {
      type: 'string',
      displayName: 'Title'
    },
    data: {
      type: 'code',
      displayName: 'Table data'
    },
    loadingState: {
      type: 'code',
      displayName: 'Loading state'
    },
    columns: {
      type: 'array',
      displayName: 'Table Columns'
    },
    serverSidePagination: {
      type: 'toggle',
      displayName: 'Server-side pagination'
    },
    clientSidePagination: {
      type: 'toggle',
      displayName: 'Client-side pagination'
    },
    serverSideSearch: {
      type: 'toggle',
      displayName: 'Server-side search'
    },
    actionButtonBackgroundColor: {
      type: 'color',
      displayName: 'Background color'
    },
    actionButtonTextColor: {
      type: 'color',
      displayName: 'Text color'
    },
    displaySearchBox: {
      type: 'toggle',
      displayName: 'Show search box'
    },
    showDownloadButton: {
      type: 'toggle',
      displayName: 'Show download button'
    },
    showFilterButton: {
      type: 'toggle',
      displayName: 'Show filter button'
    },
    showBulkUpdateActions: {
      type: 'toggle',
      displayName: 'Show bulk update actions'
    },
    showBulkSelector: {
      type: 'toggle',
      displayName: 'Bulk selection'
    },
    highlightSelectedRow: {
      type: 'toggle',
      displayName: 'Highlight selected row'
    }
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop '
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  defaultSize: {
    width: 20,
    height: 300
  },
  events: {
    onRowClicked: {
      displayName: 'Row clicked'
    },
    onBulkUpdate: {
      displayName: 'Bulk update'
    },
    onPageChanged: {
      displayName: 'Page changed'
    },
    onSearch: {
      displayName: 'Search'
    }
  },
  styles: {
    textColor: {
      type: 'color',
      displayName: 'Text Color'
    },
    tableType: {
      type: 'select',
      displayName: 'Table type',
      options: [{
        name: 'Bordered',
        value: ''
      }, {
        name: 'Borderless',
        value: 'table-borderless'
      }, {
        name: 'Classic',
        value: 'table-classic'
      }, {
        name: 'Striped',
        value: 'table-striped'
      }, {
        name: 'Striped & bordered',
        value: 'table-striped table-bordered'
      }]
    },
    cellSize: {
      type: 'select',
      displayName: 'Cell size',
      options: [{
        name: 'Compact',
        value: 'compact'
      }, {
        name: 'Spacious',
        value: 'spacious'
      }]
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    selectedRow: {},
    changeSet: {},
    dataUpdates: [],
    pageIndex: 0,
    searchText: '',
    selectedRows: []
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      title: {
        value: 'Table'
      },
      visible: {
        value: true
      },
      loadingState: {
        value: false
      },
      data: {
        value: "{{ [ \n\t\t{ id: 1, name: 'Sarah', email: 'sarah@example.com'}, \n\t\t{ id: 2, name: 'Lisa', email: 'lisa@example.com'}, \n\t\t{ id: 3, name: 'Sam', email: 'sam@example.com'}, \n\t\t{ id: 4, name: 'Jon', email: 'jon@example.com'} \n] }}"
      },
      serverSidePagination: {
        value: false
      },
      clientSidePagination: {
        value: true
      },
      displaySearchBox: {
        value: true
      },
      showDownloadButton: {
        value: true
      },
      showFilterButton: {
        value: true
      },
      columns: {
        value: [{
          name: 'id',
          id: 'e3ecbf7fa52c4d7210a93edb8f43776267a489bad52bd108be9588f790126737'
        }, {
          name: 'name',
          id: '5d2a3744a006388aadd012fcc15cc0dbcb5f9130e0fbb64c558561c97118754a'
        }, {
          name: 'email',
          id: 'afc9a5091750a1bd4760e38760de3b4be11a43452ae8ae07ce2eebc569fe9a7f'
        }]
      },
      showBulkUpdateActions: {
        value: true
      },
      showBulkSelector: {
        value: false
      },
      highlightSelectedRow: {
        value: false
      }
    },
    events: [],
    styles: {
      textColor: {
        value: undefined
      },
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      },
      cellSize: {
        value: 'compact'
      }
    }
  }
}, {
  name: 'Button',
  displayName: 'Button',
  description: 'Trigger actions: queries, alerts etc',
  component: 'Button',
  defaultSize: {
    width: 3,
    height: 30
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    text: {
      type: 'code',
      displayName: 'Button Text'
    },
    loadingState: {
      type: 'code',
      displayName: 'Loading State'
    }
  },
  events: {
    onClick: {
      displayName: 'On click'
    }
  },
  styles: {
    backgroundColor: {
      type: 'color',
      displayName: 'Background color'
    },
    textColor: {
      type: 'color',
      displayName: 'Text color'
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    },
    borderRadius: {
      type: 'code',
      displayName: 'Border radius'
    }
  },
  exposedVariables: {},
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      text: {
        value: `Button`
      },
      visible: {
        value: true
      },
      loadingState: {
        value: `{{false}}`
      }
    },
    events: [],
    styles: {
      backgroundColor: {
        value: '#3c92dc'
      },
      textColor: {
        value: '#fff'
      },
      visibility: {
        value: '{{true}}'
      },
      borderRadius: {
        value: '{{0}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Chart',
  displayName: 'Chart',
  description: 'Display charts',
  component: 'Chart',
  defaultSize: {
    width: 20,
    height: 400
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    title: {
      type: 'code',
      displayName: 'Title'
    },
    data: {
      type: 'json',
      displayName: 'Data'
    },
    loadingState: {
      type: 'code',
      displayName: 'Loading State'
    },
    markerColor: {
      type: 'color',
      displayName: 'Marker color'
    },
    showGridLines: {
      type: 'toggle',
      displayName: 'Show grid lines'
    },
    type: {
      type: 'select',
      displayName: 'Chart type',
      options: [{
        name: 'Line',
        value: 'line'
      }, {
        name: 'Bar',
        value: 'bar'
      }, {
        name: 'Pie',
        value: 'pie'
      }]
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    show: null
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      title: {
        value: 'This title can be changed'
      },
      markerColor: {
        value: '#CDE1F8'
      },
      showGridLines: {
        value: true
      },
      loadingState: {
        value: `{{false}}`
      },
      type: {
        value: `line`
      },
      data: {
        value: `[
  { "x": "Jan", "y": 100},
  { "x": "Feb", "y": 80},
  { "x": "Mar", "y": 40}
]`
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Modal',
  displayName: 'Modal',
  description: 'Modal triggered by events',
  component: 'Modal',
  defaultSize: {
    width: 10,
    height: 400
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    title: {
      type: 'code',
      displayName: 'Title'
    },
    size: {
      type: 'select',
      displayName: 'Modal size',
      options: [{
        name: 'small',
        value: 'sm'
      }, {
        name: 'medium',
        value: 'md'
      }, {
        name: 'large',
        value: 'lg'
      }]
    }
  },
  events: {},
  styles: {
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    show: null
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      title: {
        value: 'This title can be changed'
      },
      size: {
        value: 'md'
      }
    },
    events: [],
    styles: {
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'TextInput',
  displayName: 'Text Input',
  description: 'Text field for forms',
  component: 'TextInput',
  defaultSize: {
    width: 4,
    height: 30
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    value: {
      type: 'code',
      displayName: 'Default value'
    },
    placeholder: {
      type: 'code',
      displayName: 'Placeholder'
    }
  },
  validation: {
    regex: {
      type: 'code',
      displayName: 'Regex'
    },
    minLength: {
      type: 'code',
      displayName: 'Min length'
    },
    maxLength: {
      type: 'code',
      displayName: 'Max length'
    },
    customRule: {
      type: 'code',
      displayName: 'Custom validation'
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    value: ''
  },
  definition: {
    validation: {
      regex: {
        value: ''
      },
      minLength: {
        value: null
      },
      maxLength: {
        value: null
      },
      customRule: {
        value: null
      }
    },
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      value: {
        value: ''
      },
      placeholder: {
        value: 'Placeholder text'
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'NumberInput',
  displayName: 'Number Input',
  description: 'Number field for forms',
  component: 'NumberInput',
  defaultSize: {
    width: 4,
    height: 30
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    value: {
      type: 'code',
      displayName: 'Default value'
    },
    placeholder: {
      type: 'code',
      displayName: 'Placeholder'
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    value: 0
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      value: {
        value: '99'
      },
      placeholder: {
        value: '0'
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'PasswordInput',
  displayName: 'Password Input',
  description: 'Password input field for forms',
  component: 'PasswordInput',
  defaultSize: {
    width: 4,
    height: 30
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    placeholder: {
      type: 'code',
      displayName: 'Placeholder'
    }
  },
  validation: {
    regex: {
      type: 'code',
      displayName: 'Regex'
    },
    minLength: {
      type: 'code',
      displayName: 'Min length'
    },
    maxLength: {
      type: 'code',
      displayName: 'Max length'
    },
    customRule: {
      type: 'code',
      displayName: 'Custom validation'
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    value: ''
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      placeholder: {
        value: 'password'
      }
    },
    validation: {
      regex: {
        value: ''
      },
      minLength: {
        value: null
      },
      maxLength: {
        value: null
      },
      customRule: {
        value: null
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Datepicker',
  displayName: 'Date Picker',
  description: 'Select a date and time',
  component: 'Datepicker',
  defaultSize: {
    width: 4,
    height: 30
  },
  validation: {
    customRule: {
      type: 'code',
      displayName: 'Custom validation'
    }
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    defaultValue: {
      type: 'code',
      displayName: 'Default value'
    },
    format: {
      type: 'code',
      displayName: 'Format'
    },
    enableTime: {
      type: 'code',
      displayName: 'Enable time selection?'
    },
    enableDate: {
      type: 'code',
      displayName: 'Enable date selection?'
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    value: ''
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    validation: {
      customRule: {
        value: null
      }
    },
    properties: {
      defaultValue: {
        value: '01/04/2021'
      },
      format: {
        value: 'DD/MM/YYYY'
      },
      enableTime: {
        value: '{{false}}'
      },
      enableDate: {
        value: '{{true}}'
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Checkbox',
  displayName: 'Checkbox',
  description: 'A single checkbox',
  component: 'Checkbox',
  defaultSize: {
    width: 4,
    height: 30
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    label: {
      type: 'code',
      displayName: 'Label'
    }
  },
  events: {
    onCheck: {
      displayName: 'On check'
    },
    onUnCheck: {
      displayName: 'On uncheck'
    }
  },
  styles: {
    textColor: {
      type: 'color',
      displayName: 'Text Color'
    },
    checkboxColor: {
      type: 'color',
      displayName: 'Checkbox Color'
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {},
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      label: {
        value: 'Checkbox label'
      }
    },
    events: [],
    styles: {
      textColor: {
        value: '#000'
      },
      checkboxColor: {
        value: '#3c92dc'
      },
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Radio-button',
  displayName: 'Radio Button',
  description: 'Radio buttons',
  component: 'RadioButton',
  defaultSize: {
    width: 5,
    height: 30
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    label: {
      type: 'code',
      displayName: 'Label'
    },
    value: {
      type: 'code',
      displayName: 'Default value'
    },
    values: {
      type: 'code',
      displayName: 'Option values'
    },
    display_values: {
      type: 'code',
      displayName: 'Option labels'
    }
  },
  events: {
    onSelectionChange: {
      displayName: 'On select'
    }
  },
  styles: {
    textColor: {
      type: 'color',
      displayName: 'Text Color'
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {},
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      label: {
        value: 'Select'
      },
      value: {
        value: '{{true}}'
      },
      values: {
        value: '{{[true,false]}}'
      },
      display_values: {
        value: '{{["yes", "no"]}}'
      },
      visible: {
        value: true
      }
    },
    events: [],
    styles: {
      textColor: {
        value: '#000'
      },
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'ToggleSwitch',
  displayName: 'Toggle Switch',
  description: 'Toggle Switch',
  component: 'ToggleSwitch',
  defaultSize: {
    width: 5,
    height: 30
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    label: {
      type: 'code',
      displayName: 'Label'
    }
  },
  events: {
    onChange: {
      displayName: 'On change'
    }
  },
  styles: {
    textColor: {
      type: 'color',
      displayName: 'Text Color'
    },
    toggleSwitchColor: {
      type: 'color',
      displayName: 'Toggle Switch Color'
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {},
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      label: {
        value: 'Toggle label'
      }
    },
    events: [],
    styles: {
      textColor: {
        value: '#000'
      },
      toggleSwitchColor: {
        value: '#3c92dc'
      },
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Textarea',
  displayName: 'Textarea',
  description: 'Text area form field',
  component: 'TextArea',
  defaultSize: {
    width: 6,
    height: 100
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    value: {
      type: 'code',
      displayName: 'Default value'
    },
    placeholder: {
      type: 'code',
      displayName: 'Placeholder'
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    value: {}
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      value: {
        value: 'ToolJet is an open-source low-code platform for building and deploying internal tools with minimal engineering efforts 🚀'
      },
      placeholder: {
        value: 'Placeholder text'
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'DateRangePicker',
  displayName: 'Range Picker',
  description: 'Select a date range',
  component: 'DaterangePicker',
  defaultSize: {
    width: 8,
    height: 30
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    format: {
      type: 'code',
      displayName: 'Format'
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    endDate: {},
    startDate: {}
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      format: {
        value: 'DD/MM/YYYY'
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Text',
  displayName: 'Text',
  description: 'Display markdown or HTML',
  component: 'Text',
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    text: {
      type: 'code',
      displayName: 'Text'
    },
    loadingState: {
      type: 'code',
      displayName: 'Show loading state'
    }
  },
  defaultSize: {
    width: 3,
    height: 30
  },
  events: [],
  styles: {
    textColor: {
      type: 'color',
      displayName: 'Text Color'
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {},
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      text: {
        value: 'Text goes here !'
      },
      visible: {
        value: true
      },
      loadingState: {
        value: `{{false}}`
      }
    },
    events: [],
    styles: {
      textColor: {
        value: '#000'
      },
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Image',
  displayName: 'Image',
  description: 'Display an Image',
  defaultSize: {
    width: 5,
    height: 210
  },
  component: 'Image',
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    source: {
      type: 'code',
      displayName: 'URL'
    }
  },
  events: {
    onClick: {
      displayName: 'On click'
    }
  },
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {},
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      source: {
        value: 'https://www.svgrepo.com/show/34217/image.svg'
      },
      visible: {
        value: true
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Container',
  displayName: 'Container',
  description: 'Wrapper for multiple components',
  defaultSize: {
    width: 5,
    height: 200
  },
  component: 'Container',
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {},
  events: {},
  styles: {
    backgroundColor: {
      type: 'color'
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {},
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      visible: {
        value: true
      }
    },
    events: [],
    styles: {
      backgroundColor: {
        value: '#fff'
      },
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Dropdown',
  displayName: 'Dropdown',
  description: 'Select one value from options',
  defaultSize: {
    width: 8,
    height: 30
  },
  component: 'DropDown',
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  validation: {
    customRule: {
      type: 'code',
      displayName: 'Custom validation'
    }
  },
  properties: {
    label: {
      type: 'code',
      displayName: 'Label'
    },
    value: {
      type: 'code',
      displayName: 'Default value'
    },
    values: {
      type: 'code',
      displayName: 'Option values'
    },
    display_values: {
      type: 'code',
      displayName: 'Option labels'
    }
  },
  events: {
    onSelect: {
      displayName: 'On select'
    }
  },
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    value: null
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    validation: {
      customRule: {
        value: null
      }
    },
    properties: {
      label: {
        value: 'Select'
      },
      value: {
        value: '{{2}}'
      },
      values: {
        value: '{{[1,2,3]}}'
      },
      display_values: {
        value: '{{["one", "two", "three"]}}'
      },
      visible: {
        value: true
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Multiselect',
  displayName: 'Multiselect',
  description: 'Select multiple values from options',
  defaultSize: {
    width: 8,
    height: 30
  },
  component: 'Multiselect',
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    label: {
      type: 'code',
      displayName: 'Label'
    },
    value: {
      type: 'code',
      displayName: 'Default value'
    },
    values: {
      type: 'code',
      displayName: 'Option values'
    },
    display_values: {
      type: 'code',
      displayName: 'Option labels'
    }
  },
  events: {
    onSelect: {
      displayName: 'On select'
    }
  },
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    values: {}
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      label: {
        value: 'Select'
      },
      values: {
        value: '[]'
      },
      option_values: {
        value: '[1,2,3]'
      },
      display_values: {
        value: '["one", "two", "three"]'
      },
      visible: {
        value: true
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'RichTextEditor',
  displayName: 'Text Editor',
  description: 'Rich text editor',
  component: 'RichTextEditor',
  defaultSize: {
    width: 16,
    height: 210
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    placeholder: {
      type: 'code',
      displayName: 'Placeholder'
    },
    defaultValue: {
      type: 'code',
      displayName: 'Default Value'
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    value: ''
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      placeholder: {
        value: 'Placeholder text'
      },
      defaultValue: {
        value: ''
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Map',
  displayName: 'Map',
  description: 'Display Google Maps',
  component: 'Map',
  defaultSize: {
    width: 12,
    height: 420
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    initialLocation: {
      type: 'code',
      displayName: 'Initial location',
      tip: 'This location will be the initial center of the map',
      options: {
        mode: 'javascript',
        theme: 'duotone-light',
        className: 'map-location-input pr-2'
      }
    },
    defaultMarkers: {
      type: 'code',
      displayName: 'Default markers',
      options: {
        mode: 'javascript',
        theme: 'duotone-light',
        className: 'map-location-input pr-2'
      }
    },
    addNewMarkers: {
      type: 'toggle',
      displayName: 'Add new markers'
    },
    canSearch: {
      type: 'toggle',
      displayName: 'Search for places'
    }
  },
  events: {
    onBoundsChange: {
      displayName: 'On bounds change'
    },
    onCreateMarker: {
      displayName: 'On create marker'
    },
    onMarkerClick: {
      displayName: 'On marker click'
    }
  },
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    center: {}
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      initialLocation: {
        value: `{{ {"lat": 40.7128, "lng": -73.935242} }}`
      },
      defaultMarkers: {
        value: `{{ [{"lat": 40.7128, "lng": -73.935242}] }}`
      },
      canSearch: {
        value: `{{true}}`
      },
      addNewMarkers: {
        value: `{{true}}`
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'QrScanner',
  displayName: 'QR Scanner',
  description: 'Scan QR codes and hold its data',
  component: 'QrScanner',
  defaultSize: {
    width: 10,
    height: 300
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {},
  events: {
    onDetect: {
      displayName: 'On detect'
    }
  },
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    lastDetectedValue: ''
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: true
      }
    },
    properties: {},
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'StarRating',
  displayName: 'Rating',
  description: 'Star rating',
  component: 'StarRating',
  defaultSize: {
    width: 8,
    height: 30
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    label: {
      type: 'code',
      displayName: 'Label'
    },
    maxRating: {
      type: 'code',
      displayName: 'Number of stars'
    },
    defaultSelected: {
      type: 'code',
      displayName: 'Default no of selected stars'
    },
    allowHalfStar: {
      type: 'toggle',
      displayName: 'Enable half star'
    },
    tooltips: {
      type: 'code',
      displayName: 'Tooltips'
    }
  },
  events: {
    onChange: {
      displayName: 'On Change'
    }
  },
  styles: {
    textColor: {
      type: 'color',
      displayName: 'Star Color'
    },
    labelColor: {
      type: 'color',
      displayName: 'Label Color'
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    value: 0
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      label: {
        value: 'Select your rating'
      },
      maxRating: {
        value: '5'
      },
      defaultSelected: {
        value: '5'
      },
      allowHalfStar: {
        value: false
      },
      visible: {
        value: true
      },
      tooltips: {
        value: '{{[]}}'
      }
    },
    events: [],
    styles: {
      textColor: {
        value: '#ffb400'
      },
      labelColor: {
        value: '#333'
      },
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Divider',
  displayName: 'Divider',
  description: 'Separator between components',
  component: 'Divider',
  defaultSize: {
    width: 10,
    height: 10
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {},
  events: {},
  styles: {
    dividerColor: {
      type: 'color',
      displayName: 'Divider Color'
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    }
  },
  exposedVariables: {
    value: {}
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {},
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      dividerColor: {
        value: '#E7E8EA'
      }
    }
  }
}, {
  name: 'FilePicker',
  displayName: 'File Picker',
  description: 'File Picker',
  component: 'FilePicker',
  defaultSize: {
    width: 15,
    height: 100
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    enableDropzone: {
      type: 'code',
      displayName: 'Use Drop zone'
    },
    enablePicker: {
      type: 'code',
      displayName: 'Use File Picker'
    },
    enableMultiple: {
      type: 'code',
      displayName: 'Pick mulitple files'
    },
    maxFileCount: {
      type: 'code',
      displayName: 'Max file count'
    },
    fileType: {
      type: 'code',
      displayName: 'Accept file types'
    },
    maxSize: {
      type: 'code',
      displayName: 'Max size limit (Bytes)'
    },
    minSize: {
      type: 'code',
      displayName: 'Min size limit (Bytes)'
    }
  },
  events: {
    onFileSelected: {
      displayName: 'On File Selected'
    }
  },
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    file: [{
      name: '',
      content: '',
      dataURL: '',
      type: ''
    }]
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      enableDropzone: {
        value: '{{true}}'
      },
      enablePicker: {
        value: '{{true}}'
      },
      maxFileCount: {
        value: '{{2}}'
      },
      enableMultiple: {
        value: '{{false}}'
      },
      fileType: {
        value: '{{"image/*"}}'
      },
      maxSize: {
        value: '{{1048576}}'
      },
      minSize: {
        value: '{{50}}'
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Calendar',
  displayName: 'Calendar',
  description: 'Calendar',
  component: 'Calendar',
  defaultSize: {
    width: 30,
    height: 600
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    dateFormat: {
      type: 'code',
      displayName: 'Date format'
    },
    defaultDate: {
      type: 'code',
      displayName: 'Default date'
    },
    events: {
      type: 'code',
      displayName: 'Events'
    },
    resources: {
      type: 'code',
      displayName: 'Resources'
    },
    defaultView: {
      type: 'code',
      displayName: 'Default view'
    },
    displayToolbar: {
      type: 'toggle',
      displayName: 'Show toolbar'
    },
    displayViewSwitcher: {
      type: 'toggle',
      displayName: 'Show view switcher'
    },
    highlightToday: {
      type: 'toggle',
      displayName: 'Highlight today'
    },
    showPopOverOnEventClick: {
      type: 'toggle',
      displayName: 'Show popover when event is clicked'
    }
  },
  events: {
    onCalendarEventSelect: {
      displayName: 'On Event Select'
    },
    onCalendarSlotSelect: {
      displayName: 'On Slot Select'
    }
  },
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    cellSizeInViewsClassifiedByResource: {
      type: 'select',
      displayName: 'Cell size in views classified by resource',
      options: [{
        name: 'Compact',
        value: 'compact'
      }, {
        name: 'Spacious',
        value: 'spacious'
      }]
    },
    displayDayNamesInWeekView: {
      type: 'toggle',
      displayName: 'Display only names of days as headers on week view'
    }
  },
  exposedVariables: {
    selectedEvent: {},
    selectedSlots: {},
    currentView: 'month'
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      dateFormat: {
        value: 'MM-DD-YYYY HH:mm:ss A Z'
      },
      defaultDate: {
        value: '{{moment().format("MM-DD-YYYY HH:mm:ss A Z")}}'
      },
      events: {
        value: "{{[\n\t\t{\n\t\t\t title: 'Sample event',\n\t\t\t start: `${moment().startOf('day').format('MM-DD-YYYY HH:mm:ss A Z')}`,\n\t\t\t end: `${moment().endOf('day').format('MM-DD-YYYY HH:mm:ss A Z')}`,\n\t\t\t allDay: false,\n\t\t\t color: '#4D72DA'\n\t\t}\n]}}"
      },
      resources: {
        value: '{{[]}}'
      },
      defaultView: {
        value: "{{'month'}}"
      },
      displayToolbar: {
        value: true
      },
      displayViewSwitcher: {
        value: true
      },
      highlightToday: {
        value: true
      },
      showPopOverOnEventClick: {
        value: false
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      cellSizeInViewsClassifiedByResource: {
        value: 'spacious'
      },
      displayDayNamesInWeekView: {
        value: true
      }
    }
  }
}, {
  name: 'Iframe',
  displayName: 'Iframe',
  description: 'Display an Iframe',
  defaultSize: {
    width: 10,
    height: 310
  },
  component: 'IFrame',
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    source: {
      type: 'code',
      displayName: 'URL'
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {},
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      source: {
        value: 'https://tooljet.io/'
      },
      visible: {
        value: true
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'CodeEditor',
  displayName: 'Code Editor',
  description: 'Code Editor',
  component: 'CodeEditor',
  defaultSize: {
    width: 15,
    height: 120
  },
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    enableLineNumber: {
      type: 'code',
      displayName: 'Show Line Number'
    },
    mode: {
      type: 'code',
      displayName: 'Mode'
    },
    placeholder: {
      type: 'code',
      displayName: 'Placeholder'
    }
  },
  events: {},
  styles: {
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {
    value: ''
  },
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      enableLineNumber: {
        value: '{{true}}'
      },
      mode: {
        value: 'javascript'
      },
      placeholder: {
        value: ''
      }
    },
    events: [],
    styles: {
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}, {
  name: 'Tabs',
  displayName: 'Tabs',
  description: 'Tabs component',
  defaultSize: {
    width: 30,
    height: 200
  },
  component: 'Tabs',
  others: {
    showOnDesktop: {
      type: 'toggle',
      displayName: 'Show on desktop'
    },
    showOnMobile: {
      type: 'toggle',
      displayName: 'Show on mobile'
    }
  },
  properties: {
    tabs: {
      type: 'code',
      displayName: 'Tabs'
    },
    defaultTab: {
      type: 'code',
      displayName: 'Default tab'
    }
  },
  events: {},
  styles: {
    highlightColor: {
      type: 'color',
      displayName: 'Highlight Color'
    },
    visibility: {
      type: 'code',
      displayName: 'Visibility'
    },
    disabledState: {
      type: 'code',
      displayName: 'Disable'
    }
  },
  exposedVariables: {},
  definition: {
    others: {
      showOnDesktop: {
        value: true
      },
      showOnMobile: {
        value: false
      }
    },
    properties: {
      tabs: {
        value: "{{[ \n\t\t{ title: 'Home', id: '0' }, \n\t\t{ title: 'Profile', id: '1' }, \n\t\t{ title: 'Settings', id: '2' } \n ]}}"
      },
      defaultTab: {
        value: '0'
      }
    },
    events: [],
    styles: {
      highlightColor: {
        value: '#0565FE'
      },
      visibility: {
        value: '{{true}}'
      },
      disabledState: {
        value: '{{false}}'
      }
    }
  }
}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMuanMiXSwibmFtZXMiOlsiY29tcG9uZW50VHlwZXMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZXNjcmlwdGlvbiIsImNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aXRsZSIsInR5cGUiLCJkYXRhIiwibG9hZGluZ1N0YXRlIiwiY29sdW1ucyIsInNlcnZlclNpZGVQYWdpbmF0aW9uIiwiY2xpZW50U2lkZVBhZ2luYXRpb24iLCJzZXJ2ZXJTaWRlU2VhcmNoIiwiYWN0aW9uQnV0dG9uQmFja2dyb3VuZENvbG9yIiwiYWN0aW9uQnV0dG9uVGV4dENvbG9yIiwiZGlzcGxheVNlYXJjaEJveCIsInNob3dEb3dubG9hZEJ1dHRvbiIsInNob3dGaWx0ZXJCdXR0b24iLCJzaG93QnVsa1VwZGF0ZUFjdGlvbnMiLCJzaG93QnVsa1NlbGVjdG9yIiwiaGlnaGxpZ2h0U2VsZWN0ZWRSb3ciLCJvdGhlcnMiLCJzaG93T25EZXNrdG9wIiwic2hvd09uTW9iaWxlIiwiZGVmYXVsdFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImV2ZW50cyIsIm9uUm93Q2xpY2tlZCIsIm9uQnVsa1VwZGF0ZSIsIm9uUGFnZUNoYW5nZWQiLCJvblNlYXJjaCIsInN0eWxlcyIsInRleHRDb2xvciIsInRhYmxlVHlwZSIsIm9wdGlvbnMiLCJ2YWx1ZSIsImNlbGxTaXplIiwidmlzaWJpbGl0eSIsImRpc2FibGVkU3RhdGUiLCJleHBvc2VkVmFyaWFibGVzIiwic2VsZWN0ZWRSb3ciLCJjaGFuZ2VTZXQiLCJkYXRhVXBkYXRlcyIsInBhZ2VJbmRleCIsInNlYXJjaFRleHQiLCJzZWxlY3RlZFJvd3MiLCJkZWZpbml0aW9uIiwidmlzaWJsZSIsImlkIiwidW5kZWZpbmVkIiwidGV4dCIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXJrZXJDb2xvciIsInNob3dHcmlkTGluZXMiLCJzaG93Iiwic2l6ZSIsInBsYWNlaG9sZGVyIiwidmFsaWRhdGlvbiIsInJlZ2V4IiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiY3VzdG9tUnVsZSIsImRlZmF1bHRWYWx1ZSIsImZvcm1hdCIsImVuYWJsZVRpbWUiLCJlbmFibGVEYXRlIiwibGFiZWwiLCJvbkNoZWNrIiwib25VbkNoZWNrIiwiY2hlY2tib3hDb2xvciIsInZhbHVlcyIsImRpc3BsYXlfdmFsdWVzIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJvbkNoYW5nZSIsInRvZ2dsZVN3aXRjaENvbG9yIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsInNvdXJjZSIsIm9uU2VsZWN0Iiwib3B0aW9uX3ZhbHVlcyIsImluaXRpYWxMb2NhdGlvbiIsInRpcCIsIm1vZGUiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImRlZmF1bHRNYXJrZXJzIiwiYWRkTmV3TWFya2VycyIsImNhblNlYXJjaCIsIm9uQm91bmRzQ2hhbmdlIiwib25DcmVhdGVNYXJrZXIiLCJvbk1hcmtlckNsaWNrIiwiY2VudGVyIiwib25EZXRlY3QiLCJsYXN0RGV0ZWN0ZWRWYWx1ZSIsIm1heFJhdGluZyIsImRlZmF1bHRTZWxlY3RlZCIsImFsbG93SGFsZlN0YXIiLCJ0b29sdGlwcyIsImxhYmVsQ29sb3IiLCJkaXZpZGVyQ29sb3IiLCJlbmFibGVEcm9wem9uZSIsImVuYWJsZVBpY2tlciIsImVuYWJsZU11bHRpcGxlIiwibWF4RmlsZUNvdW50IiwiZmlsZVR5cGUiLCJtYXhTaXplIiwibWluU2l6ZSIsIm9uRmlsZVNlbGVjdGVkIiwiZmlsZSIsImNvbnRlbnQiLCJkYXRhVVJMIiwiZGF0ZUZvcm1hdCIsImRlZmF1bHREYXRlIiwicmVzb3VyY2VzIiwiZGVmYXVsdFZpZXciLCJkaXNwbGF5VG9vbGJhciIsImRpc3BsYXlWaWV3U3dpdGNoZXIiLCJoaWdobGlnaHRUb2RheSIsInNob3dQb3BPdmVyT25FdmVudENsaWNrIiwib25DYWxlbmRhckV2ZW50U2VsZWN0Iiwib25DYWxlbmRhclNsb3RTZWxlY3QiLCJjZWxsU2l6ZUluVmlld3NDbGFzc2lmaWVkQnlSZXNvdXJjZSIsImRpc3BsYXlEYXlOYW1lc0luV2Vla1ZpZXciLCJzZWxlY3RlZEV2ZW50Iiwic2VsZWN0ZWRTbG90cyIsImN1cnJlbnRWaWV3IiwiZW5hYmxlTGluZU51bWJlciIsInRhYnMiLCJkZWZhdWx0VGFiIiwiaGlnaGxpZ2h0Q29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBTyxNQUFNQSxjQUFjLDRCQUFHLENBQzVCO0FBQ0VDLEVBQUFBLElBQUksRUFBRSxPQURSO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSxPQUZmO0FBR0VDLEVBQUFBLFdBQVcsRUFBRSxnQ0FIZjtBQUlFQyxFQUFBQSxTQUFTLEVBQUUsT0FKYjtBQUtFQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCTCxNQUFBQSxXQUFXLEVBQUU7QUFBL0IsS0FERztBQUVWTSxJQUFBQSxJQUFJLEVBQUU7QUFBRUQsTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JMLE1BQUFBLFdBQVcsRUFBRTtBQUE3QixLQUZJO0FBR1ZPLElBQUFBLFlBQVksRUFBRTtBQUFFRixNQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkwsTUFBQUEsV0FBVyxFQUFFO0FBQTdCLEtBSEo7QUFJVlEsSUFBQUEsT0FBTyxFQUFFO0FBQUVILE1BQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCTCxNQUFBQSxXQUFXLEVBQUU7QUFBOUIsS0FKQztBQUtWUyxJQUFBQSxvQkFBb0IsRUFBRTtBQUFFSixNQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkwsTUFBQUEsV0FBVyxFQUFFO0FBQS9CLEtBTFo7QUFNVlUsSUFBQUEsb0JBQW9CLEVBQUU7QUFBRUwsTUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JMLE1BQUFBLFdBQVcsRUFBRTtBQUEvQixLQU5aO0FBT1ZXLElBQUFBLGdCQUFnQixFQUFFO0FBQUVO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TSxFQUFFO0FBQ05vRyxNQUFBQSxjQUFjLEVBQUU7QUFBRWhHLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BRFY7QUFFTkUsTUFBQUEsVUFBVSxFQUFFO0FBQUVGLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BRk47QUFHTkcsTUFBQUEsYUFBYSxFQUFFO0FBQUVILFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBSFQ7QUFiRTtBQXhCZCxDQW4xQzRCLENBQUgsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29tcG9uZW50VHlwZXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnVGFibGUnLFxuICAgIGRpc3BsYXlOYW1lOiAnVGFibGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheSBwYWdpbmF0ZWQgdGFidWxhciBkYXRhJyxcbiAgICBjb21wb25lbnQ6ICdUYWJsZScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgdGl0bGU6IHsgdHlwZTogJ3N0cmluZycsIGRpc3BsYXlOYW1lOiAnVGl0bGUnIH0sXG4gICAgICBkYXRhOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdUYWJsZSBkYXRhJyB9LFxuICAgICAgbG9hZGluZ1N0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdMb2FkaW5nIHN0YXRlJyB9LFxuICAgICAgY29sdW1uczogeyB0eXBlOiAnYXJyYXknLCBkaXNwbGF5TmFtZTogJ1RhYmxlIENvbHVtbnMnIH0sXG4gICAgICBzZXJ2ZXJTaWRlUGFnaW5hdGlvbjogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTZXJ2ZXItc2lkZSBwYWdpbmF0aW9uJyB9LFxuICAgICAgY2xpZW50U2lkZVBhZ2luYXRpb246IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnQ2xpZW50LXNpZGUgcGFnaW5hdGlvbicgfSxcbiAgICAgIHNlcnZlclNpZGVTZWFyY2g6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2VydmVyLXNpZGUgc2VhcmNoJyB9LFxuICAgICAgYWN0aW9uQnV0dG9uQmFja2dyb3VuZENvbG9yOiB7IHR5cGU6ICdjb2xvcicsIGRpc3BsYXlOYW1lOiAnQmFja2dyb3VuZCBjb2xvcicgfSxcbiAgICAgIGFjdGlvbkJ1dHRvblRleHRDb2xvcjogeyB0eXBlOiAnY29sb3InLCBkaXNwbGF5TmFtZTogJ1RleHQgY29sb3InIH0sXG4gICAgICBkaXNwbGF5U2VhcmNoQm94OiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgc2VhcmNoIGJveCcgfSxcbiAgICAgIHNob3dEb3dubG9hZEJ1dHRvbjogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IGRvd25sb2FkIGJ1dHRvbicgfSxcbiAgICAgIHNob3dGaWx0ZXJCdXR0b246IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBmaWx0ZXIgYnV0dG9uJyB9LFxuICAgICAgc2hvd0J1bGtVcGRhdGVBY3Rpb25zOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgYnVsayB1cGRhdGUgYWN0aW9ucycgfSxcbiAgICAgIHNob3dCdWxrU2VsZWN0b3I6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnQnVsayBzZWxlY3Rpb24nIH0sXG4gICAgICBoaWdobGlnaHRTZWxlY3RlZFJvdzogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdIaWdobGlnaHQgc2VsZWN0ZWQgcm93JyB9LFxuICAgIH0sXG4gICAgb3RoZXJzOiB7XG4gICAgICBzaG93T25EZXNrdG9wOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gZGVza3RvcCAnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDIwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSxcbiAgICBldmVudHM6IHtcbiAgICAgIG9uUm93Q2xpY2tlZDogeyBkaXNwbGF5TmFtZTogJ1JvdyBjbGlja2VkJyB9LFxuICAgICAgb25CdWxrVXBkYXRlOiB7IGRpc3BsYXlOYW1lOiAnQnVsayB1cGRhdGUnIH0sXG4gICAgICBvblBhZ2VDaGFuZ2VkOiB7IGRpc3BsYXlOYW1lOiAnUGFnZSBjaGFuZ2VkJyB9LFxuICAgICAgb25TZWFyY2g6IHsgZGlzcGxheU5hbWU6ICdTZWFyY2gnIH0sXG4gICAgfSxcbiAgICBzdHlsZXM6IHtcbiAgICAgIHRleHRDb2xvcjogeyB0eXBlOiAnY29sb3InLCBkaXNwbGF5TmFtZTogJ1RleHQgQ29sb3InIH0sXG4gICAgICB0YWJsZVR5cGU6IHtcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnVGFibGUgdHlwZScsXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IG5hbWU6ICdCb3JkZXJlZCcsIHZhbHVlOiAnJyB9LFxuICAgICAgICAgIHsgbmFtZTogJ0JvcmRlcmxlc3MnLCB2YWx1ZTogJ3RhYmxlLWJvcmRlcmxlc3MnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnQ2xhc3NpYycsIHZhbHVlOiAndGFibGUtY2xhc3NpYycgfSxcbiAgICAgICAgICB7IG5hbWU6ICdTdHJpcGVkJywgdmFsdWU6ICd0YWJsZS1zdHJpcGVkJyB9LFxuICAgICAgICAgIHsgbmFtZTogJ1N0cmlwZWQgJiBib3JkZXJlZCcsIHZhbHVlOiAndGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCcgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBjZWxsU2l6ZToge1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDZWxsIHNpemUnLFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgeyBuYW1lOiAnQ29tcGFjdCcsIHZhbHVlOiAnY29tcGFjdCcgfSxcbiAgICAgICAgICB7IG5hbWU6ICdTcGFjaW91cycsIHZhbHVlOiAnc3BhY2lvdXMnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGRpc2FibGVkU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0Rpc2FibGUnIH0sXG4gICAgfSxcbiAgICBleHBvc2VkVmFyaWFibGVzOiB7XG4gICAgICBzZWxlY3RlZFJvdzoge30sXG4gICAgICBjaGFuZ2VTZXQ6IHt9LFxuICAgICAgZGF0YVVwZGF0ZXM6IFtdLFxuICAgICAgcGFnZUluZGV4OiAwLFxuICAgICAgc2VhcmNoVGV4dDogJycsXG4gICAgICBzZWxlY3RlZFJvd3M6IFtdLFxuICAgIH0sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGl0bGU6IHsgdmFsdWU6ICdUYWJsZScgfSxcbiAgICAgICAgdmlzaWJsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBsb2FkaW5nU3RhdGU6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgIFwie3sgWyBcXG5cXHRcXHR7IGlkOiAxLCBuYW1lOiAnU2FyYWgnLCBlbWFpbDogJ3NhcmFoQGV4YW1wbGUuY29tJ30sIFxcblxcdFxcdHsgaWQ6IDIsIG5hbWU6ICdMaXNhJywgZW1haWw6ICdsaXNhQGV4YW1wbGUuY29tJ30sIFxcblxcdFxcdHsgaWQ6IDMsIG5hbWU6ICdTYW0nLCBlbWFpbDogJ3NhbUBleGFtcGxlLmNvbSd9LCBcXG5cXHRcXHR7IGlkOiA0LCBuYW1lOiAnSm9uJywgZW1haWw6ICdqb25AZXhhbXBsZS5jb20nfSBcXG5dIH19XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZlclNpZGVQYWdpbmF0aW9uOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgICBjbGllbnRTaWRlUGFnaW5hdGlvbjogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBkaXNwbGF5U2VhcmNoQm94OiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dEb3dubG9hZEJ1dHRvbjogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93RmlsdGVyQnV0dG9uOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgeyBuYW1lOiAnaWQnLCBpZDogJ2UzZWNiZjdmYTUyYzRkNzIxMGE5M2VkYjhmNDM3NzYyNjdhNDg5YmFkNTJiZDEwOGJlOTU4OGY3OTAxMjY3MzcnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICduYW1lJywgaWQ6ICc1ZDJhMzc0NGEwMDYzODhhYWRkMDEyZmNjMTVjYzBkYmNiNWY5MTMwZTBmYmI2NGM1NTg1NjFjOTcxMTg3NTRhJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZW1haWwnLCBpZDogJ2FmYzlhNTA5MTc1MGExYmQ0NzYwZTM4NzYwZGUzYjRiZTExYTQzNDUyYWU4YWUwN2NlMmVlYmM1NjlmZTlhN2YnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0J1bGtVcGRhdGVBY3Rpb25zOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dCdWxrU2VsZWN0b3I6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICAgIGhpZ2hsaWdodFNlbGVjdGVkUm93OiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdGV4dENvbG9yOiB7IHZhbHVlOiB1bmRlZmluZWQgfSxcbiAgICAgICAgdmlzaWJpbGl0eTogeyB2YWx1ZTogJ3t7dHJ1ZX19JyB9LFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiB7IHZhbHVlOiAne3tmYWxzZX19JyB9LFxuICAgICAgICBjZWxsU2l6ZTogeyB2YWx1ZTogJ2NvbXBhY3QnIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQnV0dG9uJyxcbiAgICBkaXNwbGF5TmFtZTogJ0J1dHRvbicsXG4gICAgZGVzY3JpcHRpb246ICdUcmlnZ2VyIGFjdGlvbnM6IHF1ZXJpZXMsIGFsZXJ0cyBldGMnLFxuICAgIGNvbXBvbmVudDogJ0J1dHRvbicsXG4gICAgZGVmYXVsdFNpemU6IHtcbiAgICAgIHdpZHRoOiAzLFxuICAgICAgaGVpZ2h0OiAzMCxcbiAgICB9LFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB0ZXh0OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdCdXR0b24gVGV4dCcgfSxcbiAgICAgIGxvYWRpbmdTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnTG9hZGluZyBTdGF0ZScgfSxcbiAgICB9LFxuICAgIGV2ZW50czoge1xuICAgICAgb25DbGljazogeyBkaXNwbGF5TmFtZTogJ09uIGNsaWNrJyB9LFxuICAgIH0sXG4gICAgc3R5bGVzOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHsgdHlwZTogJ2NvbG9yJywgZGlzcGxheU5hbWU6ICdCYWNrZ3JvdW5kIGNvbG9yJyB9LFxuICAgICAgdGV4dENvbG9yOiB7IHR5cGU6ICdjb2xvcicsIGRpc3BsYXlOYW1lOiAnVGV4dCBjb2xvcicgfSxcbiAgICAgIHZpc2liaWxpdHk6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1Zpc2liaWxpdHknIH0sXG4gICAgICBkaXNhYmxlZFN0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEaXNhYmxlJyB9LFxuICAgICAgYm9yZGVyUmFkaXVzOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdCb3JkZXIgcmFkaXVzJyB9LFxuICAgIH0sXG4gICAgZXhwb3NlZFZhcmlhYmxlczoge30sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGV4dDogeyB2YWx1ZTogYEJ1dHRvbmAgfSxcbiAgICAgICAgdmlzaWJsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBsb2FkaW5nU3RhdGU6IHsgdmFsdWU6IGB7e2ZhbHNlfX1gIH0sXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHsgdmFsdWU6ICcjM2M5MmRjJyB9LFxuICAgICAgICB0ZXh0Q29sb3I6IHsgdmFsdWU6ICcjZmZmJyB9LFxuICAgICAgICB2aXNpYmlsaXR5OiB7IHZhbHVlOiAne3t0cnVlfX0nIH0sXG4gICAgICAgIGJvcmRlclJhZGl1czogeyB2YWx1ZTogJ3t7MH19JyB9LFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiB7IHZhbHVlOiAne3tmYWxzZX19JyB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NoYXJ0JyxcbiAgICBkaXNwbGF5TmFtZTogJ0NoYXJ0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXkgY2hhcnRzJyxcbiAgICBjb21wb25lbnQ6ICdDaGFydCcsXG4gICAgZGVmYXVsdFNpemU6IHtcbiAgICAgIHdpZHRoOiAyMCxcbiAgICAgIGhlaWdodDogNDAwLFxuICAgIH0sXG4gICAgb3RoZXJzOiB7XG4gICAgICBzaG93T25EZXNrdG9wOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gZGVza3RvcCcgfSxcbiAgICAgIHNob3dPbk1vYmlsZTogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIG1vYmlsZScgfSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHRpdGxlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdUaXRsZScgfSxcbiAgICAgIGRhdGE6IHsgdHlwZTogJ2pzb24nLCBkaXNwbGF5TmFtZTogJ0RhdGEnIH0sXG4gICAgICBsb2FkaW5nU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0xvYWRpbmcgU3RhdGUnIH0sXG4gICAgICBtYXJrZXJDb2xvcjogeyB0eXBlOiAnY29sb3InLCBkaXNwbGF5TmFtZTogJ01hcmtlciBjb2xvcicgfSxcbiAgICAgIHNob3dHcmlkTGluZXM6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBncmlkIGxpbmVzJyB9LFxuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDaGFydCB0eXBlJyxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgbmFtZTogJ0xpbmUnLCB2YWx1ZTogJ2xpbmUnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnQmFyJywgdmFsdWU6ICdiYXInIH0sXG4gICAgICAgICAgeyBuYW1lOiAnUGllJywgdmFsdWU6ICdwaWUnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdHlsZXM6IHtcbiAgICAgIHZpc2liaWxpdHk6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1Zpc2liaWxpdHknIH0sXG4gICAgICBkaXNhYmxlZFN0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEaXNhYmxlJyB9LFxuICAgIH0sXG4gICAgZXhwb3NlZFZhcmlhYmxlczoge1xuICAgICAgc2hvdzogbnVsbCxcbiAgICB9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIG90aGVyczoge1xuICAgICAgICBzaG93T25EZXNrdG9wOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dPbk1vYmlsZTogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRpdGxlOiB7IHZhbHVlOiAnVGhpcyB0aXRsZSBjYW4gYmUgY2hhbmdlZCcgfSxcbiAgICAgICAgbWFya2VyQ29sb3I6IHsgdmFsdWU6ICcjQ0RFMUY4JyB9LFxuICAgICAgICBzaG93R3JpZExpbmVzOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIGxvYWRpbmdTdGF0ZTogeyB2YWx1ZTogYHt7ZmFsc2V9fWAgfSxcbiAgICAgICAgdHlwZTogeyB2YWx1ZTogYGxpbmVgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB2YWx1ZTogYFtcbiAgeyBcInhcIjogXCJKYW5cIiwgXCJ5XCI6IDEwMH0sXG4gIHsgXCJ4XCI6IFwiRmViXCIsIFwieVwiOiA4MH0sXG4gIHsgXCJ4XCI6IFwiTWFyXCIsIFwieVwiOiA0MH1cbl1gLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdmlzaWJpbGl0eTogeyB2YWx1ZTogJ3t7dHJ1ZX19JyB9LFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiB7IHZhbHVlOiAne3tmYWxzZX19JyB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ01vZGFsJyxcbiAgICBkaXNwbGF5TmFtZTogJ01vZGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ01vZGFsIHRyaWdnZXJlZCBieSBldmVudHMnLFxuICAgIGNvbXBvbmVudDogJ01vZGFsJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDEwLFxuICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgfSxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgdGl0bGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1RpdGxlJyB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdNb2RhbCBzaXplJyxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgbmFtZTogJ3NtYWxsJywgdmFsdWU6ICdzbScgfSxcbiAgICAgICAgICB7IG5hbWU6ICdtZWRpdW0nLCB2YWx1ZTogJ21kJyB9LFxuICAgICAgICAgIHsgbmFtZTogJ2xhcmdlJywgdmFsdWU6ICdsZycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHt9LFxuICAgIHN0eWxlczoge1xuICAgICAgZGlzYWJsZWRTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGlzYWJsZScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHtcbiAgICAgIHNob3c6IG51bGwsXG4gICAgfSxcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICBvdGhlcnM6IHtcbiAgICAgICAgc2hvd09uRGVza3RvcDogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93T25Nb2JpbGU6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXRsZTogeyB2YWx1ZTogJ1RoaXMgdGl0bGUgY2FuIGJlIGNoYW5nZWQnIH0sXG4gICAgICAgIHNpemU6IHsgdmFsdWU6ICdtZCcgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIGRpc2FibGVkU3RhdGU6IHsgdmFsdWU6ICd7e2ZhbHNlfX0nIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVGV4dElucHV0JyxcbiAgICBkaXNwbGF5TmFtZTogJ1RleHQgSW5wdXQnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBmaWVsZCBmb3IgZm9ybXMnLFxuICAgIGNvbXBvbmVudDogJ1RleHRJbnB1dCcsXG4gICAgZGVmYXVsdFNpemU6IHtcbiAgICAgIHdpZHRoOiA0LFxuICAgICAgaGVpZ2h0OiAzMCxcbiAgICB9LFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB2YWx1ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGVmYXVsdCB2YWx1ZScgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdQbGFjZWhvbGRlcicgfSxcbiAgICB9LFxuICAgIHZhbGlkYXRpb246IHtcbiAgICAgIHJlZ2V4OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdSZWdleCcgfSxcbiAgICAgIG1pbkxlbmd0aDogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnTWluIGxlbmd0aCcgfSxcbiAgICAgIG1heExlbmd0aDogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnTWF4IGxlbmd0aCcgfSxcbiAgICAgIGN1c3RvbVJ1bGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0N1c3RvbSB2YWxpZGF0aW9uJyB9LFxuICAgIH0sXG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdHlsZXM6IHtcbiAgICAgIHZpc2liaWxpdHk6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1Zpc2liaWxpdHknIH0sXG4gICAgICBkaXNhYmxlZFN0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEaXNhYmxlJyB9LFxuICAgIH0sXG4gICAgZXhwb3NlZFZhcmlhYmxlczoge1xuICAgICAgdmFsdWU6ICcnLFxuICAgIH0sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICByZWdleDogeyB2YWx1ZTogJycgfSxcbiAgICAgICAgbWluTGVuZ3RoOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgIG1heExlbmd0aDogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBjdXN0b21SdWxlOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICB9LFxuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6ICcnIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7IHZhbHVlOiAnUGxhY2Vob2xkZXIgdGV4dCcgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOdW1iZXJJbnB1dCcsXG4gICAgZGlzcGxheU5hbWU6ICdOdW1iZXIgSW5wdXQnLFxuICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIGZpZWxkIGZvciBmb3JtcycsXG4gICAgY29tcG9uZW50OiAnTnVtYmVySW5wdXQnLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogNCxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgfSxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgdmFsdWU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0RlZmF1bHQgdmFsdWUnIH0sXG4gICAgICBwbGFjZWhvbGRlcjogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnUGxhY2Vob2xkZXInIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHt9LFxuICAgIHN0eWxlczoge1xuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGRpc2FibGVkU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0Rpc2FibGUnIH0sXG4gICAgfSxcbiAgICBleHBvc2VkVmFyaWFibGVzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICB9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIG90aGVyczoge1xuICAgICAgICBzaG93T25EZXNrdG9wOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dPbk1vYmlsZTogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiAnOTknIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7IHZhbHVlOiAnMCcgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQYXNzd29yZElucHV0JyxcbiAgICBkaXNwbGF5TmFtZTogJ1Bhc3N3b3JkIElucHV0JyxcbiAgICBkZXNjcmlwdGlvbjogJ1Bhc3N3b3JkIGlucHV0IGZpZWxkIGZvciBmb3JtcycsXG4gICAgY29tcG9uZW50OiAnUGFzc3dvcmRJbnB1dCcsXG4gICAgZGVmYXVsdFNpemU6IHtcbiAgICAgIHdpZHRoOiA0LFxuICAgICAgaGVpZ2h0OiAzMCxcbiAgICB9LFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBwbGFjZWhvbGRlcjogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnUGxhY2Vob2xkZXInIH0sXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uOiB7XG4gICAgICByZWdleDogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnUmVnZXgnIH0sXG4gICAgICBtaW5MZW5ndGg6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ01pbiBsZW5ndGgnIH0sXG4gICAgICBtYXhMZW5ndGg6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ01heCBsZW5ndGgnIH0sXG4gICAgICBjdXN0b21SdWxlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdDdXN0b20gdmFsaWRhdGlvbicgfSxcbiAgICB9LFxuICAgIGV2ZW50czoge30sXG4gICAgc3R5bGVzOiB7XG4gICAgICB2aXNpYmlsaXR5OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdWaXNpYmlsaXR5JyB9LFxuICAgICAgZGlzYWJsZWRTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGlzYWJsZScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIG90aGVyczoge1xuICAgICAgICBzaG93T25EZXNrdG9wOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dPbk1vYmlsZTogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiB7IHZhbHVlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICByZWdleDogeyB2YWx1ZTogJycgfSxcbiAgICAgICAgbWluTGVuZ3RoOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgIG1heExlbmd0aDogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBjdXN0b21SdWxlOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB2aXNpYmlsaXR5OiB7IHZhbHVlOiAne3t0cnVlfX0nIH0sXG4gICAgICAgIGRpc2FibGVkU3RhdGU6IHsgdmFsdWU6ICd7e2ZhbHNlfX0nIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGF0ZXBpY2tlcicsXG4gICAgZGlzcGxheU5hbWU6ICdEYXRlIFBpY2tlcicsXG4gICAgZGVzY3JpcHRpb246ICdTZWxlY3QgYSBkYXRlIGFuZCB0aW1lJyxcbiAgICBjb21wb25lbnQ6ICdEYXRlcGlja2VyJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDQsXG4gICAgICBoZWlnaHQ6IDMwLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvbjoge1xuICAgICAgY3VzdG9tUnVsZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnQ3VzdG9tIHZhbGlkYXRpb24nIH0sXG4gICAgfSxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEZWZhdWx0IHZhbHVlJyB9LFxuICAgICAgZm9ybWF0OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdGb3JtYXQnIH0sXG4gICAgICBlbmFibGVUaW1lOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdFbmFibGUgdGltZSBzZWxlY3Rpb24/JyB9LFxuICAgICAgZW5hYmxlRGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRW5hYmxlIGRhdGUgc2VsZWN0aW9uPycgfSxcbiAgICB9LFxuICAgIGV2ZW50czoge30sXG4gICAgc3R5bGVzOiB7XG4gICAgICB2aXNpYmlsaXR5OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdWaXNpYmlsaXR5JyB9LFxuICAgICAgZGlzYWJsZWRTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGlzYWJsZScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIG90aGVyczoge1xuICAgICAgICBzaG93T25EZXNrdG9wOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dPbk1vYmlsZTogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIGN1c3RvbVJ1bGU6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogeyB2YWx1ZTogJzAxLzA0LzIwMjEnIH0sXG4gICAgICAgIGZvcm1hdDogeyB2YWx1ZTogJ0REL01NL1lZWVknIH0sXG4gICAgICAgIGVuYWJsZVRpbWU6IHsgdmFsdWU6ICd7e2ZhbHNlfX0nIH0sXG4gICAgICAgIGVuYWJsZURhdGU6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDaGVja2JveCcsXG4gICAgZGlzcGxheU5hbWU6ICdDaGVja2JveCcsXG4gICAgZGVzY3JpcHRpb246ICdBIHNpbmdsZSBjaGVja2JveCcsXG4gICAgY29tcG9uZW50OiAnQ2hlY2tib3gnLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogNCxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgfSxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGFiZWw6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0xhYmVsJyB9LFxuICAgIH0sXG4gICAgZXZlbnRzOiB7XG4gICAgICBvbkNoZWNrOiB7IGRpc3BsYXlOYW1lOiAnT24gY2hlY2snIH0sXG4gICAgICBvblVuQ2hlY2s6IHsgZGlzcGxheU5hbWU6ICdPbiB1bmNoZWNrJyB9LFxuICAgIH0sXG4gICAgc3R5bGVzOiB7XG4gICAgICB0ZXh0Q29sb3I6IHsgdHlwZTogJ2NvbG9yJywgZGlzcGxheU5hbWU6ICdUZXh0IENvbG9yJyB9LFxuICAgICAgY2hlY2tib3hDb2xvcjogeyB0eXBlOiAnY29sb3InLCBkaXNwbGF5TmFtZTogJ0NoZWNrYm94IENvbG9yJyB9LFxuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGRpc2FibGVkU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0Rpc2FibGUnIH0sXG4gICAgfSxcbiAgICBleHBvc2VkVmFyaWFibGVzOiB7fSxcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICBvdGhlcnM6IHtcbiAgICAgICAgc2hvd09uRGVza3RvcDogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93T25Nb2JpbGU6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDogeyB2YWx1ZTogJ0NoZWNrYm94IGxhYmVsJyB9LFxuICAgICAgfSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdGV4dENvbG9yOiB7IHZhbHVlOiAnIzAwMCcgfSxcbiAgICAgICAgY2hlY2tib3hDb2xvcjogeyB2YWx1ZTogJyMzYzkyZGMnIH0sXG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSYWRpby1idXR0b24nLFxuICAgIGRpc3BsYXlOYW1lOiAnUmFkaW8gQnV0dG9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JhZGlvIGJ1dHRvbnMnLFxuICAgIGNvbXBvbmVudDogJ1JhZGlvQnV0dG9uJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDUsXG4gICAgICBoZWlnaHQ6IDMwLFxuICAgIH0sXG4gICAgb3RoZXJzOiB7XG4gICAgICBzaG93T25EZXNrdG9wOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gZGVza3RvcCcgfSxcbiAgICAgIHNob3dPbk1vYmlsZTogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIG1vYmlsZScgfSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGxhYmVsOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdMYWJlbCcgfSxcbiAgICAgIHZhbHVlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEZWZhdWx0IHZhbHVlJyB9LFxuICAgICAgdmFsdWVzOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdPcHRpb24gdmFsdWVzJyB9LFxuICAgICAgZGlzcGxheV92YWx1ZXM6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ09wdGlvbiBsYWJlbHMnIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHtcbiAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlOiB7IGRpc3BsYXlOYW1lOiAnT24gc2VsZWN0JyB9LFxuICAgIH0sXG4gICAgc3R5bGVzOiB7XG4gICAgICB0ZXh0Q29sb3I6IHsgdHlwZTogJ2NvbG9yJywgZGlzcGxheU5hbWU6ICdUZXh0IENvbG9yJyB9LFxuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGRpc2FibGVkU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0Rpc2FibGUnIH0sXG4gICAgfSxcbiAgICBleHBvc2VkVmFyaWFibGVzOiB7fSxcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICBvdGhlcnM6IHtcbiAgICAgICAgc2hvd09uRGVza3RvcDogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93T25Nb2JpbGU6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDogeyB2YWx1ZTogJ1NlbGVjdCcgfSxcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgdmFsdWVzOiB7IHZhbHVlOiAne3tbdHJ1ZSxmYWxzZV19fScgfSxcbiAgICAgICAgZGlzcGxheV92YWx1ZXM6IHsgdmFsdWU6ICd7e1tcInllc1wiLCBcIm5vXCJdfX0nIH0sXG4gICAgICAgIHZpc2libGU6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHRleHRDb2xvcjogeyB2YWx1ZTogJyMwMDAnIH0sXG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUb2dnbGVTd2l0Y2gnLFxuICAgIGRpc3BsYXlOYW1lOiAnVG9nZ2xlIFN3aXRjaCcsXG4gICAgZGVzY3JpcHRpb246ICdUb2dnbGUgU3dpdGNoJyxcbiAgICBjb21wb25lbnQ6ICdUb2dnbGVTd2l0Y2gnLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogNSxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgfSxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGFiZWw6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0xhYmVsJyB9LFxuICAgIH0sXG4gICAgZXZlbnRzOiB7XG4gICAgICBvbkNoYW5nZTogeyBkaXNwbGF5TmFtZTogJ09uIGNoYW5nZScgfSxcbiAgICB9LFxuICAgIHN0eWxlczoge1xuICAgICAgdGV4dENvbG9yOiB7IHR5cGU6ICdjb2xvcicsIGRpc3BsYXlOYW1lOiAnVGV4dCBDb2xvcicgfSxcbiAgICAgIHRvZ2dsZVN3aXRjaENvbG9yOiB7IHR5cGU6ICdjb2xvcicsIGRpc3BsYXlOYW1lOiAnVG9nZ2xlIFN3aXRjaCBDb2xvcicgfSxcbiAgICAgIHZpc2liaWxpdHk6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1Zpc2liaWxpdHknIH0sXG4gICAgICBkaXNhYmxlZFN0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEaXNhYmxlJyB9LFxuICAgIH0sXG4gICAgZXhwb3NlZFZhcmlhYmxlczoge30sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHsgdmFsdWU6ICdUb2dnbGUgbGFiZWwnIH0sXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB0ZXh0Q29sb3I6IHsgdmFsdWU6ICcjMDAwJyB9LFxuICAgICAgICB0b2dnbGVTd2l0Y2hDb2xvcjogeyB2YWx1ZTogJyMzYzkyZGMnIH0sXG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUZXh0YXJlYScsXG4gICAgZGlzcGxheU5hbWU6ICdUZXh0YXJlYScsXG4gICAgZGVzY3JpcHRpb246ICdUZXh0IGFyZWEgZm9ybSBmaWVsZCcsXG4gICAgY29tcG9uZW50OiAnVGV4dEFyZWEnLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogNixcbiAgICAgIGhlaWdodDogMTAwLFxuICAgIH0sXG4gICAgb3RoZXJzOiB7XG4gICAgICBzaG93T25EZXNrdG9wOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gZGVza3RvcCcgfSxcbiAgICAgIHNob3dPbk1vYmlsZTogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIG1vYmlsZScgfSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHZhbHVlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEZWZhdWx0IHZhbHVlJyB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1BsYWNlaG9sZGVyJyB9LFxuICAgIH0sXG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdHlsZXM6IHtcbiAgICAgIHZpc2liaWxpdHk6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1Zpc2liaWxpdHknIH0sXG4gICAgICBkaXNhYmxlZFN0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEaXNhYmxlJyB9LFxuICAgIH0sXG4gICAgZXhwb3NlZFZhcmlhYmxlczoge1xuICAgICAgdmFsdWU6IHt9LFxuICAgIH0sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICdUb29sSmV0IGlzIGFuIG9wZW4tc291cmNlIGxvdy1jb2RlIHBsYXRmb3JtIGZvciBidWlsZGluZyBhbmQgZGVwbG95aW5nIGludGVybmFsIHRvb2xzIHdpdGggbWluaW1hbCBlbmdpbmVlcmluZyBlZmZvcnRzIPCfmoAnLFxuICAgICAgICB9LFxuICAgICAgICBwbGFjZWhvbGRlcjogeyB2YWx1ZTogJ1BsYWNlaG9sZGVyIHRleHQnIH0sXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB2aXNpYmlsaXR5OiB7IHZhbHVlOiAne3t0cnVlfX0nIH0sXG4gICAgICAgIGRpc2FibGVkU3RhdGU6IHsgdmFsdWU6ICd7e2ZhbHNlfX0nIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGF0ZVJhbmdlUGlja2VyJyxcbiAgICBkaXNwbGF5TmFtZTogJ1JhbmdlIFBpY2tlcicsXG4gICAgZGVzY3JpcHRpb246ICdTZWxlY3QgYSBkYXRlIHJhbmdlJyxcbiAgICBjb21wb25lbnQ6ICdEYXRlcmFuZ2VQaWNrZXInLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogOCxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgfSxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgZm9ybWF0OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdGb3JtYXQnIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHt9LFxuICAgIHN0eWxlczoge1xuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGRpc2FibGVkU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0Rpc2FibGUnIH0sXG4gICAgfSxcbiAgICBleHBvc2VkVmFyaWFibGVzOiB7XG4gICAgICBlbmREYXRlOiB7fSxcbiAgICAgIHN0YXJ0RGF0ZToge30sXG4gICAgfSxcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICBvdGhlcnM6IHtcbiAgICAgICAgc2hvd09uRGVza3RvcDogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93T25Nb2JpbGU6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBmb3JtYXQ6IHsgdmFsdWU6ICdERC9NTS9ZWVlZJyB9LFxuICAgICAgfSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdmlzaWJpbGl0eTogeyB2YWx1ZTogJ3t7dHJ1ZX19JyB9LFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiB7IHZhbHVlOiAne3tmYWxzZX19JyB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1RleHQnLFxuICAgIGRpc3BsYXlOYW1lOiAnVGV4dCcsXG4gICAgZGVzY3JpcHRpb246ICdEaXNwbGF5IG1hcmtkb3duIG9yIEhUTUwnLFxuICAgIGNvbXBvbmVudDogJ1RleHQnLFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB0ZXh0OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdUZXh0JyB9LFxuICAgICAgbG9hZGluZ1N0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdTaG93IGxvYWRpbmcgc3RhdGUnIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDMsXG4gICAgICBoZWlnaHQ6IDMwLFxuICAgIH0sXG4gICAgZXZlbnRzOiBbXSxcbiAgICBzdHlsZXM6IHtcbiAgICAgIHRleHRDb2xvcjogeyB0eXBlOiAnY29sb3InLCBkaXNwbGF5TmFtZTogJ1RleHQgQ29sb3InIH0sXG4gICAgICB2aXNpYmlsaXR5OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdWaXNpYmlsaXR5JyB9LFxuICAgICAgZGlzYWJsZWRTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGlzYWJsZScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHt9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIG90aGVyczoge1xuICAgICAgICBzaG93T25EZXNrdG9wOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dPbk1vYmlsZTogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRleHQ6IHsgdmFsdWU6ICdUZXh0IGdvZXMgaGVyZSAhJyB9LFxuICAgICAgICB2aXNpYmxlOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIGxvYWRpbmdTdGF0ZTogeyB2YWx1ZTogYHt7ZmFsc2V9fWAgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHRleHRDb2xvcjogeyB2YWx1ZTogJyMwMDAnIH0sXG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbWFnZScsXG4gICAgZGlzcGxheU5hbWU6ICdJbWFnZScsXG4gICAgZGVzY3JpcHRpb246ICdEaXNwbGF5IGFuIEltYWdlJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDUsXG4gICAgICBoZWlnaHQ6IDIxMCxcbiAgICB9LFxuICAgIGNvbXBvbmVudDogJ0ltYWdlJyxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgc291cmNlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdVUkwnIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHtcbiAgICAgIG9uQ2xpY2s6IHsgZGlzcGxheU5hbWU6ICdPbiBjbGljaycgfSxcbiAgICB9LFxuICAgIHN0eWxlczoge1xuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGRpc2FibGVkU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0Rpc2FibGUnIH0sXG4gICAgfSxcbiAgICBleHBvc2VkVmFyaWFibGVzOiB7fSxcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICBvdGhlcnM6IHtcbiAgICAgICAgc2hvd09uRGVza3RvcDogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93T25Nb2JpbGU6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzb3VyY2U6IHsgdmFsdWU6ICdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzM0MjE3L2ltYWdlLnN2ZycgfSxcbiAgICAgICAgdmlzaWJsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdmlzaWJpbGl0eTogeyB2YWx1ZTogJ3t7dHJ1ZX19JyB9LFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiB7IHZhbHVlOiAne3tmYWxzZX19JyB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NvbnRhaW5lcicsXG4gICAgZGlzcGxheU5hbWU6ICdDb250YWluZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnV3JhcHBlciBmb3IgbXVsdGlwbGUgY29tcG9uZW50cycsXG4gICAgZGVmYXVsdFNpemU6IHtcbiAgICAgIHdpZHRoOiA1LFxuICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgfSxcbiAgICBjb21wb25lbnQ6ICdDb250YWluZXInLFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICBldmVudHM6IHt9LFxuICAgIHN0eWxlczoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB7IHR5cGU6ICdjb2xvcicgfSxcbiAgICAgIHZpc2liaWxpdHk6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1Zpc2liaWxpdHknIH0sXG4gICAgICBkaXNhYmxlZFN0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEaXNhYmxlJyB9LFxuICAgIH0sXG4gICAgZXhwb3NlZFZhcmlhYmxlczoge30sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdmlzaWJsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7IHZhbHVlOiAnI2ZmZicgfSxcbiAgICAgICAgdmlzaWJpbGl0eTogeyB2YWx1ZTogJ3t7dHJ1ZX19JyB9LFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiB7IHZhbHVlOiAne3tmYWxzZX19JyB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Ryb3Bkb3duJyxcbiAgICBkaXNwbGF5TmFtZTogJ0Ryb3Bkb3duJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbGVjdCBvbmUgdmFsdWUgZnJvbSBvcHRpb25zJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDgsXG4gICAgICBoZWlnaHQ6IDMwLFxuICAgIH0sXG4gICAgY29tcG9uZW50OiAnRHJvcERvd24nLFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uOiB7XG4gICAgICBjdXN0b21SdWxlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdDdXN0b20gdmFsaWRhdGlvbicgfSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGxhYmVsOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdMYWJlbCcgfSxcbiAgICAgIHZhbHVlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEZWZhdWx0IHZhbHVlJyB9LFxuICAgICAgdmFsdWVzOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdPcHRpb24gdmFsdWVzJyB9LFxuICAgICAgZGlzcGxheV92YWx1ZXM6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ09wdGlvbiBsYWJlbHMnIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHtcbiAgICAgIG9uU2VsZWN0OiB7IGRpc3BsYXlOYW1lOiAnT24gc2VsZWN0JyB9LFxuICAgIH0sXG4gICAgc3R5bGVzOiB7XG4gICAgICB2aXNpYmlsaXR5OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdWaXNpYmlsaXR5JyB9LFxuICAgICAgZGlzYWJsZWRTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGlzYWJsZScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH0sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgY3VzdG9tUnVsZTogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHsgdmFsdWU6ICdTZWxlY3QnIH0sXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiAne3syfX0nIH0sXG4gICAgICAgIHZhbHVlczogeyB2YWx1ZTogJ3t7WzEsMiwzXX19JyB9LFxuICAgICAgICBkaXNwbGF5X3ZhbHVlczogeyB2YWx1ZTogJ3t7W1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIl19fScgfSxcbiAgICAgICAgdmlzaWJsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdmlzaWJpbGl0eTogeyB2YWx1ZTogJ3t7dHJ1ZX19JyB9LFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiB7IHZhbHVlOiAne3tmYWxzZX19JyB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ011bHRpc2VsZWN0JyxcbiAgICBkaXNwbGF5TmFtZTogJ011bHRpc2VsZWN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbGVjdCBtdWx0aXBsZSB2YWx1ZXMgZnJvbSBvcHRpb25zJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDgsXG4gICAgICBoZWlnaHQ6IDMwLFxuICAgIH0sXG4gICAgY29tcG9uZW50OiAnTXVsdGlzZWxlY3QnLFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBsYWJlbDogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnTGFiZWwnIH0sXG4gICAgICB2YWx1ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGVmYXVsdCB2YWx1ZScgfSxcbiAgICAgIHZhbHVlczogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnT3B0aW9uIHZhbHVlcycgfSxcbiAgICAgIGRpc3BsYXlfdmFsdWVzOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdPcHRpb24gbGFiZWxzJyB9LFxuICAgIH0sXG4gICAgZXZlbnRzOiB7XG4gICAgICBvblNlbGVjdDogeyBkaXNwbGF5TmFtZTogJ09uIHNlbGVjdCcgfSxcbiAgICB9LFxuICAgIHN0eWxlczoge1xuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGRpc2FibGVkU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0Rpc2FibGUnIH0sXG4gICAgfSxcbiAgICBleHBvc2VkVmFyaWFibGVzOiB7XG4gICAgICB2YWx1ZXM6IHt9LFxuICAgIH0sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHsgdmFsdWU6ICdTZWxlY3QnIH0sXG4gICAgICAgIHZhbHVlczogeyB2YWx1ZTogJ1tdJyB9LFxuICAgICAgICBvcHRpb25fdmFsdWVzOiB7IHZhbHVlOiAnWzEsMiwzXScgfSxcbiAgICAgICAgZGlzcGxheV92YWx1ZXM6IHsgdmFsdWU6ICdbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiXScgfSxcbiAgICAgICAgdmlzaWJsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdmlzaWJpbGl0eTogeyB2YWx1ZTogJ3t7dHJ1ZX19JyB9LFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiB7IHZhbHVlOiAne3tmYWxzZX19JyB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1JpY2hUZXh0RWRpdG9yJyxcbiAgICBkaXNwbGF5TmFtZTogJ1RleHQgRWRpdG9yJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JpY2ggdGV4dCBlZGl0b3InLFxuICAgIGNvbXBvbmVudDogJ1JpY2hUZXh0RWRpdG9yJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDE2LFxuICAgICAgaGVpZ2h0OiAyMTAsXG4gICAgfSxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgcGxhY2Vob2xkZXI6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1BsYWNlaG9sZGVyJyB9LFxuICAgICAgZGVmYXVsdFZhbHVlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEZWZhdWx0IFZhbHVlJyB9LFxuICAgIH0sXG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdHlsZXM6IHtcbiAgICAgIHZpc2liaWxpdHk6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1Zpc2liaWxpdHknIH0sXG4gICAgICBkaXNhYmxlZFN0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEaXNhYmxlJyB9LFxuICAgIH0sXG4gICAgZXhwb3NlZFZhcmlhYmxlczoge1xuICAgICAgdmFsdWU6ICcnLFxuICAgIH0sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IHsgdmFsdWU6ICdQbGFjZWhvbGRlciB0ZXh0JyB9LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHsgdmFsdWU6ICcnIH0sXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB2aXNpYmlsaXR5OiB7IHZhbHVlOiAne3t0cnVlfX0nIH0sXG4gICAgICAgIGRpc2FibGVkU3RhdGU6IHsgdmFsdWU6ICd7e2ZhbHNlfX0nIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWFwJyxcbiAgICBkaXNwbGF5TmFtZTogJ01hcCcsXG4gICAgZGVzY3JpcHRpb246ICdEaXNwbGF5IEdvb2dsZSBNYXBzJyxcbiAgICBjb21wb25lbnQ6ICdNYXAnLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogMTIsXG4gICAgICBoZWlnaHQ6IDQyMCxcbiAgICB9LFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBpbml0aWFsTG9jYXRpb246IHtcbiAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0luaXRpYWwgbG9jYXRpb24nLFxuICAgICAgICB0aXA6ICdUaGlzIGxvY2F0aW9uIHdpbGwgYmUgdGhlIGluaXRpYWwgY2VudGVyIG9mIHRoZSBtYXAnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgbW9kZTogJ2phdmFzY3JpcHQnLFxuICAgICAgICAgIHRoZW1lOiAnZHVvdG9uZS1saWdodCcsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWFwLWxvY2F0aW9uLWlucHV0IHByLTInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRNYXJrZXJzOiB7XG4gICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdEZWZhdWx0IG1hcmtlcnMnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgbW9kZTogJ2phdmFzY3JpcHQnLFxuICAgICAgICAgIHRoZW1lOiAnZHVvdG9uZS1saWdodCcsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWFwLWxvY2F0aW9uLWlucHV0IHByLTInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFkZE5ld01hcmtlcnM6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnQWRkIG5ldyBtYXJrZXJzJyB9LFxuICAgICAgY2FuU2VhcmNoOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1NlYXJjaCBmb3IgcGxhY2VzJyB9LFxuICAgIH0sXG4gICAgZXZlbnRzOiB7XG4gICAgICBvbkJvdW5kc0NoYW5nZTogeyBkaXNwbGF5TmFtZTogJ09uIGJvdW5kcyBjaGFuZ2UnIH0sXG4gICAgICBvbkNyZWF0ZU1hcmtlcjogeyBkaXNwbGF5TmFtZTogJ09uIGNyZWF0ZSBtYXJrZXInIH0sXG4gICAgICBvbk1hcmtlckNsaWNrOiB7IGRpc3BsYXlOYW1lOiAnT24gbWFya2VyIGNsaWNrJyB9LFxuICAgIH0sXG4gICAgc3R5bGVzOiB7XG4gICAgICB2aXNpYmlsaXR5OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdWaXNpYmlsaXR5JyB9LFxuICAgICAgZGlzYWJsZWRTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGlzYWJsZScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHtcbiAgICAgIGNlbnRlcjoge30sXG4gICAgfSxcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICBvdGhlcnM6IHtcbiAgICAgICAgc2hvd09uRGVza3RvcDogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93T25Nb2JpbGU6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBpbml0aWFsTG9jYXRpb246IHtcbiAgICAgICAgICB2YWx1ZTogYHt7IHtcImxhdFwiOiA0MC43MTI4LCBcImxuZ1wiOiAtNzMuOTM1MjQyfSB9fWAsXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHRNYXJrZXJzOiB7XG4gICAgICAgICAgdmFsdWU6IGB7eyBbe1wibGF0XCI6IDQwLjcxMjgsIFwibG5nXCI6IC03My45MzUyNDJ9XSB9fWAsXG4gICAgICAgIH0sXG4gICAgICAgIGNhblNlYXJjaDoge1xuICAgICAgICAgIHZhbHVlOiBge3t0cnVlfX1gLFxuICAgICAgICB9LFxuICAgICAgICBhZGROZXdNYXJrZXJzOiB7IHZhbHVlOiBge3t0cnVlfX1gIH0sXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB2aXNpYmlsaXR5OiB7IHZhbHVlOiAne3t0cnVlfX0nIH0sXG4gICAgICAgIGRpc2FibGVkU3RhdGU6IHsgdmFsdWU6ICd7e2ZhbHNlfX0nIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUXJTY2FubmVyJyxcbiAgICBkaXNwbGF5TmFtZTogJ1FSIFNjYW5uZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnU2NhbiBRUiBjb2RlcyBhbmQgaG9sZCBpdHMgZGF0YScsXG4gICAgY29tcG9uZW50OiAnUXJTY2FubmVyJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDEwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge30sXG4gICAgZXZlbnRzOiB7XG4gICAgICBvbkRldGVjdDogeyBkaXNwbGF5TmFtZTogJ09uIGRldGVjdCcgfSxcbiAgICB9LFxuICAgIHN0eWxlczoge1xuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGRpc2FibGVkU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0Rpc2FibGUnIH0sXG4gICAgfSxcbiAgICBleHBvc2VkVmFyaWFibGVzOiB7XG4gICAgICBsYXN0RGV0ZWN0ZWRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICBvdGhlcnM6IHtcbiAgICAgICAgc2hvd09uRGVza3RvcDogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93T25Nb2JpbGU6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdmlzaWJpbGl0eTogeyB2YWx1ZTogJ3t7dHJ1ZX19JyB9LFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiB7IHZhbHVlOiAne3tmYWxzZX19JyB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1N0YXJSYXRpbmcnLFxuICAgIGRpc3BsYXlOYW1lOiAnUmF0aW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ1N0YXIgcmF0aW5nJyxcbiAgICBjb21wb25lbnQ6ICdTdGFyUmF0aW5nJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDgsXG4gICAgICBoZWlnaHQ6IDMwLFxuICAgIH0sXG4gICAgb3RoZXJzOiB7XG4gICAgICBzaG93T25EZXNrdG9wOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gZGVza3RvcCcgfSxcbiAgICAgIHNob3dPbk1vYmlsZTogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIG1vYmlsZScgfSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGxhYmVsOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdMYWJlbCcgfSxcbiAgICAgIG1heFJhdGluZzogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnTnVtYmVyIG9mIHN0YXJzJyB9LFxuICAgICAgZGVmYXVsdFNlbGVjdGVkOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEZWZhdWx0IG5vIG9mIHNlbGVjdGVkIHN0YXJzJyB9LFxuICAgICAgYWxsb3dIYWxmU3RhcjogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdFbmFibGUgaGFsZiBzdGFyJyB9LFxuICAgICAgdG9vbHRpcHM6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1Rvb2x0aXBzJyB9LFxuICAgIH0sXG4gICAgZXZlbnRzOiB7XG4gICAgICBvbkNoYW5nZTogeyBkaXNwbGF5TmFtZTogJ09uIENoYW5nZScgfSxcbiAgICB9LFxuICAgIHN0eWxlczoge1xuICAgICAgdGV4dENvbG9yOiB7IHR5cGU6ICdjb2xvcicsIGRpc3BsYXlOYW1lOiAnU3RhciBDb2xvcicgfSxcbiAgICAgIGxhYmVsQ29sb3I6IHsgdHlwZTogJ2NvbG9yJywgZGlzcGxheU5hbWU6ICdMYWJlbCBDb2xvcicgfSxcbiAgICAgIHZpc2liaWxpdHk6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1Zpc2liaWxpdHknIH0sXG4gICAgICBkaXNhYmxlZFN0YXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEaXNhYmxlJyB9LFxuICAgIH0sXG4gICAgZXhwb3NlZFZhcmlhYmxlczoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgfSxcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICBvdGhlcnM6IHtcbiAgICAgICAgc2hvd09uRGVza3RvcDogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93T25Nb2JpbGU6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDogeyB2YWx1ZTogJ1NlbGVjdCB5b3VyIHJhdGluZycgfSxcbiAgICAgICAgbWF4UmF0aW5nOiB7IHZhbHVlOiAnNScgfSxcbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkOiB7IHZhbHVlOiAnNScgfSxcbiAgICAgICAgYWxsb3dIYWxmU3RhcjogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgICAgdmlzaWJsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICB0b29sdGlwczogeyB2YWx1ZTogJ3t7W119fScgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHRleHRDb2xvcjogeyB2YWx1ZTogJyNmZmI0MDAnIH0sXG4gICAgICAgIGxhYmVsQ29sb3I6IHsgdmFsdWU6ICcjMzMzJyB9LFxuICAgICAgICB2aXNpYmlsaXR5OiB7IHZhbHVlOiAne3t0cnVlfX0nIH0sXG4gICAgICAgIGRpc2FibGVkU3RhdGU6IHsgdmFsdWU6ICd7e2ZhbHNlfX0nIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGl2aWRlcicsXG4gICAgZGlzcGxheU5hbWU6ICdEaXZpZGVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlcGFyYXRvciBiZXR3ZWVuIGNvbXBvbmVudHMnLFxuICAgIGNvbXBvbmVudDogJ0RpdmlkZXInLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogMTAsXG4gICAgICBoZWlnaHQ6IDEwLFxuICAgIH0sXG4gICAgb3RoZXJzOiB7XG4gICAgICBzaG93T25EZXNrdG9wOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gZGVza3RvcCcgfSxcbiAgICAgIHNob3dPbk1vYmlsZTogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIG1vYmlsZScgfSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHt9LFxuICAgIGV2ZW50czoge30sXG4gICAgc3R5bGVzOiB7XG4gICAgICBkaXZpZGVyQ29sb3I6IHsgdHlwZTogJ2NvbG9yJywgZGlzcGxheU5hbWU6ICdEaXZpZGVyIENvbG9yJyB9LFxuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHtcbiAgICAgIHZhbHVlOiB7fSxcbiAgICB9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIG90aGVyczoge1xuICAgICAgICBzaG93T25EZXNrdG9wOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dPbk1vYmlsZTogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgdmlzaWJpbGl0eTogeyB2YWx1ZTogJ3t7dHJ1ZX19JyB9LFxuICAgICAgICBkaXZpZGVyQ29sb3I6IHsgdmFsdWU6ICcjRTdFOEVBJyB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0ZpbGVQaWNrZXInLFxuICAgIGRpc3BsYXlOYW1lOiAnRmlsZSBQaWNrZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnRmlsZSBQaWNrZXInLFxuICAgIGNvbXBvbmVudDogJ0ZpbGVQaWNrZXInLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogMTUsXG4gICAgICBoZWlnaHQ6IDEwMCxcbiAgICB9LFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBlbmFibGVEcm9wem9uZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVXNlIERyb3Agem9uZScgfSxcbiAgICAgIGVuYWJsZVBpY2tlcjogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVXNlIEZpbGUgUGlja2VyJyB9LFxuICAgICAgZW5hYmxlTXVsdGlwbGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1BpY2sgbXVsaXRwbGUgZmlsZXMnIH0sXG4gICAgICBtYXhGaWxlQ291bnQ6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ01heCBmaWxlIGNvdW50JyB9LFxuICAgICAgZmlsZVR5cGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0FjY2VwdCBmaWxlIHR5cGVzJyB9LFxuICAgICAgbWF4U2l6ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnTWF4IHNpemUgbGltaXQgKEJ5dGVzKScgfSxcbiAgICAgIG1pblNpemU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ01pbiBzaXplIGxpbWl0IChCeXRlcyknIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHsgb25GaWxlU2VsZWN0ZWQ6IHsgZGlzcGxheU5hbWU6ICdPbiBGaWxlIFNlbGVjdGVkJyB9IH0sXG4gICAgc3R5bGVzOiB7XG4gICAgICB2aXNpYmlsaXR5OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdWaXNpYmlsaXR5JyB9LFxuICAgICAgZGlzYWJsZWRTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGlzYWJsZScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHtcbiAgICAgIGZpbGU6IFt7IG5hbWU6ICcnLCBjb250ZW50OiAnJywgZGF0YVVSTDogJycsIHR5cGU6ICcnIH1dLFxuICAgIH0sXG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgb3RoZXJzOiB7XG4gICAgICAgIHNob3dPbkRlc2t0b3A6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgc2hvd09uTW9iaWxlOiB7IHZhbHVlOiBmYWxzZSB9LFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZW5hYmxlRHJvcHpvbmU6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZW5hYmxlUGlja2VyOiB7IHZhbHVlOiAne3t0cnVlfX0nIH0sXG4gICAgICAgIG1heEZpbGVDb3VudDogeyB2YWx1ZTogJ3t7Mn19JyB9LFxuICAgICAgICBlbmFibGVNdWx0aXBsZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgICAgZmlsZVR5cGU6IHsgdmFsdWU6ICd7e1wiaW1hZ2UvKlwifX0nIH0sXG4gICAgICAgIG1heFNpemU6IHsgdmFsdWU6ICd7ezEwNDg1NzZ9fScgfSxcbiAgICAgICAgbWluU2l6ZTogeyB2YWx1ZTogJ3t7NTB9fScgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDYWxlbmRhcicsXG4gICAgZGlzcGxheU5hbWU6ICdDYWxlbmRhcicsXG4gICAgZGVzY3JpcHRpb246ICdDYWxlbmRhcicsXG4gICAgY29tcG9uZW50OiAnQ2FsZW5kYXInLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogMzAsXG4gICAgICBoZWlnaHQ6IDYwMCxcbiAgICB9LFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBkYXRlRm9ybWF0OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEYXRlIGZvcm1hdCcgfSxcbiAgICAgIGRlZmF1bHREYXRlOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdEZWZhdWx0IGRhdGUnIH0sXG4gICAgICBldmVudHM6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0V2ZW50cycgfSxcbiAgICAgIHJlc291cmNlczogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnUmVzb3VyY2VzJyB9LFxuICAgICAgZGVmYXVsdFZpZXc6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0RlZmF1bHQgdmlldycgfSxcbiAgICAgIGRpc3BsYXlUb29sYmFyOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgdG9vbGJhcicgfSxcbiAgICAgIGRpc3BsYXlWaWV3U3dpdGNoZXI6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyB2aWV3IHN3aXRjaGVyJyB9LFxuICAgICAgaGlnaGxpZ2h0VG9kYXk6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnSGlnaGxpZ2h0IHRvZGF5JyB9LFxuICAgICAgc2hvd1BvcE92ZXJPbkV2ZW50Q2xpY2s6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBwb3BvdmVyIHdoZW4gZXZlbnQgaXMgY2xpY2tlZCcgfSxcbiAgICB9LFxuICAgIGV2ZW50czoge1xuICAgICAgb25DYWxlbmRhckV2ZW50U2VsZWN0OiB7IGRpc3BsYXlOYW1lOiAnT24gRXZlbnQgU2VsZWN0JyB9LFxuICAgICAgb25DYWxlbmRhclNsb3RTZWxlY3Q6IHsgZGlzcGxheU5hbWU6ICdPbiBTbG90IFNlbGVjdCcgfSxcbiAgICB9LFxuICAgIHN0eWxlczoge1xuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGNlbGxTaXplSW5WaWV3c0NsYXNzaWZpZWRCeVJlc291cmNlOiB7XG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0NlbGwgc2l6ZSBpbiB2aWV3cyBjbGFzc2lmaWVkIGJ5IHJlc291cmNlJyxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgbmFtZTogJ0NvbXBhY3QnLCB2YWx1ZTogJ2NvbXBhY3QnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnU3BhY2lvdXMnLCB2YWx1ZTogJ3NwYWNpb3VzJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlEYXlOYW1lc0luV2Vla1ZpZXc6IHtcbiAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnRGlzcGxheSBvbmx5IG5hbWVzIG9mIGRheXMgYXMgaGVhZGVycyBvbiB3ZWVrIHZpZXcnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHtcbiAgICAgIHNlbGVjdGVkRXZlbnQ6IHt9LFxuICAgICAgc2VsZWN0ZWRTbG90czoge30sXG4gICAgICBjdXJyZW50VmlldzogJ21vbnRoJyxcbiAgICB9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIG90aGVyczoge1xuICAgICAgICBzaG93T25EZXNrdG9wOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dPbk1vYmlsZTogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRhdGVGb3JtYXQ6IHtcbiAgICAgICAgICB2YWx1ZTogJ01NLURELVlZWVkgSEg6bW06c3MgQSBaJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdERhdGU6IHtcbiAgICAgICAgICB2YWx1ZTogJ3t7bW9tZW50KCkuZm9ybWF0KFwiTU0tREQtWVlZWSBISDptbTpzcyBBIFpcIil9fScsXG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgXCJ7e1tcXG5cXHRcXHR7XFxuXFx0XFx0XFx0IHRpdGxlOiAnU2FtcGxlIGV2ZW50JyxcXG5cXHRcXHRcXHQgc3RhcnQ6IGAke21vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmZvcm1hdCgnTU0tREQtWVlZWSBISDptbTpzcyBBIFonKX1gLFxcblxcdFxcdFxcdCBlbmQ6IGAke21vbWVudCgpLmVuZE9mKCdkYXknKS5mb3JtYXQoJ01NLURELVlZWVkgSEg6bW06c3MgQSBaJyl9YCxcXG5cXHRcXHRcXHQgYWxsRGF5OiBmYWxzZSxcXG5cXHRcXHRcXHQgY29sb3I6ICcjNEQ3MkRBJ1xcblxcdFxcdH1cXG5dfX1cIixcbiAgICAgICAgfSxcbiAgICAgICAgcmVzb3VyY2VzOiB7XG4gICAgICAgICAgdmFsdWU6ICd7e1tdfX0nLFxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0Vmlldzoge1xuICAgICAgICAgIHZhbHVlOiBcInt7J21vbnRoJ319XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BsYXlUb29sYmFyOiB7XG4gICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BsYXlWaWV3U3dpdGNoZXI6IHtcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaGlnaGxpZ2h0VG9kYXk6IHtcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1BvcE92ZXJPbkV2ZW50Q2xpY2s6IHtcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICB2aXNpYmlsaXR5OiB7IHZhbHVlOiAne3t0cnVlfX0nIH0sXG4gICAgICAgIGNlbGxTaXplSW5WaWV3c0NsYXNzaWZpZWRCeVJlc291cmNlOiB7IHZhbHVlOiAnc3BhY2lvdXMnIH0sXG4gICAgICAgIGRpc3BsYXlEYXlOYW1lc0luV2Vla1ZpZXc6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJZnJhbWUnLFxuICAgIGRpc3BsYXlOYW1lOiAnSWZyYW1lJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXkgYW4gSWZyYW1lJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDEwLFxuICAgICAgaGVpZ2h0OiAzMTAsXG4gICAgfSxcbiAgICBjb21wb25lbnQ6ICdJRnJhbWUnLFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBzb3VyY2U6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ1VSTCcgfSxcbiAgICB9LFxuICAgIGV2ZW50czoge30sXG4gICAgc3R5bGVzOiB7XG4gICAgICB2aXNpYmlsaXR5OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdWaXNpYmlsaXR5JyB9LFxuICAgICAgZGlzYWJsZWRTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGlzYWJsZScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHt9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIG90aGVyczoge1xuICAgICAgICBzaG93T25EZXNrdG9wOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dPbk1vYmlsZTogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNvdXJjZTogeyB2YWx1ZTogJ2h0dHBzOi8vdG9vbGpldC5pby8nIH0sXG4gICAgICAgIHZpc2libGU6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDb2RlRWRpdG9yJyxcbiAgICBkaXNwbGF5TmFtZTogJ0NvZGUgRWRpdG9yJyxcbiAgICBkZXNjcmlwdGlvbjogJ0NvZGUgRWRpdG9yJyxcbiAgICBjb21wb25lbnQ6ICdDb2RlRWRpdG9yJyxcbiAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgd2lkdGg6IDE1LFxuICAgICAgaGVpZ2h0OiAxMjAsXG4gICAgfSxcbiAgICBvdGhlcnM6IHtcbiAgICAgIHNob3dPbkRlc2t0b3A6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBkZXNrdG9wJyB9LFxuICAgICAgc2hvd09uTW9iaWxlOiB7IHR5cGU6ICd0b2dnbGUnLCBkaXNwbGF5TmFtZTogJ1Nob3cgb24gbW9iaWxlJyB9LFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgZW5hYmxlTGluZU51bWJlcjogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBMaW5lIE51bWJlcicgfSxcbiAgICAgIG1vZGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ01vZGUnIH0sXG4gICAgICBwbGFjZWhvbGRlcjogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnUGxhY2Vob2xkZXInIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHt9LFxuICAgIHN0eWxlczoge1xuICAgICAgdmlzaWJpbGl0eTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnVmlzaWJpbGl0eScgfSxcbiAgICAgIGRpc2FibGVkU3RhdGU6IHsgdHlwZTogJ2NvZGUnLCBkaXNwbGF5TmFtZTogJ0Rpc2FibGUnIH0sXG4gICAgfSxcbiAgICBleHBvc2VkVmFyaWFibGVzOiB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgfSxcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICBvdGhlcnM6IHtcbiAgICAgICAgc2hvd09uRGVza3RvcDogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBzaG93T25Nb2JpbGU6IHsgdmFsdWU6IGZhbHNlIH0sXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBlbmFibGVMaW5lTnVtYmVyOiB7IHZhbHVlOiAne3t0cnVlfX0nIH0sXG4gICAgICAgIG1vZGU6IHsgdmFsdWU6ICdqYXZhc2NyaXB0JyB9LFxuICAgICAgICBwbGFjZWhvbGRlcjogeyB2YWx1ZTogJycgfSxcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUYWJzJyxcbiAgICBkaXNwbGF5TmFtZTogJ1RhYnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGFicyBjb21wb25lbnQnLFxuICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICB3aWR0aDogMzAsXG4gICAgICBoZWlnaHQ6IDIwMCxcbiAgICB9LFxuICAgIGNvbXBvbmVudDogJ1RhYnMnLFxuICAgIG90aGVyczoge1xuICAgICAgc2hvd09uRGVza3RvcDogeyB0eXBlOiAndG9nZ2xlJywgZGlzcGxheU5hbWU6ICdTaG93IG9uIGRlc2t0b3AnIH0sXG4gICAgICBzaG93T25Nb2JpbGU6IHsgdHlwZTogJ3RvZ2dsZScsIGRpc3BsYXlOYW1lOiAnU2hvdyBvbiBtb2JpbGUnIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB0YWJzOiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdUYWJzJyB9LFxuICAgICAgZGVmYXVsdFRhYjogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGVmYXVsdCB0YWInIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHt9LFxuICAgIHN0eWxlczoge1xuICAgICAgaGlnaGxpZ2h0Q29sb3I6IHsgdHlwZTogJ2NvbG9yJywgZGlzcGxheU5hbWU6ICdIaWdobGlnaHQgQ29sb3InIH0sXG4gICAgICB2aXNpYmlsaXR5OiB7IHR5cGU6ICdjb2RlJywgZGlzcGxheU5hbWU6ICdWaXNpYmlsaXR5JyB9LFxuICAgICAgZGlzYWJsZWRTdGF0ZTogeyB0eXBlOiAnY29kZScsIGRpc3BsYXlOYW1lOiAnRGlzYWJsZScgfSxcbiAgICB9LFxuICAgIGV4cG9zZWRWYXJpYWJsZXM6IHt9LFxuICAgIGRlZmluaXRpb246IHtcbiAgICAgIG90aGVyczoge1xuICAgICAgICBzaG93T25EZXNrdG9wOiB7IHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHNob3dPbk1vYmlsZTogeyB2YWx1ZTogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgIFwie3tbIFxcblxcdFxcdHsgdGl0bGU6ICdIb21lJywgaWQ6ICcwJyB9LCBcXG5cXHRcXHR7IHRpdGxlOiAnUHJvZmlsZScsIGlkOiAnMScgfSwgXFxuXFx0XFx0eyB0aXRsZTogJ1NldHRpbmdzJywgaWQ6ICcyJyB9IFxcbiBdfX1cIixcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdFRhYjogeyB2YWx1ZTogJzAnIH0sXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBoaWdobGlnaHRDb2xvcjogeyB2YWx1ZTogJyMwNTY1RkUnIH0sXG4gICAgICAgIHZpc2liaWxpdHk6IHsgdmFsdWU6ICd7e3RydWV9fScgfSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogeyB2YWx1ZTogJ3t7ZmFsc2V9fScgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl07XG4iXX0=