/* eslint-disable @typescript-eslint/camelcase */
export default {
  lang: '简体中文',
  auto: '自动',

  close: '关闭',
  no: '否',
  yes: '是',
  cancel: '取消',
  ok: '确定',

  start: '开始',
  stop: '停止',
  submit: '提交',
  edit: '编辑',
  delete: '删除',
  todo: '待办',
  resume: '恢复',
  pause: '暂停',
  force_start: '强制继续',
  info: '信息',
  reset: '重置',
  login: '登录',
  search: '搜索',
  refresh: '刷新',
  location: '位置',
  rename: '重命名',
  trigger_application_shutdown: '退出qBittorrent',
  reannounce: '重新通告',
  recheck: '重新检查',

  username: '用户名',
  password: '密码',

  name: '名称',
  size: '大小',
  progress: '进度',
  status: '状态',
  seeds: '做种',
  peers: '用户',
  dl_speed: '下载速度',
  up_speed: '上传速度',
  eta: '剩余时间',
  ratio: '比率',
  added_on: '添加时间',

  settings: '设置',

  logs: '日志',
  light: '亮色',
  dark: '暗色',

  all: '全部',
  category: '分类',
  uncategorized: '未分类',
  others: '其他',
  sites: '站点',
  files: '文件',
  less: '更少',
  more: '更多',
  feed: '订阅',
  date: '日期',
  query: '查询',
  plugin: '插件',
  action: '操作',
  search_engine: '搜索引擎',

  preferences: {
    change_applied: '配置已保存',
    downloads: '下载',
    adding_torrent: '添加 torrent 时',
    create_subfolder_enabled: '为多个文件的 Torrent 创建子目录',
    start_paused_enabled: '不要自动开始下载',
    auto_delete_mode: '完成后删除 .torrent 文件',
    preallocate_all: '为所有文件预分配磁盘空间',
    incomplete_files_ext: '为不完整的文件添加扩展名 .!qB',
    saving_management: '保存管理',
    auto_tmm_enabled: '默认 Torrent 管理模式',
    torrent_changed_tmm_enabled: '当 Torrent 分类修改时',
    save_path_changed_tmm_enabled: '当默认保存路径修改时',
    category_changed_tmm_enabled: '当分类保存路径修改时',
    auto_mode: '自动',
    manual_mode: '手动',
    switch_torrent_mode_to_manual: '切换受影响的 Torrent 至手动模式',
    move_affected_torrent: '重新定位受影响的 Torrent',
    save_path: '默认保存路径',
    temp_path: '保存未完成的 torrent 到',
    export_dir: '复制 .torrent 文件到',
    export_dir_fin: '复制下载完成的 .torrent 文件到',

    speed: '速度',
    global_rate_limits: '全局速度限制',
    alternate_rate_limits: '备用速度限制',
    alternate_schedule_enable_time: '设置备用速度限制的启用时间',
    apply_speed_limit: '设置速度限制',
    dl_limit: '下载 (KiB/s)',
    up_limit: '上传 (KiB/s)',
    zero_for_unlimited: '0 为无限制',
    schedule_from: '从',
    schedule_to: '到',
    scheduler_days: '时间',
    limit_utp_rate: '对 µTP 协议进行速度限制',
    limit_tcp_overhead: '对传送总开销进行速度限制',
    limit_lan_peers: '对本地网络用户进行速度限制',

    connection: '连接',
    bittorrent: 'BitTorrent',

    webui: 'Web UI',
    data_update_interval: '数据更新频率(ms)',
    webui_remote_control: 'Web 用户界面(远程控制)',
    ip_address: 'IP 地址',
    ip_port: '端口',
    enable_upnp: '使用我的路由器的 UPnP / NAT-PMP 功能来转发端口',
    authentication: '验证',
    web_ui_username: '用户名',
    web_ui_password: '密码',
    bypass_local_auth: '对本地主机上的客户端跳过身份验证',
    bypass_auth_subnet_whitelist: '对 IP 子网白名单中的客户端跳过身份验证',
    web_ui_session_timeout: '会话超时',
    web_ui_ban_duration: '禁止',
    web_ui_max_auth_fail_count: '连续失败后禁止客户端次数',
    web_ui_seconds: '秒',
    new_password: '更改当前的密码...',

    display_speed_in_title: '在网页标题显示当前速度',
  },

  title: {
    _: '标题',
    add_torrents: '添加种子',
    delete_torrents: '删除种子',
    set_category: '设置分类',
    edit_tracker: '编辑 Tracker',
    set_location: '修改文件位置',
    recheck_torrents: '重新检查种子',
  },

  label: {
    switch_to_old_ui: '切换到原版 UI',
    create_subfolder: '创建子文件夹',
    start_torrent: '开始种子',
    skip_hash_check: '跳过哈希校验',
    in_sequential_order: '按顺序下载',
    first_and_last_pieces_first: '先下载首尾文件块',

    also_delete_files: '同时删除文件',

    auto_tmm: '自动种子管理',

    adding: '添加…',
    reloading: '刷新中…',
    deleting: '删除中…',
    moving: '移动中…',
    moved: '已移动',
    next: '下一步',
    back: '返回',
    confirm: '确定',
    reannounced: '已重新通告',
    rechecking: '重新检查中…',
    dht_nodes: '%{smart_count} 节点',
  },

  msg: {
    'item_is_required': '%{item}不能为空',
  },

  dialog: {
    trigger_exit_qb: {
      title: '退出 qBittorrent',
      text: '您确定要退出qBittorrent吗？',
    },
    add_torrents: {
      placeholder: '将种子拖到这里上传，\n或者点击右边的附件图标来选择。',
      hint: '每行一个链接',
    },
    delete_torrents: {
      msg: '确定要删除选中的种子吗？',
      also_delete_same_name_torrents: '同时删除 %{smart_count} 个同名的种子',
    },
    set_category: {
      move: '确定要移动选中的种子到分类 %{category} 吗？',
      reset: '确定重置选中的种子的分类吗？',
      also_move_same_name_torrents: '同时移动 %{smart_count} 个同名的种子',
    },
    switch_locale: {
      msg: '确定要切换语言为 %{lang} 吗？\n这将会刷新页面。',
    },
    recheck_torrents: {
      msg: '确定要重新检查选中的种子吗？',
    },
    rss: {
      add_feed: '添加订阅',
      feed_url: '订阅 URL',
      auto_refresh: '自动刷新',
      auto_download: '自动下载',
      delete_feeds: '确定要删除选中的订阅吗？',
      date_format: '%{date}（%{duration} 之前）',
    },
    rss_rule: {
      add_rule: '添加规则',
      new_rule_name: '新规则的名称',
      delete_rule: '确定要删除选中的规则吗？',
      title: 'RSS 自动下载',
      rule_settings: '规则设置',

      use_regex: '使用正则',
      must_contain: '必须包含',
      must_not_contain: '必须排除',
      episode_filter: '剧集过滤',
      smart_episode: '使用智能剧集过滤',
      assign_category: '分配分类',

      apply_to_feeds: '应用到订阅',
    },
  },

  category_state: {
    _: '状态',

    downloading: '下载',
    seeding: '做种',
    completed: '完成',
    resumed: '恢复',
    paused: '暂停',
    active: '活动',
    inactive: '空闲',
    errored: '错误',
  },

  torrent_state: {
    error: '错误',
    missingFiles: '文件丢失',
    uploading: '上传中',
    pausedUP: '完成',
    queuedUP: '排队上传',
    stalledUP: '上传',
    checkingUP: '上传校验',
    forcedUP: '强制上传',
    allocating: '分配空间',
    downloading: '下载中',
    metaDL: '获取信息',
    pausedDL: '暂停下载',
    queuedDL: '排队下载',
    stalledDL: '下载',
    checkingDL: '下载校验',
    forceDL: '强制下载',
    checkingResumeData: '快速校验',
    moving: '移动中',
    unknown: '未知',
  },
}