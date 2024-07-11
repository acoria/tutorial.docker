##How to user docker

#How to build your own image

1. **Create a project folder** with lowercase letters e.g. folder "express_server"
2. Add your application e.g. an express server
3. Compile your project
4. Add a file without extension called **dockerfile** to the root directory

5. Add a **.dockerignore** file to the root directory
```
node_modules
dist
npm-debug.log
```

6. Create an image by running **docker build -t <project_folder_name>**  
e.g. for "docker build -t express_server" an image called "express_server" will be created.
7. Run a container with **docker run -p 5005:5000 <image_name>**  
e.g. "docker run -p 5005:5002 express_server" will map the 5002 port used in the image and expose it to 5005, so the server will be reachable via 5005.  
Attention: When a server logs that it runs on a certain port, it might be missleading, such as the port 5000 here which is mapped to 5005.