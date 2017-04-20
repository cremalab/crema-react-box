var requireGlobArray = require("require-glob-array");

module.exports = {
  debug: true,
  id: "react-boxen-examples",
  viewports: [
    {
      name: "default",
      width: 400,
      height: 400
    }
  ],
  scenarios: requireGlobArray("./src/examples/**/*scenario.js").map(x =>
    x({
      screen: name => `http://localhost:5001/?selectedKind=Examples&selectedStory=${name}&full=1&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel`
    })
  ),
  paths: {
    bitmaps_reference: "examples",
  },
  casperFlags: [],
  engine: "phantomjs",
  report: ["browser"],
};
