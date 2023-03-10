// test
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
