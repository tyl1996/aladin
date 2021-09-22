# aladin

[알라딘](https://www.aladin.co.kr/home/welcome.aspx)의 Open API를 Javascript로 Wrap했습니다.
사용을 위해서는 알라딘의 TTBKey가 필요합니다.

## dependencies

- axios

## required

- [aladin TTBKey | 알라딘](https://blog.aladin.co.kr/openapi)

## usage example

```
const aladin = require('./aladin/index');

console.log(aladin);

aladin.item.search({
    TTBKey: 'TTBKey',
    Query: 'query',
    output: 'js'
})
.then((response) => {
    console.log(response.data);
    return response;
})
.catch((error) => {
    console.log(error);
    return error;
})
```

Parameter로 들어가는 내용은 [OpenAPI 메뉴얼](https://docs.google.com/document/d/1mX-WxuoGs8Hy-QalhHcvuV17n50uGI2Sg_GHofgiePE/edit?ts=56a72b9e) 참고바랍니다.
