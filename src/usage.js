
module.exports = (name, text, test) => {
  const usage = `Usage: ${name}(text, test)`;
  if (text == null) throw new Error(usage);
  if (test == null) throw new Error(usage);
};
