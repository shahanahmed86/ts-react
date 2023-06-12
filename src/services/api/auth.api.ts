import { VITE_BASE_URL } from '../../utils/config';
import { token } from '../storage';
import NetworkService, { NetworkResult } from './network.api';

const BASE_ROUTE = `${VITE_BASE_URL}/api/app/auth`;

type GenericObject = {
  token: string;
};

class AuthService extends NetworkService {
  private baseUrl: string;

  loginController = new AbortController();

  signupController = new AbortController();

  loggedInController = new AbortController();

  constructor(url: string) {
    super();

    this.baseUrl = url;
  }

  async login<T extends GenericObject, S>(data: S): Promise<NetworkResult<T>> {
    this.loginController = this.getController(this.loginController);
    const { signal } = this.loginController;

    const result = await this.networkHandler<T>(
      this.baseUrl,
      { method: 'POST', data, signal },
      false
    );

    if (result.success) token.setStorage(result.data!.token);

    return result;
  }

  async signup<T extends GenericObject, S>(data: S): Promise<NetworkResult<T>> {
    this.signupController = this.getController(this.signupController);
    const { signal } = this.signupController;

    const url = `${this.baseUrl}/signup`;
    const result = await this.networkHandler<T>(
      url,
      { method: 'POST', data, signal },
      false
    );

    if (result.success) token.setStorage(result.data!.token);

    return result;
  }

  async loggedIn<T>(): Promise<NetworkResult<T>> {
    this.loggedInController = this.getController(this.loggedInController);
    const { signal } = this.loggedInController;

    const result = await this.networkHandler<T>(this.baseUrl, {
      method: 'GET',
      signal,
    });

    return result;
  }
}

const authService = new AuthService(BASE_ROUTE);

export default authService;
