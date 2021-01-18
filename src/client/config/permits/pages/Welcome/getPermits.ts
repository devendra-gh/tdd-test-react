import fetch from 'client/services/fetch';

const fetchPermits = async () => {
  const payload = await fetch('/api/proxy/io/getPermits', 'GET', {});
  if (payload && payload.data && payload.data.permitsByEmiratesId) {
    return payload.data.permitsByEmiratesId;
  }
  return [];
};

export default fetchPermits;
