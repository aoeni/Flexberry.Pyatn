docker build --no-cache -f SQL\Dockerfile.PostgreSql -t pyatn/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t pyatn/app ../..
