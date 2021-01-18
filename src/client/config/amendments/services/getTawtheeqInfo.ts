import fetch from 'client/services/fetch';

const getTawtheeqInfo = async (contractNo: string) => {
  return fetch('/pub/proxy/getTawtheeqDetailsV4', 'POST', {
    contractNo,
  })
    .then(response => response.data)
    .catch(err => err);
};

export default getTawtheeqInfo;
