npm run-script build

git add .
git commit -m 'syncing website & github'
git pull
git push -u origin master

aws s3 sync build/ s3://bchampion.ca
aws s3 sync build/ s3://www.bchampion.ca
