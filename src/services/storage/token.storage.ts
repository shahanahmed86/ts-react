import LocalStorage from './local.storage';

class TokenStorage extends LocalStorage {}

const KEY = '@token';
const token = new TokenStorage(KEY);

export default token;
