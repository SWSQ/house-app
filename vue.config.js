module.exports = {
  //配置是否打包map文件
  productionSourceMap: false,

  //配置输出的文件夹目录
  outputDir: './myDist',

  

  // 配置获取用户信息代理
  devServer: {
    proxy: {
      "/userApi": {
        target: "http://192.168.3.29:8080/UserMgeSvr.assx/", // 用户 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/userApi": "" // rewrite path
        }
      },
      "/houseApi": {
        target: "http://192.168.3.27:8080/BuildInfoMgeSvr.assx/", // 房源 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/houseApi": "" // rewrite path
        }
      },
      "/orderApi": {
        target: "http://192.168.3.27:8080/OrderInfoMgeSvr.assx/", // 订单 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/orderApi": "" // rewrite path
        }
      },
      "/butlerApi": {
        target: "http://192.168.3.27:8080/ButlerInfoMgeSvr.assx/", // 管家 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/butlerApi": "" // rewrite path
        }
      },
      "/collectApi": {
        target: "http://192.168.3.29:8080/CollectMgeSvr.assx/", // 收藏 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/collectApi": "" // rewrite path
        }
      },
      "/bookApi": {
        target: "http://192.168.3.27:8080/BookMgeSvr.assx/", // 预约 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/bookApi": "" // rewrite path
        }
      },
      "/accountApi": {
        target: "http://192.168.3.29:8080/AccountMgeSvr.assx/", // 账单 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/accountApi": "" // rewrite path
        }
      },
      "/alipayApi": {
        target: "http://iyyfc9.natappfree.cc", // 支付宝支付 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/alipayApi": "" // rewrite path
        }
      },
      "/outrentApi": {
        target: "http://192.168.3.27:8080/OutRentMgeSvr.assx/", // 退租续租 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/outrentApi": "" // rewrite path
        }
      },
      "/contractApi": {
        target: "http://192.168.3.29:8080/ContractMgeSvr.assx/", // 退租续租 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/contractApi": "" // rewrite path
        }
      },
      "/repairApi": {
        target: "http://192.168.3.7:8081/RepairInfoMgeSvr.assx/", // 保修 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/repairApi": "" // rewrite path
        }
      },
      "/imgUploadApi": {
        target: "http://192.168.3.7:8081/upImg/", // 保修 host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/imgUploadApi": "" // rewrite path
        }
      },
    }
  }
}
