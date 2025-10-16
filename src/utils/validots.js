export function validateDestination(dest){
const errors = {}
if(!dest.name || dest.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'
if(!dest.country || dest.country.trim().length < 2) errors.country = 'Country is required.'
if(!dest.description || dest.description.trim().length < 10) errors.description = 'Description must be at least 10 characters.'
return errors
}


