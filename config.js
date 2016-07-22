System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  meta: {
      "angular-ui/ui-codemirror": {
          "deps": [
              "codemirror/codemirror"
           ],
      }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.7",
    "angular-ui/ui-codemirror": "github:angular-ui/ui-codemirror@0.3.0",
    "codemirror/codemirror": "github:codemirror/codemirror@5.17.0",
    "typescript": "npm:typescript@1.8.10",
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    }
  }
});
