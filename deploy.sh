#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 拷贝 .circleci/ 文件夹至 .vuepress/dist
cp -r .circleci/ .vuepress/dist

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git config --list --global
git config --list

git init
git add -fA
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:COMCFE/Docs.git master:gh-pages

cd -
