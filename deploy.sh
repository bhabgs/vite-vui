###
 # @abstract: JianJie
 # @version: 0.0.1
 # @Author: bhabgs
 # @Date: 2021-03-01 10:37:56
 # @LastEditors: bhabgs
 # @LastEditTime: 2021-03-02 16:09:43
### 
#!/usr/bin/env sh

# abort on errors
set -e


# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '发布文档'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://bhabgs.github.io/vite-vui-docs
# git push -f https://github.com/bhabgs/vite-vui-docs.git master //本地推送

git push -f git@github.com:bhabgs/vite-vui-docs.git master:gh-pages # 密钥推送

cd -