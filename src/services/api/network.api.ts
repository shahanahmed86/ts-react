import axios, {
  AxiosError,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import { token } from '../storage';

export type NetworkResult<T> = {
  success: boolean;
  message: string;
  data: T | null | undefined;
};

class NetworkService {
  private includeHeaders(includeToken: boolean): RawAxiosRequestHeaders {
    const headers: RawAxiosRequestHeaders = {};

    if (includeToken) {
      const tokenStr = token.getStorage();
      if (tokenStr) headers.Authorization = `Bearer ${tokenStr}`;
    }

    return headers;
  }

  async networkHandler<T>(
    url: string,
    options: AxiosRequestConfig,
    includeToken = true
  ): Promise<NetworkResult<T>> {
    try {
      options.headers = this.includeHeaders(includeToken);

      const result = await axios(url, options);
      return {
        success: result.data.success,
        data: result.data.data,
        message: result.data.message,
      };
    } catch (e) {
      let msg = 'Unexpected error';

      if (e instanceof Error) msg = e.message;
      else if (e instanceof AxiosError) msg = e.response?.data || msg;

      return {
        success: false,
        message: msg,
        data: null,
      };
    }
  }

  protected getController(_controller: AbortController): AbortController {
    if (!_controller.signal.aborted) _controller.abort();
    const controller = new AbortController();

    return controller;
  }
}

export default NetworkService;
