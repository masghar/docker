# To containerize this app, follow these steps


```
docker build -t docker-app-nginx .
```
```
docker container run --name=first-docker-cont-nginx -d -p 8600:80 docker-app-nginx

```
## That's it!!! now click on following 

http://localhost:8600
