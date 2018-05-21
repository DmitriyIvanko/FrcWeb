export abstract class MapperModel<TClient, TServer = any> {
  public mapCollectionToClient(response: TServer[]): TClient[] {
    return response.map((item) => {
      return this.transformToClient(item);
    });
  }

  public mapCollectionToServer(request: TClient[]): TServer[] {
    return request.map((item) => {
      return this.transformToServer(item);
    });
  }

  public mapInstanceToClient(response: TServer): TClient {
    return !!response ? this.transformToClient(response) : null;
  }

  public mapInstanceToServer(request: TClient | Partial<TClient>): TServer {
    return !!request ? this.transformToServer(request) : null;
  }

  protected transformToClient(response: TServer): TClient {
    return null;
  }

  protected transformToServer(request: TClient | Partial<TClient>): TServer {
    return null;
  }
}
