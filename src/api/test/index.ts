import http from '@/utils/http';
export const GOODS_ID = '/api/test/getGoods';

export interface Goods {
    id?: number;
    name?: string;
    price?: number;
    stock?: number;
}

export interface goodsIdApi {
    getGoodsId(id: string): Promise<Goods>;
}

// 实现
class GoodsIdService implements goodsIdApi {
    getGoodsId(id: string): Promise<Goods> {
        return http.get(GOODS_ID, { q: id });
    }
}

export default new GoodsIdService();
