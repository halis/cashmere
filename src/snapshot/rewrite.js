
/* Rewrites a string with an array of functions */
module.exports = (fns, string) => {
  if (!fns || !fns.length) return string;

  return fns.reduce((acc, fn) => {
    if (typeof fn !== 'function') throw new Error('fns is an array of functions');
    return fn(acc);
  }, string);
};
