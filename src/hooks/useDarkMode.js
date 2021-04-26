Object.entries(COLORS).forEach(([name, colorByTheme]) => {
  const cssVarName = `--color-${name}`;
  root.style.setProperty(cssVarName, colorByTheme[newValue]);
});