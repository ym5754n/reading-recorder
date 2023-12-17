# Reading Recorder
読んだ書籍の読了日と感想を記録し、いつでも振り返ることができるサービスです

※[これからはじめるReact実践入門](https://www.sbcr.jp/product/4815619480/)を参考に作成しています

## Demo
Vercel上で公開しています。学習用に公開しているサービスのため、不定期にサービスが停止する可能性があります。

[Reading Recorder](https://ym5754n-reading-recorder.vercel.app/)

## Features
- 書籍の検索機能
- 感想の記録
  - 読了日/感想の登録/削除
 
## Environment
- Docker Desktop (4.24.0)
- next (14.0.3)
- react (18)
- prisma (5.6.0)
- tailwindCSS (3.3.0)

## Usage
※事前に[こちら](https://docs.docker.jp/get-docker.html)を参照してDockerを導入してください。

ローカル環境で動作を確認する場合は下記の手順でアプリを起動し、[localhost:3000](localhost:3000)にアクセスしてください。
```
# Clone this repository
$ git clone https://github.com/ym5754n/reading-recorder.git

# Go into the repository
$ cd reading-recorder

# Install dependances
$ npm install

# For setting up DB (reffer: https://www.prisma.io/docs/getting-started/quickstart)
# Open prisma/schema.prisma with vi
# Uncomment L9-12 and comment out L15-19
# Create .env file
# add line "DATABASE_URL="file:./dev.db"

# init prisma
$ npx prisma init --datasource-provider sqlite
$ npx prisma db push

# Run the app
$ docker compose build
$ docker compose up -d
$ docker exec -it reading_recorder_app sh
$ npm run dev
```

## Note
- 学習用に作成したサービスのため、実運用での動作の保証はいたしません。利用される場合はご注意ください。

## Future
今後下記の機能追加を予定しています。
- ユーザーの認証機能
- ペジネーション機能

## Author
- 作成者: ym5754n
- E-mail: ym5754n@gmail.com
