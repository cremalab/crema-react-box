var requireGlobArray = require("require-glob-array");

module.exports = {
  id: "react-boxen",
  viewports: [
    {
      name: "default",
      width: 600,
      height: 400
    }
  ],
  scenarios: requireGlobArray("./src/**/scenarios/*.js").map(x =>
    x({
      urlBase: "http://localhost:5000"
    })),
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    casper_scripts: "backstop_data/casper_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report"
  },
  casperFlags: [],
  engine: "phantomjs",
  report: ["browser"],
  debug: false
};
