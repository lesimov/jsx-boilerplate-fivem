import { isEnvBrowser } from './misc';

const resourceName = (window).GetParentResourceName
  ? (window).GetParentResourceName()
  : 'mx-motels';

export async function fetchNui(eventName, data) {
  if (isEnvBrowser()) return undefined; // HACK FOR BORING ERRORS IN DEV

  try {
    const resp = await fetch(`https://${resourceName}/${eventName}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });

    const respFormatted = await resp.json();

    return respFormatted;
  } catch (error) {
    throw Error(`Failed to fetch NUI callback ${eventName}! (${error})`);
  }
}
