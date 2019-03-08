const appId = 'c5e8079e';
const appKey = '95ba17ea39885caec3d12f90ee916619'
const ExamamURL = `https://api.edamam.com/search?app_id=${appId}&app_key=${appKey}`;
export const ChixQuery = `${ExamamURL}&q=chicken`
export const BeefQuery = `${ExamamURL}&q=beef`

// need &q=chicken
export default ExamamURL;
