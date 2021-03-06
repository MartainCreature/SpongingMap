var people = [{ name: "邵佳泓", school: "中国传媒大学", major: "计算机科学与技术" },
{ name: "刘祥烨", school: "南开大学", major: "物理学类" },
{ name: "马骁", school: "北京理工大学", major: "工科试验班（信息科学技术）" },
{ name: "李宜凡", school: "武汉大学", major: "理科试验班（资源与环境类）" },
{ name: "莫子芾", school: "吉林大学", major: "化学类" },
{ name: "张元培", school: "首都师范大学", major: "生物技术（转基因技术）" },
{ name: "陆纪安", school: "北京工业大学", major: "电子科学与技术（实验班）" },
{ name: "许松琛", school: "北京工业大学", major: "通信工程" },
{ name: "马靖彬", school: "北京林业大学", major: "自然地理与资源环境" },
{ name: "黄清源", school: "北京建筑大学", major: "建筑学（五年制）" },
{ name: "吴楠", school: "University College Dublin", major: "Computer Science" },
{ name: "吴极越", school: "北京工业大学", major: "电子信息工程" },
{ name: "籍云昊", school: "北京工业大学", major: "材料学（实验班）" },
{ name: "贠昊", school: "北京工业大学", major: "交通运输（实验班）" },
{ name: "郭睿洋", school: "北京工业大学", major: "计算机类" },
{ name: "李冀", school: "首都医科大学", major: "生物医学工程" },
{ name: "张毅卓", school: "国防科技大学", major: "国际事务与国际关系（军事情报）（男）" },
{ name: "毛宇博", school: "北京工商大学", major: "金融学（国际金融）" },
{ name: "范子睿", school: "北京工业大学", major: "机械类" },
{ name: "褚思衡", school: "首都师范大学", major: "电子信息工程" },
{ name: "张博雅", school: "北京电影学院", major: "艺术与科技" },
{ name: "常泽伟", school: "北京第二外国语学院", major: "会展经济与管理" },
{ name: "贺鹏程", school: "太原理工大学", major: "物流管理（航空物流）" },
{ name: "元楚轩", school: "重庆大学", major: "电子信息类" },
{ name: "叶泓宇", school: "北京航空航天大学" },
{ name: "赵妍", school: "首都医科大学", major: "临床医学（五年制）" },
{ name: "郝冠华", school: "首都医科大学", major: "临床医学（五年制）" },
{ name: "温婧妍", school: "首都师范大学", major: "生物技术（转基因技术）" },
{ name: "杨舒茗", school: "中山大学", major: "临床医学（五年制）" },
{ name: "赵可馨", school: "北京工业大学", major: "通信工程" },
{ name: "孙畅", school: "北京科技大学", major: "材料科学与工程" },
{ name: "刘依琳", school: "首都医科大学", major: "康复治疗学" },
{ name: "任婧怡", school: "首都经济贸易大学", major: "公共管理类" },
{ name: "刘宝华", school: "清华附中朝阳学校", position: "班主任", subject: "化学" },
{ name: "王宇鹏", school: "清华附中朝阳学校", subject: "语文" },
{ name: "郑鼎翠", school: "清华附中朝阳学校", subject: "数学" },
{ name: "李春娣", school: "清华附中朝阳学校", subject: "英语" },
{ name: "唐晖", school: "清华附中朝阳学校", subject: "物理" },
{ name: "苏荪蕊", school: "清华附中朝阳学校", subject: "生物" }];

var school = [{ name: "University College Dublin", abbr: "ucd", quantity: "1", location: "Belfield, Dublin 4, Ireland", url: "https://www.google.com/maps/place/都柏林大学学院/@53.3082312,-6.2263217,17z/data=!3m1!4b1!4m5!3m4!1s0x4867093120c83a63:0x36762af31424bfcf!8m2!3d53.3082312!4d-6.224133" },
{ name: "北京第二外国语学院", abbr: "bisu", quantity: "1", location: "北京市朝阳区定福庄南里1号", url: "https://ditu.amap.com/place/B000A7OTKU" },
{ name: "北京电影学院", abbr: "bfa", quantity: "1", location: "北京市海淀区西土城路4号", url: "https://ditu.amap.com/place/B0FFFPYWBQ" },
{ name: "北京工商大学", abbr: "btbu", quantity: "1", location: "北京市海淀区阜成路33号", url: "https://ditu.amap.com/place/B0FFGFGX5G" },
{ name: "北京工业大学", abbr: "bjut", quantity: "8", location: "北京市朝阳区平乐园100号", url: "https://ditu.amap.com/place/B000A7CYR4" },
{ name: "北京航空航天大学", abbr: "buaa", quantity: "1", location: "北京市海淀区学院路37号", url: "https://ditu.amap.com/place/B000A830XU" },
{ name: "北京建筑大学", abbr: "bucea", quantity: "1", location: "北京市西城区展览馆路1号", url: "https://ditu.amap.com/place/B000A856NT" },
{ name: "北京科技大学", abbr: "ustb", quantity: "1", location: "北京市海淀区学院路30号", url: "https://ditu.amap.com/place/B000A7I3OJ" },
{ name: "北京理工大学", abbr: "bit", quantity: "1", location: "北京市海淀区魏公村路23号", url: "https://ditu.amap.com/place/B0FFL5WAZB" },
{ name: "北京林业大学", abbr: "bjfu", quantity: "1", location: "北京市海淀区清华东路35-5号", url: "https://ditu.amap.com/place/B000A830DN" },
{ name: "国防科技大学", abbr: "nudt", quantity: "1", location: "长沙市开福区德雅路", url: "https://ditu.amap.com/place/B02DB10A00" },
{ name: "吉林大学", abbr: "jlu", quantity: "1", location: "长春市朝阳区高新技术产业开发区前进大街2699号", url: "https://ditu.amap.com/place/B0FFF4KKF3" },
{ name: "南开大学", abbr: "nku", quantity: "1", location: "天津市南开区白堤路268号", url: "https://ditu.amap.com/place/B0FFK98BFZ" },
{ name: "清华附中朝阳学校", abbr: "thc", quantity: "5", location: "北京市朝阳区柳芳南里20楼", url: "https://ditu.amap.com/place/B000A7WH0H" },
{ name: "首都经济贸易大学", abbr: "cueb", quantity: "1", location: "北京市丰台区花乡张家路口121号", url: "https://ditu.amap.com/place/B000A84AMZ" },
{ name: "首都师范大学", abbr: "cnu", quantity: "3", location: "北京市海淀区西三环北路105号", url: "https://ditu.amap.com/place/B000A7CDQS" },
{ name: "首都医科大学", abbr: "cmu", quantity: "4", location: "北京市丰台区右安门外西头条10号", url: "https://ditu.amap.com/place/B000A844ET" },
{ name: "太原理工大学", abbr: "tyut", quantity: "1", location: "太原市万柏林区千峰南路19号", url: "https://ditu.amap.com/place/B015F185FK" },
{ name: "武汉大学", abbr: "whu", quantity: "1", location: "武汉市武昌区八一路299号", url: "https://ditu.amap.com/place/B001B0IZY1" },
{ name: "中国传媒大学", abbr: "cuc", quantity: "1", location: "北京市朝阳区定福庄东街1号", url: "https://ditu.amap.com/place/B000A82ZDZ" },
{ name: "中山大学", abbr: "sysu", quantity: "1", location: "广州市新港西路135号", url: "https://ditu.amap.com/place/B0FFHNI4GV" },
{ name: "重庆大学", abbr: "cqu", quantity: "1", location: "重庆市沙坪坝区沙正街174号", url: "https://ditu.amap.com/place/B0FFJFP3Z9" }];

var major = [{ class: "金融学类", abbr: "fin", quantity: "1", major: ["金融学（国际金融）"] },
{ class: "政治学类", abbr: "pol", quantity: "1", major: ["国际事务与国际关系（军事情报）（男）"] },
{ class: "物理学类", abbr: "phy", quantity: "1", major: ["物理学类"] },
{ class: "化学类", abbr: "che", quantity: "1", major: ["化学类"] },
{ class: "地理科学类", abbr: "geo", quantity: "2", major: ["自然地理与资源环境", "理科试验班（资源与环境类）"] },
{ class: "生物科学类", abbr: "bio", quantity: "3", major: ["生物技术（转基因技术）", "生物医学工程"] },
{ class: "机械类", abbr: "mec", quantity: "1", major: ["机械类"] },
{ class: "材料类", abbr: "mat", quantity: "2", major: ["材料学（实验班）", "材料科学与工程"] },
{ class: "电子信息类", abbr: "ele", quantity: "7", major: ["电子信息类", "电子信息工程", "通信工程", "电子科学与技术（实验班）", "工科试验班（信息科学技术）"] },
{ class: "计算机类", abbr: "com", quantity: "3", major: ["计算机类", "计算机科学与技术", "Computer Science"] },
{ class: "交通运输类", abbr: "tra", quantity: "1", major: ["交通运输（实验班）"] },
{ class: "建筑类", abbr: "arc", quantity: "1", major: ["建筑学（五年制）"] },
{ class: "临床医学类", abbr: "cli", quantity: "3", major: ["临床医学（五年制）"] },
{ class: "医学技术类", abbr: "med", quantity: "1", major: ["康复治疗学"] },
{ class: "公共管理类", abbr: "pub", quantity: "1", major: ["公共管理类"] },
{ class: "物流管理与工程类", abbr: "log", quantity: "1", major: ["物流管理（航空物流）"] },
{ class: "旅游管理类", abbr: "tou", quantity: "1", major: ["会展经济与管理"] },
{ class: "设计学类", abbr: "des", quantity: "1", major: ["艺术与科技"] }];