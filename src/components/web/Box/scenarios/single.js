module.exports = config => ({
  label: "Box - Single",
  url: config.urlBase +
    "/?selectedKind=Box&selectedStory=Single&full=1&down=0&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel",
  hideSelectors: [],
  removeSelectors: [],
  selectorExpansion: true,
  selectors: ["#root"],
  readyEvent: null,
  delay: 500,
  misMatchThreshold: 0.1,
  onBeforeScript: "onBefore.js",
  onReadyScript: "onReady.js",
});
