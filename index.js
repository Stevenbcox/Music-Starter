const COHORT = "REPLACE_ME!";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;

// === State ===

const state = {
    artists: [],
};

/** Updates state with artists from API */
async function getArtists() {
    try{
    const response= await fetch(`${API_URL}/artists`)
    const json = await fetch.json();
    state.artists = json.data();
    } catch (error) {
    console.log(error);
    }
}

/** Asks the API to create a new artist based on the given `artist` */
async function addArtist(artist) {
    // TODO
}

// === Render ===

/** Renders artists from state */
function renderArtists() {
    
}

/** Syncs state with the API and rerender */
async function render() {
    await getArtists();
    renderArtists();
}

// === Script ===

render();

// TODO: Add artist with form data when the form is submitted
