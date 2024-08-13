## How to user docker

### How to build your own image

1. **Create a project folder** with lowercase letters e.g. folder "express_server"
2. Add your application e.g. an express server
3. Compile your project
4. Add a file without extension called **Dockerfile** to the root directory

   - FROM: Sets the base image for the subsequent instructions

     e.g. FROM node:20

   - WORKDIR: Set the working directory inside the container

     e.g. WORKDIR /usr/src/app

   - COPY: Copies files from the host system to the container

     e.g. COPY . .

   - RUN: Executes a command in the container

     e.g. RUN npm install

   - EXPOSE: Documents which ports the container listens to

     e.g. EXPOSE 5000

   - CMD: Specifies the command to run when the container starts

     e.g. EXPOSE 5000

5. Add a **.dockerignore** file to the root directory

   ```
   node_modules
   dist
   npm-debug.log
   ```

6. Create an image by running

   ```
   docker build -t <image_name> .
   e.g.
   docker build -t express_server .
   ```

   <span style="background-color: lightyellow"><b>Attention: </b>
   Do not forget the "." -> This is the location of the dockerfile.
   </span>

   The image will be created with the _latest_ tag but can also be created with an own tag. Best follow the _major.minor.patch_ pattern:

   ```
   docker build -t <image_name>:<major.minor.patch_tag> .
   e.g.
   docker build -t <image_name>:1.0.5 .
   ```

### How to run a container

#### Running a container

```
docker run -p <host_port>:<container_port> --name <container_name> <image_name>
e.g.
docker run -p 5005:5000 --name express_server express_server
```

The example will map the 5000 port used in the image and expose it to 5005, so the server will be reachable via 5005.  
 The _-p_ flag is used to specify port mapping.

<span style="background-color: lightyellow"><b>Attention: </b>
When a server logs that it runs on a certain port, it might be misleading, such as the port 5000 here which is mapped to 5005.
</span>

### How to push an image to dockerhub

To push an image, login, tag the image and push it:

```
docker login
docker tag <image_name> <dockerhub_username>/<image_name>:<tag_name>
docker push <dockerhub_username>/<image_name>:<tag_name>

e.g.
docker tag express_server ac0ria/express_server:1.0.0
docker push ac0ria/express_server:1.0.0
```

The tag _latest_ should always be tagged and pushed additionally:

```
docker tag express_server ac0ria/express_server:latest
docker push ac0ria/express_server:latest
```

### How to manage volumes

#### Three different ways to store data

- _Named Volumes_: Managed by Docker. Stored in a location on the host's filesystem.
- _Bind mounts_: Any directory or file on the host's filesystem that is mounted into the container. (Can be modified from outside the container which might be crucial and is therefore the least useful option.)
- _tmpfs mounts_: In-memory file system that is mounted into the container. They are not stored on the host's filesystem and are only kept in the memory of the host system. Can be used for sensitive or non-persistent data for the duration of the container.

#### Named volumes

##### Create a volume

```
docker volume create <volume_name>
e.g.
docker volume create user_data
```

##### Show details of a volume
```
docker volume inspect <volume_name>
e.g.
docker volume inspect user_data
```

##### Mount a volume to the directory inside the container

```
docker run -v <volume_name>:<directory_inside_container> <image_name>
e.g.
docker run -v user_data:/data/user express_server
```

<span style="background-color:blue; color:white">
TODO: Docker exec dokumentieren!
</span>
