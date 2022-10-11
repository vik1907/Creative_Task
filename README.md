## Description ##

Assignment Task of Creative Adv Tech

## Build the Docker image

My Docker Hub account is vikrant20. So I will build and push the image to Docker Hub

```bash
$ docker build -f docker/dockerfile -t vikrant20/vikrant205 .
```

## Publish the Docker image

```bash
# Log in to Docker Hub:
$ docker login
# Enter your username and password

# Push the image to docker hub 
$ docker push vikrant20/vikrant205:latest
```

## Deploy the application in Kubernetes

```bash
$ helm install vikrant205 vikrant205/ --values vikrant205/values.yaml
```

## How to test

Get the application URL by running these commands 
```bash
$ export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=vikrant205,app.kubernetes.io/instance=vikrant205" -o jsonpath="{.items[0].metadata.name}")
$ export CONTAINER_PORT=$(kubectl get pod --namespace default $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
$ echo "Visit http://127.0.0.1:8080 to use your application"
$ kubectl --namespace default port-forward $POD_NAME 8080:$CONTAINER_PORT
```
Now, you can goto http://127.0.0.1:8080/api/counter to test my application.
The value of vikrant205 will be increase by 1
