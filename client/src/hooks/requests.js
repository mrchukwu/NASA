const API_URL = 'http://localhost:8001';

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const response = await fetch(`${API_URL}/planets`)
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`)
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });

}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try{
        await fetch(`${API_URL}/launches`, {
        method: 'POST',
        headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(launch),
  });
  }catch (error) {
    console.error('Error submitting launch:', error);
    return {
      ok: false,
    };
  }

  return {
    ok: true,
  };
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try{
    const response = await fetch(`${API_URL}/launches/${id}`, {
      method: 'DELETE',
    });
    return response;
  }catch (error) {
    console.error('Error aborting launch:', error);
    return {
      ok: false,
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};