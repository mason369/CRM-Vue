import http from '@/utils/http';
import { GOODS_ID, Goods, goodsIdApi } from '@/api/test/index';

class GoodsIdService implements goodsIdApi {
    getGoodsId(id: string): Promise<Goods> {
        return http.get(GOODS_ID, { q: id });
    }
}

export default new GoodsIdService();
