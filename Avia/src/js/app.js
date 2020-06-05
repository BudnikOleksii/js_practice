import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';
import ticketsUI from './views/tickets';
import currencyUI from './views/currency';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    const form = formUI.form;

    // Events
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    });

    // Handlers
    async function initApp() {
        await locations.init();
        formUI.setAutocompleteData(locations.shortCitiesList);
    }

    async function onFormSubmit() {
        // data from inputs
        const origin = locations.getCityCodeByKey(formUI.originValue),
              destination = locations.getCityCodeByKey(formUI.destinationValue),
              depart_date = formUI.departDateValue,
              return_date = formUI.returnDateValue,
              currency = currencyUI.currencyValue;

        // CityCode, CityCode, 2020-06, 2020-07
        await locations.fetchTickts({
            origin,
            destination,
            depart_date,
            return_date,
            currency
        });

        console.log(locations.lastSearch);
        ticketsUI.renderTickets(locations.lastSearch);
    }
});