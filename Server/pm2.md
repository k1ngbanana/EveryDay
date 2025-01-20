# Node

## 安装

### 1. 安装 Node.js 和 npm（如果尚未安装）

```bash
sudo npm install pm2@latest -g
```

### 2. 安装 PM2

```bash
sudo npm install -g pm2
```

### 3. 验证安装

```bash
pm2 --version
```

### 4. 使用pm2启动Node.js应用

```bash
pm2 start app.js
```

### 5. 配置PM2开机自启动

```bash
pm2 startup
```

这个命令会输出一条命令，复制并粘贴到终端执行，它会为你配置开机自启。
然后，保存当前的进程列表：

```bash
pm2 save
```

### 6. 管理应用

```bash
pm2 list
pm2 stop <app_name>
pm2 start <app_name>
pm2 restart <app_name>
pm2 delete <app_name>
```

## 每日一题

[https://github.com/k1ngbanana/EveryDay](https://github.com/k1ngbanana/EveryDay)

## 参考

