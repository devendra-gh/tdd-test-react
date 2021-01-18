import baseUrl from 'client/utils/baseUrl';

let baseName = baseUrl;

const versions = ['v3', 'v4', 'v5'];

/**
 * Get N-th occurrence position within string
 * @param  {string} string
 * @param  {string} subString
 * @param  {number} index
 * @returns {number}
 */
export function getPosition(string: string, subString: string, index: number) {
  return string.split(subString, index).join(subString).length;
}

export function Init() {
  if (
    versions.some(
      v => window.location.pathname.indexOf(`${baseUrl}/${v}`) === 0,
    )
  ) {
    const numberOfSlashes = baseUrl.split('/').length;
    const pos3 = getPosition(
      window.location.pathname,
      '/',
      3 + numberOfSlashes - 1,
    );

    const pos2 = getPosition(
      window.location.pathname,
      '/',
      2 + numberOfSlashes - 1,
    );

    const pos1 = getPosition(window.location.pathname, '/', numberOfSlashes);
    const version = window.location.pathname.substring(pos1, pos2);

    baseName = `${baseUrl}${version}${window.location.pathname.substring(
      pos2,
      pos3,
    )}`;
  }
}

Init();
const base = baseName;
export default base;
