
import R from 'ramda';

const chainPath = (path, list) => {
  try {
    if (!path || !path.length) return list;
    if (!list || !list.length) return [];

    const flatProp = prop => R.chain(R.prop(prop));
    const navigateProps = (accum, getProp) => getProp(accum);

    return path
      .map(flatProp)
      .reduce(navigateProps, list)
      .filter(x => x);
  } catch (e) {
    return [];
  }
};

export default chainPath;
