import fetch from 'client/services/fetch';

const fetchNewActivityService = async (formData: object) => {
  try {
    const response = await fetch('/pub/proxy/newActivityService', 'POST', {
      ...formData,
    });

    return response;
  } catch (e) {
    console.info(e);
  }

  return false;
};

export default fetchNewActivityService;
