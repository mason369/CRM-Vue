import http from '@/utils/http';
import { GOODS_ID, WeatherNow, Goods, goodsIdApi, WEATHER_NOW } from '@/api/test/index';

class GoodsIdService implements goodsIdApi {
    getGoodsId(id: string): Promise<Goods> {
        return http.get(GOODS_ID, { q: id });
    }
    getWeatherNow(): Promise<WeatherNow> {
        return http.get(WEATHER_NOW);
    }
}

export default new GoodsIdService();
