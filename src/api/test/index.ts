// test
export const GOODS_ID = '/api/test/getGoods';
// http://www.weather.com.cn/data/sk/101190408.html
export const WEATHER_NOW = '/data/sk/101190408.html';

export interface Goods {
    id?: number;
    name?: string;
    price?: number;
    stock?: number;
}
export interface WeatherNow {
    weatherinfo: Record<string, never>;
}
export interface goodsIdApi {
    getGoodsId(id: string): Promise<Goods>;
    getWeatherNow(): Promise<WeatherNow>;
}
