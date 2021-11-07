import { instance } from './api';

export const KeitaroAPI = {
  fetchImages(pictureSearch: string, page: number) {
    return instance.get<any>(
      `/?q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    );
  },
};
