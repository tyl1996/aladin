const axios = require('axios');

// const aladinAPI = axios.create({
//     baseUrl: 'http://www.aladin.co.kr/ttb/api',
//     timeout: 1000,
// })

const aladin = {
    item: {
        /** 상품 검색 API */
        search(params = {}) {
            return axios.get('http://www.aladin.co.kr/ttb/api/ItemSearch.aspx', { params: params })
            // .then((result) => {
            //     console.log(result);
            //     return result;
            // })
            // .catch((err) => {
            //     console.log(err);
            //     return err;
            // })
        },
        /** 상품 리스트 API */
        list(params = {}) {
            return axios.get('http://www.aladin.co.kr/ttb/api/ItemList.aspx', { params: params })
            // .then((result) => {
            //     console.log(result);
            //     return result;
            // })
            // .catch((err) => {
            //     console.log(err);
            //     return err;
            // })
        },
        /** 상품 조회 API */
        lookup(params = {}) {
            return axios.get('http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx', { params: params })
            // .then((result) => {
            //     console.log(result);
            //     return result;
            // })
            // .catch((err) => {
            //     console.log(err);
            //     return err;
            // })
        },
        /** 중고상품 보유 매장 검색 API */
        offstorelist(params = {}) {
            return axios.get('http://www.aladin.co.kr/ttb/api/ItemOffStoreList.aspx', { params: params })
            // .then((result) => {
            //     console.log(result);
            //     return result;
            // })
            // .catch((err) => {
            //     console.log(err);
            //     return err;
            // })
        },
        
    }
}


// // TEST CODE
// console.log(aladin.item.search({TTBKey: 'apikey', Query: 'query'}))
// aladin.item.search({TTBKey: 'apikey', Query: 'query', output: 'js'})
// .then((response) => {
//     console.log(response)
//     return response
// })
// .catch((err) => {
//     console.log(err)
//     return err
// })

module.exports = aladin;
