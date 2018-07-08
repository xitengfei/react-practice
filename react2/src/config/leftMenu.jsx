const menuItems = [
    { href: "/", text: "首页", icon:"windows"},
    { href: "/access-manage", text: "权限管理", icon:"windows"},
    {   
        href: "/cutomer-manage", 
        text: "客户管理", 
        submenu:[
            { href: "/cutomer-manage/general", text: "普通客户" },
            { href: "/cutomer-manage/vip", text: "VIP客户" }        
        ]
    },
    { href: "orders-manage", text: "订单管理" },
    { href: "notic-manage", text: "公告管理" },
    { href: "ads-manage", text: "广告管理" }
]

export default menuItems