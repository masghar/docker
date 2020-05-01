# To containerize this app, follow these steps


```
docker build -t docker-app-httpd .
```
```
docker container run --name=first-docker-cont-httpd -d -p 8500:80 docker-app-httpd

```
## That's it!!! now click on following 

http://localhost:8500
