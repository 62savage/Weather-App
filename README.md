# 첫번쨰 에러

- useEffect를 두개 썼을떄 문제점
- 정의가 되지 않았다고 나옴

```
 useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    getWeatherByCityName();
  }, [city]);
```

```
useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCityName();
    }
  }, [city]);
```
