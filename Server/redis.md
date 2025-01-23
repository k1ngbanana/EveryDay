# Node

## CentOS安装

1. 更新 YUM 软件包

```bash
sudo yum update -y
```

1. 安装 Redis

```bash
sudo yum install redis -y
```

1. 配置 Redis

```bash
sudo vim /etc/redis.conf
```

1. 启动 Redis

```bash
sudo systemctl start redis
```

1. 设置开机自启动

```bash
sudo systemctl enable redis
```

1. 查看Redis状态

```bash
sudo systemctl status redis
```

1. 测试Redis

```bash
redis-cli
# 输入ping
ping
# 如果返回PONG，则表示Redis安装成功
```

## Docker安装

1. 拉取Redis镜像

```bash
docker pull redis
```

1. 创建一个目录来存储 Redis 数据（持久化）

```bash
mkdir -p /banana/redisData
```

1. 启动Redis容器

```bash
docker run --name my-redis \
-p 6379:6379 \
-v /banana/redisData:/data \
--restart always \
-d redis redis-server --appendonly yes
```

这个命令的说明：

- --name my-redis：指定容器名称为 my-redis
- -p 6379:6379：将容器内的6379端口映射到主机的6379端口
- -v /banana/redisData:/data：将主机上的/banana/redisData目录挂载到容器内的/data目录
- --restart always：设置容器在系统重启时自动启动
- -d redis redis-server --appendonly yes：指定Redis的配置文件为/etc/redis.conf，并启用AOF持久化

## Mac安装

1. 安装Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

1. 安装Redis

```bash
brew install redis
```

1. 启动Redis

```bash
brew services start redis
```

1. 停止Redis

```bash
brew services stop redis
```

1. 查看Redis状态

```bash
brew services list
```

1. 查看Redis日志

```bash
tail -f /usr/local/var/log/redis.log
```

1. 连接Redis

```bash
redis-cli
```

## 每日一题

[https://github.com/k1ngbanana/EveryDay](https://github.com/k1ngbanana/EveryDay)

## 参考
