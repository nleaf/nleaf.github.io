#!/bin/bash
sudo docker-compose up -d --build
sudo chown -R ${USER} _posts
sudo chown ${USER} *.md