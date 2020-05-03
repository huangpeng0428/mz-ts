export default {
    methods: {
      beforeImgUpload (limitSize = 300) {
        return (file) => {
          const UPLOAD_LIMIT: number = limitSize // kb
          const image: any = new Image()
          const isAllow: boolean = ['image/jpg', 'image/png', 'image/jpeg'].indexOf(file.type) > -1
          const isLtLimit: boolean = file.size / 1024 <= UPLOAD_LIMIT
          let msg: string
          if (!isAllow) {
            msg = '只能上传 jpg, png, jpeg 格式的图片！'
            this.$message.error(msg)
            return false
          }
          return new Promise((resolve, reject) => {
            image.src = URL.createObjectURL(file)
            image.onload = () => {
              if (!isLtLimit) {
                msg = `图片大小不能超过 ${UPLOAD_LIMIT}KB ！`
                reject(new Error(msg))
              } else {
                resolve()
              }
              if (msg) this.$message.error(msg)
            }
          })
        }
      }
    }
  }
  