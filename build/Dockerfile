# Install the app dependencies in a full Node docker image
#FROM registry.access.redhat.com/ubi8/nodejs-18:latest

FROM registry.access.redhat.com/ubi9/nodejs-18:1-70.1697667811

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production --strict-ssl false 

# Copy the dependencies into a Slim Node docker image
#FROM registry.access.redhat.com/ubi8/nodejs-18-minimal:latest
FROM registry.access.redhat.com/ubi9/nodejs-18-minimal:1-74.1697662866

# Install app dependencies
COPY --from=0 /opt/app-root/src/node_modules /opt/app-root/src/node_modules
COPY ["package.json", "package-lock.json*",  "./"]
COPY /app  /opt/app-root/src

ENV NODE_ENV production
ENV PORT 3000

CMD ["npm", "start"]
