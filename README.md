# How to Run (Locally)
1. npm install
2. npx prisma generate --schema=./src/db/schema.prisma (Initialize @prisma/client.)
3. npx nodemon src/server.ts (run server)

# PM2
1. pm2 start [name-of-server]
2. pm2 stop [name-of-server]
3. pm2 restart [name-of-server]
1. pm2 logs [name-of-server]
4. pm2 status

# Example to creating a pm2 server
sudo npm install -g pm2
pm2 start src/server.ts --name cosmic-server --interpreter npx --interpreter-args ts-node
pm2 save
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ec2-user --hp /home/ec2-user
sudo systemctl enable pm2-ec2-user

