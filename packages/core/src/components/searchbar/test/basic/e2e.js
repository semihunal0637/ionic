const { register, navigate } = require('../../../../../scripts/e2e');

describe('searchbar: basic', () => {

  register('navigates', navigate('http://localhost:3333/src/components/searchbar/test/basic'));

});