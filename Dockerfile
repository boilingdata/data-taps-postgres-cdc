FROM ubuntu
WORKDIR /root
ENV DEBIAN_FRONTEND=noninteractive 
RUN apt-get update -y && apt-get install -y aptitude less curl postgresql-14-wal2json postgresql-14 postgresql-client-14
RUN echo "wal_level = logical" >> /etc/postgresql/14/main/postgresql.conf
RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
RUN ["/bin/bash", "-c", "source ~/.nvm/nvm.sh && nvm install v20 && npm install --global yarn"]
