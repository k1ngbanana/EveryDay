# SSH

SSH无密码连接

## 安装

### 1. 生成 SSH 密钥对

如果还没有生成公钥和私钥，则需要生成

```bash
ssh-keygen -t rsa -b 2048
```

### 2. 将公钥添加到服务器

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.1.100
```

### 3. 测试连接

```bash
ssh root@192.168.1.100
```

## 每日一题

[https://github.com/k1ngbanana/EveryDay](https://github.com/k1ngbanana/EveryDay)

## 参考
