import API_ENDPOINT from '../globals/api-endpoint';

class restoranDbSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestoran(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }
}

export default restoranDbSource;
