import { instance } from './api';

export const KeitaroAPI = {
  fetchAffiliateNetworks() {
    return instance.get<any>(`/affiliate_networks`);
  },
};
