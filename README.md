#Instalando o Node
https://docs.npmjs.com/getting-started/installing-node
linux: sudo apt-get install nodejs

#Instalando NPM
linux: sudo apt-get install npm

#Instalando o Bower
http://bower.io/
sudo npm install -g bower

#Instalando o PhantomJS
http://phantomjs.org/download.html

#Instalando o CasperJS
http://docs.casperjs.org/en/latest/installation.html
sudo npm install -g casperjs

#Instalando Resemble (comparador de imagens)
https://github.com/Huddle/Resemble.js
npm install resemblejs

#Executando
casperjs test features/agiletesters/home/home_top.js --verbose --log-level=debug --ignore-ssl-errors=yes --ssl-protocol=tlsv1