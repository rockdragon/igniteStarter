#!/bin/bash

lsof -n -i4TCP:8081 | sed -n '2, 1P' | awk '{print $2}'
kill `lsof -n -i4TCP:8081 | sed -n '2, 1P' | awk '{print $2}'`
react-native start --reset-cache
