# Nginx

Nginx（发音为“Engine-X”）是一个高性能的开源 Web 服务器和反向代理服务器，同时也可以用作负载均衡器和 HTTP 缓存。它最初是为了处理高并发连接而设计的，并且非常擅长处理大量并发连接。

## 安装

1. 更新系统

```bash
sudo yum update -y
```

1. 安装 EPEL 仓库
   Nginx 在 CentOS 默认的仓库中不可用，你需要先安装 EPEL (Extra Packages for Enterprise Linux) 仓库：

CentOS 8 需要先安装 epel-release 仓库
```bash
# 这条命令将会取消注释并替换掉原来指向 mirror.centos.org 的镜像源，将其指向 CentOS 的存档服务器 vault.centos.org。通常这种做法是在 CentOS 8 结束生命周期后，切换到存档源来获取旧版本的 CentOS 软件包。
### CentOS 8需要先做执行这个指令
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
# 更新缓存
yum makecache
### CentOS 8结束

# 安装 epel-release 仓库
sudo yum install epel-release -y
```

1. 安装 Nginx

```bash
sudo yum install nginx -y
```

1. 启动 Nginx

```bash
sudo systemctl start nginx
```

1. 启用开机自启动

```bash
sudo systemctl enable nginx
```

1. 检查 Nginx 状态

```bash
sudo systemctl status nginx
```

1. 验证安装
   在浏览器中访问你的服务器 IP 地址或域名，应该能看到 Nginx 的默认欢迎页面。例如：

`http://your_server_ip`

如果看到了 Nginx 的欢迎页面，说明安装成功。

1. 配置 Nginx（可选）
   Nginx 的配置文件通常位于 /etc/nginx/nginx.conf，你可以根据需求修改配置文件以适应你的应用场景。修改后需要重新加载 Nginx 配置：

```bash
sudo systemctl reload nginx
```

## 为什么使用约定式提交

## 每日一题

[https://github.com/k1ngbanana/EveryDay](https://github.com/k1ngbanana/EveryDay)

## 参考
