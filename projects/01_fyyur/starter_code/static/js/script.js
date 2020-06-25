window.parseISOString = function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

const FyurrHelpers = {
    confirmAndDeleteEntity: function(formId, confirmationMsg, url){
        if(confirm(confirmationMsg)) {
            document.querySelector(`#${formId}`).submit();
        }
    },
    handlePreselectedGenres: (elementId, genres = null) => {
        if(genres) {
            const genresArr = genres.split(',');
            const options = document.querySelectorAll(`#${elementId} option`);
            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                if (genresArr.findIndex(x => x.toLowerCase() === option.value.toLowerCase()) > -1) {
                    option.setAttribute('selected', true);
                }
            }
        }
    },
    handlePreselectedState: (elementId, state = null) => {
        if(state) {
            document.getElementById(elementId).value = state;
        }
    }
};

(function () {
    'use strict';
    window.onload = () => {
        const genresField = document.querySelector('#genres.preselect-multi-options');
        const genres = genresField.dataset['preselected'];
        FyurrHelpers.handlePreselectedGenres('genres', genres);

        const stateField = document.querySelector('#state.preselect-option');
        const state = stateField.dataset['preselected'];
        FyurrHelpers.handlePreselectedState('state', state);

        const seekingTalentField = document.querySelector('#seeking_talent.preselect-seeking-talent');
        const seekingTalent = seekingTalentField.dataset['preselected'];
        if(seekingTalentField && seekingTalent) {
            document.querySelector(`#seeking_talent input[value='${seekingTalent}']`).checked = true;
        }
    }
})()